import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
    const banners = [
        {
            image:
                "https://plus.unsplash.com/premium_photo-1681823643449-3c3d99541b0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
            title: "We Build Construction & Consultancy",
            text: "A Bangladesh-based architecture & construction firm",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1663046024054-47d889bb1f1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            title: "Constructing Durable Bridges for the Future",
            text: "Focusing on longevity and safety, we establish vital connections across the nation.",
        },
        {
            image: "https://images.unsplash.com/photo-1757836263314-e3fa9c1dd820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            title: "Delivering Reliable Railway Infrastructure",
            text: "Committed to building modern railway lines and stations that blend speed and uncompromising safety.",
        },
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden" id="home">
            {/* 1. Swiper instance setup */}
            <Swiper
                spaceBetween={0}
                centeredSlides
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={1000}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full bannerSwiper"
            >
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
            </Swiper>

            {/* 3. Custom Navigation Buttons (Modern Design) */}
            <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer p-3 md:p-4 bg-white/20 hover:bg-blue-600/80 backdrop-blur-sm rounded-full transition-all duration-300 shadow-2xl opacity-70 hover:opacity-100 group">
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer p-3 md:p-4 bg-white/20 hover:bg-blue-600/80 backdrop-blur-sm rounded-full transition-all duration-300 shadow-2xl opacity-70 hover:opacity-100 group">
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>

            {/* 4. Custom Styling for Swiper and Buttons */}
            <style jsx global>{`
                /* Default Swiper icons hide */
                .bannerSwiper .swiper-button-prev:after,
                .bannerSwiper .swiper-button-next:after {
                    content: '';
                    font-size: 0;
                }
                .swiper-button-prev-custom:after,
                .swiper-button-next-custom:after {
                    content: none; 
                }

                /* Pagination (Dots) Styling - Blue Active Dot */
                .bannerSwiper .swiper-pagination-bullet-active {
                    background: #3b82f6 !important; 
                    width: 12px;
                    height: 12px;
                    transform: scale(1.2); 
                }
                .bannerSwiper .swiper-pagination-bullet {
                    background: white; 
                    opacity: 0.7;
                    transition: all 0.3s;
                }

                /* Extra Text Shadow for better readability */
                .shadow-text {
                    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);
                }

                /* Simple Keyframe Animation for content entrance */
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0; 
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
                .delay-400 {
                    animation-delay: 0.4s;
                }

            `}</style>
        </div>
    );
};

export default Banner;