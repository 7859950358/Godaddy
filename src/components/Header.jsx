import React from 'react'

function Header() {
    return (
        <>
            <div className="tw-container tw-px-5 tw-py-24 tw-mx-auto tw-flex tw-items-center md:tw-flex-row tw-flex-col -tw-mt-10">
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
                            className="tw-w-full tw-px-4 tw-py-2 tw-text-gray-700 focus:tw-outline-none tw-h-20"
                        />
                        <button className="tw-bg-teal-500 tw-text-white tw-px-6 tw-py-2 tw-font-semibold tw-w-80 tw-mx-4 tw-h-14">
                            Search Domains
                        </button>
                    </div>
                </div>
                <div className="tw-flex md:tw-ml-auto md:tw-mr-0 tw-mx-auto tw-items-center tw-flex-shrink-0 tw-space-x-4">
                    <button className="tw-bg-gray-100 tw-inline-flex tw-py-3 tw-px-5 tw-rounded-lg tw-items-center hover:tw-bg-gray-200 focus:tw-outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="tw-w-6 tw-h-6" viewBox="0 0 512 512">
                            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                        </svg>
                        <span className="tw-ml-4 tw-flex tw-items-start tw-flex-col tw-leading-none">
                            <span className="tw-text-xs tw-text-gray-600 tw-mb-1">GET IT ON</span>
                            <span className="tw-title-font tw-font-medium">Google Play</span>
                        </span>
                    </button>
                    <button className="tw-bg-gray-100 tw-inline-flex tw-py-3 tw-px-5 tw-rounded-lg tw-items-center hover:tw-bg-gray-200 focus:tw-outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="tw-w-6 tw-h-6" viewBox="0 0 305 305">
                            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                        </svg>
                        <span className="tw-ml-4 tw-flex tw-items-start tw-flex-col tw-leading-none">
                            <span className="tw-text-xs tw-text-gray-600 tw-mb-1">Download on the</span>
                            <span className="tw-title-font tw-font-medium">App Store</span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header
