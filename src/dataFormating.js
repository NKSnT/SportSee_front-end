export default function FormatData(UsersData) {
    const baseData = UsersData[0];                    
                    const infoData = baseData.data.userInfos
                    const mainData = baseData.data.keyData;          
                    //check and make use of wich one between score/today score is present
                    const dayScoreData = baseData.data[
                        Object.keys(baseData.data).filter( propertyName => {                             
                                return propertyName.toLowerCase().includes('score')                                                               
                         })
                    ];  
                    const activityData =  UsersData[1].data.sessions                    
                    const averageSessionData = UsersData[2].data.sessions
                    const ActivityTypeData = UsersData[3].data                    

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
       // console.log(ActivityTypeData);      
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
