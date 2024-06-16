import React from "react";
import "./App.css";
import menuItems from "./menuItems";
import Rats from "./Rats";

const App = () => {
  return (
    <div style={{backgroundColor:"black"}}>
        <h1 style={{textAlign: "center", paddingTop: "20px", color:"white"}}>Food Items with Rating System</h1>
      <div className="container">
        {menuItems.map((item) => (
          <div key={item.id} className="mainContainer">
            <div className="card">
              <div className="images">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="details">
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
                <div className="price">${item.price.toFixed(2)}</div>
                <Rats />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
