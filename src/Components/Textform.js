import React, { useState } from "react";

export default function Textform(props) {
    const handleUpclick = () => {
        // console.log("Uppercase was clicked "+ text );
        let newText = text.toLocaleUpperCase();
        settext(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleOnclick = () => {
        // console.log("Uppercase was clicked "+ text );
        let newText = text.toLocaleLowerCase();
        settext(newText);
        props.showAlert("Converted to Lowercase!", "success");
    };

    const handleclearclick = () => {
        // console.log("Uppercase was clicked "+ text );
        let newText = " ";
        settext(newText);
        props.showAlert("Text Cleared!", "success");
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
       document.getSelection().removeAllRanges();
           // deselect the text 
        props.showAlert("Copied to clipboard", "success");


    }


    const handleOnChange = (event) => {

        settext(event.target.value)
    };
    const [text, settext] = useState("");


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea
                    className="form-control"
                    onChange={handleOnChange}
                    id="myBox"
                    style={{ backgroundcolour: props.mode === 'dark' ? 'Grey' : 'black', color: props.mode === 'dark' ? 'black' : 'black' }}
                    value={text}
                    rows="8"
                ></textarea>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
                    Convert To UpperCase </button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnclick}>
                    Convert To LowerCase </button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>
                    Clear</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnCopy}>
                    Copy</button>


                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
                    Remove Space</button>

            </div>

            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summery </h2>
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read </p>
                <h2> <b>Preview</b> </h2>
                <p>{text.length > 0 ? text : "Enter something in the above textbox to preview here...."}</p>

            </div>
        </>
    );
}
