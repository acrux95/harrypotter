import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { deleteFavorite } from '../actions';
import Modal from '../components/Modal'

import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@material-ui/core';
import {PersonAdd, Bookmark, DeleteOutline} from '@material-ui/icons/';

import '../assets/styles/menuBar.scss'

const MenuBar = ({ positionClass, myList } ) => {
  const [state, setState] = useState({
    postId: 19,
    name: '',
    birthday: '',
    eyesColor: '',
    hairColor: '',
    gender: '',
    position: '',
    image: '',
    modal: false,
  })
  const [showMenu, setShowMenu] = useState(false)
 
  const handleOpen = () => {
    setState({...state, modal: true});
  }
  const handleClose = () => {
    setState({...state, modal: false});
  }
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  const handleDeletefavorite = (itemId) => {
    deleteFavorite(itemId);
  };

  useEffect(async() => {
    setState({...state, postId:(state.postId + 1)})
    // let typeOfChar;
    // state.position === 'student'
    //   ? typeOfChar = 'students'
    //   : typeOfChar = 'staff'
    axios.post(`http://localhost:3000/newCharacters/`, 
    {
      name: state.name,
      dayOfBirth: state.birthday,
      eyeColour: state.eyesColor,
      hairColor: state.hairColor,
      gender: state.gender,
      position: state.position,
      image: state.image,
      id: state.postId,
    }).then(resp => {
      console.log(resp.data);
      handleClose();
    }).catch(error => {
      console.log(error);
      handleClose();
    });   
  }, []);

  return (
    <section className={positionClass}>
      { positionClass === 'header' ? (
        <>
          <section className="menuButtons">
            <button 
              className="buttonLeft"
              onClick={handleShowMenu}
              >
              <span>
                FAVORITOS <Bookmark />
              </span>
            </button>
            <button 
              className="buttonRigth"
              onClick={handleOpen}
              >
              <span>
                AGREGAR <PersonAdd />
              </span>
            </button>
          </section>
          <>
            { showMenu ? (
              myList.map(item => (
                <section className="favoritesBar">
                  <img src={item.image} alt={item.cname} />
                  <p>{item.cname}</p>
                  <button type="submit" onClick={handleDeletefavorite(item.id)}>
                    <DeleteOutline />
                  </button>
                </section> 
              ))
            ) : null }
          </>
        </>
      ):(
        <>
          { showMenu ? (
            myList?.map(item => (
              <section className="favoritesBar">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <button type="submit" onClick={handleDeletefavorite(item.id)}>
                  <DeleteOutline />
                </button>
              </section> 
            ))
          ) : null }
          <section className="menuButtons">
            <button
              className="buttonLeft"
              onClick={handleShowMenu}
              >
              <span>
                FAVORITOS <Bookmark />
              </span>
            </button>
            <button 
              className="buttonRigth"
              onClick={handleOpen}
              >
              <span>
                AGREGAR <PersonAdd />
              </span>
            </button>
          </section>
        </>
      )}
      <Modal visible={state.modal} >
        <section className="modalBody">
          <section className="columnLeft">
            <h1 className="title">Agregar un personaje</h1>
            <div className="inputName">
              <TextField
                variant="filled"
                type="text"
                label="NOMBRE"
                value={state.name}
                name="name"
                autoComplete="off"
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^ñáéíóú A-Za-z]/gi, '');
                }}
                />
            </div>
            <div className="inputEyes">
              <TextField
                variant="filled"
                type="text"
                label="COLOR DE OJOS"
                value={state.eyesColor}
                name="eyesColor"
                autoComplete="off"
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^ñáéíóú A-Za-z]/gi, '');
                }}
                />
            </div>
            <div className="gender">
              <FormControl component="fieldset">
                <FormLabel component="legend">GÉNERO</FormLabel>
                <RadioGroup className="radioGroup" aria-label="gender" name="gender" value={state.gender} onChange={handleChange}>
                  <FormControlLabel value="female" control={<Radio />} label="Mujer" />
                  <FormControlLabel value="male" control={<Radio />} label="Hombre" />
                </RadioGroup>
              </FormControl>
            </div>
            <input type="file" id="" name={state.image} onChange={handleChange}/>
            <button 
              className="addCharacter"
              type="submit"
            >
              Guardar
            </button>
          </section>
            <section className="columnRigth">
            <div className="closeModalControl">
              <button 
              type="submit"
              onClick={handleClose}
              >
                X
              </button>
            </div>
            <div className="inputBirthday">
              <TextField
                variant="filled"
                type="text"
                label="CUMPLEAÑOS"
                value={state.birthday}
                name="birthday"
                autoComplete="off"
                onChange={handleChange}
                />
            </div>
            <div className="inputHair">
              <TextField
                variant="filled"
                type="text"
                label="COLOR DE CABELLO"
                value={state.hairColor}
                name="hairColor"
                autoComplete="off"
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^ñáéíóú A-Za-z]/gi, '');
                }}
                />
            </div>
            <div className="position">
              <FormControl component="fieldset">
                <FormLabel component="legend">POSICIÓN</FormLabel>
                <RadioGroup className="radioGroup" aria-label="position" name="position" value={state.position} onChange={handleChange}>
                  <FormControlLabel value="student" control={<Radio />} label="Estudiante" />
                  <FormControlLabel value="staff" control={<Radio />} label="Staff" />
                </RadioGroup>
              </FormControl>
            </div>
          </section>
        </section>
      </Modal>
    </section>
  )
}

const mapDispatchToProps = {
  deleteFavorite,
};
export default connect(null, mapDispatchToProps)(MenuBar);
