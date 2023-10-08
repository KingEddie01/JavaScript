let left_operand = 20;
let right_operand = 10;
let operator = '+';
let ans;

switch (operator) {
  case '+':
    ans = left_operand + right_operand;
    break;
  case '-':
    ans = left_operand - right_operand;
    break;
  case '*':
    ans = left_operand * right_operand;
    break;
  case '/':
    ans = left_operand / right_operand;
    if ( left_operand === 0) {
      ans = 0;
    }
  default:
    ans = NaN;
    break;
}


console.log(ans)      

    


