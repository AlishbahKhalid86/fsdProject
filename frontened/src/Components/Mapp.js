import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const position = [33.7167, 73.0667];

const Map = () => {
  return (
    <MapContainer center={position} zoom={10}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[33.7167, 73.0667]}>
        <div>
          <h3>Blood Bank 1</h3>
          <p>Address: Islamabad, Pakistan</p>
        </div>
      </Marker>
      <Marker position={[33.7267, 73.0667]}>
        <div>
          <h3>Blood Bank 2</h3>
          <p>Address: Islamabad, Pakistan</p>
        </div>
      </Marker>
      <Marker position={[33.7367, 73.0667]}>
        <div>
          <h3>Blood Bank 3</h3>
          <p>Address: Islamabad, Pakistan</p>
        </div>
      </Marker>
    </MapContainer>
  );
};

export default Map;