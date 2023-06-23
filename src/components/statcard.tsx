import React, { ReactNode } from 'react'

interface StatCardProps {
    number: string;
    description: string;
    backgroundColor: string; 
}

const StatCard = ({ number, description, backgroundColor }: StatCardProps) => {
    return (
        <div className={`flex flex-col justify-center rounded-md p-4`} style={{ backgroundColor }}>
            <span className="text-sm pb-4 text-[#222]">{number}</span>
            <p className="text-lg">
                {description}
            </p>
        </div>
    )
}

export default StatCard