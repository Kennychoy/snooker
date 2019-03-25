import React, { Component } from 'react';
import Map from 'react-js-google-maps';


const setMarker = (map) => {
	const position = { lat: 40.6700, lng: -73.9400 };
	const marker = new window.google.maps.Marker({
		position: position,
		map: map,
		animation: window.google.maps.Animation.BOUNCE
	});
	var cityCircle = new window.google.maps.Circle({
		strokeColor: '#15b095',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: '#15b095',
		fillOpacity: 0.35,
		map: map,
		center: position,
		radius: 500
	});
}

class GoogleMap extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render() {
		var mapOptions = {
			zoom: 15,
			center: {lat: 40.6700, lng: -73.9400},
			styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
        };
	return (
		<div id="map">
			<Map
				id="map1"
				apiKey=API_KEY
				mapOptions= {mapOptions}
				style={{ width: "100%", height: '650px' }}
				onLoad={setMarker}
			/>
		</div>
		);
	}

}

export default GoogleMap;
