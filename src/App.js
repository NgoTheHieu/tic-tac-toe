import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner,Button} from "react-bootstrap"
import Navigation from "./components/Navigation"
import Banner from "./components/Banner"
import Bottom from "./components/Bottom"
import ReactModal from "react-modal"
import Dropdown from "react-dropdown"
import YouTube from '@u-wave/react-youtube';
import 'react-dropdown/style.css';
const apiKey = `9d096b4dac12b79351687a03fc133138`;
const options = ['SortByPopularity',"SortByRating"];
const defaultOption = options[0];
const customStyles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  },
  content: {
    top: "10%",
    left: "10%",
    right: "10%",
    width: "80%",
    bottom: "10%",
    height: "80%",
    outline: "none",
    padding: "20px",
    overflow: "auto",
    background: "#000",
    borderRadius: "4px",
    position: "absolute",
    border: "1px solid #ccc",
    WebkitOverflowScrolling: "touch"
  }
}
function App() {
  let [movieList, setMovieList] = useState(null);
  let [genreList, setGenreList] = useState(null);
  let [movieGenre, setMovieGenre] = useState([]);
  let [pageList,setPageList] = useState(1);
  let [allGenre,setAllGenre] = useState([]);
  let [openModal,setOpenModal] = useState(false);
  let [originalList,setOriginalList] = useState([]);
  let [isOpen,setIsOpen] = useState(false);
  let [trailerKey,setTrailerKey] = useState(null);
  let [key,setKey] = useState(null);
  const showModal = async(id) => {
    console.log("hehehe")
    setOpenModal(true)
    getVideo(id)
  }
  const closeModal = () => {
    console.log("hehehe")
    setOpenModal(false)
  }
  //https://api.themoviedb.org/3/movie/338762/videos?api_key=9d096b4dac12b79351687a03fc133138&language=en-US`
  //Get Video
  const getVideo = async(id) =>{
    const apiKey = `9d096b4dac12b79351687a03fc133138`;
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );
    alert(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
    const data = await response.json();
    const items = data.results;
    const trailerkey = items[Math.floor(Math.random()*items.length)];
    setKey(trailerkey.key)
  }
  //
  const getNowPlayingMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageList}`;
    let data = await fetch(url);
    let result = await data.json();
    setMovieList(result.results);
    setOriginalList(result.results);
    console.log("movies", result);
    return result.results;
  };
  //GET GENRE DATA // 
  const sortMovieListByRating = () => {
    let sortArray = {movieList}
  }
  const getGenreData = async()=>{
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    let data = await fetch(url);
    let result = await data.json();
    setAllGenre(result)
    movieList = getNowPlayingMovie()
    console.log(movieList);
    console.log("Genre List:", result);
    //setGenreList(result2);
  //*End Of Get Genre Data*//
  }
  //*Hooking State//
  useEffect(() => {
    getNowPlayingMovie();
    getGenreData();
  }, []);
  //*End of Hooking State*/
  //*Rendering Data function*//
  if (movieList === null && genreList === null) {
    return <div className="App App-header" style={{ color: 'white' }}>
    <Spinner 
      animation="border"
      variant="info" />
    <h3>loading...</h3>
  </div>

  }
  return (
    <div className="App">
      <div>
      <ReactModal 
      style={customStyles}
      className="App"
      isOpen={openModal}
      
      >
  <button onClick={()=>closeModal()}> Hide Modal </button>
  <YouTube
            video={key}
            autoplay
            width = '100%'
            height = '100%'
            />
</ReactModal>
      </div>
      <div>
      
     
      </div>
      <div>
        
        <Navigation />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <MovieList 
        genreList={genreList} 
        movieList={movieList}
        showModal={showModal}
        getVideo={getVideo}
        trailerKey={trailerKey}
        key={key}
        //trailerkey={trailerkey} 
        />
      </div>
      <div>
        
      <Button class="d-flex justify-content-center banner" id="load-more-btn" variant="info" type="button" onClick={()=>getNowPlayingMovie()}>
          Load More
        </Button>
      </div>
      <div>
        
      <Button class="d-flex justify-content-center banner" id="load-more-btn" variant="info" type="button" onClick={()=>showModal()}>
          This show modal
        </Button>
      </div>
      <div>  
      <Dropdown options={options} value={defaultOption} placeholder="Sort by which" />;
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
}

export default App;