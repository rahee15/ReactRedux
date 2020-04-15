import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Segment,Header,Form,Icon,Input } from 'semantic-ui-react';

export class cart extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            qty:1
        }
    }
    
    render() {
        return (
            <div style={{"height":"60%"}}>
                <Header as="h2" textAlign="center">Cart</Header>
                <Segment raised>
                    <Form>
                        <div style={{"margin-top":"2%"}}>
                        <label style={{"font-weight":"bold"}}>Product Name:</label>
                        {this.props.product.title}
                        </div>
                        <div style={{"margin-top":"2%"}}>
                        <label style={{"font-weight":"bold"}}>Product Type:</label>
                        {this.props.product.type}
                        </div>
                        <div style={{"margin-top":"2%"}}>
                        <label style={{"font-weight":"bold"}}>Description:</label>
                        {this.props.product.description}
                        </div>
                        <div style={{"margin-top":"2%"}}>
                        <label style={{"font-weight":"bold"}}>Product price:</label>
                        {this.props.product.price}
                        <Icon name="dollar"/>
                        </div>
                        <div style={{"margin-top":"2%"}}>
                        <label style={{"font-weight":"bold"}}>Enter Quantity:</label>
                        <Input style={{"width":"20%","height":"40%"}} id="qty" placeholder="1" value={this.state.qty} onChange={(e)=>{e.target.value>-1?this.setState({qty:e.target.value}):alert("Quantity can not be negative")}} type="text"/>
                        <Icon name="dollar"/>
                        </div>
                        <div style={{"margin-top":"3%"}}>
                            <Header textAlign="center" as="h3">Final Bill</Header>
                            <div style={{"margin-top":"2%"}}>
                        <label style={{"font-weight":"bold"}}>Final price:</label>
                        {this.props.product.price*this.state.qty}
                        <Icon name="dollar"/>
                        </div>    
                        </div>
                    </Form>
                    
                
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product:state.product.product
});

export default connect(mapStateToProps,null)(cart);
//export default connect(null,{ storeProduct })(product);