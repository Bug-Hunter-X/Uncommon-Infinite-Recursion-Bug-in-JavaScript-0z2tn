# Uncommon Infinite Recursion Bug in JavaScript

This repository demonstrates a subtle bug in a seemingly simple recursive function. The function `foo` aims to calculate something based on the inputs `a` and `b`, but it falls into infinite recursion under specific, uncommon conditions. 

## The Bug

The bug lies in the lack of a base case to handle negative numbers for 'a' or 'b'.  The recursive calls `foo(a - 1, b - 1)` will keep reducing the input values until the numbers become increasingly negative, never reaching a termination condition.

## Solution

The solution involves adding a condition to handle cases where either `a` or `b` is negative and return a appropriate result or throw an error.