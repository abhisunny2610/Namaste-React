import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className='fiexd d-flex flex-column border gap-4'>
            <Link>Home</Link>
            <Link>Shorts</Link>
            <Link>Subscription</Link>
            <Link>You</Link>
            <Link>Downloads</Link>
        </aside>
    )
}

export default Sidebar