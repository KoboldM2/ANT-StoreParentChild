import React, { Component } from 'react';
import './App.css';

import InputComponent from './components/InputComponent'
import ItemComponent from './components/ItemComponent'

export class Appcopy extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            addedItem: [],
            baseQuantity: 1,
            userInput: {
                itemFile: null,
                itemName: '',
                itemQty: 0,
                itemPrice: 0
            },
            totalQty: 0,
            totalPrice: 0
        }
        this.decrementQuantity = this.decrementQuantity.bind(this)
        this.incrementQuantity = this.incrementQuantity.bind(this)
        this.quantityInputHandler = this.quantityInputHandler.bind(this)
        this.addItemFunction = this.addItemFunction.bind(this)
        this.itemsFromChildHandler = this.itemsFromChildHandler.bind(this)
    }

//#region - Quantity Input Handlers & Functions 

    decrementQuantity = () => {
        this.setState(prevState => {
            if(prevState.baseQuantity > 1) {
              return {
                baseQuantity: prevState.baseQuantity - 1
              }
            } else {
              return null;
            }
          });
    }

    incrementQuantity = () => {
        this.setState(prevState => {
            if(prevState.baseQuantity < 99) {
              return {
                baseQuantity: prevState.baseQuantity + 1
              }
            } else {
              return null;
            }
          });
    }

    quantityInputHandler = (event, name) => {
        parseInt(event.target.value)
        var userInput = {...this.state.userInput}
        userInput.itemQty = event.target.value
        this.setState({
            [name]: event.target.value,
            userInput
        });
    }

//#endregion

    itemsFromChildHandler = (itemArray) => {
        this.setState({
            addedItem: itemArray
        })
    }

//#region - Add Item Value Handlers
    //Quantity Add Item Handler is in quantityInputHandler
    fileHandler = event => {
        var userInput = {...this.state.userInput}
        userInput.itemFile = URL.createObjectURL(event.target.files[0])
        this.setState({userInput})
    }

    nameHandler = event => {
        var userInput = {...this.state.userInput}
        userInput.itemName = event.target.value
        this.setState({userInput})
    }

    priceHandler = event => {
        var userInput = {...this.state.userInput}
        userInput.itemPrice = parseInt(event.target.value)
        this.setState({userInput})
    }

    addItemFunction = () => {
        var allInputs = this.state.userInput
        this.setState({
            addedItem: this.state.addedItem.concat(allInputs)
        })
    }
//#endregion

    render() {
        var tempStateAddedItem = this.state.addedItem
        var totalPriceQtyHandlers = tempStateAddedItem.map((item) =>
            <div key = {item.itemName}>
                <div className = "totalSubDiv">
                    Total Qty: {item.itemQty}
                </div>

                <div className = "totalSubDiv">
                    Total Price: {item.itemPrice}
                </div>
            </div>
        )

        return(
            <div className = "mainDiv">
                <div className = "addItemDiv">
                    <InputComponent
                        name = 'imageUpload'
                        inputType = 'file'
                        placeholder = 'Upload Image'
                        accept = 'image/*'
                        onChange = {this.fileHandler.bind(this)}
                    />

                    <InputComponent
                        name = 'itemName'
                        inputType = 'text'
                        placeholder = 'Item Name'
                        onChange = {this.nameHandler.bind(this)}
                    />

                    <div className = "subAddItemDiv">
                        <button onClick={this.decrementQuantity}>-</button>
                        <InputComponent
                            name = 'itemQty'
                            inputType = 'number'
                            placeholder = 'Qty'
                            onChange = {(event) => this.quantityInputHandler(event, 'baseQuantity')}
                            value = {this.state.baseQuantity}
                        />
                        <button onClick={this.incrementQuantity}>+</button>
                    </div>

                    <InputComponent
                        name = 'itemPrice'
                        inputType = 'number'
                        placeholder = 'Item Price'
                        onChange = {this.priceHandler.bind(this)}
                    />

                    <button
                    onClick = {this.addItemFunction}
                    >Add Item</button>
                </div>

                <div>
                    <ItemComponent
                        items = {this.state.addedItem}
                        dataHandler = {this.itemsFromChildHandler}
                    />       
                </div>

                <div>
                    {totalPriceQtyHandlers}
                </div>
            </div>
        )
    }
}

export default Appcopy