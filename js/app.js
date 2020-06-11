//share url that anyone can open
const sheetUrl = 'https://docs.google.com/spreadsheets/d/19acem0qb6QWMs5OZVkp1pvfOE1b2l9pe5mmPj2hviDE/edit?usp=sharing'


//how we will pull the data as JSON (javascript object notation)
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/19acem0qb6QWMs5OZVkp1pvfOE1b2l9pe5mmPj2hviDE/od6/public/values?alt=json'


$(document).ready(function () {
for (var i = 1; i <= 13; i++) {
    var $gridDiv = $('<div/>', {
        "class": ("gridItem" + (i))
    });
    $('.gridContainer').append($gridDiv)
}
});

// $($gridDiv).each(function(i) {
//     $(this).addClass('gridItem'+(i+1));
//    });

$.ajax({
    url: sheetAsJSON
}).then((data) => {
    console.log('data', data)
    let projects = data.feed.entry.map(project => {
        return {
            title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            description: project.gsx$description.$t,
            url: project.gsx$url.$t
        }
    })// map ends
    app(projects)
})



function app(projectsArr) {
    console.log('inside app - projectsArr', projectsArr)
    projectsArr.forEach(project => {
        // //create  an h3
        // let title = $('<div>').addClass('gridItem')
        // //assign the title to the value project.title
        // title.text(project.title)
        // //append title to the body
        // $('.gridContainer').append(title)
    
        }
     )
}
