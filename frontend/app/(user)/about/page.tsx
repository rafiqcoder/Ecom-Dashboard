import Link from 'next/link';

export default function About() {
    const teamData: { name: string; role: string; description: string }[] = [
        {
            name: 'Sarah Johnson',
            role: 'Co-Founder & CEO',
            description: 'Leading the vision with 10+ years of e-commerce experience',
        },
        {
            name: 'Michael Chen',
            role: 'Co-Founder & CTO',
            description: 'Building scalable technology solutions for global reach',
        },
        {
            name: 'Emma Rodriguez',
            role: 'Head of Operations',
            description: 'Ensuring seamless logistics and customer satisfaction',
        },
    ]

    // choose us section data
    const chooseUsData: { title: string; description: string }[] = [
        {
            title: 'Unbeatable Prices',
            description: 'We offer competitive pricing on a wide range of products without compromising on quality.',
        },
        {
            title: 'Fast & Reliable Shipping',
            description: 'Get your orders delivered quickly and safely with our trusted logistics partners.',
        },
        {
            title: 'Secure Shopping',
            description: 'Your data and transactions are protected with industry-leading security measures.',
        },
        {
            title: 'Easy Returns',
            description: 'Not satisfied? Return your purchase within 30 days for a full refund, no questions asked.',
        },
        {
            title: 'Authentic Products',
            description: 'All our products are 100% authentic and sourced directly from authorized suppliers.',
        },
        {
            title: 'Expert Support',
            description: 'Our knowledgeable customer service team is ready to help 24/7.',
        },
    ]
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About Dealport
                        </h1>
                        <p
                            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                            style={{ color: '#00000099' }}
                        >
                            We{"'"}re on a mission to revolutionize online shopping by bringing you
                            the best deals, quality products, and exceptional customer service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <p
                                className="text-base md:text-lg mb-4 leading-relaxed"
                                style={{ color: '#00000099' }}
                            >
                                Founded in 2020, Dealport began with a simple vision: to make
                                quality products accessible to everyone at unbeatable prices. What
                                started as a small marketplace has grown into a trusted platform
                                serving thousands of customers worldwide.
                            </p>
                            <p
                                className="text-base md:text-lg mb-4 leading-relaxed"
                                style={{ color: '#00000099' }}
                            >
                                We believe in transparency, integrity, and putting our customers
                                first. Every product on our platform is carefully curated to ensure
                                quality, authenticity, and value for money.
                            </p>
                            <p
                                className="text-base md:text-lg leading-relaxed"
                                style={{ color: '#00000099' }}
                            >
                                Today, we{"'"}re proud to offer a diverse range of products across
                                multiple categories, all backed by our commitment to customer
                                satisfaction.
                            </p>
                        </div>
                        <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                            <div
                                className="absolute inset-0 flex items-center justify-center text-gray-400"
                            >
                                <svg
                                    className="w-24 h-24"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: '#00000099' }}
                        >
                            These principles guide every decision we make
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <div
                                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
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
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
                            <p style={{ color: '#00000099' }}>
                                We curate every product to ensure it meets our high standards of
                                quality and durability.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <div
                                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
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
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Best Prices
                            </h3>
                            <p style={{ color: '#00000099' }}>
                                We work directly with suppliers to offer you the most competitive
                                prices without compromising quality.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <div
                                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
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
                                        d="M14 10h-2m2-2h2m0 0h2m-2 0v2m0-2v-2m-4 4h2m0 0h2m-2 0v2m0-2v-2m-6 4h2m0 0h2m-2 0v2m0-2v-2"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Customer First
                            </h3>
                            <p style={{ color: '#00000099' }}>
                                Your satisfaction is our priority. We offer easy returns and
                                dedicated customer support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                className="py-16 md:py-24"
                style={{ backgroundColor: '#4ea674' }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                            <p className="text-lg">Happy Customers</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
                            <p className="text-lg">Products</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                            <p className="text-lg">Trusted Brands</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                            <p className="text-lg">Customer Support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Team
                        </h2>
                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: '#00000099' }}
                        >
                            Passionate professionals dedicated to delivering excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamData.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <svg
                                        className="w-16 h-16 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {member.name}
                                    </h3>
                                    <p
                                        className="font-semibold mb-2"
                                        style={{ color: '#4ea674' }}
                                    >
                                        {member.role}
                                    </p>
                                    <p style={{ color: '#00000099' }}>
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Dealport?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {chooseUsData.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div
                                        className="flex items-center justify-center h-8 w-8 rounded-md text-white"
                                        style={{ backgroundColor: '#4ea674' }}
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {item.title}
                                    </h3>
                                    <p style={{ color: '#00000099' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 md:py-24"
                style={{ backgroundColor: '#f9fafb' }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Ready to find your next favorite deal?
                    </h2>
                    <p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        style={{ color: '#00000099' }}
                    >
                        Join thousands of satisfied customers and start shopping with Dealport today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/shop">
                            <button
                                className="px-8 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                                style={{ backgroundColor: '#4ea674' }}
                            >
                                Shop Now
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button
                                className="px-8 py-3 rounded-lg font-semibold border-2 transition-colors hover:bg-gray-100"
                                style={{ borderColor: '#4ea674', color: '#4ea674' }}
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}