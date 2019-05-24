import React from 'react';
import MapViewDirections from 'react-native-maps-directions'

// import { Container } from './styles';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyAP4cVS6uAi_EujOgCoObZcNWFvSjC3NaI"
        strokeWidth={3}
        strokeColor="#222"
    />
);
export default Directions;
