import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div
            className="w-full bg-gradient-to-r from-[#003366] via-[#004C99] to-[#0070C0]
                       text-[#E0E0E0] text-[13px] font-medium overflow-hidden shadow-md"
        >
            <motion.div
                className="flex items-center gap-12 whitespace-nowrap py-2 px-4"
                animate={isPaused ? { x: 0 } : { x: ["100%", "-100%"] }}
                transition={{
                    repeat: isPaused ? 0 : Infinity,
                    duration: 25,
                    ease: "linear",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* CRM */}
                <span className="flex items-center gap-1">
                    <Phone size={13} color="#00B4FF" /> CRM: 8883010400
                </span>

                {/* Sales */}
                <span className="flex items-center gap-1">
                    <Phone size={13} color="#00B4FF" /> Sales: 7200449985
                </span>

                {/* Office */}
                <span className="flex items-center gap-1">
                    <Phone size={13} color="#00B4FF" /> Office: 9514306044
                </span>

                {/* Corporate Address */}
                <span className="flex items-center gap-1">
                    <MapPin size={13} color="#00B4FF" /> KVRV Global Tech, No:1&2, First Floor, Bhavan Complex, NH 47, Attibelle, Bangalore -562107, Karnataka, India
                </span>

                {/* Branch Address */}
                <span className="flex items-center gap-1">
                    <MapPin size={13} color="#00B4FF" /> Branch: KVRV GLOBAL TECH, Shop No: 03, Ground Floor, Sunnambu Jeebi, Hosur, Krishnagiri-635109, Tamil Nadu, India
                </span>

                {/* Emails */}
                <span className="flex items-center gap-1">
                    <Mail size={13} color="#00B4FF" /> Karnataka: friendsinfrabuildtech.blr@gmail.com
                </span>
                <span className="flex items-center gap-1">
                    <Mail size={13} color="#00B4FF" /> Tamil Nadu: Kvrvglobaltech.hsr@gmail.com
                </span>

                {/* GST & UDYAM */}
                <span className="flex items-center gap-1 font-semibold text-white">
                    UDYAM-DL-08-0095527 | GSTIN: 07BDUPK7506B1ZH
                </span>
            </motion.div>
        </div>
    );
}
