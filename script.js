$(document).ready(function(){
    console.log("Let’s get ready to party with jQuery!");
})
$("img").addClass("image-holder");
$("p").last().remove();
$('#title').css("font-size",`${Math.floor(Math.random()*100)}px`);
let list = $("ol");
let newItem=  document.createElement("li");
newItem.innerHTML = "This is new";
list.append(newItem);
list.replaceWith("<p>sorry this exists</p>");
let red = $("input").get(0);
let blue = $("input").get(1);
let green = $("input").get(2);
function changecolor(){
    $("body").css("background-color", `rgb(${red.value},${green.value},${blue.value})`);
    return `rgb(${red.value},${green.value},${blue.value})`;
}
red.addEventListener('input',changecolor);
blue.addEventListener('input',changecolor);
green.addEventListener('input',changecolor);
let image = $("img").get(0);
image.addEventListener('click',function(evt){
    evt.target.remove()});
