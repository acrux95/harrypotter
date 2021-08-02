import React, { useState } from 'react';
// import axios from 'axios';

import Modal from '../components/Modal'

import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@material-ui/core';
import '../assets/styles/menuBar.scss'

const MenuBar = () => {
  const [state, setState] = useState({
    name: '',
    birthday: '',
    eyesColor: '',
    hairColor: '',
    gender: '',
    position: '',
    modal: false
  })
  const handleOpen = () => {
    setState({...state, modal: true});
  }
  const handleClose = () => {
    setState({...state, modal: false});
  }
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <section className="menuBar">
        <button className="buttonLeft">
          FAVORITOS
        </button>
        <button 
          className="buttonRigth"
          onClick={handleOpen}
          >
          AGREGAR
        </button>
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
                  <FormLabel component="legend">Género</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={state.gender} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Mujer" />
                    <FormControlLabel value="male" control={<Radio />} label="Hombre" />
                  </RadioGroup>
                </FormControl>
              </div>
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
            </section>
          </section>
        </Modal>
    </section>
  )
}

export default MenuBar;
