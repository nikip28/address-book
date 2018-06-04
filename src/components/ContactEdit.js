import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';
import ContactField from "./ContactField";
import validateEmails from "../utils/validateEmails";
import validateCellNo from "../utils/validateCellNo";
import mformFields from "./formFields";
import * as actions from '../actions';
import { connect } from 'react-redux';

let formFields = [...mformFields];
formFields.shift();

class ContactEdit extends React.Component {
    renderFields() {
        return formFields.map(({ label, name }) => {
            return (
                <Field key={name} component={ContactField} type="text" label={label} name={name} />
            );
        });
    }

    render() {
        return (
            <div>
                <h5>Edit contact</h5>
                <form onSubmit={this.props.handleSubmit(this.props.saveEditContact)}>
                    {this.renderFields()}
                    <Link to="/" className="deep-orange accent-2 btn-flat white-text">
                        Cancel
                        <i className="material-icons right">close</i>
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Save
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
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

ContactEdit = reduxForm({
    validate,
    form: 'contactForm',
    enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
        props.history.push('/');
    }
})(ContactEdit);

function mapSateToProps(state) {
    return { initialValues: state.edit };
}

ContactEdit = connect(mapSateToProps, actions)(ContactEdit);

export default ContactEdit;
