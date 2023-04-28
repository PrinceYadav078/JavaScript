function gen_cat(){
    var div=document.createElement("div")
    var img=document.createElement("img")
    img.setAttribute("src","https://cdn.wallpapersafari.com/45/86/EnDIum.jpg")
    img.setAttribute("class","img-fluid ")
    div.setAttribute("class","col-4")
    div.appendChild(img)
    document.querySelector(".row").appendChild(div)

}