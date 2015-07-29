var isPrime = function(input){
    // determines if a number is prime by checking against all possible ints.
    for(var i = 2; i < input; i++){
        if(input % i === 0){
            return false;
        }
    }
    return true;
};

var largestPrime = function(n) {
    /*Finds a numbers largest prime. Returns -1 if no prime is found.
    Works by first determining possible factors i and Math.floor(n/i) and 
    evaluating for prime.
    
    In case none of the factors resulting from Math.floor(n/i) are prime, the factor i  
    (going from i -> sqrt(n) will be saved to an array and evaluated.)

    Credit goes to user agf on Stack Overflow for the bulk of this algorithm.

    https://stackoverflow.com/questions/6800193/what-is-the-most-efficient-way-of-finding-all-the-factors-of-a-number-in-python
    */
    
    smallers = []
    
    for(i=1; i<parseInt(Math.sqrt(n) + 1); i++){

        if (n % i === 0) {

            to_check =  Math.floor(n/i);
            // console.log(i, to_check); uncomment this to print out all possible
            // factors
            
            if (isPrime(to_check)) {
                return to_check;
            }
            
            if (isPrime(i)) {
                smallers.push(i);
            } 
            
        }
    }
    
    //No primes found in the larger factors. Check the array of smallers.
    
    if (smallers.length > 0){
        return smallers.reverse()[0]
    }
    
    return -1;
}

largestPrime(600851475143);

