import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";

const ContactFormReview = ({ onCancel, formValues, saveContact, history }) => {
    const reviewFields = formFields.map(({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <div style={{marginTop: '15px'}}>
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
                <i className="material-icons right">arrow_back</i>
            </button>
            <button 
                onClick={() => saveContact(formValues, history)} 
                className="green btn-flat white-text right">
                    Save
                    <i className="material-icons right">done</i>
            </button>  
            </div> 
        </div>    
    );
};

function mapSateToProps(state) {
    return { formValues: state.form.contactForm.values };
}

export default connect(mapSateToProps, actions)(withRouter(ContactFormReview));