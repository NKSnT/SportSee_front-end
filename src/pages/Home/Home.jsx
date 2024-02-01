import { useEffect, useState } from 'react';

//import Navbar from '../components/Navbar'
//import Banner from '../components/Banner'
//import DataRecharts from '../components/DataRecharts' *4 -> for BarCgart, LineChart, RadarChart, RadialBarChart
//import Card_dataKey from '../components/Card_dataKey'

//!! fetch need to be done externaly from components
//!!

import Navbar from 'components/navbar/Navbar';
import ActivityChart from 'components/charts/activity_chart/Activity_chart';
import AverageSessionsChart from 'components/charts/average_sessions_chart/AverageSessions_chart';
import ActivityTypeChart from 'components/charts/activity_type_chart/ActivityType_chart';
import UsersData from '__mocks__/usersData';

import './Home.css';

function Home() {
    const [isDataLoading, setDataLoading] = useState(true);
    const [isDataFormated, setDataFormated] = useState(false);
    const [error, setError] = useState(false);
    const [formatedUsersData, setFormatedUsersData] = useState([]);

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
                setDataLoading(false);
            }
        }
        fetchUsersData();
    }, []);

    useEffect(() => {
        async function formatData() {
            try {
                console.log(UsersData.USER_PERFORMANCE);
                /*  console.log(UsersData);
                console.log(UsersData.USER_MAIN_DATA);
                console.log(UsersData.USER_ACTIVITY);
                console.log(UsersData.USER_AVERAGE_SESSIONS);
                console.log(UsersData.USER_PERFORMANCE); */
                function dataFormating() {
                    const DataToUse = UsersData;
                    /*  console.log(DataToUse); */

                    const ActivityTypeData = DataToUse.USER_PERFORMANCE[0];

                    function activityTypeFormat() {
                        /*  console.log(ActivityTypeData); */
                        /* var obj = {};
                        Object.defineProperty(obj, 'value', {
                            //using Object.defineProperty() method of JavaScript object class
                            value: 101,
                            writable: false //configured writable property as false, and hence, the id property of object obj can't be changed now
                        });
                        Object.defineProperty(obj, 'type', {
                            //using Object.defineProperty() method of JavaScript object class
                            value: 101,
                            writable: false //configured writable property as false, and hence, the id property of object obj can't be changed now
                        }); */
                        Object.keys(ActivityTypeData.data).forEach((key) => {
                            Object.keys(ActivityTypeData.kind).forEach((key2) => {
                                if (Number(key2) === ActivityTypeData.data[key].kind) {
                                    ActivityTypeData.data[key].kind = ActivityTypeData.kind[key2];
                                }
                            });
                        });

                        /* const data1 = [];
                        Object.keys(ActivityTypeData.data).forEach((key) => {
                            data1.push(ActivityTypeData.data[key].value);
                        });
                        const axis1 = [];
                        Object.keys(ActivityTypeData.kind).forEach((key) => {
                            axis1.push(ActivityTypeData.kind[key]);
                        });
                        return { data1, axis1 }; */
                        return ActivityTypeData.data;
                    }

                    return { activityTypeFormat };
                }

                const activityTypeData2 = dataFormating().activityTypeFormat();
                console.log(activityTypeData2);
                /*  console.table(activityTypeData2); */
                setFormatedUsersData(activityTypeData2);
            } catch (err) {
                console.log('===== error =====', err);
                setError(true);
            } finally {
                setDataFormated(true);
            }
        }
        formatData();
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
    } else if (isDataFormated) {
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
                    {/* <div className="chart_test2">
                        <AverageSessionsChart
                            data={UsersData.USER_AVERAGE_SESSIONS[0].sessions}
                            x_axis={'day'}
                            y_axis={''}
                            data1={'sessionLength'}
                        />
                        <div className="chart_backgound"> </div>
                    </div> */}
                    <div className="chart_test3">
                        <ActivityTypeChart
                            data={formatedUsersData}
                            axis1={'kind'}
                            y_axis={''}
                            data1={'value'}
                        />
                    </div>

                    {/* <p>Nothing's here</p> */}
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
