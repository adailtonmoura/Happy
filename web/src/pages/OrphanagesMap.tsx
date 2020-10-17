import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { FiPlus, FiArrowRight } from "react-icons/fi";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import api from "../services/api";

import mapMarkerImg from "../images/markmap.svg";
import mapIcon from "../utils/mapIcon";

import "../styles/pages/orphanages-map.css";

interface Orphanage{
  id: number
  latitude: number,
  longitude: number,
  name: string;
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);
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
        {orphanages.map((orphanage) => {

          return(
          <Marker key={orphanage.id}  position={[orphanage.latitude, orphanage.longitude]} icon={mapIcon}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`orphanages/${orphanage.id}`}>
                <FiArrowRight />
              </Link>
            </Popup>
          </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}
