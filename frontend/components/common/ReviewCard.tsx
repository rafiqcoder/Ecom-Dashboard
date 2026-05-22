'use client';

import React from 'react';

interface ReviewCardProps {
    name: string;
    rating: number;
    review: string;
    avatarUrl?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
    name,
    rating,
    review,
    avatarUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
}) => {
    const renderStars = (count: number) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <span
                key={i}
                className={`text-lg transition-all duration-300 ${i < count ? 'text-amber-400' : 'text-gray-300'
                    }`}
            >
                ★
            </span>
        ));
    };

    return (
        <div className="w-full max-w-md">


            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50 border border-amber-100/20 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-radial from-amber-200/5 via-transparent to-transparent pointer-events-none" />

                {/* Header with avatar and name */}
                <div className="relative z-10 flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-amber-200/40 shadow-md">
                        <img
                            src={avatarUrl}
                            alt={name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex-1">
                        <h3
                            className="text-lg font-bold text-gray-900 m-0"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {name}
                        </h3>
                        <div className="flex gap-1 mt-1">
                            {renderStars(rating)}
                        </div>
                    </div>
                </div>
                <p className={`relative z-10 text-sm leading-relaxed text-gray-700 m-0 before:content-['\"'] before:text-4xl before:text-amber-300/40 before:leading-none before:align-super before:mr-1`} style={{ fontFamily: "'Lora', serif" }}>
                    {review}
                </p>

            </div>
        </div>

    );
};
// className="relative z-10 text-sm leading-relaxed text-gray-700 m-0 before:content-['\"'] before:text-4xl before:text-amber-300/40 before:leading-none before:align-super before:mr-1"
//                 style={{ fontFamily: "'Lora', serif" }}
export default ReviewCard;