import React from "react";
import { Link } from "react-router-dom";
import grout from "../grout.jpg";
import andre from "../image/Andréfrancoisponcet.jpg";
import louis from "../image/Louis XIII.jpg";
import louism from "../image/Louis Malle.jpg";
import rose from "../image/Rose de Provins.jpg";
import sean from "../image/Seanconnery.jpg";
import umberto from "../image/Umberto ECO.jpg";

export default function Grout2() {
  return (
    <div>
      <Link to="/description">
        <img src={grout} alt="grout" />
      </Link>
      <Link to="/description2">
        <img src={andre} alt="andre" height={"230px"} width={"230px"} />
      </Link>
      <Link to="/description3">
        <img src={louis} alt="louis" height={"230px"} width={"230px"} />
      </Link>
      <Link to="/description4">
        <img src={louism} alt="louism" height={"230px"} width={"230px"} />
      </Link>
      <Link to="/description5">
        <img src={rose} alt="rose" height={"230px"} width={"230px"} />
      </Link>
      <Link to="/description">
        <img src={sean} alt="sean" height={"230px"} width={"230px"} />
      </Link>
      <Link to="/description">
        <img src={umberto} alt="umberto" height={"230px"} width={"230px"} />
      </Link>
    </div>
  );
}
