import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let upperCaseText = text.toUpperCase()
    setText(upperCaseText);
    props.showAlert("Converted to upperCase", "success");

  }

  const handleLoClick = ()=>{
    let loverCaseText = text.toLowerCase()
    setText(loverCaseText);
    props.showAlert("Converted to lowerCase", "success");
  }

  const handleClearClick = ()=>{
    let clearText = ("");
    setText(clearText);
    props.showAlert("Clear Text", "success");


  }

  const handleCopy = () =>{
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);

    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("");

  return (
    <>
    <div className='container' style={{color: props.mode === "dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"?"rgb(132 170 205)":"white", color: props.mode === "dark"?"white":"black"}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the Text Box above to preview it here"}</p>
    </div>
    </>
  )
}
