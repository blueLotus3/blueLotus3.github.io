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
})