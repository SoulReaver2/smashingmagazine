let trigger = document.getElementById("main_button");
let secondMenu = document.getElementById("main-nav__secondary");
//console.log(trigger);
trigger.onclick = function (event) {
  trigger.classList.toggle("js-active");
  secondMenu.classList.toggle("is-active");
  //console.log(event);
};

let form = document.getElementById("js-search-form");

// create an ajax based search form using google search api
/*
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let search = form.value;
  console.log(search);
  // fetch an ajax search with google
  let url = `https://www.google.com/search?q=${search}`;
  console.log(url);
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      let parser = new DOMParser();
      let doc = parser.parseFromString(data, "text/html");
    });
});
*/
