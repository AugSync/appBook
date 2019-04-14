var menu = document.getElementById('menu')
var titleName = document.getElementById('title')
var $peliContainer = document.getElementById('containerGrid')

function showMenu() {
    'use strict'
    menu.classList.toggle('itemb-show')
}

window.onload = showTitle;
getData('http://www.etnassoft.com/api/v1/get/?last_week&num_items=25&lang=spanish&callback=processData');

function showTitle() {
    titleName.classList.add('animationName');
}

function getData(url) {

    // Set the url to the web service API from where  
    // the data to be retrieve 

    // Create the script element dynamically through JavaScript  
    var scriptElement = document.createElement("script");

    // Set the src and id attributes of the script element 
    scriptElement.setAttribute("src", url);
    scriptElement.setAttribute("id", "jsonp");
    var oldScriptElement = document.getElementById("jsonp");

    // Get the head element 
    var head = document.getElementsByTagName("head")[0];
    if (oldScriptElement == null) {
        debugger

        /* If there is no script element then append 
        a new element to the head. */
        head.appendChild(scriptElement);
    } else {
        debugger

        /* If there is already a element in the head,  
        then replace it with the new script element. */
        head.replaceChild(scriptElement, oldScriptElement);
    }
    async function processData(myObj) {
        const API = await myObj;
        return API;
    }
}
async function processData(myObj) {
    var peliList = await myObj;
    console.log(peliList)
    renderMovieList(peliList, $peliContainer);
}

function renderMovieList(list, $container) {
    $container.children[0].remove();
    list.forEach((movie) => {
        const HTMLString = videoItemTemplate(movie);
        const movieElement = createTemplate(HTMLString);
        $container.append(movieElement);
        const image = movieElement.querySelector('img');
        image.addEventListener('load', (event) => {
            event.srcElement.classList.add('imgShow');
        })
    })
}

function videoItemTemplate(movie) {
    return (
        `<div class="peliculasPrev">
                    <img src="${movie.thumbnail}" alt="" class="imgHidde">
                    <div class="text">
                        <h4>${movie.title}</h4>
                    </div>
                </div>`
    )
}

function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
}
