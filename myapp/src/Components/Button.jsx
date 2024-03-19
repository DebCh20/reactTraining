import React from 'react'
import { useState } from 'react'

function Button(props) { 
  return (
    <>
        <button type="button" class="btn btn-outline-primary"
        onClick={props.inc}
        >{props.op} by {props.val}</button>
    </>
  )
}

export default Button