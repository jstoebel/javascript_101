
function multiples(size) {
	// Returns all multiples of 3 or 5 that are below size.
    sum = 0;
    for (i=0; i<size; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)){

            sum += i;
    };
    
    return sum;
    
}