import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';
import { Input, Title2,Button } from './ContactForm.styles'
import { BiPhoneCall, BiUser, BiAddToQueue } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { operation,selectors } from '../redux/';

function ContactFrom() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name' :
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default: return;
    }
   }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some((contact) => contact.name === name || contact.number === number)) {
      toast.error(`${name} or ${number} already in the contacts.`);
        reset()
      return;
    
    }
    
    dispatch(operation.addContact({
      id: uuidv4(),
      name,
      number,
    }));

    reset();
  };

  const reset = () => {
    setName('')
    setNumber('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title2 htmlFor={nameInputId}><BiUser /> Name</Title2>
      <Input
        type='text'
        name='name'
        placeholder='Enter your name'
        onChange={handleChange}
        value={name}
        id={nameInputId}
        autoComplete='all'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. 
        Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <Title2 htmlFor={numberInputId}><BiPhoneCall /> Number </Title2>
      <Input
        type='text'
        name='number'
        placeholder='Enter your number'
        autoComplete='all'
        onChange={handleChange}
        value={number}
        id={numberInputId}
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Номер телефона должен состоять из цифр и может содержать пробелы,
        тире, круглые скобки и может начинаться с +'
        required
        />
      <Button type='submit' disabled={!name || !number}>
        <BiAddToQueue />
        Add contact
      </Button>
    </form>
  )
}

export default ContactFrom;