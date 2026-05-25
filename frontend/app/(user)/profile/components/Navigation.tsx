"use client"

import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../toolkit/profile.slice";
import { InitialInterface } from "./types/type";

function Navigation() {
    const dispatch = useDispatch();
    // tabs navigation links
    const tabsData: { id: string; label: string }[] = [
        { id: 'profile', label: 'My Profile' },
        { id: 'orders', label: 'My Orders' },
        { id: 'addresses', label: 'Addresses' },
        { id: 'wishlist', label: 'Wishlist' },
        { id: 'settings', label: 'Settings' },
    ]
    const activeTab = useSelector((state: {orders: InitialInterface}) => state.orders.activeTab);
    return (
        <nav className="p-4 space-y-2">
            {tabsData.map((item) => (
                <button
                    key={item.id}
                    onClick={() => dispatch(setActiveTab(item.id))}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${activeTab === item.id
                        ? 'text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    style={{
                        backgroundColor: activeTab === item.id ? '#4ea674' : 'transparent',
                    }}
                >
                    {item.label}
                </button>
            ))}
        </nav>)
}

export default Navigation