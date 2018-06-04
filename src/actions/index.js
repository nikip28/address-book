import { FETCH_CONTACT, EDIT_CONTACT, SAVE_EDIT_CONTACT } from "./types";

export const saveContact = (values, history) => async dispatch => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(values);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    history.push('/');
    dispatch({ type: FETCH_CONTACT, payload: contacts });
};

export const fetchContacts = () => dispatch => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    dispatch({ type: FETCH_CONTACT, payload: contacts });
};

export const removeContact = (rcontact) => dispatch => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.map((contact) => {
        if (contact.name === rcontact.name && contact.cell === rcontact.cell && contact.email === rcontact.email) {         
            var index = contacts.indexOf(contact);
            if (index > -1) {
                contacts.splice(index, 1);
                localStorage.setItem('contacts', JSON.stringify(contacts));
            }
        }
    })
    dispatch({ type: FETCH_CONTACT, payload: contacts });
};

export const editContact = (econtact) => dispatch => {  
    dispatch({ type: EDIT_CONTACT, payload: econtact });
};

export const saveEditContact = (values) => dispatch => { 
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.map((contact) => {
        if (contact.name === values.name){
            var index = contacts.indexOf(contact);
            if (index > -1) {
                contacts.splice(index, 1, values);
                localStorage.setItem('contacts', JSON.stringify(contacts));
            }
        }
    })
    dispatch({ type: SAVE_EDIT_CONTACT, payload: contacts });
};
