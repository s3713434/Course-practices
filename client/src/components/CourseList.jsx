/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function CourseList({ courses, deleteCourse }) {
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.length > 0 &&
          courses.map((course) => (
            <li key={course._id}>
              <span>Title: {course.title}</span>
              <span>Instructor: {course.instructor}</span>
              <span>Duration: {course.duration} hours</span>
              <button
                className='delete-button'
                onClick={() => deleteCourse(course._id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
