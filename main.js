
//Seleciona os elementos pai e filho.
const elements = document.querySelectorAll('.card p')
//Define um limite de caractéres.
const LIMIT = 100
//Para cada elemento P dentro do elemento pai (.card).
for (let p of elements){
    //Cria uma variável do tipo boolean, para sabermos se o conteúdo de P está acima do limite.
    const aboveLimit = p.innerText.length > LIMIT;
    //Cria uma variável que recebe reticências se a variável de cima for true e vazio caso seja false.
    const dotsOrEmpty = aboveLimit ? '...' : '';
    //Concatena o conteúdo do P com as reticências caso ele passe do limite definido.
    p.innerText = p.innerText.substring(0,LIMIT) + dotsOrEmpty;
}

const cards = document.querySelectorAll('.card')
const dropZones = document.querySelectorAll('.cards')


cards.forEach(card =>{
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag',drag)
    card.addEventListener('dragend',dragend)
})

function dragstart(){
    cards.forEach(card => card.classList.add('highlight'))

    this.classList.add('is_dragging')
}

function drag(){
   
}

function dragend(){
    //This = card
    cards.forEach(card => card.classList.remove('highlight'))

    this.classList.remove('is_dragging')
}


dropZones.forEach(dropzone =>{
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('dragdrop', dragdrop)
})

function dragenter(){
}

function dragover(){

    //This = dragzone
    this.classList.add('is_dragging_over')
    
    const cardBeingDragged = document.querySelector('.is_dragging')

    this.appendChild(cardBeingDragged)
}

function dragleave(){
    this.classList.remove('is_dragging_over')
}

function dragdrop(){
    this.classList.remove('is_dragging_over')
}