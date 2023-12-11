import axios from "axios";
import { useEffect, useState } from "react";
import { detailOpt } from "../helpers/constants";
import Loader from "./Loader";

const SideDetails = ({ detailId, setShowDetail }) => {
  const [d, setD] = useState(null);
  useEffect(() => {
    setD(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOpt
      )
      .then((res) => setD(res.data));
  }, [detailId]);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close" onClick={() => setShowDetail(false)}>
          X
        </p>
        {!d ? (
          <Loader/>
        ) : (
          <>
            <h2>{d.aircraft.model?.text}</h2>
            <h2>{d.aircraft.model?.code}</h2>
            <p>Kuyruk No: {d.aircraft?.registration}</p>
            <img src={d.aircraft?.images?.large[0]?.src} />
            <p>Şirket: {d.airline?.short}</p>
            <p>
              Kalkış:{" "}
              <a href={d.airport.origin?.website}>{d.airport.origin.name}</a>
            </p>
            <p>
              Kalkış:{" "}
              <a href={d.airport.destination?.website}>
                {d.airport.destination?.name}
              </a>
            </p>
            <p>
              Durum{" "}
              <span className="status" style={{ background: d.status.icon }}>
                {d.status.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetails;
