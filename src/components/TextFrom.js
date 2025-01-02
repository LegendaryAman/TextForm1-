import React,{useState} from 'react'

const TextFrom = (props) => {

  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
  }

    const handleOnChange = (event)=>{
        //console.log("onchange")
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new Text"); // Correct  way to change trhe state
    
  return (
    <>
    <div>
      <form action="post">
        <h1>{props.heading}</h1>
        <textarea className="textarea" id="t1" cols="200" rows="5" value={text} onChange={handleOnChange}></textarea>
      </form>
      <button onClick={handleUpClick}>Convert To UpperCase</button>
      <button onClick={handleLoClick}>Convert To LowerCase</button>
    </div>
    <div className='count'>
      <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <h1>Time to Read</h1>
    <p>{(text.split(" ").length)*(0.008)} Minutes</p>
    <h1>Preview</h1>
    <p>{text}</p>
    </div>
    </> 
  )
}

export default TextFrom
