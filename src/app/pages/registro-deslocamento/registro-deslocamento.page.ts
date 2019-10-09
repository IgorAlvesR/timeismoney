import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapOptions, GoogleMapsEvent, MyLocation, GoogleMapsAnimation } from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DeslocamentoService } from 'src/app/servicos/deslocamento.service';
import { Deslocamento } from 'src/app/Models/deslocamento';
import * as moment from 'moment'
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
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
    private loadingCtrl: LoadingController,
    public nativeGeocoder: NativeGeocoder,
    public geolocation: Geolocation,
    private deslocamentoService: DeslocamentoService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private authService: AutenticacaoService,
    private angularFirestore: AngularFirestore,
    private locationAccuracy: LocationAccuracy,
    private androidPermissions: AndroidPermissions
  ) { }

  ngOnInit() {
    this.checkGPSPermission()
    this.mapElement =  this.mapElement.nativeElement
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
    this.deslocamento.id = await this.angularFirestore.createId();
    this.deslocamento.data = await moment().locale('pt-br').format('YYYY-MM-DD')
    this.deslocamento.hora = await moment().locale('pt-br').format('LTS')
    this.deslocamento.userId = await this.authService.getAuth().currentUser.uid

    try {
      await this.deslocamentoService.registrar(this.deslocamento)
      await this.loading.dismiss()
      await this.navCtrl.navigateRoot('registro-hora-extra')
      
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
    this.map = await GoogleMaps.create(this.mapElement, mapOptions)
    await this.addOriginMarker()
    try {
      await this.map.one(GoogleMapsEvent.MAP_READY)
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
      await this.map.addMarkerSync({
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
          this.askToTurnOnGPS();
        } else {
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
