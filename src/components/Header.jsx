import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='logo'>
                <Link to='/'>music play</Link>
            </h1>
            <h2>chart</h2>
            <ul>
                <li><Link to='/melonPage'><span className='icon'></span>멜론 차트</Link></li>
                <li><Link to='/bugsPage'><span className='icon'></span>벅스 차트</Link></li>
                <li><Link to='/applePage'><span className='icon'></span>애플 차트</Link></li>
                <li><Link to='/geniePage'><span className='icon'></span>지니 차트</Link></li>
                <li><Link to='/billPage'><span className='icon'></span>빌보드 차트</Link></li>
            </ul>
            <h2>playlist</h2>
            <ul>
                <li><Link to='/recent'><span className='icon'></span>recent</Link></li>
                <li><Link to='/favorites'><span className='icon'></span>favorites</Link></li>
                <li><Link to='/mymusic'><span className='icon'></span>mymusic</Link></li>
            </ul>

        </header >
    )
}

export default Header