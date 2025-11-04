import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ArrowUp, Rocket, ArrowUpToLine } from 'lucide-react';
import Navbar from '../Components/Pages/Shared/Navbar/Navbar';
import Footer from '../Components/Pages/Shared/Footer/Footer';

const Mainlayout = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [buttonStyle, setButtonStyle] = useState('modern'); // 'modern', 'gradient', 'rocket'
    const location = useLocation();

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0, y: 50 }
    };

    const ModernButton = () => (
        <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{
                scale: 1.1,
                backgroundColor: "#1e40af"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-4 rounded-2xl border-2 border-white hover:shadow-xl transition-all duration-300 group"
        >
            <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowUp size={24} />
            </motion.div>
        </motion.button>
    );

    const GradientButton = () => (
        <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{
                scale: 1.05,
                rotate: 5,
            }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-full border-2 border-white hover:shadow-xl transition-all duration-300 group"
        >
            <div className="relative">
                <ChevronUp size={24} />
                <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </motion.button>
    );

    const RocketButton = () => (
        <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{
                scale: 1.1,
                y: -5
            }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-2xl border-2 border-white hover:shadow-xl transition-all duration-300 group"
        >
            <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Rocket size={24} className="group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>
            <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.button>
    );

    const MinimalButton = () => (
        <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{
                scale: 1.05,
                backgroundColor: "#1f2937"
            }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gray-800 text-white p-3 rounded-full border border-gray-600 hover:shadow-lg transition-all duration-300 group"
        >
            <ArrowUpToLine size={20} className="group-hover:text-gray-200" />
        </motion.button>
    );

    const renderButton = () => {
        switch (buttonStyle) {
            case 'modern':
                return <ModernButton />;
            case 'gradient':
                return <GradientButton />;
            case 'rocket':
                return <RocketButton />;
            case 'minimal':
                return <MinimalButton />;
            default:
                return <ModernButton />;
        }
    };

    return (
        <div className='font-ruda relative'>
            <Navbar />
            <Outlet />
            <Footer />

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {isVisible && renderButton()}
            </AnimatePresence>

            {/* Style Selector - Remove this in production */}
            <div className="fixed bottom-8 left-8 z-50 bg-white border border-gray-200 rounded-lg p-2 shadow-lg hidden">
                <select
                    value={buttonStyle}
                    onChange={(e) => setButtonStyle(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                </select>
            </div>
        </div>
    );
};

export default Mainlayout;