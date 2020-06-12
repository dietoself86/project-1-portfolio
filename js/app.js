//share url that anyone can open
const sheetUrl = 'https://docs.google.com/spreadsheets/d/19acem0qb6QWMs5OZVkp1pvfOE1b2l9pe5mmPj2hviDE/edit?usp=sharing'


//how we will pull the data as JSON (javascript object notation)
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/19acem0qb6QWMs5OZVkp1pvfOE1b2l9pe5mmPj2hviDE/od6/public/values?alt=json'


// $(document).ready(function () {
// for (var i = 1; i <= 13; i++) {
//     var $gridDiv = $('<div>', {
//         "class": ("gridItem" + (i))
//     });
//     $('.gridContainer').append($gridDiv)
// }
// });

$.ajax({
    url: sheetAsJSON
}).then((data) => {
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
    for(let i=0; i < projectsArr.length; i++) {
        let $gridDiv = $('<div>')
            .attr('class', ` gridItem gridItem${i + 1}`)
            .css('background-image', `url('${projectsArr[i].image}')`)
            .css('background-size', 'cover')
            .css('background-position', 'center center')
        let $projectInfo = $('<div>').addClass('project-info')   
        let $projectTitle = $('<div>')
            .text(projectsArr[i].title)
            .addClass('project-title');
        let $projectDescription = $('<div>')
            .text(projectsArr[i].description)
            .addClass('project-description')
        let $button = $('<input>')
            .attr('type', 'button')
            .attr('onClick', `parent.open('${projectsArr[i].url}')`)
            .attr('id', 'project-button')
            .attr('value', 'View Project')
        
        $('.gridContainer').append($gridDiv)
        $gridDiv.append($projectInfo)
        $projectInfo.append($projectTitle,$projectDescription, $button)
        }
}


const $navButton = $('.toggle')
const $nav = $('nav')




$navButton.on('click', () => {
    $nav.toggleClass('open')
})