import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AboutBanner = () => {
    // 🌟 Updated Banner Data with Professional English Content 🌟
    const banners = [
        {
            image:
                "https://plus.unsplash.com/premium_photo-1681823643449-3c3d99541b0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
            title: "We Build Construction & Consultancy",
            text: "A Bangladesh-based architecture & construction firm",
        }

    ];

    return (
        <div className="relative w-full h-screen  overflow-hidden" id="home">


            {/* 2. Swiper Slides Mapping */}
            {banners.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                        {/* Image Layer with subtle hover effect */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-in-out hover:scale-105"
                        />

                        {/* Overlay Layer and Text Content */}
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6 md:px-12">
                            <h2 className="text-xl md:text-5xl  font-extrabold mb-4 tracking-tight shadow-text animate-fadeInUp">
                                {item.title}
                            </h2>
                            <p className="text-md md:text-xl lg:text-2xl max-w-4xl font-light mb-10 opacity-95 animate-fadeInUp delay-200">
                                {item.text}
                            </p>
                            {/* Conditional Button Rendering */}
                            {item.button && (
                                <button className="px-10 py-4 bg-blue-600 text-white font-bold text-lg uppercase tracking-wider rounded-lg shadow-xl transition-all duration-300 hover:bg-white hover:text-blue-600 transform hover:scale-[1.02] active:scale-95 animate-fadeInUp delay-400">
                                    {item.button}
                                </button>
                            )}
                        </div>
                    </div>
                </SwiperSlide>
            ))}



        </div>
    );
};

export default AboutBanner;