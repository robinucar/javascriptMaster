//permutations without repetitions
const getPermutations = (options) => {
  const permutations = [];
  //console.log('FUNCTION STARTING');
  //console.log('Options: ' + options);

  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutations(options.slice(1));

  //console.log('AFTER RECURSIVE STEP');
  //console.log('partialPermutations: ' + partialPermutations);

  const firstOption = options[0];
  //console.log('firstOption: ' + firstOption)

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];
    //console.log('OUTER LOOP');
    //console.log('partialPermutation: ' + partialPermutation);

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutataionAfter = partialPermutation.slice(j);
      permutations.push(
        permutationInFront.concat([firstOption], permutataionAfter)
      );
    }
  }

  return permutations;
};

const todoListItems = [
  "Walk the dog",
  "Clean the house",
  "Go to shopping",
  "Cook dinner"
];
console.log(getPermutations(todoListItems));

//Time Complexity = O(n!) = Factorial Time Complexity