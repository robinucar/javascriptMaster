const romanNumerals = new Map();

romanNumerals.set(1, 'I');

romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals.get(1));

console.log(romanNumerals.get(4));

console.log(romanNumerals.has(5));


const heroes = new Map([ ['Clark Kent','Superman'],
['Bruce Wayne', 'Batman']
]);

console.log(heroes.size);

heroes.delete('Clark Kent');
console.log(heroes.size);

heroes.clear();

console.log(heroes.size);

[...romanNumerals];

Array.from(romanNumerals);


console.log(romanNumerals);
