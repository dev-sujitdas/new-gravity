import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
    const stairRef = useRef(null);
    const pageRef = useRef(null);
    const overlayRef = useRef(null);
    
    const currentLocation = useLocation().pathname;

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const stairs = stairRef.current.querySelectorAll("div");
            
            gsap.set(overlayRef.current, { display: "flex" });
            gsap.set(pageRef.current, { opacity: 0 });

            const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
            
            tl.fromTo(
                stairs,
                { scaleY: 0, transformOrigin: "bottom center" },
                { scaleY: 1, duration: 0.6, stagger: { amount: 0.2, from: "start" } }
            );
            
            tl.to(stairs, {
                yPercent: -100,
                duration: 0.8,
                stagger: { amount: 0.2, from: "end" },
            });
            
            tl.call(() => {
                gsap.set(overlayRef.current, { display: "none" });
                
                gsap.to(pageRef.current, {
                    opacity:1,
                    scale: 1,
                    y: -20,
                    duration: 0.8,
                    ease: "power1.out",
                });
            });
        });

        return () => ctx.revert();
    }, [currentLocation]);

    return (
        <section className="w-full h-full relative">            
            <div ref={overlayRef} className="w-full h-screen absolute left-0 top-0 flex z-50 pointer-events-none">
                <div ref={stairRef} className="flex w-full h-full overflow-hidden">
                    <div className="h-full w-1/5 bg-white/10 backdrop-blur-2xl" />
                    <div className="h-full w-1/5 bg-[#ab04e352] backdrop-blur-2xl" />
                    <div className="h-full w-1/5 bg-white/10 backdrop-blur-2xl" />
                    <div className="h-full w-1/5 bg-[#ab04e352] backdrop-blur-2xl" />
                    <div className="h-full w-1/5 bg-white/10 backdrop-blur-2xl" />
                </div>
            </div>
            
            <div ref={pageRef}>{children}</div>
        </section>
    );
};

export default PageTransition;
