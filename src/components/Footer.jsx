import React from 'react'
import { Link } from 'react-router-dom';
import GGS from "/GGS.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube  } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className='w-full max-w-[150rem] mx-auto lg:h-[400px] relative overflow-hidden border-t-[1px] border-zinc-800'>            
            <div className="absolute mt-5 bottom-0 left-1/2 translate-y-1/2  w-[10rem] h-[10rem] md:w-[48rem] md:h-[40rem] bg-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>
            <div className=' w-full px-5 py-20 md:p-10 xl:p-20 flex flex-col lg:flex-row justify-between z-50'>
                <div className='left lg:w-[40%] xl:w-1/2'>
                    <div className='left'>
                        <Link to={"/"}><img src={GGS} alt="logo" id='logo' className='h-20 w-fit' /></Link>
                    </div>
                    <div>
                        <h3 className=" poppins-medium text-zinc-300 mt-5">
                            Proud to be part of your journey
                        </h3>
                    </div>
                    <ul className="flex gap-10 mt-5 text-white text-2xl">
                        <li>
                            <a href="https://www.facebook.com/gravityglobalsolution/">
                               <FaFacebookF/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/gravity_global_solutions/">
                               <FaInstagram/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/sujit-das-ggs/">
                               <FaLinkedinIn/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@GravityGlobalSolution">
                                <FaYoutube/>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className='right lg:w-[60%] xl:w-1/2 flex flex-col lg:flex-row justify-evenly z-50'>
                    <div className="footer-elem w-48 h-auto lg:h-[14rem] flex flex-col items-start  mt-20 lg:mt-0 ">
                        <div>
                            <h2 className="uppercase orbitron-bold text-zinc-200 text-lg tracking-widest mb-5">
                                Company
                            </h2>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li className="poppins-relugar text-zinc-300 text-base tracking-wider hover:text-[#9897F4]">
                                    {" "}
                                    <Link to="/aboutUs">About Us</Link>
                                </li>
                                <li className="poppins-relugar text-zinc-300 text-base tracking-wider hover:text-[#9897F4]">
                                    <a href="mailto:hello@gravityglobalsolution.in">Support</a>
                                </li>
                                <li className="poppins-relugar text-zinc-300 text-base tracking-wider hover:text-[#9897F4]">
                                    <a target="_blank" href="https://documents.gravityglobalsolution.in/">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="poppins-relugar text-zinc-300 text-base tracking-wider hover:text-[#9897F4]">
                                    <a target="_blank" href="https://documents.gravityglobalsolution.in/">
                                        Term and Condition
                                    </a>
                                </li>
                                <li className="poppins-relugar text-zinc-300 text-base tracking-wider hover:text-[#9897F4]">
                                    <a target="_blank" href="https://documents.gravityglobalsolution.in/">
                                        Pricing and Refund
                                    </a>{" "}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-elem w-48 h-auto lg:h-[14rem] flex flex-col  items-start justify-start mt-10 lg:mt-0">
                        <div>
                            <h2 className="uppercase  orbitron-bold text-zinc-200 text-lg tracking-widest mb-5">
                                Comunity
                            </h2>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li className="poppins-relugar text-zinc-300 text-base tracking-wider hover:text-[#9997F4]">
                                    {" "}
                                    <a href="">Discord</a>
                                </li>
                                <li className="poppins-relugar text-zinc-300 text-base tracking-wider hover:text-[#9897F4]">
                                    {" "}
                                    <a href="https://www.instagram.com/gravitycomunity/">Gravity</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-elem w-48 h-auto lg:h-[14rem] flex flex-col  items-start justify-start mt-10 lg:mt-0">
                        <div>
                            <h2 className="uppercase  orbitron-bold text-zinc-200 text-lg tracking-widest mb-5">
                                Get In Touch
                            </h2>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li className="poppins-relugar text-zinc-300 text-base tracking-widest hover:text-[#9897F4]">
                                    {" "}
                                    <a href="tel:+91-9073771205">9073771205</a>
                                </li>
                                <li className="poppins-relugar text-zinc-300 text-base tracking-widest hover:text-[#9897F4]">
                                    {" "}
                                    <a href="mailto:hello@gravityglobal.in">
                                        hello@gravityglobal.in
                                    </a>
                                </li>
                                <li className="poppins-relugar text-zinc-300 text-base tracking-wider ">
                                    {" "}
                                    117, Rabindrapally
                                    <br /> Kestopur, Kolkata 700101{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center absolute bottom-0 bg-black/30 backdrop-blur-2xl p-2'>
                <h2 className='text-zinc-100 poppins-regular'>Copyright 2025 - Gravity Global Solution</h2>
            </div>
        </footer>
    )
}

export default Footer