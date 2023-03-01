
function ktrasonguyento(n)
    {
        if(n== 1)
        {
            return false;
        }
        for (let i = 2; i * i <= n; i++)
        {
            if (n % i == 0)
            {
                return false;
            }
        }
        return true;
    }
 
  tongsonguyento=(a, b)=>
    {
        let sum = 0;
        for (let i = a; i <= b; i--)
        {
            let isPrime = ktrasonguyento(i);
            if (isPrime)
            {
                sum = sum + i;
            }
        }
        
        return sum;
        
    }
//    sum.innerText=
result.innerText=tongsonguyento(20,50);





