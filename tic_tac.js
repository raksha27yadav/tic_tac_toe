var restart = document.querySelector('#b');
var squares=document.querySelectorAll("td");
alert("Welcome,click OK to continue");
function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent='';
  }
}
restart.addEventListener("click",clearBoard)


function getno(){
  if (this.textContent===''){
      this.textContent="X";

  }
  else if (this.textContent==="X") {
    this.textContent="O";

  }
  else {
    this.textContent='';
  }
};
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click",getno);
}
