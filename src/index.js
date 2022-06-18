let addToy = false;
let like=0;
const toyInfo={}

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetchAndysToys()
});

function getOneToy(toys){
  let collectionOfToys=document.getElementById('toy-collection')
  let cardsOfToy=document.createElement('div')

  cardsOfToy.className ='card'
  cardsOfToy.innerHTML=`
  <h2>${toys.name}</h2>
  <img src="[toy_image_url]" class="toy-avatar" />
  <p>4 likes</p>
  <button class="like-btn" id="[toy_id]" >Like ❤️</button>
`
collectionOfToys.appendChild(cardsOfToy)
strikeToys(toys)

}

function fetchToys(toys){
  fetch(' http://localhost:3000/toys')
  .then(resp =>resp.json())
  then(toyData =>toyData.forEach(toys =>getOneToy(toys)))
}


 document.querySelector("form").addEventListener('submit',(e) =>{
  e.preventDefault()
  let nameOfToy=document.querySelector("input-text").value
  let imageOfToy = document.querySelector("inputText").value
  toyInfo.name = nameOfToy
  toyInfo.image = imageOfToy
  toyInfo.likes = like


  fetch(" http://localhost:3000/toys"),{
    method : "POST",
    headers:{
      "content-type":"application/json",
      Accept: "applicaton/json"
    },
    body:JSON.stringify(toyInfo)
  }

})



function strikeToys(toys){
  let add = document.getElementById(`${toys.id}`)
  let addLike = toys.likes
  console.log(add)

  add.addEventListener('click',(e)=>{
    e.preventDefault()

    let countLike = addLike + 1

    fetch(`http://localhost:3000/toys/${toys.id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json",
        Accept: "applicaton/json"
      },
      body:JSON.stringify({
        "likes": addLike

    })

  })
})

}
