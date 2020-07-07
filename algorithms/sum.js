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
sum(6);
end = performance.now()
measurePerformance()


start = performance.now();
sum(12);
end = performance.now()
measurePerformance()

start = performance.now();
sum(120);
end = performance.now()
measurePerformance()

start = performance.now();
sum(120000);
end = performance.now()
measurePerformance()

start = performance.now();
sum(120000000);
end = performance.now()
measurePerformance()



