import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Subtitle from "../Subtitle";

export const ServiceDescription = (props) => {
  let [serviceTitle, setServiceTitle] = useState("Web Development");
  const setBodyClass = () => {
    try {
      if (window.innerWidth <= 580) {
        document.querySelector("body").classList.add("is-mobile");
      } else {
        document.querySelector("body").classList.remove("is-mobile");
      }
    } catch (error) {
      console.log(
        "An error occurs in ServiceDescription.js setBodyClass() " + error
      );
    }
  };
  useEffect(() => {
    try {
      window.addEventListener("load", setBodyClass());
      window.addEventListener("resize", setBodyClass());
      const targetUrl = window.location.pathname.toString();
      const splitLocalUrl = targetUrl.split("/");
      if (splitLocalUrl[2] === "web-development") {
        setServiceTitle("Web Development");
      } else if (splitLocalUrl[2] === "cloud-development") {
        setServiceTitle("Cloud Development");
      } else if (splitLocalUrl[2] === "e-commerce") {
        setServiceTitle("E-commerce");
      }
    } catch (error) {
      console.log("An error occurs in ServiceDescription.useEffect() " + error);
    } finally {
      return () => {
        window.removeEventListener("load", setBodyClass());
      };
    }
  }, []);
  const goBack = () => {
    try {
    } catch (error) {
      console.log("An error occurs in ServiceDescription.goBack()");
    }
  };
  return (
    <div id="service-description" style={{ with: "100%" }}>
      <Link
        to="/"
        data-href="/"
        style={{ zIndex: 90, background: "#000000 !important" }}
        className="btn btn-large btn-back"
        id="btn-back"
        onClick={() => goBack()}
      >
        Back
      </Link>
      <Subtitle
        xSvg="480"
        style={{ maxWidth: "420px" }}
        txtSubTitle={serviceTitle}
      />
      <article id="service_description_content">{props.children}</article>
    </div>
  );
};
export default ServiceDescription;
