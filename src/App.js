
import './App.css'
import SearchIcon from './search.svg'
import { useEffect } from "react";
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=a7da8a7';
const Movie1={ 
  "Title": "Superman",
  "Year": "1978",
  "imdbID": "tt0078346",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}


function App() {

  const searcMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)
    const data=await response.json();
    console.log(data.Search);

  }
  useEffect(()=>{
    searcMovies('superman')
  },[])
  return (
    <div className="app">
     <h1>Movie land</h1>
     <div className="search">
      <input placeholder='Search for movies' value='Spiderman' onChange={()=>{}}/>
    <img src='{SearchIcon}' onClick={()=>{}}/>
     </div>
     <div className='container'>
      <div className='movie'>
        <div>
          <p>{Movie1.Year}</p>
          </div>
          <div>
            <img src={Movie1.Poster} alt={Movie1.title}/>
          </div>
      </div>
      
     </div>
    </div>
  );
}

export default App;
