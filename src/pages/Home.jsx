
import LogoMVR from "../images/logo/MVR-removebg.png"
import Lenguages from "../components/Lenguages/Lenguages"

const Home = () => {

    const img = LogoMVR

    return (
        
        <div className="min-h-screen bg-black text-white">
            <div className="flex flex-col items-center">
                <img src={img} alt="logo" className="w-1/4"/>
                <h1 className="lg:text-5xl text-2xl">Martin Villalo Ruiz</h1>
                <h2 className="lg:text-2xl text-xl p-1 text-orange-400">FrontEnd Developer</h2>
                <p className="lg:text-2xl text-lg p-2 font-semibold border-b mb-2">Based in Buenos Aires, Argentina.</p>
                <p className="w-2/4 text-center lg:text-xl text-md">I am a front-end developer with strong skills in React, Tailwind CSS, and modern web design. I excel at creating clean, functional, and user-friendly interfaces, focusing on responsive design and ensuring a seamless user experience.</p>
            </div>
            <Lenguages/>
        </div>

    )
}


export default Home