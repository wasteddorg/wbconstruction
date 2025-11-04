


// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { CiMenuFries } from "react-icons/ci";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [scrollingDown, setScrollingDown] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [lastScroll, setLastScroll] = useState(0);
//     const location = useLocation();

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//     const closeMenu = () => setIsMenuOpen(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScroll = window.scrollY;

//             // স্ক্রল ডাউন হলে এবং 80px এর বেশি হলে লুকাবে।
//             // উপরে স্ক্রল করলেই আবার দেখাবে (কারণ currentScroll > lastScroll মিথ্যা হবে)।
//             setScrollingDown(currentScroll > lastScroll && currentScroll > 80);

//             setIsScrolled(currentScroll > 50);
//             setLastScroll(currentScroll);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [lastScroll]);

//     const navItems = [
//         { name: "Home", path: "/" },
//         { name: "About", path: "/about" },
//         { name: "Services", path: "/services" },
//         { name: "Portfolio", path: "/portfolio" },
//         { name: "Contact", path: "/contact" }
//     ];

//     // ... (Your framer-motion variants remain unchanged)
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: {
//             opacity: 0,
//             y: -20,
//             scale: 0.9
//         },
//         visible: {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 24
//             }
//         }
//     };

//     const mobileMenuVariants = {
//         closed: {
//             opacity: 0,
//             scale: 0.95,
//             transition: {
//                 duration: 0.2
//             }
//         },
//         open: {
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.3,
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const mobileItemVariants = {
//         closed: {
//             opacity: 0,
//             x: -50
//         },
//         open: {
//             opacity: 1,
//             x: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 300
//             }
//         }
//     };
//     // ...

//     return (
//         <motion.nav
//             // ⚠️ মুখ্য পরিবর্তন: Framer motion animation সরিয়ে শুধু Tailwind ক্লাস রাখা হলো।
//             className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out 
//                 ${scrollingDown ? "-translate-y-full" : "translate-y-0"}
//                 ${isScrolled
//                     ? "bg-white/90 shadow-2xl shadow-black/5 backdrop-blur-sm"
//                     : "bg-transparent"
//                 }`}
//         // initial={{ y: -100 }} <--- Removed
//         // animate={{ y: 0 }}   <--- Removed
//         // transition={{ type: "spring", stiffness: 100, damping: 20 }} <--- Removed
//         >
//             <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
//                 {/* Logo */}
//                 <Link to="/"> <motion.div
//                     className="flex items-center"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     <img
//                         src={
//                             isScrolled
//                                 ? "https://infratech.ancorathemes.com/wp-content/uploads/2025/09/logo-dark-retina.png"
//                                 : "https://infratech.ancorathemes.com/wp-content/uploads/2025/09/logo-dark-retina.png"
//                         }
//                         alt="Logo"
//                         className="w-[100px] h-[40px] md:w-[180px] md:h-[50px]  object-contain transition-all duration-500"
//                     />
//                 </motion.div></Link>

//                 {/* Desktop Menu */}
//                 <motion.div
//                     className="hidden lg:flex items-center space-x-1"
//                     variants={containerVariants}
//                     initial="hidden"
//                     // animate prop টি এখানে অক্ষত রাখা হয়েছে, কারণ এটি ন্যাভ আইটেমগুলির
//                     // শুরুতে একবারের জন্য সুন্দর এন্ট্রি অ্যানিমেশন দেয়।
//                     animate="visible"
//                 >
//                     {navItems.map((item, i) => {
//                         const isActive = location.pathname === item.path;
//                         return (
//                             <motion.div
//                                 key={item.name}
//                                 variants={itemVariants}
//                                 custom={i}
//                                 className="relative"
//                             >
//                                 <NavLink
//                                     to={item.path}
//                                     className={({ isActive }) =>
//                                         `relative px-4 py-2 font-medium transition-all duration-300 group inline-flex items-center justify-center ${isScrolled
//                                             ? "text-gray-700 hover:text-blue-600"
//                                             : "text-white hover:text-blue-200"
//                                         } ${isActive
//                                             ? isScrolled ? "text-blue-600" : "text-blue-300"
//                                             : ""
//                                         }`
//                                     }
//                                 >
//                                     {/* The rest of the nav item code... */}
//                                     <span className="relative z-10">{item.name}</span>
//                                     <motion.div
//                                         className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] 
//                                             ${isScrolled ? "bg-blue-600" : "bg-blue-200"} 
//                                             w-0 transition-all duration-300 ease-out 
//                                             group-hover:w-full z-20`}
//                                     />
//                                     <motion.div
//                                         className={`absolute inset-0 rounded-xl ${isScrolled ? "bg-blue-50" : "bg-white/10"
//                                             }`}
//                                         initial={false}
//                                         whileHover={{ scale: 1 }}
//                                         style={{ scale: 0 }}
//                                         transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                                     />
//                                     {isActive && (
//                                         <motion.div
//                                             className={`absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full ${isScrolled ? "bg-blue-600" : "bg-blue-300"
//                                                 }`}
//                                             layoutId="activeIndicator"
//                                             transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                                         />
//                                     )}
//                                 </NavLink>
//                             </motion.div>
//                         );
//                     })}

//                     {/* Action Buttons */}
//                     <motion.div
//                         className="flex items-center space-x-4 ml-8"
//                         variants={itemVariants}
//                     >
//                         <div className={`h-6 w-px ${isScrolled ? "bg-gray-300" : "bg-white/30"}`} />
//                         {/* ENG Button */}
//                         <motion.button
//                             className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all ${isScrolled
//                                 ? "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                                 : "text-white hover:text-blue-200 hover:bg-white/10"
//                                 }`}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <Link to="/bookconsulation">  <span>Book Consultation</span></Link>
//                             <motion.svg
//                                 className="w-4 h-4"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 animate={{ rotate: isMenuOpen ? 180 : 0 }}
//                                 transition={{ duration: 0.2 }}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                             </motion.svg>
//                         </motion.button>
//                         {/* Search Button */}
//                         <motion.button
//                             className={`p-2 rounded-lg transition-all ${isScrolled
//                                 ? "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                                 : "text-white hover:text-blue-200 hover:bg-white/10"
//                                 }`}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </motion.button>
//                     </motion.div>
//                 </motion.div>

//                 {/* Mobile Menu Button */}
//                 <motion.button
//                     className={`lg:hidden p-2 rounded-xl transition-all ${isScrolled
//                         ? "text-gray-700 hover:bg-gray-100"
//                         : "text-white hover:bg-white/10"
//                         }`}
//                     onClick={toggleMenu}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     {!isMenuOpen ? (
//                         <CiMenuFries className="w-6 h-6" />
//                     ) : (
//                         <motion.div
//                             animate={isMenuOpen ? "open" : "closed"}
//                             className="relative w-6 h-6"
//                         >
//                             <motion.span
//                                 className="absolute top-1 left-0 w-6 h-0.5 bg-current rounded-full"
//                                 variants={{
//                                     closed: { rotate: 0, y: 0 },
//                                     open: { rotate: 45, y: 7 }
//                                 }}
//                             />
//                             <motion.span
//                                 className="absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full"
//                                 variants={{
//                                     closed: { opacity: 1 },
//                                     open: { opacity: 0 }
//                                 }}
//                             />
//                             <motion.span
//                                 className="absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full"
//                                 variants={{
//                                     closed: { rotate: 0, y: 0 },
//                                     open: { rotate: -45, y: -7 }
//                                 }}
//                             />
//                         </motion.div>
//                     )}
//                 </motion.button>
//             </div>

//             {/* Mobile Menu Overlay */}
//             <AnimatePresence>
//                 {isMenuOpen && (
//                     <motion.div
//                         className="fixed inset-0 h-screen bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl lg:hidden"
//                         initial="closed"
//                         animate="open"
//                         exit="closed"
//                         variants={mobileMenuVariants}
//                     >
//                         {/* Close Button */}
//                         <motion.button
//                             onClick={closeMenu}
//                             className="absolute top-6 right-6 p-3 hover:bg-white/10 rounded-xl text-white"
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             variants={mobileItemVariants}
//                         >
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </motion.button>

//                         {/* Mobile Menu Content */}
//                         <div className="h-full flex flex-col justify-center items-center px-6">
//                             {/* Navigation Items */}
//                             <motion.div
//                                 className="flex flex-col space-y-8 text-center w-full max-w-sm"
//                                 variants={containerVariants}
//                                 initial="hidden"
//                                 animate="visible"
//                             >
//                                 {navItems.map((item, i) => (
//                                     <motion.div
//                                         key={item.name}
//                                         custom={i}
//                                         variants={mobileItemVariants}
//                                     >
//                                         <NavLink
//                                             to={item.path}
//                                             onClick={closeMenu}
//                                             className={({ isActive }) =>
//                                                 `relative text-3xl font-semibold py-3 block transition-all ${isActive
//                                                     ? "text-blue-400"
//                                                     : "text-white hover:text-blue-300"
//                                                 }`
//                                             }
//                                         >
//                                             {item.name}
//                                             {location.pathname === item.path && (
//                                                 <motion.span
//                                                     className="absolute left-1/2 -bottom-1 w-2 h-2 bg-blue-400 rounded-full"
//                                                     layoutId="mobileActiveIndicator"
//                                                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                                                 />
//                                             )}
//                                         </NavLink>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>

//                             {/* Mobile Action Buttons */}
//                             <motion.div
//                                 className="absolute bottom-10 left-0 right-0 flex justify-center space-x-6"
//                                 variants={mobileItemVariants}
//                             >
//                                 <Link to="/bookconsulation">
//                                     <button className="text-white hover:text-blue-300 transition-colors">
//                                         Book Consultation
//                                     </button>
//                                 </Link>

//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.nav>
//     );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci"; // মেনু আইকন
import { FiPhoneCall } from "react-icons/fi"; // কল আইকন

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);
    // isScrolled: স্ক্রল করার পর Navbar এর স্টাইল পরিবর্তনের জন্য।
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // ডামি ফোন নম্বর
    const CALL_NUMBER = "+8801712345678";

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Navbar লুকানো/দেখানোর লজিক
            setScrollingDown(currentScroll > lastScroll && currentScroll > 80);

            // bg-black/white পরিবর্তনের জন্য লজিক
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

    // Nav Items-এর এন্ট্রি অ্যানিমেশন (Desktop)
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

    // Mobile Menu অ্যানিমেশন: Opacity সহ সাইডবার (ডান দিক থেকে স্লাইড)
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
                        {/* লোগো সোর্স isScrolled এর উপর নির্ভর করে পরিবর্তন হবে */}
                        <img
                            src={logoSrc}
                            alt="Logo"
                            className="w-[140px] h-[40px] md:w-[150px] md:h-[45px] object-contain transition-all duration-500"
                        />
                    </motion.div>
                </NavLink>

                {/* 2. Desktop Menu: Nav Items Center এবং Call Button */}
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
                                        // ⚠️ ফিক্স করা হয়েছে: isActive ডিস্ট্রাকচার করে নেওয়া হয়েছে
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
                                        {/* Underline Indicator (Hover Effect) */}
                                        <motion.div
                                            className={`absolute left-0 bottom-0 h-[2px] 
                                                ${isScrolled ? "bg-blue-400" : "bg-blue-300"} 
                                                w-0 transition-all duration-300 ease-out 
                                                group-hover:w-full z-20`}
                                        />
                                        {/* Active Dot Indicator */}
                                        {location.pathname === item.path && ( // location.pathname ব্যবহার করা হয়েছে
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

                {/* Call Button (Last Item) & Mobile Menu Button */}
                <div className="flex items-center space-x-4">

                    <div className="flex items-center space-x-4">

                        <a
                            href={`tel:${CALL_NUMBER}`}
                            className="hidden md:flex items-center space-x-2 mr-2 text-white transition-colors duration-300 group hover:text-blue-400"
                        >
                            <FiPhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <h1 className="text-lg font-medium tracking-wider cursor-pointer">

                                +017 xxxx xxxxx
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

                        {/* Mobile Menu Button, etc. (Other items will go here) */}
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

            {/* 3. Mobile Menu Overlay (Animated Sidebar) */}
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
                            {/* Close Button at the top right of the sidebar */}
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

                            {/* Navigation Items */}
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
                                            // ⚠️ ফিক্স করা হয়েছে: isActive ডিস্ট্রাকচার করে নেওয়া হয়েছে
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

                            {/* Mobile Call Button (Sidebar-এর নীচে) */}
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