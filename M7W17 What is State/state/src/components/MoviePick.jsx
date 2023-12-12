import React, { useState } from "react";

const MoviePick = () => {
  const [movies, setMovie] = useState(["Matrix", "Raiders", "Matrix Reloaded"])
  const [selected, setSelected] = useState("");
  const [input, setInput] = useState("")
  const pickMovie = (movie) => {
    setSelected(movie)
  }
  const addMovie = (e) => {
    e.preventDefault();

    console.log(movies);
    const newMovieArr = movies;
    
    newMovieArr.push(input)
    console.log(newMovieArr);
    setMovie(newMovieArr)
  }

  const updateInput = (e) => {
    console.log('Hello!');
    setInput(e.target.value)
  }

  return (
    <div>
      <h1 >Movie Pick</h1>
      {movies.map((movie, idx) => {
        return <p key={idx} onClick={() => pickMovie(movie)}>{movie}</p>
      })}
      <h1>You have picked: {selected}</h1>
      <form onSubmit={addMovie}>
        <label htmlFor="">Add Movie</label>
        <input type="text" value={input} onChange={updateInput} />
        <button>Add</button>
      </form>
    </div>
  )
};

export default MoviePick;
