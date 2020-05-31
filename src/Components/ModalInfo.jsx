import React from 'react';
//import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
//import logo2 from '../Asset/Images/logo2.png';
import './Group.css';

const ModalInfo = (props) => {
  const [show, setShow] = React.useState(props.show || false);

  const handleCancel = () => setShow(false);
  const handleOk = () => setShow(true);
  React.useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  return (
    <div className='modal'>
      <Button type='primary' onClick={handleOk}></Button>
      <Modal
        title='Hola!'
        visible={show}
        onCancel={handleCancel}
        okText='Sí'
        cancelText='NO'>
        <p>
          Hay algunos indicadores de que podrías estar en una relación violenta
        </p>
        <p>¿Necesitas más información?</p>
      </Modal>
    </div>
  );
};

export default ModalInfo;
