import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Featured.css';
export default function Featured() {
  return (
    <div className='featured'>
        <div className="featuredTop">
            <h3 className="topTitle">Total Revenue</h3>
            <MoreVertIcon className='topIcon' fontSize='small'/>
        </div>
        <div className="featuredCenter">
        <CircularProgressbar value={70} strokeWidth={3} text={'70%'} />
        </div>
        <div className="featuredBottom">
            <h5 className='totalEarningTitle'>Total Sales Made Today.</h5>
            <h2 className='totlaEarningCount'>$450</h2>
                <p className='dec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto harum unde quasi natus error recusandae!</p>
                <div className="earningHistory">
                    <div className="item">
                        <p>Target</p>
                        <p>$12.4k</p>
                    </div>
                    <div className="item">
                        <p>Last Week</p>
                        <p>$12.4k</p>
                    </div>
                    <div className="item">
                        <p>Last Month</p>
                        <p>$12.4k</p>
                    </div>
              </div>


        </div>
    </div>
  )
}
