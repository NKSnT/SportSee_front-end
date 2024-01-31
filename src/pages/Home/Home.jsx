import { useEffect, useState } from 'react';

//import Navbar from '../components/Navbar'
//import Banner from '../components/Banner'
//import DataRecharts from '../components/DataRecharts' *4 -> for BarCgart, LineChart, RadarChart, RadialBarChart
//import Card_dataKey from '../components/Card_dataKey'

//!! fetch need to be done externaly from components
//!!

import Navbar from '../../components/navbar/Navbar'; //need
//import UsersData from '__mocks__/usersData';

import './Home.css';

function Home() {
    const [isDataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState(false);
    const [usersData, setUsersData] = useState([]);
    //console.log(usersData);

    useEffect(() => {
        async function fetchUsersData() {
            try {
                //for backend fetch
                /* const response = await fetch('../asstes/logements');
            const { infoLogementsData } = await response.json(); */
                console.log('test');
                //setUsersData(UsersData);
            } catch (err) {
                console.log('===== error =====', err);
                setError(true);
            } finally {
                setDataLoading(false);
            }
        }
        fetchUsersData();
    }, []);
    if (error) {
    }
    if (isDataLoading) {
        return (
            <div className="main_wrapper">
                <Navbar></Navbar>
                <div className="content_container">
                    <p>...Loading...</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="main_wrapper">
                <Navbar></Navbar>
                <div className="content_container">
                    <p>Nothing's here</p>
                    {usersData.USER_ACTIVITY}
                    {/*   {usersData.map((obj) => )} */}
                </div>
            </div>
        );
    }
}
export default Home;
