import React from 'react'

export const Child = (props) => {

  const data = "I am from child componenet";
  props.onChildData(data);
  

  return (
    <div>
        <p>I am child component</p>
        <p>{props.data}</p>
    </div>
  )
}
