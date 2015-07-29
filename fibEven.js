function fibEven(n) {
    first_num = 1;
    second_num = 2;
    next_num = first_num + second_num;
    sum = 2;
    while (next_num <= n) {
        //check if next number in sequence is even
        if (next_num % 2 == 0) {
            sum += next_num;
        };
        
        //reassign numbers
        first_num = second_num;
        second_num = next_num;
        next_num = first_num + second_num;
        
    };
    return sum;
    
}