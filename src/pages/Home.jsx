import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';

import MenuBar from '../components/MenuBar';
import Card from '../components/Card';

import logo from '../assets/static/logo.png';
import '../assets/styles/home.scss';

const home = () => {
  const API = 'http://localhost:3000/initialState';
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('students');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const data = await response.json();
      setCharacters(data);
      console.log(characters.students);
    } fetchData();
  },[]);

  const handleChange = (event) => {
   setFilter(event.target.value);
  }

  return (
    <section className="hero">
      <MenuBar positionClass="header"/>
      <div className="titleZone">
        <div className="title">
          <img className="logo" src={logo} alt="HP logo" />
        </div>
        <h1 className="subtitle">Selecciona tu filtro</h1>
      </div>
      <section className="buttonBar">
        <div className="buttonStudents">
          <button 
            className="selectButton" 
            type="submit"
            value="students"
            onClick={handleChange}
          >
            ESTUDIANTES
          </button>
        </div>
        <div className="buttonStaff">
          <button 
            className="selectButton"
            type="submit"
            value="staff"
            onClick={handleChange}
          >
            STAFF
          </button>
        </div>
      </section>
      <section className="cardSection">
        {filter === 'staff' ? (
          characters.staff?.map((character) => (
            <Card key={character.id} image={character.image} imageAlt={character.name} status={character.alive} cname={character.name}
            birthday={character.dateOfBirth} gender={character.gender} eyes={character.eyeColour} hair={character.hairColour} house={character.house}
            />
          ))
        ) : (
          characters.students?.map((character) => (
            <Card key={character.id} image={character.image} imageAlt={character.name} status={character.alive} cname={character.name}
            birthday={character.dateOfBirth} gender={character.gender} eyes={character.eyeColour} hair={character.hairColour} house={character.house}
            />
          ))
          )
        }
      </section>
      <MenuBar positionClass="footer"/>
    </section>
  )
}

export default home;
