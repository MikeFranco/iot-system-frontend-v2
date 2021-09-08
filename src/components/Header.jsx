import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getDeviceIcon } from '../utils';
import { CustomModal } from './CustomModal';
import '../App.css';

export const Header = ({ setDevices }) => {
  const [modalShow, setModalShow] = useState(false);

  const onHideModal = () => {
    setModalShow(false);
  };

  return (
    <Container>
      <Row className='d-flex justify-content-between'>
        <Col className='d-flex justify-content-center'>
          <p className='nav-title'>Welcome!</p>
        </Col>
        <Col
          onClick={() => setModalShow(true)}
          className='d-flex justify-content-center'>
          <p className='nav-title clickable'>
            {getDeviceIcon('add')} Add Device
          </p>
        </Col>
        <CustomModal
          show={modalShow}
          onHide={onHideModal}
          setDevices={setDevices}
        />
      </Row>
    </Container>
  );
};
