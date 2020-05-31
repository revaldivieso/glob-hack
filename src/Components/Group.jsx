import React from 'react';
import GroupItem from './GroupItem';
import './Group.css';

const Group = (props) => {
  const [selected, setSelected] = React.useState({});
  const onSelect = (index) => {
    const newSelected = { ...selected };
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };
  return (
    <section className='group'>
      {props.name && <h1>{props.name}</h1>}
      <div className='group-items'>
        {props.items.map((i, index) => (
          <GroupItem
            index={index}
            selected={selected[index]}
            onSelected={onSelect}
            image={i.image}
            name={i.name}
            class={i.classItem}
          />
        ))}
      </div>
    </section>
  );
};

export default Group;