

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const CALL_NUMBER = "+880 1704072945";

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            setScrollingDown(currentScroll > lastScroll && currentScroll > 80);

            setIsScrolled(currentScroll > 50);
            setLastScroll(currentScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
            }
        },
        open: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        }
    };

    const mobileItemVariants = {
        closed: {
            opacity: 0,
            x: 50
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    const logoSrc = isScrolled
        ? "https://infratech.ancorathemes.com/wp-content/uploads/2025/09/logo-dark-retina.png"
        : "https://infratech.ancorathemes.com/wp-content/uploads/2025/09/logo-dark-retina.png";

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out 
                ${scrollingDown ? "-translate-y-full" : "translate-y-0"}
                ${isScrolled
                    ? "bg-[#262425] text-white shadow-2xl shadow-black/5 backdrop-blur-sm"
                    : "bg-transparent text-white"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

                {/* 1. Logo */}
                <NavLink to="/">
                    <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >

                       <img className="w-[100px]" src="https://i.ibb.co.com/9m2HxqJW/WBCC.png" alt="" />
                    </motion.div>
                </NavLink>

                <div className="hidden lg:flex flex-1 justify-center">
                    <motion.div
                        className="flex items-center space-x-1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {navItems.map((item, i) => {
                            return (
                                <motion.div
                                    key={item.name}
                                    variants={itemVariants}
                                    custom={i}
                                    className="relative"
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `relative px-4 py-2 font-medium transition-all duration-300 group inline-flex items-center justify-center 
                                            ${isScrolled
                                                ? "text-white hover:text-blue-400"
                                                : "text-white hover:text-blue-300"
                                            } 
                                            ${isActive
                                                ? isScrolled ? "text-blue-400" : "text-blue-300"
                                                : ""
                                            }`
                                        }
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        <motion.div
                                            className={`absolute left-0 bottom-0 h-[2px] 
                                                ${isScrolled ? "bg-blue-400" : "bg-blue-300"} 
                                                w-0 transition-all duration-300 ease-out 
                                                group-hover:w-full z-20`}
                                        />
                                        {location.pathname === item.path && (
                                            <motion.div
                                                className={`absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full 
                                                    ${isScrolled ? "bg-blue-400" : "bg-blue-300"}`}
                                                layoutId="activeIndicator"
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </NavLink>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="flex items-center space-x-4">

                    <div className="flex items-center space-x-4">

                        <a
                            href={`tel:${CALL_NUMBER}`}
                            className="hidden md:flex items-center space-x-2 mr-2 text-white transition-colors duration-300 group hover:text-blue-400"
                        >
                            <FiPhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <h1 className="text-lg font-medium tracking-wider cursor-pointer">

                                +880 1704072945
                            </h1>
                        </a>

                        <motion.a
                            href={`tel:${CALL_NUMBER}`}
                            className="hidden lg:flex items-center space-x-3 px-6 py-3 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all duration-300 
            bg-orange-400 text-white  active:scale-95"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiPhoneCall className="w-5 h-5" />
                            <span>CALL US</span>
                        </motion.a>

                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className={`lg:hidden p-2 rounded-xl transition-all ${isScrolled ? "text-white hover:bg-white/10" : "text-white hover:bg-black/10"}`}
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <CiMenuFries className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 h-screen w-full bg-black/50 backdrop-blur-sm lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute  h-full w-full max-w-full bg-[#262425] shadow-2xl p-6 flex flex-col items-start space-y-8"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                        >
                            <motion.button
                                onClick={closeMenu}
                                className="p-3 text-white hover:bg-white/10 rounded-xl self-end"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                variants={mobileItemVariants}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            <motion.div
                                className="flex flex-col space-y-4 w-full"
                                initial="closed"
                                animate="open"
                                variants={containerVariants}
                            >
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        variants={mobileItemVariants}
                                    >
                                        <NavLink
                                            to={item.path}
                                            onClick={closeMenu}
                                            className={({ isActive }) =>
                                                `text-xl font-semibold py-2 block transition-colors border-l-4 pl-4 ${isActive
                                                    ? "text-blue-400 border-blue-400"
                                                    : "text-white border-transparent hover:text-blue-300 hover:border-blue-300"
                                                }`
                                            }
                                        >
                                            {item.name}
                                            {location.pathname === item.path && (
                                                <motion.span
                                                    className="absolute left-1/2 -bottom-1 w-2 h-2 bg-blue-400 rounded-full"
                                                    layoutId="mobileActiveIndicator"
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                />
                                            )}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.a
                                href={`tel:${CALL_NUMBER}`}
                                onClick={closeMenu}
                                className="flex items-center justify-center w-full mt-auto space-x-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 
                                    bg-blue-600 text-white hover:bg-blue-700 active:scale-95 "
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variants={mobileItemVariants}
                            >
                                <FiPhoneCall className="w-5 h-5" />
                                <span>Call: {CALL_NUMBER}</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;