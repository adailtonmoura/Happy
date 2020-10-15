import mapMarkerImg from "../images/markmap.svg";
import Leaflet from "leaflet";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [50, 60],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default mapIcon;
