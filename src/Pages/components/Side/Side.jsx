import React, { useState } from "react";
import "./Side.css";

function Side() {
  const [menu, setMenu] = useState("hide");
  const data = JSON.parse(localStorage.getItem("currentData"));

  const handleOpenMenu = () => {
    setMenu("visible");
  };
  const handleCloseMenu = () => {
    setMenu("hide");
  };

  return (
    <>
      <i onClick={handleOpenMenu} className="fa-solid fa-2x fa-bars"></i>
      <div className={`side ${menu}`}>
        <i onClick={handleCloseMenu} className="fa-solid fa-2x fa-xmark"></i>
        <div className="profile">
          <div className="p-img">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="p-data">
            <h3>{data.username}</h3>
            <p className="job">Frontend</p>
          </div>
        </div>
        <div className="menu">
          <p className="side-title">Menu</p>
          <ul className="side-ul">
            <li className={`side-li`}>
              <p>
                <span className="hover-span"></span>
              </p>
              <i className="fa-solid fa-inbox"></i>My Tasks
            </li>
            <li className={`side-li`}>
              <p>
                <span className="hover-span"></span>
              </p>
              <i className="fa-solid fa-message"></i>Inbox
            </li>
            <li className={`side-li`}>
              <p>
                <span className="hover-span"></span>
              </p>
              <i className="fa-solid fa-list-check"></i>Projects
            </li>
            <li className={`side-li`}>
              <p>
                <span className="hover-span"></span>
              </p>
              <i className="fa-solid fa-clock"></i>Standups
            </li>
            <li className={`side-li`}>
              <p>
                <span className="hover-span"></span>
              </p>
              <i className="fa-solid fa-calendar"></i>Meetings
            </li>
            <li className={`side-li`}>
              <p>
                <span className="hover-span"></span>
              </p>
              <i className="fa-solid fa-gear"></i>Settings
            </li>
          </ul>
        </div>

        <div className="favorites">
          <p className="fav-title">Favorites</p>
          <ul className="fav-ul">
            <li className="fav-li">
              <input
                type="radio"
                id="redwhole"
                name="fav_language"
                className="inp"
                value="HTML"
              />
              <label className="lab" htmlFor="redwhole">
                Redwhole Design
              </label>
            </li>
            <li className="fav-li">
              <input
                type="radio"
                id="app"
                name="fav_language"
                className="inp"
                value="HTML"
              />
              <label className="lab" htmlFor="app">
                Mobile App Mock
              </label>
            </li>
            <li className="fav-li">
              <input
                type="radio"
                id="ui"
                name="fav_language"
                className="inp"
                value="HTML"
              />
              <label className="lab" htmlFor="ui">
                UI Design Resivision
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Side;
