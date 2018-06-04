import React from "react";
import { Link } from "react-router-dom";
import ContactList from './ContactList';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <ContactList />
                <div className="fixed-action-btn">
                    <Link to="/contact/new" className="btn-floating btn-large red">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Dashboard;