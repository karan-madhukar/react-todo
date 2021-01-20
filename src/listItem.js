import React from 'react';
import './listItem.css';
import FlipMove from 'react-flip-move';
const ListItems = (props) => {
  const items = props.items
  const listItems =items.map(item =>
    {
      return <div className="list" key={item.key}>
        <p>
          <input type="text" onChange={(e) => props.setUpdate(e.target.value, item.key)} id={item.key}
          value={item.text}/>
        <span><button onClick={() => props.deleteItem(item.key)}>x</button></span>
        </p>
      </div>
    })
  return(
    <div><FlipMove duration={300} easing="ease-in-out">{listItems}</FlipMove></div>
  )
}

export default ListItems;