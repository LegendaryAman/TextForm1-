import React from 'react'

const TextFrom = (props) => {
  return (
    <div>
      <form action="post">
        <h1>{props.heading}</h1>
        <textarea name="textarea" id="t1" cols="200" rows="5"></textarea>
      </form>
    </div>
  )
}

export default TextFrom
