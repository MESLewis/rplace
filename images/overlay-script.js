// ==UserScript==
// @name         NW Alliance Template
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description
// @author       oralekin + odgrim + MESLewis
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/MESLewis/rplace/main/images/combined-overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 500px;height: 500px;";
            console.log(i);
            return i;
        })())

    }, false);

}