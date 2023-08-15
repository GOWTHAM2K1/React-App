import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text,setText] = useState("enter the info here");

    const upConverter = ()=>{
        console.log("Button was clicked " + text)
        let newText = text
        setText(newText.toUpperCase())
        props.showAlert("Converted to upper case","success")
    };

    const handleonchange = (event)=>{
        setText(event.target.value);
    };

    const lowConverter = ()=>{
        let newText = text
        setText(newText.toLowerCase())
        props.showAlert("Converted to lower case","success")
    };

    const cleartext = () =>{
        let newText = ""
        setText(newText)
        props.showAlert("Text has been cleared","success")
    };

    const cursive = () =>{
        let newText = document.getElementById('exampleFormControlTextarea1');
        newText.style.fontFamily = "cursive";
        props.showAlert("Converted to cursive","success")
        
    };


      const copy = () =>{
        let textval = document.getElementById("exampleFormControlTextarea1");
        textval.select();
        navigator.clipboard.writeText(textval.value);
        props.showAlert("Copied to clipboard","success")
      };
    return (
        
        <>
        
            <div className="container">
                <h1 className='my-3 px-1 text-2xl'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.theme==='dark'?'#8e8f9f':'white'}} id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleonchange}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={upConverter}>Conveert to Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={lowConverter}>Conveert to lower Case</button>
                <button className="btn btn-primary mx-1 mx-1" onClick={cursive}>Convert to cursive</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copy}>Copy text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={cleartext}>Clear text</button>
            </div>

            <div className="container my-3">
                <h1 className='text-2xl my-2'>Your Text Summary</h1>
                <p>No of words = {text.split(/\s+/).filter((element)=>{return element.length>0}).length}</p>
                <p>No of characters = {text.length}</p>
                <p>Time required to read the text = {0.008 * text.split(" ").filter((element)=>{return element.length>0}).length} minutes</p>
            </div>

            <div className="container my-3">
                <h1 className="text-2xl my-2">Preview</h1>
                <p>{text.length>0?text:'what you type will be displayed here'}</p>
            </div>
        </>

    )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired,
};

TextForm.defaultProps = {
    heading : "Enter the heading here",
}