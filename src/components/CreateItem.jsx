import React from "react";
import * as db from "../firestore";
import Error from "./shared/Error";

function CreateItem({ user, listId }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const [movie, setMovie] = React.useState([]);
  const [error, setError] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);

  async function handleCreateItem(event) {
    try {
      event.preventDefault();
      setSubmitting(true)
      const item = { name, item };
      await db.createListItem({ user, listId , item })
      setName('');
      setLink('');
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }

  }

const getMovie = async (event) => {
  setMovie(event.target.value);
  await fetch(`https://www.omdbapi.com/?apikey=eafe3ca6&t=${movie}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)

    return (
      <div className="movieThing">
        {data.map((movieThing) => (
          <div className="user">{movieThing}</div>
        ))}
      </div>
    );
  })

};


  return (
    <>
      <form onSubmit={handleCreateItem} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
        
        <input
          className="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          name="name"
          placeholder="Movie name"
          onChange={getMovie}
          value={movie}
          type="text"
        />
 
        <input
          className="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-green-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          name="link"
          placeholder="Add link"
          type="url"
          onChange={event => setLink(event.target.value)}
          value={link}
          required
        />
        <button
        disabled={submitting}
          type="submit"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          {submitting ? "Creating..." : "Create"}
        </button>
      </form>
      <Error message={error} /> 
    </>
  );
}

export default CreateItem;
