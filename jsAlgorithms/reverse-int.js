function reverseInt(num){
	let sign = Math.sign(num);
  //return sign
  if(sign === -1){
  	num = -1 * num;
  }
  let str = num.toString();
  let rev = str.split('').reverse().join('');
  //return rev;
  return parseInt((sign === -1 ? -1 : 1) * rev);
}

reverseInt(-1008)