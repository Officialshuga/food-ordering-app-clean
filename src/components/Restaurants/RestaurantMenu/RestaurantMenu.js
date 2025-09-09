import { Link, useParams } from "react-router-dom"
import Header from "../../Header"
import "./RestaurantMenu.css";
import useRestaurantMenu from "../../../Hooks/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Slice/cartSlice";
import { store } from "../../../store/store";
import { toast, ToastContainer } from "react-toastify";


const RestaurantMenu = () =>{
    const {id} = useParams();               //This is Restaurant Id
    const {restaurant, loading} = useRestaurantMenu(id);
    const dispatch = useDispatch();         //initialize redux dispatch



   
    //show the loading
    if(loading || !restaurant){ //Ensures Restuarant is not null
        return <div className="loading">Loading Menus...</div>
    }


    //handle adding items to cart
    const handleAddToCart=(item)=>{
        console.log("Adding to cart", item);
        dispatch(addToCart(item));
        toast.success(`${item.name} has been Added Successfully`, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            theme: " colored",
            progress: undefined
        })

        //log redux state after dispatch
        setTimeout(()=>{
            console.log("redux state after dispatch:", store.getState().cart.items);
        }, 500)
    };


    return (
        <div className="menu-container">
            {/* Header */}
            {/* <Header/> */}
            <ToastContainer/>
            {/* Back Button Link */}
            <Link to="/" className="back-button-top">⬅ Back to Home</Link>

            <div className="menu-page">
                <div className="restaurant-header">
                    <h1>{restaurant.resName}</h1>
                    <p>🕒 {restaurant.eta} | ⭐ {restaurant.rating}</p>
                </div>
                <div className="menu-list">
                    {restaurant.menu.map((item)=>(
                    <div key={item.id} className="menu-item">
                        <div className="menu-info">
                            <h2>{item.name}</h2>
                            <p>£{item.price}</p>
                            <p>⭐{item.rating}</p>
                            <p className="menu-desc">{item.description}</p>
                        </div>
                    
                    <div className="menu-image">
                        <img src={item.image} alt={item.name}/>
                        <button className="add-button" onClick={()=>handleAddToCart(item)}>ADD</button>
                    </div>
                </div>
                ))}
            </div>            
        </div>
        {/* Back Button Link */}
        <Link to="/" className="back-button-bottom">⬅ Back to Home</Link>
    </div>
    )
}

export default RestaurantMenu;