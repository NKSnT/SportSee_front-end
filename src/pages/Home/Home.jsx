import { useEffect, useState } from 'react';

//import Navbar from '../components/Navbar'
//import Banner from '../components/Banner'
//import DataRecharts from '../components/DataRecharts' *4 -> for BarCgart, LineChart, RadarChart, RadialBarChart
//import Card_dataKey from '../components/Card_dataKey'

//!! fetch need to be done externaly from components
//!!

import Navbar from 'components/navbar/Navbar';
import ActivityChart from 'components/charts/activity_chart/Activity_chart';
import AverageSessionsChart from 'components/charts/averageSessions_chart/AverageSessions_chart';
import UsersData from '__mocks__/usersData';

import './Home.css';

function Home() {
    const [isDataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState(false);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        async function fetchUsersData() {
            try {
                //for backend fetch
                /* const response = await fetch('../asstes/logements');
            const { infoLogementsData } = await response.json(); */
                console.log('test1');
                //setUsersData(UsersData);
            } catch (err) {
                console.log('===== error =====', err);
                setError(true);
            } finally {
                console.log(UsersData);
                console.log(UsersData.USER_AVERAGE_SESSIONS);
                /*  console.log(UsersData);
                console.log(UsersData.USER_MAIN_DATA);
                console.log(UsersData.USER_ACTIVITY);
                console.log(UsersData.USER_AVERAGE_SESSIONS);
                console.log(UsersData.USER_PERFORMANCE); */
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
                    {/* <div className="chart_test">
                        <ActivityChart
                            data={UsersData.USER_ACTIVITY[0].sessions}
                            x_axis={'day'}
                            y_axis={''}
                            data1={'kilogram'}
                            data2={'calories'}
                        />
                    </div> */}
                    <div className="chart_test2">
                        <AverageSessionsChart
                            data={UsersData.USER_AVERAGE_SESSIONS[0].sessions}
                            x_axis={'day'}
                            y_axis={''}
                            data1={'sessionLength'}
                        />
                        <div className="chart_backgound"> </div>
                    </div>

                    <p>Nothing's here</p>
                    {/* usersData.USER_ACTIVITY */}
                    {/*   {usersData.map((obj) => )} */}
                </div>
            </div>
        );
    }
}
export default Home;
<a
    class="yt-simple-endpoint style-scope yt-formatted-string"
    spellcheck="false"
    href="/@x0o0x_"
    dir="auto">
    {' '}
    ‌{' '}
</a>;
