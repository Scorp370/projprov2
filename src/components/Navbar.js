import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../image/logo-street-art.png'


export default function Navbar() {
  return (
    <nav>

         

        <Link to="/"> Accueil </Link>
        <Link to="/groot"> Image Groot </Link>
        <Link to="/home"> <img src={logo} alt="logo" height={"100px"} width={"100px"} /></Link>
        <Link to= "/groot2"> image groot click </Link>
        <Link to= "/description"> description groot </Link>
        <Link to= "/contact"> contact </Link>




    </nav>
  )
}

