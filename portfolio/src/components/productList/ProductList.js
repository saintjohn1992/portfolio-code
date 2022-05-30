import "./productlist.css"
import Product from "../product/Product";
import {Products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> My Projects</h1>
                <p className="pl-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
            <div className="pl-list">
                {Products.map((item) => (
                     <Product key={item.id} img={item.img} link={item.link} />
                ))}
               
            </div>
        </div>
    )
}

export default ProductList;