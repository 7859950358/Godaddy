import React from 'react'
import HeaderImgMain from '../img/Header-Img(main).webp'
import HeaderHeroImg from '../img/img-hp-airo-logo.svg'

function Header() {
    return (
        <>
            <div className="tw-container tw-px-5 tw-py-24 tw-mx-auto tw-flex tw-items-center md:tw-flex-row tw-flex-col -tw-mt-20">
                <div className="tw-flex tw-flex-col md:tw-pr-10 md:tw-mb-0 tw-mb-6 tw-pr-0 md:tw-w-auto md:tw-text-left tw-text-center w-75">
                    <div className="tw-flex tw-items-center tw-bg-white tw-rounded-2xl tw-shadow-md tw-overflow-hidden tw-border-4">
                        <div className="tw-px-4 tw-py-2 tw-text-gray-600">
                            <svg className="tw-w-6 tw-h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M21 21l-4.35-4.35M10 17a7 7 0 100-14 7 7 0 000 14z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Type the domain you want"
                            className="tw-w-full tw-text-2xl tw-px-4 tw-py-2 tw-text-gray-700 focus:tw-outline-none tw-h-20"
                        />
                        <button className="tw-bg-teal-700 hover:tw-bg-teal-500 tw-text-white tw-px-6 tw-py-2 tw-font-semibold tw-w-80 tw-mx-4 tw-h-14">
                            Search Domains
                        </button>
                    </div>
                </div>
                <div className="tw-flex md:tw-ml-auto md:tw-mr-0 tw-mx-auto tw-items-center tw-flex-shrink-0" id='custom-css'>
                    <button className="tw-mr-20 tw-h-20 tw-bg-gray-100 tw-inline-flex tw-py-3 tw-px-5 tw-rounded-lg tw-items-center hover:tw-bg-transparent hover:tw-rounded-2xl focus:tw-outline-none" id='btn-css'>
                        <span>.online</span>
                        <span className="tw-ml-4 tw-flex tw-items-start tw-flex-col tw-leading-none">
                            <span className="tw-text-xs tw-text-gray-600 tw-mb-1">$ 0.99*/ast yr.</span>
                            <span className="tw-title-font tw-font-medium">Stay relevent online</span>
                        </span>
                    </button>

                </div>
            </div>

            <div>
                <div>
                    <img src={HeaderImgMain} className='header-img tw-rounded-3xl -tw-mt-12 tw-m-16 tw-absolute' alt='headerimg' />
                    <div className='tw-absolute tw-ml-24'>
                        <button className='btn btn-light'>NEW</button><br /><br />
                        <img src={HeaderHeroImg} alt="" /><br />
                        <h1 className='tw-text-5xl tw-font-black'>Put Your <br />domain into <br />action with AI.
                        </h1><br />
                        <p className='tw-font-bold tw-text-1xl'>Buy a new domain and get <br /> GoDaddy Airo™, our customizable, AI- <br />powered solution that can easily deliver a <br /> website, logo, and more.^</p>
                        <br />
                        <button className="tw-bg-black tw-text-white tw-font-semibold tw-py-2 tw-px-2 tw-rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className='tw-bg-black tw-float-right tw-rounded-3xl tw-mr-10 tw-w-72 tw-justify-center tw-text-center tw-p-9 -tw-mt-12'>
                    <button className="tw-bg-teal-500 tw-text-white tw-font-semibold tw-py-2 tw-px-2 tw-rounded-xl">
                        NEW
                    </button><br /><br />
                    <p className='tw-text-white tw-font-bold'>AI Suggested Domains</p><br />
                    <h1 className='tw-text-2xl tw-font-black tw-text-white'>Find the perfect <br />domain and <br /> business name <br /> with AI.</h1><br />
                    <button className="tw-bg-white  tw-text-black tw-font-semibold tw-py-2 tw-px-2 tw-rounded-md">
                        Try AI domain Search.
                    </button><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </>
    )
}

export default Header
