import React, {Component} from 'react'
import InputComponent from './InputComponent'

import './itemCompcss.css'

export class ItemComponent extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            itemComponentActive: this.props.itemIsActive,
            itemQuantity: 0,
            itemPrice: 0,
        }
        this.stateHandlingForQuantity = this.stateHandlingForQuantity.bind(this)
    }

//#region - Collapse Div Functions
    itemShowDetails() {
        if(this.state.itemComponentActive === false) {
            this.setState({
                itemComponentActive: true
            })
        }
    }
    
    itemCollapseBack() {
        this.setState({
            itemComponentActive: false
        })
    }
//#endregion

    stateHandlingForQuantity(value){
        this.setState({
            itemQuantity: value
        })
    }

    stateHandlingForPrice(value){
        this.setState({
            itemPrice: value
        })
    }

    render() {
        const activeCheck = this.state.itemComponentActive
        const itemsArray = this.props.items
        const itemsArrayToMap = itemsArray.map((item, index) =>
            <div 
            key = {item.itemName}
            >
                <div 
                onClick = {this.itemShowDetails.bind(this)} 
                className="individualItem"
                >
                    <div>
                        <img src = {item.itemFile} alt ="alt img" height="100px" width="100px"/>
                    </div>
                    
                    <div>
                        Name: {item.itemName}
                    </div>

                    <div>
                        Quantity: 
                            <InputComponent
                                name = 'orderQty'
                                inputType = 'number'
                                placeholder = 'Qty'
                                inputMin = '1'
                                inputMax = '99'
                                value = {this.state.itemQuantity}
                                onChange = {e => this.stateHandlingForQuantity(e.target.value)}
                            />
                    </div>

                    <div>
                        Price: 
                        <InputComponent
                            name = 'orderPrice'
                            inputType = 'number'
                            placeholder = 'Price'
                            inputMin = '0'
                            inputMax = '999999'
                            value = {this.state.itemPrice}
                            onChange = {e => this.stateHandlingForPrice(e.target.value)}
                        />
                    </div>

                    {/* inline ifelse: if true: do this, else:  */}
                    { activeCheck ? (
                        <div>
                            <div>
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