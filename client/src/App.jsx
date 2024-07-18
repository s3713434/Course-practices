import { useEffect, useState } from 'react'
import './App.css'
import AddCourseForm from './components/AddCourseForm'
import CourseList from './components/CourseList'
import ErrorContainer from './components/ErrorContainer'

function App() {
  const [courses, setCourses] = useState([])
  const [errors, setErrors] = useState({})

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      const url = 'http://localhost:8000/api/courses'
      const response = await fetch(url, { method: 'GET' })
      const courses = await response.json()
      console.log(courses)
      setCourses(courses)
    } catch (error) {
      console.error('Error fetching courses: ', error)
    }
  }

  const deleteCourse = async (courseId) => {
    if (window.confirm('Are you sure to delete this course?')) {
      try {
        const url = `http://localhost:8000/api/courses/${courseId}`
        const response = await fetch(url, { method: 'DELETE' })
        if (response.ok) {
          fetchCourses()
        } else {
          console.error('Error deleting course:', response.statusText)
        }
      } catch (error) {
        console.error('Error fetching courses: ', error)
      }
    }
  }

  const addCourse = async (courseData) => {
    try {
      const url = 'http://localhost:8000/api/courses/'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      })
      if (response.ok) {
        fetchCourses()
      } else {
        const responseData = await response.json()
        setErrors(responseData.errors)
      }
    } catch (error) {
      console.error('Error adding course', error)
    }
  }
  return (
    <div className='container'>
      <h1>Course Demo</h1>
      <AddCourseForm addCourse={addCourse} />
      <ErrorContainer errors={errors} />
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </div>
  )
}

export default App
