import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey='AIzaSyC-0wZK4QIMROxSg93uIctMRf-p-keq9Ww'
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;