// 单链表与双链表的结构实现,一般我们链表都会有一个头部，供我们初始化；

//首先需要定义链表内node的数据结构
const Node = function (value) {
  this.value = value;
  this.pre = null;
  this.next = null;
};
const three = {
  value: 3,
  next: null,
};
const tow = {
  value: 2,
  next: three,
};
const one = {
  value: 1,
  pre: null,
  next: tow,
};
tow.pre = one;
three.pre = tow;

//翻转单链表 函数根据老头部将链表翻转后，返回新头部
const reverse = function (head) {
  let pre = null;
  let next = null;
  while (head != null) {
    next = head.next; //将当前node的next记录下来
    head.next = pre; //将当前node的next赋值为上一个node
    pre = head; //将当前的head保存为pre，供下一个node使用
    head = next; //将head赋值为next，继续下一个while
  }
  return pre;
};

//翻转双向链表,返回新头部
const dobReverse = function (head) {
  let pre = null;
  let next = null;
  while (head != null) {
    next = head.next;
    head.next = pre;
    head.pre = next;
    pre = head;
    head = next;
  }
  return pre;
};

console.log(dobReverse(one));
console.log(one, tow, three);

//删除指定value的node返回新链表的head
const delNpde = function (head, value) {
  while (!head) {
    if (head.value === value) {
      head = head.next;
    } else {
      break;
    }
  }
  //这是后pre是第一个不需要删除的位置
  const pre = head;
  let cur = head;
  //利用cur进行node的遍历，使用pre记录最近的一个不等于value的node
  while (!cur) {
    if (cur.value == value) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }
  return head;
};
