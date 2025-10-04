import { useRef } from "react";
import divya from "/Images/divya.jpg"
import india from "/Images/india.jpg"
import USA from "/Images/USA.jpg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const testimonial = [
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

const Testimonials = () => {
  const testimonialRef = useRef([]);
  const headingRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
    const spans = headingRef.current.querySelectorAll("span");

      gsap.from(spans, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 95%",
        },
        y: 40,
        filter: "blur(20px)",
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.inOut",
      });

      testimonialRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
          },
          y: 40,
          opacity: 0,
          filter: "blur(20px)",
          duration: 0.8,
          delay: i * 0.05,
          ease: "power2.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <section className="w-full px-5 py-20 md:p-10 xl:p-20 bg-[#040414] relative">
      <div className="">
        <h2 ref={headingRef} className="text-3xl lg:text-5xl xl:text-6xl orbitron-regular text-zinc-100 mb-4 tracking-tight space-x-3">
          {"Trusted by Innovators".split(" ").map((w, i) => (<span key={i} className="inline-block">{w}</span>))}
        </h2>
      </div>
      <div className="absolute mt-5 bottom-[30%] right-0 translate-x-[50%] translate-y-1/2 w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>
      <div className="grid md:grid-cols-3 gap-5 md:gap-10 max-w-6xl mx-auto px-6 mt-20">
        {testimonial.map((t, i) => (
          <div ref={(el) => (testimonialRef.current[i] = el)} key={i} id="card" className="rounded-xl bg-[#9d9dad27] backdrop-blur-2xl z-50 p-6 hover:shadow-xl hover:shadow-[#ab04e383] transition-all ">
            <p className="text-sm md:text-base mb-6 italic poppins-light text-zinc-300">“{t.text}”</p>
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

export default Testimonials
