import React from 'react'

const itemFilm = ({image}) => {
  return (
   <li>
     
    <a href="">
        <img classeName="film-item" src={image} alt="film-image" />
    </a>
   </li>
  )
}

export default itemFilm