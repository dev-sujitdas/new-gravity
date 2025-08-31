import { motion } from "framer-motion";
import divya from "/Images/divya.jpg"
import india from "/Images/india.jpg"
import USA from "/Images/USA.jpg"

const testimonials = [
  {
    img: divya,
    text: "I’m grateful to Gravity Global Solution for developing my website exactly as I envisioned.",
    name: "Divya Banerjee Das",
    role: "Founder, Divya Tarot",
  },
  {
    img: india,
    text: "Gravity Global cut our load time by 60%. The experience felt just like working with our own team.",
    name: "Randip Patel",
    role: "Founder, Fashion Agency",
  },
  {
    img: USA,
    text: "Creative, reliable, and fast. We’ve trusted them with multiple projects — every launch was smooth.",
    name: "Elena Garcia",
    role: "Head of Product, E-commerce Brand",
  }
];

export default function Testimonials() {
  return (
    <section className="w-full p-20 bg-[#040414] relative">
      <div className="">
        <h2 className="text-6xl orbitron-regular text-zinc-100 mb-4">Trusted by Innovators</h2>
      </div>
        <div className="absolute mt-5 bottom-[30%] right-0 translate-x-[50%] translate-y-1/2 w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-20">
        {testimonials.map((t, i) => (
          <div key={i} id="card" className="rounded-xl bg-[#9d9dad27] backdrop-blur-2xl z-50 p-6 hover:shadow-xl hover:shadow-[#ab04e383] transition-all ">
            <p className="text-base mb-6 italic poppins-light text-zinc-300">“{t.text}”</p>
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.name} className="h-10 w-10 object-cover rounded-full" />
              <div className="text-left">
                <h4 className="orbitron-semibold text-zinc-200">{t.name}</h4>
                <p className="text-sm text-zinc-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className="absolute mt-5 top-[10%] left-0 -translate-x-[50%] translate-y-1/2 w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem] bg-[#FDBC58] rounded-full blur-[100px] opacity-20 z-0"></div>        
    </section>
  );
}
