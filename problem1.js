var sum = 0;
for (i =1; i < 1000; i++) {
	if (i % 3 === 0) {
  	sum += i;
  }
  else if (i % 5 === 0) {
  	sum += i;
  }
  else {
  	sum += 0
  }
}
confirm(sum)