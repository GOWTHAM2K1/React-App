import React, { useState } from 'react'

export default function About(props) {

    // const [mode,setMode] = useState("Switch to Dark Mode");

    // const [props.mode,setprops.mode] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // })
    // const switchMode = () =>{
    //     if(props.mode.color==='black'){
    //         setprops.mode({
    //             color : 'white',
    //             backgroundColor: '#0f0922',
    //             border : '1px solid white'
    //         })
    //         setMode('Switch to Light Mode')
    //     }
    //     else{
    //         setprops.mode({
    //             color : 'black',
    //             backgroundColor: 'white',
    //         })
    //         setMode('Switch to Dark Mode')

    //     }
    // }
    let myStyle = {
        color: props.theme==='dark'?'white':'black',
        backgroundColor : props.theme==='dark'?'black':'white'
    }
    
    return (
        <div>
            <div className="accordion container" id="accordionExample" style={{ ...myStyle, backgroundColor:props.theme==='dark'?'#0f0922':'white' }}>
            <h1 className="text-2xl">About Us</h1>
                <div className="accordion-item"   style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                        <button  style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong >Text-Utils</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"   >
                        <div className="accordion-body"  style={myStyle}>
                            This is my first react app created using react 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" style={myStyle}>
                        <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Uses</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={myStyle}>
                            This web app has basic functionalities associated with it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Tools used</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            HTML CSS JS REACT
                        </div>
                    </div>
                </div>
            {/* <button type = 'button' className="btn btn-primary my-3" onClick={switchMode}>{mode}</button> */}

            </div>

        </div>
    )
}
