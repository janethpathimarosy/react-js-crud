import React, { Component } from "react";

class MyForm extends Component{
    state={
        form : { first_name:"",last_name:"",email:"",isEdit:false },
        btnName:"Save",
        btnClass:"ui primary button submit-button"
    };
 
// isEmpty(obj){
//     return Object.entries(obj).length === 0 && obj.constructor === Object; && !this.isEmpty(this.props.customer)
// }value={this.state.form_first_name}
//     componentDidUpdate(prevProps){
//         if(prevProps !== this.props){
//             this.setState({
//                 form:{...this.props.customer,isEdit:true},
//                 btnName:"Update",
//                 btnClass:"ui orange button submit-button"

//             });
//             console.log(this.props.customer);
      
//         }
//     }
 
//     handleChange = event =>{
//         const { name,value }=event.target;
//         let form=this.state.form;
//         form[name]=value;
//         this.setState({ form });
//         console.log('updat4e');
//     };
    render(){
        return(
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field" >
                        <label>First Name</label>
                        <input type="text" name="firstname" placeholder="First Name" value={this.state.form_first_name} />

                    </div>

                    <div className="four wide field" >
                        <label>Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name" value={this.state.form_last_name} />

                    </div>


                    <div className="four wide field" >
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.form_email}/>

                    </div>

                    <div className="four wide field" >
                    <button className={this.state.btnClass}>{this.state.btnName}</button>
                  
                    </div>



                </div>

            </form>
        );
    }
}

export default MyForm;