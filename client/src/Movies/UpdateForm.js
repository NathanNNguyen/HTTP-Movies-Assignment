import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';

const initialValue = {
  title: '',
  director: '',
  metascore: '',
}

const UpdateForm = props => {
  const [movie, setMovie] = useState(initialValue);
  const { id } = useParams();
  console.log(props)

  useEffect(() => {
    // const itemUpdate = props.
  })

  const handleChange = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className='flex'>
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
      <button>Update</button>
    </form>
  )
}

export default UpdateForm