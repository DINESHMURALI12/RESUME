import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Home.css";

const Home = ({ name, experience }) => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <div className="background-photo"></div>
      <div className="text-content">
        <h1 className={`title ${isDarkMode ? "dark" : "light"}`}>{name}</h1>
        <div className="description">
          {experience.map((item, index) => {
            return (
              <div key={index} className="Contents">
                <p className="Content_para">Position:{item.position}</p>
                <p className="Content_para">Company:{item.company}</p>
                <p className="Content_para">Client:{item.client}</p>
                <p className="Content_para">Year:{item.year}</p>
                <p className="Content_para">{item.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
