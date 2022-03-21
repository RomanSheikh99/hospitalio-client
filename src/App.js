import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import About from './Components/Pages/About/About';
import Apointments from './Components/Pages/Apointments/Apointments';
import Contact from './Components/Pages/Contact/Contact';
import DoctorProfile from './Components/Pages/DoctorProfile/DoctorProfile';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import MyCard from './Components/Pages/MyCard/MyCard';
import NotFound from './Components/Pages/NotFound/NotFound';
import OurDoctors from './Components/Pages/OurDoctors/OurDoctors';
import OurServices from './Components/Pages/OurServices/OurServices';
import Register from './Components/Pages/Register/Register';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Welldone from './Components/Pages/Welldone/Welldone';
import PrivateRoute from './Components/Sheared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <OurServices></OurServices>
          </Route>
          <Route exact path="/doctors">
            <OurDoctors></OurDoctors>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/service/:serviceID">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/mycard">
            <MyCard></MyCard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/apointment">
            <Apointments></Apointments>
          </PrivateRoute>
          <PrivateRoute exact path="/doctor/:doctorID">
            <DoctorProfile></DoctorProfile>
          </PrivateRoute>
          <PrivateRoute exact path="/welldone">
            <Welldone></Welldone>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
