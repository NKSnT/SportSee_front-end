import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

import FormatData from 'dataFormating'

import './Home.css';



function Home() {
    const params = useParams()

    const [isDataLoading, setDataLoading] = useState(true);
    const [isDataFormated, setDataFormated] = useState(false);
    const [error, setError] = useState(false);
    const [formatedUsersData, setFormatedUsersData] = useState([]);

    //let UserData2 = undefined
    
    useEffect(() => {
        async function fetchUsersData() {   
            let UserData = []         
            try {              
            const response1 =  await fetch(`http://localhost:3000/user/${params.id}`)
            const UserData1  = await response1.json(); 
            const response2 =  await fetch(`http://localhost:3000/user/${params.id}/activity`)
            const UserData2 =    await response2.json() 
            const response3 =  await fetch(`http://localhost:3000/user/${params.id}/average-sessions`)
            const UserData3 =    await response3.json() 
            const response4 =  await fetch(`http://localhost:3000/user/${params.id}/performance`)
            const UserData4 =    await response4.json() 
            //console.log("Téléchargement terminé", response);
            if (!response1.ok) {
                // make the promise be rejected if we didn't get a 2xx response             
                throw new Error(response1.status + ", unexpected user id");
            }          
             UserData = [UserData1,UserData2,UserData3,UserData4]                 
            } catch (err) {                
                console.log('EXCEPTION: ', err);                
                setError(true);               
            } finally{
                setFormatedUsersData({                                   
                    userInfos: FormatData(UserData).userInfoDataFormat(),                    
                    keyData: FormatData(UserData).mainDataFormat(),
                    todayScore: FormatData(UserData).dayScoreFormat(),
                    activity : FormatData(UserData).activityFormat(),
                    userAvgSession : FormatData(UserData).userAvgSessionFormat(),
                    performance: FormatData(UserData).activityTypeFormat()
                    //...
                });     
                setDataFormated(true);
                setDataLoading(false);   
            }
        } 
        fetchUsersData()  
    }, [params.id]);

      /*  useEffect(()=>{   
        console.log('is data formated : '+ isDataFormated)   
        if(isDataFormated){
            console.log('formatedUsersData : ');  
            console.log(formatedUsersData);
        }               
    },[isDataFormated, formatedUsersData]) */

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
                        <div className="chart_1">
                        <ActivityChart
                            data={formatedUsersData.activity}
                            x_axis={'day'}
                            y_axis={''}
                            data1={'kilogram'}
                            data2={'calories'}
                        />
                    </div>
                    {/* <div className='test'> */}
                    <div className="chart_2">
                        <AverageSessionsChart
                            data={formatedUsersData.userAvgSession}
                            x_axis={'day'}
                            y_axis={'sessionLength'}
                            data1={'sessionLength'}
                        />
                        <div className="chart_2_backgound"></div>
                    </div>
                    <div className="chart_3">
                        <ActivityTypeChart
                            data={formatedUsersData.performance}
                            data1={'value'}
                            axis1={'kind'}
                        />
                    </div> 
                            <div className="chart_4">
                                <TodayScoreChart data={formatedUsersData.todayScore} axis1={'todayScore'} />
                            </div>                                               
                        </div>
                    <div className='keyInfo_container'>                                     
                            <KeyDataCard data={formatedUsersData.keyData.calorieCount} icon={caloriesIcon} name={'Calories'} unit={'KCal'}/>
                            <KeyDataCard data={formatedUsersData.keyData.proteinCount} icon={proteinesIcon} name={'Proteines'} unit={'g'}/>
                            <KeyDataCard data={formatedUsersData.keyData.carbohydrateCount} icon={glucidesIcon} name={'Glucides'} unit={'g'}/>
                            <KeyDataCard data={formatedUsersData.keyData.lipidCount} icon={lipidesIcon} name={'Lipides'} unit={'g'}/>
                        </div>    
                       
                        </div>
                                      
                    </div>
                 </div>              
        );
    }
}
export default Home;