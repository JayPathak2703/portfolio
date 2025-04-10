import Image from "next/image";
import Navbar from "../components/Navbar";
import MainPage from "../components/MainPage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "./globals.css";

export default function Home() 
{
    return (
        <div>
            <Navbar />  
            <MainPage />
            <About />
            <Skills />
            <Projects/>
            <Contact />
        </div>
    )
}
