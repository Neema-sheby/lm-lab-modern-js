// Instructions can be found in rest_parameters.md

export function add(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
