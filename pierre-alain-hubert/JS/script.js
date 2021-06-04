var ctrls = video.controls;
audio.controls = true;

function myFunction() {
                var x = document.getElementById("navbar");
                var icon = document.getElementById("icon");
                var nav = document.querySelector(".navigation")

                if (x.className === "d-flex align-items-center") {
                    x.className += " responsive flex-column";
                    icon.className += " mt-4 position-absolute ml-5";
                    nav.className += " justify-content-center";

                } else {
                    x.className = "d-flex align-items-center";
                    icon.className ="icon h2 mt-md-4 mt-0 mr-5 d-none-for-desktop";
                    nav.className ="navigation row justify-content-end";
                }
            };




function textDisplayedFm() {
  var t = document.getElementById("text-none");
  var src = document.querySelector(".boutonup");

  if (t.className === 'text-lg-left text-md-left text-justify lead px-2 description p-for-mobile'){
    t.className = 'text-lg-left text-md-left text-justify lead px-2 description p-for-mobile d-block';
      src.setAttribute("src", "img/minus-line.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead px-2 description p-for-mobile d-block" ) {
    t.className = 'text-lg-left text-md-left text-justify lead px-2 description p-for-mobile';
      src.setAttribute("src", "img/plus.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead px-2 description p-for-mobile d-none") {
  t.className ="text-lg-left text-md-left text-justify lead px-2 description p-for-mobile d-block";
    src.setAttribute("src", "img/minus-line.svg");
}
}


function textDisplayedJdf() {
  var t = document.getElementById("text-none-jdf");
  var src = document.querySelector(".boutonup-jdf");

  if (t.className === 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile'){
    t.className = 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block';
      src.setAttribute("src", "img/minus-line.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block" ) {
    t.className = 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile';
      src.setAttribute("src", "img/plus.svg");

} else if (t.className === "lead p-2 description p-for-mobile d-none") {
  t.className ="lead p-2 description p-for-mobile d-block";
    src.setAttribute("src", "img/minus-line.svg");
}
}

function textDisplayedEse() {
  var t = document.getElementById("text-none-ese");
  var src = document.querySelector(".boutonup-ese");

  if (t.className === 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile'){
    t.className = 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block';
      src.setAttribute("src", "img/minus-line.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block" ) {
    t.className = 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile';
      src.setAttribute("src", "img/plus.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-none") {
  t.className ="text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block";
    src.setAttribute("src", "img/minus-line.svg");
}
}

function textDisplayedFdj() {
  var t = document.getElementById("text-none-fdj");
  var src = document.querySelector(".boutonup-fdj");

  if (t.className === 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile'){
    t.className = 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block';
      src.setAttribute("src", "img/minus-line.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block" ) {
    t.className = 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile';
      src.setAttribute("src", "img/plus.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-none") {
  t.className ="text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block";
    src.setAttribute("src", "img/minus-line.svg");
}
}
// Function for btn tablet and mobile //

function textDisplayedFmForTablet() {
  var t = document.getElementById("text-none");
  var src = document.querySelector("#btn-fm-tablet");

  if (t.className === 'text-lg-left text-md-left text-justify lead px-2 description p-for-mobile') {
    t.className = "text-lg-left text-md-left text-justify lead px-2 description p-for-mobile d-block";


} else if (t.className === "text-lg-left text-md-left text-justify lead px-2 description p-for-mobile d-block" ) {
    t.className = 'text-lg-left text-md-left text-justify lead px-2 description p-for-mobile';
      // src.setAttribute("src", "img/plus.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead px-2 description p-for-mobile d-none") {
  t.className ="text-lg-left text-md-left text-justify lead px-2 description p-for-mobile d-block";
    // src.setAttribute("src", "img/minus-line.svg");
}
}


function textDisplayedJdfForTablet() {
  var t = document.getElementById("text-none-jdf");
  var src = document.querySelector("#btn-jdf-tabmob");

  if (t.className === 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile') {
    t.className = "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block";

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block" ) {
    t.className = 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile';
      // src.setAttribute("src", "img/plus.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-none") {
  t.className ="text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block";
    // src.setAttribute("src", "img/minus-line.svg");
}
}

function textDisplayedEseForTablet() {
  var t = document.getElementById("text-none-ese");
  var src = document.querySelector("#btn-ese-tablet");

  if (t.className === 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile') {
    t.className = "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block";


} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block" ) {
    t.className = 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile';
      // src.setAttribute("src", "img/plus.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-none") {
  t.className ="text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block";
    // src.setAttribute("src", "img/minus-line.svg");
}
}

function textDisplayedFdjForTablet() {
  var t = document.getElementById("text-none-fdj");
  var src = document.querySelector("#btn-fdj-tablet");

  if (t.className === 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile') {
    t.className = "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block";

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block" ) {
    t.className = 'text-lg-left text-md-left text-justify lead p-2 description p-for-mobile';
      // src.setAttribute("src", "img/plus.svg");

} else if (t.className === "text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-none") {
  t.className ="text-lg-left text-md-left text-justify lead p-2 description p-for-mobile d-block";
    // src.setAttribute("src", "img/minus-line.svg");
}
}


// Retourne... rien !
function rien()
{
    return false;
}

// Remplace l'événement "oncontextmenu" (typiquement un clic droit) sur toutes les balises IMG de la page
function deleteRightClick()
{
    var imgs = document.getElementsByTagName("img");
    for(var i=0; i<imgs.length; i++)
        imgs[i].oncontextmenu = rien;
}
