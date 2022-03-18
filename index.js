function fiboEvenSum(n) {
  let fibSeq = [1, 2];
  let currNum = 3;

  while(currNum <= n) {
    fibSeq.push(currNum)
    currNum = fibSeq[fibSeq.length - 2] + currNum;
  }

  fibSeq = fibSeq.filter((element) => {
    return element % 2 == 0;
  })

  return fibSeq.reduce((sum, element) => sum + element, 0);
}
