import React from "react";

import { Link } from "react-router-dom";

import { FiPlus, FiArrowRight } from "react-icons/fi";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "../styles/pages/orphanages-map.css";

import mapMarkerImg from "../images/markmap.svg";
import mapIcon from "../utils/mapIcon";

export default function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Aracaju</strong>
          <span>Sergipe</span>
        </footer>
      </aside>

      <Map
        center={[-10.9456501, -37.0735264]}
        zoom={14.12}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker position={[-10.9456501, -37.0735264]} icon={mapIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Orfanato Beta
            <Link to="orphanages/1">
              <FiArrowRight />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}
