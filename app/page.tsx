import Image from "next/image";
import Navbar from "../components/Navbar";
import MainPage from "../components/MainPage";
import About from "../components/About";
import UnderConstruction from "../components/UnderConstruction";
export default function Home() 
{
    return (
        <div>
        <head>
            <title>Jay Pathak</title>
        </head>
            <Navbar />  
            <MainPage />
            <About />
            <UnderConstruction />
        </div>
    )
}
