# FibonacciAPI
API Rest - Fibonacci
At first I created my server in index.js which is listening in port 3000.
This program runs using "npm run dev" on terminal.
I created the route: http://localhost:3000/api/fibonacci There we can get the last value calculated.
In fibonacci.js I have the function which calculates the sum of each number, depends the given number. 
Also I have the get method and post method. Using get we can read the last result and using post we can 
send the number, in this case the index, and there are two options:
 1. We can see the result when we send the index.
 2. We can see the result using get method only. (That's the reason there is one commented line)
 Fibonacci function has conditions and recursion.
