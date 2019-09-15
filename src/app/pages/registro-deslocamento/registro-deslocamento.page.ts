import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, LoadingController, NavController, ToastController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapOptions, GoogleMapsEvent, MyLocation, GoogleMapsAnimation } from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DeslocamentoService } from 'src/app/servicos/deslocamento.service';
import { Deslocamento } from 'src/app/Models/deslocamento';
import * as moment from 'moment'
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


@Component({
  selector: 'app-registro-deslocamento',
  templateUrl: './registro-deslocamento.page.html',
  styleUrls: ['./registro-deslocamento.page.scss'],
})
export class RegistroDeslocamentoPage implements OnInit {

  @ViewChild('map') mapElement: any
  private loading: any
  private map: GoogleMap
  reserveGeocodingResults: string = ""
  private deslocamento: Deslocamento = {}

  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    public nativeGeocoder: NativeGeocoder,
    public geolocation: Geolocation,
    private deslocamentoService: DeslocamentoService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private locationAccuracy: LocationAccuracy,
    private authService: AutenticacaoService,
    private androidPermissions: AndroidPermissions
  ) { }

  ngOnInit() {
    this.mapElement = this.mapElement.nativeElement
    this.mapElement.style.width = '100%'
    this.mapElement.style.height = '50%'
    this.loadMap()
  }

  async reverseGeocoding(latitude, longitude) {
    var options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    }
    await this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => this.deslocamento.localizacao = result[0].subAdministrativeArea)
  }

  async registrarDeslocamento() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' })
    await this.loading.present()
    await this.geolocation.getCurrentPosition().then((position) => {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      this.reverseGeocoding(latitude, longitude)
    })
    this.deslocamento.data = moment().locale('pt-br').format('L')
    this.deslocamento.hora = moment().locale('pt-br').format('LTS')
    this.deslocamento.userId = this.authService.getAuth().currentUser.uid

    try {
      await this.deslocamentoService.registrar(this.deslocamento)
      await this.navCtrl.navigateRoot('registro-hora-extra')
      await this.loading.dismiss()
    } catch (error) {
      this.toastCtrl.create({ message: error, duration: 2000 })
    }

  }

  async loadMap() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' })
    await this.loading.present()
    
    const mapOptions: GoogleMapOptions = {
      controls: {
        zoom: false
      }
    }
    await this.checkGPSPermission()
    this.map = await GoogleMaps.create(this.mapElement, mapOptions)
    await this.addOriginMarker()
    try {
      await this.map.one(GoogleMapsEvent.MAP_READY)
      await this.addOriginMarker()
    } catch (error) {
      console.error(error)
    }

  }

  async addOriginMarker() {
    try {
      const myLocation: MyLocation = await this.map.getMyLocation()
      await this.map.moveCamera({
        target: myLocation.latLng,
        zoom: 18
      })
      this.map.addMarkerSync({
        title: 'Localização Atual',
        icon: '#000',
        animation: GoogleMapsAnimation.DROP,
        position: myLocation.latLng
      })
    } catch (error) {
      console.error(error)
    } finally {
      this.loading.dismiss()
    }
  }



  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              this.askToTurnOnGPS();
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
  }




}
