import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Leaf, Hammer, Building2 } from "lucide-react";

const AboutSection = () => {
    return (
        <div className="bg-[#f8f9fa] text-gray-900 font-ruda overflow-hidden">

            {/* About Section */}
            <section className="py-20 px-5 md:px-20 bg-white">
                <div className="grid md:grid-cols-2 gap-10 items-stretch ">
                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-full overflow-hidden "
                    >
                        <img
                            src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1046"
                            alt="about construction"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </motion.div>

                    {/* Content Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col space-y-10 justify-center h-full"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                            About Our Company
                        </h2>
                        <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                            <span className="font-semibold text-gray-900">
                                We Build Construction & Consultancy
                            </span>{" "}
                            is a Bangladesh-based architecture and construction firm dedicated
                            to designing innovative spaces and building durable structures.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                            Our team combines creativity, technical expertise, and sustainable
                            practices to turn your vision into reality.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-4"
                        >
                            <div className="flex flex-wrap gap-4 mb-4">
                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                    ✓ Professional Team
                                </span>
                                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                    ✓ Quality Assurance
                                </span>
                                <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                                    ✓ On-time Delivery
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                With over a decade of experience, we have successfully completed
                                200+ projects across Bangladesh, earning trust and recognition
                                in the construction industry.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[#262425] text-white">
                <div className="px-5 md:px-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-center"
                    >
                        Why Choose Us
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg"
                    >
                        We are committed to delivering exceptional construction services
                        with a focus on quality, innovation, and customer satisfaction.
                    </motion.p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Building2 size={48} />,
                                title: "10+ Years of Experience",
                                desc: "Trusted expertise in construction and architecture with proven track record.",
                            },
                            {
                                icon: <Hammer size={48} />,
                                title: "Innovative Design Solutions",
                                desc: "We craft creative and functional architectural designs tailored to your needs.",
                            },
                            {
                                icon: <Leaf size={48} />,
                                title: "Sustainable Practices",
                                desc: "We prioritize eco-friendly and energy-efficient building solutions.",
                            },
                            {
                                icon: <CheckCircle size={48} />,
                                title: "Client-Centric Approach",
                                desc: "Your vision is our priority - we turn ideas into reality seamlessly.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                className="bg-[#2d2a2b] rounded-xl p-8 border border-[#3a3637] hover:border-[#4a4546] transition-all duration-300"
                            >
                                <motion.div
                                    className="flex justify-center mb-6 text-[#d4af37]"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-4 text-center text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-center leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                    >
                        {[
                            { number: "200+", label: "Projects Completed" },
                            { number: "50+", label: "Happy Clients" },
                            { number: "10+", label: "Years Experience" },
                            { number: "24/7", label: "Support" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                className="p-4"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;