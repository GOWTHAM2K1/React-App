import React, { useState } from 'react'

export default function About() {

    const [mode,setMode] = useState("Switch to Dark Mode");

    const [stylemode,setstylemode] = useState({
        color : 'black',
        backgroundColor : 'white'
    })
    const switchMode = () =>{
        if(stylemode.color==='black'){
            setstylemode({
                color : 'white',
                backgroundColor: '#0f0922',
                border : '1px solid white'
            })
            setMode('Switch to Light Mode')
        }
        else{
            setstylemode({
                color : 'black',
                backgroundColor: 'white',
            })
            setMode('Switch to Dark Mode')

        }
    }
    
    return (
        <div>
            <div className="accordion container" id="accordionExample" style={stylemode}>
            <h1 className="text-2xl">About Us</h1>
                <div className="accordion-item" style={stylemode}>
                    <h2 className="accordion-header">
                        <button  style={stylemode} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={stylemode}>
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={stylemode}>
                    <h2 className="accordion-header">
                        <button  style={stylemode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={stylemode}>
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={stylemode}>
                    <h2 className="accordion-header">
                        <button  style={stylemode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            <button type = 'button' className="btn btn-primary my-3" onClick={switchMode}>{mode}</button>

            </div>

        </div>
    )
}
