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
    this.items.push(listItem);
  }catch(e){
    console.log(`Cannot add item: ${e.message}`);
  }
};

let findAndToggleChecked= function (id){
  console.log(id);
  const listItem=findById(id);  
  console.log(this.items,id);
  for(let i=0; i<this.items.length;i++){
    if(this.items[i].id===listItem.id){
      this.items[i].checked=!(this.items[i].checked);
    }
  }  
};

let findAndUpdateName= function (id,newName){
  try{
    item.validateName(newName);
    const listItem=findById(id);
    listItem.name = newName;
  }catch(e){
    console.log(`Cannot update name: ${e.message}`);
  }
};


let findAndDelete= function (id){
  const filteredItems=this.items.filter( (object)=>{
    return object.id!==id;
  });
  this.items = filteredItems;
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