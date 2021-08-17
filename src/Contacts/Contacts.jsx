import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Contact, ContactItem, BtnDelete, Text } from './Contacts.styles';
import {RiDeleteBin5Line, RiUserHeartLine} from 'react-icons/ri';
import { operation, selectors } from '../redux';

const ContactList = () => {
  const contacts = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(operation.deleteContact(id));
  useEffect(() => {
        dispatch(operation.fetchContact())
    }, [dispatch])
  return (
     <Contact>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}> <RiUserHeartLine />
        <Text>{name}: {number}</Text>
        <BtnDelete onClick={() => onDeleteContact(id)}><RiDeleteBin5Line /></BtnDelete>
      </ContactItem>
    ))}
  </Contact>
  )
 
}

export default ContactList;
