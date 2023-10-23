const imgTags = document.querySelectorAll("img");
imgTags.forEach(img => {
    img.addEventListener("error", () => {
        img.src = "default-avatar.png";
    });
    img.addEventListener("mouseover", () => {
       // alert("Hover over img-Tag")
    })
}, true);

const pTag = document.querySelectorAll("p");
pTag.addEventListener("mouseover", () => {
    //alert("Hover over p-Tag")
    const nestdImgTag =pTag.querySelector("img");
    nest
}, true);
function handleMOuseOver(){
    alert("Hover over the img")
}
function hanleFormSubmission(event){
    event.preventDefault();
    const inputValue = document.querySelector("#fname").value;
    console.log(`Hello and welcome, ${inputValue}`);
    //console.log(`Hello and welcome, ${inputValue.value}`);

    //alert(`Hello n welcome,${inputValue}`);
    console.table(event);

}
// the chiled first mouse hover done because buble case