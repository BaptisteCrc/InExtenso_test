function increment(number: Array<digit>): Array<digit> {  
    $length =  count($number);
    $is_increment = 0;
   
    for ($cn = $arrlength; $cn > 0 && $is_increment == 0; $cn--) {
	    if ($number[$cn - 1] < 9) {
    	    $number[$cn - 1] = $number[$cn - 1] + 1;
    	    $is_increment = 1;
        }
        else
    	    $number[$cn - 1] = 0;
    }
   
    return number;
}
