let txt = document.querySelector('.text').innerText

//Task 1
//txt = txt.replace(/'/gm, '"')

//Task 2
txt = txt.replace(/(\B')/igm, '"')

document.querySelector('.text').innerText = txt
