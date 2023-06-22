import React from 'react'
import Header from './Header'
import Card from './Card'
import data from '../data'
import '../styles/app.css'

export default function App() {
    const card = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })
    

    return (
        <div className='container'>
            <Header/>
            {card}
        </div>
    )
} 