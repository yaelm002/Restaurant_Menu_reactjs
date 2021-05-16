import React from 'react';

const Categories = ({categories, filterItems}) => {

  return <div className	='btn-container' style= {{paddingTop : '2rem'}}>
    {
      categories.map((category, index)=>{
        return(
          <button key={index} onClick={()=>filterItems(category)} className='filter-btn'>{category}</button>
        )
      })
    }
    </div >;
};

export default Categories;
