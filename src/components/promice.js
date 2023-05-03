import React, { useState } from "react";
import "./style.css";

const PromiceComponent = ({ onChangeLanguage, data }) => {
  const [selected, setSelected] = useState();

  return (
    <>
      <div
        className="bg-white p-5 text-center"
        style={{ fontFamily: "Oxygen ,sans-serif!important", direction: "ltr" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          fill="currentColor"
          class="bi bi-clipboard-check-fill"
          viewBox="0 0 16 16"
          style={{ color: "#5d647a" }}
        >
          <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
        </svg>
        <h1>{data.promice}</h1>
        <h5
          className="mt-1 p-3 text-justify"
          style={{
            fontFamily: "Oxygen ,sans-serif!important",
            direction: "ltr",
            color: "#5d647a",
          }}
        >
          {data.promicebott}
        </h5>
        <div className="row mt-5">
          <div className="col-sm-7">
            {" "}
            <img
              className="mt-5 mx-5"
              style={{
                width: "60%",
                height: "60%",
                position: "relative",
                left: "150px",
                left: "-100px",
              }}
              src="https://osoulmodern.com/wp-content/uploads/2022/07/company-icon3d-290x300.png"
              alt="image is not loaded"
            />
          </div>
          <div className="col-sm-4">
            <div className="   rounded shadow p-2 mt-5 mb-5 ">
              <div className="d-flex" style={{ height: "67px" }}>
                <h5
                  style={{
                    position: "relative",
                    top: "-92px",
                    left: "-10px",
                    fontFamily: "revert-layer",
                    fontSize: "150px",
                    fontWeight: "600",
                    color: "#5d647a",
                  }}
                >
                  1
                </h5>
                <h5>{data.cardTitle}</h5>
              </div>
              <p className="text-center">{data.cardDisc}</p>
            </div>
            <div className="   rounded shadow p-2 mt-5 mb-5  ">
              <div className="d-flex" style={{ height: "67px" }}>
                <h5
                  style={{
                    position: "relative",
                    top: "-92px",
                    left: "-10px",
                    fontFamily: "revert-layer",
                    fontSize: "150px",
                    fontWeight: "600",
                    color: "#5d647a",
                  }}
                >
                  2
                </h5>
                <h5>{data.cardTitle}</h5>
              </div>
              <p className="text-center">{data.cardDisc}</p>
            </div>
            <div className="   rounded shadow p-2 mt-5 mb-5  ">
              <div className="d-flex" style={{ height: "67px" }}>
                <h5
                  style={{
                    position: "relative",
                    top: "-92px",
                    left: "-10px",
                    fontFamily: "revert-layer",
                    fontSize: "150px",
                    fontWeight: "600",
                    color: "#5d647a",
                  }}
                >
                  3
                </h5>
                <h5>{data.cardTitle}</h5>
              </div>
              <p className="text-center">{data.cardDisc}</p>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default PromiceComponent;
