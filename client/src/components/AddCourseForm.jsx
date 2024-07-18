/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function AddCourseForm({ addCourse }) {
  const [formData, setFormData] = useState({
    title: '',
    instructor: '',
    duration: '',
    description: '',
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formdata', formData)
    addCourse(formData)
    setFormData({ title: '', instructor: '', duration: '', description: '' })
  }
  return (
    <div>
      {' '}
      <h2>Add a New Course</h2>{' '}
      <form onSubmit={handleSubmit}>
        {' '}
        <div>
          {' '}
          <label htmlFor='title'>Title:</label>{' '}
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />{' '}
        </div>{' '}
        <div>
          {' '}
          <label htmlFor='instructor'>Instructor:</label>{' '}
          <input
            type='text'
            id='instructor'
            name='instructor'
            value={formData.instructor}
            onChange={handleChange}
            required
          />{' '}
        </div>{' '}
        <div>
          {' '}
          <label htmlFor='duration'>Duration (in hours):</label>{' '}
          <input
            type='number'
            id='duration'
            name='duration'
            value={formData.duration}
            onChange={handleChange}
            required
          />{' '}
        </div>{' '}
        <div>
          {' '}
          <label htmlFor='description'>Description:</label>{' '}
          <textarea
            type='text'
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />{' '}
        </div>{' '}
        <button type='submit' className='submit-button'>
          {' '}
          Add Course{' '}
        </button>{' '}
      </form>{' '}
    </div>
  )
}
