import React, {useState} from "react";
import './sidebar.css';
import Home from './Home';
import logo from './images/web-logo.png';
import search  from './images/search.svg';
import home from './images/home.png';
import trend from './images/trend.png';
import movie from './images/movies.png';
import tv from './images/tv.png';
import arrow from './images/arrow.svg';
import settings from './images/settings.svg';


var IMG_URL = "https://image.tmdb.org/t/p/w500";
const Sidebar = () => {
    const [ className ,setclass] = useState('sidebar');
    const [data , setdata] = useState([]);
    const [cont ,setcont] = useState('container');
    const [searc,setsearc] = useState('');
const discover =() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28").then(
      Response => Response.json()
    ).then(
      data => setdata(data.results)
    );
}

const trending =() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28").then(
      Response => Response.json()
    ).then(
      data => setdata(data.results)
    );
}
const movies =() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28").then(
      Response => Response.json()
    ).then(
      data => setdata(data.results)
    );
}
const tvs =() => {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28").then(
      Response => Response.json()
    ).then(
      data => setdata(data.results)
    );
}
const submithandler =(e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=5f212fdc2e5c2bc385fb3506fe3f0e28&query=${searc}`).then(
      Response => Response.json()
    ).then(
      data => setdata(data.results)
    );
}
  return(
        <div>
         <div className={className} onMouseLeave={()=> setclass("sidebar") } onMouseOver={() => setcont("container1")} onMouseOut={() => setcont("container")} >
            <div className="logo">
               <img src={logo} alt="logo"></img>
               <h4>MOVIEFLIX</h4>
              </div>
              <form onSubmit={submithandler}>
                  <input type="text"  placeholder="Search Movies.." value={searc} onChange={(e) => setsearc(e.target.value)}></input>
              <button>
                  <img src={search} alt="search" className="search"></img>
                  <h3 id="se-text">Search</h3>
              </button>
              </form>
              <div className="expand">
              <button onClick={()=> setclass("sidebaractive")}>
                  <img src={arrow} alt="expand" className="arrow"></img>
                  <h3>Expand</h3>
              </button>
              </div>
             <button onClick={discover}>
                  <img src={home} alt="home" className="home"></img>
                  <h3>Home</h3>
              </button>
              <button onClick={trending}>
                  <img src={trend} alt="trending" className="icons" id="icon"></img>
                  <h3>Trending</h3>
              </button>
              <button onClick={movies}>
                  <img src={movie} alt="movies" className="icons" id="movie"></img>
                  <h3>Movies</h3>
              </button>
              <button onClick={tvs}>
                  <img src={tv} alt="tv" className="icons"></img>
                  <h3>TV Shows</h3>
              </button>
              <div className="footer">
              <button>
                  <img src={settings} alt="settings" className="settings" id="spin"></img>
                  <h3>Settings</h3>
              </button>
              </div>
           </div>
           <Home data={data} img={IMG_URL} cont={cont} />
           </div>
    );
}
 


export default Sidebar;