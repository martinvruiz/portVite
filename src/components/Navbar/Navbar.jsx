import { Link } from "react-router";


const Navbar = () => {

return (
    <nav className="w-full sticky top-0 bg-black text-white p-3">
        <ul className="flex justify-center items-center space-x-4 text-xl">
            <Link to="./">Home</Link>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
)
}


export default Navbar;