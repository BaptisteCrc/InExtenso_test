function fizzbuzz(int $N) {  

    for ($nb = 1; $nb <= $N ; $nb++) {
        if ($nb % 3 == 0)
            echo "Fizz";
        if ($nb % 5 == 0)
            echo "Buzz";
        if ($nb % 3 != 0 && $nb % 5 != 0)
            echo $nb;
        echo '<br>';
}