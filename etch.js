
let container=document.querySelector(".container")
let button=document.querySelector("button")
let randomColor;

console.log(randomColor)
let items;
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  console.log(rows,cols)
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  items=document.querySelectorAll(".grid-item")

  Array.from(items).map(e=>{
    e.addEventListener("mouseenter",(event)=>{
      let target=event.target
      randomColor="#" + ((1<<24)*Math.random() | 0).toString(16)
      e.style.backgroundColor=`${randomColor}`


    })
  })
};

makeRows(10,10);

button.addEventListener("click",(e)=>{
  console.log(randomColor)
  Array.from(items).map(e=>{
    e.remove()
  })

  
    

  
  let input=prompt("How many squares do you want. Example:20")
  makeRows(Number(input),Number(input))


})