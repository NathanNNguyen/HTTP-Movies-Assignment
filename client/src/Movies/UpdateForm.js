import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './styles.css';

const initialValue = {
  title: '',
  director: '',
  metascore: '',
}

const UpdateForm = () => {
  const [movie, setMovie] = useState(initialValue);
  const { id } = useParams();
  const history = useHistory();
  
  // console.log(props)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res =>
        setMovie(res.data)
        // console.log(res)
      )
      .catch(err => console.log(err.response));
  }, [id]);

  const handleChange = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then(res => {
        // setMovies(res.data);
        history.push(`/movies/${id}`);
      })
      .catch(err => console.log(err));
  }

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <h2>Update movie</h2>
      <input
        type='text'
        name='title'
        onChange={handleChange}
        value={movie.title}
        placeholder='Title'
      />
      <input
        type='text'
        name='director'
        onChange={handleChange}
        value={movie.director}
        placeholder='Director'
      />
      <input
        type='text'
        name='metascore'
        onChange={handleChange}
        value={movie.metascore}
        placeholder='Metasscore'
      />
      <button type='submit'>Update</button>
    </form>
  )
}

export default UpdateForm