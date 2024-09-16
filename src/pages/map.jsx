// // // import React from 'react';
// // // import { GoogleMap, useJsApiLoader, Autocomplete } from '@react-google-maps/api';

// // // const containerStyle = {
// // //   width: '400px',
// // //   height: '400px'
// // // };

// // // const initialCenter = {
// // //   lat: -3.745,
// // //   lng: -38.523
// // // };

// // // function Mymap() {
// // //   const { isLoaded } = useJsApiLoader({
// // //     id: 'google-map-script',
// // //     googleMapsApiKey: "AIzaSyBkajV4Zw_rqe408Mbv99F2Ctytu85Q45g", // Replace with your actual API key
// // //     libraries: ['places'] // Load the places library
// // //   });

// // //   const [map, setMap] = React.useState(null);
// // //   const [autocomplete, setAutocomplete] = React.useState(null);
// // //   const [center, setCenter] = React.useState(initialCenter); // Ensure center is initialized

// // //   const onLoad = React.useCallback(function callback(map) {
// // //     const bounds = new window.google.maps.LatLngBounds(center);
// // //     map.fitBounds(bounds);

// // //     setMap(map);
// // //   }, [center]); // Add center as a dependency

// // //   const onUnmount = React.useCallback(function callback(map) {
// // //     setMap(null);
// // //   }, []);

// // //   const onPlaceChanged = () => {
// // //     if (autocomplete) {
// // //       const place = autocomplete.getPlace();
// // //       if (place.geometry) {
// // //         const newCenter = {
// // //           lat: place.geometry.location.lat(),
// // //           lng: place.geometry.location.lng()
// // //         };
// // //         setCenter(newCenter);
// // //         if (map) {
// // //           map.panTo(newCenter);
// // //           map.setZoom(15); // Adjust zoom level as needed
// // //         }
// // //       }
// // //     }
// // //   };

// // //   return isLoaded ? (
// // //     <div>
// // //       <div style={{ marginBottom: '10px' }}>
// // //         <Autocomplete
// // //           onLoad={autocomplete => setAutocomplete(autocomplete)}
// // //           onPlaceChanged={onPlaceChanged}
// // //         >
// // //           <input
// // //             type="text"
// // //             placeholder="Search for a place"
// // //             style={{
// // //               width: '100%',
// // //               padding: '10px',
// // //               boxSizing: 'border-box'
// // //             }}
// // //           />
// // //         </Autocomplete>
// // //       </div>
// // //       <GoogleMap
// // //         mapContainerStyle={containerStyle}
// // //         center={center}
// // //         zoom={10}
// // //         onLoad={onLoad}
// // //         onUnmount={onUnmount}
// // //       >
// // //         { /* Child components, such as markers, info windows, etc. */ }
// // //       </GoogleMap>
// // //     </div>
// // //   ) : <></>;
// // // }

// // // export default React.memo(Mymap);

// // import React from 'react';
// // import { GoogleMap, useJsApiLoader, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

// // const containerStyle = {
// //   width: '400px',
// //   height: '400px'
// // };

// // const initialCenter = {
// //   lat: -3.745,
// //   lng: -38.523
// // };

// // function Mymap() {
// //   const { isLoaded } = useJsApiLoader({
// //     id: 'google-map-script',
// //     googleMapsApiKey: "AIzaSyBkajV4Zw_rqe408Mbv99F2Ctytu85Q45g", // Replace with your actual API key
// //     libraries: ['places'] // Load the places library
// //   });

// //   const [map, setMap] = React.useState(null);
// //   const [autocompleteStart, setAutocompleteStart] = React.useState(null);
// //   const [autocompleteEnd, setAutocompleteEnd] = React.useState(null);
// //   const [center, setCenter] = React.useState(initialCenter);
// //   const [directionsResponse, setDirectionsResponse] = React.useState(null);

// //   const onLoad = React.useCallback(function callback(map) {
// //     setMap(map);
// //   }, []);

// //   const onUnmount = React.useCallback(function callback(map) {
// //     setMap(null);
// //   }, []);

// //   const onPlaceChanged = (autocomplete, type) => {
// //     if (autocomplete) {
// //       const place = autocomplete.getPlace();
// //       if (place.geometry) {
// //         const newCenter = {
// //           lat: place.geometry.location.lat(),
// //           lng: place.geometry.location.lng()
// //         };
// //         if (type === 'start') {
// //           setCenter(newCenter);
// //           calculateAndDisplayRoute();
// //         } else {
// //           // Trigger route calculation if endpoint is updated
// //           calculateAndDisplayRoute();
// //         }
// //       }
// //     }
// //   };

// //   const calculateAndDisplayRoute = () => {
// //     if (autocompleteStart && autocompleteEnd) {
// //       const directionsService = new window.google.maps.DirectionsService();
// //       directionsService.route(
// //         {
// //           origin: autocompleteStart.getPlace().geometry.location,
// //           destination: autocompleteEnd.getPlace().geometry.location,
// //           travelMode: window.google.maps.TravelMode.DRIVING,
// //         },
// //         (result, status) => {
// //           if (status === window.google.maps.DirectionsStatus.OK) {
// //             setDirectionsResponse(result);
// //             map.fitBounds(result.routes[0].bounds); // Fit map to route bounds
// //           } else {
// //             console.error(`error fetching directions ${result}`);
// //           }
// //         }
// //       );
// //     }
// //   };

