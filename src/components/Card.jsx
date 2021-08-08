import React from 'react';
// import { connect } from 'react-redux';

// import { setFavorite, deleteFavorite } from '../actions';

import {Bookmark,BookmarkBorder} from '@material-ui/icons';

import '../assets/styles/card.scss'

const Card = (props) => {
  const {image, imageAlt, status, cname, birthday, gender, eyes, hair, house, isList} = props;
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
          {!isList ? (
            <button type='submit' className="favoriteButton">
              <BookmarkBorder color="disabled"/>
            </button> 
          ) : (
            <button type='submit' className="favoriteButton">
              <Bookmark color="disabled"/>
            </button> )
          }
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
