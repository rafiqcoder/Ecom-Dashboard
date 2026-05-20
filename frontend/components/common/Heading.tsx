import { cn } from "@/utils/merge"

interface HeadingProps {
    title: string
    className?: string
}

function Heading({ title, className }: HeadingProps) {
    return (
        <h1 className={(cn(` text-2xl md:text-3xl text-black font-medium `, className))}>{title}</h1>
    )
}

export default Heading