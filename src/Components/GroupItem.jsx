import React from 'react';

const GroupItem = (props) => (
  <div className='group-item'>
    <img src={props.image} className={props.classItem} alt='logo' />
    <p>{props.name}</p>
  </div>
);

export default GroupItem;
