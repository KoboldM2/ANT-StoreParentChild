import React, { Component } from 'react';
import './App.css';

import InputComponent from './components/InputComponent'
import ItemComponent from './components/ItemComponent'

export class App extends Component {        
    constructor(props) {
		super(props)
        this.state = {
			itemIsActive: false,
			items: [],
			userInput: {
				itemFile: null,
				itemName: '',
				itemQty: 0,
				itemPrice: 0
			},
			totalQty: 0,
			totalPrice: 0,
		}		
		this.childQuantityHandler = this.childQuantityHandler.bind(this)
		this.childPriceHandler = this.childPriceHandler.bind(this)
	}

//#region - Order Handlers
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

	quantityHandler = event => {
		var userInput = {...this.state.userInput}
		userInput.itemQty = parseInt(event.target.value)
		this.setState({userInput})
	}

	priceHandler = event => {
		var userInput = {...this.state.userInput}
		userInput.itemPrice = parseInt(event.target.value)
		this.setState({userInput})
	}
//#endregion

//#region - Child Handlers
	childQuantityHandler() {
		
	}

	childPriceHandler() {

	}

//#endregion

	submitOrder() {
		const userInputObject = this.state.userInput
		this.setState({
			items: this.state.items.concat(userInputObject)
		})
	}

    render() {
        return( 
            <div>
                <div>
					<form type ="post">
					{/* Order Bar */}
						<InputComponent
							name = 'imageUpload'
							inputType = 'file'
							placeholder = 'Upload Image'
							accept = 'image/*'
							onChange = {this.fileHandler.bind(this)}
						/>

						<InputComponent
							name = 'orderName'
							inputType = 'text'
							placeholder = 'Name'
							inputSize = "15"
							onChange = {this.nameHandler.bind(this)}
						/>

						<InputComponent
							name = 'orderQty'
							inputType = 'number'
							placeholder = 'Qty'
							inputMin = '1'
							inputMax = '99'
							onChange = {this.quantityHandler.bind(this)}
						/>

						<InputComponent
							name = 'orderPrice'
							inputType = 'number'
							placeholder = 'Price'
							inputMin = '0'
							inputMax = '999999'
							onChange = {this.priceHandler.bind(this)}
						/>

						<button
							type = "button"
							onClick = {this.submitOrder.bind(this)}
						>
						Enter
						</button>
					</form>
				</div>
				
					<ItemComponent
						items = {this.state.items}
						itemIsActive = {this.state.itemIsActive}
						qtyChildHandler = {this.childQuantityHandler.bind(this)}
						priceChildHandler = {this.childPriceHandler.bind(this)}
					/>
				
				<br/>

				<div>
					<div>
						Total Quantity: {this.state.totalQty}
					</div>

					<div>
						Total Price: {this.state.totalPrice}
					</div>
				</div>

            </div>
        )
    }
}

export default App