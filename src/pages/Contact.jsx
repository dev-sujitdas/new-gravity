import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "../components/buttons/Button";
import emailjs from "emailjs-com"
import { useGSAP } from "@gsap/react";


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedService, setSelectedService] = useState("");
  const [budget, setBudget] = useState("");
  const blurRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });

  const services = [
    "UI/UX",
    "3D Website",
    "Front-end development",
    "Back-end development",
    "Site from scratch",
    "Branding",
    "Other",
  ];

  const budgets = ["15-30K", "30-40K", "40-70K", "70-100K", "+100K"];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBudgetClick = (amount) => {
    setBudget(amount);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAttachmentChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectDetails: formData.get("projectDetails"),
      selectedService: selectedService || "Not specified",
      budget: budget || "Not provided",
    };

    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("projectDetails")
    ) {
      alert("Please fill out all required fields before submitting.");
      return;
    }

    // Replace with your actual deployed Vercel URL
    const API_URL = "https://email-js-api-git-main-sujit-das-projects.vercel.app/api/emailJs";

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then(async (res) => {
        const result = await res.json();
        if (result.success) {
          console.log("SUCCESS!", result);
          alert("Submission was successful!");
        } else {
          console.error("FAILED...", result.error);
          alert("An error occurred. Please try again.");
        }
      })
      .catch((err) => {
        console.error("NETWORK ERROR:", err);
        alert("Network error. Please try again later.");
      });


    setFormData({
      name: "",
      email: "",
      projectDetails: "",
    });
    setBudget("");
    setSelectedService("");
  };

  useEffect(() => {
    const animatedBlur = gsap.timeline();
    animatedBlur.from(blurRef.current, {
      opacity: 0,
      duration: 1.7,
    })
    return () => animatedBlur.kill();
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#title", {
      y: 40,
      filter: "blur(30px)",
      opacity: 0,
      duration: 0.8,
      delay: 2,
      ease: "power2.inOut"
    })
    tl.from("#contact-dets div", {
      y: 40,
      filter: "blur(30px)",
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power2.inOut"
    })
  }, [])

  const title = "Let’s Turn Vision Into Reality"

  return (
    <section id="contact" className='w-full px-5 py-20 md:p-10 xl:p-20 overflow-hidden'>
      <div className="absolute top-0 right-32  w-[12rem] h-[2rem] md:w-[30rem] md:h-[5rem] bg-[#fdbb58de] rounded-full blur-[100px] opacity-30 z-0"></div>
      <div className="absolute top-0 left-0 w-[5rem] h-[2rem] md:w-[38rem] md:h-[5rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>
      <div className='w-full max-w-[150rem] mx-auto flex xl:flex-row flex-col justify-between mt-16 md:mt-32'>
        <div className='w-full xl:w-1/2 mb-10 xl:mb-0'>
          <h2 id="title" className="gradient-text text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl orbitron-bold 2xl:w-[80%]">{title.split('').map((word, i) => (
            <span key={i}>{word}</span>
          ))}</h2>
          <div id="contact-dets" className="space-y-5 mt-10">
            {/* <div>
              <h3 className="text-xl md:text-2xl poppins-semibold text-zinc-200">Give us a call</h3>
              <p className="text-lg md:text-xl poppins-regular text-zinc-300">+91-9073771205</p>
            </div> */}
            <div>
              <h3 className="text-xl md:text-2xl poppins-semibold text-zinc-200">Leave us a message</h3>
              <p className="text-lg md:text-xl poppins-regular text-zinc-300">hello@gravityglobal.in</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl poppins-semibold text-zinc-200">Our address</h3>
              <p className="text-lg md:text-xl poppins-regular text-zinc-300">Remote Agency — Operating Globally</p>
              <p className="text-base md:text-lg poppins-regular text-zinc-400">Currently operating remotely worldwide</p>
              <p className="text-base md:text-lg poppins-regular text-zinc-400">Based in Kolkata, India.</p>
            </div>
          </div>
        </div>

        <div className='w-full xl:w-1/2 relative'>
          <div
            ref={blurRef}
            id="gradient-circle"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] md:w-[40rem] md:h-[40rem] bg-blue-600 rounded-full blur-3xl opacity-30 z-0"
          ></div>
          <div id="form" className="z-10 relative p-2 md:p-5 bg-white/5 backdrop-blur-2xl rounded-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="max-w-[900px] mx-auto p-4">
              <h4 className="text-3xl md:text-4xl orbitron-regular text-zinc-200 mb-10">Share Your Vision With Us </h4>
              <div className="flex flex-wrap gap-2 my-5">
                {services.map((service) => (
                  <button
                    type="button"
                    name="selectedService"
                    key={service}
                    onClick={() => handleServiceClick(service)}
                    className={`px-4 py-2 rounded-full ${selectedService === service
                      ? "bg-[#151030] text-white"
                      : "bg-zinc-200 text-black"
                      } border border-gray-300 relative poppins-regular cursor-pointer text-sm md:text-base`}
                  >
                    {service}
                  </button>
                ))}
              </div>

              <div id="name-email-container" className="flex flex-wrap gap-4 my-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full md:flex-1 px-4 py-2 border poppins-regular bg-white border-gray-400 rounded-lg text-sm md:text-base outline-0"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full md:flex-1 px-4 py-2 border poppins-regular bg-white border-gray-400 rounded-lg text-sm md:text-base outline-0 "
                />
              </div>

              <textarea
                name="projectDetails"
                placeholder="About your project"
                value={formData.projectDetails}
                onChange={handleChange}
                className="w-full px-4 py-2 border poppins-regular bg-white border-gray-400 rounded-lg my-4 text-sm md:text-base outline-0"
              />

              <h4 className="text-xl poppins-semibold text-zinc-300">Budget</h4>
              <div className="flex flex-wrap gap-2 my-4">
                {budgets.map((amount) => (
                  <button
                    type="button"
                    name="budget"
                    key={amount}
                    onClick={() => handleBudgetClick(amount)}
                    className={`px-4 py-2 rounded-full ${budget === amount
                      ? "bg-[#151030] text-white"
                      : "bg-white text-black"
                      } border border-gray-300 poppins-regular cursor-pointer text-sm md:text-base`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </form>
            <div className="w-fit px-4">
              <Button
                onClick={() => formRef.current.requestSubmit()}
                title="Submit Request"
                bodyColor="bg-[#040414]"
                bodyText="text-white"
                titleSize="1rem"
                width="w-fit"
                circleColor="bg-white"
                circleSize="2.5rem"
              />
            </div>
            <div className="w-full flex flex-wrap gap-5 2xl:gap-10 p-5">
              <div>
                <h3 className="text-zinc-300 text-base poppins-regular">Start a project</h3>
                <p className="text-zinc-400 text-sm poppins-regular">hello@gravityglobal.in</p>
              </div>
              <div>
                <h3 className="text-zinc-300 text-base poppins-regular">Partner with us</h3>
                <p className="text-zinc-400 text-sm poppins-regular">partner@gravityglobal.in</p>
              </div>
              <div>
                <h3 className="text-zinc-300 text-base poppins-regular">Work with us</h3>
                <p className="text-zinc-400 text-sm poppins-regular">work@gravityglobal.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact