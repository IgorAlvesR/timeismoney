import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Environment, GoogleMap, GoogleMaps, GoogleMapOptions, GoogleMapsEvent, MyLocation, GoogleMapsAnimation } from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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


  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    public nativeGeocoder: NativeGeocoder,
    public geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.mapElement = this.mapElement.nativeElement
    this.mapElement.style.width = '100%'
    this.mapElement.style.height = '50%'
    this.loadMap()
  }


  reverseGeolocation() {
    this.geolocation.getCurrentPosition().then((position) => {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      this.reverseGeocoding(latitude, longitude)
      alert(this.reserveGeocodingResults)
    })
  }


  reverseGeocoding(latitude, longitude) {
    var options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    }
    this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then((results) => {
      this.reserveGeocodingResults = JSON.stringify(results[0])
    })
  }



  async loadMap() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' })
    await this.loading.present()

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyClpig7cd7BKXZTeN93Xi7mUn57uzSFcqc',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyClpig7cd7BKXZTeN93Xi7mUn57uzSFcqc'
    });

    const mapOptions: GoogleMapOptions = {
      controls: {
        zoom: false
      }
    }

    this.map = GoogleMaps.create(this.mapElement, mapOptions)
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
}
