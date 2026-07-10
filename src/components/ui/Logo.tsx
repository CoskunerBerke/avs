import React from "react";
import Link from "next/link";
import { businessConfig } from "@/config/business";

interface LogoProps {
  light?: boolean; // true ise koyu arka planlar için (açık renkli metin), false ise açık arka planlar için
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ light = false, className = "" }) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label={businessConfig.name}>
      {/* Otomotiv ruhuna uygun eğik kırmızı amblem */}
      <div className="relative flex items-center justify-center w-11 h-11 font-black italic text-white rounded bg-brand-red -skew-x-12 shadow-[0_0_20px_rgba(227,27,35,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:-skew-x-6">
        <span className="text-2xl font-black tracking-tighter uppercase pr-0.5">A</span>
        {/* Mekanik ve hassasiyeti temsil eden küçük bir nokta detay */}
        <div className="absolute right-1 bottom-1 w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      
      {/* Firma Logotype */}
      <div className="flex flex-col justify-center">
        <span className={`text-xl font-black tracking-wide leading-none uppercase ${
          light ? "text-white" : "text-brand-charcoal"
        }`}>
          AVS
        </span>
        <span className={`text-[8.5px] font-bold tracking-[0.25em] leading-none mt-1.5 ${
          light ? "text-gray-400" : "text-brand-gray-dark"
        }`}>
          SERVICE & REPAIR
        </span>
      </div>
    </Link>
  );
};
export default Logo;
