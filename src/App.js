import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NewUser from './pages/newUser/NewUser';
import SingleUser from './pages/singleUser/SingleUser';
import UserList from './pages/userList/UserList';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
 <Route path='/' >
  <Route index element={<Home/>} />
  <Route path='login' element={<Login />} />
  <Route path='users'>
    <Route index element={<UserList/>}/>
    <Route path=':userId' element={<SingleUser/>}/>
    <Route path='new' element={<NewUser/>}/>
  </Route>
 </Route>
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
