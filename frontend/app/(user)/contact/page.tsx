import React from 'react'
import Contact from './components/Contact'

function page() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Get in Touch
                        </h1>
                        <p
                            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                            style={{ color: '#00000099' }}
                        >
                            Have questions or feedback? We&apos;d love to hear from you. Reach out to our team
                            and we&apos;ll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </section>
            {/* Contact Information Cards */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Email Card */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center">
                            <div
                                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center mx-auto"
                                style={{ backgroundColor: '#4ea674' }}
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                            <p style={{ color: '#00000099' }} className="mb-2">
                                For general inquiries and support
                            </p>
                            <a
                                href="mailto:support@dealport.com"
                                style={{ color: '#4ea674' }}
                                className="font-semibold hover:underline"
                            >
                                support@dealport.com
                            </a>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center">
                            <div
                                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center mx-auto"
                                style={{ backgroundColor: '#4ea674' }}
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                            <p style={{ color: '#00000099' }} className="mb-2">
                                Call us 24/7 for immediate assistance
                            </p>
                            <a
                                href="tel:+1234567890"
                                style={{ color: '#4ea674' }}
                                className="font-semibold hover:underline"
                            >
                                +1 (234) 567-890
                            </a>
                        </div>

                        {/* Address Card */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center">
                            <div
                                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center mx-auto"
                                style={{ backgroundColor: '#4ea674' }}
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                            <p style={{ color: '#00000099' }}>
                                123 Commerce Street, Suite 100
                                <br />
                                New York, NY 10001
                                <br />
                                United States
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    )
}

export default page