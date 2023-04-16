import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/NavBar/Navigation';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import UserProvider from './contexts/UserContext';
import CreateCarOffer from './components/CreateCarOffer/CreateCarOffer';
import EditCarOffer from './components/EditCarOffer/EditCar';
import Logout from './components/Logout/Logout';
import PrivateRoute from './components/RouteGuards/PrivateRoute';
import OwnerRoute from './components/RouteGuards/OwnerRoute';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
    <div>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path='/create' element={<CreateCarOffer />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/logout' element={<Logout />} />
          </Route>
          <Route element={<OwnerRoute />}>
            <Route path='/edit/:carId' element={<EditCarOffer />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/details/:carId' element={<Details />} />
          <Route path='/details' element={<Details />} />


        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
