import React from 'react'
import img2 from '../img/intl-img-hp-recore-cctld-small.webp'

export default function Premium() {
    return (
        <>
            <section className='premium-sect container'>
                <div className='tw-text-center'>
                    <h1 className='tw-text-5xl'>What can we help you with?</h1><br />
                    <button className='tw-bg-black tw-text-white tw-rounded-full tw-py-3 tw-px-5 hover:tw-scale-105 tw-transition-all tw-mx-2'>Domains</button>
                    <button className='tw-bg-white tw-text-black tw-border-2 tw-border-solid hover:tw-border-black  tw-rounded-full tw-py-3 tw-px-5 hover:tw-scale-105 tw-transition-all tw-mx-2'>Recommended</button>
                    <button className='tw-bg-white tw-text-black tw-border-2 tw-border-solid hover:tw-border-black  tw-rounded-full tw-py-3 tw-px-5 hover:tw-scale-105 tw-transition-all tw-mx-2'>WordPress and Security</button>
                </div>
                <section class="tw-text-gray-600 tw-body-font">
                    <div class="tw-container tw-mx-auto tw-flex tw-px-2 tw-py-2 md:tw-flex-row tw-flex-col tw-items-center">
                        <div class="lg:tw-flex-grow md:tw-w-1/2 lg:tw-pr-24 md:tw-pr-16 tw-flex tw-flex-col md:tw-items-start md:tw-text-left tw-mb-16 md:tw-mb-0 tw-items-center tw-text-center">
                            <div className='bg-img tw-w-full tw-h-full tw-rounded-2xl'>
                                <div className='tw-pt-72 tw-mx-5 tw-h-full'>
                                    <h1 className='tw-text-black tw-text-3xl tw-font-bold'>Domains</h1>
                                    <h1 className='tw-my-3 tw-font-extrathin'>Get started with the perfect domain, which comes <br /> with free domain privacy protection forever.</h1>
                                    <button className="tw-bg-black tw-text-white tw-font-semibold tw-py-3 tw-px-3 tw-rounded-lg tw-mb-7">
                                        Search Domains
                                    </button>
                                </div>
                                <br /><br />
                            </div>
                        </div>
                        <div class="lg:tw-max-w-lg lg:tw-w-full md:tw-w-1/2 tw-w-5/6">
                            <div className='bg-img1 tw-w-full tw-h-full tw-rounded-2xl'>
                                <div className='tw-px-14 -tw-mx-10 tw-h-full tw-py-2'>
                                    <h1 className='tw-font-bold tw-text-black tw-text-xl tw-mt-8'>.co for $ 0.01/1st year   </h1><br />
                                    <h1 className='tw-font-semibold'>Ensure your company and website <br /> stand out with a .co domain. 3-year <br /> purchase required. Additional <br /> year(s) $ 47.99.</h1><br />
                                    <button className="tw-bg-black tw-text-white tw-font-semibold tw-py-3 tw-px-3 tw-rounded-lg tw-mb-7">
                                        Search Domains
                                    </button>
                                </div>
                            </div>
                            <div className='bg-img2 tw-my-2'>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </>
    )
}
