import React, { Component } from "react";

class MyFormEdit extends Component{
    state={
        form : { first_name:"",last_name:"",email:"",isEdit:false },
        btnName:"Save",
        btnClass:"ui primary button submit-button"
    };
 
 isEmpty(obj){
     return Object.entries(obj).length === 0 && obj.constructor === Object;
 }
//value={this.state.form_first_name}
     componentDidUpdate(prevProps){
         if(prevProps !== this.props  && !this.isEmpty(this.props.customer)){
          
            this.setState({
                form:{...this.props.customer,isEdit:true},
                btnName:"Update",
                btnClass:"ui orange button submit-button"

            });
      
         }
     }
 
    handleChange = event =>{
        const { name,value }=event.target;
        let form=this.state.form;
        form[name]=value;
        this.setState({ form });
        console.log('updat4e');
    };

    onFormSubmitit=event=>{
        //prevent form submit
        event.preventDefault();

        //form validation
        if(this.formvalidation()){
            //console.log('ready to insert');
            this.props.onFormSubmitit(this.state.form);
        }
        //this function is for clear the data
        this.clearFormfield();
    };
formvalidation= () =>{
if(document.getElementsByName('first_name')[0].value===''){
    alert('Enter First Name');
    return false;
}
if(document.getElementsByName('last_name')[0].value===''){
    alert('Enter Last Name');
    return false;
}

if(document.getElementsByName('email')[0].value===''){
    alert('Enter Email');
    return false;
}

return true;
}

clearFormfield=()=>{
    //change form state
    this.setState({
        form : { first_name:"",last_name:"",email:"",isEdit:false }
    });

    //change the button
        this.setState({
            btnName:"Save",
            btnClass:"ui primary button submit-button"
        });

    
    //clear form data
    document.querySelector(".form").reset();
    console.log('data cleared');
};

    render(){
        return(
            <form className="ui form">
            <div className="fields">
                <div className="four wide field" >
                    <label>First Name</label>
                    <input type="text" name="first_name" placeholder="First Name" onChange={this.handleChange} value={this.state.form.first_name} />

                </div>

                <div className="four wide field" >
                    <label>Last Name</label>
                    <input type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange} value={this.state.form.last_name} />

                </div>


                <div className="four wide field" >
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.form.email}/>

                </div>

                <div className="four wide field" >
                <button className={this.state.btnClass} onClick={this.onFormSubmitit}>{this.state.btnName} </button>
              
                </div>



            </div>

        </form>
        );
    }
}

export default MyFormEdit;