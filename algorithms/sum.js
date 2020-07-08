const sum = num => {
  let result = 0;
  for(let i = 0; i <= num; i++) {
    result += i
  }
  console.log(result);
}
//test sum function
sum(3);

//Measuring Algorithm Performance

var start = 0;
var end = 0;

const measurePerformance = () => {
  console.log(end - start)
}



start = performance.now();
sum(120000000);
end = performance.now()
measurePerformance()

//faster way

const sum1 = num => {
  console.log((num / 2) * (1 + num))
}
//test the function
sum1(5)


//Measuring Algorithm Performance
start = performance.now();
sum1(120000000);
end = performance.now()
measurePerformance()