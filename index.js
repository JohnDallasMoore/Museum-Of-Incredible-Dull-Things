function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
      }
    
      const smallest = Math.min(...numbers);
      const smallestIndex = numbers.indexOf(smallest);
    
      return [...numbers.slice(0, smallestIndex), ...numbers.slice(smallestIndex + 1)];

//Old version

    // let smallestIndex = 0;
  
    // for (let i = 1; i < numbers.length; i++) {
    //   if (numbers[i] < numbers[smallestIndex]) {
    //     smallestIndex = i;
    //   }
    // }
  
    // const result = numbers.filter((_, index) => index !== smallestIndex);
  
    // return console.log(result);;
  }
  
  const result = removeSmallest([2,2,1,2,1]);
  console.log(result);