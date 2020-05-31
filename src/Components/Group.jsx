import React from 'react';
import GroupItem from './GroupItem';
import './Group.css';

const Group = (props) => (
  <section className='group'>
    {props.name && <h1>{props.name}</h1>}
    <div className='group-items'>
      {props.items.map((i) => (
        <GroupItem image={i.image} name={i.name} class={i.classItem} />
      ))}
    </div>
  </section>
);

export default Group;