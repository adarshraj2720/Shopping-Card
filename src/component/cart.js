import React from "react";
import data from '../data.json'

class Cart extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            istrue: true,
            incdec:false

        })
    }


    handletrue = () => {
        this.setState({
            istrue: !this.state.istrue
        })
    }


    handleremove = () => {
        this.setState({
            istrue: !this.state.istrue
        })
    }

    handleInc = (event) => {
        let id = event.target.id;
        let singleProduct = data.products.filter((p) => p.id == id);
        singleProduct[0].Qty = singleProduct[0].Qty + 1;
        this.setState({
          incdec: true,
        });
      };
      handleDec = (event) => { 
        let id = event.target.id;
        let singleProduct = data.products.filter((p) => p.id == id);
        if(singleProduct[0].Qty>1){
        singleProduct[0].Qty = singleProduct[0].Qty - 1;
        }

        console.log(singleProduct[0].Qty);
        this.setState({
          incdec: true,
        });
      };
    

    render() {
        return (
            <>
                <div >
                    <figure>
                        <img className="bagicon" onClick={this.handletrue} src={'/static/bag-icon.png'} ></img>
                    </figure>
                    <small className="cartlength">{[... new Set(this.props.info)].length}</small>
                </div>

                {
                    this.state.istrue ? ""
                        :
                        <div className="cartcategory">
                            <div className="shoppingsummary">
                                <p className="summary">Shopping Summary</p>
                                <button onClick={this.handleremove}>❌</button>
                            </div>

                            {
                                [... new  Set(this.props.info)].map((a) => {
                                    return (
                                        <div className="cartlist">
                                        <img className="cartproductimg" src={'/static/products/' + `${a.sku}` + '_1.jpg'}></img>
                                            <p>{a.title}</p>
                                            {/* <p>Quantity:1</p> */}
                                            {
                                                this.state.incdec===true?
                                                <p>Quantity:{a.Qty}</p>:<p>Quantity:{a.Qty}</p>
                                            }
                                            <button id={a.id} onClick={this.handleInc}>+</button>
                                            <button id={a.id} onClick={this.handleDec}>-</button>
                                            <p>Price:{a.currencyFormat}{a.price}</p>
                                        
                                        </div>
                                    )
                                })
                            }
                            <div className="shoppingsummary">
                                <p className="summary">SubTotal: { [... new  Set(this.props.info)].reduce((acc, cv) => {
                                    acc = acc + cv.price *cv.Qty
                                    return acc;
                                }, 0)}</p>
                            </div>
                        </div>
                }
            </>
        )
    }

}

export default Cart