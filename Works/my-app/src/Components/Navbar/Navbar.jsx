import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Link to={'/page1'}><li style={{ listStyleType: 'none' }}>Page1</li></Link>
            <Link to={'/page2'}><li style={{ listStyleType: 'none' }}>Page2</li></Link>

        </div>
    )
}
