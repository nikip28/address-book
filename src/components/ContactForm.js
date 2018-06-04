import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';
import ContactField from "./ContactField";
import validateEmails from "../utils/validateEmails";
import validateCellNo from "../utils/validateCellNo";
import formFields from "./formFields";

class ContactForm extends React.Component {
    renderFields() {
        return formFields.map(({ label, name}) => {
            return (
                <Field key={name} component={ContactField} type="text" label={label} name={name} />
            );
        });
    }

    render() {
        return (
            <div>
                <h5>New contact</h5>
                <form onSubmit={this.props.handleSubmit(this.props.onSaveContact)}>
                    {this.renderFields()}
                    <Link to="/" className="deep-orange accent-2 btn-flat white-text">
                        Cancel
                        <i className="material-icons right">close</i>
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">arrow_forward</i>
                    </button>
                </form>
            </div>    
        );
    }
}

function validate(values) {
    const errors = {};

    errors.email = validateEmails(values.email || '');
    errors.cell = validateCellNo(values.cell || '');

    formFields.forEach(({ name, noValueError }) => {
        if(!values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'contactForm',
    destroyOnUnmount: false
})(ContactForm);
