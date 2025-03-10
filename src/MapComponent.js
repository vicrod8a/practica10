import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig";

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "locations"), (snapshot) => {
      const updatedLocations = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const validLocations = updatedLocations.filter((loc) => !isNaN(loc.lat) && !isNaN(loc.lng));
      setLocations(validLocations);
    });

    return () => unsubscribe();
  }, []);

  const handleMarkerClick = (loc) => {
    setSelectedLocation(loc);
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={[20.5937, -100.3922]} zoom={10} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]} eventHandlers={{
            click: () => handleMarkerClick(loc),
          }}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedLocation && (
        <div style={{ marginTop: "20px" }}>
          <h3>Información de la Ubicación Seleccionada</h3>
          <p><strong>Nombre:</strong> {selectedLocation.name}</p>
          <p><strong>Latitud:</strong> {selectedLocation.lat}</p>
          <p><strong>Longitud:</strong> {selectedLocation.lng}</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
