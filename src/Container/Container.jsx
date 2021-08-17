import { Containers, Title } from './Container.styles';
import {BiBookOpen} from 'react-icons/bi';

const Container = ({ title, children }) => (
  <Containers>
    <Title> <BiBookOpen/> {title}</Title>
    {children}
  </Containers>
);

export default Container;