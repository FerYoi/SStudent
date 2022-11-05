import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Mi Información</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Estado </b>
        </span>
        <span>Hibrido</span>
      </div>

      <div className="info">
        <span>
          <b>Vivo en </b>
        </span>
        <span>México</span>
      </div>

      <div className="info">
        <span>
          <b>Trabajo en </b>
        </span>
        <span>Hertec</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
