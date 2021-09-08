import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { getDeviceIcon } from '../utils';

export const CardDevice = ({ type, label, manufacturer, state }) => {
  const [stateValue, setNewState] = useState(state);
  const [powerValue, setPowerValue] = useState(state);

  const togglePower = () => {
    setPowerValue({
      ...stateValue,
      turnedOn: !powerValue.turnedOn
    });
  };

  const reduceSpeed = () => {
    const newSpeed = stateValue.speed - 1;
    if (newSpeed >= 0) {
      setNewState({
        ...stateValue,
        speed: newSpeed
      });
    }
  };

  const addSpeed = () => {
    const newSpeed = stateValue.speed + 1;
    if (newSpeed <= 10) {
      setNewState({
        ...stateValue,
        speed: newSpeed
      });
    }
  };

  return (
    <>
      <Card style={{ width: '18rem' }} className='mt-3 card'>
        <Card.Body>
          <Card.Title className='text-left'>
            <Row className='justify-content-between'>
              <Col md='10' className='card-title'>
                <p className='mb-0'>
                  {getDeviceIcon(type)} {label}
                </p>
              </Col>
              <Col md='1' className='card-title text-right'>
                {getDeviceIcon('edit')}
              </Col>
            </Row>
          </Card.Title>
          <Card.Subtitle className='mb-2 card-subtitle-text'>
            {manufacturer}
          </Card.Subtitle>
          <Card.Text>
            <Row>
              <Col md='8' className='justify-content-between'>
                <span>{powerValue.turnedOn ? 'On' : 'Off'} </span>
                <span onClick={togglePower}>
                  {getDeviceIcon(!powerValue.turnedOn ? 'on' : 'off')}
                </span>
              </Col>
              {type === 'fan' && (
                <Col className='text-end p-0'>
                  <span onClick={reduceSpeed}>{getDeviceIcon('minus')}</span>
                  <span>{stateValue?.speed}</span>
                  <span onClick={addSpeed}>{getDeviceIcon('add')}</span>
                </Col>
              )}
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
