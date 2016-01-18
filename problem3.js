var is_prime = function(n) {
  if (n == 1) {
    return true;
  }
  if (n == 2) {
    return true;
  }
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

var list_of_primes = function(n) {
  var list2 = [];
  for (var i = 2; i < n; i++) {
    if (is_prime(i)) {
      list2.push(i);
    }
  }
  return list2;
}

var max_prime_factor(n) {
var list1 = list_of_primes(n);
var list2 = [];
for (var i=0; i<list1.length; i++) {
  if (n % list1[i] === 0) {
  list2.push(i);
  }
}
return list2;
}
confirm(max_prime_factor(30))