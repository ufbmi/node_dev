var storytext = {};

var storytext_en = {
	"screen1": "",
	"screen2": "Our bodies use insulin to get glucose into our cells for energy. When our bodies don’t make enough insulin, glucose can’t enter our cells and glucose builds up in the blood. As another source of energy, the body makes ketones. But too many ketones can make us sick and cause weakness, thirst, vomiting, frequent peeing, and heavy breathing.",
	"screen3": "Our friends Zach and Kara will help us see where ketones come from and what to do when we have them. Zach doesn’t have diabetes, so let’s first check out how his body works.",
	"screen4": "Zach doesn’t have diabetes. His pancreas makes insulin which allows glucose to go into the cells for energy. Insulin is like a key that unlocks the cell and lets glucose inside.",
	"screen5": "Now let’s check out what’s different in diabetes.",
	"screen6": "Kara has diabetes. Her pancreas does not make enough insulin to move glucose from her bloodstream into her cells. When glucose can’t get in, the cells feel weak and so does Kara.",
	"screen7": "",
	"screen8": "Kara’s bloodstream gets so full of glucose that her body tries to get rid of it through her kidneys. But, as the glucose passes through her kidneys, it pulls water with it. This makes Kara have to pee often. With her water being peed out all the time, Kara is very thirsty.",
	"screen9": "Because there’s not enough insulin to let glucose in, Kara’s cells are starving so her body makes another type of fuel. Her liver takes fatty acids from the body and breaks them down into fat and acids. Those acids are ketones. Kara’s body uses those ketones for emergency energy, but they can also make her sick.",
	"screen10": "The acidic ketones fill the bloodstream and make her stomach stop working right. She gets a belly ache and then starts vomiting.",
	"screen11": "Kara is very sick from all of the ketones in her body. She is drinking and peeing a lot, she feels weak and very thirsty, then she starts vomiting and breathing heavily. Kara has Diabetic Ketoacidosis (or DKA) from the acidic ketones.",
	"screen12": "",
	"screen12_checkketones": "If Kara feels any of these symptoms, even just one, she should check for ketones.",
	"screen12_call": "Kara has ketones and must call her doctor.",
	"screen12_waterinsulin": "The doctor tells Kara to drink lots of water and take insulin. Insulin stops her body from making any more ketones and water flushes the ketones out of her body. The doctor will tell her if the ketones are high enough for her to go to the hospital.",
	"screen12_better": "Hooray! Kara feels better and now has her diabetes under control.",
	"screen13": "So when should I check for ketones? I should check for ketones when I have nausea, vomiting, or belly pain; when I have several high glucose readings; or when I am sick or have a fever.",
	"screen14": "How do I check for ketones? I can use a blood ketone meter or urine dipstick to check for ketones.",
	"screen15": "What should I do when I have ketones? I should take my insulin, drink water, and call my doctor.",
};

var storytext_es = {
	"screen1": "",
	"screen2": "Nuestros cuerpos utilizan insulina para obtener la glucosa necesaria en las células para energía. Cuando nuestros cuerpos no producen suficiente insulina, la glucosa no puede entrar en las células y la glucosa se acumula en la sangre. Como otro tipo de energía, el cuerpo produce cetonas. Pero demasiadas cetonas pueden enfermarnos y causar debilidad, sed, vómitos, orinar con frecuencia, y con respiración pesada.",
	"screen3": "Nuestros amigos Zach y Kara nos ayudarán a ver dónde vienen las cetonas y qué hacer cuando las tenemos. Zach no tiene diabetes, así que vamos a primero ver cómo funciona su cuerpo.",
	"screen4": "Zach no tiene diabetes. Su páncreas produce insulina, que permite que la glucosa entre en las células para la energía. La insulina es como una llave que abre la células y deja que la glucosa entre.",
	"screen5": "Ahora vamos a ver lo que es diferente en la diabetes.",
	"screen6": "Kara tiene diabetes. Su páncreas no produce suficiente insulina para mover la glucosa de su sangre en sus células. Cuando la glucosa no puede entrar, las células se sienten débil y lo mismo ocurre con Kara.",
	"screen7": "",
	"screen8": "La sangre de Kara se pone tan llena de glucosa que el cuerpo intenta deshacerse de ella a través de sus riñones. Pero, como la glucosa pasa a través de los riñones, se trae agua con ella. Esto hace que Kara tenga que orinar frecuentemente. Con tanta orina, Kara tiene mucha sed.",
	"screen9": "Debido a que no hay suficiente insulina para que la glucosa entre las células de Kara, las células se mueren de hambre por eso su cuerpo hace otro tipo de energía. Su hígado toma ácidos grasosos del cuerpo y las descompone a grasa y ácidos. Estos ácidos son las cetonas. El cuerpo de Kara utiliza esas cetonas para la energía de emergencia, pero también puede enfermarla.",
	"screen10": "Las cetonas ácidas llenan su sangre y hacen que su estómago no funcione bien. Ella tiene un dolor de estómago y luego empieza a vomitar.",
	"screen11": "Kara está muy enferma por todas las cetonas en su cuerpo. Ella esta tomando y orinando mucho, se siente débil y tiene mucha sed, entonces ella comienza a vomitar y respirar con dificultad. Kara tiene cetoacidosis diabética (o DKA) de las cetonas ácidas.",
	"screen12": "",
	"screen12_checkketones": "Si Kara siente alguno de eso síntomas, aunque sólo sea uno, debería chequear si tiene cetonas.",
	"screen12_call": "Kara tiene cetonas y debe llamar a su doctora.",
	"screen12_waterinsulin": "La doctora le dice a Kara que tome mucha agua y tome su insulina. La insulina para su cuerpo de hacer más cetonas y el agua la limpia. La doctora dice si las cetonas están suficientemente altas para que ella vaya al hospital.",
	"screen12_better": "¡Chévere! Kara se siente mejor y ahora tiene su diabetes bajo control.",
	"screen13": "Cuando debería chequear si tengo cetonas? Debo chequear cuando tengo náuseas, vómitos o dolor de estómago; cuando tengo varias lecturas altas de glucosa; o cuando estoy enfermo o tengo fiebre.",
	"screen14": "¿Cómo chequeo por cetonas? Yo puedo usar la maquina de sangre de cetonas o una tira reactiva de orina para chequear si tengo cetonas.",
	"screen15": "¿Qué debo hacer cuando tengo cetonas? Yo debo tomar mi insulina, tomar agua y llamar a mi doctora.",
};

function change_storytext() {
	//abort for any undefined page or txt definitions from Flash.
	if (exportRoot == undefined) { return; }
	if (exportRoot.getCurrentLabel() == undefined) { return; }

	var txt = exportRoot.getCurrentLabel();
	if (storytext[txt] == undefined) { return; }

	//unique for screen12, different text within each step:
	if (exportRoot.getCurrentLabel() == "screen12") { txt = "screen12_"+exportRoot.screen12.getCurrentLabel(); }

	$('#storytxt').text(storytext[txt]);
}

function read_storytext() {
	if (exportRoot == undefined) { return; }
	if (exportRoot.getCurrentLabel() == undefined) { return; }

	var id = exportRoot.getCurrentLabel();

	//unique for screen12, different text within each step:
	if (exportRoot.getCurrentLabel() == "screen12") { id = "screen12_"+exportRoot.screen12.getCurrentLabel(); }

	sndch.stop();
	playSound(id);
}

//accepts a movieclip symbol (passed from .xfl timeline)
//has passed movieclip change its own timeline to frame label defined by LANG ("en" or "es")
function changeSymbolToLang(sym) { sym.gotoAndStop(LANG); }