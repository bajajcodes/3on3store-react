import {Card} from "components";

function CardContainer({products}){
    return(
        <div className="cards-container">
                {
                    products && products.map((product, index) => <Card product={product} key={index} productInWishlist={true}/>)
                }
        </div>
    )
}

export {CardContainer};