//cartesianProduct with limited arrays
const cartProduct = (setA, setB) => {
  const product = [];
  for (let setAElm of setA) {
    if (!Array.isArray(setAElm)) {
      setAElm = [setAElm];
    }
    for (const setBElm of setB) {
      product.push([...setAElm, setBElm]);
    }
  }
  return product;
};

// Time Complexity = O(n*m)
//Space Complexity = O(n*m)

//Same algorithm without array limits

const cartesian = (...sets) => {
  let tempProduct = sets[0];

  for (
    let i = 1 /*we already added first arrays above sets[0]*/;
    i < sets.length;
    i++
  ) {
    tempProduct = /*calling first function for limited list*/ cartProduct(
      tempProduct,
      sets[i]
    );
  }
  return tempProduct;
};

const colors = ["red", "blue", "black", "white"];
const sizes = ["s", "m", "l", "xl", "xxl"];
const styles = ["round-neck", "v-neck"];
console.log(cartProduct(colors, sizes));
console.log(cartesian(colors, sizes, styles));

// Time Complexity = O(n^x)
//sizes Complexity = O(n^x)
