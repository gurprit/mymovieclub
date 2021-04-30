import React, { useEffect } from 'react';
import * as db from "../firestore";
import Error from "./shared/Error";

function CreateItem({ user, listId }) {
  //const [name, setName] = React.useState('');
  const [movieTitle, setMovieTitle] = React.useState('');
  const [moviePoster, setMoviePoster] = React.useState('');
  const [userRating, setUserRating] = React.useState('');
  
  //const [link, setLink] = React.useState('');
  const [userReview, setUserReview] = React.useState('');
  const [movie, setMovie] = React.useState([]);
  const [movieData, setMovieData] = React.useState([]);
  const [error, setError] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const isMovieData = false;

  async function handleCreateItem(event) {
    try {
      event.preventDefault();
      setSubmitting(true)
      
      const item = { movieTitle, moviePoster, userReview, userRating};
      await db.createListItem({ user, listId , item })
      //setName('');
      setMovieTitle('');
      setMoviePoster('');
      setUserReview('');
      setUserRating('');
      //setLink('');
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }

  }
  
const getMovie = async (event) => {
  setMovie(event.target.value);
  // if 2 or more characters are input
  if (movie.length >= 2) {
    await fetch(`https://www.omdbapi.com/?apikey=eafe3ca6&t=${movie}`)
    .then(response => response.json())
    .then(data => {
      setMovieData(data);
      isMovieData = true;
      setMovieTitle(movieData.Title);
      setMoviePoster(movieData.Poster);
    })
  }
};



useEffect(() => {
  console.log(movieData)
}, [movieData])


  return (
    <>
      <form onSubmit={handleCreateItem} className="lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
        
        <input
          className="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          name="title"
          placeholder="Movie name"
          onChange={getMovie}
          value={movie}
          type="text"
      />      

      <div className="movie-info-tile">
        <div className="movie-info-tile__col1">
          <img src={movieData?.Poster} alt={movieData?.Title}></img>
        </div>
        <div className="movie-info-tile__col2">
          <h1>{movieData?.Title}</h1>
          <p>{movieData?.Year}</p>
          <p>{movieData?.Director}</p>
          <p>{movieData?.Plot}</p>
        </div>
      </div>

        <input
          className="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 mr-4 mb-4  mb-5"
          name="review"
          placeholder="Add Review"
          type="text"
          onChange={event => setUserReview(event.target.value)}
          value={userReview}
          required
        />

        <select id="userRating" required onChange={event => setUserRating(event.target.value)} className="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0">
            <option>Your rating</option>
            <option id="1">1</option>
            <option id="2">2</option>
            <option id="3">3</option>
            <option id="4">4</option>
            <option id="5">5</option>
            <option id="6">6</option>
            <option id="7">7</option>
            <option id="8">8</option>
            <option id="9">9</option>
            <option id="10">10</option>
        </select>


        <button
        disabled={submitting}
          type="submit"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 mb-10"
        >
          {submitting ? "Posting..." : "Post Review"}
        </button>




      </form>
      <Error message={error} /> 




      
    </>
  );
}

export default CreateItem;
