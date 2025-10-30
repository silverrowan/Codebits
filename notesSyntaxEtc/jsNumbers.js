******JavaScript Numbers******
******************************

******Types******
    JavaScript has only 1 type of number
    Numbers can be with or without decimals

    Numbers are always 64-bit Floating Point
        no number types like many other languages
            (so no: integer/short/long/floating-point/etc)

******Precision******            
        Integers (no decimal or exponents) are accurate to 15 digits
            eg 
                let x = 999999999999999    //x will be 999'999'999'999'999
                let y = 9999999999999999   //y will be 10'000'000'000'000'000
        max num decimals is 17

        floating point is not always 100% accurate
        eg
            let x = 0.2 + 0.1; // x = 0.30000000000000004
            ...to solve the prob above, it helps to multiply and divide
                (so as to convert to integers and then back to decimal)
                let x =((0.2 * 10) + (0.1 * 10))/10 //x = 0.3

******Numeric Bases******
        By default JavaScript displays numbers in base 10 decimal
        you can use toString() to output numbers in any base from 2 to 36
            (Hexadecimal is base 16, Decimal is base 10, Octal is base 8, Binary is base 2)
        eg
            let myNumber = 32;
            myNumber.toString(36); // returns w
            myNumber.toString(32); // returns 10
            myNumber.toString(16); // returns 20
            myNumber.toString(10); // returns 32
            myNumber.toString(2);  // returns 100000
        
        ******Hexadecimal******
            JavaScript interprets numeric constants as hexadecimal if preceeded by 0x
                eg
                    let x = 0xFF; // returns x = 255

        ******Leading 0******
            NEVER write numbers with a leading 0!
            SOME versions interpret numbers as octal if written w leading 0

******Numbers as Objects******
        Normally js numbers are primitive values from literals
        numbers CAN be defined as objects with the keyword new
            eg: let y = new Number(123)
        THIS IS A BAD IDEA
            it complicates the code and slows down execution AND
            can produce unexpected results