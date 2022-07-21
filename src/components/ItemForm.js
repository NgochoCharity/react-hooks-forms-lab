import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [newInput, setNewInput] = useState('')
  const [newCategory, setNewCategory] = useState('Produce')
  
  let newObj = {
    id : uuid(),
    name : newInput,
    category : newCategory
  }
  function handleSubmit(e){
    e.preventDefault()
    props.onItemFormSubmit(newObj)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={newInput} onChange= {(e) => setNewInput(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange = {(e) => setNewCategory(e.target.value)} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
