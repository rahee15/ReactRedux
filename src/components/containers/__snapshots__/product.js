import React, { Component } from 'react'
import data from "../../../constants/product.json"
import {Card,Icon,Header,Button} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { storeProduct } from "../../../actions/productActions"


export class product extends Component {
    constructor(props) {
        super(props)
        this.state ={
            products : data.map(product=>product)
        }
    }
    render() {
        const productList=this.state.products.map((product,index)=>{
            console.log(product);
            return (
                
                <Card key={index} style={{"width":"100%"}}>
                     <Card.Content>
                     <Card.Header><div style={{"float":"left",width:"50%"}}>{product.title}</div><div style={{"float":"right"}}><Button positive onClick={()=>{this.props.storeProduct(product);this.props.history.push("/cart")}}>Add to cart</Button></div></Card.Header>
                     
                     <Card.Description>
                        {product.description}
                     </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        Price : {product.price} <Icon name="dollar"/>

                    </Card.Content>
                </Card>
            )
        })
        return (
            <div>
                <Header as="h1" textAlign="center">Products</Header>
                {productList}
            </div>
        )
    }
}

export default connect(null,{ storeProduct })(product);