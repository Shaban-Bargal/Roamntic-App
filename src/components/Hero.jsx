import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    
    // تأثير بارالاكس خفيف عند التمرير
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <motion.section
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white bg-[#030014] selection:bg-purple-500/30"
        >
            {/* 1. الخلفية السينمائية المتطورة */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.2, filter: 'blur(10px)' }}
                    animate={{ scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2000"
                    className="w-full h-full object-cover opacity-60 scale-110"
                    alt="Background"
                />
                {/* Overlay Layers */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/80 via-transparent to-[#030014]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
            </div>

            {/* 2. جزيئات عائمة (Floating Dust) */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full z-10"
                    initial={{ 
                        x: Math.random() * 2000 - 1000, 
                        y: Math.random() * 1000, 
                        opacity: 0 
                    }}
                    animate={{ 
                        y: [null, -1000], 
                        opacity: [0, 1, 0] 
                    }}
                    transition={{ 
                        duration: Math.random() * 10 + 10, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                />
            ))}

            {/* 3. المحتوى الرئيسي */}
            <motion.div style={{ y: y1, opacity }} className="z-20 flex flex-col items-center text-center px-4">
                
                {/* الشارة العلوية */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-inner flex items-center gap-3"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium text-pink-200/70">
                        إلى أغلى ما أملك
                    </span>
                </motion.div>

                {/* الاسم بتأثير ذهبي/أبيض متدرج */}
                <motion.h1
                    initial={{ letterSpacing: "0.5em", filter: "blur(12px)", opacity: 0 }}
                    animate={{ letterSpacing: "0.1em", filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="text-7xl md:text-[11rem] font-black leading-none mb-4"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-t from-gray-400 via-white to-white drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]">
                        SARA
                    </span>
                </motion.h1>

                {/* الرسالة العاطفية */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-4"
                >
                    <p className="text-lg md:text-2xl font-light text-white/60 tracking-wide">
                        في كل ثانية تمر، يزداد يقيني بأنكِ
                    </p>
                    <h2 className="text-4xl md:text-6xl font-serif italic text-white drop-shadow-lg">
                        أجمل <span className="text-pink-500 not-italic">أقداري</span>
                    </h2>
                </motion.div>
            </motion.div>

            {/* 4. زر التمرير (Mouse Icon) */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 z-20"
            >
                <button 
                    onClick={scrollToNext}
                    className="group flex flex-col items-center gap-4 transition-all duration-300"
                >
                    <span className="text-[9px] tracking-[0.5em] uppercase text-white/30 group-hover:text-white transition-colors">إكتشفي المزيد</span>
                    <div className="w-[26px] h-[45px] border-[1.5px] border-white/20 rounded-full p-1.5 flex justify-center">
                        <motion.div 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899]"
                        />
                    </div>
                </button>
            </motion.div>

            {/* 5. المؤثرات الضوئية الجانبية (Vignette & Glow) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#030014] to-transparent pointer-events-none" />
            <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" />
            <div className="absolute -right-[10%] bottom-[10%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        </motion.section>
    );
};

export default Hero;