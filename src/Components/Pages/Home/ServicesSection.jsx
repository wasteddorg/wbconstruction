import React from "react";
import { motion } from "framer-motion";
import {
    PenTool,
    HardHat,
    FileText,
    Home,
    ArrowRight,
    Lightbulb,
    Calendar,
    Users,
    CheckCircle
} from "lucide-react";

const ServicesSection = () => {
    const mainServices = [
        {
            icon: <PenTool size={48} />,
            title: "Architecture & Design",
            description: "Innovative architectural solutions that blend creativity with functionality, creating spaces that inspire and endure.",
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            icon: <HardHat size={48} />,
            title: "Construction Management",
            description: "End-to-end project management ensuring quality, timeliness, and budget adherence from ground-breaking to completion.",
            gradient: "from-green-500 to-emerald-400"
        },
        {
            icon: <FileText size={48} />,
            title: "Consultancy",
            description: "Expert guidance on construction methodologies, regulatory compliance, and sustainable building practices.",
            gradient: "from-purple-500 to-pink-400"
        },
        {
            icon: <Home size={48} />,
            title: "Interior & Renovation",
            description: "Transform your spaces with our bespoke interior design and renovation services that reflect your personality.",
            gradient: "from-orange-500 to-red-400"
        }
    ];

    const workflowSteps = [
        {
            step: "01",
            icon: <Lightbulb size={32} />,
            title: "Concept & Design",
            description: "We transform your ideas into detailed architectural plans and 3D visualizations.",
            color: "blue"
        },
        {
            step: "02",
            icon: <Calendar size={32} />,
            title: "Planning & Approval",
            description: "Handling all necessary permits, approvals, and creating comprehensive project timelines.",
            color: "green"
        },
        {
            step: "03",
            icon: <Users size={32} />,
            title: "Construction & Supervision",
            description: "Professional execution with daily supervision and quality control at every stage.",
            color: "purple"
        },
        {
            step: "04",
            icon: <CheckCircle size={32} />,
            title: "Delivery & Support",
            description: "Final handover with comprehensive documentation and ongoing maintenance support.",
            color: "orange"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardHoverVariants = {
        rest: {
            scale: 1,
            rotate: 0,
            y: 0
        },
        hover: {
            scale: 1.05,
            rotate: 1,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="bg-[#0a0f1c] text-white font-ruda overflow-hidden">

            {/* Main Services Section */}
            <section className="py-20 px-5 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Our Main Services
                    </h2>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                        Comprehensive construction solutions tailored to bring your vision to life with precision and excellence.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {mainServices.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            className="group relative"
                        >
                            <div className="relative bg-[#0a0f1c] rounded-xl p-8 border border-gray-800 overflow-hidden">
                                {/* Animated Gradient Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <motion.div
                                        className={`mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    <h3 className="text-2xl font-bold mb-4 text-white">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <motion.div
                                        className="flex items-center text-cyan-400 font-semibold cursor-pointer"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Learn More
                                        <ArrowRight size={20} className="ml-2" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Project Workflow Section */}
            <section className="py-20 bg-white text-gray-900">
                <div className="px-5 md:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            How We Work
                        </h2>
                        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                            Our proven 4-step process ensures your project is delivered with precision, transparency, and excellence.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {workflowSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative text-center group"
                                >
                                    {/* Step Number */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto relative z-10">
                                        {step.step}
                                    </div>

                                    {/* Card */}
                                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 group-hover:border-blue-300 transition-all duration-300">
                                        <div className={`text-${step.color}-500 mb-4 flex justify-center`}>
                                            {step.icon}
                                        </div>

                                        <h3 className="text-xl font-bold mb-4 text-gray-800">
                                            {step.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServicesSection;