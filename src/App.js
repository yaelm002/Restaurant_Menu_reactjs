import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCategories =['all', ...new Set( items.map(item => item.category))];
  const [item, setItems]= useState(items);
const [categories, setCategories] = useState(allCategories);
console.log(categories);

const filterItems= function(elem){
  if(elem ==='all'){
    setItems(items);
  }else{

    const newItems = items.filter((item=>{
      return item.category === elem}))
      setItems(newItems);
    }
  
}
return <>
<main>
      <section className='menu section'>
        <div className='title'>
        <h2 >Our Menu </h2>
        </div>
        <div className='underline'></div>
              <Categories  categories = {categories}  filterItems = {filterItems} />
              <Menu item ={item} />
      </section>
     </main>
  </>;
}

export default App;
