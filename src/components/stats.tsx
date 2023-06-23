import React from 'react'
import StatCard from './statcard'

const Stats: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto py-24 px-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <StatCard
                    number='01.'
                    description=''
                    backgroundColor='#fed7aa'
                />
                <StatCard
                    number='02.'
                    description=''
                    backgroundColor='#fb923c'
                />
                <StatCard
                    number='03.'
                    description=''
                    backgroundColor='#ef4444'
                />
                <StatCard
                    number='04.'
                    description=''
                    backgroundColor='#075985'
                />
            </div>
        </div>
    )
}

export default Stats
