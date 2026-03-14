import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoveTimer = () => {
    const startDate = new Date('2021-04-04T00:00:00');
    const [timeLeft, setTimeLeft] = useState({
        years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            let diff = now - startDate;

            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            diff -= years * (1000 * 60 * 60 * 24 * 365.25);

            const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
            diff -= months * (1000 * 60 * 60 * 24 * 30.44);

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);

            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ years, months, days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label, shouldAnimate = false }) => (
        <div className="relative group">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 w-full h-32 md:h-40 min-w-[100px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="relative overflow-hidden h-12 md:h-16 w-full flex justify-center">
                    {shouldAnimate ? (
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={value}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "backOut" }}
                                className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-white"
                            >
                                {value.toString().padStart(2, '0')}
                            </motion.span>
                        </AnimatePresence>
                    ) : (
                        <span className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-white">
                            {value.toString().padStart(2, '0')}
                        </span>
                    )}
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-pink-300/60 font-medium mt-2">
                    {label}
                </span>
            </div>
        </div>
    );

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 bg-[#030014] overflow-hidden font-sans">

            {/* 1. التاريخ العلوي (Luxury Badge) */}
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="z-20 mb-12 flex items-center gap-4"
            >
                <div className="h-[1px] w-8 bg-pink-500/50" />
                <div className="px-6 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 backdrop-blur-md flex items-center gap-3 shadow-[0_0_20px_rgba(236,72,153,0.1)]">
                    <span className="text-pink-500 text-xs italic font-serif">Since</span>
                    <span className="text-white font-mono text-xs md:text-sm tracking-[0.3em] font-bold">04 / 04 / 2021</span>
                </div>
                <div className="h-[1px] w-8 bg-pink-500/50" />
            </motion.div>

            {/* 2. العنوان الرئيسي المعدل */}
            <div className="text-center mb-16 z-10">
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-light text-white leading-tight"
                >
                    <span className="font-serif italic text-pink-600 drop-shadow-[0_0_15px_rgba(219,39,119,0.4)]">..</span> حكايتنا <span className="font-serif italic text-pink-600 drop-shadow-[0_0_15px_rgba(219,39,119,0.4)]"> بدأت منذ</span>
                </motion.h2>
            </div>

            {/* 3. حاوية العداد (ثبات الأرقام وحركة الثواني فقط) */}
            <div className="z-10 w-full max-w-5xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    <TimeUnit value={timeLeft.years} label="Years" />
                    <TimeUnit value={timeLeft.months} label="Months" />
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Mins" />
                    <TimeUnit value={timeLeft.seconds} label="Secs" shouldAnimate={true} />
                </div>
            </div>

            {/* 4. رسالة تذييل */}
            <motion.p
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-16 text-white text-[10px] uppercase tracking-[0.6em] font-thin"
            >
                Every Second Matters With You
            </motion.p>

            {/* الخلفية المضيئة */}
            <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-900/20 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-pink-900/15 rounded-full blur-[180px] pointer-events-none" />
        </section>
    );
};

export default LoveTimer;