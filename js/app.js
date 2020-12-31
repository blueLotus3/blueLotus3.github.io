// console.log("hello world");


/////////////////////////////////////////
//Pull and render data from google sheet
/////////////////////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1pD907D-6Bm1QTSsVk2jL2TWuzKfuDxXTkr1rMtU14pE/1/public/full?alt=json")
    .then((data) => {
      console.log(data)

// Checking My Data

   //put our projects in a variable
   const rawProjects = data.feed.entry
   //log our projects
   console.log(rawProjects)
   const projects = rawProjects.map((project) => {
       return {
           name: project.gsx$name.$t,
           img: project.gsx$img.$t,
           description: project.gsx$description.$t ,
           live: project.gsx$live.$t,
           github: project.gsx$github.$t
       }   
   })
    
   console.log(projects)

 
   for (i = 3; i < projects.length; i++) {
       const $div = $(`<sl-card class="projects">
       <img class="img" src="https://res.cloudinary.com/ds7w3ysag/image/upload/v1609451823/Troy_Lemons_r_-_Software_Engineer_m52qo1.jpg" width="200" height:"200"${projects[i].img}
       alt="Portfolio Project" <strong><h3 "projects">${projects[i].name}</h3></strong>
       <p class=description  ${projects[i].description}</p>
       <div-slot="aside">
       <sl-button class='git' href=${projects[i].github}>The Code</sl-button>
       <sl-button class='live' href=${projects[i].live}>The Project</sl-button>
       </sl-card>`
       )
       $(`#projects`).append($div)
   }
   const final = rawProjects.map((project) => {
   
   })

})

//////////////////////////////
// buttons 
//////////////////////////////
// Hamburger and side menu


const toggleMenu = () => {
    document.getElementById("side-menu").style.display = "block";

}

const closeMenu = () => {
    document.getElementById("side-menu").style.display = "none";
}






