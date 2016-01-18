def is_prime(n):
    list1 = xrange(2, n)
    if n == 2:
        return True
    for i in list1:
        if n % i == 0:
            return False
    return True

def list_of_primes(n):
    list1 = xrange(2, n)
    list2 = []
    for i in list1:
        if is_prime(i):
            list2.append(i)
    return list2

def max_prime_factor(n):
    list1 = list_of_primes(n)
    list2 = []
    for i in list1:
        if n % i == 0:
            list2.append(i)
    return max(list2)
print max_prime_factor(13195)
