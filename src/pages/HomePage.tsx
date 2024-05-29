import React from "react";
import "../styles/HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBattleNet } from "@fortawesome/free-brands-svg-icons";
import {
  faGear,
  faHouse,
  faAward,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import avatarImage from "../assets/avatar.jpg"; 
import history from "../assets/history.png"; 
import geography from "../assets/geography.png"; 
import sport from "../assets/sport.png"; 
import science from "../assets/science.png";
import litherature from "../assets/litherature.png";
import cinema from "../assets/cinema.png";
import technologies from "../assets/techno.png";
import music from "../assets/music.png";

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <div className="leftBanner">
        <FontAwesomeIcon icon={faBattleNet} className="icon" />
        <div className="menu">
          <FontAwesomeIcon icon={faGear} className="menu-icon" />
          <FontAwesomeIcon icon={faHouse} className="menu-icon" />
          <FontAwesomeIcon icon={faBell} className="menu-icon" />
          <FontAwesomeIcon icon={faAward} className="menu-icon" />
          <FontAwesomeIcon icon={faUserPlus} className="menu-icon" />
        </div>
      </div>
      <main className="mainPage">
        <div className="topBox">
          <div>
            <h1 className="text-[30px] mt-4">Hello, User</h1>
            <p>Welcome back to our platform</p>
          </div>
          <div className="avatar">
            <img src={avatarImage} alt="Avatar" className="avatar-img" />
          </div>
        </div>
        <div className="categories">
          <div className="category">
            <img src={history} alt="History" className="category-img" />
            <div className="category-name">History</div>
          </div>
          <div className="category">
            <img src={geography} alt="Geography" className="category-img" />
          </div>
          <div className="category">
            <img src={sport} alt="Sport" className="category-img" />
          </div>
          <div className="category">
            <img src={science} alt="Science" className="category-img" />
          </div>
          <div className="category">
            <img src={litherature} alt="Litherature" className="category-img" />
          </div>
          <div className="category">
            <img src={cinema} alt="Cinema" className="category-img" />
          </div>
          <div className="category">
            <img src={technologies} alt="Avatar" className="category-img" />
          </div>
          <div className="category">
            <img src={music} alt="Music" className="category-img" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
