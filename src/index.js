
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let arr2 = [];
  if(Array.isArray(matrix)){
    for(i = 0; i < matrix.length; i++){
      if(i % 2 === 1 || i === 1){
        arr2.push(matrix[i].reverse());
      }else{
        arr2.push(matrix[i]);
    }}
    return arr2.flat();
    
  }else{
    
    return [];
  }
  }
