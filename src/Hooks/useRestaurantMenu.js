import { useEffect, useState } from "react";

const useRestaurantMenu = (id) =>{
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchMenu = async () =>{
            try {
                const response = await fetch(`https://food-ordering-app-api-03wk.onrender.com/restaurants/${id}`);
                const data = await response.json();
                console.log(data);
                setRestaurant(data);
            } catch (error) {
                console.error("Error Fetching Menus:", error);
                setLoading(false);
            }finally{
                setLoading(false);
            }
        };
        fetchMenu();
    }, [id]);

    return {restaurant, loading};
};

export default useRestaurantMenu;