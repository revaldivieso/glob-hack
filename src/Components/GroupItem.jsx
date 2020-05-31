import React from 'react';
import ModalInfo from './ModalInfo';

const GroupItem = (props) => (
  <div
    onClick={() => props.onSelected(props.index)}
    className={`group-item ${props.className} ${
      props.selected ? 'selected' : ''
    }`}>
    <img src={props.image} className={props.classItem} alt='logo' />
    <p>{props.name}</p>
    <ModalInfo show={props.selected} />
  </div>
);

export default GroupItem;
