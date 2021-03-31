var elEncabezado = document.querySelector("header");
var date = new Date();
const laHora = date.getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
var elSaludo;
const weekDay = date.getDay()
console.log(weekDay);
var daysRemaining;
if (0 < weekDay && weekDay < 5) {
  daysRemaining = `, Quedan ${5 - weekDay} para el viernes!`
} else if (weekDay === 5) {
  daysRemaining = ", Es viernes!"
} else if (weekDay == 6) {
  daysRemaining = ", Quedan 6 días para el viernes!"
} else {
  daysRemaining = ", Quedan 5 días para el viernes!"
}

if (5 < laHora && laHora < 12) {
    elSaludo = "Buenos días" + daysRemaining;
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Buenas tardes" + daysRemaining;
} else {
    elSaludo = "Buenas noches" + daysRemaining;
}
var elColor;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background(200);
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function portada() {
    createSpan(" Estás en index.html").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#000000");
}

function pagina() {
    createSpan(" Estás en page.html").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#000000");
}