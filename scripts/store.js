import item from './item.js';

let items= [];
let hideCheckedItems= false;

let findById=function(id){
  return items.find(object=>object.id===id);
};

let addItem=function(name){
  try{
    item.validateName(name);
    const listItem=item.create(name);
    items.push(listItem);
  }catch(e){
    console.log(`Cannot add item: ${e.message}`);
  }
};

let findAndToggleChecked= function (id){
  const listItem=findById(id);  
  listItem.checked=!(listItem.checked);    
};

let findAndUpdateName= function (id,newName){
  try{
    item.validateName(newName);
    const listItem=this.findById(id);
    listItem.name = newName;
  }catch(e){
    console.log(`Cannot update name: ${e.message}`);
  }
};


let findAndDelete= function (id){
  const index=items.indexOf(object=>object.id!==id);
  items.splice(index,1);
};


let toggleCheckedFilter = function (){
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default{
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};