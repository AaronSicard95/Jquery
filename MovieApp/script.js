const myForm = $("#ratingForm").get(0);
const newName = $("#movieName").get(0);
const rate = $("#movieRate").get(0);
const theList = $("#rateHolder").get(0);
const button = $("#removeButton").get(0);
myForm.addEventListener('submit',function(evt){
    console.log("event");
    evt.preventDefault();
    let newli = document.createElement("li");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `${newName.value} --- ${rate.value}`;
    newli.append(newDiv);
    $("ul").append(newli);
})
rate.addEventListener('input',function(evt){
    if(evt.target.value > 10){
        evt.target.value = 10;
    } else if(evt.target.value<0){
        evt.target.value = 0;
    }
})
button.addEventListener('click',function(){
    while(theList.firstChild){
        theList.removeChild(theList.lastChild);
    }
})