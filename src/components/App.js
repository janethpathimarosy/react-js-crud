import React, { Component } from "react";
import axios from "axios";

import MyFormEdit from "./MyFormEdit";

import CustomerList from "./CustomerList";
import "./app.css";
import Loader from "./Loader";

class App extends Component {
    
    state={
            customers: [],
            customer:{},
            loader:false,
            url:"http://localhost/laravel-rest-api/public/api/customers"
    };

    getCustomers =async () =>{
        this.setState({ loader: true});
        const customers=await axios.get(this.state.url);
        this.setState({ customers: customers.data,loader:false });

    };
    componentDidMount(){
        this.getCustomers();
    }
 deleteCustomer=async id=>{
     this.setState({loader: true });
    console.log(this.state.url);
     await axios.delete(`http://localhost/laravel-rest-api/public/api/customers/${id}`);
     this.getCustomers();
 };
    onDelete=id=>{
        console.log('app.js file la iruku ',id);
        this.deleteCustomer(id);
    };


    onEdit=data=>{
        console.log('app.js file la iruku ',data);
     //   this.editCustomer(data);
     this.setState({ customer:data});
     var action='edit';
     console.log(action);
    };

    onFormSubmitit = data=>{
if(data.isEdit){
//if it is true
this.editCustomer(data);
}else{
//if it is false
this.createCustomer(data);
}
}

createCustomer = async (data) =>{
    this.setState({loader : true});
    await axios.post(this.state.url,{
        first_name : data.first_name,
        last_name : data.last_name,
        email : data.email
        });

        this.getCustomers();
};
editCustomer = async (data) =>{
this.setState({loader :true});
await axios.put(`${this.state.url}/${data.id}`,{
first_name:data.first_name,
last_name:data.last_name,
email:data.email
});
this.getCustomers();
};

    render(){
        return(
            <div>
                <div className="ui fixed inverted menu">

                        <div className="ui container">
                            <a href="/#" className="header item">
                                React Js Crud with laravel api
                            </a>

                        </div>
                </div>
                <div className="ui main container">
                 
                    
                        <MyFormEdit customer={this.state.customer} onFormSubmitit={this.onFormSubmitit}/>
                        
{this.state.Loader ? <Loader /> : ""}
                        <CustomerList customers={this.state.customers} onDelete={this.onDelete}   onEdit={this.onEdit} />

                </div>
            </div>

        );
    }

}
export default App;
