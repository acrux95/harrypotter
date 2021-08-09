import React from 'react';
import { connect } from 'react-redux';

import { setFavorite } from '../actions';

import {Bookmark,BookmarkBorder} from '@material-ui/icons';

import '../assets/styles/card.scss'

const Card = (props) => {
  const { id, image, imageAlt, status, cname, birthday, gender, eyes, hair, house, isList } = props;
  
  const handleSetFavorite = () => {
    // myList.Length < 5 
    // ? props.setFavorite({
    //   id, image, imageAlt, cname, isList,
    // })
    // : null
    props.setFavorite({
      id, image, imageAlt, cname, isList,
    })
  };
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
          {isList ? (
            <button 
              type='submit' 
              className="favoriteButton"
              onClick={handleSetFavorite}
            >
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

const mapDispatchToProps = {
  setFavorite,
};
export default connect(null, mapDispatchToProps)(Card);
