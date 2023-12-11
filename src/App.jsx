import { useEffect, useState } from "react";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import SideDetails from "./components/SideDetails";

function App() {
  const [showMapView, setShowMapView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  // Uçuş Detaylarını getirir
  useEffect(() => {
    dispatch(getFlights());
  });

  // Haritayı açar ve detaylarını göstericeğimiz uçağın id'sini alır
  const openDetail = (id) => {
    // detalarını göstericeğimiz uçağın id'sini alma
    setDetailId(id);
    // haritayı açar
    setShowDetail(true);
  };

  return (
    <>
      <Header />
      {/* LEFT DETAİLS  */}
      {showDetail && <SideDetails detailId={detailId} setShowDetail={setShowDetail} />}
      <div className="view-buttons">
        <button
          className={showMapView ? "active" : ""}
          onClick={() => setShowMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!showMapView ? "active" : ""}
          onClick={() => setShowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {/* Hangi bileşenin ekrana basılacağını karar verme */}
      {showMapView ? (
        <MapView openDetail={openDetail} setShowDetail={setShowDetail} />
      ) : (
        <ListView openDetail={openDetail} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
