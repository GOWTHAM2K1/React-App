
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

export default function App() {
    return (
        <>
            <Navbar title = "Navbar"/>

            <TextForm heading = "Enter the text below"/>

            <About/>
        </>
    )
}