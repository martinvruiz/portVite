import { Link } from "react-router";


const Navbar = () => {

return (
    <nav className="w-full sticky top-0 bg-black text-white p-3">
        <ul className="flex justify-center items-center space-x-4 text-xl">
            <Link to="./">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </nav>
)
}


export default Navbar;