function foo(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a < 0 || b < 0) {
    return NaN; // Or throw an error: throw new Error('Inputs must be non-negative');
  }
  return foo(a - 1, b - 1); 
}