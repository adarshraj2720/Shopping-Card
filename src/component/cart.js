import React from "react";
import { useState } from "react";
// import data from '../data.json'



//function component uses:-




function Cart(props) {

    let [display, setdisplay] = useState(false)
    let [changeqty, setchangeqty] = useState(false)
    let [cart, setcart] = useState([])

    function handleclick() {
        setdisplay(true);
        setcart(props.info)
    }
    function handledelete() {
        setdisplay(false)
        setchangeqty(false)
    }
    function handleInc(event) {
        let id = event.target.id
        let singleProduct = props.info.filter((p) => p.id == id);
        singleProduct[0].Qty = singleProduct[0].Qty + 1;
        setchangeqty(true)
        setcart([...cart], singleProduct[0])
    }
    function handleDec(event) {
        let id = event.target.id;
        let singleProduct = props.info.filter((p) => p.id === id)
        if (singleProduct[0].Qty > 1) {
            singleProduct[0].Qty = singleProduct[0].Qty - 1;
        }
        setcart([...cart], singleProduct[0])
        setchangeqty(true)
    }
    function handlecheckout() {
       
        alert( [...new Set (cart)].reduce((acc,cv)=>{
            acc =  acc + cv.price * cv.Qty
            return acc
        },0))
    }


    return (
        <>
            {display === false ? (
                <div >
                    <figure>
                        <img className="bagicon" onClick={handleclick} src={'/static/bag-icon.png'} ></img>
                    </figure>
                    <small className="cartlength">{[... new Set(props.info)].length}</small>
                </div>

            ) : (
                <div className="cartcategory">
                    <div className="shoppingsummary">
                        <p className="summary">Shopping Summary</p>
                        <button onClick={handledelete}>❌</button>
                    </div>

                    {
                        [... new Set(cart)].map((a) => {
                            return (
                                <div className="cartlist">
                                    <img className="cartproductimg" src={'/static/products/' + `${a.sku}` + '_1.jpg'}></img>
                                    <p>Title: {a.title}</p>
                                    <p>Sizes: {a.availableSizes}</p>

                                    {
                                        changeqty === true ?
                                            <p>Quantity:{a.Qty}</p>
                                            :
                                            <p>Quantity:{a.Qty}</p>
                                    }
                                    <button id={a.id} onClick={handleInc}>+</button>
                                    <button id={a.id} onClick={handleDec}>-</button>
                                    <p>Price:{a.currencyFormat}{a.price}</p>

                                </div>
                            )
                        })}

                    <div className="shoppingsummary">
                        <p className="summary">SubTotal: {[... new Set(props.info)].reduce((acc, cv) => {
                            acc = acc + cv.price * cv.Qty
                            return acc;
                        }, 0)}</p>
                        <button onClick={handlecheckout} >

                            
                            Checkout</button>
                    </div>
                </div>
            )}
        </>
    )











}






//class component uses:-

// class Cart extends React.Component {
//     constructor(props) {
//         super()
//         this.state = ({
//             istrue: true,
//             incdec:false

//         })
//     }


//     handletrue = () => {
//         this.setState({
//             istrue: !this.state.istrue
//         })
//     }


//     handleremove = () => {
//         this.setState({
//             istrue: !this.state.istrue
//         })
//     }

//     handleInc = (event) => {
//         let id = event.target.id;
//         let singleProduct = data.products.filter((p) => p.id == id);
//         singleProduct[0].Qty = singleProduct[0].Qty + 1;
//         this.setState({
//           incdec: true,
//         });
//       };
//       handleDec = (event) => { 
//         let id = event.target.id;
//         let singleProduct = data.products.filter((p) => p.id == id);
//         if(singleProduct[0].Qty>1){
//         singleProduct[0].Qty = singleProduct[0].Qty - 1;
//         }

//         console.log(singleProduct[0].Qty);
//         this.setState({
//           incdec: true,
//         });
//       };


//     render() {
//         return (
//             <>
//                 <div >
//                     <figure>
//                         <img className="bagicon" onClick={this.handletrue} src={'/static/bag-icon.png'} ></img>
//                     </figure>
//                     <small className="cartlength">{[... new Set(this.props.info)].length}</small>
//                 </div>

//                 {
//                     this.state.istrue ? ""
//                         :
//                         <div className="cartcategory">
//                             <div className="shoppingsummary">
//                                 <p className="summary">Shopping Summary</p>
//                                 <button onClick={this.handleremove}>❌</button>
//                             </div>

//                             {
//                                 [... new  Set(this.props.info)].map((a) => {
//                                     return (
//                                         <div className="cartlist">
//                                         <img className="cartproductimg" src={'/static/products/' + `${a.sku}` + '_1.jpg'}></img>
//                                             <p>{a.title}</p>
//                                             {/* <p>Quantity:1</p> */}
//                                             {
//                                                 this.state.incdec===true?
//                                                 <p>Quantity:{a.Qty}</p>:<p>Quantity:{a.Qty}</p>
//                                             }
//                                             <button id={a.id} onClick={this.handleInc}>+</button>
//                                             <button id={a.id} onClick={this.handleDec}>-</button>
//                                             <p>Price:{a.currencyFormat}{a.price}</p>

//                                         </div>
//                                     )
//                                 })
//                             }
//                             <div className="shoppingsummary">
//                                 <p className="summary">SubTotal: { [... new  Set(this.props.info)].reduce((acc, cv) => {
//                                     acc = acc + cv.price *cv.Qty
//                                     return acc;
//                                 }, 0)}</p>
//                             </div>
//                         </div>
//                 }
//             </>
//         )
//     }

// }

export default Cart