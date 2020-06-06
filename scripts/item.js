let validateName = function (name){

  if (typeof (name) === 'undefined' || (name) === '') {
    throw new TypeError ('Name must not be blank');
  }
};

let create = function (name){
  return {
    'id': cuid(),
    'name': name,
    'checked': false,
  };
};


export default {
  validateName,
  create
};
