import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';


export default function Navbar(props) {
    const removeBgColor = ()=>{
        document.body.classList.remove('bg-success')
        document.body.classList.remove('bg-danger')
        document.body.classList.remove('bg-warning')
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-dark')
    }
    const greenTheme = ()=>{
        removeBgColor();
        document.body.classList.add('bg-success');
    }
    const redTheme = ()=>{
        removeBgColor();
        document.body.classList.add('bg-danger');
    }
    const yellowTheme = ()=>{
        removeBgColor();
        document.body.classList.add('bg-warning');
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`} style={{ color: props.theme === 'dark' ? 'white' : 'black' }}>
            <div className="container-fluid" id="nav">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: props.theme === 'dark' ? 'white' : 'black' }}>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.theme === 'dark' ? 'white' : 'black' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{ color: props.theme === 'dark' ? 'white' : 'black' }}>About</Link>
                        </li>

                    </ul>

                    {/* <div className={`btn btn-${props.colorChange} rounded mx-2`} style={{height:'30px',width:'20px',cursor:'pointer'}} onClick={props.colorChange}></div> */}

                    <Dropdown>
                        <Dropdown.Toggle className='mx-2' variant="success" id="dropdown-basic" style={{color:props.theme==='dark'?'white':'black',backgroundColor:props.theme==='dark'?'black':'white'}}>
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{color:props.theme==='dark'?'white':'black',backgroundColor:props.theme==='dark'?'black':'white'}}>
                            <Dropdown.Item href="#/action-1" onClick={greenTheme} style={{color:props.theme==='dark'?'white':'black',backgroundColor:props.theme==='dark'?'black':'white'}}>Green</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={redTheme} style={{color:props.theme==='dark'?'white':'black',backgroundColor:props.theme==='dark'?'black':'white'}}>Red</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={yellowTheme} style={{color:props.theme==='dark'?'white':'black',backgroundColor:props.theme==='dark'?'black':'white'}}>Yellow</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" style={{ color: props.theme === 'dark' ? 'white' : 'black' }}>Search</button>
                    </form>
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault" style={{ color: props.theme === 'dark' ? 'white' : 'black' }}>{props.theme} mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: 'Navigation'
};