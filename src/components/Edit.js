import React, { Component } from "react";

class Edit extends Component{
    state={
        form : { first_name:"",last_name:"",email:"",isEdit:false },
        btnName:"Update",
        btnClass:"ui primary button submit-button"
    };

    render(){
        return(
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field" >
                        <label>First Name</label>
                        <input type="text" name="firstname" placeholder="First Name"  />

                    </div>

                    <div className="four wide field" >
                        <label>Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name" />

                    </div>


                    <div className="four wide field" >
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"/>

                    </div>

                    <div className="four wide field" >
                    <button className={this.state.btnClass}>{this.state.btnName}</button>
                  
                    </div>



                </div>

            </form>
        );
    }
}

export default Edit;