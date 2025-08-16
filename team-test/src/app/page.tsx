"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [logoColor, setLogoColor] = useState("green");

  const colorOptions = [
    { name: "Verde", value: "green", file: "/logo_green.svg", label: "VERDE" },
    { name: "Azul", value: "blue", file: "/logo_blue.svg", label: "AZUL" },
    { name: "Rojo", value: "red", file: "/logo_red.svg", label: "ROJO" },
    { name: "Amarillo", value: "yellow", file: "/logo_yellow.svg", label: "AMARILLO" },
    { name: "Púrpura", value: "purple", file: "/logo_purple.svg", label: "PÚRPURA" },
    { name: "Cian", value: "cyan", file: "/logo_cyan.svg", label: "CIAN" }
  ];

  const currentLogo = colorOptions.find(c => c.value === logoColor) || colorOptions[0];

  return (
    <div className="font-mono bg-black text-green-400 min-h-screen p-4">
      {/* Retro Computer Window Header */}
      <div className="bg-gray-800 border-2 border-gray-600 mb-6">
        <div className="bg-gray-700 px-4 py-2 border-b-2 border-gray-600 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 border border-gray-500"></div>
            <div className="w-3 h-3 bg-yellow-500 border border-gray-500"></div>
            <div className="w-3 h-3 bg-green-500 border border-gray-500"></div>
          </div>
          <div className="text-green-400 text-sm font-bold">GENERIC_TERMINAL.exe</div>
          <div className="w-4 h-4"></div>
        </div>
        
        {/* Main Content Area */}
        <div className="p-6 bg-gray-900 border-2 border-gray-600">
          {/* Logo Centrado y Más Grande */}
          <div className="flex justify-center items-center mb-12">
            <div className="transition-all duration-300 transform hover:scale-105">
              <Image
                src={currentLogo.file}
                alt={`Generic Logo - ${currentLogo.name}`}
                width={400}
                height={200}
                priority
                className="w-auto h-auto max-w-full"
              />
            </div>
          </div>

          {/* Retro Terminal Text */}
          <div className="space-y-4 mb-8">
            <div className="text-green-400 font-mono text-sm">
              <span className="text-yellow-400">$</span> Welcome to Generic Terminal v1.0
            </div>
            <div className="text-green-400 font-mono text-sm">
              <span className="text-yellow-400">$</span> Logo color system initialized
            </div>
            <div className="text-green-400 font-mono text-sm">
              <span className="text-yellow-400">$</span> Select a color to change logo appearance...
            </div>
          </div>

          {/* Color Selection Buttons */}
          <div className="bg-black border border-green-400 p-4 mb-8">
            <div className="text-green-400 font-bold mb-3">Color Selection Commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setLogoColor(color.value)}
                  className={`border-2 border-current ${getColorClass(color.value)} bg-black transition-all flex items-center justify-center hover:bg-opacity-20 hover:scale-105 font-mono text-sm h-12 px-4 w-full`}
                >
                  [{color.label}]
                </button>
              ))}
            </div>
          </div>

          {/* Current Color Display */}
          <div className="bg-black border border-green-400 p-4 mb-8">
            <div className="text-green-400 font-bold mb-2">Current Logo Color:</div>
            <div className={`${getColorClass(currentLogo.value)} font-mono text-lg font-bold`}>
              {currentLogo.name.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Retro Style */}
      <div className="bg-gray-800 border-2 border-gray-600">
        <div className="bg-gray-700 px-4 py-2 border-b-2 border-gray-600">
          <div className="text-green-400 text-sm font-bold">SYSTEM_NAVIGATION</div>
        </div>
        <div className="p-4 bg-gray-900">
          <div className="text-center text-blue-400 font-mono text-sm">
            <span className="text-green-400">$</span> Logo color system ready for customization
          </div>
        </div>
      </div>

      {/* Terminal Cursor */}
      <div className="mt-4 text-green-400 font-mono text-lg animate-pulse">
        <span className="text-yellow-400">$</span> <span className="bg-green-400 text-black">_</span>
      </div>
    </div>
  );
}

// Función helper para obtener las clases de color de Tailwind
function getColorClass(color: string): string {
  switch (color) {
    case 'green': return 'text-green-400';
    case 'blue': return 'text-blue-400';
    case 'red': return 'text-red-400';
    case 'yellow': return 'text-yellow-400';
    case 'purple': return 'text-purple-400';
    case 'cyan': return 'text-cyan-400';
    default: return 'text-green-400';
  }
}
