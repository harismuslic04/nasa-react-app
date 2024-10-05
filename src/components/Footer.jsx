import React from "react";

export default function Footer(props) {
  const { showModal, handleToggleModal, data } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>APOD Project</h1>
      </div>
      <button>
        <i
          onClick={handleToggleModal}
          id="ikona"
          className="fa-solid fa-circle-info"
        ></i>
      </button>
    </footer>
  );
}
