function getFibo(n) {
  function countNum(result) {
    let num = 0;
    if(result.length <= 1) {
      num = 1;
    } else if(result.length == 1) {
      num = 2;
    } else {
      num = 
        result[result.length-1]
        + 
        result[result.length-2];
    }
    return num;
  }
  function append(arr, n) {
    arr.push(n);
  }
  const result = [];
  for (var i = 0; i < n; i++) {
    append(result, countNum(result));
  }
  return result;
}
function getValue(el) {
  return el.value;
}
function getElem(el) {
  return document.querySelector(`${el}`);
}
function getElems(el) {
  return document
    .querySelectorAll(`${el}`);
}

function append(el, msg) {
  let elem = document
    .querySelector(`${el}`);
  elem.innerHTML = msg;
}
append('#logo', getFibo(12));