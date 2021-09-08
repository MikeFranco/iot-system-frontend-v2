import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { CardDevice } from './components/CardDevice';
import { Header } from './components/Header';
import { useState } from 'react';

function App() {
  const [devices, setDevices] = useState([
    {
      id: 1,
      type: 'light',
      label: 'Kitchen light',
      manufacturer: 'Philips',
      state: {
        turnedOn: false
      }
    },
    {
      id: 2,
      type: 'light',
      label: 'Bedroom light',
      manufacturer: 'Philips',
      state: {
        turnedOn: false
      }
    },
    {
      id: 3,
      type: 'fan',
      label: 'Kitchen fan',
      manufacturer: 'GE',
      state: {
        turnedOn: true,
        speed: 2
      }
    },
    {
      id: 4,
      type: 'tv',
      label: 'TV living room',
      manufacturer: 'GE',
      state: {
        turnedOn: true
      }
    },
    {
      id: 5,
      type: 'tv',
      label: 'TV living room',
      manufacturer: 'GE',
      state: {
        turnedOn: true
      }
    },
    {
      id: 6,
      type: 'tv',
      label: 'TV living room',
      manufacturer: 'GE',
      state: {
        turnedOn: true
      }
    }
  ]);

  return (
    <>
      <Container fluid>
        <Header setDevices={setDevices} />
        <Row className='d-flex justify-content-around'>
          {devices.map(device => (
            <CardDevice
              id={device.id}
              type={device.type}
              label={device.label}
              manufacturer={device.manufacturer}
              state={device.state}
              key={device.id}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
