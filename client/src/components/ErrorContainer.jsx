/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'

export default function ErrorContainer({ errors }) {
  return (
    <ul>
      {Object.keys(errors).map((item, i) => (
        <li key={i}>
          {item}:{errors[item]}
        </li>
      ))}
    </ul>
  )
}
