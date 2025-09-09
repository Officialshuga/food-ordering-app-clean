import { useState, useEffect } from "react";

const useRestaurants = () =>{
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    //Fetching the data and storing in state
    const fetchData = async()=>{
        try{
            // const response = await fetch('http://localhost:3001/restaurants');
            const response = await fetch('https://food-ordering-app-api-03wk.onrender.com/restaurants');
            const data = await response.json();
            console.log(data);
            setRestaurants(data);
            setLoading(false);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        console.log('Fetching Restaurants Data...');
        fetchData();
    },[]);

    return { restaurants, loading}; //Return State Variables
   
};

export default useRestaurants;