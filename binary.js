//二进制基础
/*1： 一个数组当中，有一种数出现了奇数次，其
他数都出现了偶数次，怎么找到并打印这种数
  思想：偶数个相同的数异或运算等于0，奇数个相
    同的数运算等于该奇数，0与任何数异或运算等于该值
*/
const findOddNumber = (arr) => {
  let eor = 0;
  arr.map((ele) => {
    eor ^= ele;
  });
  return eor;
};

/*2：怎样把一个int类型的数，提取最右侧的1来
  思想：一个数取反后+1的效果等于一个数取反保留最右侧1的位置
    还是1，然后在于上原来的值，就剩最右侧的1为1，其他位置
    都为0  N&(~N+1) &为与或运算符

  案例：一个数组中有两种数出现了奇数次，其他数都出现了偶数次
    怎么找到并打印这两种数
*/
const findTowOddNumber = (arr) => {
  let eor = 0;
  arr.map((ele) => {
    eor ^= ele; // eor = a ^ b 剩余两种奇数a,b
  });
  //a和b肯定是不相等的，所以eor当中肯定有一位是1，这个1要不就是来自a的1，
  //要不来自b的1，我们假设这个1来自于a 根据上面的公式我们提取出最eor最右侧的这个1
  let rightOne = eor & (~eor + 1);
  let eorOne = 0;
  arr.map((ele) => {
    if (ele & (rightOne != 0)) {
      //如果ele与这个最右侧的1 & 运算后不等于0的话，按照上面的假设，可以确定这个数，
      //要不是a, 要不就是与改位置也为1的其他偶数个种类的数；
      eorOne ^= ele; //此时eorOne = a (根据假设)
    }
  });
  return [eorOne, eor ^ eorOne];
};

/* 3：计算出一个数的有多少个二进制位的1*/
const calBinaryCount = (num) => {
  let count = 0;
  while (num != 0) {
    const rightOne = num & (~num + 1);
    count++;
    num ^= rightOne;
  }
  return count;
};
