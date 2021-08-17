import axios from 'axios';

axios.defaults.baseURL = 'https://611a2c73cbf1b30017eb555d.mockapi.io';

export const fetchContacts = () => {
  return axios.get('/contacts');
};

export const fetchAddContact = (contact) => {
  return axios.post('/contacts', contact);
};

export const fetchDeleteContact = (id) => {
  return axios.delete(`contacts/${id}`);
};