var canvas, stage, exportRoot;
var LANG = 'en';

var urlParams = {};

function forceES() {
	LANG = 'es';
	init();
}

function init() {
	createjs.Ticker.setFPS(30);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

	storytext = (LANG == 'en') ? storytext_en : storytext_es;

	$(window).resize(resizeCanvasLocal);
	resizeCanvasLocal();

	window.addEventListener("orientationchange", function(){setTimeout(resizeCanvasLocal, 100);}, false);

	createjs.MotionGuidePlugin.install();

	canvas = document.getElementById("canvas");
	images = images || {};
	sounds = [];

	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	createjs.Sound.alternateExtensions = ["ogg"];
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", loadSounds);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) { if (evt.item.type == "image") { images[evt.item.id] = evt.result; } }

function loadSounds() {
	sndch = createjs.Sound; //narration
	sndch_fx = createjs.Sound; //sfx

	sndQ = new createjs.LoadQueue(false);

	sndQ.addEventListener("complete", sndQ_handleComplete);
	sndQ.addEventListener("fileload", sndQ_handleFileLoad);

	//narration audio
	createjs.Sound.registerSound("snd_"+LANG+"/screen1.mp3", "screen1");
	createjs.Sound.registerSound("snd_"+LANG+"/screen2.mp3", "screen2");
	createjs.Sound.registerSound("snd_"+LANG+"/screen3.mp3", "screen3");
	createjs.Sound.registerSound("snd_"+LANG+"/screen4.mp3", "screen4");
	createjs.Sound.registerSound("snd_"+LANG+"/screen5.mp3", "screen5");
	createjs.Sound.registerSound("snd_"+LANG+"/screen6.mp3", "screen6");
	createjs.Sound.registerSound("snd_"+LANG+"/screen7.mp3", "screen7");
	createjs.Sound.registerSound("snd_"+LANG+"/screen75.mp3", "screen75");
	createjs.Sound.registerSound("snd_"+LANG+"/screen8.mp3", "screen8");
	createjs.Sound.registerSound("snd_"+LANG+"/screen9.mp3", "screen9");
	createjs.Sound.registerSound("snd_"+LANG+"/screen10.mp3", "screen10");
	createjs.Sound.registerSound("snd_"+LANG+"/screen11.mp3", "screen11");
	createjs.Sound.registerSound("snd_"+LANG+"/screen12.mp3", "screen12");
	createjs.Sound.registerSound("snd_"+LANG+"/screen13.mp3", "screen13");
	createjs.Sound.registerSound("snd_"+LANG+"/screen14.mp3", "screen14");
	createjs.Sound.registerSound("snd_"+LANG+"/screen14a.mp3", "screen14a");
	createjs.Sound.registerSound("snd_"+LANG+"/screen15.mp3", "screen15");
	createjs.Sound.registerSound("snd_"+LANG+"/screen15a16a.mp3", "screen15a16a");
	createjs.Sound.registerSound("snd_"+LANG+"/screen15b.mp3", "screen15b");
	createjs.Sound.registerSound("snd_"+LANG+"/screen16.mp3", "screen16");
	createjs.Sound.registerSound("snd_"+LANG+"/screen16b.mp3", "screen16b");
	createjs.Sound.registerSound("snd_"+LANG+"/screen17.mp3", "screen17");

	//sfx -- common to both languages
	createjs.Sound.registerSound("snd_sfx/snd_eating.mp3", "snd_eating");
	createjs.Sound.registerSound("snd_sfx/snd_pancreastries.mp3", "snd_pancreastries");
	createjs.Sound.registerSound("snd_sfx/snd_glucoseappear.mp3", "snd_glucoseappear");
	createjs.Sound.registerSound("snd_sfx/snd_gimeet.mp3", "snd_gimeet");
	createjs.Sound.registerSound("snd_sfx/snd_insulininjection.mp3", "snd_insulininjection");
	createjs.Sound.registerSound("snd_sfx/snd_swoosh.mp3", "snd_swoosh");
	createjs.Sound.registerSound("snd_sfx/snd_lookinside.mp3", "snd_lookinside");
	createjs.Sound.registerSound("snd_sfx/snd_insulinappear.mp3", "snd_insulinappear");
	createjs.Sound.registerSound("snd_sfx/snd_buttonclick.mp3", "sfx_btnclick");
	createjs.Sound.registerSound("snd_sfx/click6.mp3", "click6");
	createjs.Sound.registerSound("snd_sfx/dn_med.mp3", "dn_med");
	createjs.Sound.registerSound("snd_sfx/dn_short.mp3", "dn_short");
	createjs.Sound.registerSound("snd_sfx/dn_xlong.mp3", "dn_xlong");
	createjs.Sound.registerSound("snd_sfx/up_long.mp3", "up_long");
	createjs.Sound.registerSound("snd_sfx/up_xlong.mp3", "up_xlong");

	sndQ.load();
}

function sndQ_handleFileLoad(event) { sounds[event.item.id] = event.result; }

function sndQ_handleComplete(e) { loadingAllDone(); }

function loadingAllDone() {
	exportRoot = new lib.basalBolus();

	stage = new createjs.Stage(canvas);

	//enable MouseOver for onscreen controls
	stage.enableMouseOver(20);
	//allow active mouse dragging when mouse is moved outside of canvas
	stage.mouseMoveOutside = true;

	//bool that stores whether device is touch or not; used for touch-specific controls (fly levels)
	isTouch = createjs.Touch.isSupported();

	//enable touch interactions if supported on the current device:
	//params: single touch only (true), allow scroll/zoom gestures (true)
	createjs.Touch.enable(stage, true, false);

	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

function playSound(id, loop) { sndch = createjs.Sound.play(id); }

function playSoundCall(id, func) {
	sndch = createjs.Sound.play(id);
	sndch.addEventListener("complete", func);
}

function stopSound() { sndch.stop(); }

function playSfx(id) { sndch_fx = createjs.Sound.play(id, {volume:0.4}); }

function playSfxVol(id, vol) { sndch_fx = createjs.Sound.play(id, {volume:vol}); }

function stopSfx() { sndch_fx.stop(); }

function resizeCanvasLocal() {
	var game = $('#canvas');

	var gameMarg = ($(window).width()-game.width())/2;
	$('#storytxt').css({width:(game.width()*0.75)+"px", top:(game.height()*0.825)+"px", left:(game.width()*0.125)+gameMarg+"px"});

	change_storytext();
}

function addHandHover(target) {
	target.addEventListener("mouseover", cursorPointer);
	target.addEventListener("rollover", cursorPointer);
	target.addEventListener("mouseout", cursorDefault);
	target.addEventListener("rollout", cursorDefault);
}

function removeHandHover(target) {
	target.removeEventListener("mouseover", cursorPointer);
	target.removeEventListener("rollover", cursorPointer);
	target.removeEventListener("mouseout", cursorDefault);
	target.removeEventListener("rollout", cursorDefault);
}

function cursorPointer(e) { document.body.style.cursor = 'pointer'; }

function cursorDefault(e) { document.body.style.cursor = 'default'; }

function begin_pulseObj(obj) {
	obj.startSX = obj.scaleX;
	obj.startSY = obj.scaleY;
	createjs.Tween.get(obj, {loop:true}).to({
		scaleX: obj.scaleX*1.1,
		scaleY: obj.scaleY*1.1
		}, 250, createjs.Ease.none).wait(250).to({
			scaleX: obj.startSX,
			scaleY: obj.startSY
			}, 250, createjs.Ease.none).wait(250);
}

function end_pulseObj(obj) {
	createjs.Tween.removeTweens(obj);
	obj.scaleX = obj.startSX || 1;
	obj.scaleY = obj.startSY || 1;
}

function begin_pulseAlt(obj) {
	obj.startSX = obj.scaleX;
	obj.startSY = obj.scaleY;
	createjs.Tween.get(obj, {loop:true}).to({
		scaleX: obj.scaleX*1.06,
		scaleY: obj.scaleY*1.06
		}, 250, createjs.Ease.none).wait(250).to({
			scaleX: obj.startSX,
			scaleY: obj.startSY
			}, 250, createjs.Ease.none).wait(250);
}