import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="border-b-4 border-green-700 text-center fixed top-0 bg-green-800 w-full text-lg text-white">
            <ul className="flex justify-around py-4">
                <li className="hover:text-green-400  inline-block py-4">
                    <Link to="/" className="pl-6 pr-8">
                        Home
                    </Link>
                </li>
                <li className="hover:text-green-400  inline-block py-4">
                    <Link to="/about" className="pl-6 pr-8">
                        About
                    </Link>
                </li>
                <li className="hover:text-green-400  inline-block py-4">
                    <Link to="/articles-list" className="pl-6 pr-8">
                        Articles
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar