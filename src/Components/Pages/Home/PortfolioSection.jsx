import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ArrowRight,
    ArrowLeft,
    Building2,
    Home,
    Building,
    Hammer,
    Ruler,
    PaintBucket,
    Wrench,
    Users,
    Monitor,
    Coffee,
    Trees
} from "lucide-react";

const PortfolioSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "Modern Luxury Villa",
            category: "residential",
            type: "Modern House Design",
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "A contemporary luxury villa featuring sustainable materials and smart home technology.",
            details: {
                area: "4500 sq ft",
                duration: "18 months",
                location: "Dhaka, Bangladesh",
                features: ["Smart Home Automation", "Solar Power System", "Rainwater Harvesting", "Landscape Garden"]
            }
        },
        {
            id: 2,
            title: "Corporate Headquarters",
            category: "commercial",
            type: "Commercial Building",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "15-story corporate office building with modern amenities and sustainable design.",
            details: {
                area: "85,000 sq ft",
                duration: "24 months",
                location: "Uttara, Dhaka",
                features: ["LEED Certified", "Central AC System", "Underground Parking", "Green Roof"]
            }
        },
        {
            id: 3,
            title: "Penthouse Renovation",
            category: "interior",
            type: "Interior Renovation",
            image: "https://plus.unsplash.com/premium_photo-1664301045332-b037631b8a56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1944",
            description: "Complete interior transformation of a luxury penthouse with premium finishes.",
            details: {
                area: "3200 sq ft",
                duration: "6 months",
                location: "Gulshan, Dhaka",
                features: ["Custom Cabinetry", "Italian Marble", "Smart Lighting", "Home Theater"]
            }
        },
        {
            id: 4,
            title: "Tech Startup Office",
            category: "office",
            type: "Office Space Planning",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            description: "Collaborative workspace designed for a growing technology startup with agile work environment.",
            details: {
                area: "12,000 sq ft",
                duration: "8 months",
                location: "Banani, Dhaka",
                features: ["Open Plan Layout", "Conference Rooms", "Cafeteria", "Recreation Zone", "Standing Desks", "Video Conferencing"]
            }
        },
        {
            id: 5,
            title: "Contemporary Residence",
            category: "residential",
            type: "Modern House Design",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Minimalist family home with clean lines and natural light optimization.",
            details: {
                area: "3800 sq ft",
                duration: "14 months",
                location: "Baridhara, Dhaka",
                features: ["Floor-to-Ceiling Windows", "Japanese Garden", "Home Office", "Kids Play Area"]
            }
        },
        {
            id: 6,
            title: "Restaurant Interior",
            category: "interior",
            type: "Interior Renovation",
            image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            description: "Upscale restaurant interior with custom lighting and acoustic design.",
            details: {
                area: "5000 sq ft",
                duration: "5 months",
                location: "Dhanmondi, Dhaka",
                features: ["Custom Lighting", "Acoustic Panels", "Open Kitchen", "Private Dining"]
            }
        },
        {
            id: 7,
            title: "Shopping Complex",
            category: "commercial",
            type: "Commercial Building",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Multi-level shopping complex with modern retail spaces and food court.",
            details: {
                area: "150,000 sq ft",
                duration: "30 months",
                location: "Bashundhara, Dhaka",
                features: ["Escalators & Elevators", "Food Court", "Parking for 500+", "Security System"]
            }
        },
        {
            id: 8,
            title: "Corporate Office Design",
            category: "office",
            type: "Office Space Planning",
            image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
            description: "Executive office spaces designed for productivity and employee wellbeing.",
            details: {
                area: "25,000 sq ft",
                duration: "10 months",
                location: "Motijheel, Dhaka",
                features: ["Executive Suites", "Meeting Rooms", "Wellness Room", "Cafeteria", "Biophilic Design", "Ergonomic Furniture"]
            }
        },
        {
            id: 9,
            title: "Creative Agency Workspace",
            category: "office",
            type: "Office Space Planning",
            image: "https://plus.unsplash.com/premium_photo-1661957690855-693887d13b87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
            description: "Inspirational workspace for creative professionals with collaborative zones.",
            details: {
                area: "8,000 sq ft",
                duration: "6 months",
                location: "Gulshan, Dhaka",
                features: ["Collaborative Zones", "Brainstorming Areas", "Digital Studio", "Client Meeting Lounge"]
            }
        },
        {
            id: 10,
            title: "Co-working Space Design",
            category: "office",
            type: "Office Space Planning",
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            description: "Modern co-working space with flexible workstations and community areas.",
            details: {
                area: "15,000 sq ft",
                duration: "7 months",
                location: "Uttara, Dhaka",
                features: ["Flexible Desks", "Private Pods", "Event Space", "High-Speed Internet", "24/7 Access"]
            }
        }
    ];

    const categories = [
        { key: "all", label: "All Projects", icon: <Building2 size={20} /> },
        { key: "residential", label: "Residential", icon: <Home size={20} /> },
        { key: "commercial", label: "Commercial", icon: <Building size={20} /> },
        { key: "office", label: "Office Planning", icon: <Monitor size={20} /> },
        { key: "interior", label: "Interior", icon: <PaintBucket size={20} /> }
    ];


    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.category === filter);

    const getNextProject = () => {
        const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
        return projects[(currentIndex + 1) % projects.length];
    };

    const getPrevProject = () => {
        const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
        return projects[(currentIndex - 1 + projects.length) % projects.length];
    };

    return (
        <div className="bg-white py-20 max-w-full mx-auto px-5 md:px-20 font-ruda">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    We deliver smart building projects
                </h2>
                <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                    Showcasing our excellence in construction, architecture, and interior design projects across Bangladesh.
                </p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
            >
                {categories.map((category) => (
                    <button
                        key={category.key}
                        onClick={() => setFilter(category.key)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${filter === category.key
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600"
                            }`}
                    >
                        {category.icon}
                        {category.label}
                    </button>
                ))}
            </motion.div>

            {/* Office Planning Features Section - Show only when office tab is selected */}
            {filter === "office" && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >

                </motion.div>
            )}

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="group cursor-pointer bg-white border-2 border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-200"
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* Image Container */}
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/95 text-gray-800 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                    {project.type}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Ruler size={16} />
                                    <span className="text-sm">{project.details.area}</span>
                                </div>
                                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
                                    View Details
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-colors duration-200"
                                >
                                    <X size={24} />
                                </button>

                                {/* Navigation Arrows */}
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button
                                        onClick={() => setSelectedProject(getPrevProject())}
                                        className="bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-colors duration-200"
                                    >
                                        <ArrowLeft size={20} />
                                    </button>
                                    <button
                                        onClick={() => setSelectedProject(getNextProject())}
                                        className="bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-colors duration-200"
                                    >
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 md:p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {selectedProject.type}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                                    {selectedProject.title}
                                </h3>

                                <p className="text-gray-600 text-lg mb-8">
                                    {selectedProject.description}
                                </p>

                                {/* Project Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-4 text-gray-900">Project Details</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Ruler size={20} className="text-blue-600" />
                                                <div>
                                                    <p className="font-medium text-gray-900">Area</p>
                                                    <p className="text-gray-600">{selectedProject.details.area}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Hammer size={20} className="text-blue-600" />
                                                <div>
                                                    <p className="font-medium text-gray-900">Duration</p>
                                                    <p className="text-gray-600">{selectedProject.details.duration}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Building2 size={20} className="text-blue-600" />
                                                <div>
                                                    <p className="font-medium text-gray-900">Location</p>
                                                    <p className="text-gray-600">{selectedProject.details.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold mb-4 text-gray-900">Key Features</h4>
                                        <ul className="space-y-2">
                                            {selectedProject.details.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-3">
                                                    <Wrench size={16} className="text-green-600 flex-shrink-0" />
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioSection;