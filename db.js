function setDb(data) {
  if (localStorage.id) {
    localStorage.id = +localStorage.id+1;
  } else {
    localStorage.setItem('id', 1);
  }
  localStorage.setItem(
    localStorage.id, 
    JSON.stringify(
    {
      eng : data.eng,
      rus : data.rus,
      img : data.img,
      addTime : data.addTime
    })
  );
}
function getDb() { 
  let ls = localStorage;
  let result = {};
  if(ls.id > 0) {
    for(let i = 1; i <= ls.id; i++) {  
      result[i] = JSON.parse(ls[i]); 
    }  
  } 
  return result;
}
function outDb() {
  let db = getDb();
  let keys = (Object.keys(db));
  let tr = '';
  for(let i = 1; i <= keys.length; i++) {
    tr += `
      <tr>
        <td>${i}</td>
        <td>
          <span class='eng'>
            ${db[i].eng}
          </span>
        </td>
        <td>
          <span class='rus'>
            ${db[i].rus}
          </span>
        </td>
        <td>${db[i].img}</td> 
        <td>${db[i].addTime}</td> 
      </tr>
    `;
  }
  let out = `
    <table>
      <tr>
        <td>id</td>
        <td>english</td>
        <td>russian</td>
        <td>image</td>
        <td>date</td>
      </tr>
      ${tr}
    </table>
  `;
  append('#tableData', out);
}