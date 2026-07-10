import React from "react";
import Link from "next/link";
import { businessConfig } from "@/config/business";

interface LogoProps {
  light?: boolean; // true ise koyu arka planlar için (açık renkli), false ise açık arka planlar için (mavi)
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ light = false, className = "" }) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group ${className}`} aria-label={businessConfig.name}>
      {/* AVS Stylized Vector Logo */}
      <div className={`relative flex items-center ${light ? "text-white" : "text-brand-red"}`}>
        <svg
          className="w-24 h-7 transition-all duration-300 group-hover:scale-105"
          viewBox="0 0 300 90"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Custom Connected A-V-S Path */}
          {/* Letter A (Left leg, crossbar, and right leg connecting to V) */}
          <path d="M 15,80 L 48,15 H 78 L 45,80 H 15 Z" />
          <path d="M 68,15 L 101,80 H 71 L 48,35 L 68,15 Z" />
          <path d="M 28,55 H 70 L 62,68 H 36 Z" />
          
          {/* Letter V (Right leg connecting to S top bar) */}
          <path d="M 71,80 H 101 L 134,15 H 104 L 71,80 Z" />
          <path d="M 104,15 H 134 L 167,80 H 137 L 104,15 Z" />
          
          {/* Letter S (Connected wave matching AVS logo styling) */}
          <path d="M 137,80 H 167 L 200,15 H 170 L 137,80 Z" />
          <path d="M 170,15 H 260 L 252,30 H 192 L 182,50 H 232 C 255,50 265,60 265,72 C 265,82 250,90 220,90 H 148 L 156,75 H 218 L 228,58 H 192 L 170,15 Z" />
        </svg>
      </div>
      
      {/* Firma Logotype Alt Bilgisi */}
      <div className="flex flex-col justify-center">
        <span className={`text-[10px] font-black tracking-[0.35em] leading-none uppercase transition-colors ${
          light ? "text-gray-400 group-hover:text-white" : "text-brand-gray-dark group-hover:text-brand-red"
        }`}>
          SERVIS
        </span>
      </div>
    </Link>
  );
};
export default Logo;
