// 生成1-10不重复的2个整数
function generateRandomNumbers() {
  let numbers = [];
  while (numbers.length < 2) {
    let num = Math.floor(Math.random() * 10) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

// 检查奇偶比例
function checkOddEvenRatio(numbers) {
  let odds = numbers.filter((num) => num % 2 === 1);
  let evens = numbers.filter((num) => num % 2 === 0);
  return odds.length === 1 && evens.length === 1;
}

// 检查某个数加1不等于另一个数
function checkNumberCondition(numbers) {
  return Math.abs(numbers[0] - numbers[1]) !== 1;
}

// 生成符合要求的2个整数
export function generateBlueNumbers() {
  let numbers = generateRandomNumbers();
  while (!checkOddEvenRatio(numbers) || !checkNumberCondition(numbers)) {
    numbers = generateRandomNumbers();
  }
  return numbers;
}
