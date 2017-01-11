function getFirstSelector(selector){

  return document.getElementById('app').querySelector(selector);
}

function nestedTarget(){

  return document.getElementById('app').querySelector('#nested div div div div.target');
}

function deepestChild(){

  return document.getElementById('app').querySelector('#grand-node div div div div');
}

function increaseRankBy(n){

  const lis =document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i =0;i<lis.length;i++){
   lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}

