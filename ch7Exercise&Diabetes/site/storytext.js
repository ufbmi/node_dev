var storytext = {};

var storytext_en = {
	"screen1": "",
	"screen2": "Our heart and blood vessels keep blood flowing through our bodies. That's hard work! Press the button to see how exercise helps Kara's heart! High glucose can damage our heart and blood vessels, but exercise makes our heart and blood vessels strong. When the heart is strong, it doesn't get tired as easily. When our blood vessels are strong, they keep our blood moving along!",
	"screen3": "Exercising over time will build strong muscles and decrease fat. Fat makes it hard for insulin to work. When we have less fat and strong muscle tissue, we need less insulin because it works stronger and faster. The more we exercise, the better insulin can do its job!",
	"screen4": "When we exercise, our body produces hormones that actually make us happy! When these hormones increase in our bodies, we feel good!",
	"screen5": "Exercise is essential to help maintain the health of our bodies when we have diabetes. Exercise also makes us feel awesome!"
};

var storytext_es = {
	"screen1": "",
	"screen2": "Nuestro corazón y vasos sanguíneos controlan la circulación de la sangre en nuestros cuerpos. ¡Es un trabajo duro! Oprima el botón para ver como el ejercicio ayuda el corazón de Kara. Glucosa alta puede dañar nuestro corazón y vasos sanguíneos, pero ejercicio los hacen más fuerte. Cuando el corazón es fuerte, no se pone débil ni cansado. ¡Cuando nuestros vasos sanguíneos están fuerte, la sangre sigue fluyendo por nuestros cuerpos!",
	"screen3": "Ejercitando con el paso del tiempo construye músculos fuertes y reduce grasa. La grasa hace mas difícil para que la insulina trabaje. Cuando tenemos menos grasa y fuerte tejidos de músculos, necesitamos menos insulina porque la insulina trabaja mas fuerte y más rápido. Con mas ejercicio, mejor trabaja la insulina.",
	"screen4": "¡Cuando hacemos ejercicio, nuestro cuerpo produce hormonas que realmente nos hace feliz! ¡Cuando estas hormonas aumentan en nuestros cuerpos, nos sentimos muy bien!",
	"screen5": "Ejercicio ayuda a mantener la salud de nuestro cuerpo cuando tenemos diabetes. ¡Ejercicio también nos hace sentir muy chévere!"
};

function change_storytext(custom) {
	//abort for any undefined page or txt definitions from Flash
	if (exportRoot == undefined) { return; }
	if (exportRoot.getCurrentLabel() == undefined) { return; }

	var txt = exportRoot.getCurrentLabel();

	if (custom) { txt = custom; }

	if (storytext[txt] == undefined) { return; }

	$('#storytxt').text(storytext[txt]);
}

function read_storytext(custom) {
	if (exportRoot == undefined) { return; }
	if (exportRoot.getCurrentLabel() == undefined) { return; }

	var id = exportRoot.getCurrentLabel();

	if (custom) { id = custom; }

	sndch.stop();
	playSound(id);
}

//accepts a movieclip symbol (passed from .xfl timeline)
//has passed movieclip change its own timeline to frame label defined by LANG ("en" or "es")
function changeSymbolToLang(sym) { sym.gotoAndStop(LANG); }
