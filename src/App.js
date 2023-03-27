import { useEffect, useState } from 'react';
import AddFavourites from './AddFavourites';
import './App.css';
import FavMoviess from './FavMoviess';
import MovieList from './MovieList';
import Navbar from './Navbar';


function App() {

  const [movies, setMovies] = useState([]);
  // console.log(movies);
  const [favourite,setFavourite] = useState([]);
  // console.log(favourite);
  const [search,setSearch] = useState("");
  // console.log(search);


  const getMovieRequest = async (search)=>{
    // const url = "http://www.omdbapi.com/?i=tt3896198&apikey=6eaa7d22"
    const url = `http://www.omdbapi.com/?s=${search}&apikey=263d22d8`
    // const url = "http://www.omdbapi.com/?i=tt3896198&apikey=6eaa7d22"

    const response = await fetch(url)

    const responseJson = await response.json();

    // console.log(responseJson, "data");
      
    if(responseJson.Search){

      setMovies(responseJson.Search)
 
    }


  }



  useEffect(() => {
 
    getMovieRequest(search)
  
  }, [search]);


  const addFavouriteMovies = (movie)=>{

    const newFavouriteList = [...favourite,movie]
  
    setFavourite(newFavouriteList)


  }



  return (
   <>

  
    <Navbar search={search} setSearch={setSearch}/>

   <MovieList movies={movies} favouritescomponent={AddFavourites}  handFaavouritesClick={addFavouriteMovies} />
   
   <FavMoviess movies={favourite} favouritescomponent={AddFavourites}  handFaavouritesClick={addFavouriteMovies} />
   </>
  );
}

export default App;
