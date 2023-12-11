import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

const MapView = ({openDetail}) => {
  const store = useSelector((store) => store);
  return (
    <div>
      
      {/* MAP */}
      <MapContainer
        center={[-26.07352002512046, 133.9413103472673]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Her bir uçuş için ekranda marker basma */}
        {store?.flights.map((fly) => (
          <Marker key={fly.id} position={[fly.lat, fly.lan]}>
            <Popup>
              <div className="popup">
                <span>Kod: {fly.code}</span>
                <button onClick={() => openDetail(fly.id)} >Detay</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
