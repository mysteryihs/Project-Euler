var fib1 = 0;
var fib2 = 1;
var temp = 0;
var sum = 0;
var counter = 3;
while (true) {
	if (temp > 4000000) {
  confirm(sum)
  break;
  }
	temp = fib1 + fib2;
  fib1 = fib2;
  fib2 = temp;
  if (temp % 2 === 0) {
  sum += temp;
  }
}