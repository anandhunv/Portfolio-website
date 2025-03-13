import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
const Hero = () => {
const [currentLines, setCurrentLines] = useState([""]);
const [lineIndex, setLineIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
useEffect(() => {
if (lineIndex < codeSnippets.length) {
if (charIndex < codeSnippets[lineIndex].length) {
const timeout = setTimeout(() => {
setCurrentLines((prev) => {
const newLines = [...prev];
newLines[newLines.length - 1] += codeSnippets[lineIndex][charIndex];
return newLines;
});
setCharIndex((prev) => prev + 1);
}, 50);
return () => clearTimeout(timeout);
} else {
setTimeout(() => {
setCurrentLines((prev) => [...prev, ""]);
setLineIndex((prev) => prev + 1);
setCharIndex(0);
}, 300);
} } else {
setTimeout(() => {
setCurrentLines([""]);
setLineIndex(0);
setCharIndex(0);
}, 2000);
} }, [charIndex, lineIndex]);
return (
<section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
<h1 className="text-4xl font-bold mb-6">I'm a <span className="text-blue-400">MERN Stack Developer</span></h1>
<p className="text-lg text-gray-300 mb-8">Building full-stack applications with React, Node.js, Express, and MongoDB.</p>
<div className="relative w-[500px] h-[300px] bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700">
<FaLaptopCode className="absolute top-2 left-2 text-gray-500 text-2xl" />
<div className="h-full overflow-hidden font-mono text-green-400 text-sm leading-6">
{currentLines.map((line, index) => (
<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="whitespace-pre-wrap">
{line}
</motion.div>
))}
</div>
</div>
</section>
);
};
export default Hero;