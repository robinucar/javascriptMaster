const cartProduct =(setA, setB) => {
  const product = [];
  for (const setAElm of setA) {
    for (const setBElm of setB) {
      console.log('running');
      product.push(setAElm,setBElm);
    }
    }
    return product;
};

const colors = ['blue', 'red', 'black'];
const sizes = ['s', 'm', 'l', 'xl', 'xxl'];
console.log(cartProduct(colors, sizes));

// Time Complexity = O(n*m)
//Space Complexity = O(n*m)