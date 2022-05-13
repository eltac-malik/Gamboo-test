import React, { useEffect } from "react";
import { fetchData } from "../../../services/request";
import { useSelector, useDispatch } from "react-redux";
import "./Center.css";

function Center() {
  const dispatch = useDispatch();

  const data = JSON.parse(localStorage.getItem("currentData"));
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const user = useSelector((state) => state.data.userData);

  return (
    <div className="all-content">
      <div className="header">
        <h2>Hi {data.name} !</h2>
        <div className="task-comp">
          <p className="p-el">15% task complated</p>
          <p className="comp">
            <span></span>
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="rose-div">
          <h2>R&D for New Banking Mobile App</h2>
        </div>
        <div className="violet-div">
          <h2>Create Signup Page</h2>
        </div>
      </div>

      <div className="task-part">
        <div className="monthly">
          <h2>Monthly Tasks</h2>
          <div className="arc">
            <p className="archive">Archive</p>
            <p className="add-new">
              {" "}
              <i className="fa-solid fa-plus"></i> New
            </p>
          </div>
        </div>
      </div>

      <div className="datas">
        <p className="p-el">Today</p>
        <div className="data">
          {user.length !== 0 &&
            user.map((e) => {
              return (
                <div key={e.id} className="usr">
                  <h5>{e.name}</h5>
                  <p>{e.surname}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Center;
