import React from "react";
import { useState } from "react";

import data from '../data.json'
import Cart from "./cart";




//function component uses:-

function Products() {
    let [allProduct, setallProduct] = useState(data.products);
    let [isCart, setisCart] = useState([]);
    let [isActive, setisActive] = useState("");

    function rangefilter(event) {
        let range = event.target.value
        console.log(range)

        if (range === "Highest to Lowest") {
            let HightoLow = data.products.sort((p, q) => q.price - p.price)
            console.log(HightoLow)
            //allProduct = HightoLow
             setallProduct(HightoLow)
        }

        if (range == "Lowest to Highest") {
            let LowtoHigh = data.products.sort((p, q) => p.price - q.price)
            console.log(LowtoHigh)
            setallProduct(LowtoHigh)
        }
    }


    function handlecart(event) {
        let id = event.target.id;
        let prodctlist = data.products.filter((a) => a.id == id)
        prodctlist[0].Qty = 1
        setisCart(isCart.concat(prodctlist))
    }


    function handlesize(event) {
        let size = event.target.innerText
        console.log(size)
        let filtersize = data.products.filter((fsize) => fsize.availableSizes.includes(size))
    
        setallProduct(filtersize)
        setisActive(size)
    }


    return (

        <main>
            <div className="cart">
                <Cart info={isCart} />
            </div>
            <div className="filter-btn">
                <div>
                    <div className="size-btns">
                        <div className="sizetitle">
                            <p>Sizes:</p>
                        </div>
                        {
                            ["S", "XS", "M", "X", "L", "XL", "XXL"].map((size) => {
                                return (
                                    <>
                                        <button onClick={handlesize} className={isActive == size ? "btnactive size-btn" : "size-btn"} >{size}</button>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="filterrange">
                        <p className="rangetitle">Order By:</p>
                        <select onChange={rangefilter} >
                            <option>Select</option>
                            <option value="Highest to Lowest">
                                Highest to Lowest
                            </option>
                            <option value="Lowest to Highest">
                                Lowest  to Highest
                            </option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="length">
                <p>{allProduct.length} Products find</p>
            </div>

            <div className="product">


                {

                    allProduct.map((product) => {

                        return (

                            <div className="products" id={product.id} >

                                <figure>
                                    <img src={'/static/products/' + `${product.sku}` + '_1.jpg'}></img>
                                </figure>

                                <p className="producttitle">{product.title}</p>
                                <p className="productprice">Price:{product.currencyFormat}{product.price}</p>
                                <button className="addcartbtn" id={product.id} onClick={handlecart}>Add To Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}












//class function component uses:-

// class Products extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = ({
//             products: data.products,
//             cart: true,
//             list: [],
//         })
//     }

//     handlesize = (event) => {
//         let size = event.target.innerText
//         let filtersize = data.products.filter((fsize) => fsize.availableSizes.includes(size))
//         this.setState({
//             products: filtersize,
//         })
//         console.log(filtersize)
//     }

//     handlecart = (event) => {
//         let id = event.target.id;
//         let prodctlist = data.products.filter((a) => a.id == id)
//         prodctlist[0].Qty = 1
//         this.setState({
//             list: this.state.list.concat(prodctlist)
//         })
//         // console.log(this.state.list)
//     }


//     handlerange = (event) => {
//         let range = event.target.value
//         let incorder = data.products.sort((a, b) => b.price - a.price)
//         let desorder = data.products.sort((a, b) => a.price - b.price)

//         if (range === "Highest to Lowest") {
//             this.setState(
//                 { products: data.products.sort((a, b) => b.price - a.price) }
//             )
//         }
//         if (range === "Lowest to Highest") {
//             this.setState({
//                 products: data.products.sort((a, b) => a.price - b.price)
//             })
//         }

//         console.log(range)
//     }


//     render() {
//         return (

//             <main>
//                 <div className="cart">
//                     <Cart info={this.state.list} />
//                 </div>
//                 <div className="filter-btn">
//                     <div>
//                         <div className="size-btns">
//                             <div className="sizetitle">
//                                 <p>Sizes:</p>
//                             </div>
//                             {
//                                 ["S", "XS", "M", "X", "L", "XL", "XXL"].map((size) => {
//                                     return (
//                                         <>
//                                             <button className="size-btn" onClick={(event) => { this.handlesize(event) }}>{size}</button>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </div>
//                         <div className="filterrange">
//                             <p className="rangetitle">Order By:</p>
//                             <select onChange={(event) => { this.handlerange(event) }}  >

//                                 <option>Select</option>
//                                 <option value="Highest to Lowest">
//                                     Highest to Lowest
//                                 </option>
//                                 <option value="Lowest to Highest">
//                                     Lowest  to Highest
//                                 </option>
//                             </select>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="length">
//                     <p>{this.state.products.length} Products find</p>
//                 </div>

//                 <div className="product">


//                     {

//                         this.state.products.map((product) => {

//                             return (

//                                 <div className="products" id={product.id} >

//                                     <figure>
//                                         <img src={'/static/products/' + `${product.sku}` + '_1.jpg'}></img>
//                                     </figure>

//                                     <p className="producttitle">{product.title}</p>
//                                     <p className="productprice">Price:{product.currencyFormat}{product.price}</p>
//                                     <button className="addcartbtn" id={product.id} onClick={(event) => { this.handlecart(event) }}>Add To Cart</button>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </main>
//         )
//     }
// }

export default Products;