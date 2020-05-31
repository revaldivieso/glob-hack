import React from 'react';
import { withRouter } from 'react-router';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
//import logo2 from '../Asset/Images/logo2.png';
import './Group.css';

const ModalInfo = (props) => {
  const [show, setShow] = React.useState(props.show || false);

  const handleCancel = () => setShow(false);
  const handleOk = () => setShow(true);
  const change = ({ history }) => {
    try {
      props.history.push('/info');
    } catch (error) {
      alert(error);
    }
  };

  React.useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  return (
    <div className='modal'>
      <Button type='primary' onClick={handleOk}></Button>
      <Modal
        title='Hola!'
        visible={show}
        onOk={change}
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

export default withRouter(ModalInfo);
