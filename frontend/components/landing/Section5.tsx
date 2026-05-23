import React from "react";
import Heading from "../common/Heading";
import { ReviewInterface } from "./types/type";
import ReviewCard from "../common/ReviewCard";

function Section5() {
  const reviewsData: ReviewInterface[] = [
    {
      id: 1,
      name: "Emily R.",
      rating: 5,
      review:
        "Fast delivery and fantastic quality! The customer support team was quick to resolve my query. Dealport has earned a loyal customer.",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      date: "2024-05-15",
      verified: true,
    },
    {
      id: 2,
      name: "James M.",
      rating: 5,
      review:
        "Exceptional service from start to finish. The product quality exceeded my expectations and the shipping was incredibly fast.",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      date: "2024-05-10",
      verified: true,
    },
    {
      id: 3,
      name: "Sarah L.",
      rating: 4,
      review:
        "Great experience overall. Very responsive customer service and high-quality products. Would definitely recommend to friends.",
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      date: "2024-05-08",
      verified: true,
    },
    {
      id: 4,
      name: "Michael T.",
      rating: 5,
      review:
        "Outstanding quality and phenomenal customer service. Everything arrived perfectly packaged and on time. Highly recommended!",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      date: "2024-05-05",
      verified: true,
    },
    {
      id: 5,
      name: "Emma W.",
      rating: 5,
      review:
        "Best purchase I've made in years! The attention to detail is incredible. I'm a customer for life!",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      date: "2024-05-01",
      verified: true,
    },
    {
      id: 6,
      name: "David K.",
      rating: 4,
      review:
        "Very satisfied with my order. Great quality, fair pricing, and excellent support team. Will buy again!",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      date: "2024-04-28",
      verified: true,
    },
    {
      id: 7,
      name: "Jessica H.",
      rating: 5,
      review:
        "Absolutely love it! The packaging was beautiful and the product is exactly as described. Customer service is top-notch.",
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      date: "2024-04-25",
      verified: true,
    },
    {
      id: 8,
      name: "Robert P.",
      rating: 4,
      review:
        "Good value for money. Quick delivery and well-packaged. Minor issue with one item but customer service resolved it promptly.",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      date: "2024-04-20",
      verified: true,
    },
    {
      id: 9,
      name: "Amanda C.",
      rating: 5,
      review:
        "Couldn't be happier! Premium quality, amazing customer support, and delivery was faster than expected. Highly satisfied!",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      date: "2024-04-18",
      verified: true,
    },
    {
      id: 10,
      name: "Christopher N.",
      rating: 5,
      review:
        "Excellent all around. The product quality is superior and the customer service team went above and beyond. Will definitely order again!",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      date: "2024-04-15",
      verified: true,
    },
  ];
  const reviewsData2: ReviewInterface[] = [
    {
      id: 1,
      name: "Olivia Johnson",
      rating: 5,
      review:
        "I ordered home decor items and they look even better in person. Great quality and arrived earlier than expected.",
      avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      date: "2026-05-20",
      verified: true,
    },
    {
      id: 2,
      name: "Ethan Carter",
      rating: 4,
      review:
        "The grocery products were fresh and well packaged. Would love to see more organic options in the future.",
      avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      date: "2026-05-18",
      verified: true,
    },
    {
      id: 3,
      name: "Sophia Williams",
      rating: 5,
      review:
        "Bought toys for my nephew and he absolutely loved them. Safe, colorful, and great value for money.",
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      date: "2026-05-16",
      verified: true,
    },
    {
      id: 4,
      name: "Noah Thompson",
      rating: 5,
      review:
        "Customer support was incredibly helpful when I needed to change my shipping address. Excellent service.",
      avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      date: "2026-05-15",
      verified: true,
    },
    {
      id: 5,
      name: "Ava Martinez",
      rating: 4,
      review:
        "The decorative lamp I purchased fits perfectly in my living room. Good quality and stylish design.",
      avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      date: "2026-05-13",
      verified: true,
    },
    {
      id: 6,
      name: "Liam Anderson",
      rating: 5,
      review:
        "Fast shipping and accurate product descriptions. Everything arrived exactly as shown on the website.",
      avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg",
      date: "2026-05-11",
      verified: true,
    },
    {
      id: 7,
      name: "Mia Rodriguez",
      rating: 5,
      review:
        "I have ordered multiple times and every experience has been fantastic. Consistent quality and great prices.",
      avatarUrl: "https://randomuser.me/api/portraits/women/7.jpg",
      date: "2026-05-10",
      verified: true,
    },
    {
      id: 8,
      name: "William Brown",
      rating: 4,
      review:
        "The toys were durable and educational. My kids enjoy them every day. Delivery was also very quick.",
      avatarUrl: "https://randomuser.me/api/portraits/men/8.jpg",
      date: "2026-05-08",
      verified: true,
    },
    {
      id: 9,
      name: "Charlotte Davis",
      rating: 5,
      review:
        "Amazing shopping experience. The website is easy to use and the checkout process was seamless.",
      avatarUrl: "https://randomuser.me/api/portraits/women/9.jpg",
      date: "2026-05-06",
      verified: true,
    },
    {
      id: 10,
      name: "Benjamin Wilson",
      rating: 5,
      review:
        "High-quality products, secure packaging, and excellent customer care. Highly recommended for online shopping.",
      avatarUrl: "https://randomuser.me/api/portraits/men/10.jpg",
      date: "2026-05-04",
      verified: true,
    },
  ];
  return (
    <div className="py-4 font-lato w-full overflow-x-hidden">
      <div>
        <Heading
          title="Our Happy Customers"
          className=" text-center text-[#4EA674]"
        />
        <p className="text-center text-sm mt-2 max-w-xl mx-auto text-[#00000099]">
          Don’t just take our word for it – see how our products and services
          have delighted customers across the globe, one experience at a time.
        </p>
      </div>
      <section className="overflow-x-hidden py-10">
        <div className="flex animate-review-scroll">
          {reviewsData.map((item, index) => (
            <div
              key={index}
              className="w-full  px-4 md:w-1/2 lg:w-1/3 shrink-0"
            >
              <ReviewCard key={item.id} {...item} />
            </div>
          ))}
        </div>
        <div className="flex flex-row-reverse animate-review-scroll-to-right mt-8">
          {reviewsData2.map((item, index) => (
            <div
              key={index}
              className="w-full  px-4 md:w-1/2 lg:w-1/3 shrink-0"
            >
              <ReviewCard key={item.id} {...item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Section5;
