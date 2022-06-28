
const content = document.querySelector(".content")
const write_date = document.querySelector(".write-date")
const write_todo = document.querySelector(".write-todo")
const input_btn = document.querySelector(".input_btn")
input_btn.addEventListener("click",onAdd)


function onAdd() {
let dateValue = write_date.value
let todoValue = write_todo.value

let item_list_data = creatlist(dateValue,todoValue)

content.appendChild(item_list_data)

write_date.value = ""
write_todo.value = ""
write_date.focus()
}

function creatlist(a,b) {

  const list = document.createElement("div")
  list.setAttribute("class","item-list")

  const date = document.createElement("div");
  date.setAttribute('class','date');

  const strong_date = document.createElement('strong');
  strong_date.innerHTML = a

  const item = document.createElement('div')
  item.setAttribute('class','item')
  item.innerHTML = b

  const icon = document.createElement("div")
  icon.setAttribute('class','icon')

  const icon_check = document.createElement('div')
  icon_check.setAttribute('class','icon check')
  icon_check.innerHTML = `<i class="fa-solid fa-check"></i>`
  icon_check.addEventListener('click',()=>{
    
    if(item.style.textDecoration === 'line-through')
    {
      item.style.textDecoration = 'none'
      item.style.color = 'black'
    }
    else
    {
    item.style.textDecoration = 'line-through'
    item.style.color = 'red'
  }
  })

  const icon_delete = document.createElement('div')
  icon_delete.setAttribute('class','icon delete')
  icon_delete.innerHTML = `</i><i class="fa-solid fa-eraser"></i>`
  icon_delete.addEventListener("click",() => {
    content.removeChild(list)
  })


  date.appendChild(strong_date)
  icon.appendChild(icon_check)
  icon.appendChild(icon_delete)
  list.appendChild(date)
  list.appendChild(item)
  list.appendChild(icon)

  return list
}

write_todo.addEventListener("keypress",event => {
  if(event.code === "Enter")
  {
    onAdd()
  }
})
