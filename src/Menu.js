import React from 'react';

const Menu = ({item}) => {
  return <>
  <div className ='section-center'>

    {item.map(elem =>{
      const {id,title, price, img, desc} = elem;
      return(
        <article key={id} className='menu-item'>
        <img src={img} alt={title} className='photo'/>
        <div className='item-info'>
        <header>
            <h4>{title}</h4>
        <p className='price'>${price}</p>
          </header>
      <p className='item-text'> {desc} </p>
      </div>
    </article>
        )
      })
    }
    </div>
  </>;
};

export default Menu;
