import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchContacts, removeContact, editContact } from "../actions";
import { Collapsible, CollapsibleItem, Button, Icon, Input } from 'react-materialize';
import { Link } from "react-router-dom";

class ContactList extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }
    componentDidMount() {
        this.props.fetchContacts();
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    renderContacts(contacts) {
        let filteredContacts = contacts.filter(
            (contact) => {
                if (contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                    return contact;
                } else if (contact.cell.indexOf(this.state.search.toLowerCase()) !== -1) {
                    return contact;
                } else if (contact.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                    return contact;
                } else if (contact.notes && contact.notes.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                    return contact;
                }
            });

        return filteredContacts.map(contact => {
            return (
                <CollapsibleItem header={contact.name} className="card green lighten-4" icon='person'>
                    <Button className="right" waves='light' onClick={() => this.props.removeContact(contact)}>
                        <Icon>delete</Icon>
                    </Button>
                    <Link to="/contact/edit">
                        <Button className="right" style={{marginRight: '10px'}} waves='light' onClick={() => this.props.editContact(contact)}>
                            <Icon>edit</Icon>
                        </Button>
                    </Link>
                    <p className="black-text"><Icon>local_phone</Icon> Cell no: <span className="pink-text">{contact.cell}</span></p>
                    <p className="black-text"><Icon>email</Icon> Email Address: <span className="pink-text">{contact.email}</span></p>
                    <p className="black-text"><Icon>chrome_reader_mode</Icon> Notes: <span className="pink-text">{contact.notes}</span></p>
                </CollapsibleItem>
            );
        });
    }

    render() {
        let contacts = this.props.contacts || [];
        return (
            <div>
                <Input type="text" value={this.state.search} placeholder="Search..." onChange={this.updateSearch.bind(this)}><Icon>search</Icon></Input>
                <Collapsible popout>
                    {(contacts.length > 0) ? this.renderContacts(contacts) : <p style={{ textAlign: 'center', fontSize: '20px' }}>No contacts found.</p>}
                </Collapsible>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { contacts: state.cont };
}

export default connect(mapStateToProps, { fetchContacts, removeContact, editContact })(ContactList);
