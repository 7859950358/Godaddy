import React from 'react'
import logo from '../img/logo.png'

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg tw-bg-black tw-text-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" className='tw-w-44 tw-m-3' />
                    </a>
                    <button className="navbar-toggler tw-bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="tw-mr-8 tw-cursor-pointer tw-text-blue-300">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="tw-mr-8 tw-cursor-pointer">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="tw-mr-8 tw-cursor-pointer">Email</a>
                            </li>
                            <li className="nav-item">
                                <a className="tw-mr-8 tw-cursor-pointer">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="tw-mr-8 tw-cursor-pointer">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    {/* <nav className="md:tw-ml-auto tw-flex tw-flex-wrap tw-items-center tw-text-base tw-justify-center">
                        <a className="tw-mr-8 tw-text-blue-300">Home</a>
                        <a className="tw-mr-8">About Us</a>
                        <a className="tw-mr-8">Email</a>
                        <a className="tw-mr-8">Pricing</a>
                        <a className="tw-mr-8">Contact Us</a>
                    </nav> */}
                </div>
            </nav>
        </>
    )
}

export default NavBar
