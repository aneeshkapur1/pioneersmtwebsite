import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {} from 'googlemaps';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocationsComponent implements OnInit, AfterViewInit {

  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 28.4595;
  lng = 77.0266;

  ngOnInit(): void {
  
  }

  markers = [
    {
      position: new google.maps.LatLng(28.4595,77.0266),
      map: this.map,
      title: "Gurgaon Head Office"
    },
    {
      position: new google.maps.LatLng(28.5395, 77.3910),
      map: this.map,
      title: "Noida Office"
    },
    {
      position: new google.maps.LatLng(18.5204, 73.8567),
      map: this.map,
      title: "Pune Office"
    },
    {
      position: new google.maps.LatLng(12.9716, 77.5946),
      map: this.map,
      title: "Bengaluru Office"
    },
    {
      position: new google.maps.LatLng(13.0827, 80.2707),
      map: this.map,
      title: "Chennai Office"
    },
    {
      position: new google.maps.LatLng(19.0760, 72.8777),
      map: this.map,
      title: "Mumbai Office"
    },
  ];

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 4
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "Our Offices"
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    //Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    //Adding default marker to map
    this.marker.setMap(this.map);

    //Adding other markers
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }

}
