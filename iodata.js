function toggleLangVisible() {
  let flag = 
    getElem('#selectLang').value;
  let elemsHide = getElems(`.${flag}`);
  let elemsShow = 
    (flag == 'rus') ? 'eng' : 'rus';
  elemsShow = getElems(`.${elemsShow}`);
  if(flag == 'eng') {
    elemsHide.forEach(i=>{
      i.style.display = 'none';
    });
    elemsShow.forEach(i=>{
      i.style.display = 'block';
    });
  }
  if(flag == 'rus') {
    elemsHide.forEach(i=>{
      i.style.display = 'none';
    });
    elemsShow.forEach(i=>{
      i.style.display = 'block';
    });
  }
} 

outDb(); 
toggleLangVisible();

getElem('#selectLang') 
  .addEventListener('change', (e)=> {
    toggleLangVisible();
  });
// getElem('#btn-clear')
//   .addEventListener('click', ()=> {
//     localStorage.clear();
//   });
getElem('#clearInputEng')
  .addEventListener('click', (e)=> {
    e.preventDefault();
    getElem('#eng').value = '';
  });
getElem('#clearInputRus')
  .addEventListener('click', ()=> {
    getElem('#rus').value = '';
  });
getElem('#clearInputImg')
  .addEventListener('click', ()=> {
    getElem('#img').value = '';
  });
getElem('#btn-add')
  .addEventListener('click', ()=> {
    let eng = getValue(getElem('#eng'));
    let rus = getValue(getElem('#rus'));
    let img = getValue(getElem('#img'));
    let addTime = new Date().getTime();
    if(eng && rus) {
      setDb({eng,rus,img,addTime});
      outDb();
    }
  });