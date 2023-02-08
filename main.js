/* global integer*/
/* global decimal*/
  let pointMode = "integer";
function clickButton(target){
  let result = document.getElementById('result');
  let targetValue = target.innerHTML;
  let lastResultValue = result.innerHTML.slice(-1);
  let operatorResultValue = result.innerHTML.slice(-2);
  let operator = document.getElementById('operator');

  if(targetValue=="AC"){
    result.innerHTML=0;
    pointMode ="integer";
  }else if(targetValue=="="){
    result.innerHTML = digitNum(eval(result.innerHTML));
    pointMode ="integer";
  }else if(targetValue=="."){
    if(pointMode == "decimal"){
      return; 
    }else{
      if(lastResultValue=="+"|| lastResultValue=="-"||lastResultValue=="*"||lastResultValue=="/"){
        return;
      }else{
        result.innerHTML+=targetValue;
        pointMode = "decimal";
      }
    }
  }else if(targetValue=="+"||targetValue== "-"||targetValue== "*"||targetValue== "/"){
    if(lastResultValue=="+"|| lastResultValue=="-"||lastResultValue=="*"||lastResultValue=="/"||lastResultValue=="."){
      result.innerHTML=result.innerHTML.slice(0,-1)+targetValue;
    }else{
      result.innerHTML+=targetValue;
      pointMode ="integer";
    }
  }else if(targetValue== 0 ||targetValue== 00){
    if(lastResultValue=="+"|| lastResultValue=="-"||lastResultValue=="*"||lastResultValue=="/"){
      result.innerHTML+=0;
    }else if(operatorResultValue=="+0"||operatorResultValue=="-0"||operatorResultValue=="*0"||operatorResultValue=="/0"){
      return;
    }else if(pointMode == "decimal"){
      result.innerHTML+=targetValue;
    }else if(result.innerHTML==0 && targetValue== 00){
      return;
    }else{
      result.innerHTML+=targetValue;
    }
  }else{
    if(pointMode == "decimal"){
      result.innerHTML+=targetValue;
    }else if(result.innerHTML==0){
      result.innerHTML=targetValue;
    }else{
      result.innerHTML+=targetValue;
    }
  }
  function digitNum(total) {
     return Math.round(total*100000000)/100000000;
  }
 
}