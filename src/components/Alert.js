import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        let newword = word.toLowerCase();
        return newword.charAt(0).toUpperCase() + newword.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        {props.alert&&<div>
            <div  className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>
        </div>}
        </div>
    )
}
