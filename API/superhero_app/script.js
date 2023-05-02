// api token 766770265023130
const token=766770265023130
const base_url=`https:www.superheroapi.com/api.php/${token}`
const imgdiv=document.getElementById("herodiv")
const randombutton=document.getElementById("superHero")
const searchbtn=document.getElementById("searchbtn")
const input=document.getElementById("SearchBar")

const getRandomsuperhero=(id)=>{
    fetch(`${base_url}/${id}`).then(response=> response.json()).then(data=>{
        console.log(data)
        ShowsuperHero(data)
        imgdiv.innerHTML +=`<div class="col-3 me-3 mb-2 border border-danger border-2  rounded-4 w-auto bg-danger-subtle">
        <h1 >${data.name}</h1>
        <img  src="${data.image.url}" alt="img" height=300 width=300/>
         <p>🧠 INTELLIGENCE: ${data.powerstats.intelligence}</p>
         <p>💪 STRENGTH: ${data.powerstats.strength}</p>
         <p>⚡ SPEED: ${data.powerstats.speed}</p>
         <p>🏋️‍♂️ DURABILITY: ${data.powerstats.durability}</p>
         <p>📊 POWER: ${data.powerstats.power}</p>
         <p>⚔️ COMBAT: ${data.powerstats.combat}</p>
        </div>`
    })
   
}
const randomhero=()=>{
    const num_hero=731
    return Math.ceil(Math.random() * num_hero)
}

const SearchsuperHero=(name)=>{
    fetch(`${base_url}/search/${name}`).then(response=> response.json())
    .then(data=> {
        const hero=data.results[0]
        imgdiv.innerHTML +=`<div class="col-3 me-3 mb-2 border border-danger border-2  rounded-4 w-auto bg-danger-subtle
        " style="height:550px">
        <h1 >${hero.name}</h1>
        <img  src="${hero.image.url}" alt="img" height=250 width=300/>
         <p>INTELLIGENCE: ${hero.powerstats.intelligence}</p>
         <p>STRENGTH: ${hero.powerstats.strength}</p>
         <p>SPEED: ${hero.powerstats.speed}</p>
         <p>DURABILITY: ${hero.powerstats.durability}</p>
         <p>POWER: ${hero.powerstats.power}</p>
         <p>COMBAT: ${hero.powerstats.combat}</p>
        </div>`
    })
}

const ShowsuperHero = (data) =>{

}

randombutton.onclick=()=> getRandomsuperhero(randomhero())

searchbtn.onclick=()=> SearchsuperHero(input.value)