

import React from 'react';
import { GoogleMap, useJsApiLoader, Autocomplete, DirectionsRenderer, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const initialCenter = {
  lat: 	9.939093,
  lng: 78.121719
};

function Mymap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkajV4Zw_rqe408Mbv99F2Ctytu85Q45g", // Replace with your actual API key
    libraries: ['places'] // Load the places library
  });

  const [map, setMap] = React.useState(null);
  const [autocompleteStart, setAutocompleteStart] = React.useState(null);
  const [autocompleteEnd, setAutocompleteEnd] = React.useState(null);
  const [directionsResponse, setDirectionsResponse] = React.useState(null);
  const [startLocation, setStartLocation] = React.useState(null);
  const [endLocation, setEndLocation] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onPlaceChanged = (autocomplete, type) => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        if (type === 'start') {
          setStartLocation(newLocation);
        } else {
          setEndLocation(newLocation);
        }
        // Recalculate and update the route whenever either location changes
        calculateAndDisplayRoute();
      }
    }
  };

  const calculateAndDisplayRoute = () => {
    if (startLocation && endLocation) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: startLocation,
          destination: endLocation,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
            if (map) {
              // Adjust bounds to fit both points
              const bounds = new window.google.maps.LatLngBounds();
              bounds.extend(startLocation);
              bounds.extend(endLocation);
              map.fitBounds(bounds); // Fit map to include both points
            }
          } else {
            console.error(`error fetching directions ${status}: ${result}`);
          }
        }
      );
    }
  };

  return isLoaded ? (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Autocomplete
          onLoad={autocomplete => setAutocompleteStart(autocomplete)}
          onPlaceChanged={() => onPlaceChanged(autocompleteStart, 'start')}
        >
          <input
            type="text"
            placeholder="Start location"
            style={{
              width: '100%',
              padding: '10px',
              boxSizing: 'border-box'
            }}
          />
        </Autocomplete>
        <Autocomplete
          onLoad={autocomplete => setAutocompleteEnd(autocomplete)}
          onPlaceChanged={() => onPlaceChanged(autocompleteEnd, 'end')}
        >
          <input
            type="text"
            placeholder="End location"
            style={{
              width: '100%',
              padding: '10px',
              boxSizing: 'border-box'
            }}
          />
        </Autocomplete>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={initialCenter} // Use initial center to start
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
          />
        )}
        {startLocation && (
          <Marker
            position={startLocation}
            label="Start"
          />
        )}
        {endLocation && (
          <Marker
            position={endLocation}
            label="End"
          />
        )}
      </GoogleMap>
    </div>
  ) : <></>;
}

export default React.memo(Mymap);

