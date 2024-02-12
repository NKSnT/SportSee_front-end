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
import TodayScoreChart from 'components/charts/today_scrore_chart/TodayScore_chart';
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
        // format need to be done after fetch
        async function formatData() {
            try {
                console.log(UsersData.USER_MAIN_DATA[0]);
                /*  console.log(UsersData);
                console.log(UsersData.USER_MAIN_DATA);
                console.log(UsersData.USER_ACTIVITY);
                console.log(UsersData.USER_AVERAGE_SESSIONS);
                console.log(UsersData.USER_PERFORMANCE); */
                function dataFormating() {
                    const DataToUse = UsersData;
                    /*  console.log(DataToUse); */
                    const dayScoreData = DataToUse.USER_MAIN_DATA[0].todayScore;
                    const ActivityTypeData = DataToUse.USER_PERFORMANCE[0];
                    /*  const Score = DataToUse.USER_PERFORMANCE[0]; */
                    function dayScoreFormat() {
                        return [{ todayScore: dayScoreData * 100 }];
                    }
                    function activityTypeFormat() {
                        /*  console.log(ActivityTypeData); */
                        Object.keys(ActivityTypeData.data).forEach((key) => {
                            Object.keys(ActivityTypeData.kind).forEach((key2) => {
                                if (Number(key2) === ActivityTypeData.data[key].kind) {
                                    ActivityTypeData.data[key].kind = ActivityTypeData.kind[key2];
                                }
                            });
                        });
                        return ActivityTypeData.data;
                    }

                    return { activityTypeFormat, dayScoreFormat };
                }

                /*  const activityTypeData2 = dataFormating().activityTypeFormat(); */
                /*  console.log(activityTypeData2); */
                /*  console.table(activityTypeData2); */
                setFormatedUsersData({
                    test: dataFormating().activityTypeFormat(),
                    /*  todayScore: { score: dataFormating().dayScoreFormat() } */
                    todayScore: dataFormating().dayScoreFormat()
                });
                /* setFormatedUsersData(activityTypeData2); */
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
        console.log(formatedUsersData);
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
        console.log(formatedUsersData.todayScore);
        /* console.log(Object.keys(formatedUsersData)); */
        return (
            <div className="main_wrapper">
                <Navbar></Navbar>
                <div className="content_container">
                    <div className="chart_test">
                        <ActivityChart
                            data={UsersData.USER_ACTIVITY[0].sessions}
                            x_axis={'day'}
                            y_axis={''}
                            data1={'kilogram'}
                            data2={'calories'}
                        />
                    </div>
                    <div className="chart_test2">
                        <AverageSessionsChart
                            data={UsersData.USER_AVERAGE_SESSIONS[0].sessions}
                            x_axis={'day'}
                            y_axis={'sessionLength'}
                            data1={'sessionLength'}
                        />
                        <div className="chart_test2_backgound"> </div>
                    </div>
                    {/*  // finished , data use is formated */}
                    <div className="chart_test3">
                        <ActivityTypeChart
                            data={formatedUsersData.test}
                            data1={'value'}
                            axis1={'kind'}
                        />
                    </div>
                    <div className="chart_test4">
                        <TodayScoreChart data={formatedUsersData.todayScore} axis1={'todayScore'} />
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
