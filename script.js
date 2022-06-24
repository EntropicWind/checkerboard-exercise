// Your JS goes here

var container = document.createElement('div');
container.style.width = '100%';
document.body.append(container)

var row = 1;

function randomColors(){
    var div = document.createElement('div')
    div.style.width = "11.1%";
    div.style.float = "left"
    div.style.paddingBottom = "11.1%";
    div.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    div.style.border = '1px solid black';
    container.append(div);
}
// function black(){
//     var div = document.createElement('div')
//     div.style.width = "11.1%";
//     div.style.float = "left"
//     div.style.paddingcdBottom = "11.1%";
//     div.style.background = "black";
//     div.style.border = '1px solid black';
//     container.append(div);
//    }
// 
for(let i = 0; i < 8; i++) {
 for(var j = 0; j < 8; j++) {
    if(row % 2 === 0) {
    if(j % 2 === 0) {
        randomColors();
    } else {
        randomColors();
    }
     } else {
        if(j % 2 === 0) {
            randomColors();
        } else {
            randomColors();
     }
    }
  } 
    row++;
 } 
 
// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`