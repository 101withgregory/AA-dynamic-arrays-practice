class DynamicArray {

  constructor(defaultSize = 4, length = 0, data = new Array (defaultSize)) {

    // Your code here
    this.defaultSize = defaultSize;
    this.length = length;
    this.data = data;
    this.capacity = data.length;
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val){
    //if the current length of the array exceeds or is equal to the arrays capacity , resize.
    if(this.length >= this.capacity){
      let newArray = new Array (this.capacity + this.defaultSize);
      // copying the elements from the old array into the newly resized array .
      for ( let i =0 ; i < this.length; i++){
        newArray[i] = this.data[i];
      }
      //update the properties to the newArray .
      this.capacity = newArray.length;
      this.data = newArray;

    }
      //add the new value to the end of the array
      this.data[this.length] = val;
  
    this.length ++
  }

  pop(){
    if(this.length === 0 ){
      return undefined;
    }
    const poppedElement = this.data[this.length - 1]; // Get the last element
    this.data[this.length - 1] = undefined; // Remove the last element
    this.length--; // Decrement the length

    return poppedElement;
  }


  shift(){
    if(this.length === 0){
      return undefined;
    }
    let shifted = this.data[0];
  
    for(let i = 1 ; i < this.length; i ++){
        this.data[i - 1] = this.data[i];
        
    }
    this.data[this.length - 1] = undefined;
     this.length --;
    return shifted;
   
  }

  unshift(val){
    if ( this.length >= this.capacity){
      let newArray = new Array (this.capacity + this.defaultSize);
      //copy elements from old array into new array .
      for( let i = this.length - 1; i >= 0; i--){
        newArray[i + 1] = this.data[i];
      }
      this.data = newArray;
      this.capacity = newArray.length;
 
    }else {
      for (let i = this.length - 1; i >= 0; i--) {
        this.data[i + 1] = this.data[i];
      }
    }

     this.data[0] = val;
      this.length++;
  }

  indexOf(val){
    for(let i = 0; i< this.length; i++){
      let el  = this.data[i];
      if(el === val){
        return i;
      }
    }

     return -1;
  }



  resize() {
    if (this.length === this.capacity) {
        let addedSize = ( this.capacity * 2) + this.defaultSize;
        let newArray = new Array(addedSize);

        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.data[i];
        }

        this.data = newArray;
        this.capacity = this.data.length;
    }
}


}


module.exports = DynamicArray;


