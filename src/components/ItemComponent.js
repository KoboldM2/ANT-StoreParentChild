import React, {Component} from 'react'
import InputComponent from './InputComponent'

import './itemCompcss.css'

export class ItemComponent extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            acceptedFile: null,
            acceptedName: '',
            itemsStateHolder: [],
			tempArrayHolder: [],
			testArray: this.props.items
		}
        this.deleteItem = this.deleteItem.bind(this)
        this.arrayStateHandler = this.arrayStateHandler.bind(this)
        this.updateQuantityHandler = this.updateQuantityHandler.bind(this)
        this.updatePriceHandler = this.updatePriceHandler.bind(this)
	}

    arrayStateHandler = (item, acceptedItemArray) => {
		const arrayHolder = acceptedItemArray
        const tempVar = item
        this.props.dataHandler(arrayHolder)
        this.setState({
            itemsStateHolder: tempVar,
            tempArrayHolder: arrayHolder
		})
		return acceptedItemArray = this.state.tempArrayHolder
    }

//#region - Qty/Price Handler
    updateQuantityHandler = (event, item) => {
        item.itemQty = event.target.value
        parseInt(item.itemQty)
    }

    updatePriceHandler = (event, item) => {
        item.itemPrice = event.target.value
        parseInt(item.itemPrice)
    }


//#endregion

    deleteItem = (index, acceptedItemArray) => {
		const selectedDeleteItem = acceptedItemArray[index]
		const deleteItem = acceptedItemArray.filter(item => {
			return item !== selectedDeleteItem
		})
		console.log(deleteItem)
		this.arrayStateHandler()
    }

    render() {
		const acceptedItemArray = this.props.items
        const mappedItems = acceptedItemArray.map((item, index) =>
            <div key = {index} 
            className = "individualItem" 
            onChange={() => this.arrayStateHandler(item, acceptedItemArray)}
            >
                <div className = "subItemElements">
                    <img src = {item.itemFile} alt="alt" height="100px" width="100px"/>
                </div>

                <div className = "subItemElements">
                    Name: {item.itemName}
                </div>

                <div className = "subItemElements">
                    Quantity:
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
                onClick = {() => this.deleteItem(index, acceptedItemArray)}
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