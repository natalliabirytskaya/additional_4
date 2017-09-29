module.exports = function multiply(first, second) {
  if ((first.length+second.length) < 19)
    return String(parseInt(first)*parseInt(second));
  else {
    let mult = 0, arrForSum = [], arrTmp = [], multTmp = 0, result = '';
    for (let i = second.length - 1; i >= 0; i--) { 
      let tmp = 0, m = 0;    
      for (let j = first.length - 1; j >= 0; j--) {
        mult = parseInt(first[j]) * parseInt(second[i]);
        mult += m;
        if (mult < 10) {
          tmp = mult;
          arrTmp = arrTmp.concat(tmp);
          m = 0;
        }      
        else {
          let str = mult.toString(10);
          tmp = str.substring(1);
          m = parseInt(str.substring(0,1));
          arrTmp = arrTmp.concat(tmp);
        }
      }
      if (m != 0) {
        arrTmp = arrTmp.concat(m);
      }
      multTmp = arrTmp.reverse().join('');
      arrForSum = arrForSum.concat(multTmp);
      arrTmp = [];      
    }
    let x = '0', k = 1;     
    for (let i = arrForSum.length-1; i >= 0; i--) {
      for (let j = 0; j < arrForSum.length - k; j++) {
        arrForSum[i] = arrForSum[i] + x;      
      }
      k++;
    }
    x = '0';
    for (let i = 0; i < arrForSum.length; i++) {
      let strTmp = arrForSum[i], len = arrForSum[arrForSum.length - 1].length;
      for (let j = arrForSum[i].length - 1; j < len; j++) {
        arrForSum[i] = x + arrForSum[i];
      }
    }
    let sum = 0, tmp = 0, n = 0;
    for (let i = arrForSum[0].length - 1; i >= 0; i--) {     
      for (let j = 0; j < arrForSum.length; j++) {
        let strTmp = arrForSum[j];
        sum += parseInt(strTmp[i]);
      }
      sum += n;
      if (sum < 10) {
        tmp = sum;
        result = result + tmp;
        n = 0;
      }      
      else {
        let str = sum.toString(10), len = str.length - 1;
        tmp = str.substring(len);
        n = parseInt(str.substring(0,len));
        result = result + tmp;
      }
      sum = 0;      
    }
    
    return result.split('').reverse().join('').replace('0','');
  }  
}
