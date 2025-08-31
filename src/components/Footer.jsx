import React from 'react'
import { Link } from 'react-router-dom';
import bg from "/Images/artistic.png";
import GGS from "/GGS.png";


const Footer = () => {
    return (
        <footer className='w-full h-[400px] relative overflow-hidden mt-10'>
            <img src={bg} className='w-full h-full object-cover object-top' alt="footer-bg" />
            <div className='absolute top-0 w-full h-full  p-20 flex justify-between '>
                <div className='left w-1/2 '>
                    <div className='left'>
                        <Link to={"/"}><img src={GGS} alt="logo" id='logo' className='h-20 w-fit' /></Link>
                    </div>
                    <div>
                        <h3 className=" poppins-medium text-zinc-300 mt-5">
                            Proud to be part of your journey
                        </h3>
                    </div>
                    <ul className="flex gap-5 mt-5">
                        <li>
                            <a href="https://www.facebook.com/gravityglobalsolution/">
                                <img
                                    src="/Icons/facebook-box-fill.svg"
                                    alt="Facebook"
                                    className="h-7 filter brightness-0 invert"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/gravity_global_solutions/">
                                <img
                                    src="/Icons/instagram-fill.svg"
                                    alt="instagram"
                                    className="h-7 filter brightness-0 invert"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/sujit-das-ggs/">
                                <img
                                    src="/Icons/linkedin-box-fill.svg"
                                    alt="LinkedIn"
                                    className="h-7 filter brightness-0 invert"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@GravityGlobalSolution">
                                <img
                                    src="/Icons/youtube-fill.svg"
                                    alt="youtube"
                                    className="h-7 filter brightness-0 invert"
                                />
                            </a>
                        </li>

                    </ul>
                </div>
                <div className='right w-1/2 flex justify-evenly'>
                    <div className="footer-elem w-48 h-[14rem] flex flex-col items-start  ">
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

                    <div className="footer-elem w-48 h-[14rem] flex flex-col  items-start justify-start">
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

                    <div className="footer-elem w-48 h-[14rem] flex flex-col  items-start justify-start">
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