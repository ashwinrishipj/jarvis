import React, { useState } from "react";
import "./upload.css";
import PositiveAlert from "../../Alerts/positiveAlert";

function UploadData() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [textData, setTextData] = useState("");
  const [previewImage, setPreviewImage] = useState("choose image");
  const [positiveAlerts, setPositiveAlerts] = useState(false);

  const handleTextArea = (e) => {
    setTextData(e.target.value);
  };

  const changePositiveAlert = () => {
    setPositiveAlerts(false);
    setMessage("");
  };

  const sendDetails = async (dataurl) => {
    setLoading(false);
    let date = new Date().toISOString();

    const query = JSON.stringify({
      query: `mutation {
        UploadUserPosts (input:{
          userId :"5e9df7a7327a33165026b98f",Textdata:"${textData}",ImageUrl:"${dataurl}",PostCreatedOn : "${date}",
        })}
      `,
    });

    const response = await fetch("http://localhost:4000/graphql", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: query,
    });

    const Response = await response.json();

    if (Response.data.UploadUserPosts === true) {
      setPreviewImage("choose image");
      setTextData("");
      setPositiveAlerts(true);
      setMessage("Posted. Please keep in touch!...");
    } else if (Response.status === 500) {
      setPositiveAlerts(true);
      setMessage(Response.errors[0].message);
    } else {
      setPositiveAlerts(true);
      setMessage("DB error try Again!!!");
    }
  };

  const imageName = (e) => {
    e.preventDefault();
    alert(e.target.offsetHeight);
    setPreviewImage(e.target.files[0].name);
    setImage(e.target.files[0]);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "jarvis");
    setLoading(true);
    if (textData !== "") {
      if (image !== null) {
        fetch("	https://api.cloudinary.com/v1_1/dobby8295/image/upload", {
          method: "POST",
          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.secure_url !== "") {
              sendDetails(data.secure_url);
            }
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else sendDetails();
    } else {
      setPositiveAlerts(true);
      setMessage("Please type something in text box:");
    }
  };

  return (
    <div>
      {positiveAlerts ? (
        <PositiveAlert
          content={message}
          changeAlert={() => changePositiveAlert()}
        />
      ) : (
        ""
      )}
      <div className="form-group">
        <label style={{ color: "red" }}>post your thoughts:</label>
        <textarea
          className="form-control"
          rows="2"
          value={textData}
          required
          onChange={handleTextArea}
        ></textarea>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              onChange={imageName}
            />
            <label className="custom-file-label">{previewImage}</label>
          </div>
        </div>

        <div className="col-md-3 mb-3 float-right">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={uploadImage}
          >
            Post
          </button>
          {loading ? (
            <div className="clearfix">
              <div className="spinner-border-primary float-right" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadData;
