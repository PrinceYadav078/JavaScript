const dogimgdiv = document.querySelector(".dogdiv");
const dogbtn = document.getElementById("dogbtn");

const getnewdog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dogimgdiv.innerHTML = `<img src="${data.message}" alt="dogimg" height=300 width=300 />`;
    });
};

dogbtn.onclick = ()=> getnewdog()