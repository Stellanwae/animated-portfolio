import React from 'react'

export default function Links() {
    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ]

    return (
    <div className='links' >
        
        {items.map((item) => (
            <a href={`#${item}`} key={item}>
                {item}
            </a>
        ))} 
        
    </div>
    )
    }
