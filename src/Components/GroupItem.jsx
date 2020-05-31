import React from 'react';

const GroupItem = (props) => (
  <div
    onClick={() => props.onSelected(props.index)}
    className={`group-item ${props.selected ? 'selected' : ''}`}>
    <img src={props.image} className={props.classItem} alt='logo' />
    <p>{props.name}</p>
  </div>
);

export default GroupItem;
