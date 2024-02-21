export default async function FetchData(id){
    let UserData = []          
    try {              
        const response1 =  await fetch(`http://localhost:3000/user/${id}`)
        const UserData1  = await response1.json(); 
        const response2 =  await fetch(`http://localhost:3000/user/${id}/activity`)
        const UserData2 =    await response2.json() 
        const response3 =  await fetch(`http://localhost:3000/user/${id}/average-sessions`)
        const UserData3 =    await response3.json() 
        const response4 =  await fetch(`http://localhost:3000/user/${id}/performance`)
        const UserData4 =    await response4.json() 
        //console.log("Téléchargement terminé", response);
        if (!response1.ok) {
            // make the promise be rejected if we didn't get a 2xx response             
            throw new Error(response1.status + ", unexpected user id");
        }
        UserData = [UserData1,UserData2,UserData3,UserData4]   
        console.log(UserData)      
    } catch (err) {             
        throw new Error(err);  
        //return err              
        //setError(true);               
    } 
    finally{
        return  UserData
    }
}