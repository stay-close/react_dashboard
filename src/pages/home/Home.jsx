import React from 'react';
import Chart from '../../components/chart/Chart.jsx';
import Featured from '../../components/featured/Featured.jsx';
import Sidebar from '../../components/leftSidebar/SideBar.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';
import Wedget from '../../components/wedgets/Wedget.jsx';
import './Home.css';

export default function Home() {
  return (
    <div className='homePage'>
       <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className="wedgets">
          <Wedget type='user'/>
          <Wedget type='order'/>
          <Wedget type='earning'/>
          <Wedget type='balance'/>
        </div>

<div className="chartArea">
  <Featured/>
  <Chart/>
</div>

      </div>
    </div>
  )
}

