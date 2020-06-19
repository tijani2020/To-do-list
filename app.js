const inputbox = document.getElementById('inputbox')
const insert = document.getElementById('insert')
const listItems = document.getElementById('list-items')

inputbox.addEventListener('submit', ev => {
   
    const newItem = document.createElement('li')
    newItem.setAttribute("class","items")
    newItem.textContent = insert.value
    listItems.appendChild(newItem)

    const deletButtons = document.createElement('button') 
    deletButtons.setAttribute("class","delets")
    deletButtons.textContent = 'Delet'
    newItem.appendChild(deletButtons)

    deletButtons.addEventListener('click',function (e) {
      
        newItem.remove()
                  
    })
    

    insert.value = ""

    ev.preventDefault()
})


const clear = document.getElementById('clear') 
clear.addEventListener('click', event => listItems.remove())