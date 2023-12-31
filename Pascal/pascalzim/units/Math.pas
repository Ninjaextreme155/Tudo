// ------------------------------------------------------------------------- //
//                                                                           //
// Unit: Math                                                                //
// Vers�o: 1.1v                                                              //
// Autores: Raphael Augusto, Brunny Augusto                                  //
// Licen�a: General Public License(GPL)                                      //
//                                                                           //
// ------------------------------------------------------------------------- //

Unit Math ;
Interface
Const
    AUREA = 1.61803398875;                            {constante �urea}
    E = 2.71828182846;                                {n�mero de Euler}

    HALF_PI = 1.57079632679;                          {metade de PI}
    TAL = 6.28318530718;                              {dobro de PI}

    LN_2 = 0.69314718056;                             {logaritmo natural de 2}
    LN_10 = 2.30258509299;                            {logaritmo natural de 10}

    // Fun��es trigonom�tricas
    function tan(a : real) : real;                    {tangente de [a]}
    function cot(a : real) : real;                    {cotangente de [a]}
    function csc(a : real) : real;                    {cossecante de [a]}
    function sec(a : real) : real;                    {secante de [a]}
    function sinh(a : real) : real;                   {seno hiperb�lico de [a]}
    function cosh(a : real) : real;                   {coseno hiberb�lico de [a]}
    function tanh(a : real) : real;                   {tangente hiperb�lica de [a]}
    function coth(a : real) : real;                   {cotangente hiperb�lica de [a]}
    function csch(a : real) : real;                   {cossecante hiperb�lica de [a]}
    function sech(a : real) : real;                   {secante hiperb�lica de [a]}
    function arcsin(a : real) : real;                 {arco seno de [a]}
    function arccos(a : real) : real;                 {arco cosseno de [a]}
    function arccot(a : real) : real;                 {arco cotangente de [a]}
    function arccsc(a : real) : real;                 {arco cosecante de [a]}
    function arcsec(a : real) : real;                 {arco secante de [a]}
    function arcsinh(a : real) : real;                {arco seno hiberb�lico de [a]}
    function arccosh(a : real) : real;                {arco cosseno hiberb�lico de [a]}
    function arctanh(a : real) : real;                {arco tangente hiberb�lico de [a]}
    function arccoth(a : real) : real;                {arco cotangente hiberb�lico de [a]}
    function arccsch(a : real) : real;                {arco cossecante hiberb�lico de [a]}
    function arcsech(a : real) : real;                {arco secante hiberb�lico de [a]}

    // Fun��es logar�tmicas
    function log10(n : real) : real;                  {logaritmo de [n] na base 10}
    function log2(n : real) : real;                   {logaritmo de [n] na base 2}
    function log(n, m : real) : real;                 {logaritmo de [n] na base [m]}

    // N�meros alet�rios
    function simpleRandom() : real;                   {n�mero aleat�rio entre 0 e 1}
    function randomBetween(a, b : real) : real;       {n�mero aleat�rio entre [a] e [b]}
    function randomGaussian() : real;                 {n�mero aleat�rio com distribui��o normal}

    // Fun��es exponenciais
    function pow(x, n : real) : real;                 {[x] elevado a [n]}
    function exp2(x : real) : real;                   {2 elevado a [x]}
    function exp10(x : real) : real;                  {10 elevado a [x]}

    // Fun��es geom�tricas
    function hypot(a, b : real) : real;               {hipotenusa dos catetos [a] e [b]}
    function radian(a : real) : real;                 {Converte graus para radianos}
    function degree(a : real) : real;                 {Converte radianos para graus}

    // Outras
    function min(a, b : real) : real;                 {retorna o menor valor entre [a] e [b]}
    function max(a, b : real) : real;                 {retorna o maior valor entre [a] e [b]}
    function constrain(a, b, c : real) : real;        {limita o valor [a] dentro dos limites [b] e [c]}
    function gaussian(x, sigma : real) : real;        {fun��o gaussiana}
    function logistic(x, a : real) : real;            {fun��o log�stica, sendo [a] a constante de inclina��o}
    function factorial(n : integer) : integer;        {Calcula o fatorial de [n]}


