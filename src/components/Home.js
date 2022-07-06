import React from 'react';
import { Link } from "react-router-dom";
import C215 from '../image/C215.jpg'


const Home = () => {
    return (
        <div>
            <h1> Hello You !!</h1>

            <Link to="/descriptionC215">
        <img src={C215} alt="grout" />
      </Link>

        </div>
    );
};

export default Home;