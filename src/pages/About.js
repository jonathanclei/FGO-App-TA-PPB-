import React from 'react';
import { Link } from 'react-router-dom'; //impor link buat navigasi
import './About.css';

function About() {
  return (
    <><div className="about-container">
      <h1>About This App</h1>
      <p>
        FGO or Fate/Grand Order is a turn-based RPG mobile game where players act as "Masters" and command "Servant"
        characters to fight in the Holy Grail war.
      </p>
      <p>
        This app will help players to see the list of Servants in detail with a comfortable display,
        displaying a list of Master costumes, as well as simulating Gacha or Summon Servants in the game.
      </p>
    </div>
    <div style={{marginBottom:"50px"}}className="about-container">
      <h1>About Me</h1>
      <img className="me-img" src='https://media.licdn.com/dms/image/v2/D4E03AQHdtOp045mKYQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728954802680?e=1736985600&v=beta&t=BPzDgk64IWXi174dgdjbWxXM4oyn0H93tSPJPz_iFPc' alt='aboutMe'/>
      <p>Jonathan Cleiment M // 21120121140117</p>
      <p>Insta: <Link style={{textDecoration: "none", color:"mediumblue"}} to="/MySup"> @jonathanclei </Link> </p>
    </div></>
  );
};

export default About;
