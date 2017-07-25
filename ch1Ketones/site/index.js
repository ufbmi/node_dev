var canvas, stage, exportRoot;
var LANG = 'en';

function forceES() {
	LANG = 'es';
	init();
}

function init() {
    storytext = (LANG == 'en') ? storytext_en : storytext_es;

	//prevent scrolling on iOS
	//document.ontouchmove = function(event) { event.preventDefault(); }

    $(window).resize(resizeCanvasLocal);
    resizeCanvasLocal();

	window.addEventListener("orientationchange", function() { setTimeout(resizeCanvasLocal, 100); }, false);

	createjs.MotionGuidePlugin.install();

	canvas = document.getElementById("canvas");
	images = images||{};
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
	createjs.Sound.registerSound("snd_"+LANG+"/screen8.mp3", "screen8");
	createjs.Sound.registerSound("snd_"+LANG+"/screen9.mp3", "screen9");
	createjs.Sound.registerSound("snd_"+LANG+"/screen10.mp3", "screen10");
	createjs.Sound.registerSound("snd_"+LANG+"/screen11.mp3", "screen11");
	createjs.Sound.registerSound("snd_"+LANG+"/screen12_better.mp3", "screen12_better");
	createjs.Sound.registerSound("snd_"+LANG+"/screen12_call.mp3", "screen12_call");
	createjs.Sound.registerSound("snd_"+LANG+"/screen12_checkketones.mp3", "screen12_checkketones");
	createjs.Sound.registerSound("snd_"+LANG+"/screen12_waterinsulin.mp3", "screen12_waterinsulin");
	createjs.Sound.registerSound("snd_"+LANG+"/screen13.mp3", "screen13");
	createjs.Sound.registerSound("snd_"+LANG+"/screen14.mp3", "screen14");
	createjs.Sound.registerSound("snd_"+LANG+"/screen15.mp3", "screen15");

	//sfx -- common to both languages
	createjs.Sound.registerSound("snd_sfx/sfx_btnclick.mp3", "sfx_btnclick");
	createjs.Sound.registerSound("snd_sfx/sfx_pancspitout.mp3", "sfx_pancspitout");
	createjs.Sound.registerSound("snd_sfx/sfx_cellshrink.mp3", "sfx_cellshrink");
	createjs.Sound.registerSound("snd_sfx/sfx_cellmunching.mp3", "sfx_cellmunching");
	createjs.Sound.registerSound("snd_sfx/bubblepop.mp3", "bubblepop");
	createjs.Sound.registerSound("snd_sfx/calldoctor.mp3", "calldoctor");
	createjs.Sound.registerSound("snd_sfx/click6.mp3", "click6");
	createjs.Sound.registerSound("snd_sfx/drinkwater.mp3", "drinkwater");
	createjs.Sound.registerSound("snd_sfx/g_appear.mp3", "g_appear");
	createjs.Sound.registerSound("snd_sfx/k_appear.mp3", "k_appear");
	createjs.Sound.registerSound("snd_sfx/pancreas1.mp3", "pancreas1");
	createjs.Sound.registerSound("snd_sfx/pancreas_unhealthy.mp3", "pancreas_unhealthy");
	createjs.Sound.registerSound("snd_sfx/screen_opening.mp3", "screen_opening");
	createjs.Sound.registerSound("snd_sfx/squish2.mp3", "squish2");
	createjs.Sound.registerSound("snd_sfx/swoosh2.mp3", "swoosh2");
	createjs.Sound.registerSound("snd_sfx/swoosh3.mp3", "swoosh3");
	createjs.Sound.registerSound("snd_sfx/swoosh4.mp3", "swoosh4");
	createjs.Sound.registerSound("snd_sfx/urinate.mp3", "urinate");
	createjs.Sound.registerSound("snd_sfx/vomit2.mp3", "vomit2");
	createjs.Sound.registerSound("snd_sfx/snd_weakness.mp3", "snd_weakness");
	createjs.Sound.registerSound("snd_sfx/snd_dehydration.mp3", "snd_dehydration");
	createjs.Sound.registerSound("snd_sfx/snd_heavybreathing.mp3", "snd_heavybreathing");

	sndQ.load();
}

function sndQ_handleFileLoad(event) { sounds[event.item.id] = event.result; }

function sndQ_handleComplete(e) { loadingAllDone(); }

function loadingAllDone() {
	exportRoot = new lib.ketones_www();

	stage = new createjs.Stage(canvas);

	//enable MouseOver for onscreen controls
	stage.enableMouseOver(20);
	//allow active mouse dragging when mouse is moved outside of canvas
	stage.mouseMoveOutside = true;

	//bool that stores whether device is touch or not.
	//used for touch-specific controls (fly levels)
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
			scaleX: obj.scaleX,
			scaleY: obj.scaleY
			}, 250, createjs.Ease.none).wait(250);
}

function end_pulseObj(obj){
	createjs.Tween.removeTweens(obj);
	obj.scaleX = obj.startSX || 1;
	obj.scaleY = obj.startSY || 1;
}