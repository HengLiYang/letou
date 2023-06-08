// 随机生成1-30不重复的5个整数
function generateRandomNumbers() {
  let numbers = [];
  while (numbers.length < 5) {
    let num = Math.floor(Math.random() * 30) + 1;
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
  return odds.length === 3 && evens.length === 2;
}

// 检查大于18的数字数量
function checkGreaterThan18(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 18) {
      count++;
    }
  }
  return count === 2;
}

// 检查是否存在小于等于18的数字满足条件
function checkNumberCondition(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let num1 = numbers[i];
    if (num1 <= 18) {
      for (let j = 0; j < numbers.length; j++) {
        let num2 = numbers[j];
        if (num2 <= 18 && num1 !== num2 && num1 + 1 === num2) {
          return true;
        }
      }
    }
  }
  return false;
}

// 生成符合要求的5个整数
export function generateRedNumbers() {
  let numbers = generateRandomNumbers();
  while (
    !checkOddEvenRatio(numbers) ||
    !checkGreaterThan18(numbers) ||
    !checkNumberCondition(numbers)
  ) {
    numbers = generateRandomNumbers();
  }
  return numbers;
}
