
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function App() {
    const [mode, setMode] = useState('light');

    const [alert,setAlert] = useState(null);

    const showAlert = (message,type)=>{
        setAlert({
            message : message,
            type : type
        });
        setTimeout(()=>{
            setAlert(null);

        },1500);
        
    }

    const toggleMode = () => {
        if (mode === 'dark') {
            setMode('light')
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            document.title = 'Text Utils-light mode'
            showAlert('light mode enabled','success')
        }
        else {
            setMode('dark')
            document.body.style.backgroundColor = '#0f0922';
            document.body.style.color = 'white';
            document.title = 'Text Utils-dark mode'
            showAlert('dark mode enabled','success')
            // setInterval(()=>{
            //     document.title = 'Turn back to light mode'
            // },2000
            // )
            // setInterval(()=>{
            //     document.title = 'change theme'
            // },1500)

        }
    }

    return (
        <>
            
            <Router>
            <Navbar title="Navbar" theme={mode} toggleMode={toggleMode} /> 
            <Alert alert={alert}/>   
                    <Switch>
                        <Route path="/about">
                            <About theme = {mode}/>
                        </Route>
                        <Route path="/">
                            <TextForm heading="Enter the text below" theme={mode} showAlert={showAlert}/>
                        </Route>
                    </Switch>
                

            </Router>
        </>
    )
}