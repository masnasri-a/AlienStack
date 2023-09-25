"use client";
import React, { useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {
  const [center, setCenter] = useState({ lat: -6.202518, lng: 106.784413 });
  function MapPlaceholder() {
    return (
      <p>
        Map of London.{" "}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  }

  return (
    <div>
      <MapContainer
        center={center}
        zoom={10}
        style={{ width: "100%", height: "800px" }}
        scrollWheelZoom={true}
        placeholder={<MapPlaceholder />}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default Maps;
