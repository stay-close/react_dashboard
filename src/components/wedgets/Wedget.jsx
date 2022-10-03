import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoneyIcon from '@mui/icons-material/Money';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Wedget.css';

export default function Wedget({type}) {
const counter= 1250;
const persent= 45;
let data;

switch(type){
    case "user": data={
                title:"USERS",
                count: counter,
                persent:persent,
                link:'See All Users',
                icon: (<GroupIcon className='icon' style={{background:'rgba(255,0,0,.2)'}}/>),
                isMoney: false
            };
    break;
    case "order": data={
                title:"ORDER",
                count: counter,
                persent:persent,  
                link:'View All Orders',
                icon: (<ShoppingCartIcon className='icon' style={{background:'rgba(255,255,0,.2)',color:'yellow'}}/>),
                isMoney: false
            };
    break;
    case "earning": data={
                title:"EARNINGS",
                count: counter,
                persent:persent, 
                link:'View All Earnings',
                icon: (<MonetizationOnIcon className='icon'style={{background:'rgba(0,255,0,.2)',color:'green'}}/>),
                isMoney: true
            };
    break;
    case "balance": data={
                title:"BALANCE",
                count: counter,
                persent:persent,
                link:'View All Balance',
                icon: (<MoneyIcon className='icon'style={{background:'rgba(0,0,255,.2)',color:'blue'}}/>),
                isMoney: true
            };
    break;
    default: break;
}

  return (
    <div className='wedget'>
        <div className="wedgetLeft">
            <h3 className="title">{data.title}</h3>
            <p className="count">{data.isMoney && '$'} {data.count}</p>
            <p className="link">{data.link}</p>
        </div>
        <div className="wedgetRight">
            <h4 className="persent">{data.persent}%</h4>
            {data.icon}
        </div>

    </div>
  )
}
