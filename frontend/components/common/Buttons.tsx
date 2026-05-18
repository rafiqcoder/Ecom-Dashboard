import { cn } from '@/utils/merge'
import React from 'react'

function Buttons({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <button className={cn('px-6 transition duration-300 hover:bg-[#4EA674] cursor-pointer bg-[#EAF8E7] text-[#023337] md:px-8 lg:px-10 py-1 md:py-2 font-semibold   text-[14px] md:text-[15px] rounded-full', className)}>{children}</button>
    )
}

export default Buttons