
function CardComponent({ coffeeData = [] }) {
  
    return (

            <div className="card-div">
                {coffeeData.map((coffee, idx) => (
                    <div key={idx}>
                       <div className='card-image'>
                         {coffee.popular && <span className='popular'>Popular</span>} 
                        <img src={coffee.image} alt={coffee.name} />
                         </div>
                        
                        <div className='card-content'>
                        <h2 className='label'>{coffee.name} </h2>
                        <p className='price'>{coffee.price}</p>
                        <p><img className="star" src={coffee.rating  ? "/img/Star_fill.svg" : "/img/Star.svg"} alt="star" />{coffee.rating ? coffee.rating : "No Rating"} {coffee.votes ? `(${coffee.votes} votes)` : ""}</p>
                        <p style={{color:"#ED735D"}}>  {!coffee.available ? "Sold out" : ""}</p>
                        
                        </div>
                      
                    </div>
                ))}
            </div>
    );
}

export default CardComponent
