// function sumConsecutives(s) {
//     var sum = 0,
//     sums = [];
//     for( var i = 0; i < s.length; i++){
//       sum += s[i];
//       if(s[i] != s[i+1]){
//         sums.push(sum);
//         sum = 0;
//       }
//     }
//     return sums;
// }
// console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));
 
  
  
let func = (n1,n2,sum)=>{
  if(sum==='multiply'){
    return n1*n2
  }else if(sum==='add'){
    return n1+n2 
  }else if(sum==='subtract'){
    return n1-n2 
  }else if(sum==='divide'){
    return n1/n2 
  }
}
console.log(func('1','2','multiply'));
