import React from "react";
import Canvas from "./particle";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100vh !important",
    background: "#0d0d0d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const Parts = () => (
  <div style={styles.root}>
    <Canvas />
    <div style={{ position: "absolute", textAlign: "center" }}>
      <form >
        <h5 style={{color:"red"}}>SignUp </h5>
        <div className="form-group input-md">
          
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="userName"
            required
          />
          <small id="emailHelp" className="form-text text-white">
           
          </small>
        </div>
        <div className="form-group input-md">
          
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
          <small id="emailHelp" className="form-text text-white">
           
          </small>
        </div>
        <div className="form-group input-md">
          
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group input-md">
        
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Re-Type Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default Parts;
