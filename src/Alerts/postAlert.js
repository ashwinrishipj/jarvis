import Alert from 'react-bootstrap/Alert'
import Button from "react-bootstrap/Button"
import React from "react"

export default function ContentPosted(props) {
    return (
      <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Posted!</strong> please keep in touch! :).
      <button type="button" class="close" onClick={props.changeAlert} data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>)
}
  
