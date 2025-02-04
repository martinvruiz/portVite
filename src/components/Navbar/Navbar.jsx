import { Link } from "react-router";


const Navbar = () => {

return (
    <nav className="w-full sticky top-0 bg-black text-white p-3">
        <ul className="flex justify-center items-center space-x-4 text-xl">
            <Link className="hover:scale-105 p-1 border-b" to="./">Home</Link>
            <Link className="hover:scale-105 p-1 border-b" to="/projects">Projects</Link>
            <Link className="hover:scale-105 p-1 border-b" to="/contact">Contact</Link>
        </ul>
    </nav>
)
}


export default Navbar;