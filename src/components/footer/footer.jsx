import React from 'react'
import logo from "../../assets/images/svgs/logo/tvcabo.svg"
import { FaInstagram,FaFacebook,FaLinkedinIn,FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <React.Fragment>
        <footer className='ft_wrapper'>
            <div className='ft_image'>
                <img src={logo} alt="" />
            </div>

            <div className='ft_wrapper_social'>
                <span>www.tvcabo.ao</span>

                <div className='ft_container_social'>
                    <div className='ft_social'>
                        <FaInstagram/>
                    </div>
                    <div className='ft_social'>
                        <FaFacebook/>
                    </div>
                    <div className='ft_social'>
                        <FaLinkedinIn/>
                    </div>
                     <div className='ft_social'>
                        <FaYoutube/>
                    </div>
                </div>
            </div>
        </footer>
    </React.Fragment>
  )
}

export  {Footer}