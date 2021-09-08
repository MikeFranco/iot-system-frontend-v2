import { IconContext } from 'react-icons/lib';
import { FaTv, FaFan, FaLightbulb, FaMobileAlt, FaPowerOff, FaEdit } from 'react-icons/fa';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import '../App.css';

const getDeviceIcon = type => (
  <IconContext.Provider value={{ className: 'custom-react-icons' }}>
    {type === 'light' 
      ? <FaLightbulb />
      : type === 'fan' 
      ? <FaFan />
      : type === 'tv' 
      ? <FaTv /> 
      : (type === 'off' || type === 'on')
      ? <FaPowerOff className="clickable" color={type === 'on' ? '#7AFAC4' : '#B3467C'}/>
      : type === 'add'
      ? <FiPlusCircle className="clickable"/>
      : type === 'minus'
      ? <FiMinusCircle className="clickable"/>
      : type === 'edit'
      ? <FaEdit className="clickable"/>
      : <FaMobileAlt />
    }
  </IconContext.Provider>
);

export { getDeviceIcon };
