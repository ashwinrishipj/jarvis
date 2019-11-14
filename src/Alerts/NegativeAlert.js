import Alert from 'react-bootstrap/Alert'
import React from "react"

export default function NegativeAlert(props) {
      return (
        <div className="alert alert-danger" role="alert">
      <strong>{props.content}</strong> 
      <button type="button" className="close" onClick={props.changeAlert} data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
      );
    
}
  
