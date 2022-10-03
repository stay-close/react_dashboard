import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PsychologyIcon from '@mui/icons-material/Psychology';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import './SideBar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="top">
        <span className="logo">
          Stay Close
        </span>
        </div>
        <div className="center">
          <nav>
            <ul>
              <p>main</p>
              <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
              <p>list</p>
              <li><GroupIcon className='icon'/><span>Users</span></li>
              <li><CategoryIcon className='icon'/><span>products</span></li>
              <li><ShoppingCartIcon className='icon'/><span>orders</span></li>
              <li><DeliveryDiningIcon className='icon'/><span>delevery</span></li>
              <p>usefull links</p>
              <li><QueryStatsIcon className='icon'/><span>stats</span></li>
              <li><NotificationsActiveIcon className='icon'/><span>notifications</span></li>
              <p>services</p>
              <li><SettingsSystemDaydreamIcon className='icon'/><span>system health</span></li>
              <li><PsychologyIcon className='icon'/><span>logs</span></li>
              <li><SettingsIcon className='icon'/><span>settings</span></li>
              <p>users</p>
              <li><AccountCircleIcon className='icon'/><span>profile</span></li>
              <li><LogoutIcon className='icon'/><span>logout</span></li>
            </ul>
          </nav>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}
