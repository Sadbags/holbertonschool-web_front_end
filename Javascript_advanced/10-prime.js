function countPrimeNumbers () {
    let isPrime;
    let countPrimes = 0;

    for (let i = 2; i <= 100; i++) {
      isPrime = true;
      const end = Math.round(Math.sqrt(i));

      for (let mod = 2; mod <= end; mod++) {
        if (i % mod == 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        countPrimes = countPrimes + 1;
      }
    }

    console.log(countPrimes);
    return countPrimes;
  }

  const startCountPrimeNumbers = window.performance.now();
  for (let j = 1; j < 101; j++) {
    countPrimeNumbers();
  }
  const endCountPrimeNumbers = window.performance.now();

  console.log('Execution time of calculating prime numbers 100 times was ' + (endCountPrimeNumbers - startCountPrimeNumbers) + ' milliseconds.');