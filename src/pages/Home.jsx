import React, { useState } from 'react';
import { connect } from 'react-redux';

import MenuBar from '../components/MenuBar';
import Card from '../components/Card';

import logo from '../assets/static/logo.png';
import '../assets/styles/home.scss';

const Home = ({ myList, students, staff }) => {
  // const API = 'http://localhost:3000/initialState';
  // const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('students');

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(API);
  //     const data = await response.json();
  //     setCharacters(data);
  //     console.log(characters.students);
  //   } fetchData();
  // },[]);

  const handleChange = (event) => {
   setFilter(event.target.value);
  }

  return (
    <section className="hero">
      <MenuBar positionClass="header" myList={myList}/>
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
          staff.map((character) => (
            <Card id={character.id} key={character.id} image={character.image} imageAlt={character.name} status={character.alive} cname={character.name}
            birthday={character.dateOfBirth} gender={character.gender} eyes={character.eyeColour} hair={character.hairColour} house={character.house} isList
            />
          ))
        ) : (
          students.map((character) => (
            <Card id={character.id} key={character.id} image={character.image} imageAlt={character.name} status={character.alive} cname={character.name}
            birthday={character.dateOfBirth} gender={character.gender} eyes={character.eyeColour} hair={character.hairColour} house={character.house} isList
            />
          ))
          )
        }
      </section>
      <MenuBar positionClass="footer"/>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    students: state.students,
    staff: state.staff,
  };
};

export default connect(mapStateToProps, null)(Home);