Implementation

    // ------------------------------------------------------------------------- //
    // Calcula a tangente do �ngulo[a], sendo:                                   //
    //  tan(a) = sin(a)/cos(a)                                                   //
    // ------------------------------------------------------------------------- //
    function tan(a : real) : real;
    begin

        tan := sin(a)/cos(a);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula a cotangente do �ngulo[a], sendo:                                 //
    //  cot(a) = cos(a)/sin(a)                                                   //
    // ------------------------------------------------------------------------- //
    function cot(a : real) : real;
    begin

        cot := cos(a)/sin(a);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula a cossecante do �ngulo[a], sendo:                                 //
    //  csc(a) = 1/sin(a)                                                        //
    // ------------------------------------------------------------------------- //
    function csc(a : real) : real;
    begin

        csc := 1/sin(a);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula a secante do �ngulo[a], sendo:                                    //
    //  sec(a) = 1/cos(a)                                                        //
    // ------------------------------------------------------------------------- //
    function sec(a : real) : real;
    begin

        sec := 1/cos(a);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o seno hiperb�lico do �ngulo[a], sendo:                           //
    //  sinh(a) = (exp(a) - exp(-a))/2                                           //
    // ------------------------------------------------------------------------- //
    function sinh(a : real) : real;
    begin

        sinh := (exp(a) - exp(-a))/2;

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o coseno hiperb�lico do �ngulo[a], sendo:                         //
    //  sinh(a) = (exp(a) - exp(-a))/2                                           //
    // ------------------------------------------------------------------------- //
    function cosh(a : real) : real;
    begin

        cosh := (exp(a) + exp(-a))/2;

    end;

    // ------------------------------------------------------------------------- //
    // Calcula a tangente hiperb�lica do �ngulo[a], sendo:                       //
    //  tanh(a) = (exp(a) - exp(-a))/(exp(a) + exp(-a))                          //
    // ------------------------------------------------------------------------- //
    function tanh(a : real) : real;
    begin

        tanh := (exp(a) - exp(-a))/(exp(a) + exp(-a));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula a cotangente hiperb�lica do �ngulo[a], sendo:                     //
    //  coth(a) = (exp(a) + exp(-a))/(exp(a) - exp(-a))                          //
    // ------------------------------------------------------------------------- //
    function coth(a : real) : real;
    begin

        coth := (exp(a) + exp(-a))/(exp(a) - exp(-a));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula a cossecante hiperb�lica do �ngulo[a], sendo:                     //
    //  csch(a) = 2/(exp(a) - exp(-a))                                           //
    // ------------------------------------------------------------------------- //
    function csch(a : real) : real;
    begin

        csch := 2/(exp(a) - exp(-a));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula a secante hiperb�lica do �ngulo[a], sendo:                        //
    //  sech(a) = 2/(exp(a) + exp(-a))                                           //
    // ------------------------------------------------------------------------- //
    function sech(a : real) : real;
    begin

        sech := 2/(exp(a) + exp(-a));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco seno de [a], sendo:                                        //
    // Fonte: http://mathworld.wolfram.com/InverseSine.html                      //
    //  arcsin(a) = arctan(a / sqrt(1 - a * a ))                                 //
    // ------------------------------------------------------------------------- // 
    function arcsin(a : real) : real;
    var
    	num : real;
    	
    begin

    		num := sqrt(1 - a * a);

		    if num <> 0 then
		        arcsin := arctan(a / num)
		    else
		    begin
		    	
			    	if a > 0 then 
					  	arcsin := 1.5707963267948966
						else if a < 0 then 
							arcsin := -1.5707963267948966
						else
						begin
						
							writeln('Erro: Fun��o ''arcsin''.');
						
						end;
				end;
    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco cosseno de [a], sendo:                                     //
    // fonte: http://mathworld.wolfram.com/InverseCosine.html                    //
    //  arcsin(a) = HALF_PI - arctan(a / sqrt(1 - a * a))                        //
    // ------------------------------------------------------------------------- // 
    function arccos(a : real) : real;
    var
    	num : real;
    	
    begin

    		num := sqrt(1 - a * a);

		    if num <> 0 then
		        arccos := HALF_PI - arctan(a / num)
		    else
		    begin
		    	
			    	if a > 0 then 
					  	arccos := HALF_PI - 1.5707963267948966
						else if a < 0 then 
							arccos := HALF_PI + 1.5707963267948966
			
						else
						begin
						
							writeln('Erro: Fun��o ''arccos''.');
						
						end;
				end;
    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco cotangente de [a], sendo:                                  //
    //  fonte : http://mathworld.wolfram.com/InverseCotangent.html               //
    //  arccot(a) = a < 0 ? -HALF_PI - arctan(a) : HALF_PI - arctan(a)           //
    // ------------------------------------------------------------------------- //
    function arccot(a : real) : real;
    begin

        if a < 0 then
            arccot := -HALF_PI - arctan(a)
        else
            arccot := HALF_PI - arctan(a);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco cosecante de [a], sendo:                                   //
    //  fonte : http://mathworld.wolfram.com/InverseCosecant.html                //
    //  arccsc(a) = a < -1 ? -arccot(sqrt(a * a - 1)) : arccot(sqrt(a * a - 1))  //
    // ------------------------------------------------------------------------- //
    function arccsc(a : real) : real;
    begin

        if a < -1 then
            arccsc := -arccot(sqrt(a * a - 1))
        else
            arccsc := arccot(sqrt(a * a - 1));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco secante de [a], sendo:                                     //
    //  fonte : http://mathworld.wolfram.com/InverseSecant.html                  //
    //  arcsec(a) = a < -1 ? pi - arctan(sqrt(a * a - 1)) :                      //
    //                       arctan(sqrt(a * a - 1))                             //
    // ------------------------------------------------------------------------- //
    function arcsec(a : real) : real;
    begin

        if a < -1 then
            arcsec := pi - arctan(sqrt(a * a - 1))
        else
            arcsec := arctan(sqrt(a * a - 1));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco seno hiperb�lico de [a], sendo:                            //
    //  fonte : http://mathworld.wolfram.com/InverseHyperbolicSine.html          //
    //  arcsinh(a) = ln(a + sqrt(a*a + 1))                                       //
    // ------------------------------------------------------------------------- //
    function arcsinh(a : real) : real;
    begin

        arcsinh := ln(a + sqrt(a * a + 1));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco coseno hiperb�lico de [a], sendo:                          //
    //  fonte : http://mathworld.wolfram.com/InverseHyperbolicCosine.html        //
    //  arccosh(a) = ln(a + sqrt(a*a + 1) * sqrt(a*a - 1))                       //
    // ------------------------------------------------------------------------- //
    function arccosh(a : real) : real;
    begin

        arccosh := ln(a + sqrt(a * a - 1));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco tangente hiperb�lico de [a], sendo:                        //
    //  fonte : http://mathworld.wolfram.com/InverseHyperbolicTangent.html       //
    //  arctanh(a) = ln((1 + a)/(1 - a))/2                                       //
    // ------------------------------------------------------------------------- //
    function arctanh(a : real) : real;
    begin

        arctanh := ln((1 + a)/(1 - a))/2;

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco cotangente hiperb�lico de [a], sendo:                      //
    //  fonte : http://www.mathworks.com/help/matlab/ref/acoth.html              //
    //  arccoth(a) = ln((1 + 1/a)/(1 - 1/a))/2                                   //
    // ------------------------------------------------------------------------- //
    function arccoth(a : real) : real;
    begin

        arccoth := ln((1 + 1/a)/(1 - 1/a))/2;

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco cossecante hiperb�lico de [a], sendo:                      //
    //  fonte : http://mathworld.wolfram.com/InverseHyperbolicCosecant.html      //
    //  arccsch(a) = a < 0 ? ln((1 - sqrt(a * a + 1))/a) :                       //
    //                       ln((1 + sqrt(a * a + 1))/a)                         //
    // ------------------------------------------------------------------------- //
    function arccsch(a : real) : real;
    begin

        if a < 0 then
            arccsch := ln((1 - sqrt(a * a + 1))/a)
        else
            arccsch := ln((1 + sqrt(a * a + 1))/a);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o arco secante hiperb�lico de [a], sendo:                         //
    //  fonte : http://mathworld.wolfram.com/InverseHyperbolicSecant.html        //
    //  arcsech(a) = a < 0 ? ln((1 - sqrt(1 - a * a))/a) :                       //
    //                       ln((1 + sqrt(1 - a * a))/a)                         //
    // ------------------------------------------------------------------------- //
    function arcsech(a : real) : real;
    begin

        if a < 0 then
            arcsech := ln((1 - sqrt(1 - a * a))/a)
        else
            arcsech := ln((1 + sqrt(1 - a * a))/a);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o logaritmo de [n] na base 10, sendo:                             //
    //  log10(n) = ln(n)/ln(10)                                                  //
    //           = ln(n)/2.30258509299                                           //
    // ------------------------------------------------------------------------- //
    function log10(n : real) : real;
    begin

        log10 := ln(n)/LN_10;

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o logaritmo de [n] na base 2, sendo:                              //
    //  log2(n) = ln(n)/ln(10)                                                   //
    //          = ln(n)/0.69314718056}                                           //
    // ------------------------------------------------------------------------- //
    function log2(n : real) : real;
    begin

        log2 := ln(n)/LN_2;

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o logaritmo de [n] na base [m], sendo:                            //
    //  log(n, m) = ln(n)/ln(m)                                                  //
    // ------------------------------------------------------------------------- //
    function log(n, m : real) : real;
    begin

        log := ln(n)/ln(m);

    end;

    // ------------------------------------------------------------------------- //
    // Gera um n�mero aleat�rio entre 0..1                                       //
    // ------------------------------------------------------------------------- //
    function simpleRandom() : real;
    begin

        simpleRandom := (random(maxint) + 1)/maxint;

    end;

    // ------------------------------------------------------------------------- //
    // Gera um n�mero aleat�rio entre [a] e [b]                                  //
    // ------------------------------------------------------------------------- //
    function randomBetween(a, b : real) : real;
    begin

        randomBetween := a + (b - a) * (random(maxint) + 1)/maxint;

    end;

    // ------------------------------------------------------------------------- //
    // Gera um n�mero aleat�rio com distribui��o normal                          //
    // ------------------------------------------------------------------------- //
    function randomGaussian() : real;
    begin

        if random(2) = 0 then
            randomGaussian := sqrt(-2 * ln((random(maxint) + 1)/maxint)) *
                              sin((random(maxint) + 1)/maxint)
        else
            randomGaussian := -sqrt(-2 * ln((random(maxint) + 1)/maxint)) *
                              sin((random(maxint) + 1)/maxint);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula [x] elevado a [n], sendo:                                         //
    //  pow(x, n) = exp(ln(x) * n)                                               //
    // ------------------------------------------------------------------------- //
    function pow(x, n : real) : real;
    begin

        pow := exp(ln(x) * n);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o valor de 2^x, sendo:                                            //
    //  exp2(x) = exp(ln(2) * x)                                                 //
    // ------------------------------------------------------------------------- //
    function exp2(x : real) : real;
    begin

        exp2 := exp(LN_2 * x);

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o valor de 10^x, sendo:                                           //
    //  exp10(x) = exp(ln(10) * x)                                               //
    // ------------------------------------------------------------------------- //
    function exp10(x : real) : real;
    begin

        exp10 := exp(LN_10 * x);

    end;

    // ------------------------------------------------------------------------- //
    // Retorna a hipotenusa do tri�ngulo ret�ngulo:                              //
    //  hypot(a, b) = sqrt(a * a + b * b)                                        //
    // ------------------------------------------------------------------------- //
    function hypot(a, b : real) : real;
    begin

        hypot := sqrt(a * a + b * b);

    end;

    // ------------------------------------------------------------------------- //
    // Converte graus em radianos:                                               //
    //  radian(a) = a * PI/180                                                   //
    // ------------------------------------------------------------------------- //
    function radian(a : real) : real;
    begin

        radian := a * 0.01745329251;

    end;

    // ------------------------------------------------------------------------- //
    // Converte radianos em graus:                                               //
    //  radian(a) = a * 180/PI                                                   //
    // ------------------------------------------------------------------------- //
    function degree(a : real) : real;
    begin

        degree := a * 57.2957795131;

    end;

    // ------------------------------------------------------------------------- //
    // Retorna o maior valor:                                                    //
    //  max(a, b) = a > b ? a : b;                                               //
    // ------------------------------------------------------------------------- //
    function max(a, b : real) : real;
    begin

        if a > b then
            max := a
        else
            max := b;

    end;

    // ------------------------------------------------------------------------- //
    // Retorna o menor valor:                                                    //
    //  min(a, b) = a < b ? a : b;                                               //
    // ------------------------------------------------------------------------- //
    function min(a, b : real) : real;
    begin

        if a < b then
            min := a
        else
            min := b;

    end;

    // ------------------------------------------------------------------------- //
    // Limita o valor [a] dentro dos limites [b] e [c]                           //
    // ------------------------------------------------------------------------- //
    function constrain(a, b, c : real) : real;
    begin

        if a > c then
            constrain := c
        else if a < b then
            constrain := b
        else
            constrain := a;

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o valor da fun��o gaussiana, sendo:                               //
    //  gaussian(x) = exp(-x * x)                                                //
    // ------------------------------------------------------------------------- //
    function gaussian(x, sigma : real) : real;
    begin

        gaussian := exp(-x * x/(2 * sigma * sigma));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o valor da fun��o log�stica, sendo [a] a constante de inclina��o: //
    //  logistics(x) = 1/(1 + exp(-x * a)                                        //
    // ------------------------------------------------------------------------- //
    function logistic(x, a : real) : real;
    begin

        logistic := 1/(1 + exp(-x * a));

    end;

    // ------------------------------------------------------------------------- //
    // Calcula o fatorial do n�mero [n]                                          //
		// ------------------------------------------------------------------------- //
    function factorial(n : integer) : integer;
		var
			i, num : integer;
			
    begin

    		num := 1;
				for i := n downto 2 do
						num := num * i;
				
       factorial := num;
       
    end;
End.