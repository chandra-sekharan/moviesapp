import React, { useState } from "react";
import './Home.css';


const Home = (props) => {
    return(
        <div>
            <div className={props.cont} >
                <h1>Discover Movies</h1>
              {props.data.map(movie =>
               <div className="card">
                 <img src={props.img+movie.poster_path} alt={movie.title}></img>
                 <div className="overview">
                     <p>{movie.title}</p>
                 </div>
                </div> 
              )}
            </div>
            
        </div>
    );
}

export default Home;