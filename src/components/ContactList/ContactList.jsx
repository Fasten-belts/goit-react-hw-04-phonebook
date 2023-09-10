import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactListWrapper>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem key={id}>
        <ContactName>{name}:</ContactName>{' '}
        <ContactNumber>{number}</ContactNumber>
        <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
      </ContactListItem>
    ))}
  </ContactListWrapper>
);
