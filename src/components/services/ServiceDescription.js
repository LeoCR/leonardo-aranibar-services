import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Subtitle from "../Subtitle";
import $ from "jquery";
import ServiceDescriptionBGMobile from "./backgrounds/ServiceDescriptionBGMobile";
import ServiceDescriptionBG from "./backgrounds/ServiceDescriptionBG";
export const ServiceDescription = (props) => {
  let [serviceTitle, setServiceTitle] = useState("Web Development");
  let [isMobile, setIsMobile] = useState(false);

  const setBodyClass = () => {
    try {
      setTimeout(() => {
        if (window.innerWidth <= 580) {
          document.querySelector("body").classList.add("is-mobile");
          setIsMobile(true);
        } else {
          document.querySelector("body").classList.remove("is-mobile");
          setIsMobile(false);
        }
        document.querySelector("body").classList.add("watching-service-desc");
        $(".nav_btn").each(function () {
          if ($(this).data("href") === "#services") {
            $(this).addClass("selected");
          }
        });
      }, 200);
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
      } else if (splitLocalUrl[2] === "ecommerce") {
        setServiceTitle("E-commerce");
      }
      if (window.innerWidth <= 580) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
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
      document.querySelector("body").classList.remove("watching-service-desc");
      setTimeout(() => {
        $(".data_fill").css({ fill: "#fff", "fill-opacity": 1 });
        $("#shopping-cart").css({ fill: "#ffb462" });
        $("#path_cloud_middle_svg_service").css({ fill: "#ffa542" });
        $("#path_cloud_service").css({ fill: "#ffa542" });
      }, 100);
    } catch (error) {
      console.log("An error occurs in ServiceDescription.goBack()");
    }
  };
  var svgService = "";
  if (isMobile || window.innerWidth <= 920) {
    svgService = <ServiceDescriptionBGMobile />;
  } else {
    svgService = <ServiceDescriptionBG />;
  }
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
      {svgService}
      <article id="service_description_content">{props.children}</article>
    </div>
  );
};
export default ServiceDescription;
