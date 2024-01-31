import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
//import User from './pages/User'; //asked for user data check from user/:id

/*Asked :
/user/:id/activity
/user/:id/average-sessions
/user/:id/performance
*/

//test with nested rout like so
//import Activity from './pages/Activity';
//import Performance from './pages/Performance';
/* 
<Route path="user/:id/" element={<User />}>
      <Route path="activity" element={<Activity />} />
      <Route path="performance" element={<Performance />} />
</Route> 
                    */

/* not implemented
//import About from './pages/Profil';
//import Logement from './pages/settings';
//import Logement from './pages/community'; 
*/

//maybe
//import NoMatch from './pages/Error';

import Header from './components/header/Header.jsx';

export default function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*  <Route path="user/:id/" element={<Home />}>
                        <Route path="activity" element={<Activity />} />
                        <Route path="average-sessions" element={<Average-sessions />} />
                        <Route path="performance" element={<Performance />} />
                    </Route> */}
                </Routes>
            </Router>
        </div>
    );
}
