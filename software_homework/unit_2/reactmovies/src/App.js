import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import {useEffect, useState} from 'react'

function App() {

  const apiKey = '742de9db'
  const [movie, setMovie] = useState(null) 
  const getMovie = async (searchTerm) => {
    try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    console.log(response)
    const data = await response.json() 
    console.log(data)     
    setMovie(data) ; 
    } catch (error) {
      console.log(error) 
    }
  }

  useEffect(() => {
    const movies = [ 'Donnie Darko', 'Princess Mononoke', 'Eternal Sunshine of the Spotless Mind', "Knight Before Christmas", "Home Alone"]
    getMovie(Math.floor(Math.random() * movies.length)) 
  }, [])
  
  return (
    <div className="App">
      <Form moviesearch = {getMovie} />
      <MovieDisplay movie={movie}/> 
      
    </div>
  );
}

export default App;
