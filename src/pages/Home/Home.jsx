import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import Navbar from '../components/Navbar'
//import Banner from '../components/Banner'
//import DataRecharts from '../components/DataRecharts' *4 -> for BarCgart, LineChart, RadarChart, RadialBarChart
//import Card_dataKey from '../components/Card_dataKey'

//!! fetch need to be done externaly from components
//!!
import caloriesIcon from 'assets/ico/calories-icon.svg'
import lipidesIcon from 'assets/ico/fat-icon.svg'
import proteinesIcon from 'assets/ico/protein-icon.svg'
import glucidesIcon from 'assets/ico/carbs-icon.svg'

import Navbar from 'components/navbar/Navbar';
import ActivityChart from 'components/charts/activity_chart/Activity_chart';
import AverageSessionsChart from 'components/charts/average_sessions_chart/AverageSessions_chart';
import TodayScoreChart from 'components/charts/today_scrore_chart/TodayScore_chart';
import ActivityTypeChart from 'components/charts/activity_type_chart/ActivityType_chart';
//import UsersData from '__mocks__/usersData';
import KeyDataCard from 'components/keydata_card/KeyData_card';

import './Home.css';



function Home() {
    const params = useParams()

    const [isDataLoading, setDataLoading] = useState(true);
    const [isDataFormated, setDataFormated] = useState(false);
    const [error, setError] = useState(false);
    const [UsersData, setUsersData] = useState([]);
    const [formatedUsersData, setFormatedUsersData] = useState([]);

    //let UserData2 = undefined

    useEffect(() => {
        async function fetchUsersData() {            
            try {                
            // const response = await fetch('http://localhost:3000/user/12');
            // const { dataTest } = await response.json();

            const response =  await fetch(`http://localhost:3000/user/${params.id}`)
            const UserData  = await response.json(); 
            const response2 =  await fetch(`http://localhost:3000/user/${params.id}/activity`)
            const UserData2 =    await response2.json() 
            const response3 =  await fetch(`http://localhost:3000/user/${params.id}/average-sessions`)
            const UserData3 =    await response3.json() 
            const response4 =  await fetch(`http://localhost:3000/user/${params.id}/performance`)
            const UserData4 =    await response4.json() 
            //console.log("Téléchargement terminé", response);
            if (!response.ok) {
                // make the promise be rejected if we didn't get a 2xx response             
                throw new Error(response.status + ", unexpected user id");
            }        
            
            setUsersData([UserData,UserData2,UserData3,UserData4])             
            //setUsersData(UserData)                   
            } catch (err) {                
                console.log('EXCEPTION: ', err);                
                setError(true);               
            } finally{
                setDataLoading(false);   
            }
        } 
        fetchUsersData()  
    }, [params.id]);
    //}, [params.id, UsersData]);

    useEffect(() => { //work, fire after loading
        async function formatData() {  
            if(!isDataLoading && !isDataFormated ){
                 try {
                
                    //console.log('UserData (1)');
                    //console.log(UsersData);
                    //console.log(UsersData[0])                 

                function dataFormating() {
                    
                    const baseData = UsersData[0];                    
                    const infoData = baseData.data.userInfos
                    const mainData = baseData.data.keyData;
                
                    //const dayScoreData = baseData.data.todayScore;
                    const dayScoreData = baseData.data[

                        Object.keys(baseData.data).filter( propertyName => {                             
                                return propertyName.toLowerCase().includes('score')                                                               
                         })

                    ];                          
            
                  

                    const activityData =  UsersData[1].data.sessions
                    const averageSessionData = UsersData[2].data.sessions

                    const ActivityTypeData = UsersData[3].data                    

                    //  const Score = DataToUse.USER_PERFORMANCE[0];
                    function userInfoDataFormat() {
                        //console.log('ok1')
                        return  infoData ;
                    }
                    function mainDataFormat() {
                        //console.log('ok2')
                        return  mainData ;
                    }
                    function dayScoreFormat() {
                        //console.log('ok3')
                     
                        return [{ todayScore: dayScoreData * 100 }];
                    }
                    function activityFormat() {
                        //console.log('ok4') 
                        return activityData;
                    }
                    function activityTypeFormat() {
                        //console.log('ok5')
                        //  console.log(ActivityTypeData);
                        Object.keys(ActivityTypeData.data).forEach((key) => {
                            Object.keys(ActivityTypeData.kind).forEach((key2) => {
                                if (Number(key2) === ActivityTypeData.data[key].kind) {
                                    ActivityTypeData.data[key].kind = ActivityTypeData.kind[key2];
                                }
                            });
                        });
                        return ActivityTypeData.data;
                    }
                    function userAvgSessionFormat() {
                        //console.log('ok6')
                        //console.log(averageSessionData);                       
                        return averageSessionData;
                    }                 

                    return {userInfoDataFormat, mainDataFormat, dayScoreFormat, activityFormat, activityTypeFormat, userAvgSessionFormat };
                }                
                setFormatedUsersData({                                     
                    //userInfos: UsersData[0].data.userInfos,
                    userInfos: dataFormating().userInfoDataFormat(),                    
                    keyData: dataFormating().mainDataFormat(),
                    todayScore: dataFormating().dayScoreFormat(),
                    activity : dataFormating().activityFormat(),
                    userAvgSession : dataFormating().userAvgSessionFormat(),
                    performance: dataFormating().activityTypeFormat()

                    //...
                });           
            } finally {
                setDataFormated(true);
            }
        }       
           } formatData()
    },[isDataLoading, UsersData, isDataFormated]);

    useEffect(()=>{   
        console.log('is data formated : '+ isDataFormated)   
        if(isDataFormated){
            console.log('formatedUsersData : ');  
            console.log(formatedUsersData);
        }               
    },[isDataFormated, formatedUsersData])

   if(error){   
    return (
        <div className="main_wrapper">
            <Navbar></Navbar>
            <div className="content_container">
                <p>...Error 404 not found...</p>
            </div>
        </div>
    );
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
    } else if (isDataFormated ) { 
        //if (isDataFormated ) {     
         
        
        return (
            <div className="main_wrapper">
                <Navbar></Navbar>                
                <div className="content_wrapper">
                    <div className='banner'>                  
                        <h1 className='welcome' >Bonjour <span>{formatedUsersData.userInfos.firstName}</span></h1>                    
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className='content_container'>
                        <div className='charts_container'>
                        <div className="chart_test">
                        <ActivityChart
                            data={formatedUsersData.activity}
                            x_axis={'day'}
                            y_axis={''}
                            data1={'kilogram'}
                            data2={'calories'}
                        />
                    </div>
                    {/* <div className='test'> */}
                    <div className="chart_test2">
                        <AverageSessionsChart
                            data={formatedUsersData.userAvgSession}
                            x_axis={'day'}
                            y_axis={'sessionLength'}
                            data1={'sessionLength'}
                        />
                        <div className="chart_test2_backgound"></div>
                    </div>
                    <div className="chart_test3">
                        <ActivityTypeChart
                            data={formatedUsersData.performance}
                            data1={'value'}
                            axis1={'kind'}
                        />
                    </div> 
                            <div className="chart_test4">
                                <TodayScoreChart data={formatedUsersData.todayScore} axis1={'todayScore'} />
                            </div> 
                    {/* </div> */}
                                              
                        </div>
                    <div className='keyInfo_container'>                                     
                            <KeyDataCard data={formatedUsersData.keyData.calorieCount} icon={caloriesIcon} name={'Calories'} unit={'KCal'}/>
                            <KeyDataCard data={formatedUsersData.keyData.calorieCount} icon={proteinesIcon} name={'Proteines'} unit={'g'}/>
                            <KeyDataCard data={formatedUsersData.keyData.calorieCount} icon={glucidesIcon} name={'Glucides'} unit={'g'}/>
                            <KeyDataCard data={formatedUsersData.keyData.calorieCount} icon={lipidesIcon} name={'Lipides'} unit={'g'}/>
                        </div>    
                       
                        </div>
                                      
                    </div>
                 </div>
                  
                  
           
        );
    }
}
export default Home;