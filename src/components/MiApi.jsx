import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Icon } from "leaflet";
import icon from "../../public/img/marker-icon.png";
import iconShadow from "../../public/img/marker-shadow.png";
import { getRegionGlosa } from "../helper/regiones";

let iconUbicacion = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
});

const Main = ({ data, isLoading }) => {

  data.sort((a, b) => a.fk_region - b.fk_region);  
 
  return (
    <main>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          {data ? (
            data.map((item,index) => (
              <article className="card" key={index}>
                <h2 className="card-title">{item.local_nombre}</h2>
                <MapContainer
                  center={[item.local_lat, item.local_lng]}
                  zoom={13}
                  scrollWheelZoom={false}
                  className="card-img"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[item.local_lat, item.local_lng]}
                    icon={iconUbicacion}
                    key={index}
                  >
                    <Popup>
                      Horario Atencion : {item.funcionamiento_hora_apertura} -{" "}
                      {item.funcionamiento_hora_cierre}
                    </Popup>
                  </Marker>
                </MapContainer>
                <section className="card-body">
                  <p className="card-text">Dirección: {item.local_direccion}</p>
                  <p className="card-text">Comuna: {item.comuna_nombre}</p>
                  <p className="card-text">
                    Región: {getRegionGlosa(item.fk_region)}
                  </p>
                </section>
              </article>
            ))
          ) : (
            <>Sin informacion</>
          )}
        </>
      )}
    </main>
  );
};

export default Main;
