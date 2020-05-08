import React, { useState, useRef } from "react";
import { Button } from "../../../node_modules/react-bootstrap";

export function SearchImpl(props) {
  const [show, setShow] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  const validateSearch = (event) => {
    event.preventDefault();
    if (searchContent !== "") {
      props.triggerPictures(searchContent);
    } else {
      alert("type something:");
    }
  };

  return (
    <div>
      {show ? (
        <form className="form-inline">
          <input
            className="form-control"
            type="search and press enter"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchContent(e.target.value)}
          />
          <Button
            type="button"
            class="btn btn-primary btn-primary-outline"
            onClick={(e) => validateSearch(e)}
          >
            Submit
          </Button>
        </form>
      ) : (
        <div className="nav-item" name="blogs" onClick={() => setShow(!show)}>
          <a className="nav-link pointer fa fa-fw fa-search" href>
            Search Images
          </a>
        </div>
      )}
    </div>
  );
}
