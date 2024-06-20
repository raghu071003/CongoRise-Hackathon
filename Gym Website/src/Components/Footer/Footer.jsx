import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white border-y fade-in">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://www.pngmart.com/files/16/Carolina-Panthers-PNG-Transparent.png"
                        className="mr-3 h-16"
                        alt="Logo"
                    />
                    <p className='text-xl'>Panther <span className='text-yellow-400'>Fitenss</span></p>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 tracking-wider">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                    <ul className="text-gray-400 font-medium">
                        <li className="mb-4">
                            <a
                                href="https://github.com/raghu071003"
                                className="hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">
                                Discord
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                    <ul className="text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline">
                                Terms &amp; Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">
                © 2024 | 
                <a href="#" className="hover:underline">
                    Sai Raghu Vamshi Koneti
                </a>
                . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <Link to="#" className="text-gray-500 hover:text-gray-900">
                   
                    <span className="sr-only">Facebook page</span>
                </Link>
                <Link to="#" className="text-gray-500">
                    
                    <span className="sr-only">Discord community</span>
                </Link>
                <Link to="#" className="text-gray-500">
                    
                    <span className="sr-only">Twitter page</span>
                </Link>
                <Link to="#" className="text-gray-500">
                   
                    <span className="sr-only">GitHub account</span>
                </Link>
                <Link to="#" className="text-gray-500">
                    <span className="sr-only">Dribbble account</span>
                </Link>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