// //   return isLoaded ? (
// //     <div>
// //       <div style={{ marginBottom: '10px' }}>
// //         <Autocomplete
// //           onLoad={autocomplete => setAutocompleteStart(autocomplete)}
// //           onPlaceChanged={() => onPlaceChanged(autocompleteStart, 'start')}
// //         >
// //           <input
// //             type="text"
// //             placeholder="Start location"
// //             style={{
// //               width: '100%',
// //               padding: '10px',
// //               boxSizing: 'border-box'
// //             }}
// //           />
// //         </Autocomplete>
// //         <Autocomplete
// //           onLoad={autocomplete => setAutocompleteEnd(autocomplete)}
// //           onPlaceChanged={() => onPlaceChanged(autocompleteEnd, 'end')}
// //         >
// //           <input
// //             type="text"
// //             placeholder="End location"
// //             style={{
// //               width: '100%',
// //               padding: '10px',
// //               boxSizing: 'border-box'
// //             }}
// //           />
// //         </Autocomplete>
// //       </div>
// //       <GoogleMap
// //         mapContainerStyle={containerStyle}
// //         center={center}
// //         zoom={10}
// //         onLoad={onLoad}
// //         onUnmount={onUnmount}
// //       >
// //         {directionsResponse && (
// //           <DirectionsRenderer
// //             directions={directionsResponse}
// //           />
// //         )}
// //       </GoogleMap>
// //     </div>
// //   ) : <></>;
// // }

// // export default React.memo(Mymap);

// import React from 'react';
// import { GoogleMap, useJsApiLoader, Autocomplete, DirectionsRenderer, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const initialCenter = {
//   lat: -3.745,
//   lng: -38.523
// };

// function Mymap() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyBkajV4Zw_rqe408Mbv99F2Ctytu85Q45g", // Replace with your actual API key
//     libraries: ['places'] // Load the places library
//   });

//   const [map, setMap] = React.useState(null);
//   const [autocompleteStart, setAutocompleteStart] = React.useState(null);
//   const [autocompleteEnd, setAutocompleteEnd] = React.useState(null);
//   const [directionsResponse, setDirectionsResponse] = React.useState(null);
//   const [startLocation, setStartLocation] = React.useState(null);
//   const [endLocation, setEndLocation] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   const onPlaceChanged = (autocomplete, type) => {
//     if (autocomplete) {
//       const place = autocomplete.getPlace();
//       if (place.geometry) {
//         const newLocation = {
//           lat: place.geometry.location.lat(),
//           lng: place.geometry.location.lng()
//         };
//         if (type === 'start') {
//           setStartLocation(newLocation);
//         } else {
//           setEndLocation(newLocation);
//         }
//         // Recalculate and update the route whenever either location changes
//         calculateAndDisplayRoute();
//       }
//     }
//   };

//   const calculateAndDisplayRoute = () => {
//     if (startLocation && endLocation) {
//       const directionsService = new window.google.maps.DirectionsService();
//       directionsService.route(
//         {
//           origin: startLocation,
//           destination: endLocation,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             setDirectionsResponse(result);
//             // Adjust bounds to fit both points
//             const bounds = new window.google.maps.LatLngBounds();
//             bounds.extend(startLocation);
//             bounds.extend(endLocation);
//             map.fitBounds(bounds); // Fit map to include both points
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );
//     }
//   };

//   return isLoaded ? (
//     <div>
//       <div style={{ marginBottom: '10px' }}>
//         <Autocomplete
//           onLoad={autocomplete => setAutocompleteStart(autocomplete)}
//           onPlaceChanged={() => onPlaceChanged(autocompleteStart, 'start')}
//         >
//           <input
//             type="text"
//             placeholder="Start location"
//             style={{
//               width: '100%',
//               padding: '10px',
//               boxSizing: 'border-box'
//             }}
//           />
//         </Autocomplete>
//         <Autocomplete
//           onLoad={autocomplete => setAutocompleteEnd(autocomplete)}
//           onPlaceChanged={() => onPlaceChanged(autocompleteEnd, 'end')}
//         >
//           <input
//             type="text"
//             placeholder="End location"
//             style={{
//               width: '100%',
//               padding: '10px',
//               boxSizing: 'border-box'
//             }}
//           />
//         </Autocomplete>
//       </div>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={initialCenter} // Use initial center to start
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         {directionsResponse && (
//           <DirectionsRenderer
//             directions={directionsResponse}
//           />
//         )}
//         {startLocation && (
//           <Marker
//             position={startLocation}
//             label="Start"
//           />
//         )}
//         {endLocation && (
//           <Marker
//             position={endLocation}
//             label="End"
//           />
//         )}
//       </GoogleMap>
//     </div>
//   ) : <></>;
// }

// export default React.memo(Mymap);


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

