export function fizzBuzz(num: number): number | string {
  let outCome: number | string;
  if (num % 3 == 0 && num % 5 == 0) {
    outCome = "FizzBuzz";
  } else if (num % 3 == 0) {
    outCome = "Fizz";
  } else if (num % 5 == 0) {
    outCome = "Buzz";
  } else {
    outCome = num;
  }
  return outCome;
}
