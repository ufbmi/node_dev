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

	//prevent scrolling on iOS
	//document.ontouchmove = function(event) { event.preventDefault(); }

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
	sndch_bg1 = createjs.Sound;
	sndch_bg2 = createjs.Sound;

	sndQ = new createjs.LoadQueue(false);

	sndQ.addEventListener("complete", sndQ_handleComplete);
	sndQ.addEventListener("fileload", sndQ_handleFileLoad);

	//narration audio
	createjs.Sound.registerSound("snd_"+LANG+"/screen1.mp3", "screen1");
	createjs.Sound.registerSound("snd_"+LANG+"/screen2.mp3", "screen2");
	createjs.Sound.registerSound("snd_"+LANG+"/screen3.mp3", "screen3");
	createjs.Sound.registerSound("snd_"+LANG+"/screen4.mp3", "screen4");
	createjs.Sound.registerSound("snd_"+LANG+"/screen5.mp3", "screen5");

	//sfx -- common to both languages
	createjs.Sound.registerSound("snd_sfx/snd_buttonclick.mp3", "sfx_btnclick");
	createjs.Sound.registerSound("snd_sfx/click6.mp3", "click6");
	createjs.Sound.registerSound("snd_sfx/brain_effect.mp3", "brain_effect");
	createjs.Sound.registerSound("snd_sfx/done_bell.mp3", "done_bell");
	createjs.Sound.registerSound("snd_sfx/hearbeat1.mp3", "hearbeat1");
	createjs.Sound.registerSound("snd_sfx/heart_effect.mp3", "heart_effect");
	createjs.Sound.registerSound("snd_sfx/insulin_race.mp3", "insulin_race");
	createjs.Sound.registerSound("snd_sfx/rope_mix.mp3", "rope_mix");

	sndQ.load();
}

function sndQ_handleFileLoad(event) { sounds[event.item.id] = event.result; }

function sndQ_handleComplete(e) { loadingAllDone(); }

function loadingAllDone() {
	exportRoot = new lib.exercise();

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

function stopSound() { sndch.stop(); }

function playSfx(id) { sndch_fx = createjs.Sound.play(id, {volume:0.4}); }

function stopSfx() { sndch_fx.stop(); }

function playSfxVol(id, vol) { sndch_fx = createjs.Sound.play(id, {volume:vol}); }

function playSfxBg(id, n) {
	if (n == 1) { sndch_bg1 = createjs.Sound.play(id, {volume:0.15}); }
	else if (n == 2) { sndch_bg2 = createjs.Sound.play(id, {volume:0.333}); }
}

function resizeCanvasLocal() {
	var game = $('#canvas');

	var gameMarg = ($(window).width()-game.width())/2;
	$('#storytxt').css({width:(game.width()*0.75)+"px", top:(game.height()*0.825)+"px", left:(game.width()*0.125)+gameMarg+"px"});

	change_storytext();
}

//utils
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

//called by events or on its own to make cursor a hand
function cursorPointer(e) { document.body.style.cursor = 'pointer'; }

//called by events or on its own to make cursor its default
function cursorDefault(e) { document.body.style.cursor = 'default'; }

//looping pulse of a passed object. be sure to restore
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

function enableBtn(obj, enab) {
	obj.mouseEnabled = enab;
	obj.alpha = enab ? 1 : 0.25;
}