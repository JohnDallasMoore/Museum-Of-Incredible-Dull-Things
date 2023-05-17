function removeSmallest(numbers) {
    let smallestIndex = 0;
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[smallestIndex]) {
        smallestIndex = i;
      }
    }
  
    const result = numbers.filter((_, index) => index !== smallestIndex);
  
    return console.log(result);;
  }
  
  removeSmallest([5,3,2,1,4]);