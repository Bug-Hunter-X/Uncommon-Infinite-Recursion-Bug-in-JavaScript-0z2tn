function foo(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return foo(a - 1, b - 1); 
}