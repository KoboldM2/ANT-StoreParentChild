import React, {Component} from 'react'
import InputComponent from './InputComponent'

export class ItemComponent extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            currentTotalPrice: 0,
            currentTotalQty: 0,
            itemQuantity: 0,
            itemPrice: 0,
            itemIsActive: false,
        }
    }

    quantityValueHandler = event => {
        /* setState that currentTotalQty + itemQuantity maybe then return new state*/
        
    }

    priceValueHandler = event => {
        
    }

    itemShowDetails() {
        if(this.state.itemIsActive === false) {
            this.setState({
                itemIsActive: true
            })
        }
    }

    itemCollapseBack() {
        this.setState({
            itemIsActive: false
        })
    }

    removeItem() {
        
    }

    render() {
        const itemsArray = this.props.items
        const activeCheck = this.state.itemIsActive
        const itemsArrayToMap = itemsArray.map((item, index) => 
            <div key = {item.itemName} onClick={this.itemShowDetails.bind(this)} onChange={this.itemStateHandler.bind(this)}>
                <img src = {item.itemFile} alt ="alt img" height="100px" width="100px"/>

                Name: {item.itemName}

                Quantity: {item.itemQty}

                Price: {item.itemPrice}

                {/* inline ifelse: if true: do this, else:  */}
                { activeCheck ? (
                    <div>
                        <div>
                            Change Quantity: 
                                <InputComponent
                                    name = 'orderQty'
                                    inputType = 'number'
                                    placeholder = 'Qty'
                                    inputMin = '1'
                                    inputMax = '99'
                                    onChange = {this.quantityValueHandler}
                                    value = {this.state.itemQuantity}
                                />
                        </div>

                        <div>
                            Change Price: 
                            <InputComponent
                                name = 'orderQty'
                                inputType = 'number'
                                placeholder = 'Qty'
                                inputMin = '1'
                                inputMax = '99'
                                onChange = {this.priceValueHandler}
                                value = {this.state.itemPrice}
                            />
                        </div>
                        
                        <div onClick = {this.childRemoveItem}>
                            {/* delete item */}
                            <u style={{color: "blue"}}>delete</u>
                        </div>

                        <div onClick={this.itemCollapseBack.bind(this)}>
                            <u style={{color: "blue"}}>close</u>
                        </div>
                    </div>
                    ) : (
                        ''
                    )
                }
            </div>
        )

        return( 
            <div>
                {itemsArrayToMap}
            </div>
        )
    }
}

export default ItemComponent