import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ContactForm from "./ContactForm";
import ContactFormReview from "./ContactFormReview";

class ContactNew extends Component {

    state = {showFormReview: false};

    renderContent() {
        if(this.state.showFormReview) {
            return <ContactFormReview onCancel={() => this.setState({showFormReview: false})}/>;
        }

        return <ContactForm onSaveContact={() => this.setState({showFormReview: true})}/>;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>    
        );
    }
}

export default reduxForm({
    form: 'contactForm'
})(ContactNew);