var menu=document.getElementById("menu"),titleName=document.getElementById("title"),$peliContainer=document.getElementById("containerGrid");function showMenu(){"use strict";menu.classList.toggle("itemb-show")}function showTitle(){titleName.classList.add("animationName")}function getData(e){var t=document.createElement("script");t.setAttribute("src",e),t.setAttribute("id","jsonp");var n=document.getElementById("jsonp"),i=document.getElementsByTagName("head")[0];null==n?i.appendChild(t):i.replaceChild(t,n)}async function processData(e){var t=await e;console.log(t),renderMovieList(t,$peliContainer)}function renderMovieList(e,t){t.children[0].remove(),e.forEach(e=>{const n=createTemplate(videoItemTemplate(e));t.append(n),n.querySelector("img").addEventListener("load",e=>{e.srcElement.classList.add("imgShow")})})}function videoItemTemplate(e){return`<div class="peliculasPrev">\n                    <img src="${e.thumbnail}" alt="" class="imgHidde">\n                    <div class="text">\n                        <h4>${e.title}</h4>\n                    </div>\n                </div>`}function createTemplate(e){const t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,t.body.children[0]}window.onload=showTitle;