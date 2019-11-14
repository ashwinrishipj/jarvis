
import React from "react"

export default function PositiveAlert(props) {
    return (
      <div className="alert alert-success alert-dismissible fade show" role="alert">
      <strong>{props.content}</strong> please keep in touch! :).
      <button type="button" className="close" onClick={props.changeAlert} data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>)
}
  
