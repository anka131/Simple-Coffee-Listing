import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";


function AppLayout() {
      const [coffeeData, setCoffeeData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [activeTab, setActiveTab] = useState("all");

    useEffect(() => {
        const fetchCoffee = async () => {
            try{
                const res = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");
                if(!res.ok) throw new Error("Network response was not ok");
                const data = await res.json();
                setCoffeeData(data);
                setOriginalData(data);
                console.log(data);
                
            }catch{
                console.log("Error fetching coffee");
            }
        };
        fetchCoffee();
    }, []);
const handleAllProducts = function() {
    setCoffeeData(originalData);
};
const handleAvailableProducts = function() {
    setCoffeeData(originalData.filter(item => item.available === true));
};
    return (
        <div className="main">
              <img src="/img/vector.svg" alt="" className="swirl"/>
            <div className='container'>
            <h1>Our Collection</h1>
            <p className='desc'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            

              <div className='button-div'>
                <button onClick={()=> {
                handleAllProducts();
                setActiveTab("all");
                } } className={activeTab === "all" ? "tab-button active" : "tab-button"}>All Products</button>
                <button onClick={()=> {
                handleAvailableProducts();
                setActiveTab("available");
            }} className={activeTab === "available" ? "tab-button active" : "tab-button"}>Available Now</button>
            </div>
            <CardComponent coffeeData={coffeeData} />
</div>          
           
        </div>

    )
}

export default AppLayout
