import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ZoomInMapOutlinedIcon from '@mui/icons-material/ZoomInMapOutlined';
import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="searchBar">
            <input type="search" placeholder='Search...' />
            <SearchIcon className='icon'/>
        </div>
        <div className="navRight">
            <nav>
                <ul>
                    <li><LanguageIcon className='icon'/><span>English</span></li>
                    <li><DarkModeOutlinedIcon className='icon'/></li>
                    <li><ZoomInMapOutlinedIcon className='icon'/></li>
                    <li><NotificationsActiveOutlinedIcon className='icon'/><span className='badge'>5</span></li>
                    <li><EmailOutlinedIcon className='icon'/><span className='badge'>2</span></li>
                    <li><ListOutlinedIcon className='icon'/></li>                    
                    <li><AccountCircleOutlinedIcon className='icon'/></li>
                    
                </ul>
            </nav>
        </div>
    </div>
  )
}
