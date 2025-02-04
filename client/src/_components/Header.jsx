import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
    const navlinks = [
        { title: "Home", url: "/home" },
        { title: "About", url: "/about" },
        { title: "Services", url: "/services" },
        { title: "Contact", url: "/contact" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className="px-10 h-16 text-white flex items-center justify-between overflow-hidden relative bg-black">
            <div className="text-2xl font-bold cursor-pointer">#</div>

            {/* Nav Links for larger screens */}
            <ul className="hidden sm:flex items-center space-x-5">
                {navlinks.map((elem, index) => (
                    <li
                        className="hover:bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full shadow-lg hover:scale-110 transition-transform text-white cursor-pointer"
                        key={index}
                    >
                        <Link to={elem.url}>{elem.title}</Link>
                    </li>
                ))}
            </ul>

            {/* Menu Button (Hamburger) */}
            <div className="sm:hidden flex items-center">
                <span onClick={() => setOpen(!open)}>
                    <IoMenu size={40} />
                </span>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="sm:hidden fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-center pt-10">
                    {/* Close Button */}
                    <div className="absolute top-4 right-6">
                        <span onClick={() => setOpen(false)}>
                            <IoClose
                                size={40}
                                className="text-white cursor-pointer"
                            />
                        </span>
                    </div>

                    {/* Mobile Links */}
                    <ul className="flex flex-col items-center space-y-5 mt-10">
                        {navlinks.map((elem, index) => (
                            <li
                                className="text-white text-lg cursor-pointer list-none"
                                key={index}
                                onClick={() => setOpen(false)} // Close menu on click
                            >
                                <Link to={elem.url}>{elem.title}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Contact Button */}
                    <button
                        className="mt-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                        onClick={() => setOpen(false)} // Close menu on click
                    >
                        Contact
                    </button>
                </div>
            )}

            {/* Contact Button (Desktop) */}
            <button className="hidden sm:block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                Contact
            </button>
        </div>
    );
};

export default Header;
