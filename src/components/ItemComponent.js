import React, {Component} from 'react'
import InputComponent from './InputComponent'

import './itemCompcss.css'

export class ItemComponent extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            acceptedFile: null,
            acceptedName: '',
            acceptedQuantity: 0,
            acceptedPrice: 0,
            itemsStateHolder: []
        }

        this.testFunction = this.testFunction.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.arrayStateHandler = this.arrayStateHandler.bind(this)
        this.updateQuantityHandler = this.updateQuantityHandler.bind(this)
        this.updatePriceHandler = this.updatePriceHandler.bind(this)
    }

    arrayStateHandler = (item) => {
        var tempVar = item
        this.setState({
            itemsStateHolder: tempVar
        })
        //console.log(acceptedItemArray[index])
    }

    updateQuantityHandler = (event, item) => {
        parseInt(event.target.value)
        parseInt(item.itemQty)
        item.itemQty = event.target.value
    }

    updatePriceHandler = (event, item) => {
        parseInt(event.target.value)
        parseInt(item.itemPrice)
        item.itemPrice = event.target.value
    }

    deleteItem = (acceptedItemArray,index) => {
        acceptedItemArray.splice(index)
        console.log(acceptedItemArray)
    }

    testFunction = item => {
        /* console.log("this is passed qty: " + item.itemQty)
        item.itemQty = item.itemQty + 1000
        console.log("this is the new qty: " + item.itemQty) 
        this works!!! itemqty does change
        */
    }

    render() {
        var acceptedItemArray = this.props.items
        const mappedItems = acceptedItemArray.map((item, index) =>
            <div key = {index} 
            className = "individualItem" 
            onChange={() => this.arrayStateHandler(item)}
            >
                <div className = "subItemElements">
                    <img src = {item.itemFile} alt="alt" height="100px" width="100px"/>
                </div>

                <div className = "subItemElements">
                    Name: {item.itemName}
                </div>

                <div className = "subItemElements">
                    Quantity:
                    {/* {item.itemQty} */}
                    <InputComponent
                        name = 'itemQty'
                        inputType = 'number'
                        placeholder = 'Qty'
                        value = {item.itemQty}
                        onChange = {(event) => this.updateQuantityHandler(event, item)}
                    />
                </div>

                <div className = "subItemElements">
                    Price: 
                    <InputComponent
                        name = 'itemPrice'
                        inputType = 'number'
                        placeholder = 'Price'
                        value = {item.itemPrice}
                        onChange = {(event) => this.updatePriceHandler(event, item)}
                    />
                </div>

                <div className = "subItemElements" 
                onClick = {() => this.deleteItem(acceptedItemArray,index)}
                >
                    <u>Delete</u>
                </div>
            </div>
        )

        return( 
            <div>
                {mappedItems}
            </div>
        )
    }
}

export default ItemComponent