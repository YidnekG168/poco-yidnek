  const people = [
    { 
        name: "Melike", 
        age: 25,
        eyeColor: "blue",
        hobby: "Playing guitar",
        imageUrl: "./image/Melike.JPG"
     },
     { 
        name: "Chaewon", 
        age: 30,
        eyeColor: "blue",
        hobby: "Theater",
        imageUrl: "./image/Chaewon2.jpg"
     }, 
     { 
        name: "Kadir", 
        age: 35,
        eyeColor: "blue",
        hobby: "Cooking",
        imageUrl: "./image/kadirozturkfoto2.jpeg"
     }, 
     { 
        name: "Vladmir", 
        age: 40,
        eyeColor: "blue",
        hobby: "Reading",
        imageUrl: "./image/Vladimir.jpg"
     }, 
     { 
        name: "Olena", 
        age: 30,
        eyeColor: "blue",
        hobby: "Coding",
        imageUrl: "./image/Olena.jpg"
     }, 
     { 
        name: "Sema", 
        age: 40,
        eyeColor: "blue",
        hobby: "Reading",
        imageUrl: "./image/SemaIstek.jpg"
     }, 
    ];

  const profilesContainer = document.getElementById("profiles");

  function generateProfiles() {
    people.forEach(person => {
      const profile = document.createElement("div");
      profile.className = "profile";
        /* Also we can provide additional options to make the customized element. This returned element is just equivalent to what we write in the HTML file. */
      const image = document.createElement("img");
      image.src = "https://www.digitalmarmalade.co.uk/people/5/industry-image";
      image.alt = person.name;
      profile.appendChild(image);

      const details = document.createElement("div");
      details.className = "details";
      details.innerHTML = `<p>Name: ${person.name}</p><p>Age: ${person.age}</p><p>Eye Color: ${person.eyeColor}</p><p>Hobby: ${person.hobby}</p>`;
      profile.appendChild(details);
      
        /* The JavaScript addEventListener() method allows you to set up functions to be called when a specified event happens, such as when a user clicks a button. */
      profile.addEventListener("mouseover", () => {
        image.src = person.imageUrl; 
      });
      
      /* profile.addEventListener("mouseover", () => {
        image.src = "https://www.digitalmarmalade.co.uk/people/5/industry-image"; 
      }); */

      profile.addEventListener("click", () => {
        details.style.display = details.style.display === "none" ? "block" : "none";
      });
      
      profilesContainer.appendChild(profile);
    });
}
  
generateProfiles();
