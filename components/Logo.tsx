import React from "react";

export function Logo({ 
  className = "w-12 h-12",
  textClassName = "text-brand-navy"
}: { 
  className?: string;
  textClassName?: string;
}) {
  return (
    <div className={`flex flex-col items-center justify-center leading-none select-none ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-brand-navy"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sleek Golden outer badge ring */}
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#F2C200" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Minimalist modern rooster head/crest line art */}
        <path
          d="M50 24C52 24 53.5 25.5 53.5 27.5C53.5 29 52 30.5 50.5 31.5C53 32.5 55 35 55 38.5C55 42 52 45 48.5 45C45 45 42 42 42 38.5C42 35 44 32.5 46.5 31.5C45 30.5 43.5 29 43.5 27.5C43.5 25.5 45 24 47 24H50Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Beak */}
        <path
          d="M55 36.5L59 38L55 39.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Crown comb */}
        <path
          d="M45.5 24C44 21 47 18 48.5 19.5C50 18 53 21 51.5 24"
          stroke="#F2C200"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Custom luxury monogram style typography */}
        <text
          x="50"
          y="76"
          textAnchor="middle"
          fill="currentColor"
          className="font-serif font-black"
          fontSize="24"
          letterSpacing="0.08em"
        >
          ES
        </text>
      </svg>
    </div>
  );
}
