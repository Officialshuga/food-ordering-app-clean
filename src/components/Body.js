import React, { useState, useEffect } from "react";
import RestaurantsCard from "./Restaurants/RestaurantsCard";
import ShimmerCard from "./Shimmer/ShimmerCard";
import useRestaurants from "../Hooks/useRestaurants";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);
  const {restaurants, loading} = useRestaurants();      //DESTRUCTURING


//FILTERING RESTAURANTS
  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.resName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const displayRestaurants = showTopRated
    ? filteredRestaurants.filter(
        (restaurant) => parseFloat(restaurant.rating) >= 4.5
      )
    : filteredRestaurants;

  const handleShowTopRated = () => {
    setShowTopRated(true);
  };

  const handleResetFilters = () => {
    setShowTopRated(false);
    searchQuery;
  };


  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Restaurants..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowTopRated(false); //Reset top-rated
          }}
        />
        <button onClick={handleShowTopRated}>Show Top Rated</button>
        <button onClick={handleResetFilters}>Reset</button>
      </div>


      {/* SHOW SHIMMER COMPONENT */}
      {loading ? (
        <div className="rest-cards">
          {Array(10).fill(null).map((_, index )=>{
            return <ShimmerCard key={index}/>
          })}
        </div>
      ) : (
      <div className="rest-cards">
        {displayRestaurants.map((restaurant) => {
          return (
            <RestaurantsCard
              id={restaurant.id}
              key={restaurant.id}
              resName={restaurant.resName}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              eta={restaurant.eta}
              image={restaurant.image}
            />
          );
        })}
      </div>
      )}
    </div>
  );
};

export default Body;
