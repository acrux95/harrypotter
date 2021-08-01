import React from 'react';
// import { connect } from 'react-redux';

// import { setFavorite, deleteFavorite } from '../actions';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import '../assets/styles/Card.scss'

const Card = (props) => {
  const {image, imageAlt, status, cname, birthday, gender, eyes, hair, house} = props;
  return (
    <section className="cardBody">
      <div className={`${house} imageSection`}>
        <img src={image} alt={imageAlt} />
      </div>
      <div className={`dataSection ${status ? "live" : "death"}`}>
        <section className="statusSection">
          <div className="status">
          {status ? "Vivo" : "Finado"} / Estudiante
          </div>
          <button type='submit' className="favoriteButton">
            <BookmarkBorderIcon color="disabled"/>
          </button>
        </section>
        <h2 className="characterName">
        {status ? "" : "+"} {cname}
        </h2>
        <div className="characterData">
          <p><b>Cumpleaños:</b> {birthday}</p>
          <p><b>Género:</b> {gender}</p>
          <p><b>Color de ojos: {eyes}</b> </p>
          <p><b>Color de pelo:</b> {hair}</p>
        </div>
      </div>
    </section>
  )
}

export default Card;
