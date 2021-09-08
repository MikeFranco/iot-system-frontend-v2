import { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

export const AddDeviceModal = props => {
  //? props = show, onHide, setDevices

  const [labelValue, setLabelValue] = useState('');
  const [manufacturerValue, setManufacturerValue] = useState('');
  const [typeValue, setTypeValue] = useState('fan');

  const handleLabelChange = e => {
    setLabelValue(e.target.value);
  };

  const handleManufacturerChange = e => {
    setManufacturerValue(e.target.value);
  };

  const handleTypeChange = e => {
    const newValue = e.target.value;
    setTypeValue(newValue);
  };

  const getDeviceState = () => {
    return typeValue === 'fan'
      ? { turnedOn: false, speed: 0 }
      : { turnedOn: false };
  };

  const saveNewDevice = () => {
    if (
      !labelValue ||
      !manufacturerValue ||
      !typeValue ||
      labelValue.trim().length <= 0 ||
      manufacturerValue.trim().length <= 0
    ) {
      alert('Favor de llenar todos los campos');
    } else {
      const newState = getDeviceState();
      const newDevice = {
        type: typeValue,
        label: labelValue,
        manufacturer: manufacturerValue,
        state: newState
      };

      props.setDevices(prevState => {
        const idValue = prevState.length + 1;
        newDevice.id = idValue;
        return [...prevState, newDevice];
      });
      setLabelValue('');
      setManufacturerValue('');
      setTypeValue('fan');
      props.onHide();
    }
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className='add-device-value'>
            <label htmlFor='label'>Device Name</label>
            <input
              type='text'
              name='label'
              value={labelValue}
              onChange={handleLabelChange}
              placeholder='TV living room '
            />
          </Col>
          <Col className='add-device-value'>
            <label htmlFor='manufacturer'>Manufacturer</label>
            <input
              type='text'
              name='manufacturer'
              value={manufacturerValue}
              onChange={handleManufacturerChange}
              placeholder='Samsung'
            />
          </Col>
          <Col className='add-device-value' md='9'>
            <label htmlFor='types'>Type:</label>
            <select value={typeValue} onChange={handleTypeChange} name='types'>
              <option value='fan'>Fan</option>
              <option value='tv'>Tv</option>
              <option value='light'>Light</option>
            </select>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => saveNewDevice()}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};
