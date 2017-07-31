(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/btn_pg.png", id:"btn_pg"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.btn_pg = function() {
	this.initialize(img.btn_pg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,94);


(lib.zach_text_diabtes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:1,es:2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#303030").s().p("AMaDWIAAgMQAGAEAIABQAHACAGAAQAKAAAGgDQAFgDAAgHQAAgFgEgEQgEgDgNgFQgMgEgFgEQgFgDgCgEQgDgEAAgGQAAgLAJgGQAIgGAPAAQAOAAANAGIgFAKQgNgFgKAAQgJAAgFADQgFADAAAFQAAADACADQACACAEACIAPAHQAPAFAFAGQAGAFAAAJQAAAMgJAGQgJAHgQAAQgRAAgKgGgALMDQQgLgLAAgVQAAgVAKgMQALgMARAAQAQAAAJALQAKAKAAASIAAAIIg7AAQAAAPAHAIQAIAHANAAQANAAAOgFIAAALIgNAFIgPABQgTAAgLgMgAL8CnQAAgMgGgHQgFgGgKAAQgLAAgGAHQgGAGgBAMIAtAAIAAAAgAKPDCIAAgzIgMAAIAAgHIAMgFIAFgSIAIAAIAAAUIAZAAIAAAKIgZAAIAAAyQAAAIAEAEQADAEAHAAIAGAAIAFgBIAAAJIgGACIgHABQgZAAAAgagAI7DQQgLgLAAgVQAAgVAKgMQAKgMARAAQAQAAAKALQAJAKAAASIAAAIIg7AAQABAPAHAIQAHAHANAAQAOAAANgFIAAALIgMAFIgPABQgTAAgLgMgAJqCnQAAgMgFgHQgGgGgKAAQgKAAgGAHQgGAGgCAMIAtAAIAAAAgAHrDZQgHgDgFgHIAAAAIgDALIgJAAIAAh5IAMAAIAAAvIAAAAQAKgNARAAQARAAAKAMQAJALAAAVQAAAVgJAMQgKAMgRAAQgIAAgHgDgAHlCWQgGAHAAASQAAASAGAIQAHAIANAAQAMAAAGgJQAFgIAAgRQAAgRgFgIQgGgIgNAAQgNAAgGAIgAF7DVQgHgGAAgMQAAgaApgCIAPAAIAAgFQAAgKgFgFQgEgFgKAAQgKAAgOAGIgEgJQAHgEAHgCQAIgCAHAAQAQAAAHAHQAHAHAAAPIAAA6IgJAAIgDgMIgBAAQgGAIgGADQgHADgJAAQgNAAgHgHgAGeCxQgPAAgHAFQgHAEAAAJQAAAHAEADQAFAEAHAAQAMAAAHgHQAHgGAAgMIAAgIgAD1DQQgKgLAAgVQAAgVAKgMQAJgMARAAQARAAAJANIABAAIAAgGIAAgpIANAAIAAB5IgLAAIgCgLIAAAAQgJANgSAAQgRAAgJgMgAD/CXQgGAJAAAQQAAAQAGAJQAGAIALAAQAOAAAGgHQAGgHAAgRIAAgCQAAgTgGgHQgHgIgNAAQgLAAgGAJgABzDQQgLgLAAgVQAAgVAKgMQALgMARAAQAQAAAJALQAKAKAAASIAAAIIg7AAQAAAPAHAIQAIAHANAAQANAAAOgFIAAALIgNAFIgPABQgTAAgLgMgACjCnQAAgMgGgHQgFgGgKAAQgLAAgGAHQgGAGgBAMIAtAAIAAAAgAg5DVQgHgGAAgMQAAgaAqgCIAOAAIAAgFQAAgKgEgFQgFgFgJAAQgLAAgNAGIgEgJQAGgEAIgCQAHgCAIAAQAPAAAHAHQAGAHAAAPIAAA6IgIAAIgCgMIgBAAQgGAIgHADQgGADgKAAQgMAAgIgHgAgVCxQgQAAgGAFQgHAEAAAJQAAAHAEADQAEAEAIAAQAMAAAHgHQAHgGAAgMIAAgIgAj8DCIAAgzIgMAAIAAgHIAMgFIAFgSIAIAAIAAAUIAZAAIAAAKIgZAAIAAAyQAAAIAEAEQADAEAHAAIAGAAIAFgBIAAAJIgGACIgHABQgZAAAAgagAlQDWQgJgFgEgKQgFgKAAgOQAAgVAKgLQALgMASAAQASAAALAMQAKAMAAAUQAAAVgKAMQgLAMgSAAQgMAAgJgGgAlOCWQgHAJAAAQQAAARAHAIQAGAJANAAQANAAAGgJQAHgIAAgRQAAgQgHgIQgGgJgNAAQgNAAgGAIgAo6DWIAAgMQAGAEAHABQAHACAHAAQAKAAAFgDQAGgDAAgHQAAgFgFgEQgEgDgNgFQgLgEgFgEQgGgDgCgEQgCgEAAgGQAAgLAIgGQAJgGAOAAQAOAAANAGIgEAKQgNgFgLAAQgJAAgEADQgFADAAAFQAAADACADQABACAEACIAPAHQAQAFAFAGQAFAFAAAJQAAAMgJAGQgJAHgQAAQgRAAgJgGgAqIDQQgLgLAAgVQAAgVAKgMQAKgMARAAQAQAAAKALQAJAKAAASIAAAIIg7AAQABAPAHAIQAHAHANAAQAOAAANgFIAAALIgMAFIgPABQgTAAgLgMgApZCnQAAgMgFgHQgGgGgKAAQgKAAgGAHQgGAGgCAMIAtAAIAAAAgArhDWQgJgFgFgKQgFgKAAgOQAAgVALgLQAKgMATAAQASAAAKAMQALAMAAAUQAAAVgLAMQgKAMgTAAQgLAAgJgGgArgCWQgGAJAAAQQAAARAGAIQAHAJANAAQAMAAAHgJQAGgIAAgRQAAgQgGgIQgHgJgNAAQgMAAgHAIgAtMDQQgKgLAAgVQAAgVAKgMQAJgMARAAQARAAAJANIABAAIAAgGIAAgpIANAAIAAB5IgLAAIgCgLIAAAAQgJANgSAAQgRAAgJgMgAtCCXQgGAJAAAQQAAAQAGAJQAGAIALAAQAOAAAGgHQAGgHAAgRIAAgCQAAgTgGgHQgHgIgNAAQgLAAgGAJgAFSDaIAAhVIANAAIAABVgAAwDaIghhVIAOAAIATAyIAHAYIABAAIAahKIANAAIggBVgAhhDaIAAg3QAAgLgFgFQgEgFgLAAQgNAAgGAHQgHAIAAAQIAAAtIgMAAIAAh5IAMAAIAAAwIABAAQADgHAIgDQAHgEAJAAQAPAAAIAIQAIAHAAAQIAAA4gAmFDaIAAg3QAAgLgFgFQgEgFgLAAQgNAAgGAHQgHAIAAAQIAAAtIgMAAIAAhVIAKAAIACALIABAAQAEgGAHgDQAHgEAJAAQAPAAAIAIQAIAHAAAQIAAA4gAFTB0QgCgCAAgFQAAgEACgCQACgCAEAAQADAAACACQACACAAAEQAAAFgCACQgCACgDAAQgEAAgCgCgAAQg0QAAgvAYgZQAXgZAsAAQAgAAAaAMIgPAnIgWgHQgLgEgKAAQgnAAAAA5QAAA0AnAAQAPAAAMgCQANgEAMgIIAAApQgMAIgNADQgMADgTAAQhXAAAAhdgAitAaQgPgPAAgbQAAgdAVgOQAUgOAqgCIAggBIAAgIQAAgcgdAAQgWAAgeANIgRgiQAggRAnAAQAmAAAUARQAUAQAAAhIAAB6IgkAAIgKgZIgBAAQgNAQgNAGQgOAGgWAAQgaAAgQgPgAhcguQgWABgLAHQgLAIAAAPQAAATAZAAQARAAALgIQAKgKAAgRIAAgPgAFDAmIAAhrQAAgogeAAQgWAAgJAPQgKAOAAAgIAABWIgyAAIAAkBIAyAAIgCBhIADAAQARgbAlAAQAgAAARARQARASAAAhIAAB3gAmHAmIAAgiIB1ikIhxAAIAAgrICuAAIAAAhIh0CnIB3AAIAAApg");
	this.shape.setTransform(85.5,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303030").s().p("AI8DcIAAgMQAFADAIACQAHACAHAAQAKAAAFgDQAFgEAAgGQAAgGgEgDQgEgDgNgFQgMgEgEgEQgGgEgCgEQgDgEABgFQAAgLAIgGQAJgGAOAAQAOAAANAFIgEALQgOgGgKABQgJAAgEADQgGACAAAGQAAADACACQACADAEACIAPAHQAQAFAFAGQAFAFAAAIQAAANgJAGQgJAGgQAAQgRABgJgGgAHtDWQgLgLABgVQgBgVALgMQAKgMARAAQAQAAAKALQAJAKAAASIAAAIIg7AAQABAPAGAHQAIAIANAAQANAAAOgGIAAAMIgNAEIgPABQgSAAgMgLgAIdCtQAAgNgFgGQgGgHgKABQgKAAgHAGQgFAHgCAMIAtAAIAAAAgAGwDHIAAgyIgMAAIAAgHIAMgFIAGgTIAHAAIAAAVIAZAAIAAAKIgZAAIAAAyQAAAHAEAFQADAEAHAAIAGgBIAGAAIAAAJIgGACIgIAAQgZAAAAgagAFcDWQgLgLAAgVQAAgVAKgMQALgMARAAQAQAAAJALQAKAKAAASIAAAIIg8AAQABAPAHAHQAHAIANAAQAOAAANgGIAAAMIgMAEIgPABQgTAAgLgLgAGLCtQABgNgGgGQgFgHgKABQgLAAgGAGQgGAHgCAMIAtAAIAAAAgAEMDfQgGgDgFgHIgBAAIgDALIgJAAIAAh5IANAAIgBAvIABAAQAJgNASAAQARAAAJAMQAJALAAAVQAAAVgJAMQgJALgRAAQgJAAgHgCgAEGCbQgFAIAAASQAAASAFAIQAHAHANAAQAMAAAGgIQAGgJgBgQQABgRgGgIQgGgIgMAAQgNAAgHAHgACcDbQgHgGAAgNQAAgZApgCIAPgBIAAgEQAAgLgEgFQgFgEgKAAQgKgBgOAHIgDgKQAGgDAHgCQAIgCAHAAQAQAAAHAHQAIAGgBAQIAAA6IgJAAIgDgMIAAAAQgGAIgHADQgGADgKgBQgMAAgIgGgADAC2QgQABgHAEQgGAFgBAIQAAAIAFADQAEAEAHAAQANAAAGgHQAIgHAAgMIAAgHgAAWDWQgJgLAAgWQAAgUAJgMQAJgMARAAQARAAAKANIABAAIgBgHIAAgoIANAAIAAB5IgKAAIgCgLIgBAAQgJANgSgBQgRAAgJgLgAAgCdQgGAIAAAQQAAARAGAIQAGAJAMgBQANABAGgIQAGgGAAgRIAAgDQAAgSgGgIQgGgHgNAAQgMAAgGAJgAhqDWQgKgLgBgVQAAgVAKgMQALgMARAAQAQAAAJALQAKAKAAASIAAAIIg7AAQABAPAGAHQAIAIANAAQANAAAOgGIAAAMIgNAEIgOABQgUAAgLgLgAg6CtQAAgNgGgGQgFgHgKABQgKAAgHAGQgGAHgBAMIAtAAIAAAAgAklDWQgLgLAAgVQAAgVAKgMQALgMAQAAQARAAAJALQAJAKAAASIAAAIIg6AAQAAAPAHAHQAIAIANAAQANAAAOgGIAAAMIgNAEIgPABQgTAAgLgLgAj1CtQgBgNgFgGQgGgHgKABQgKAAgGAGQgGAHgBAMIAtAAIAAAAgAmLDHIAAgyIgLAAIAAgHIALgFIAGgTIAIAAIAAAVIAYAAIAAAKIgYAAIAAAyQAAAHADAFQAEAEAGAAIAHgBIAFAAIAAAJIgGACIgIAAQgZAAAAgagAoIDcQgIgFgFgKQgFgLAAgNQAAgVAKgLQALgMATAAQASAAAKAMQAKALAAAVQAAAVgKAMQgKALgTAAQgMABgJgGgAoGCcQgGAJAAAQQAAAQAGAJQAGAIAOAAQAMAAAHgIQAGgJAAgQQAAgQgGgIQgHgJgNAAQgNAAgGAIgABzDgIAAhVIANAAIAABVgAiXDgIAAg3QAAgLgFgFQgFgFgKAAQgOAAgFAHQgHAHAAARIAAAtIgMAAIAAhVIAKAAIACALIAAAAQAFgGAGgDQAIgEAIAAQAQAAAIAHQAIAIAAAQIAAA4gAlTDgIAAhVIANAAIAABVgAo9DgIAAg3QAAgLgEgFQgFgFgLAAQgNAAgGAHQgHAHAAARIAAAtIgMAAIAAhVIAKAAIACALIABAAQAEgGAHgDQAIgEAIAAQAPAAAJAHQAIAIAAAQIAAA4gAB0B6QgCgCAAgFQAAgFACgCQACgBAEgBQADABACABQADADAAAEQAAAFgDACQgCACgDAAQgEAAgCgCgAlSB6QgCgCgBgFQABgFACgCQACgBADgBQAEABACABQACADAAAEQAAAFgCACQgCACgEAAQgDAAgCgCgAAPg6QAAgvAYgZQAXgZAsAAQAgAAAZAMIgOAnIgXgHQgKgDgKgBQgnABAAA4QAAA3AnAAQAPgBAMgEQAMgDANgJIAAAqQgNAIgMADQgMACgTAAQhXAAAAhdgAiuAUQgPgPAAgaQAAgeAUgOQAVgOAqgCIAgAAIAAgJQAAgcgdAAQgWAAgeANIgRghQAggSAnABQAmAAATAQQAVAQgBAhIAAB6IgjAAIgKgZIgBAAQgNAQgOAGQgNAGgWAAQgbAAgPgPgAhdg0QgWACgMAGQgLAIABAPQAAAVAZAAQARAAALgKQAKgKAAgQIAAgQgAFBAgIAAhqQAAgogdgBQgWAAgKAPQgJAPAAAgIAABVIgyAAIAAkBIAyAAIgCBhIACAAQARgbAlAAQAhAAARASQARARAAAhIAAB3gAmIAgIAAggIB0imIhwAAIAAgqICtAAIAAAgIh0CoIB4AAIAAAog");
	this.shape_1.setTransform(85.3,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.1,44.1);


(lib.weakness_symptom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGKA6IAAgaQANAGAJADQAJACAHAAQAJAAAFgDQAFgEAAgHQAAgDgDgDIgGgGIgQgJQgMgFgGgDQgGgFgDgHQgEgHAAgJQAAgRAMgKQALgKAVAAQAKAAAJADIATAGIgJAWQgKgFgHgBIgNgCQgIAAgEAEQgEADAAAGQAAAEABACQACADAEADIARAJQASAIAHAHQAGAIAAANQAAARgMAKQgNALgWAAQgVAAgPgIgAEnA6IAAgaQANAGAJADQAJACAHAAQAJAAAFgDQAFgEAAgHQAAgDgDgDIgGgGIgQgJQgMgFgGgDQgGgFgDgHQgEgHAAgJQAAgRAMgKQALgKAVAAQAKAAAJADIATAGIgJAWQgKgFgHgBIgNgCQgIAAgEAEQgEADAAAGQAAAEABACQACADAEADIARAJQASAIAHAHQAGAIAAANQAAARgMAKQgNALgWAAQgVAAgPgIgADKBAIAAh/IBKAAIAAAXIgvAAIAAAcIAsAAIAAAUIgsAAIAAAhIAvAAIAAAXgACHBAIg4hfIAAAAIABBfIgYAAIAAh/IAiAAIA4BeIABAAIgCheIAZAAIAAB/gAAJBAIggg2IgLAIIAAAuIgcAAIAAh/IAcAAIAAA7IArg7IAeAAIgqA5IArBGgAhrBAIgJgfIgvAAIgJAfIgeAAIAuh/IAhAAIAtB/gAh7AKIgRg1IgQA1IAhAAgAkeBAIAAh/IBKAAIAAAXIgvAAIAAAcIAsAAIAAAUIgsAAIAAAhIAvAAIAAAXgAluBAIgVhRIgCgPIgYBgIgeAAIghh/IAbAAIAQBEQAEAUACAOIAZhmIAaAAIAYBmIAXhmIAbAAIghB/g");
	this.shape.setTransform(93.7,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97E332").s().p("AnzGLQgegCgZgQQgcgTgFgbQgDgPABgUIAAgkQgBgrgsgFQgMgBg9AHIhLAJQgzAAgOgeQgMgZAFgcQAFgdAVgTQAFgGApgcQAegWAJgRQAJgSgfgLIgtgPQgmgQgJgGQgagPgFgYQgLgqBQgEIA8gDQAdgDAFgNQgFg0gBgcQgDgzAZgWQAWgVAegCQAcgDAdAOQAKAFBCAzQAwAmAkgEQAngFAnghQALgKA2g4QAngpAdgPQAqgVAvAOQAZAHAYAZQAPAPAWAhQAjAzAZAWQAtAmAsgQQAmgOArgpQAYgXAtgvQATgSAegDQAegEAWANQAXANAYAfIAoA0QAaAfAtARQApAPAtABQAqABB6gbQBsgNAaBIQAIAYgRAdQgKAQgZAaQgbAbgIANQgQAXAIAZIAPAkQAJAXACAPQAIBFhKARQgLADhRgHQg/gFgVAZQgOAQgUAxQgSArgZASQggAXgiALQgqANgfgLQgegLgegfQgvgvgHgGQgxgmgxAtQgyBAgbATQhHAyhDgTQghgJgbgoQgng6gHgHQgtgrg2AtQg6A/geARQhDAmhCAAIgPAAg");
	this.shape_1.setTransform(94.9,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.9,-1.7,178.2,84.2);


(lib.vomiting_symptom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFuAwQgPgRAAgfQAAgeASgRQARgSAgAAQAUAAASAIIgJAWQgOgHgPAAQgSAAgKAMQgLAMAAASQAAAVAIALQAJALAQAAIASgCIAAgbIgZAAIAAgUIAzAAIAABAQgMAEgLACQgLACgMAAQgdAAgPgSgAk5AwQgPgRAAgfQAAgfAPgRQAQgRAeAAQAdAAAQARQAQARAAAfQAAAfgQARQgQASgeAAQgdAAgQgSgAkjgfQgJALAAAUQAAAVAIALQAJALAPAAQAhAAAAgrQAAgqggAAQgRAAgHALgAEiBAIg4hfIgBAAIACBfIgYAAIAAh/IAiAAIA4BeIABAAIgCheIAYAAIAAB/gACXBAIAAh/IAbAAIAAB/gABFBAIAAhoIgjAAIAAgXIBiAAIAAAXIgkAAIAABogAgLBAIAAh/IAaAAIAAB/gAhEBAIABhFIABgeIgBAAIgiBjIgZAAIgehjIgBAAIACBjIgZAAIAAh/IAlAAIAfBhIAAAAIAghhIAlAAIAAB/gAmcBAIgrh/IAbAAIAdBbIACAMQABgIAGgUIAYhLIAcAAIgsB/g");
	this.shape.setTransform(103.8,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97E332").s().p("Ap3GoQgsgYgJg8QgIg6AfhaQALgegmABIgyAIQgVADgSgFQgogMAcgwQAMgVAug0QgrgSghgeQgngnALghQALgfAmgNQAdgKAqACQgqhoBIg/QAwgqBKAlQApAUBHAxQA5AeA3g0QAWgUA2hQQAzhLAvAEQAdADAUAPQASAOAQAbQAdAwAdAYQAkAdAwABQBCABBWg8QBghDAwgKQBGgPAhAdQAUATANAzQAMAyAXAUQAkAgA4AAQAgAABEgJQBcgGATAgQAXAmgnAzQgeAog5AlQA3AIAQAkQAJAXgFAVQgHAWgXAJQgMAFgTADIgfAFQgmAJAOAoQAHAWAYAlQANAcgGAZQgHAagaAPQgbARgugJQgjgGgjgTQgmgVgqgfQgegXgIgCQgRgEgVAXQgxA2gwgRQgagIgSgPQgWgagOgLQgagVgSAVQgwBhglAtQhHBVg+gnQgRgKgNgXQgEgIgOghQgWgxgegcQgsgogeA1IgUAlQgPAVgRAFQgWAHgVgJQgWgJgLgVIgQgjQgQgcgEAFQgaAdgfAsQg2BLgqAmQgdAageAAQgRAAgRgJg");
	this.shape_1.setTransform(105.5,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.6,1.8,167.8,86.8);


(lib.urinating_symptom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADWCSQgPgRAAggQAAgfASgSQARgRAgAAQAUAAASAIIgJAWQgOgHgPAAQgSAAgLALQgKAMAAAUQAAAVAIALQAJALAQAAIASgBIAAgbIgZAAIAAgXIAzAAIAABDQgMAEgLABQgLACgMAAQgdAAgPgRgACKChIg4hhIgBAAIACBhIgZAAIAAiAIAjAAIA4BgIAAAAIgBhgIAYAAIAACAgAAAChIAAiAIAaAAIAACAgAhkChIAAiAIBKAAIAAAWIguAAIAAAcIArAAIAAAXIgrAAIAAAhIAuAAIAAAWgAjIChIAAiAIBKAAIAAAWIgvAAIAAAcIAsAAIAAAXIgsAAIAAAhIAvAAIAAAWgAk5ChIAAiAIApAAQAXAAANAKQAMAKAAAUQAAAVgNALQgNALgYAAIgMAAIAAAtgAkeBdIAJAAQANAAAGgFQAGgFAAgJQAAgKgFgEQgFgFgLAAIgNAAgAhAgBIgXgdIgCAAQgeAAgPgRQgQgRAAggQAAggAQgRQAPgRAeAAQAeAAAPARQAQARAAAgQAAAXgIAPQgIAPgQAHIAfAjgAhxiBQgJALAAAWQAAAVAIALQAJALAQAAQAgAAAAgrQAAgsggAAQgQAAgIALgAAJgrQgLgMAAgWIAAhTIAZAAIAABOQAAAPAGAHQAGAHANAAQAOAAAGgHQAGgHAAgPIAAhOIAbAAIAABTQAAAOgGALQgHALgMAFQgMAGgQAAQgZAAgOgNgAGRggIAAhqIgjAAIAAgWIBhAAIAAAWIgjAAIAABqgAE4ggIg4hhIAAAAIABBhIgYAAIAAiAIAiAAIA4BgIABAAIgChgIAZAAIAACAgACEggIAAiAIBKAAIAAAWIguAAIAAAcIArAAIAAAXIgrAAIAAAhIAuAAIAAAWgAj1ggIAAiAIBKAAIAAAWIgvAAIAAAcIAsAAIAAAXIgsAAIAAAhIAvAAIAAAWgAkjggIgfgxIgOAAIAAAxIgcAAIAAiAIAmAAQAaAAANAJQAMAKAAATQAAAMgGAIQgGAJgMAFIAmA4gAlQhnIAIAAQANAAAHgFQAGgEAAgJQAAgJgHgEQgGgEgNAAIgIAAgAnOggIAAiAIBKAAIAAAWIgvAAIAAAhIArAAIAAAWIgrAAIAAAzg");
	this.shape.setTransform(92.8,53.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97E332").s().p("AomIdQg2grgRhMQgIgjgDgFQgLgWgZAKIg3AWIguATQgcALgUABQgfACgYgKQgfgMgFgbQgHgkAPgrQAJgYAbgwIAZguQAOgbAGgWQAMgsgegRQgQgIgwgEQgbgCgYgOQgegSAEgYQAGgwA8gUQBDgWAqgFIAxgEQAegHAAgZQAAgzgshAQgcgngFgMQgPgfAKgdQASg6A1gLQAdgFAnANQAWAHAqATIAiANQATAHAQADQAdAEAZgOQASgKAYgbQBXhkAagTQBLg2BJAzQAiAXA9AxQA4AkA4gNQArgKA6gcIBggxQBcgoA5AbQAZAMAKAnQAGAVAJApQASAuAuAHQAeAFBAgOQBJgPAbAAQA1AAAcAjQAWAcAEAfQAFAggQAfQgFAMgRAbQgPAYgGAPQgOAgAWAQQANAJAmANQBIAkgMA9QgJAohGARQgEAEgFAAQgQACgPAEQAKANAcAKIAqAPQAvAXAcAUQAgAWARARQAXAXALAdQAUA3hAAbQg0AVg1gHQhEgUgmgFQhGgLgNAzQgUBLgmAzQgiAvg2AWQg3AWg5gLQhQgPgxg8QgshIgegdQg2g2gpBHQgeAygMAPQgZAgghARQg/AehQgeQgogPgegeIggglQgVgXgRgHQgwgXgdBBIgVA3QgNAfgMAKQgfAcghAAQgeAAgfgYg");
	this.shape_1.setTransform(92.9,53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-3.1,196.1,113.1);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_1.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_2.setTransform(0,0,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-12,28.1,24.2);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_1.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_2.setTransform(0,0,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-12,28.1,24.2);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_1.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_2.setTransform(0,0,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-12,28.1,24.2);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_1.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_2.setTransform(0,0,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-12,28.1,24.2);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_1.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_2.setTransform(0,0,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-12,28.1,24.2);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_1.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDDQgNAAgGgLIhmixQgGgIAGgKIBmiwQACgFAGgBIALAAIDLAAIALAAQAGABACAFIBmCuQAHAKgHAJIhmCyQgGAKgNABg");
	this.shape_2.setTransform(0,0,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-12,28.1,24.2);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_1.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDDQgNAAgGgLIhmixQgGgIAGgKIBmiwQACgFAGgBIALAAIDLAAIALAAQAGABACAFIBmCuQAHAKgHAJIhmCyQgGAKgNABg");
	this.shape_2.setTransform(0,0,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-12,28.1,24.1);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_1.setTransform(-0.4,-0.1,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDDQgNAAgGgLIhmixQgGgIAGgKIBmiwQACgFAGgBIALAAIDLAAIALAAQAGABACAFIBmCuQAHAKgHAJIhmCyQgGAKgNABg");
	this.shape_2.setTransform(0,0,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-12,28.1,24.1);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A2E25").s().p("AjIJgQhZgQiIgkQgGgBgBgFQgmjCgMiLQgRi3ASiWQATifA2hpQBBiAB7hAQCThMB8AYQBJANAzAhQAqAcA6AGQAPABAQAJQB1BEAsCLQAkB0gSCYQgBAKgKAAQgKAAABgKQAMhlgIhJQgKhfgshFQgzhQg5ghQgTgMgtgIQgqgIgWgOQhlhCh7AMQh2ALhmBKQhcBDgxBxQgpBdgOCEQgWDNAkD/QALBLAKA1IAFAlQAEAdABABIBUAUQBuAZA6AKQBfAQBJABQBKABBYgNQBAgJBggVQAxgLA+gQIATgEQgEABABgsIADgzQAIiTAAknQAAgHAKAAQAKAAAAAHQAAC9gCBUQgDCYgKB4QgBAIgHABQiAAjhXARQh5AWhjABIgEAAQhjAAh7gXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A2E25").s().p("AADJtQhlgDitgkIiYgjQgvjrgIi4QgLjgAsioQAXhYAohAQA0hSBjg5QBjg5BlgHQBvgHBZA4IAdATQARAKAOADQAIABAPABIAWABQAWAFAbATQAzAlAlA1QAlA1ARA/QAcBkgTCSIgBA9QAADAgCBZQgDCPgKB5QhJAThdATQisAkhmAAIgPAAg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-63.1,98.4,126.3);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A2E25").s().p("AjIJgQhZgQiIgkQgGgBgBgFQgmjCgMiLQgRi3ASiWQATifA2hpQBBiAB7hAQCThMB8AYQBJANAzAhQAqAcA6AGQAPABAQAJQB1BEAsCLQAkB0gSCYQgBAKgKAAQgKAAABgKQAMhlgIhJQgKhfgshFQgzhQg5ghQgTgMgtgIQgqgIgWgOQhlhCh7AMQh2ALhmBKQhcBDgxBxQgpBdgOCEQgWDNAkD/QALBLAKA1IAFAlQAEAdABABIBUAUQBuAZA6AKQBfAQBJABQBKABBYgNQBAgJBggVQAxgLA+gQIATgEQgEABABgsIADgzQAIiTAAknQAAgHAKAAQAKAAAAAHQAAC9gCBUQgDCYgKB4QgBAIgHABQiAAjhXARQh5AWhjABIgEAAQhjAAh7gXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A2E25").s().p("AADJtQhlgDitgkIiYgjQgvjrgIi4QgLjgAsioQAXhYAohAQA0hSBjg5QBjg5BlgHQBvgHBZA4IAdATQARAKAOADQAIABAPABIAWABQAWAFAbATQAzAlAlA1QAlA1ARA/QAcBkgTCSIgBA9QAADAgCBZQgDCPgKB5QhJAThdATQisAkhmAAIgPAAg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-63.1,98.4,126.3);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C966CC").s().p("AkFpnIHRABICRSZIq5A1g");
	this.shape.setTransform(-1.7,-53.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5D858").s().p("AhlBhQg3gCgHgtQgIgrArgXQA9gkA/gqICpgDQADAogMAZQgJAUgVANQh+BhhfAAIgGgBg");
	this.shape_1.setTransform(-25.5,105.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5D858").s().p("AgOBNQgmgPhGgqQgUgLgJgVQgJgXAAgsICogPQAUALAjAdQAgAbAaAMQAtASgFAoQgGApg2AIQgOADgPAAQgpAAgtgSg");
	this.shape_2.setTransform(26,104.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#353535").ss(17.1).p("AgnorQAHC5AjGgQAjGHACB3");
	this.shape_3.setTransform(14.3,41.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#353535").ss(17.1).p("AAJosQADC6gMGgQgMGJAFB2");
	this.shape_4.setTransform(-16.6,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-115.4,84.3,247.2);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C966CC").s().p("AkFpnIHRABICRSZIq5A1g");
	this.shape.setTransform(-1.7,-53.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5D858").s().p("AhlBhQg3gCgHgtQgIgrArgXQA9gkA/gqICpgDQADAogMAZQgJAUgVANQh+BhhfAAIgGgBg");
	this.shape_1.setTransform(-25.5,105.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5D858").s().p("AgOBNQgmgPhGgqQgUgLgJgVQgJgXAAgsICogPQAUALAjAdQAgAbAaAMQAtASgFAoQgGApg2AIQgOADgPAAQgpAAgtgSg");
	this.shape_2.setTransform(26,104.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#353535").ss(17.1).p("AgnorQAHC5AjGgQAjGHACB3");
	this.shape_3.setTransform(14.3,41.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#353535").ss(17.1).p("AAJosQADC6gMGgQgMGJAFB2");
	this.shape_4.setTransform(-16.6,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-115.4,84.3,247.2);


(lib.toast_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C966CC").s().p("Ag0BsQgBgRA6g1IAAAAQgDAAgJALQgLALgGAAQgHAAgBgIQABgDAJgMIAPgRIgDgEQgEACgKAAIgCgBIgCgBQgJAKgCAAQgLAAABgLIgKADQgFAAgCgFIgCgEQAAgDANgSIANgUIAAgBQgEADgQAPIgPAPQgJAAAAgHQAAgGAMgLQANgMABgFQADgNAMgQIALgTQAGgJAGgCQgFgFAAgBIACgFQADgEAFAAQAFABATASIAaAYIAmATQAOAHAAAPQAAAEgFAJQAHAJAAAIQAAAHgiAfQgjAigSAAQgCAAgDgCIgNAOIgJARQgJAPgIABQgIgBAAgHgABFgfIAAgCIgJgGIAJAIgAABhQIAgAWIgNgKIgUgQIABAEg");
	this.shape.setTransform(16.2,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B58F67").s().p("AhGAgIAzg5QAdgRAeAAQAfAAAAAVQAAASg6AcQggASgXAAQgSAAgKgLg");
	this.shape_1.setTransform(29,34.1,0.634,0.634);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B58F67").s().p("Ag9gDQAZggA0gTQA8gVgSA4QgHAcgmAYQgdAUgiAHg");
	this.shape_2.setTransform(29.4,29.2,0.634,0.634);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B58F67").s().p("AhCA6QAFggAjgzQAng9AdAHQAtAJgjBGQgWAnghApg");
	this.shape_3.setTransform(25.8,24.5,0.634,0.634);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B58F67").s().p("AgsgLQgJhTAsgGQBFgIgQCgIhBAxQgShGgFgqg");
	this.shape_4.setTransform(19.6,23.9,0.634,0.634);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B58F67").s().p("AABByIg8goIAJgdQAKghgMgYIgBAHQhEAFgYgZQgYgZAngcQAPgMApARQAVAIAaAOQAOAEAGgNQACgNACABIgCgOQAFgUAMgIQALgIAXgEQAfgDAiAlQAbAdAOAjQAMAhghAzQgeAvgnAVQgIADgJAAQgTAAgZgNg");
	this.shape_5.setTransform(18.4,33.7,0.634,0.634);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#92681A").s().p("AAAAEQgFAAAAgEQAAgEAFAAIABAAQAFAAAAAEQAAAEgFAAg");
	this.shape_6.setTransform(5,12.4,0.562,0.676,0,-174.3,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#92681A").s().p("AgHACQgBgDAEgBIAGgDQAEgBACAFQABACgFACIgFADIgCAAQgDAAgBgEg");
	this.shape_7.setTransform(7,14.7,0.562,0.676,0,-174.3,5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#92681A").s().p("AgJAAQAAgCAFgBIAJgBQAFAAAAAEQAAADgFABIgJABIgBAAQgEAAAAgFg");
	this.shape_8.setTransform(10.4,18.1,0.562,0.676,0,-174.3,5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#92681A").s().p("AgBAFQgFAAAAgFQAAgDAFAAIADAAQAFAAAAADQAAAFgFAAg");
	this.shape_9.setTransform(14.2,14.8,0.562,0.676,0,-174.3,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#92681A").s().p("AgDADQgDgDAEgCIACgBQABgDADAEQADADgEACIgCABIgBABQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_10.setTransform(14.6,12.4,0.562,0.676,0,-174.3,5.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#92681A").s().p("AgBAFQgFAAAAgFQAAgDAFAAIADAAQAFAAAAADQAAAFgFAAg");
	this.shape_11.setTransform(36,18.1,0.562,0.676,0,-174.3,5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#92681A").s().p("AABAGIgEgDQgFgBACgDQABgGAFACIAEADQAEABgBADQgBAEgCAAIgDAAg");
	this.shape_12.setTransform(36.1,15.9,0.562,0.676,0,-174.3,5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#92681A").s().p("AgIAAQAAgDAFAAIAGgBQAFgBABAFQABACgEACIgJABQgFAAAAgFg");
	this.shape_13.setTransform(26.4,14.2,0.562,0.676,0,-174.3,5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#92681A").s().p("AAAAFIgFgEQgEgCAEgDQADgEACADIAGAFQAEACgDADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgCg");
	this.shape_14.setTransform(24.3,16.1,0.562,0.676,0,-174.3,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#92681A").s().p("AgIABQgBgDAFgBIAGgBQAFgBABAFQACADgFABIgHABIgBAAQgDAAgCgEg");
	this.shape_15.setTransform(20.1,20.5,0.562,0.676,0,-174.3,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#92681A").s().p("AgDAFQgGAAAAgFQAAgDAGAAIAIAAQAEAAAAADQAAAFgEAAg");
	this.shape_16.setTransform(29.7,22.7,0.562,0.676,0,-174.3,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#92681A").s().p("AABAGIgGgEQgEgCACgCQADgFAEACIAGAEQAEABgDADQgBADgDAAIgCAAg");
	this.shape_17.setTransform(26.8,21.8,0.562,0.676,0,-174.3,5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#92681A").s().p("AgIADQgCgDAEgCQAGgDAEAAQAFAAAAAFQAAADgFAAIgFACIgDABQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_18.setTransform(22.8,25.9,0.562,0.676,0,-174.3,5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#92681A").s().p("AgFACQgBgDAEgCIACgBQAFgCABAFQABADgEACIgDABIgBAAQgDAAgBgDg");
	this.shape_19.setTransform(26.4,24.5,0.562,0.676,0,-174.3,5.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#92681A").s().p("AgHACQgBgDAEgBIAFgDQAFgBACAFQABACgFACIgFADIgCAAQgDAAgBgEg");
	this.shape_20.setTransform(30.8,19.9,0.562,0.676,0,-174.3,5.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#92681A").s().p("AAAAFIgDgCQgFgCADgDQADgEACACIAFACQAEACgDADQgCADgCAAIgCgBg");
	this.shape_21.setTransform(28.9,15.4,0.562,0.676,0,-174.3,5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#92681A").s().p("AAHAFIgNgBQgFgBAAgDQAAgEAFAAIANABQAFABAAACQAAAFgEAAIgBAAg");
	this.shape_22.setTransform(28.3,18.1,0.562,0.676,0,-174.3,5.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#92681A").s().p("AgFAEQgFAAAAgEQAAgEAFAAIALAAQAFAAAAAEQAAAEgFAAg");
	this.shape_23.setTransform(24.4,19.8,0.562,0.676,0,-174.3,5.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#92681A").s().p("AgGADQgBgDAEgCIAEgDQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQADADgBABIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIAAABIgCAAQgDAAgBgDg");
	this.shape_24.setTransform(20.8,16.7,0.562,0.676,0,-174.3,5.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#92681A").s().p("AAAAEIgDAAQgFAAAAgEQAAgEAFAAQADAAAFABQAEACgBACQAAAEgEAAIgDAAIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_25.setTransform(19.2,14.6,0.562,0.676,0,-174.3,5.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#92681A").s().p("AAAAFQgEgBAAgEQAAgDAEgBIAAAAQAFABAAADQAAAEgFABg");
	this.shape_26.setTransform(16.1,16.3,0.562,0.676,0,-174.3,5.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#92681A").s().p("AgKAEQgCgEAFgBIANgFQAEgBACAFQABACgFACIgMAFIgDAAQgCAAgBgDg");
	this.shape_27.setTransform(10.8,15.4,0.562,0.676,0,-174.3,5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#92681A").s().p("AgBAFQgFgBAAgEQAAgDAFgBIADAAQAFABAAADQAAAEgFABg");
	this.shape_28.setTransform(14.8,18.3,0.562,0.676,0,-174.3,5.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#92681A").s().p("AAAAFIgCgBQgEgDACgCQACgDACAAQADAAACADQADACgFADIgDABIAAAAg");
	this.shape_29.setTransform(14.9,20.3,0.562,0.676,0,-174.3,5.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#92681A").s().p("AGqCtIgDgBQhfgZiIAHQibANhOABQjIAEjChJQgJgEgBgJQgCgJAJgFQCEhPCNhBQBAgdBBgaQAUgHAogTQAngQAZgDQAUgDAVALQAKAGAZASQAZATAeAdIA0AzQBBA9AbAdQAvA0AfAuIACAEIADAFQACAHgGAFIgEADQgEACgDABIgFgBgABNiKIgmAOQjfBSjUB7QBVAeBZAOQBsASBngGQBKgECVgKQBngDBRAPQgYgfgfgiQgbgeg7g3IgpgpQgZgYgTgQIgZgWQgRgOgMgEQgKgEgLAAQgJAAgJACg");
	this.shape_30.setTransform(20.3,19.6,0.562,0.676,0,-174.3,5.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AE7E2A").s().p("ADhCHQg/ABiRAPQhkAKh+gTQh7gThigmQD0iTEJhbQAPgGAKABQAHABANAIQAfATAhAeQAUARAmAmIBfBdQA7A+AfAxQhYgah2ACg");
	this.shape_31.setTransform(20.3,19.6,0.562,0.676,0,-174.3,5.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6C4A0E").s().p("AiRBCQgegEhrgXQhWgTg1AAQgKAAgEgLQgLgkAAgiQAAgOAOAAQAPAAABAOQAAAXAHAeQAnACAyAIIBiAVQBsAWBxABQArABA9gGIBogJQAwgFAqAEIBFALQAyADABghQAAgMAPAAQAPAAAAAMQgBAigaAPQgYAOgkgDIhDgJQgogFgcACIg+AGIg/AHQgtADguAAQhLAAhPgKg");
	this.shape_32.setTransform(21.3,9.7,0.562,0.676,0,-174.3,5.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C4A0E").s().p("Aj9AhQg4gOgbgFQgwgKglABQgLgnABgbINfBKQACAPgLANQgLAMgQAEQgNADgSgCIgggGQgtgJguACQgVAAgfAEIg0AGQhBAHhBAAQiDAAiCgdg");
	this.shape_33.setTransform(21.3,9.7,0.562,0.676,0,-174.3,5.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B58F67").s().p("AAABMIgXgFQgPgCgJgFQgJgEAAgFIACgJIAJgYIACgHQAHgYAFgLIAAgCIADgFIABgBIgBgDQAAgGAHgSQAJgVAIgFIAAAAIABABQgEAGgEAOIABgBQAFAAAAAEIgCAIQACgDADAAIACAAIAAACIgGAJIACADQADgKAHgIQAJgIAAALQAAACgEAHIAGACIADgCQACgDADAAQAIAAgBAHQAAAGgEAJIADABIAFgEIAGgEQAGABACAGIAAgHQADgIACABQACACAAAEQAAAUgKApIgGASQgMAkgFAAIgYgGg");
	this.shape_34.setTransform(17,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,4.3,50.6,55.8);


(lib.titlescreen_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// esp
	this.text = new cjs.Text("?", "bold 48px 'Open Sans'");
	this.text.lineHeight = 65;
	this.text.setTransform(556.8,49.2);

	this.text_1 = new cjs.Text("o", "bold 48px 'Open Sans'");
	this.text_1.lineHeight = 65;
	this.text_1.setTransform(527.3,49.2);

	this.text_2 = new cjs.Text("p", "bold 48px 'Open Sans'");
	this.text_2.lineHeight = 65;
	this.text_2.setTransform(497.4,49.2);

	this.text_3 = new cjs.Text("r", "bold 48px 'Open Sans'");
	this.text_3.lineHeight = 65;
	this.text_3.setTransform(477.9,49.2);

	this.text_4 = new cjs.Text("e", "bold 48px 'Open Sans'");
	this.text_4.lineHeight = 65;
	this.text_4.setTransform(449.4,49.2);

	this.text_5 = new cjs.Text("u", "bold 48px 'Open Sans'");
	this.text_5.lineHeight = 65;
	this.text_5.setTransform(418.6,49.2);

	this.text_6 = new cjs.Text("c", "bold 48px 'Open Sans'");
	this.text_6.lineHeight = 65;
	this.text_6.setTransform(394.6,49.2);

	this.text_7 = new cjs.Text("i", "bold 48px 'Open Sans'");
	this.text_7.lineHeight = 65;
	this.text_7.setTransform(364.6,49.2);

	this.text_8 = new cjs.Text("m", "bold 48px 'Open Sans'");
	this.text_8.lineHeight = 65;
	this.text_8.setTransform(319.5,49.2);

	this.text_9 = new cjs.Text("n", "bold 48px 'Open Sans'");
	this.text_9.lineHeight = 65;
	this.text_9.setTransform(275.7,49.2);

	this.text_10 = new cjs.Text("e", "bold 48px 'Open Sans'");
	this.text_10.lineHeight = 65;
	this.text_10.setTransform(247.2,49.2);

	this.text_11 = new cjs.Text("a", "bold 48px 'Open Sans'");
	this.text_11.lineHeight = 65;
	this.text_11.setTransform(206.3,49.2);

	this.text_12 = new cjs.Text("s", "bold 48px 'Open Sans'");
	this.text_12.lineHeight = 65;
	this.text_12.setTransform(183.1,49.2);

	this.text_13 = new cjs.Text("o", "bold 48px 'Open Sans'");
	this.text_13.lineHeight = 65;
	this.text_13.setTransform(153.6,49.2);

	this.text_14 = new cjs.Text("c", "bold 48px 'Open Sans'");
	this.text_14.lineHeight = 65;
	this.text_14.setTransform(129.6,49.2);

	this.text_15 = new cjs.Text("u", "bold 48px 'Open Sans'");
	this.text_15.lineHeight = 65;
	this.text_15.setTransform(98.8,49.2);

	this.text_16 = new cjs.Text("l", "bold 48px 'Open Sans'");
	this.text_16.lineHeight = 65;
	this.text_16.setTransform(82.6,49.2);

	this.text_17 = new cjs.Text("g", "bold 48px 'Open Sans'");
	this.text_17.lineHeight = 65;
	this.text_17.setTransform(52.9,49.2);

	this.text_18 = new cjs.Text("a", "bold 48px 'Open Sans'");
	this.text_18.lineHeight = 65;
	this.text_18.setTransform(12,49.2);

	this.text_19 = new cjs.Text("l", "bold 48px 'Open Sans'");
	this.text_19.lineHeight = 65;
	this.text_19.setTransform(-4.2,49.2);

	this.text_20 = new cjs.Text("r", "bold 48px 'Open Sans'");
	this.text_20.lineHeight = 65;
	this.text_20.setTransform(653.5,-17.2);

	this.text_21 = new cjs.Text("a", "bold 48px 'Open Sans'");
	this.text_21.lineHeight = 65;
	this.text_21.setTransform(625.7,-17.2);

	this.text_22 = new cjs.Text("l", "bold 48px 'Open Sans'");
	this.text_22.lineHeight = 65;
	this.text_22.setTransform(609.6,-17.2);

	this.text_23 = new cjs.Text("o", "bold 48px 'Open Sans'");
	this.text_23.lineHeight = 65;
	this.text_23.setTransform(580,-17.2);

	this.text_24 = new cjs.Text("r", "bold 48px 'Open Sans'");
	this.text_24.lineHeight = 65;
	this.text_24.setTransform(560.6,-17.2);

	this.text_25 = new cjs.Text("t", "bold 48px 'Open Sans'");
	this.text_25.lineHeight = 65;
	this.text_25.setTransform(541.2,-17.2);

	this.text_26 = new cjs.Text("n", "bold 48px 'Open Sans'");
	this.text_26.lineHeight = 65;
	this.text_26.setTransform(510.6,-17.2);

	this.text_27 = new cjs.Text("o", "bold 48px 'Open Sans'");
	this.text_27.lineHeight = 65;
	this.text_27.setTransform(481.1,-17.2);

	this.text_28 = new cjs.Text("c", "bold 48px 'Open Sans'");
	this.text_28.lineHeight = 65;
	this.text_28.setTransform(457.1,-17.2);

	this.text_29 = new cjs.Text("a", "bold 48px 'Open Sans'");
	this.text_29.lineHeight = 65;
	this.text_29.setTransform(416.1,-17.2);

	this.text_30 = new cjs.Text("n", "bold 48px 'Open Sans'");
	this.text_30.lineHeight = 65;
	this.text_30.setTransform(385.5,-17.2);

	this.text_31 = new cjs.Text("i", "bold 48px 'Open Sans'");
	this.text_31.lineHeight = 65;
	this.text_31.setTransform(370.3,-17.2);

	this.text_32 = new cjs.Text("l", "bold 48px 'Open Sans'");
	this.text_32.lineHeight = 65;
	this.text_32.setTransform(354.2,-17.2);

	this.text_33 = new cjs.Text("u", "bold 48px 'Open Sans'");
	this.text_33.lineHeight = 65;
	this.text_33.setTransform(323.4,-17.2);

	this.text_34 = new cjs.Text("s", "bold 48px 'Open Sans'");
	this.text_34.lineHeight = 65;
	this.text_34.setTransform(300.2,-17.2);

	this.text_35 = new cjs.Text("n", "bold 48px 'Open Sans'");
	this.text_35.lineHeight = 65;
	this.text_35.setTransform(269.6,-17.2);

	this.text_36 = new cjs.Text("i", "bold 48px 'Open Sans'");
	this.text_36.lineHeight = 65;
	this.text_36.setTransform(254.4,-17.2);

	this.text_37 = new cjs.Text("a", "bold 48px 'Open Sans'");
	this.text_37.lineHeight = 65;
	this.text_37.setTransform(213.5,-17.2);

	this.text_38 = new cjs.Text("l", "bold 48px 'Open Sans'");
	this.text_38.lineHeight = 65;
	this.text_38.setTransform(197.3,-17.2);

	this.text_39 = new cjs.Text("e", "bold 48px 'Open Sans'");
	this.text_39.lineHeight = 65;
	this.text_39.setTransform(155.6,-17.2);

	this.text_40 = new cjs.Text("c", "bold 48px 'Open Sans'");
	this.text_40.lineHeight = 65;
	this.text_40.setTransform(131.6,-17.2);

	this.text_41 = new cjs.Text("a", "bold 48px 'Open Sans'");
	this.text_41.lineHeight = 65;
	this.text_41.setTransform(103.9,-17.2);

	this.text_42 = new cjs.Text("h", "bold 48px 'Open Sans'");
	this.text_42.lineHeight = 65;
	this.text_42.setTransform(73.3,-17.2);

	this.text_43 = new cjs.Text("o", "bold 48px 'Open Sans'");
	this.text_43.lineHeight = 65;
	this.text_43.setTransform(30.5,-17.2);

	this.text_44 = new cjs.Text("m", "bold 48px 'Open Sans'");
	this.text_44.lineHeight = 65;
	this.text_44.setTransform(-14.6,-17.2);

	this.text_45 = new cjs.Text("ó", "bold 48px 'Open Sans'");
	this.text_45.lineHeight = 65;
	this.text_45.setTransform(-44.1,-17.2);

	this.text_46 = new cjs.Text("C", "bold 48px 'Open Sans'");
	this.text_46.lineHeight = 65;
	this.text_46.setTransform(-73.2,-17.2);

	this.text_47 = new cjs.Text("¿", "bold 48px 'Open Sans'");
	this.text_47.lineHeight = 65;
	this.text_47.setTransform(-96.8,-17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_47},{t:this.text_46},{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.text_42},{t:this.text_41},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]},2).wait(2));

	// en
	this.text_48 = new cjs.Text("?", "bold 49px 'Open Sans'", "#303030");
	this.text_48.lineHeight = 66;
	this.text_48.setTransform(517.5,38.7);

	this.text_49 = new cjs.Text("y", "bold 49px 'Open Sans'", "#303030");
	this.text_49.lineHeight = 66;
	this.text_49.setTransform(489.8,38.7);

	this.text_50 = new cjs.Text("d", "bold 49px 'Open Sans'", "#303030");
	this.text_50.lineHeight = 66;
	this.text_50.setTransform(459,38.7);

	this.text_51 = new cjs.Text("o", "bold 49px 'Open Sans'", "#303030");
	this.text_51.lineHeight = 66;
	this.text_51.setTransform(428.8,38.7);

	this.text_52 = new cjs.Text("b", "bold 49px 'Open Sans'", "#303030");
	this.text_52.lineHeight = 66;
	this.text_52.setTransform(398,38.7);

	this.text_53 = new cjs.Text("y", "bold 49px 'Open Sans'", "#303030");
	this.text_53.lineHeight = 66;
	this.text_53.setTransform(357.7,38.7);

	this.text_54 = new cjs.Text("m", "bold 49px 'Open Sans'", "#303030");
	this.text_54.lineHeight = 66;
	this.text_54.setTransform(309.8,38.7);

	this.text_55 = new cjs.Text("n", "bold 49px 'Open Sans'", "#303030");
	this.text_55.lineHeight = 66;
	this.text_55.setTransform(265.2,38.7);

	this.text_56 = new cjs.Text("i", "bold 49px 'Open Sans'", "#303030");
	this.text_56.lineHeight = 66;
	this.text_56.setTransform(250.3,38.7);

	this.text_57 = new cjs.Text("e", "bold 49px 'Open Sans'", "#303030");
	this.text_57.lineHeight = 66;
	this.text_57.setTransform(208.9,38.7);

	this.text_58 = new cjs.Text("s", "bold 49px 'Open Sans'", "#303030");
	this.text_58.lineHeight = 66;
	this.text_58.setTransform(184.7,38.7);

	this.text_59 = new cjs.Text("o", "bold 49px 'Open Sans'", "#303030");
	this.text_59.lineHeight = 66;
	this.text_59.setTransform(154.5,38.7);

	this.text_60 = new cjs.Text("c", "bold 49px 'Open Sans'", "#303030");
	this.text_60.lineHeight = 66;
	this.text_60.setTransform(129.5,38.7);

	this.text_61 = new cjs.Text("u", "bold 49px 'Open Sans'", "#303030");
	this.text_61.lineHeight = 66;
	this.text_61.setTransform(97.5,38.7);

	this.text_62 = new cjs.Text("l", "bold 49px 'Open Sans'", "#303030");
	this.text_62.lineHeight = 66;
	this.text_62.setTransform(82.6,38.7);

	this.text_63 = new cjs.Text("g", "bold 49px 'Open Sans'", "#303030");
	this.text_63.lineHeight = 66;
	this.text_63.setTransform(55.1,38.7);

	this.text_64 = new cjs.Text("l", "bold 49px 'Open Sans'", "#303030");
	this.text_64.lineHeight = 66;
	this.text_64.setTransform(583.7,-15.7);

	this.text_65 = new cjs.Text("o", "bold 49px 'Open Sans'", "#303030");
	this.text_65.lineHeight = 66;
	this.text_65.setTransform(553.6,-15.7);

	this.text_66 = new cjs.Text("r", "bold 49px 'Open Sans'", "#303030");
	this.text_66.lineHeight = 66;
	this.text_66.setTransform(531.5,-15.7);

	this.text_67 = new cjs.Text("t", "bold 49px 'Open Sans'", "#303030");
	this.text_67.lineHeight = 66;
	this.text_67.setTransform(510.3,-15.7);

	this.text_68 = new cjs.Text("n", "bold 49px 'Open Sans'", "#303030");
	this.text_68.lineHeight = 66;
	this.text_68.setTransform(478.3,-15.7);

	this.text_69 = new cjs.Text("o", "bold 49px 'Open Sans'", "#303030");
	this.text_69.lineHeight = 66;
	this.text_69.setTransform(448.2,-15.7);

	this.text_70 = new cjs.Text("c", "bold 49px 'Open Sans'", "#303030");
	this.text_70.lineHeight = 66;
	this.text_70.setTransform(423.1,-15.7);

	this.text_71 = new cjs.Text("n", "bold 49px 'Open Sans'", "#303030");
	this.text_71.lineHeight = 66;
	this.text_71.setTransform(378.5,-15.7);

	this.text_72 = new cjs.Text("i", "bold 49px 'Open Sans'", "#303030");
	this.text_72.lineHeight = 66;
	this.text_72.setTransform(363.6,-15.7);

	this.text_73 = new cjs.Text("l", "bold 49px 'Open Sans'", "#303030");
	this.text_73.lineHeight = 66;
	this.text_73.setTransform(348.8,-15.7);

	this.text_74 = new cjs.Text("u", "bold 49px 'Open Sans'", "#303030");
	this.text_74.lineHeight = 66;
	this.text_74.setTransform(316.8,-15.7);

	this.text_75 = new cjs.Text("s", "bold 49px 'Open Sans'", "#303030");
	this.text_75.lineHeight = 66;
	this.text_75.setTransform(292.6,-15.7);

	this.text_76 = new cjs.Text("n", "bold 49px 'Open Sans'", "#303030");
	this.text_76.lineHeight = 66;
	this.text_76.setTransform(260.6,-15.7);

	this.text_77 = new cjs.Text("i", "bold 49px 'Open Sans'", "#303030");
	this.text_77.lineHeight = 66;
	this.text_77.setTransform(245.7,-15.7);

	this.text_78 = new cjs.Text("s", "bold 49px 'Open Sans'", "#303030");
	this.text_78.lineHeight = 66;
	this.text_78.setTransform(208.9,-15.7);

	this.text_79 = new cjs.Text("e", "bold 49px 'Open Sans'", "#303030");
	this.text_79.lineHeight = 66;
	this.text_79.setTransform(180.1,-15.7);

	this.text_80 = new cjs.Text("o", "bold 49px 'Open Sans'", "#303030");
	this.text_80.lineHeight = 66;
	this.text_80.setTransform(149.9,-15.7);

	this.text_81 = new cjs.Text("d", "bold 49px 'Open Sans'", "#303030");
	this.text_81.lineHeight = 66;
	this.text_81.setTransform(119.1,-15.7);

	this.text_82 = new cjs.Text("w", "bold 49px 'Open Sans'", "#303030");
	this.text_82.lineHeight = 66;
	this.text_82.setTransform(64.8,-15.7);

	this.text_83 = new cjs.Text("o", "bold 49px 'Open Sans'", "#303030");
	this.text_83.lineHeight = 66;
	this.text_83.setTransform(34.6,-15.7);

	this.text_84 = new cjs.Text("H", "bold 49px 'Open Sans'", "#303030");
	this.text_84.lineHeight = 66;
	this.text_84.setTransform(-2.7,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_84},{t:this.text_83},{t:this.text_82},{t:this.text_81},{t:this.text_80},{t:this.text_79},{t:this.text_78},{t:this.text_77},{t:this.text_76},{t:this.text_75},{t:this.text_74},{t:this.text_73},{t:this.text_72},{t:this.text_71},{t:this.text_70},{t:this.text_69},{t:this.text_68},{t:this.text_67},{t:this.text_66},{t:this.text_65},{t:this.text_64},{t:this.text_63},{t:this.text_62},{t:this.text_61},{t:this.text_60},{t:this.text_59},{t:this.text_58},{t:this.text_57},{t:this.text_56},{t:this.text_55},{t:this.text_54},{t:this.text_53},{t:this.text_52},{t:this.text_51},{t:this.text_50},{t:this.text_49},{t:this.text_48}]}).to({state:[]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-15.7,605.5,124.8);


(lib.stomach_fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F26668").s().p("Ax4aeMAAAg07MAjwAAAMAAAA07g");
	this.shape.setTransform(114.5,169.5,1.21,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,0,277,339);


(lib.skin_redbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F26669").s().p("EhK+A0lMAAAhpJMCV9AAAMAAABpJg");
	this.shape.setTransform(480,377.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,41.2,960,673.1);


(lib.shoulders_eat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#886B4D").s().p("Ah2C7QgbgvgGhVQARgwAMg4QAYhzgYguQgOgZAsgKQAkgJA+AFQA7AEAmALQAqANgTALQggAVAaB8QANA+ATA4QgHBYgdAwQgnA/hOAAQhPAAgmhBg");
	this.shape.setTransform(52.2,-1.7,0.634,0.634);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#256659").s().p("AHIClIkKlFIqDAoQhiB4gQCzQgEAvABBDQAAAzgDAGImBgEQAIiZAwidQBgk4DJgWQAtgEC0gdQCXgYBQgDIDHgCQDYACBMAUQBMAVEWDWQCLBqB8BnIlZD/QgJgOiVi2g");
	this.shape_1.setTransform(60.9,22.9,0.634,0.634);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#886B4D").s().p("AjzFRQhBglgjhNQgphZACiGQABhlAMhPQAShvAqhiIDbBWQhMCugOBaQgaCcBmA6QAyAcAlgDQANgBAhgOQBCgaA0hcQAxhXBBjKIB6AnQhWHDkEBnQguATg0AAQhYAAheg1g");
	this.shape_2.setTransform(27.6,46.7,0.634,0.634);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#886B4D").s().p("AgRhAIAAAAQgtgxhFgxIACABQhTg3glgbIA8hRQAjAbBQA1IABAAIAAABQBNA4AzA4IAAAAQCUCcAvEbIhjARQgpj6h/iLg");
	this.shape_3.setTransform(108.3,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#886B4D").s().p("AAAA5QgfgJgMgeIgDhMQAjgEAgAzQAiAtgLAOQgKALgRAAQgIAAgJgCg");
	this.shape_4.setTransform(135.6,82.3,0.635,0.635);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#886B4D").s().p("AgOA0QgegxAAgmIAwgrQAWAbALAjQAOAogMAcQgLAbgOAAQgOAAgOgbg");
	this.shape_5.setTransform(131.7,87.1,0.635,0.635);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#886B4D").s().p("AgBBVQgdgHgIhIQgHg+AKgeIBBAJQAMA0AAAtQgBBDggAAQgGAAgEgCg");
	this.shape_6.setTransform(126.5,88.7,0.635,0.635);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#886B4D").s().p("AgzBXQglgaAwhDQAagkAug1IAkBKQgWAzgWAeQgZAkgZAAQgNAAgMgJg");
	this.shape_7.setTransform(120.4,84.3,0.635,0.635);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#886B4D").s().p("AggBnQgPgQgEgaQgEgZAHgWIgFgBQgBACgFAAQgJABghgFQg2gKABgcQABgpArgBQAbgBAxASIAMgjQAHgPAagJQAYgIAWABQAbABAZAUQAYATAMAcQAQAmgJApQgKAsggAVQghASgnAGQgNABgLAAQgeAAgQgQg");
	this.shape_8.setTransform(125.7,78.2,0.635,0.635);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-17.6,138.6,112);


(lib.shorttext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBDIAAhtIglAAIAAgYIBkAAIAAAYIglAAIAABtg");
	this.shape.setTransform(65.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWBDIgeg0IgQAAIAAA0IgdAAIAAiFIAoAAQAZAAANAKQAOAKAAAVQAAALgGAKQgHAHgMAFIAnA7gAgYgGIAJAAQAOAAAFgFQAGgEAAgKQAAgJgGgEQgFgFgOAAIgJAAg");
	this.shape_1.setTransform(53.2,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvAzQgQgSAAghQAAghARgRQARgSAdAAQAfAAARASQAQASAAAgQAAAhgRASQgQASgfAAQgeAAgRgSgAgYghQgJAMAAAVQAAAWAIAMQAKALAPAAQAiAAgBgtQABgsgiAAQgPAAgJALg");
	this.shape_2.setTransform(37.2,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBDIAAg6Ig0AAIAAA6IgdAAIAAiFIAdAAIAAA1IA0AAIAAg1IAcAAIAACFg");
	this.shape_3.setTransform(21.1,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA9IAAgbQAOAGAKACQAJADAIAAQAHAAAGgDQAEgEAAgHQAAgEgCgDQgCgEgEgCIgQgKQgMgFgGgDQgHgGgDgHQgEgHAAgJQAAgTAMgKQAMgKAUAAQAKAAAKADQAKACAKAFIgJAVQgLgEgHgCQgHgCgHAAQgGAAgFAFQgEADAAAHQAAADACADIAFAFIARAKQATAJAHAHQAHAJAAAOQAAASgOALQgNAKgVAAQgWAAgRgIg");
	this.shape_4.setTransform(7.3,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvAzQgQgSAAghQAAghARgRQAQgSAeAAQAfAAARASQAQASAAAgQAAAhgRASQgRASgeAAQgeAAgRgSgAgYghQgJAMAAAVQAAAWAJAMQAIALAQAAQAhAAAAgtQAAgsghAAQgQAAgIALg");
	this.shape_5.setTransform(63.5,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBDIAAhtIglAAIAAgYIBlAAIAAAYIglAAIAABtg");
	this.shape_6.setTransform(49.5,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWBDIgfg0IgPAAIAAA0IgdAAIAAiFIAoAAQAZAAANAKQAOAKAAAVQAAALgHAKQgGAHgMAFIAnA7gAgYgGIAKAAQANAAAFgFQAGgEAAgKQAAgJgGgEQgFgFgOAAIgJAAg");
	this.shape_7.setTransform(37.2,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvAzQgQgSAAghQAAghARgRQAQgSAeAAQAfAAARASQAQASAAAgQAAAhgRASQgRASgeAAQgeAAgRgSgAgYghQgJAMAAAVQAAAWAJAMQAIALAQAAQAhAAAAgtQAAgsghAAQgQAAgIALg");
	this.shape_8.setTransform(21.2,15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjAzQgPgSAAghQAAgTAHgRQAJgPAOgJQAOgIARAAQAUAAAUAKIgJAWIgQgGQgHgDgIAAQgOAAgIANQgJAMAAAUQAAAtAfAAQAOAAAVgHIAAAYQgQAHgVAAQgcAAgQgSg");
	this.shape_9.setTransform(6.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.6,29.8);


(lib.short_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAlQgNgNAAgYQAAgYANgNQAMgNAWAAQAWAAANANQAMANAAAYQAAAYgMANQgNAOgXAAQgVAAgMgOgAgNgYQgHAJAAAPQAAAQAGAJQAGAIALAAQAZAAAAghQABgggZgBQgLAAgGAJgAj4AtIAAgUIARAHQAHABAGABQAHAAADgDQAEgDAAgFQAAgDgCgDIgEgEIgNgHQgJgEgFgCQgEgEgDgFQgDgGAAgGQAAgNAJgJQAJgHAQAAQAHAAAIACIAPAFIgHAQIgOgEIgKgBQgGAAgDADQgDADAAAEIABAFIAFAEIAMAHQAOAGAGAGQAFAGAAAKQAAAOgJAHQgLAIgRAAQgQAAgMgGgADJAyIAAhRIgbAAIAAgRIBLAAIAAARIgbAAIAABRgACKAyIgYgnIgLAAIAAAnIgWAAIAAhiIAdAAQAVgBAKAIQAJAIAAAOQAAAKgFAGQgEAFgJAEIAdAsgABngEIAGAAQAKAAAFgEQAFgDAAgHQAAgHgFgDQgFgDgLAAIgFAAgAheAyIAAgsIgoAAIAAAsIgVAAIAAhiIAVAAIAAAmIAoAAIAAgmIAVAAIAABig");
	this.shape.setTransform(25,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWAmQgMgOAAgYQAAgXAMgOQANgNAXAAQAXAAAMANQAMAOAAAXQAAAYgMAOQgNANgXAAQgXAAgMgNgACngYQgHAIAAAQQAAAQAGAIQAHAJAMAAQAaAAAAghQAAghgZABQgNAAgGAIgAiDAmQgMgOAAgYQAAgXAMgOQANgNAXAAQAXAAAMANQAMAOAAAXQAAAYgMAOQgNANgXAAQgXAAgMgNgAhygYQgHAIAAAQQAAAQAGAIQAHAJAMAAQAaAAAAghQAAghgZABQgNAAgGAIgAjdAmQgLgOAAgYQAAgOAGgLQAFgMALgGQAKgHAPAAQAOAAAPAHIgHASIgLgGIgLgBQgMAAgHAJQgGAJAAAOQAAAhAZAAQAKAAAPgFIAAASQgMAFgPAAQgWAAgMgNgABQAxIAAhQIgbAAIAAgSIBLAAIAAASIgbAAIAABQgAAbAxIgYgmIgJAAIAAAmIgWAAIAAhiIAcAAQAUABAKAHQAJAIAAAOQAAAJgEAHQgFAFgJAEIAdArgAgGgEIAGAAQAIAAAFgDQAFgEAAgHQAAgHgFgDQgFgDgIAAIgGAAg");
	this.shape_1.setTransform(24.1,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.9,10.3);


(lib.screen345_txtlabels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AErA4IgNgEIAAgTQAHADAIACQAJACAGAAQANAAAAgIQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBgBAAAAIgGgEIgLgFQgKgFgFgDQgEgEgCgEQgDgDAAgHQAAgLAJgHQAJgGARAAQAQAAAPAHIgHARIgNgFQgFgCgHAAQgKAAAAAGQAAADADADQAEACALADQAKAEAFADQAFAEACAFQACAEABAHQAAANgKAHQgJAHgTAAIgQgBgADEAyQgHgHAAgNQAAgOAKgHQAJgGAUgBIAQgBIAAgBQAAgOgOAAQgLAAgOAHIgHgQQAOgIATAAQASAAAIAHQAKAIAAAQIAAA4IgRAAIgEgMIgBAAQgGAHgGADQgHADgJAAQgNAAgIgHgADqAQQgKAAgFADQgGAEAAAHQAAAKAMAAQAJAAAEgFQAFgFABgIIAAgHgABrAuQgMgMAAgVQAAgUALgMQALgMAUAAQASAAAKAKQALALgBAQIAAAMIg3AAQgBAKAHAGQAFAGAKAAQAIAAAHgCQAHgCAIgDIAAASQgGADgIACQgHABgKAAQgVAAgMgLgACaACQgBgHgFgEQgEgFgHAAQgIAAgEAFQgEAEgBAHIAiAAIAAAAgAg6ANQAAgVAMgLQALgMAVAAQAOAAALAGIgIASIgHgEQgGgBgEAAQgTAAAAAYQAAAaATAAQAGAAAGgCQAEgCAGgEIAAAVQgFAEgFABQgGABgIAAQgpAAgBgsgAj8AyQgIgHABgNQAAgOAKgHQAJgGAUgBIAPgBIAAgBQAAgOgOAAQgKAAgPAHIgHgQQAPgIASAAQASAAAJAHQAJAIAAAQIAAA4IgQAAIgEgMIgBAAQgHAHgGADQgGADgKAAQgNAAgHgHgAjWAQQgLAAgEADQgGAEAAAHQAAAKAMAAQAIAAAFgFQAFgFAAgIIAAgHgAAcA4IAAhWIASAAIADAPIABAAQAFgHAHgFQAGgEAJAAIAIAAIgCAXIgHgBQgMAAgGAGQgGAEAAAKIAAAtgAhkA4IAAgzQAAgIgDgEQgEgFgHAAQgLAAgEAHQgEAFAAAPIAAApIgYAAIAAhWIASAAIADAMIABAAQAFgHAHgDQAHgDAIAAQAQAAAHAIQAJAIAAAPIAAA4gAlgA4IAAhwIAlAAQAUAAAMAJQALAIgBASQAAATgLAHQgMAKgVAAIgKAAIAAApgAlHgDIAIAAQAKAAAHgEQAFgFAAgIQAAgIgFgFQgEgEgLAAIgKAAg");
	this.shape.setTransform(522.5,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEoA2QgIgIAAgMQAAgOAKgHQAKgGAUgBIAPgBIAAgEQAAgLgOAAQgKAAgPAHIgHgQQAPgJASABQASAAAJAHQAJAIAAANIAAA7IgQAAIgFgNIgBAAQgGAIgGADQgGADgKAAQgNAAgHgHgAFNATQgKAAgFAEQgFADAAAIQAAAKALgBQAJAAAFgEQAFgFAAgIIAAgHgADOAyQgMgMAAgWQAAgUALgMQALgMAUABQASAAALAKQAKAKAAARIAAAMIg4AAQAAAKAGAFQAFAHAKgBQAIABAHgCQAHgCAIgEIAAATQgGADgHACQgHABgLAAQgVAAgMgLgAD9AGQgBgHgEgFQgEgEgIAAQgIAAgEAEQgEAFgBAHIAiAAIAAAAgABDA2QgGgIAAgOIAAgoIgMAAIAAgKIAOgIIAGgTIAQAAIAAATIAYAAIAAASIgYAAIAAAoQAAAFADADQACACAFAAQAGAAAJgCIAAARQgJAEgNAAQgOAAgHgHgAghA2IAAgWQAMAFAIACQAIACAFAAQAHAAAFgDQAEgDAAgGQAAgEgCgCQgCgCgEgDIgMgIQgLgFgFgEQgFgDgDgGQgEgGAAgIQAAgPALgIQAKgKAQABQAJgBAIADIARAGIgIATIgPgGIgMgBQgFAAgDADQgEADAAAFQAAADACADIAEAFIAOAHQAQAGAGAIQAGAHAAAMQAAAQgMAIQgLAJgSAAQgSAAgOgHgAinAxQgJgMAAgVQAAgTAJgNQAJgMAQABQARgBAIANIABAAIgCgRIAAgcIAYAAIAAB4IgSAAIgFgMIgBAAQgIANgRAAQgPAAgJgMgAiTgBQgEAEAAANQAAANAEAGQAEAHAJAAQAJAAAEgFQAEgGABgNIAAgCQAAgOgEgEQgFgGgKAAQgIAAgEAHgAj/A3QgJgFgFgKQgGgKAAgOQAAgUAMgMQALgMAUABQANAAAJAFQAKAFAFAKQAFAJAAAOQAAAVgLAMQgLAMgUAAQgNAAgKgGgAj2gCQgEAFAAANQAAANAEAGQAEAHAKAAQAJAAAFgHQAEgGAAgNQAAgNgEgFQgFgGgJgBQgKABgEAGgAliA3QgJgFgFgKQgGgKAAgOQAAgUAMgMQALgMAUABQANAAAJAFQAKAFAFAKQAFAJAAAOQAAAVgLAMQgLAMgUAAQgNAAgKgGgAlZgCQgEAFAAANQAAANAEAGQAEAHAKAAQAJAAAFgHQAEgGAAgNQAAgNgEgFQgFgGgJgBQgKABgEAGgAH0A8IAAg0QAAgIgEgDQgDgGgHAAQgIABgFAGQgEAEAAAOIAAAsIgYAAIAAg0QAAgIgDgDQgDgGgHAAQgJAAgEAIQgEAEAAAPIAAAqIgYAAIAAhWIASAAIADALIABAAQAEgFAHgEQAGgEAJABQATgBAHANIADAAQADgGAHgDQAHgEAIABQAPAAAIAHQAHAIAAAOIAAA6gAB/A8IAAhWIASAAIAEAPIABAAQAEgHAHgFQAHgEAIAAIAIAAIgCAWIgHAAQgLAAgHAFQgGAFAAAKIAAAtgAmhA8IAAh4IAYAAIAAB4gAoKA8IAAhxIAjAAQAYABALAGQALAHAAAPQAAALgEAGQgFAGgIABIAAAAQALACAFAGQAEAIAAAKQAAAQgLAJQgLAJgUAAgAnyAoIAQAAQAKgBAEgEQAFgDAAgIQAAgPgUAAIgPAAgAnygIIAOAAQAKAAAEgCQAFgDAAgHQAAgHgFgDQgFgDgKAAIgNAAg");
	this.shape_1.setTransform(705.6,515.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAsAyQgMgMAAgVQAAgVALgMQALgMAUABQASAAALAKQAKAKgBARIAAAMIg3AAQgBAKAHAFQAFAHAKAAQAIAAAHgCQAHgCAIgEIAAATQgGADgIACQgHABgKAAQgVAAgMgLgABbAGQgBgHgFgFQgEgEgHAAQgIAAgEAEQgFAFAAAHIAiAAIAAAAgACEA8IAAhWIASAAIAEAPIABAAQAEgHAHgFQAHgFAIABIAIAAIgCAWIgHAAQgLAAgHAFQgGAEAAALIAAAtgAgeA8IgihWIAZAAIARAwIADASIABAAQAAgIAEgKIAOgwIAZAAIgfBWgAhkA8IAAhWIAYAAIAABWgAi8A8IAAhxIAYAAIAABcIAuAAIAAAVgAhlgxQAAgLANAAQANAAAAALQAAAGgDADQgEAEgGAAQgNgBAAgMg");
	this.shape_2.setTransform(19,208.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EA01Ao/QgKgGAAgMQAAgHAFgGQAFgFAJgCQgDgCgDgDQgDgEAAgEQAAgFADgDQADgEAFgDQgHgDgEgGQgDgHAAgJQAAgOAJgIQAJgIASAAIAOACIAfAAIAAAMIgOAEQAEAFAAAIQAAAOgJAIQgLAHgRAAIgEAAIgDAAQgFADAAADQABAFANAAIAOAAQAPAAAIAGQAHAHAAAMQAAAPgNAIQgNAJgYAAQgRAAgKgHgEA1EAojQgEAEgBAFQAAAFAGACQAEADAIAAQAOAAAGgDQAIgEAAgGQAAgFgEgCQgFgCgJAAIgMAAQgGAAgFADgEA1IAnlQAAAHAEAEQADAEAHAAQAGAAADgEQADgEAAgHQABgQgNAAQgNAAgBAQgEA3gAoVQgMgLAAgWQAAgWALgMQALgMATAAQATAAALALQAJAKABATIAAAMIg5AAQABAKAFAFQAGAGAKAAQAIAAAHgCQAHgBAHgEIAAATQgFADgHABQgIACgKAAQgVAAgMgMgEA4OAnqQAAgJgEgFQgFgFgIAAQgHAAgEAFQgFAFAAAJIAhAAIAAAAgEAxvAoaQgIgIAAgNQABgOAJgGQAKgHAUgBIAPAAIAAgEQAAgNgNAAQgLAAgPAGIgHgQQAPgIATAAQARAAAJAIQAKAHAAAQIAAA6IgRAAIgEgMIgCAAQgFAIgHADQgGADgKAAQgNAAgHgHgEAyUAn3QgKAAgEAEQgGADAAAHQAAAKALAAQAJAAAFgEQAFgFAAgIIAAgHgEAwRAoaIAAgXQALAGAIACQAIACAGAAQAJAAAEgDQAEgDAAgGQAAgEgCgCQgBgDgFgCIgOgIQgLgFgFgEQgFgFgDgGQgEgGABgIQAAgPAKgJQAKgJATAAQAIAAAJADIARAFIgIATIgQgFIgLgBQgIAAgDADQgEADAAAFQAAADACADIAEAEIAQAIQAQAIAGAIQAGAHAAAMQAAAPgLAJQgLAJgVAAQgRAAgOgHgEA2RAofIAAhXIASAAIAEAPIABAAQAEgIAHgEQAHgFAIAAIAIABIgCAWIgHAAQgLAAgHAFQgGAGAAALIAAAsgEA0HAofIAAgzQAAgJgDgFQgEgFgIAAQgJAAgEAHQgFAHAAAPIAAApIgYAAIAAhXIASAAIADALIABAAQAEgGAIgDQAGgEAJAAQAQAAAIAJQAHAIABAPIAAA5gEg1+gG9QgJgGAAgMQAAgHAFgGQAFgFAKgCQgEgCgDgDQgDgEAAgEQAAgFADgDQADgEAGgDQgIgDgDgGQgFgHAAgJQAAgOAKgIQAJgIARAAIAQACIAeAAIAAAMIgNAEQADAFAAAIQAAAOgKAIQgJAHgSAAIgEAAIgEAAQgDADAAADQAAAFAMAAIAQAAQAOAAAHAGQAIAHAAAMQAAAPgMAIQgOAJgXAAQgTAAgKgHgEg1ugHZQgFAEABAFQAAAFAEACQAFADAJAAQAMAAAIgDQAHgEAAgGQAAgFgFgCQgEgCgIAAIgNAAQgHAAgEADgEg1pgIXQAAAHACAEQAEAEAGAAQAHAAADgEQAEgEAAgHQAAgQgOAAQgMAAAAAQgEgxNgHhQgKgFgEgLQgGgKAAgOQAAgVALgMQAMgMAUAAQAMAAAKAGQAJAFAGAKQAFALAAANQAAAWgMAMQgLAMgTAAQgOAAgJgGgEgxFgIcQgDAGAAANQgBANAFAHQAEAHAKAAQAJAAAEgHQAFgHAAgNQAAgNgFgGQgEgHgJAAQgKAAgFAHgEgy9gHnQgJgMAAgVQAAgWAJgMQAJgMAQAAQAQAAAJANIAAAAIgBgRIAAgcIAYAAIAAB5IgSAAIgFgLIgBAAQgIANgRAAQgPAAgJgMgEgypgIcQgFAHABANQgBANAFAGQAEAHAIAAQAKAAAEgFQAEgGAAgNIAAgCQAAgOgEgGQgEgGgKAAQgIAAgEAGgEg0fgHiQgIgIAAgNQAAgOAKgGQAJgHAUgBIAPAAIAAgEQAAgNgNAAQgLAAgOAGIgHgQQAPgIASAAQASAAAJAIQAJAHAAAQIAAA6IgQAAIgFgMIgBAAQgGAIgGADQgGADgLAAQgNAAgGgHgEgz6gIFQgKAAgFAEQgGADABAHQAAAKALAAQAIAAAGgEQAEgFAAgIIAAgHgEg2sgHdIAAhXIAYAAIAABXgEg3egHdIAAgxIgtAAIAAAxIgZAAIAAhyIAZAAIAAAtIAtAAIAAgtIAYAAIAABygEg2tgI+IAAgCQAOgPAEgIIAbAAIAAABIgdAYgEAdvgnKIgNgEIAAgTQAHADAIACQAJACAGAAQANAAAAgIQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBgBAAAAIgGgEIgLgFQgKgFgFgDQgEgEgCgEQgDgFAAgHQAAgLAJgHQAJgGARAAQAQAAAPAHIgHARIgNgFQgFgCgHAAQgKAAAAAGQAAADADADQAEACALAFQAKAEAFADQAFAEACAFQACAEABAHQAAANgKAHQgJAHgTAAIgQgBgEAcIgnQQgHgHAAgNQAAgOAKgHQAJgGAUgBIAQgBIAAgDQAAgOgOAAQgLAAgOAHIgHgQQAOgIATAAQASAAAIAHQAKAIAAAQIAAA6IgRAAIgEgMIgBAAQgGAHgGADQgHADgJAAQgNAAgIgHgEAcugnyQgKAAgFADQgGAEAAAHQAAAKAMAAQAJAAAEgFQAFgFABgIIAAgHgEAavgnUQgMgMAAgVQAAgWALgMQALgMAUAAQASAAAKAKQALALgBASIAAAMIg3AAQgBAKAHAGQAFAGAKAAQAIAAAHgCQAHgCAIgDIAAASQgGADgIACQgHABgKAAQgVAAgMgLgEAbegoAQgBgJgFgEQgEgFgHAAQgIAAgEAFQgEAEgBAJIAiAAIAAAAgEAYIgn1QAAgXAMgLQALgMAVAAQAOAAANAGIgIASIgJgEIgKgBQgTAAAAAaQAAAaATAAQAGAAAGgCQAGgCAGgEIAAAVQgFAEgHABQgGABgIAAQgpAAgBgsgEAVGgnQQgIgHABgNQAAgOAKgHQAJgGAUgBIAPgBIAAgDQAAgOgOAAQgKAAgPAHIgHgQQAPgIASAAQASAAAJAHQAJAIAAAQIAAA6IgQAAIgEgMIgBAAQgHAHgGADQgGADgKAAQgNAAgHgHgEAVsgnyQgLAAgEADQgGAEAAAHQAAAKAMAAQAIAAAFgFQAFgFAAgIIAAgHgEAZggnKIAAhYIASAAIADAPIABAAQAFgHAHgFQAGgEAJAAIAIAAIgCAXIgHgBQgMAAgGAGQgGAGAAAKIAAAtgEAXegnKIAAgzQAAgKgDgEQgEgFgHAAQgLAAgEAHQgEAGAAAQIAAApIgYAAIAAhYIASAAIADAMIABAAQAFgHAHgDQAHgDAIAAQAQAAAHAIQAJAIAAAQIAAA5gEATignKIAAhyIAlAAQAUAAAMAJQALAIgBASQAAATgLAJQgMAKgVAAIgKAAIAAApgEAT7goHIAIAAQAKAAAHgEQAFgFAAgIQAAgIgFgFQgEgEgLAAIgKAAgEAVbgorIAAgCQANgQAFgIIAbAAIAAACIgeAYg");
	this.shape_3.setTransform(362.1,263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,758,521.5);


(lib.screen12text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape.setTransform(351.9,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5BUIAAikIAqAAIAJAaIADAAQAFgMANgIQANgJANAAIAOABIADABIgFA2QgHgCgMAAQgTAAgJAJQgGAJAAAOIAABRg");
	this.shape_1.setTransform(337.4,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_2.setTransform(319.8,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAZBqIgohSIgRALIAABHIg7AAIAAjTIA7AAIAABdQAEgJANgTIArhBIBAAAIhEBfIBCB0g");
	this.shape_3.setTransform(301.8,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnByIAAh5IgWAAIAAgcIAXgOIAAgDQAAghANgOQAOgOAbAAQAMAAALABIAXAHIgMAlQgLgDgKAAQgGAAgDAEQgEAEAAAJIAAAEIAjAAIAAArIgjAAIAAB5g");
	this.shape_4.setTransform(277.1,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7A+QgWgXgBgnQAAgoAXgWQAVgWAmAAQAZgBASALQATAKAKAUQALATAAAZQAAAogXAWQgVAYgnAAQglgBgWgXgAgSgfQgFALAAAUQAAAUAFAMQAGALAMAAQANAAAGgLQAFgMAAgUQAAgUgFgLQgGgLgNAAQgMAAgGALg");
	this.shape_5.setTransform(260.6,25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4A/QgXgVAAgqQAAgoAWgWQAVgWAlAAQAmAAAUATQAVAUAAAkIAAAYIhlAAQABAOAJAIQAKAHAPAAQAPABAMgDQANgDAPgHIAAApQgOAHgOADQgOADgUAAQgoAAgXgXgAAcgTQgBgMgGgHQgHgIgLABQgIAAgHAGQgGAHgCANIAwAAIAAAAg");
	this.shape_6.setTransform(234.1,25.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnByIAAh5IgWAAIAAgcIAXgOIAAgDQAAghANgOQAOgOAbAAQAMAAALABIAXAHIgMAlQgLgDgKAAQgGAAgEAEQgDAEAAAJIAAAEIAkAAIAAArIgkAAIAAB5g");
	this.shape_7.setTransform(219.4,22.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcB0IAAikIA4AAIAACkgAgdhZQAAgNAHgGQAHgHAPAAQAQAAAGAHQAIAGAAANQAAAZgeAAQgdAAAAgZg");
	this.shape_8.setTransform(207.6,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbBxIAAjhIA3AAIAADhg");
	this.shape_9.setTransform(197.9,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag4A/QgXgVAAgqQAAgoAWgWQAVgWAlAAQAmAAAUATQAVAUAAAkIAAAYIhlAAQABAOAJAIQAKAHAPAAQAPABAMgDQANgDAPgHIAAApQgOAHgOADQgOADgUAAQgoAAgXgXgAAcgTQgBgMgGgHQgHgIgLABQgIAAgHAGQgGAHgCANIAwAAIAAAAg");
	this.shape_10.setTransform(176.1,25.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWBxIAAhaQAAgggTABQgMAAgGAKQgIALAAAbIAABJIg4AAIAAjhIA4AAIAAAgQABAWgDAcIADAAQAIgNALgFQAJgGAPABQAcAAAQAPQAQARAAAaIAABsg");
	this.shape_11.setTransform(156.9,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaBWQgNgOAAgdIAAhCIgUAAIAAgYIAZgSIAPgjIAkAAIAAAiIAoAAIAAArIgoAAIAAA+QAAAQAPAAQAMAAAQgFIAAApQgMAFgKACQgLADgOAAQgaAAgNgPg");
	this.shape_12.setTransform(139.9,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgFgIQgEgJgLAAQgNAAgGALQgHAMAAAbIAABIIg5AAIAAikIAsAAIAHAVIADAAQAHgMANgGQALgGARAAQAcAAAPAQQAPAQAAAdIAABqg");
	this.shape_13.setTransform(115.3,25.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbB0IAAikIA3AAIAACkgAgdhZQAAgNAHgGQAIgHAOAAQAPAAAIAHQAHAGAAANQAAAZgeAAQgdAAAAgZg");
	this.shape_14.setTransform(100.4,22.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhLB0IAAgtQAIACAKAAQAIAAAFgDQAGgDAEgGQAEgFAFgMIhBihIA8AAIAcBeQACAIAAALIAAAAIAEgSIAdhfIA6AAIhBCuQgNAhgQAPQgTANgdAAQgMAAgMgCg");
	this.shape_15.setTransform(78.6,29.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_16.setTransform(59.7,25.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgzBpQgNgKgHgUQgIgTAAgbQAAgmARgXQAQgXAcAAQAOAAAJAGQAKAFAJAOIABAAQgDgUAAgUIAAgsIA6AAIAADiIgrAAIgNgVIgCAAQgPAYgbAAQgSAAgNgKgAgOAAQgHALAAATQAAAUAHAJQAGALAKgBQANAAAGgIQAGgIAAgTIAAgEQAAgWgGgIQgHgJgNAAQgJAAgGAJg");
	this.shape_17.setTransform(40.8,22.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAtBrIgKgoIhEAAIgLAoIg/AAIBGjVIBKAAIBIDVgAAWATIgJghIgHgeIgGgaIgEAYIgRBBIArAAg");
	this.shape_18.setTransform(13,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgzBpQgNgKgHgUQgIgTAAgbQAAgmARgXQAQgXAcAAQAOAAAJAGQAKAFAJAOIABAAQgDgUAAgUIAAgsIA6AAIAADiIgrAAIgNgVIgCAAQgPAYgbAAQgSAAgNgKgAgOAAQgHALAAATQAAAUAHAJQAGALAKgBQANAAAGgIQAGgIAAgTIAAgEQAAgWgGgIQgHgJgNAAQgJAAgGAJg");
	this.shape_19.setTransform(223.8,22.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcB0IAAikIA4AAIAACkgAgdhZQAAgNAIgGQAGgHAPAAQAQAAAGAHQAIAGAAANQAAAZgeAAQgdAAAAgZg");
	this.shape_20.setTransform(209.7,22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggBqIhGjTIBAAAIAdBqQAJAkAAAOIAEgaIAFgXIAehrIBBAAIhHDTg");
	this.shape_21.setTransform(194.4,23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_22.setTransform(166.5,25.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgEgIQgGgJgKAAQgNAAgGALQgGAMAAAbIAABIIg5AAIAAikIAqAAIAHAVIAEAAQAIgMANgGQAKgGARAAQAcAAAPAQQAQAQAAAdIAABqg");
	this.shape_23.setTransform(130.2,25.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_24.setTransform(84.1,25.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgtByIAAijIA4AAIAACjgAgxhCIAAgDIAdggIAKgMIA8AAIAAACIggAZIgdAUg");
	this.shape_25.setTransform(72.1,22.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhaBqIAAjTIBLAAQAxAAAcAZQAdAbAAAyQAAAzgeAdQgdAdg0AAgAgfA7IAMAAQAZAAAMgPQANgPAAgeQAAgegMgOQgMgOgVAAIgRAAg");
	this.shape_26.setTransform(54.9,23.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhDBWQgXgXAAgqIAAiAIA6AAIAAB7QAAAXAIALQAJAJAPABQARgBAJgJQAHgLABgXIAAh7IA5AAIAAB+QAAArgYAXQgXAXgsAAQgrAAgYgWg");
	this.shape_27.setTransform(4.3,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17,p:{x:40.8}},{t:this.shape_16,p:{x:59.7}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:115.3}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:176.1}},{t:this.shape_9,p:{x:197.9}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:234.1}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:301.8}},{t:this.shape_2,p:{x:319.8}},{t:this.shape_1,p:{x:337.4}},{t:this.shape,p:{x:351.9}}]}).to({state:[{t:this.shape_27},{t:this.shape_13,p:{x:25.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_10,p:{x:110.9}},{t:this.shape_23},{t:this.shape_9,p:{x:152.8}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_16,p:{x:242.7}},{t:this.shape_17,p:{x:269.4}},{t:this.shape_6,p:{x:288.7}},{t:this.shape_3,p:{x:317.2}},{t:this.shape_2,p:{x:335.2}},{t:this.shape_1,p:{x:352.8}},{t:this.shape,p:{x:367.3}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363.7,44.9);


(lib.sand_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C966CC").s().p("Ag0BsQgBgRA6g1IAAAAQgDAAgJALQgLALgGAAQgHAAgBgIQABgDAJgMIAPgRIgDgEQgEACgKAAIgCgBIgCgBQgJAKgCAAQgLAAABgLIgKADQgFAAgCgFIgCgEQAAgDANgSIANgUIAAgBQgEADgQAPIgPAPQgJAAAAgHQAAgGAMgLQANgMABgFQADgNAMgQIALgTQAGgJAGgCQgFgFAAgBIACgFQADgEAFAAQAFABATASIAaAYIAmATQAOAHAAAPQAAAEgFAJQAHAJAAAIQAAAHgiAfQgjAigSAAQgCAAgDgCIgNAOIgJARQgJAPgIABQgIgBAAgHgABFgfIAAgCIgJgGIAJAIgAABhQIAgAWIgNgKIgUgQIABAEg");
	this.shape.setTransform(16.2,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B58F67").s().p("AhGAgIAzg5QAdgRAeAAQAfAAAAAVQAAASg6AcQggASgXAAQgSAAgKgLg");
	this.shape_1.setTransform(29,34.1,0.634,0.634);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B58F67").s().p("Ag9gDQAZggA0gTQA8gVgSA4QgHAcgmAYQgdAUgiAHg");
	this.shape_2.setTransform(29.4,29.2,0.634,0.634);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B58F67").s().p("AhCA6QAFggAjgzQAng9AdAHQAtAJgjBGQgWAnghApg");
	this.shape_3.setTransform(25.8,24.5,0.634,0.634);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B58F67").s().p("AgsgLQgJhTAsgGQBFgIgQCgIhBAxQgShGgFgqg");
	this.shape_4.setTransform(19.6,23.9,0.634,0.634);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B58F67").s().p("AABByIg8goIAJgdQAKghgMgYIgBAHQhEAFgYgZQgYgZAngcQAPgMApARQAVAIAaAOQAOAEAGgNQACgNACABIgCgOQAFgUAMgIQALgIAXgEQAfgDAiAlQAbAdAOAjQAMAhghAzQgeAvgnAVQgIADgJAAQgTAAgZgNg");
	this.shape_5.setTransform(18.4,33.7,0.634,0.634);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B58F67").s().p("AAABMIgXgFQgPgCgJgFQgJgEAAgFIACgJIAJgYIACgHQAHgYAFgLIAAgCIADgFIABgBIgBgDQAAgGAHgSQAJgVAIgFIAAAAIABABQgEAGgEAOIABgBQAFAAAAAEIgCAIQACgDADAAIACAAIAAACIgGAJIACADQADgKAHgIQAJgIAAALQAAACgEAHIAGACIADgCQACgDADAAQAIAAgBAHQAAAGgEAJIADABIAFgEIAGgEQAGABACAGIAAgHQADgIACABQACACAAAEQAAAUgKApIgGASQgMAkgFAAIgYgGg");
	this.shape_6.setTransform(17,43.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CBAC6B").s().p("AgBAAIAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAIAAAAQABAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAg");
	this.shape_7.setTransform(28.7,5.4,1.142,1.142,-5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CBAC6B").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_8.setTransform(25.9,2.7,1.142,1.142,-5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBAC6B").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_9.setTransform(28.8,0.1,1.142,1.142,-5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBAC6B").s().p("AAAAAIgBAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAIAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_10.setTransform(31.9,2.6,1.142,1.142,-5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIAAABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_11.setTransform(23.2,-0.1,1.142,1.142,-5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBAC6B").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_12.setTransform(25.9,0.3,1.142,1.142,-5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CBAC6B").s().p("AAAABIAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAABIABAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIgBABIAAgBg");
	this.shape_13.setTransform(18.4,3.3,1.142,1.142,-5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CBAC6B").s().p("AAAACQAAgBgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAACIgBAAIAAAAg");
	this.shape_14.setTransform(23.8,4.3,1.142,1.142,-5.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CBAC6B").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_15.setTransform(22.1,7.3,1.142,1.142,-5.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CBAC6B").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_16.setTransform(16.7,2.1,1.142,1.142,-5.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CBAC6B").s().p("AAAABIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAIAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIgBABIAAgBg");
	this.shape_17.setTransform(21.3,0.7,1.142,1.142,-5.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_18.setTransform(37.1,16.8,1.142,1.142,-5.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CBAC6B").s().p("AgDABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAEgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAIgDABIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_19.setTransform(36.2,20.4,1.142,1.142,-5.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBAC6B").s().p("AAAACQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_20.setTransform(30.5,19.6,1.142,1.142,-5.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CBAC6B").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_21.setTransform(29.1,22.9,1.142,1.142,-5.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBAC6B").s().p("AgBAAIAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAAAQABABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_22.setTransform(32.9,21.2,1.142,1.142,-5.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIAAAAIAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_23.setTransform(35.1,18.7,1.142,1.142,-5.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CBAC6B").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_24.setTransform(34.3,16.8,1.142,1.142,-5.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CBAC6B").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_25.setTransform(34.9,13.9,1.142,1.142,-5.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CBAC6B").s().p("AAAACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_26.setTransform(33,11.9,1.142,1.142,-5.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CBAC6B").s().p("AAAACIgBgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCABIAAAAg");
	this.shape_27.setTransform(33.5,8.9,1.142,1.142,-5.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBAC6B").s().p("AAAABIAAgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIABAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIAAAAIAAgBg");
	this.shape_28.setTransform(35.1,4.9,1.142,1.142,-5.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CBAC6B").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_29.setTransform(35.4,2.5,1.142,1.142,-5.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CBAC6B").s().p("AgBABQAAAAAAgBQgBAAABAAQAAAAAAAAQAAAAAAAAIABgBQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQABAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgBABIAAAAIgBgBg");
	this.shape_30.setTransform(34.5,0.1,1.142,1.142,-5.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CBAC6B").s().p("AAAACQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCACIAAABIAAgBg");
	this.shape_31.setTransform(9.3,7.1,1.142,1.142,-5.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CBAC6B").s().p("AgCAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_32.setTransform(12.4,8.6,1.142,1.142,-5.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBIAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAAAAIAAABQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_33.setTransform(10.8,9.9,1.142,1.142,-5.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIAAAAIAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_34.setTransform(13.8,13,1.142,1.142,-5.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CBAC6B").s().p("AgCAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgBABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_35.setTransform(15.8,15.4,1.142,1.142,-5.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CBAC6B").s().p("AAAABIgBgBQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCABIAAgBg");
	this.shape_36.setTransform(25.9,16.9,1.142,1.142,-5.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CBAC6B").s().p("AgCACQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIACgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCACIAAABIgCgBg");
	this.shape_37.setTransform(23.9,20.1,1.142,1.142,-5.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CBAC6B").s().p("AgCAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAIgBABIAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_38.setTransform(24,23.3,1.142,1.142,-5.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_39.setTransform(21,23.8,1.142,1.142,-5.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CBAC6B").s().p("AgBABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAIAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBABIgBgBg");
	this.shape_40.setTransform(19.1,22.8,1.142,1.142,-5.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CBAC6B").s().p("AAAADQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgBABQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIAAAAg");
	this.shape_41.setTransform(18.5,20.6,1.142,1.142,-5.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_42.setTransform(18.9,17.2,1.142,1.142,-5.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_43.setTransform(18.7,17.3,1.142,1.142,-5.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIAAAAIAAABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_44.setTransform(14.7,17.9,1.142,1.142,-5.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CBAC6B").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_45.setTransform(22.3,30,1.142,1.142,-5.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CBAC6B").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAAAAIAAABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_46.setTransform(20.8,29.2,1.142,1.142,-5.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CBAC6B").s().p("AABACIgBgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIADAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAIgBAAg");
	this.shape_47.setTransform(15.4,29,1.142,1.142,-5.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CBAC6B").s().p("AgCABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIgCABIAAAAIgCgBg");
	this.shape_48.setTransform(17.4,29.3,1.142,1.142,-5.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CBAC6B").s().p("AgCACQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIAFAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAg");
	this.shape_49.setTransform(17,30.3,1.142,1.142,-5.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CBAC6B").s().p("AAAACIgBgCQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIACABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgBAAIAAgBg");
	this.shape_50.setTransform(19.9,29.7,1.142,1.142,-5.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CBAC6B").s().p("AAAACQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABIgBABIAAAAg");
	this.shape_51.setTransform(27.6,20.3,1.142,1.142,-5.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CBAC6B").s().p("AAAACIgBgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIACABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIgBABIAAgBg");
	this.shape_52.setTransform(30.9,16.7,1.142,1.142,-5.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CBAC6B").s().p("AACACIgDgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIADABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape_53.setTransform(29.2,14.6,1.142,1.142,-5.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CBAC6B").s().p("AgBAAIAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAAAQABABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_54.setTransform(28.6,12.6,1.142,1.142,-5.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CBAC6B").s().p("AAAAAIAAAAQgBAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAABAAIAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_55.setTransform(30.7,8.2,1.142,1.142,-5.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CBAC6B").s().p("AAAACIAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIABABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAg");
	this.shape_56.setTransform(30.7,4.8,1.142,1.142,-5.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CBAC6B").s().p("AABACIgCgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIACABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIgBABIgBAAg");
	this.shape_57.setTransform(28.6,2.7,1.142,1.142,-5.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CBAC6B").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_58.setTransform(24.1,2.2,1.142,1.142,-5.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CBAC6B").s().p("AgBADQgCgDADgDQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgBACQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_59.setTransform(21,4,1.142,1.142,-5.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CBAC6B").s().p("AAAACQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQgBAAAAABIAAABIgBAAIAAAAg");
	this.shape_60.setTransform(25.2,5.6,1.142,1.142,-5.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CBAC6B").s().p("AgFABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIAGgBQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgGACIgBABQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_61.setTransform(26.8,7.3,1.142,1.142,-5.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CBAC6B").s().p("AACAEIgFgEQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAFADQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgCABIgBAAg");
	this.shape_62.setTransform(21.1,9.3,1.142,1.142,-5.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CBAC6B").s().p("AgCABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgCABIgBAAIgBgBg");
	this.shape_63.setTransform(24.1,10.4,1.142,1.142,-5.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CBAC6B").s().p("AgEACQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAFgCQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgEADIgBAAIgCgBg");
	this.shape_64.setTransform(22.3,13.6,1.142,1.142,-5.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CBAC6B").s().p("AAAABIAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIACABIABAAIAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgBgBg");
	this.shape_65.setTransform(18.7,12.6,1.142,1.142,-5.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CBAC6B").s().p("AgCABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_66.setTransform(16,10.9,1.142,1.142,-5.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CBAC6B").s().p("AgCADQAAgBAAAAQgBAAAAgBQAAAAAAAAQABgBAAAAQACgBAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCACIAAABIgCAAg");
	this.shape_67.setTransform(16.3,8.6,1.142,1.142,-5.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CBAC6B").s().p("AAAACIgBgCQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACABQABAAAAAAQAAAAABAAQAAAAAAAAQAAABgBAAIgCABIgBAAg");
	this.shape_68.setTransform(17.8,5.8,1.142,1.142,-5.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CBAC6B").s().p("AgHACQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAGgCAGAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgHAAgFADIgBAAIgBgBg");
	this.shape_69.setTransform(15.1,5.7,1.142,1.142,-5.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CBAC6B").s().p("AAAABQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAABIAAAAIgBABIAAgBg");
	this.shape_70.setTransform(13.5,5.2,1.142,1.142,-5.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EED18D").s().p("AgwB5QgXgEgOgPQgOgOgDgcIgDguQgDgcgGgKQgFgGgJgFIgQgKQgKgIgBgJQgBgOAVgJQAHgDAYgHIABgBQALgGARgCIAcgEIAfgHQASgFALgBQAOgCASACIAfAEIAeADQASACALADQAOAEAFALQAFAKgHANQgCAFgGAHIgJALQgKARABAUQAAALAFAPIAHAbQAGArglAQQgpARhIAFIgQAAQgQAAgKgCgAAAhzQghAJgRADIgaADQgOABgJAGQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgSAEQgLADgFAFQgUATAfAVQALAHAFANQAHAOABAXIACAoQAFAnAeAOQAYAKAogDQAjgDAdgHIAggHQASgGAJgKQAQgRgIgjQgLgsABgJQACgTAMgRQAKgKACgHQAIgVgPgIQgHgEgWgDQgmgGgTgBIgZgCQgSAAgMADg");
	this.shape_71.setTransform(22.9,12.8,1.142,1.142,-5.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EED18D").s().p("Ag2B2QgbgIgLgVQgHgNgCgaIgCgkQgCgQgDgKQgEgPgJgIIgLgGIgLgGQgFgDgDgGQgDgGACgFQABgGALgGQAUgKATgEIgBgBQAIgGANgCIAWgCQANgBAdgIQAYgGAPgBQALgBAYADIBBAIQAbAFAEANQADAKgGAKIgMARQgYAfAQArQAJAbgDAUQgCAPgOAKQgKAIgRAEQgxAOgyADIgUABQgQAAgMgDg");
	this.shape_72.setTransform(22.9,12.8,1.142,1.142,-5.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CBAC6B").s().p("AghCDQgigCgTgIQgagLgKgaQgFgNAAgcQgBgbgFgNQgGgPgRgJQgRgJgEgIQgGgSAIgOQAHgMASgMIADgBQBjgnBgADQA0ABARADQAvAHAMAVQAHANgFAOIgDAGQgEADAAACQgKAXgEALQgGATACAQQACAkgCAOQgEAcgSAQQgiAfhbAAIgngCgAiQhTIgBAAQgXAQAPAWQAJANATAUQAGAMABAQIADAfQAHA2ArAOQAaAIA9gFQA6gEAbgPQAngXgEg0IgGghQgDgVAGgNIAEgGQADgDABgDQAZgSgeghIgjgHQgkgGgkAAQhYAAhbAkg");
	this.shape_73.setTransform(23.1,12.9,1.142,1.142,-5.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CBAC6B").s().p("AgzB8QgsgEgPgZQgHgNgDgUIgCglQgCgUgGgOQgIgSgNgEIgJgCQgFgCgDgCQgIgHADgPQADgSAXgLQBGgeBLgGQBJgGBJASQAfAIAAAVQAAALgMALQgPAOgDAFQgFAKACAQIAFAaQAFAZgEAXQgFAagPANQgJAJgWAGQg2AOg0AAQgVAAgVgCg");
	this.shape_74.setTransform(23,12.9,1.142,1.142,-5.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#57BB6F").s().p("AgOAmQgFgDADgFIAPgbQAEgGACgEQACgIgEgFQgCgCgGgFQgFgCADgGQADgFAEADQAUALgCAPQAAAGgEAFIgGAJIgOAbQgCADgCAAIgEgBg");
	this.shape_75.setTransform(40.3,7.7,1.142,1.142,-5.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#57BB6F").s().p("AgCggQAFAEAEADQAFAGAAAHQAAADgEAIIgTAig");
	this.shape_76.setTransform(40.3,7.7,1.142,1.142,-5.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#57BB6F").s().p("Ag7AgQgMgGgTgPQgFgEAFgEQAEgDAFACQAUAQANAGQATAIATgHIAOgGIAQgGQAGgBALABIAKACQA3gUgmgaQgEgEAEgEQAFgEAEAEQAUATAAAUQABAagfACIgdABQgSABgMAEIgNAFQgIADgHAAQgRAAgSgKg");
	this.shape_77.setTransform(29.2,24.9,1.142,1.142,-5.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#57BB6F").s().p("AgvAgQgRgHgXgTICbgpQAMAMADAGQAHANgDAJQgDAJgKAFQgJAEgLgBIgTgDQgMgBgIACIgSALQgKAFgMAAQgKAAgMgEg");
	this.shape_78.setTransform(29.3,24.8,1.142,1.142,-5.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E3523A").s().p("AgKAwQgagHgOgTQgPgTAFgSQAFgUAVgJQAWgKAXAHQAaAHAOATQAPAUgFASQgFAUgVAJQgMAFgOAAQgJAAgKgDg");
	this.shape_79.setTransform(29.8,1.3,1.142,1.142,-5.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#943E33").s().p("AgKAwQgZgHgPgTQgPgTAFgSQAFgUAWgKQAVgJAXAHQAaAHAOATQAPAUgFASQgFAUgVAJQgMAFgOAAQgJAAgKgDg");
	this.shape_80.setTransform(29.7,1.9,1.142,1.142,-5.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E3523A").s().p("AgEA/QgYgCgQgTQgPgUACgYQADgaATgSQASgRAWABQAYACAQATQAPAUgDAYQgCAagTASQgRAQgTAAIgEAAg");
	this.shape_81.setTransform(36.7,16.2,1.142,1.142,-5.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#943E33").s().p("AgEA/QgYgCgQgTQgPgUADgYQACgaATgSQASgRAWABQAYACAQATQAPAUgDAYQgCAagTASQgRAQgTAAIgEAAg");
	this.shape_82.setTransform(37.5,16.2,1.142,1.142,-5.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E3523A").s().p("AgVA8QgggQgQgdQgRgbAJgZQAJgZAegHQAdgGAeAQQAhAQAQAdQARAbgJAZQgKAZgdAHQgIACgJAAQgWAAgVgMg");
	this.shape_83.setTransform(16.5,18.3,1.142,1.142,-5.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#943E33").s().p("AgVA8QgggQgQgdQgRgbAJgZQAJgZAegHQAdgGAeAQQAhAQAQAdQARAbgJAZQgKAZgdAHQgIACgJAAQgWAAgVgMg");
	this.shape_84.setTransform(16.3,19.1,1.142,1.142,-5.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#57BB6F").s().p("AhWArIAAAAQgYgeAegTQAFgEAGgCIAMgCIATgHQANgFAGAAQAFgBAGACQAFACAEgBQAUAEAJgOIACgEIALgFQADgCAIABQATAAAJAJIAPAWQABADgBADQgBADgDAAIisAwIgDABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAAAgMQgPACgHADQgIADgFABQgcADgIAEQgVAKANARICggsQgJgOgDgCQgLgHgUALIgHAHQgEAFgEACQgGACgHgBIgKgCIAAAAg");
	this.shape_85.setTransform(14.3,1.3,1.142,1.142,-5.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#57BB6F").s().p("AhZAMIAKgKQAHgGACgBQAFgDAOABQAPAAAFgDIAGgFQADgEAEgBQAEgBAEABIAQAEQALACAHgDQAFgCAFgIQAEgIAHgCQALgDALAFIAPAGQADABADAIQACAKACABIitAwQgQgRAIgKg");
	this.shape_86.setTransform(14.2,1.3,1.142,1.142,-5.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#57BB6F").s().p("AATBgQgVgBgPgSIgEgLIgDgQQgBgFgGgNIgFgJQgCgCABgIQAAgDAEgHQADgFAAgDQgDgdgHAEQgKAHgEgHIgGgJQgCgFABgIQACgUAPgJQAVgHAKgGQAHgEADAIIBBCpQABAEgDACIgBABQgSAKgSAAIgEAAgAgmhEQgNAKARAYIALAJQAGAEAAAKIgDARQgCAKAEAKQABACAEAEQAEADABAEQABAEgBANQAAAKAFAGQAIALASAAQAOAAALgFIg8ieIgaAMg");
	this.shape_87.setTransform(10.7,16.9,1.142,1.142,-5.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#57BB6F").s().p("AAOBYIgOgJIgGgDQgEgCgCgDQgDgFABgPQACgOgEgFIgIgFQgGgEgBgDQgBgDACgGIAGgPQADgLgDgHQgDgFgNgFQgLgEgDgGQgDgKAHgMQAJgLABgEQABgDAOgDQAOgDACgCIBBCpQgNAIgHACIgKACQgHAAgFgDg");
	this.shape_88.setTransform(10.7,17.1,1.142,1.142,-5.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CBAC6B").s().p("AgqB6QgagCgQgNQgRgOgEgbIgEgvIgCgTQgBgKgEgIQgFgJgKgGIgSgMQgLgIgBgIQgBgPAWgJQAKgEAWgGIABgBQALgGAQgCIAcgDQAKgCAYgGQAUgFAMgCQATgCAzAHIAdACQASACALADQAOAFAEAKQAFAKgHANIgRAaQgKAPAAAPQgBAMAFAQIAIAdQAHAvg3ATQgaAJhEAFIgeACIgNgBgAACh0IgXAGIgaAGIgeAEQgQACgKAFQAAABgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgaAGgGAEQgXAGAUAfQAJADAGAFQAIAGAFALQAHAQABAdQABAjADANQAJAhAlAJQAXAFAqgFQA0gFAUgFQAvgMAIgbQAEgRgIgdQgJgeADgPQACgQAMgRIAHgIQAEgFACgEQAHgRgJgIQgFgFgQgEQg2gLgnAAQgVAAgQADg");
	this.shape_89.setTransform(23.4,16,1.142,1.142,-5.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CBAC6B").s().p("Ag5B2QgcgIgMgUQgGgMgCgcIgDgjQgBgRgDgKQgFgPgKgHIgLgGIgLgGQgGgDgCgGQgEgGACgGQADgGAKgFQAUgKAUgFIAAgBQAIgFANgCIAYgCQANgCAegHQAZgHAQgBQAMgBAYADIBDAIQAdAEAEAOQADAJgGALIgNAQQgYAfAPArQAKAdgDATQgCAPgPAKQgJAGgUAGQgwAOg2AEIgSAAQgTAAgNgDg");
	this.shape_90.setTransform(23.4,16,1.142,1.142,-5.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CBAC6B").s().p("AglCDQgjgCgSgIQgbgLgKgaQgEgMAAgdQAAgcgHgMQgFgIgSgMQgTgNgDgIQgNgfAogYIAEgBQBlgoBlACQA7ACANACQAxAGAMAXQAIANgGAOQgCAEgEAEQgEAEgBACQgKAXgDAOQgEARACASQAJBAglAbQgoAchZAAIgngCgAgMh1QhBAHhJAbIAAAAQgaAQARAXQAJAMATAVQAHALABAUQACAbABAIQALAxAuAMQAaAHA7gFQA3gEAbgNQAsgUABgsQAAgGgGgiQgFgaAHgPQAHgHABgEQAagSgfgiIgSgEQgWgLgwAAQgWAAgyAFg");
	this.shape_91.setTransform(23.6,16.2,1.142,1.142,-5.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CBAC6B").s().p("Ag2B8QgtgEgPgZQgIgMgDgVIgCgkQgCgVgGgNQgIgSgOgFIgJgCQgFgBgDgCQgJgHADgPQAEgSAYgMQBIgdBOgGQBMgHBMASQANACAIAHQALAIAAALQAAALgMALQgQAOgDAGQgFAKACAQIAFAZQAFAagEAXQgFAZgQAOQgJAIgYAHQg5AOg3AAQgVAAgVgCg");
	this.shape_92.setTransform(23.6,16.2,1.142,1.142,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,-4.5,42.5,64.6);


(lib.pancreas_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AErA4IgNgEIAAgTQAHADAJACQAHACAHAAQANAAAAgIQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgEIgMgFQgKgFgFgDQgFgEgCgEQgCgDAAgHQAAgLAJgHQAJgGARAAQAQAAAOAHIgGARIgNgFQgGgCgFAAQgLAAAAAGQAAADADADQADACAMADQALAEAEADQAFAEACAFQACAEAAAHQABANgKAHQgJAHgTAAIgQgBgADEAyQgHgHAAgNQAAgOAKgHQAKgGAUgBIAOgBIAAgBQAAgOgNAAQgKAAgPAHIgIgQQAPgIATAAQASAAAJAHQAJAIAAAQIAAA4IgRAAIgEgMIgBAAQgGAHgGADQgHADgKAAQgMAAgIgHgADqAQQgKAAgFADQgFAEAAAHQAAAKALAAQAIAAAGgFQAEgFAAgIIAAgHgABrAuQgMgMAAgVQAAgUALgMQALgMATAAQATAAALAKQAJALABAQIAAAMIg4AAQAAAKAFAGQAGAGAKAAQAIAAAHgCQAHgCAHgDIAAASQgGADgGACQgIABgKAAQgVAAgMgLgACZACQAAgHgEgEQgFgFgIAAQgHAAgEAFQgFAEAAAHIAhAAIAAAAgAg5ANQAAgVALgLQALgMAUAAQAPAAALAGIgHASIgIgEQgGgBgFAAQgSAAAAAYQAAAaASAAQAHAAAHgCQADgCAGgEIAAAVQgGAEgDABQgHABgJAAQgoAAAAgsgAj8AyQgIgHAAgNQABgOAJgHQAKgGAUgBIAPgBIAAgBQAAgOgNAAQgLAAgOAHIgIgQQAPgIATAAQARAAAJAHQAKAIAAAQIAAA4IgRAAIgEgMIgCAAQgFAHgHADQgGADgKAAQgNAAgHgHgAjXAQQgKAAgEADQgGAEAAAHQAAAKALAAQAJAAAFgFQAFgFAAgIIAAgHgAAcA4IAAhWIASAAIAEAPIABAAQAEgHAHgFQAHgEAIAAIAIAAIgCAXIgHgBQgLAAgHAGQgGAEAAAKIAAAtgAhkA4IAAgzQAAgIgDgEQgEgFgIAAQgJAAgEAHQgFAFAAAPIAAApIgYAAIAAhWIASAAIAEAMIAAAAQAEgHAIgDQAGgDAJAAQAQAAAIAIQAHAIABAPIAAA4gAlgA4IAAhwIAlAAQAUAAAMAJQAKAIABASQAAATgMAHQgMAKgVAAIgKAAIAAApgAlHgDIAIAAQAKAAAGgEQAGgFAAgIQAAgIgFgFQgEgEgKAAIgLAAg");
	this.shape.setTransform(35.3,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AErA9IgNgFIAAgTQAHADAJACQAHACAHAAQANAAAAgIQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBgBAAAAIgFgEIgMgFQgKgFgFgDQgFgDgCgFQgCgFAAgFQAAgLAJgHQAJgGARAAQAQAAAOAHIgGARIgNgEQgGgCgFAAQgLAAAAAFQAAAEADAAQADADAMAEQALAEAEAEQAFADACAFQACAFAAAGQABANgKAHQgJAIgTAAIgQgBgADEA2QgHgHAAgNQAAgOAKgHQAKgGAUgBIAOAAIAAgEQAAgLgNAAQgKgBgPAHIgIgQQAPgIATAAQASAAAJAIQAJAHAAAOIAAA6IgRAAIgEgMIgBAAQgGAHgGADQgHAEgKAAQgMAAgIgIgADqAUQgKAAgFAEQgFADAAAHQAAAKALAAQAIAAAGgFQAEgFAAgHIAAgIgABrAyQgMgLAAgWQAAgUALgMQALgMATAAQATAAALALQAJAKABAQIAAAMIg4AAQAAAKAFAGQAGAGAKAAQAIAAAHgCQAHgBAHgEIAAASQgGADgGACQgIABgKABQgVAAgMgMgACZAHQAAgIgEgEQgFgFgIAAQgHAAgEAFQgFAEAAAIIAhAAIAAAAgAg5ARQAAgVALgLQALgMAUAAQAPAAALAGIgHASIgIgDIgLgCQgSAAAAAZQAAAaASAAQAHAAAHgDQADgCAGgDIAAAUQgGAEgDABQgHABgJABQgoAAAAgtgAj8A2QgIgHAAgNQABgOAJgHQAKgGAUgBIAPAAIAAgEQAAgLgNAAQgLgBgOAHIgIgQQAPgIATAAQARAAAJAIQAKAHAAAOIAAA6IgRAAIgEgMIgCAAQgFAHgHADQgGAEgKAAQgNAAgHgIgAjXAUQgKAAgEAEQgGADAAAHQAAAKALAAQAJAAAFgFQAFgFAAgHIAAgIgAAcA8IAAhVIASAAIAEAPIABAAQAEgIAHgFQAHgEAIAAIAIABIgCAWIgHgBQgLABgHAEQgGAFAAALIAAAsgAhkA8IAAgzQAAgJgDgDQgEgFgIAAQgJAAgEAHQgFAEAAAQIAAApIgYAAIAAhVIASAAIAEALIAAAAQAEgHAIgDQAGgDAJAAQAQAAAIAJQAHAHABAOIAAA5gAlgA8IAAhwIAlAAQAUAAAMAJQAKAJABASQAAAQgMAJQgMALgVgBIgKAAIAAApgAlHAAIAIAAQAKAAAGgDQAGgEAAgJQAAgIgFgEQgEgFgKAAIgLAAgAjogjIAAgCQAOgPAFgJIAaAAIAAACIgdAYg");
	this.shape_1.setTransform(35.3,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.6,11.6);


(lib.pancreas_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#918031").s().p("Ag3A4QgYgXAAghQAAggAYgXQAXgXAggBQAhABAXAXQAXAXABAgQAAAhgYAXQgXAYghgBQggABgXgYg");
	this.shape.setTransform(22.2,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiECBQg0g1gGhOQgBgUAGgaQAIgfANgQQBnh3BsApQBmAlAlCGQAUBGhBA8Qg9A5hRAAQhNAAg2g4g");
	this.shape_1.setTransform(22.1,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#918031").s().p("Ah4CuQg7gxgbhFQgTgyAWhEQATg+AlglQAeggBIgPQBBgPAiALQA4ATAwA3QAxA3AGA2QALBZgeAxQgnA/h5AmQgYAIgUAAQg5AAg1gsg");
	this.shape_2.setTransform(21.6,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiGBVQg7gdAJhFQAFgkA0gbQAzgZBCgEQBFgEAzAYQA7AcAOA5QAQBDg6AYQgnAQhjAAQhcAAgtgWg");
	this.shape_3.setTransform(21.5,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,43.6);


(lib.new_single_glucose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(22,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_1.setTransform(22,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgOAAgFgJIhmivQgHgKAHgKIBmivQAEgJAPAAIDLAAQAPAAAEAJIBmCuQAGAKgGAJIhmCxQgGAJgNAAg");
	this.shape_2.setTransform(22.7,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.4,39);


(lib.needle_pumper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("AgIBkQgGAAgEgEQgFgFAAgGIAAipQAAgGAFgEQAEgFAGAAIARAAQAGAAAEAFQAFAEAAAGIAACpQAAAGgFAFQgEAEgGAAg");
	this.shape.setTransform(55.7,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2B").s().p("AkVAsIAAhXIIrAAIAABXg");
	this.shape_1.setTransform(27.8,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,20.1);


(lib.morningtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCBtQgTgNAAgVQAAgQAJgJQAJgKATgEQgIgDgGgIQgFgHAAgGQAAgJAEgDQAEgGAOgIQgNgGgIgMQgHgNAAgRQAAgbASgPQATgPAiAAIAOABIAQACIA6AAIAAAbIgXAJQAFAJAAALQAAAagTAPQgTAPgjAAIgPgBQgCAEAAABQAAAEAHADQAHACAJAAIAcAAQA4AAAAAvQAAAegaARQgaARgtAAQgjAAgTgLgAgfA6QgGAFAAAFQAAAIAIAEQAHAEANABQATgBAMgFQANgFAAgIQAAgHgIgCQgHgDgPgBIgUAAQgJAAgHAFgAgTg+QAAAaASAAQAGAAAFgGQAEgHAAgNQAAgZgPAAQgSAAAAAZg");
	this.shape.setTransform(123,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgEgIQgGgJgKAAQgNAAgGALQgGAMgBAbIAABIIg4AAIAAikIAqAAIAHAVIAEAAQAIgMANgGQAKgGARAAQAcAAAPAQQAQAQAAAdIAABqg");
	this.shape_1.setTransform(104.1,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcB0IAAikIA4AAIAACkgAgdhZQAAgNAHgGQAHgHAPAAQAQAAAGAHQAIAGAAANQAAAZgeAAQgdAAAAgZg");
	this.shape_2.setTransform(89.2,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgEgIQgGgJgKAAQgMAAgHALQgGAMAAAbIAABIIg5AAIAAikIAqAAIAHAVIAEAAQAIgMANgGQAKgGARAAQAcAAAPAQQAPAQABAdIAABqg");
	this.shape_3.setTransform(74.3,25.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag5BUIAAikIAqAAIAJAaIADAAQAFgMANgIQANgJANAAIAOABIADABIgFA2QgHgCgMAAQgTAAgJAJQgGAJAAAOIAABRg");
	this.shape_4.setTransform(58,25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7A+QgXgXABgnQAAgoAVgWQAXgWAlAAQAYgBATALQATAKAKAUQAKATAAAZQABAogWAWQgXAYgmAAQgkgBgXgXgAgRgfQgGALAAAUQAAAUAGAMQAFALAMAAQANAAAFgLQAGgMAAgUQAAgUgGgLQgFgLgNAAQgMAAgFALg");
	this.shape_5.setTransform(40.6,25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABFBqIAAhdIAAgPIACgsIgCAAIgrCYIg1AAIgsiYIgBAAQADAnAAAVIAABcIg0AAIAAjTIBOAAIArCVIAAAAIAtiVIBMAAIAADTg");
	this.shape_6.setTransform(16.6,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_7.setTransform(140.8,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgFgIQgEgJgLAAQgNAAgGALQgHAMAAAbIAABIIg5AAIAAikIAsAAIAHAVIADAAQAHgMANgGQAMgGAQAAQAcAAAPAQQAQAQAAAdIAABqg");
	this.shape_8.setTransform(122,25.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_9.setTransform(102.1,25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAXBzIAAhaQAAgRgFgIQgEgHgLAAQgNAAgGAKQgHALAAAdIAABIIg4AAIAAikIArAAIAHAVIADAAQAHgMANgGQAMgGAQAAQAcAAAPAQQAPAQAAAbIAABsgAg8hAQACgaAJgMQAJgMARAAQAGAAAHACIAKAFIANAFQAGACAGAAQAEAAADgEQACgDABgHIAbAAQgCAYgJANQgJANgQAAQgHAAgGgCIgNgFIgLgFQgGgCgGAAQgHAAgDAOg");
	this.shape_10.setTransform(83.3,22.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_11.setTransform(63.4,25.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABJBUIAAhYQAAgRgFgIQgFgJgKAAQgNAAgGALQgGALAAAWIAABOIg4AAIAAhYQABgRgFgIQgFgJgJAAQgNAAgHAMQgGAMAAAaIAABIIg5AAIAAikIArAAIAHAVIAEAAQAGgMANgGQAMgGAQAAQAiAAAPAWIAEAAQAHgKAMgGQANgGAPAAQAdAAAOAPQAPAPAAAfIAABqg");
	this.shape_12.setTransform(39.6,25.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_13.setTransform(7,25.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhFBqIAAjTIA6AAIAAClIBRAAIAAAug");
	this.shape_14.setTransform(-10,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.3,44.9);


(lib.minute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#606060").ss(4).p("AAAiXIAAEv");
	this.shape.setTransform(0,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,34.5);


(lib.marker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDB441").s().p("ApnIyIAAxjITPAAIAARjg");
	this.shape.setTransform(60,170,1,0.148,0,0,0,-1.7,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,160,123.4,16.7);


(lib.lunchtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWBxIAAhaQAAgggTABQgMAAgGAKQgIALAAAbIAABJIg4AAIAAjhIA4AAIAAAgQABAWgDAcIADAAQAIgNALgFQAJgGAPABQAdAAAPAPQAQARAAAaIAABsg");
	this.shape.setTransform(85.9,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwA/QgVgVAAgqQAAgnAXgXQAWgXAoABQAdAAAZAMIgQArIgUgHQgIgDgKAAQgOAAgFALQgIAKAAASQAAAoAbAAQAaAAAXgPIAAAuQgWAPgfAAQgnAAgVgXg");
	this.shape_1.setTransform(67.9,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgEgIQgGgJgKAAQgNAAgGALQgGAMAAAbIAABIIg5AAIAAikIAqAAIAHAVIAEAAQAIgMANgGQAKgGARAAQAcAAAPAQQAQAQAAAdIAABqg");
	this.shape_2.setTransform(49.7,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhABEQgPgQAAgdIAAhqIA5AAIAABYQAAARAFAIQAEAJALgBQANAAAGgLQAGgLAAgbIAAhIIA5AAIAACkIgrAAIgHgUIgDAAQgHALgNAGQgLAGgRAAQgcAAgPgQg");
	this.shape_3.setTransform(29.5,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhFBqIAAjTIA6AAIAAClIBRAAIAAAug");
	this.shape_4.setTransform(11.4,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7A+QgXgXABgnQAAgoAVgWQAXgWAlAAQAYgBATALQATAKAKAUQAKATAAAZQABAogWAWQgXAYgmAAQgkgBgXgXgAgRgfQgGALAAAUQAAAUAGAMQAFALAMAAQANAAAFgLQAGgMAAgUQAAgUgGgLQgFgLgNAAQgMAAgFALg");
	this.shape_5.setTransform(127.5,25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhDBSIAAggIBDhXIg/AAIAAgsICAAAIAAAjIhBBUIBEAAIAAAsg");
	this.shape_6.setTransform(110.3,25.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag5BUIAAikIAqAAIAJAaIADAAQAFgMANgIQANgJANAAIAOABIADABIgFA2QgHgCgMAAQgTAAgJAJQgGAJAAAOIAABRg");
	this.shape_7.setTransform(96.5,25.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag4A/QgXgVAAgqQAAgoAWgWQAVgWAlAAQAmAAAUATQAVAUAAAkIAAAYIhlAAQABAOAJAIQAKAHAPAAQAPABAMgDQANgDAPgHIAAApQgOAHgOADQgOADgUAAQgoAAgXgXgAAcgTQgBgMgGgHQgHgIgLABQgIAAgHAGQgGAHgCANIAwAAIAAAAg");
	this.shape_8.setTransform(79.4,25.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABJBUIAAhYQAAgRgFgIQgFgJgJAAQgOAAgGALQgGALAAAWIAABOIg4AAIAAhYQABgRgFgIQgFgJgJAAQgOAAgGAMQgGAMAAAaIAABIIg5AAIAAikIArAAIAHAVIADAAQAHgMAMgGQANgGAQAAQAiAAAPAWIAEAAQAHgKANgGQAMgGAPAAQAdAAAOAPQAPAPAAAfIAABqg");
	this.shape_9.setTransform(35.2,25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbBxIAAjhIA3AAIAADhg");
	this.shape_10.setTransform(15.3,22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_11.setTransform(0.7,25.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbBxIAAjhIA3AAIAADhg");
	this.shape_12.setTransform(-20.7,22.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag+BqIAAjTIB9AAIAAAuIhDAAIAAAhIA+AAIAAAtIg+AAIAAAoIBDAAIAAAvg");
	this.shape_13.setTransform(-33.4,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:29.5}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_3,p:{x:60.1}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.9,44.9);


(lib.longlabel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAyQgQgSAAggQAAgfATgSQASgRAeAAQAVAAASAIIgJAWQgOgHgQAAQgQAAgLAMQgLAMAAATQAAAVAJAMQAJALAPAAIARgCIAAgbIgZAAIAAgWIA1AAIAABDQgNAEgLABQgMACgLAAQgcAAgQgRg");
	this.shape.setTransform(52.2,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXBBIg4hhIgBAAIACAjIAAA+IgZAAIAAiBIAjAAIA4BgIAAAAIgBgiIAAg+IAZAAIAACBg");
	this.shape_1.setTransform(36.9,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAxQgQgRAAggQAAggAQgRQAQgSAdAAQAeAAAQASQAQARAAAgQAAAggQARQgQATgegBQgdABgQgTgAgXggQgJALAAAVQAAAWAJAKQAIAMAPAAQAhAAAAgsQAAgrghAAQgPAAgIALg");
	this.shape_2.setTransform(20.7,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIAcAAIAABqIAzAAIAAAXg");
	this.shape_3.setTransform(7.7,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVBBIgdgyIgPAAIAAAyIgcAAIAAiBIAmAAQAZAAANAJQANAKAAAUQAAAMgHAJQgGAHgMAFIAnA5gAgXgGIAJAAQANAAAEgEQAHgFAAgJQAAgKgHgEQgEgEgOAAIgIAAg");
	this.shape_4.setTransform(29.3,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBBIgKgfIguAAIgJAfIgeAAIAuiCIAgAAIAvCCgAARAKIgPgtIgCgJIgQA2IAhAAg");
	this.shape_5.setTransform(14.7,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:7.7}},{t:this.shape_2,p:{x:20.7}},{t:this.shape_1},{t:this.shape,p:{x:52.2}}]}).to({state:[{t:this.shape_3,p:{x:2.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{x:42.4}},{t:this.shape_2,p:{x:57.9}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.6,29.1);


(lib.long_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB4AlQgMgNAAgYQAAgXAOgNQAOgOAZAAQAPAAAOAGIgHARQgLgFgMAAQgOAAgIAJQgIAJAAAOQAAAQAHAJQAGAIANAAIAOgBIAAgVIgUAAIAAgPIAoAAIAAAxQgJAEgJABQgIABgJAAQgXAAgMgOgAhmAlQgMgNAAgYQAAgYAMgNQAMgNAXAAQAYAAALANQANANAAAYQAAAYgNANQgMAOgXAAQgXAAgMgOgAhWgYQgGAJAAAPQAAAQAGAJQAHAIAMAAQAZAAABghQAAgggagBQgNAAgGAJgAA9AyIgrhKIgBAAIABBKIgSAAIAAhiIAaAAIArBJIAAAAIgBhJIATAAIAABigAi9AyIAAhiIAWAAIAABQIAoAAIAAASg");
	this.shape.setTransform(19.1,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwAlQgMgMAAgZQAAgXAOgNQAOgOAZAAQAPAAAOAHIgHAQQgLgFgMAAQgNAAgJAJQgIAJAAAOQAAAQAHAJQAHAIAMAAIAOgBIAAgVIgTAAIAAgQIAnAAIAAAyQgJAEgJAAQgIACgJAAQgXAAgMgOgADLAxIgHgXIglAAIgHAXIgXAAIAkhiIAZAAIAkBigAC/AIIgMgiIgBgIIgNAqIAaAAgAAFAxIgWgmIgLAAIAAAmIgVAAIAAhiIAdAAQAUAAAIAIQAKAHAAAQQAAAIgFAHQgFAFgIAEIAdArgAgcgEIAHAAQAKAAAFgDQAEgEAAgHQAAgHgEgDQgFgDgLAAIgGAAgAhUAxIgIgXIgkAAIgHAXIgXAAIAjhiIAaAAIAjBigAhhAIIgLgiIgCgIIgNAqIAaAAgAjhAxIAAhiIAWAAIAABRIAoAAIAAARg");
	this.shape_1.setTransform(19.3,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,10.3);


(lib.labels_woo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsAxQgMgLAAgWQAAgTALgMQALgNATAAQATAAALALQAJALABAQIAAAMIg4AAQAAAKAFAGQAGAFAKAAQAIAAAHgCQAHgBAHgDIAAASQgGADgGABQgIACgKAAQgVAAgMgMgABaAGQAAgHgEgEQgFgGgIAAQgHAAgEAGQgFAEAAAHIAhAAIAAAAgACEA7IAAhVIASAAIADAPIABAAQAFgHAHgFQAHgFAIAAIAIABIgCAXIgHgBQgMAAgGAFQgGAFAAAKIAAAsgAgeA7IgihVIAZAAIARAwIADASIABAAQAAgIADgKIAPgwIAZAAIggBVgAhkA7IAAhVIAYAAIAABVgAi8A7IAAhvIAYAAIAABcIAuAAIAAATgAhlgxQAAgLANAAQANAAAAALQAAAGgEADQgDADgGAAQgNAAAAgMg");
	this.shape.setTransform(18.7,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEoA2QgIgIAAgMQAAgOAKgHQAKgGAUgBIAPgBIAAgEQAAgLgOAAQgKAAgPAHIgHgQQAPgJASABQASAAAJAHQAJAIAAANIAAA7IgQAAIgFgNIgBAAQgGAIgGADQgGADgKAAQgNAAgHgHgAFNATQgKAAgFAEQgFADAAAIQAAAKALgBQAJAAAFgEQAFgFAAgIIAAgHgADOAyQgMgMAAgVQAAgVALgMQALgMAUABQASAAALAKQAKAKAAARIAAAMIg4AAQAAAKAGAFQAFAHAKgBQAIAAAHgBQAHgCAIgEIAAATQgGADgHACQgHABgLAAQgVAAgMgLgAD9AGQgBgHgEgFQgEgEgIAAQgIAAgEAEQgEAFgBAHIAiAAIAAAAgABDA2QgGgIAAgOIAAgoIgMAAIAAgKIAOgIIAGgTIAQAAIAAATIAYAAIAAASIgYAAIAAAoQAAAFADADQACACAFAAQAGAAAJgCIAAARQgJAEgNAAQgOAAgHgHgAghA2IAAgWQAMAFAIACQAIACAFAAQAHAAAFgDQAEgDAAgGQAAgEgCgCQgCgCgEgDIgMgIQgLgFgFgEQgFgDgDgGQgEgGAAgIQAAgPALgIQAKgKAQABQAJgBAIADIARAGIgIATIgPgGIgMgBQgFAAgDADQgEADAAAFQAAADACADIAEAFIAOAHQAQAGAGAIQAGAHAAAMQAAAQgMAIQgLAJgSAAQgSAAgOgHgAinAxQgJgMAAgVQAAgTAJgNQAJgMAQABQARgBAIANIABAAIgCgRIAAgcIAYAAIAAB4IgSAAIgFgMIgBAAQgIANgRAAQgPAAgJgMgAiTgBQgEAEAAAOQAAAMAEAGQAEAHAJAAQAJAAAEgFQAEgGABgNIAAgCQAAgOgEgEQgFgGgKAAQgIAAgEAHgAj/A3QgJgFgFgKQgGgKAAgOQAAgUAMgMQALgMAUABQANAAAJAFQAKAFAFAKQAFAJAAAOQAAAVgLAMQgLAMgUAAQgNAAgKgGgAj2gCQgEAFAAANQAAANAEAGQAEAHAKAAQAJAAAFgHQAEgGAAgNQAAgNgEgFQgFgGgJgBQgKABgEAGgAliA3QgJgFgFgKQgGgKAAgOQAAgUAMgMQALgMAUABQANAAAJAFQAKAFAFAKQAFAJAAAOQAAAVgLAMQgLAMgUAAQgNAAgKgGgAlZgCQgEAFAAANQAAANAEAGQAEAHAKAAQAJAAAFgHQAEgGAAgNQAAgNgEgFQgFgGgJgBQgKABgEAGgAH0A8IAAg0QAAgIgEgDQgDgGgHAAQgIABgFAGQgEAEAAAOIAAAsIgYAAIAAg0QAAgIgDgDQgDgGgHAAQgJAAgEAIQgEAEAAAPIAAAqIgYAAIAAhWIASAAIADALIABAAQAEgFAHgEQAGgDAJAAQATgBAHANIADAAQADgGAHgDQAHgDAIAAQAPAAAIAHQAHAIAAAOIAAA6gAB/A8IAAhWIASAAIAEAPIABAAQAEgHAHgFQAHgEAIAAIAIAAIgCAWIgHAAQgLAAgHAFQgGAFAAAKIAAAtgAmhA8IAAh4IAYAAIAAB4gAoKA8IAAhxIAjAAQAYABALAGQALAHAAAPQAAALgEAGQgFAGgIABIAAAAQALACAFAGQAEAIAAAKQAAAQgLAJQgLAJgUAAgAnyAoIAQAAQAKgBAEgEQAFgDAAgIQAAgPgUAAIgPAAgAnygIIAOAAQAKAAAEgCQAFgDAAgHQAAgHgFgDQgFgDgKAAIgNAAg");
	this.shape_1.setTransform(705.7,317.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EA3LAZyQgKgHAAgLQAAgIAFgFQAFgGAKgCQgEgBgDgEQgDgDAAgEQAAgFADgEQADgDAGgDQgHgDgEgHQgEgGAAgJQAAgPAJgHQAJgIASAAIAPABIAeAAIAAANIgNADQADAGAAAHQAAAOgJAIQgKAIgSAAIgEAAIgDgBQgEADAAAEQAAAFANAAIAPAAQAOAAAIAGQAHAGAAAMQAAAPgMAJQgNAIgYAAQgSAAgKgGgEA3aAZWQgEADAAAFQAAAFAFADQAEADAJAAQANAAAHgEQAHgDAAgGQAAgFgEgCQgEgCgJAAIgNAAQgGAAgFADgEA3fAYXQAAAHADAEQADAEAHAAQAGAAADgEQAEgEAAgHQAAgQgNAAQgNAAAAAQgEA52AZIQgMgMAAgVQAAgWALgMQALgMAUAAQASAAALAKQAKALAAASIAAAMIg4AAQAAAKAGAGQAFAGAKAAQAIAAAHgCQAHgCAIgDIAAASQgGADgHACQgHABgLAAQgVAAgMgLgEA6lAYcQgBgJgEgEQgEgFgIAAQgIAAgEAFQgEAEgBAJIAiAAIAAAAgEA0FAZMQgHgHAAgNQAAgOAKgHQAJgGAUgBIAPgBIAAgDQAAgOgNAAQgLAAgOAHIgIgQQAPgIATAAQARAAAJAHQAKAIAAAQIAAA6IgRAAIgEgMIgBAAQgGAHgGADQgHADgKAAQgNAAgHgHgEA0rAYqQgKAAgFADQgGAEAAAHQAAAKAMAAQAIAAAFgFQAFgFAAgIIAAgHgEAynAZMIAAgWQALAFAIACQAIACAHAAQAIAAAEgDQAEgDAAgGQAAgDgCgDQgBgCgEgDIgPgIQgKgEgGgFQgFgFgDgGQgDgGAAgIQAAgPAKgIQAKgJATAAQAJAAAIACIARAGIgIATIgPgFIgMgCQgHAAgEADQgDADAAAGQAAADABACIAFAFIAPAIQAQAHAGAIQAGAIAAALQAAAQgLAIQgLAJgUAAQgSAAgOgHgEA4nAZSIAAhYIASAAIAEAPIABAAQAEgHAHgFQAHgEAIAAIAIAAIgCAXIgHgBQgLAAgHAGQgGAGAAAKIAAAtgEA2dAZSIAAgzQAAgKgDgEQgEgFgHAAQgKAAgEAHQgFAGAAAQIAAApIgYAAIAAhYIASAAIAEAMIABAAQAEgHAHgDQAHgDAJAAQAPAAAIAIQAIAIAAAQIAAA5gEg4UgXdQgJgGAAgMQAAgHAFgGQAFgFAJgCQgEgCgCgDQgDgEAAgEQAAgFADgDQADgEAFgDQgHgDgEgGQgEgHAAgJQAAgOAKgIQAJgIARAAIAPACIAfAAIAAAMIgOAEQAEAFAAAIQAAAOgKAIQgKAHgRAAIgEAAIgEAAQgEADAAADQAAAFANAAIAPAAQAPAAAHAGQAIAHAAAMQAAAPgNAIQgNAJgYAAQgSAAgKgHgEg4EgX5QgFAEAAAFQAAAFAFACQAFADAIAAQANAAAHgDQAIgEAAgGQAAgFgFgCQgEgCgJAAIgMAAQgHAAgEADgEg4AgY3QAAAHADAEQAEAEAGAAQAHAAADgEQADgEAAgHQAAgQgNAAQgNAAAAAQgEgzjgYBQgKgFgFgLQgFgKAAgOQAAgVALgMQALgMAVAAQAMAAAKAGQAJAFAFAKQAGALAAANQAAAWgMAMQgLAMgUAAQgNAAgJgGgEgzbgY8QgEAGAAANQAAANAFAHQAEAHAJAAQAKAAAEgHQAEgHAAgNQAAgNgEgGQgEgHgKAAQgJAAgFAHgEg1TgYHQgJgMAAgVQAAgWAJgMQAJgMAQAAQAQAAAJANIAAAAIgBgRIAAgcIAYAAIAAB5IgTAAIgEgLIgBAAQgIANgRAAQgPAAgJgMgEg0/gY8QgFAHAAANQAAANAFAGQAEAHAIAAQAJAAAFgFQAEgGAAgNIAAgCQAAgOgEgGQgEgGgKAAQgIAAgEAGgEg22gYCQgHgIAAgNQAAgOAKgGQAJgHAUgBIAPAAIAAgEQAAgNgNAAQgLAAgOAGIgIgQQAPgIATAAQARAAAJAIQAKAHAAAQIAAA6IgRAAIgEgMIgBAAQgGAIgGADQgHADgKAAQgNAAgHgHgEg2QgYlQgKAAgFAEQgGADAAAHQAAAKAMAAQAIAAAFgEQAFgFAAgIIAAgHgEg5CgX9IAAhXIAYAAIAABXgEg50gX9IAAgxIguAAIAAAxIgYAAIAAhyIAYAAIAAAtIAuAAIAAgtIAYAAIAABygEg5DgZeIAAgCQAOgPAEgIIAbAAIAAABIgdAYg");
	this.shape_2.setTransform(377.1,165.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-1.6,758.4,325.6);


(lib.karashoulders = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B58F67").s().p("AhNCmQgVghgBhOQAHgOAFgeQALg6gEhQQgCgsAbgSQAYgQAjAHQAjAHAYAUQAaAWgGAWQgLAnANBKQAGAiAJAdQAABSgVAhQgXAlg4AAQg3AAgWgjg");
	this.shape.setTransform(49.1,20.2,1,1,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C966CC").ss(3.8,1,1).p("AAbhrQhNA0gWBZQgPA/AOBEQAEAYgMAkQgNAlgWAYQg6A9gqhjQg5iGA3iUQA5icCVhKQB6g9BFAXQAfAKAiAuQAOAUheAxQgyAahXAsg");
	this.shape_1.setTransform(24.6,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C966CC").s().p("AjYD4Qg5iGA3iUQA5icCVhKQB6g9BFAXQAfAKAiAuQAOAUheAxIiJBGQhNA0gWBZQgPA/AOBEQAEAYgMAkQgNAlgWAYQgWAXgUAAQggAAgag9g");
	this.shape_2.setTransform(24.6,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C966CC").ss(3.8,1,1).p("ADIhGIkjDLQgaATgegFQgcgFgPgXQgPgYALgfQAMgkAughQC3iKABgEg");
	this.shape_3.setTransform(24.5,71.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C966CC").s().p("AiTCTQgcgFgPgXQgPgYALgfQAMgkAughQC3iKABgEICYBNIkjDLQgVAPgWAAIgNgBg");
	this.shape_4.setTransform(24.5,71.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C966CC").s().p("ACmHDQgTkdhTi5QhhjgjChcIhxhyQFCgTC2EjQCXDvAaGFg");
	this.shape_5.setTransform(85.2,66.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B58F67").s().p("AgqBMQgLgNABgWQAAgHABgGQgFAEgIABQgNABgNgLQgMgMAAgNQgBgRAQgMIANgIQAIgFAEgGQAEgFABgMQABgNACgEIB1AFQASAMALAQQAQAWgHASQgFANgSgCQgOAAgHgJQAFAJADAOQAEAVgEAMQgIAYgVgEQgNgCgFgMQgCAOgQAKQgMAIgKAAQgLAAgJgJg");
	this.shape_6.setTransform(109.4,119.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,0,121.7,128.1);


(lib.kara_txt_diabetes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#303030").s().p("AGODOIAAgMQAGAEAIABQAHACAGAAQAKAAAGgDQAFgDAAgHQAAgFgEgEQgEgDgNgFQgMgEgFgEQgFgDgCgEQgDgEAAgGQAAgLAJgGQAIgGAPAAQAOAAANAGIgFAKQgNgFgKAAQgJAAgFADQgFADAAAFQAAADACADQACACAEACIAPAHQAPAFAFAGQAGAFAAAJQAAAMgJAGQgJAHgQAAQgRAAgKgGgAFADIQgLgLAAgVQAAgVAKgMQALgMARAAQAQAAAJALQAKAKAAASIAAAIIg7AAQAAAPAHAIQAIAHANAAQANAAAOgFIAAALIgNAFIgPABQgTAAgLgMgAFwCfQAAgMgGgHQgFgGgKAAQgLAAgGAHQgGAGgBAMIAtAAIAAAAgAEDC6IAAgzIgMAAIAAgHIAMgFIAFgSIAIAAIAAAUIAZAAIAAAKIgZAAIAAAyQAAAIAEAEQADAEAHAAIAGAAIAFgBIAAAJIgGACIgHABQgZAAAAgagACvDIQgLgLAAgVQAAgVAKgMQAKgMARAAQAQAAAKALQAJAKAAASIAAAIIg7AAQABAPAHAIQAHAHANAAQAOAAANgFIAAALIgMAFIgPABQgTAAgLgMgADeCfQAAgMgFgHQgGgGgKAAQgKAAgGAHQgGAGgCAMIAtAAIAAAAgABfDRQgHgDgFgHIAAAAIgDALIgJAAIAAh5IAMAAIAAAvIAAAAQAKgNARAAQARAAAKAMQAJALAAAVQAAAVgJAMQgKAMgRAAQgIAAgHgDgABZCOQgGAHAAASQAAASAGAIQAHAIANAAQAMAAAGgJQAFgIAAgRQAAgRgFgIQgGgIgNAAQgNAAgGAIgAgPDNQgHgGAAgMQAAgaAngCIAPAAIAAgFQAAgKgFgFQgEgFgKAAQgKAAgMAGIgEgJQAHgEAGgCQAHgCAHAAQAQAAAHAHQAHAHAAAPIAAA6IgJAAIgDgMIgBAAQgGAIgGADQgHADgJAAQgLAAgHgHgAASCpQgPAAgFAFQgHAEAAAJQAAAHAEADQAFAEAFAAQAMAAAHgHQAHgGAAgMIAAgIgAiVDIQgKgLAAgVQAAgVAKgMQAJgMARAAQARAAAJANIABAAIAAgGIAAgpIANAAIAAB5IgLAAIgCgLIAAAAQgJANgSAAQgRAAgJgMgAiLCPQgGAJAAAQQAAAQAGAJQAGAIALAAQAOAAAGgHQAGgHAAgRIAAgCQAAgTgGgHQgHgIgNAAQgLAAgGAJgAkVDOIAAgMQAGAEAIABQAHACAGAAQAKAAAGgDQAFgDAAgHQAAgFgEgEQgEgDgNgFQgMgEgFgEQgFgDgCgEQgDgEAAgGQAAgLAJgGQAIgGAPAAQAOAAANAGIgFAKQgNgFgKAAQgJAAgFADQgFADAAAFQAAADACADQACACAEACIAPAHQAPAFAFAGQAGAFAAAJQAAAMgJAGQgJAHgQAAQgRAAgKgGgAlnDNQgHgGAAgMQAAgaApgCIAPAAIAAgFQAAgKgFgFQgEgFgKAAQgKAAgOAGIgEgJQAHgEAHgCQAIgCAHAAQAQAAAHAHQAHAHAAAPIAAA6IgJAAIgDgMIgBAAQgGAIgGADQgHADgJAAQgNAAgHgHgAlECpQgPAAgHAFQgHAEAAAJQAAAHAEADQAFAEAHAAQAMAAAHgHQAHgGAAgMIAAgIgAg4DSIAAhVIANAAIAABVgAmPDSIAAg3QAAgLgFgFQgFgFgKAAQgOAAgGAHQgGAIAAAQIAAAtIgNAAIAAh5IANAAIgBAwIABAAQAEgHAHgDQAHgEAJAAQAQAAAIAIQAIAHAAAQIAAA4gAg3BsQgCgCAAgFQAAgEACgCQACgCAEAAQADAAACACQACACAAAEQAAAFgCACQgCACgDAAQgEAAgCgCgADYASQgPgPAAgbQAAgdAUgOQAVgOAqgCIAggBIAAgIQAAgcgdAAQgWAAgeANIgRgiQAggRAnAAQAlAAAUARQAUAQAAAhIAAB6IgjAAIgKgZIgBAAQgNAQgOAGQgNAGgWAAQgbAAgPgPgAEog2QgWABgLAHQgLAIAAAPQAAAVAZAAQASAAAKgKQALgKAAgRIAAgPgAiNASQgPgPAAgbQAAgdAUgOQAVgOAqgCIAggBIAAgIQAAgcgdAAQgWAAgeANIgRgiQAggRAnAAQAlAAAUARQASAQAAAhIAAB6IghAAIgKgZIgBAAQgNAQgOAGQgNAGgWAAQgbAAgPgPgAg9g2QgWABgLAHQgLAIAAAPQAAAVAZAAQASAAAKgKQALgKAAgRIAAgPgAA7AeIAAi4IAmAAIAIAfIACAAQAJgPAPgKQAOgJARAAIASABIgEAwIgPgCQgYAAgOAMQgOANAAAWIAABdgAjlAeIg/hlIgWAQIAABVIg0AAIAAjxIA0AAIAABvIBWhvIA5AAIhVBrIBWCGg");
	this.shape.setTransform(45.9,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303030").s().p("AHLDVIAAgMQAGADAIACQAHACAGAAQAKAAAGgEQAFgDAAgHQAAgFgEgDQgEgEgNgEQgMgFgFgDQgFgEgCgEQgDgEAAgGQAAgKAJgGQAIgGAPAAQAOAAANAFIgFALQgNgGgKAAQgJAAgFADQgFADAAAFQAAAEACACQACADAEACIAPAGQAPAGAFAFQAGAGAAAIQAAAMgJAHQgJAGgQAAQgRAAgKgFgAF9DPQgLgMAAgUQAAgVAKgMQALgMARAAQAQAAAJAKQAKALAAARIAAAIIg7AAQAAAPAHAIQAIAIANAAQANAAAOgGIAAAMIgNAEIgPABQgTAAgLgLgAGtCmQAAgNgGgGQgFgHgKAAQgLAAgGAHQgGAHgBAMIAtAAIAAAAgAFADAIAAgzIgMAAIAAgGIAMgFIAFgTIAIAAIAAAUIAZAAIAAAKIgZAAIAAAzQAAAHAEAEQADAFAHAAIAGgBIAFgBIAAAKIgGACIgHAAQgZAAAAgagADsDPQgLgMAAgUQAAgVAKgMQAKgMARAAQAQAAAKAKQAJALAAARIAAAIIg7AAQABAPAHAIQAHAIANAAQAOAAANgGIAAAMIgMAEIgPABQgTAAgLgLgAEbCmQAAgNgFgGQgGgHgKAAQgKAAgGAHQgGAHgCAMIAtAAIAAAAgACcDXQgHgDgFgGIAAAAIgDALIgJAAIAAh6IAMAAIAAAwIAAAAQAKgNARAAQARAAAKALQAJAMAAAVQAAAVgJAMQgKALgRAAQgIAAgHgDgACWCUQgGAIAAASQAAASAGAIQAHAHANAAQAMAAAGgIQAFgJAAgQQAAgRgFgIQgGgIgNAAQgNAAgGAHgAAsDUQgHgHAAgMQAAgaApgBIAPgBIAAgFQAAgKgFgFQgEgFgKAAQgKAAgOAHIgEgKQAHgDAHgCQAIgCAHAAQAQAAAHAHQAHAGAAAPIAAA7IgJAAIgDgMIgBAAQgGAIgGADQgHACgJAAQgNAAgHgGgABPCvQgPABgHAEQgHAEAAAJQAAAHAEAEQAFAEAHAAQAMAAAHgHQAHgHAAgMIAAgHgAhYDPQgKgMAAgVQAAgVAKgMQAJgLARAAQARAAAJAMIABAAIAAgGIAAgpIANAAIAAB6IgLAAIgCgMIAAAAQgJANgSAAQgRAAgJgLgAhOCVQgGAJAAAQQAAARAGAIQAGAIALAAQAOAAAGgHQAGgHAAgQIAAgDQAAgSgGgIQgHgIgNAAQgLAAgGAJgAjaDPQgLgMAAgUQAAgVAKgMQALgMARAAQAQAAAJAKQAKALAAARIAAAIIg7AAQAAAPAHAIQAIAIANAAQANAAAOgGIAAAMIgNAEIgPABQgTAAgLgLgAiqCmQAAgNgGgGQgFgHgKAAQgLAAgGAHQgGAHgBAMIAtAAIAAAAgAmVDPQgLgMAAgUQAAgVAKgMQAKgMARAAQAQAAAKAKQAJALAAARIAAAIIg7AAQABAPAHAIQAHAIANAAQAOAAANgGIAAAMIgMAEIgPABQgTAAgLgLgAlmCmQAAgNgFgGQgGgHgKAAQgKAAgGAHQgGAHgCAMIAtAAIAAAAgAn7DAIAAgzIgMAAIAAgGIAMgFIAGgTIAHAAIAAAUIAZAAIAAAKIgZAAIAAAzQAAAHAEAEQAEAFAGAAIAHgBIAFgBIAAAKIgGACIgIAAQgZAAAAgagAADDZIAAhWIANAAIAABWgAkHDZIAAg4QAAgKgFgFQgFgFgKAAQgOAAgGAHQgGAHAAARIAAAtIgNAAIAAhWIALAAIACAMIAAAAQAEgGAHgEQAIgDAIAAQAQAAAIAHQAIAHAAARIAAA4gAnDDZIAAhWIAMAAIAABWgAAEByQgCgCAAgEQAAgFACgCQACgCAEAAQADAAACACQACADAAAEQAAAEgCACQgCADgDAAQgEAAgCgDgAnCByQgDgCAAgEQAAgFADgCQACgCADAAQADAAACACQADADAAAEQAAAEgDACQgCADgDAAQgDAAgCgDgACwALQgPgNAAgcQAAgeAUgOQAVgOAqgBIAggBIAAgIQAAgdgdAAQgWAAgeAOIgRgiQAggRAnAAQAlAAAUAQQAUAQAAAiIAAB5IgjAAIgKgXIgBAAQgNAOgOAGQgNAHgWAAQgbAAgPgQgAEAg8QgWABgLAHQgLAHAAAPQAAAWAZAAQASAAAKgLQALgKAAgQIAAgQgAi1ALQgPgNAAgcQAAgeAUgOQAVgOAqgBIAggBIAAgIQAAgdgdAAQgWAAgeAOIgRgiQAggRAnAAQAlAAAUAQQAUAQAAAiIAAB5IgjAAIgKgXIgBAAQgNAOgOAGQgNAHgWAAQgbAAgPgQgAhlg8QgWABgLAHQgLAHAAAPQAAAWAZAAQASAAAKgLQALgKAAgQIAAgQgAATAXIAAi3IAmAAIAIAfIACAAQAJgQAPgJQAOgKARAAIASACIgEAvIgPgCQgYAAgOANQgOAMAAAXIAABcgAkNAXIg/hkIgWAQIAABUIg0AAIAAjwIA0AAIAABvIBWhvIA5AAIhVBrIBWCFg");
	this.shape_1.setTransform(52,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.9,42.5);


(lib.insulincrystals = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAsQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBIACgEIAAgBQgCgEABgCQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAKAAIABg4IgJAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIAAgDIgBgBIAAgCIACAAIAmABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAEIAAABIAAADQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgJgBIAAA5IAIAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAIgBAGIAAAAIABAFQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAg");
	this.shape.setTransform(200.9,53.2,0.966,0.966,-21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DABC37").s().p("AAABCQgcAAgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAbABAUAUQATAUAAAaQgBAcgUATQgTATgaAAIgBgBg");
	this.shape_1.setTransform(201,53,0.966,0.966,-21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6D84C").s().p("ACfBVIgXAAIgDgBIAAgWIgJAAIAAAXIgBgBIgcAAIgCAAQAAABAAgBIAAgWIgJgBIAAAWIgDABIgWgBIgCAAIABgnQAAgFABAAIAMAAIABgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgbABghQABgjAYgYQAZgXAkAAQAbABAXATQAXATAHAbICvAEQAKAAAGAHQAGAGAAAIQAAAJgHAGQgGAHgJgBIgNAAIAAANIANABIAAAFIAAAoIgBgBg");
	this.shape_2.setTransform(209.8,49.7,0.966,0.966,-21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAsQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBIACgEIAAgBQgCgEABgCQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAKAAIABg4IgJAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIAAgDIgBgBIAAgCIACAAIAmABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAEIAAABIAAADQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgJgBIAAA5IAIAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAIgBAGIAAAAIABAFQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAg");
	this.shape_3.setTransform(202.4,19.8,0.966,0.966,-7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DABC37").s().p("AAABCQgcAAgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAbABAUAUQATAUAAAaQgBAcgUATQgTATgaAAIgBgBg");
	this.shape_4.setTransform(202.4,19.6,0.966,0.966,-7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6D84C").s().p("ACfBVIgXAAIgDgBIAAgWIgJAAIAAAXIgBgBIgcAAIgCAAQAAABAAgBIAAgWIgJgBIAAAWIgDABIgWgBIgCAAIABgnQAAgFABAAIAMAAIABgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgbABghQABgjAYgYQAZgXAkAAQAbABAXATQAXATAHAbICvAEQAKAAAGAHQAGAGAAAIQAAAJgHAGQgGAHgJgBIgNAAIAAANIANABIAAAFIAAAoIgBgBg");
	this.shape_5.setTransform(211.8,18.5,0.966,0.966,-7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAsQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBIACgEIAAgBQgCgEABgCQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAKAAIABg4IgJAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIAAgDIgBgBIAAgCIACAAIAmABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAEIAAABIAAADQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgJgBIAAA5IAIAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAIgBAGIAAAAIABAFQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAg");
	this.shape_6.setTransform(196.4,33.4,0.966,0.966,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DABC37").s().p("AAABCQgcAAgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAbABAUAUQATAUAAAaQgBAcgUATQgTATgaAAIgBgBg");
	this.shape_7.setTransform(196.5,33.3,0.966,0.966,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6D84C").s().p("ACfBVIgXAAIgDgBIAAgWIgJAAIAAAXIgBgBIgcAAIgCAAQAAABAAgBIAAgWIgJgBIAAAWIgDABIgWgBIgCAAIABgnQAAgFABAAIAMAAIABgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgbABghQABgjAYgYQAZgXAkAAQAbABAXATQAXATAHAbICvAEQAKAAAGAHQAGAGAAAIQAAAJgHAGQgGAHgJgBIgNAAIAAANIANABIAAAFIAAAoIgBgBg");
	this.shape_8.setTransform(205.3,36.7,0.966,0.966,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAsQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBIACgEIAAgBQgCgEABgCQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAKAAIABg4IgJAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIAAgDIgBgBIAAgCIACAAIAmABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAEIAAABIAAADQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgJgBIAAA5IAIAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAIgBAGIAAAAIABAFQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAg");
	this.shape_9.setTransform(179.7,31.7,0.966,0.966,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DABC37").s().p("AAABCQgcAAgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAbABAUAUQATAUAAAaQgBAcgUATQgTATgaAAIgBgBg");
	this.shape_10.setTransform(179.8,31.6,0.966,0.966,20.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6D84C").s().p("ACfBVIgXAAIgDgBIAAgWIgJAAIAAAXIgBgBIgcAAIgCAAQAAABAAgBIAAgWIgJgBIAAAWIgDABIgWgBIgCAAIABgnQAAgFABAAIAMAAIABgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgbABghQABgjAYgYQAZgXAkAAQAbABAXATQAXATAHAbICvAEQAKAAAGAHQAGAGAAAIQAAAJgHAGQgGAHgJgBIgNAAIAAANIANABIAAAFIAAAoIgBgBg");
	this.shape_11.setTransform(188.6,35,0.966,0.966,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASAsIgkAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgFIAAAAIgBgFQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAJAAIABg4IgJAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgBQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAmAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABIgBAEIAAABIABAEQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgJAAIgBA3IAIABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgBAGIAAAAIABAFQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_12.setTransform(167,15.4,0.966,0.966,-6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DABC37").s().p("AAABDQgcgBgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAcABATAUQAUAUgBAaQgBAbgUAUQgTATgbAAIAAAAg");
	this.shape_13.setTransform(167.1,15.3,0.966,0.966,-6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6D84C").s().p("ACfBVIgWAAIgDAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgWIgJgBIgBAWIgBABIgcgBIgCABIAAgBIAAgWIgIAAIgBAWQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCAAIgWgBIgCABIABgoQAAgFACAAIAMAAIAAgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgaABghQABgjAZgYQAYgYAkABQAbAAAXATQAWATAIAbICwAEQAJAAAGAHQAHAHgBAHQAAAJgGAGQgHAHgJAAIgMgBIgBAOIANAAQABAAAAAFIgBAoIgBgBg");
	this.shape_14.setTransform(176.5,14.4,0.966,0.966,-6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAsQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgFIAAAAQgCgEABgCQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAJAAIABg4IgJAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAAgBQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAmAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIgBAEIAAAAIABAEQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgJgBIgBA4IAIAAQADABAAADIgBAFIAAABIABAFQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_15.setTransform(138.4,31.2,0.966,0.966,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DABC37").s().p("AAABDQgcgBgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAcABATAUQAUAUgBAaQgBAbgUAUQgTATgbAAIAAAAg");
	this.shape_16.setTransform(138.5,31.1,0.966,0.966,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F6D84C").s().p("ACfBVIgWAAIgEgBIAAgVIgIgBIgBAWIgBABIgcgBIgCAAIAAgWIgIAAIgBAVIgDABIgWgBIgCAAIABgnQAAgFACAAIAMAAIAAgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgbABghQABgjAZgYQAZgXAjAAQAbABAXATQAWATAIAbICwAEQAJAAAGAHQAHAHgBAHQAAAJgGAGQgHAHgJgBIgMAAIgBAOIANAAQABAAAAAFIgBAoIgBgBg");
	this.shape_17.setTransform(147.7,33.4,0.966,0.966,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAsQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBIACgEIAAgBQgCgEABgCQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAJAAIACg4IgJAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFIAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBgBIAAgCIACAAIAmABQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAABIgBADIAAACIAAADQAAABAAABQAAAAAAAAQgBAAAAABQgBAAgBgBIgJAAIAAA5IAIAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABIgBAGIAAAAIABAFQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_18.setTransform(102.5,48.6,0.966,0.966,-12.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DABC37").s().p("AAABDQgcgBgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAcABATAUQATAUAAAaQgBAcgUATQgTATgaAAIgBAAg");
	this.shape_19.setTransform(102.6,48.4,0.966,0.966,-12.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F6D84C").s().p("ACfBVIgXAAIgDgBIAAgWIgJAAIAAAXIgCgBIgbAAIgCgBIAAgWIgJAAIAAAWQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCgBIgWAAIgCAAIABgnQAAgFABAAIAMAAIABgOIhYgBQgIAagXARQgXARgdgBQgigBgYgaQgZgaABghQABgjAYgYQAZgXAkAAQAbABAXATQAXATAHAbICvAEQAKAAAGAHQAGAGAAAHQAAAKgHAGQgGAGgJAAIgNAAIAAANIANABIAAAFIAAAoIgBgBg");
	this.shape_20.setTransform(111.8,46.5,0.966,0.966,-12.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAsQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBgBIACgFIAAAAIgCgGQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAIAJAAIACg4IgIAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgBQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIACAAIAmAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAEIAAAAIAAAEQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgJAAIgBA3IAIABQAEAAgCAIIAAABIABAFQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_21.setTransform(79.9,47.9,0.966,0.966,-23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DABC37").s().p("AAABDQgcgBgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAcABATAUQATAUgBAaQAAAbgUAUQgUATgaAAIAAAAg");
	this.shape_22.setTransform(79.9,47.7,0.966,0.966,-23.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F6D84C").s().p("ACeBVIgWAAIgCAAIgBgBIAAgVIgJgBIAAAWIgCABIgbgBIgCAAQAAABAAgBIAAgWIgJAAIAAAVIgBABIgCAAIgXgBIgBABIABgoQAAgFABAAIAMAAIABgNIhZgCQgIAbgWAQQgXARgdgBQgiAAgZgaQgYgbABghQABgjAYgYQAZgXAjAAQAcABAXATQAWATAHAbICwAEQAKAAAGAHQAGAGAAAIQAAAJgHAGQgGAHgKgBIgMAAIAAAOIAMAAQABAAAAAFIgBAoIgBgBg");
	this.shape_23.setTransform(88.6,44,0.966,0.966,-23.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAsQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBIACgEIAAgBQgCgEABgCQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAKAAIABg4IgJAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIAAgDIgBgBIAAgCIACAAIAmABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIgBAEIAAABIAAADQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgJgBIAAA5IAIAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAIgBAGIAAAAIABAFQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAg");
	this.shape_24.setTransform(171.1,42.5,0.966,0.966,20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DABC37").s().p("AAABCQgcAAgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAbABAUAUQATAUAAAaQgBAcgUATQgTATgaAAIgBgBg");
	this.shape_25.setTransform(171.2,42.4,0.966,0.966,20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F6D84C").s().p("ACfBVIgXAAIgDgBIAAgWIgJAAIAAAXIgBgBIgcAAIgCAAQAAABAAgBIAAgWIgJgBIAAAWIgDABIgWgBIgCAAIABgnQAAgFABAAIAMAAIABgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgbABghQABgjAYgYQAZgXAkAAQAbABAXATQAXATAHAbICvAEQAKAAAGAHQAGAGAAAIQAAAJgHAGQgGAHgJgBIgNAAIAAANIANABIAAAFIAAAoIgBgBg");
	this.shape_26.setTransform(180,45.8,0.966,0.966,20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASAsIgkAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBIABgEIAAgBIgBgFQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAAAAAIAJAAIACg4IgJAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgBQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAIAAgCIACAAIAmABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAEIAAABIABAEQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgJAAIgCA4IAJAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAGIgBAAIABAFQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_27.setTransform(125.4,18.3,0.966,0.966,-10.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DABC37").s().p("AAABDQgcgBgTgUQgTgUAAgaQABgbAUgUQAUgTAaAAQAcABATAUQATAUgBAaQAAAcgUATQgUATgaAAIAAAAg");
	this.shape_28.setTransform(125.5,18.1,0.966,0.966,-10.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F6D84C").s().p("ACeBVIgWAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAIAAgWIgJAAIAAAVIgCABIgbgBIgCABIAAgBIAAgWIgJAAIAAAWQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCAAIgXgBIgBABIABgoQAAgFABAAIAMAAIABgNIhZgCQgIAbgWAQQgXARgdgBQgiAAgZgaQgYgaABghQABgjAYgYQAZgYAjABQAcAAAXATQAWATAHAcICwADQAKAAAGAHQAGAHAAAHQAAAJgHAGQgGAHgKAAIgMgBIAAAOIAMAAQABAAAAAFIgBAoIgBgBg");
	this.shape_29.setTransform(134.8,16.5,0.966,0.966,-10.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAsQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgGIAAAAQgCgEABgCQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAJAAIABg3IgJgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAAgBIgCgEIAAgCIACgBIAmABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABIgBAEIAAABIAAADQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgIAAIgBA4IAIAAQADAAAAADIgBAFIAAABIABAGQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_30.setTransform(110.4,22.8,0.966,0.966,31.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DABC37").s().p("AAABCQgcAAgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAcABATAUQAUAUgBAaQgBAbgUAUQgTATgaAAIgBgBg");
	this.shape_31.setTransform(110.5,22.7,0.966,0.966,31.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F6D84C").s().p("ACfBVIgWAAIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgWIgIAAIgBAXIgBgBIgcAAIgCAAQAAABAAgBIAAgWIgIgBIgBAWIgDABIgWgBIgCAAIABgnQAAgFACAAIAMAAIAAgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgbABghQABgjAZgYQAZgXAjAAQAbABAXATQAWATAIAbICwAEQAJAAAGAHQAHAHgBAHQAAAJgGAGQgHAHgJgBIgMAAIgBAOIANAAQACAAgCAFIAAAoIgBgBg");
	this.shape_32.setTransform(118.5,27.8,0.966,0.966,31.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSArQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBgBIACgFIAAgBIgBgEQAAgCAAAAQAAgBABgBQAAAAAAAAQABgBAAAAIAJABIACg4IgJAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFIAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAAAIAAgCIACgBIAmACQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAABIgBADIAAABIAAAFQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABgBAAIgJAAIAAA3IAIAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAABIgBAFIAAABIABAFQAAABAAABQgBAAAAABQAAAAgBAAQgBAAAAAAg");
	this.shape_33.setTransform(77,20,0.966,0.966,-32.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DABC37").s().p("AAABDQgcgBgTgUQgTgUAAgaQABgbAUgUQAUgTAaAAQAcABATAUQATAUAAAaQgBAcgUATQgTATgaAAIgBAAg");
	this.shape_34.setTransform(77,19.8,0.966,0.966,-32.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F6D84C").s().p("ACIBVIgDAAIAAgWIgJAAIAAAWIgCAAIgbgBIgCAAIAAgWIgJAAIAAAWQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCAAIgWgBIgCABIABgoIAAgDQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIAMAAIABgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgZgaQgYgaABghQABgkAYgXQAZgYAkABQAbAAAXATQAXATAHAcICvADQAKAAAGAHQAGAHAAAHQAAAJgHAGQgGAHgJAAIgNgBIAAAOIAMAAQABAAAAAFIgBAog");
	this.shape_35.setTransform(85.1,14.9,0.966,0.966,-32.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTAsQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIABgFIAAAAIgBgFQABgEACAAIAJAAIACg4IgJAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgBQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAmAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAAEIAAABIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgJAAIgBA3IAIABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgBAFIAAABIABAFQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_36.setTransform(157.9,26.3,0.966,0.966,0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DABC37").s().p("AAABDQgcgBgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAcABATAUQAUAUgBAaQgBAbgUAUQgTATgbAAIAAAAg");
	this.shape_37.setTransform(158,26.2,0.966,0.966,0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F6D84C").s().p("ACfBVIgWAAIgDAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgWIgJgBIgBAWIgBABIgcgBIgCAAIAAgWIgIAAIgBAWQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCAAIgWgBIgCABIABgoQAAgFACAAIAMAAIAAgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgaABghQABgjAZgYQAYgYAkABQAbAAAXATQAWATAIAbICwAEQAJAAAGAHQAHAGgBAIQAAAJgGAGQgHAHgJAAIgMgBIgBAOIANAAQABAAAAAFIgBAoIgBgBg");
	this.shape_38.setTransform(167.4,26.4,0.966,0.966,0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSArQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIACgGIAAgBQgCgDABgBQAAgBAAgBQAAgBABAAQAAgBAAAAQABAAAAAAIAKAAIABg4IgJAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIABgBIgBgCIgBgCIAAgCIACgBIAmABQAAAAABABQABAAAAAAQAAAAABABQAAAAAAABIgBAEIAAAAIAAAFQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgJAAIAAA3IAIAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIgBAFIAAABIABAGQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_39.setTransform(138.7,47.3,0.966,0.966,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DABC37").s().p("AAABCQgbAAgUgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAbABAUAUQATAUAAAaQgBAcgUATQgTATgaAAIgBgBg");
	this.shape_40.setTransform(138.8,47.2,0.966,0.966,0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F6D84C").s().p("ACfBVIgXAAIgDgBIAAgWIgJAAIAAAXIgBgBIgcAAIgCAAIAAgBIAAgVIgJgBIAAAWIgDABIgWgBIgCAAIABgnQAAgFABAAIANAAIAAgNIhYgCQgIAbgXAQQgXARgdgBQgigBgYgaQgZgaABghQABgjAYgYQAZgXAkAAQAcABAWATQAXATAHAbICvAEQAKAAAGAHQAHAGgBAIQAAAJgGAGQgHAHgJgBIgNAAIAAANIANABIAAAFIAAAoIgBgBg");
	this.shape_41.setTransform(148.3,47.4,0.966,0.966,0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AASAsIgkAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBgBgBIACgFIAAAAIgCgFQABgEADAAIAJAAIABg4IgIAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgBQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAIAAgCIACAAIAlAAQABAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAAEIAAABIAAAEQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAgBAAIgJAAIAAA3IAIABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgBAGIAAAAIABAFQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_42.setTransform(91.8,27.4,0.966,0.966,25.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DABC37").s().p("AAABDQgcgBgTgUQgTgUAAgaQABgbAUgUQAUgTAaAAQAcABATAUQATAUgBAaQAAAcgUATQgUATgaAAIAAAAg");
	this.shape_43.setTransform(91.9,27.3,0.966,0.966,25.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F6D84C").s().p("ACeBVIgWAAIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgWIgJgBIAAAWIgCABIgbgBIgCAAIAAgWIgJAAIAAAWQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCAAIgXgBIgBABIABgoQAAgFABAAIAMAAIABgNIhZgCQgIAbgWAQQgXARgdgBQgiAAgZgaQgYgaABghQABgjAYgYQAZgYAjABQAcAAAXATQAWATAHAbICwAEQAKAAAGAHQAGAHAAAHQAAAJgHAGQgGAHgKAAIgMgBIAAAOIAMAAQABAAAAAFIgBAoIgBgBg");
	this.shape_44.setTransform(100.4,31.5,0.966,0.966,25.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSArQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgEIAAgCQgCgDABgBQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAJAAIABg4IgJAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBIAAgBIgCgEIAAgCIACAAIAmABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAEIAAAAIAAAFQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgIgBIgBA5IAIAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIgBAGIAAAAIABAFQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_45.setTransform(68.4,33.7,0.966,0.966,0.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DABC37").s().p("AAABCQgcAAgTgUQgTgUAAgaQABgcAUgTQAUgTAaAAQAcABATAUQAUAUgBAaQgBAbgUAUQgTATgaAAIgBgBg");
	this.shape_46.setTransform(68.5,33.6,0.966,0.966,0.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F6D84C").s().p("ACfBVIgWAAIgEgBIAAgWIgIAAIgBAXIgBgBIgcAAIgCAAQAAABAAgBIAAgWIgIgBIgBAWIgDABIgWgBIgCAAIABgnQAAgFACAAIAMAAIAAgNIhYgCQgIAbgXAQQgXARgdgBQgiAAgYgaQgZgbABghQABgjAZgYQAZgXAjAAQAcABAWATQAXATAHAbICwAEQAJAAAGAHQAHAHgBAHQAAAJgGAGQgHAHgJgBIgMAAIgBANIANABQACAAgCAFIAAAoIgBgBg");
	this.shape_47.setTransform(78,33.8,0.966,0.966,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D9854D").s().p("AO5FAQgvgCimgMQhYgHg+AGQh6AMhwgCQgugBingKQhWgNhGgHQiJgMhJAXQhYAchxgCQhtgChZgeQgkgNhbAOQhgAOgwgMQhogZgnhDIgSglQgLgWgLgMQgLgMgngYQgigUgKgUQgKgTAEgZQADgVANgVQAKgPASgVIAegjQAOgTAlg9QAfgyAYgaQA8g+BcACQAbABA2AIQA2AJAbAAQAjABBXgFQBOgEAsADQAUABBKAKQA6AHAkgBQATAABtgSQBOgMAuAMIA0ARQAgAMAVACQAUACAdgFIAxgIQBDgKB4ARQCEASA4gDQAMgBBqgOQBHgKAuAIQAVADApAVQAtAVASAFQAXAGA7AAQAzAAAdANQArATAWAqQAXAtgWAkQgJAPgnAeQghAagGAVQgIAiAoAsQA0A3AHAVQANAkgVAmQgUAkglARQggAPgrAEIgiABIgtgBg");
	this.shape_48.setTransform(144.6,32.4,0.798,0.966,0,0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.5,0.7,188.2,63.7);


(lib.insulin_key = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhICfQgMABgDgJQgCgEABgKIAAgDQgBgPACgFQACgIAGgEQAEgCADAAIAhAAIAAjGIghAAQgMAAgDgNQgCgEABgLIAAgDQgBgOACgEQAEgLALAAICQAAQASgBAAAeIAAACQAAAdgSAAIghAAIAADGIAhAAQASAAAAAiIAAADQAAAKgCAFQgFAHgLAAg");
	this.shape.setTransform(30.4,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DABC37").s().p("AiqCqQhGhHAAhjQAAhjBGhHQBHhGBjAAQBjAABHBGQBHBHAABjQAABjhHBHQhHBHhjAAQhjAAhHhHg");
	this.shape_1.setTransform(30.5,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6D84C").s().p("Ao2DVQhahcAAh8QAAh+BXhYQBZhXB+AAQBkAABTBEQBSBCAcBjIJ+AAQAhAAAXAXQAYAXAAAgQAAAhgYAYQgXAXghAAIgpAAIAAAyIAqAAQAEAAACAEQACAFAAAEIAACNQAAAGgIAAIhQAAQgMAAAAgGIAAhKIgeAAIAABKQAAAGgIAAIhkAAQgMAAAAgGIAAhKIgeAAIAABKQAAAGgIAAIhQAAQgMAAAAgGIAAiNQAAgDAEgGQAEgEAEAAIAmAAIAAgyIk9AAQgbBihPA8QhRA8hqAAQh6AAhahcg");
	this.shape_2.setTransform(65.8,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.5,61.1);


(lib.HOUR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(4).p("AAAhcIAAC5");
	this.shape.setTransform(0,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,22.8);


(lib.heavybreathing_symptom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGfCRQgQgRAAggQAAgfASgSQASgRAfAAQAUAAATAIIgKAWQgOgHgPAAQgRAAgLALQgLAMAAAVQAAAVAJAKQAIAMARAAIARgCIAAgbIgYAAIAAgWIAzAAIAABCQgNAEgLACQgLABgLAAQgdAAgPgRgAFSChIg4hiIAAAAIABBiIgYAAIAAiBIAiAAIA4BgIABAAIgChgIAZAAIAACBgADHChIAAiBIAcAAIAACBgACMChIAAg4IgzAAIAAA4IgbAAIAAiBIAbAAIAAAyIAzAAIAAgyIAbAAIAACBgAgSChIAAhrIgjAAIAAgWIBfAAIAAAWIgjAAIAABrgAhVChIgKgfIgvAAIgJAfIgdAAIAtiBIAhAAIAuCBgAhlBrIgRg3IgRA3IAiAAgAkJChIAAiBIBKAAIAAAWIguAAIAAAcIArAAIAAAXIgrAAIAAAhIAuAAIAAAXgAk3ChIgegyIgPAAIAAAyIgbAAIAAiBIAlAAQAbAAAMAKQANAJAAAUQAAALgHAIQgGAJgLAGIAmA4gAlkBZIAJAAQANAAAGgFQAGgEAAgJQAAgJgGgEQgGgDgOgBIgIAAgAn4ChIAAiBIAoAAQAcAAAMAIQAMAIAAAQQAAAMgFAHQgFAIgJABIAAABQAMADAFAIQAGAHAAAMQAAASgNAKQgNAKgWAAgAncCKIARAAQAMAAAFgEQAFgEAAgKQAAgPgWAAIgRAAgAncBTIAPAAQAMAAAFgDQAEgEAAgIQAAgHgFgEQgFgDgMAAIgOAAgADgghIAAgwIgqhPIgrB/IgeAAIgsiAIAcAAIAcBcIADANQABgJAFgUIAZhMIA4AAIAbA1IAbg1IAdAAIgrBPIAAAxgAAkghIgJgeIgtAAIgJAeIgeAAIAuiAIAfAAIAtCAgAAUhWIgRg4IgOA4IAfAAgAiNghIAAiAIBKAAIAAAWIgvAAIAAAdIAsAAIAAAWIgsAAIAAAhIAvAAIAAAWgAjIghIAAg3IgzAAIAAA3IgcAAIAAiAIAcAAIAAAzIAzAAIAAgzIAbAAIAACAg");
	this.shape.setTransform(99.1,57.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97E332").s().p("Aj/JmQgXgCgVgNQgUgNgOgUQgHgKgSg3QgPgsgVgMQgrgahKAcQgqAPhHAmQguAUgigEQgtgGgLgwQgGgaAUgzQAUgxgIgcQgJghgeguQgkg4gJgTQgSglAFgbQAGghAkgNQAzgJAdgIQA0gNABgeQgDglgkg6QgqhDgIgZQgNgqAXgSQAWgSArAKIBTASQA3AIAbgRQAcgSAAg1IgGhSQgDg7ATgqQAZg2A1AAQA1ABA1AiQAmAZAvAyQAdAeAKAIQAZAWAWADQAaAFATgSQANgNANgcIAWg6QAOgjANgTQAkguAmgFQArgFAeAyQANAVANAgIAWA3QAMAcAFAJQAOAWARADQASAEAUgHQAPgEAVgMIBcg0QA8gaAnAbQAdAUAGAyQAEAbgEA2IgEAwQgCAcABATQAAAVAHABQAEAAAVgGQAqgGAhAMQArAPgCAoQgCAdgPAZQgWAegMASQgVAhAHASQAMAjA0gBIArgCQAagBANAEQA7ASgBA5QgCA0gsAkQgIAHgcANQgYAMgKAKQgPARAMAhQAHASARAeQAQAkAFARQAIAhgMAVQghA3g8gMQgpgIg7gpQgagTgJgDQgVgJgSALQgjAVgjAsQgcAngQATQgcAhgcAOQhFAjhFggQg0gYg9hDQgegqgTgVQghgngdAKQgkANgOAiQgIAUgMAvQgPApgqAYQgiAUgjAAIgPgBg");
	this.shape_1.setTransform(99.9,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.2,-6.2,168,123.2);


(lib.glucose2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(22,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_1.setTransform(22,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_2.setTransform(22.7,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.4,39);


(lib.glucose_cluster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(33.8,10.5,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_1.setTransform(33.8,10.5,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_2.setTransform(34.3,10.6,0.618,0.618);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_3.setTransform(58,24.4,0.618,0.618);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_4.setTransform(58,24.4,0.618,0.618);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_5.setTransform(58.5,24.5,0.618,0.618);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_6.setTransform(57.8,50.5,0.618,0.618);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_7.setTransform(57.8,50.5,0.618,0.618);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_8.setTransform(58.2,50.6,0.618,0.618);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_9.setTransform(33.5,63.6,0.618,0.618);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_10.setTransform(33.5,63.6,0.618,0.618);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_11.setTransform(34,63.7,0.618,0.618);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_12.setTransform(33.8,36.6,0.618,0.618);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_13.setTransform(33.8,36.6,0.618,0.618);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_14.setTransform(34.3,36.7,0.618,0.618);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape_15.setTransform(9.7,50.2,0.618,0.618);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_16.setTransform(9.7,50.2,0.618,0.618);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8961F4").s().p("AhlDDQgNAAgGgLIhmixQgGgIAGgKIBmiwQACgFAGgBIALAAIDLAAIALAAQAGABACAFIBmCuQAHAKgHAJIhmCyQgGAKgNABg");
	this.shape_17.setTransform(10.1,50.3,0.618,0.618);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape_18.setTransform(9.7,22.4,0.618,0.618);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_19.setTransform(9.7,22.4,0.618,0.618);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8961F4").s().p("AhlDDQgNAAgGgLIhmixQgGgIAGgKIBmiwQACgFAGgBIALAAIDLAAIALAAQAGABACAFIBmCuQAHAKgHAJIhmCyQgGAKgNABg");
	this.shape_20.setTransform(10.1,22.5,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:34,y:63.7}},{t:this.shape_10,p:{x:33.5,y:63.6}},{t:this.shape_9,p:{x:33.5,y:63.6}},{t:this.shape_8,p:{x:58.2,y:50.6}},{t:this.shape_7,p:{x:57.8,y:50.5}},{t:this.shape_6,p:{x:57.8,y:50.5}},{t:this.shape_5,p:{x:58.5,y:24.5}},{t:this.shape_4,p:{x:58,y:24.4}},{t:this.shape_3,p:{x:58,y:24.4}},{t:this.shape_2,p:{x:34.3,y:10.6}},{t:this.shape_1,p:{x:33.8,y:10.5}},{t:this.shape,p:{x:33.8,y:10.5}}]}).to({state:[]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_11,p:{x:34.3,y:36.7}},{t:this.shape_10,p:{x:33.8,y:36.6}},{t:this.shape_9,p:{x:33.8,y:36.6}},{t:this.shape_8,p:{x:34,y:63.7}},{t:this.shape_7,p:{x:33.5,y:63.6}},{t:this.shape_6,p:{x:33.5,y:63.6}},{t:this.shape_5,p:{x:58.2,y:50.6}},{t:this.shape_4,p:{x:57.8,y:50.5}},{t:this.shape_3,p:{x:57.8,y:50.5}},{t:this.shape_2,p:{x:58.5,y:24.5}},{t:this.shape_1,p:{x:58,y:24.4}},{t:this.shape,p:{x:58,y:24.4}}]},3).to({state:[]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_11,p:{x:34.3,y:36.7}},{t:this.shape_10,p:{x:33.8,y:36.6}},{t:this.shape_9,p:{x:33.8,y:36.6}},{t:this.shape_8,p:{x:34,y:63.7}},{t:this.shape_7,p:{x:33.5,y:63.6}},{t:this.shape_6,p:{x:33.5,y:63.6}},{t:this.shape_5,p:{x:58.2,y:50.6}},{t:this.shape_4,p:{x:57.8,y:50.5}},{t:this.shape_3,p:{x:57.8,y:50.5}},{t:this.shape_2,p:{x:58.5,y:24.5}},{t:this.shape_1,p:{x:58,y:24.4}},{t:this.shape,p:{x:58,y:24.4}}]},4).to({state:[]},1).to({state:[{t:this.shape_11,p:{x:34.3,y:36.7}},{t:this.shape_10,p:{x:33.8,y:36.6}},{t:this.shape_9,p:{x:33.8,y:36.6}},{t:this.shape_8,p:{x:34,y:63.7}},{t:this.shape_7,p:{x:33.5,y:63.6}},{t:this.shape_6,p:{x:33.5,y:63.6}},{t:this.shape_5,p:{x:58.2,y:50.6}},{t:this.shape_4,p:{x:57.8,y:50.5}},{t:this.shape_3,p:{x:57.8,y:50.5}},{t:this.shape_2,p:{x:58.5,y:24.5}},{t:this.shape_1,p:{x:58,y:24.4}},{t:this.shape,p:{x:58,y:24.4}}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-1.5,76.4,77.3);


(lib.glucmeterlabel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#303030").s().p("AgUBXIAAitIAqAAIAACtg");
	this.shape.setTransform(245.9,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303030").s().p("AgqAxQgSgRAAggQAAgeAQgRQAQgRAdAAQAdAAAPAPQAQAPAAAcIAAARIhNAAQABALAHAGQAIAGAKAAQAMAAAKgCQAJgCAMgFIAAAfQgLAFgKACQgMACgPAAQgdAAgSgQgAAVgOQAAgJgFgGQgFgFgJAAQgFAAgFAFQgFAEgCALIAkAAIAAAAg");
	this.shape_1.setTransform(234.9,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#303030").s().p("AgUA/Igxh9IAuAAIAWBJIAAACIABADIAAAEIAAAEIAAAAQAAgGABgHIAXhJIAuAAIgxB9g");
	this.shape_2.setTransform(220.6,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#303030").s().p("AgqAxQgSgRAAggQAAgeAQgRQARgRAcAAQAcAAAQAPQAQAPAAAcIAAARIhNAAQABALAHAGQAHAGALAAQAMAAAKgCQAKgCAKgFIAAAfQgKAFgKACQgMACgPAAQgeAAgRgQgAAVgOQAAgJgFgGQgFgFgIAAQgGAAgGAFQgEAEgCALIAkAAIAAAAg");
	this.shape_3.setTransform(206.8,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#303030").s().p("Ag1BSIAAijIAtAAIAAB/IA9AAIAAAkg");
	this.shape_4.setTransform(193.3,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#303030").s().p("AgqAxQgSgRAAggQAAgeAQgRQARgRAcAAQAcAAAQAPQAQAPAAAcIAAARIhNAAQABALAHAGQAIAGALAAQALAAAKgCQAJgCALgFIAAAfQgKAFgKACQgLACgQAAQgeAAgRgQgAAVgOQAAgJgFgGQgFgFgIAAQgGAAgGAFQgEAEgBALIAjAAIAAAAg");
	this.shape_5.setTransform(172.7,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#303030").s().p("AgbBAQgLgCgLgEIAAgjQALAFAMADQAMADAJAAQANAAAAgHQAAgDgEgDQgEgDgRgHQgSgHgGgHQgIgKAAgOQAAgRAOgKQAOgKAXAAQAMAAAMADQAKACAMAGIgLAcQgJgEgKgDQgKgDgGAAQgIAAAAAGQgBADAEACIAUAKQANAFAHAFQAGAEAEAHQACAHAAAKQABAVgOAKQgOAKgZAAIgYgBg");
	this.shape_6.setTransform(159.5,20.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#303030").s().p("AgtAwQgRgSAAgeQAAgeARgRQARgRAcAAQATAAAOAIQAPAIAHAPQAIAOAAATQAAAfgRARQgRARgdAAQgcAAgRgRgAgNgXQgEAIgBAPQABAQAEAIQAEAJAJAAQAKAAAFgJQADgIAAgQQABgPgFgIQgEgJgKAAQgJAAgEAJg");
	this.shape_7.setTransform(145.6,20.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#303030").s().p("AgkAxQgRgRAAggQAAgdASgSQARgRAeAAQAWAAAUAJIgNAhIgPgGQgHgCgHAAQgKAAgFAJQgFAIAAANQAAAfAUAAQAUAAARgMIAAAjQgQALgYAAQgeAAgPgQg");
	this.shape_8.setTransform(132.1,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#303030").s().p("AgxA0QgMgMAAgXIAAhQIAtAAIAABEQAAAMADAGQADAHAJgBQAJAAAEgJQAGgIAAgUIAAg3IAsAAIAAB9IgiAAIgFgQIgDAAQgGAJgJAFQgIAEgNAAQgVAAgMgMg");
	this.shape_9.setTransform(117.8,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#303030").s().p("AgUBXIAAitIApAAIAACtg");
	this.shape_10.setTransform(106.2,17.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#303030").s().p("AgxA+QgVgWAAgoQAAgnAXgWQAXgWAnAAQAPAAAOADQAOADAKAFIgOAiQgSgIgVAAQgSAAgLAMQgKANAAAVQAAAXAJAMQAKAMAQAAQAKAAAIgBIAAgaIgdAAIAAggIBHAAIAABWQgdAKgiAAQglAAgUgWg");
	this.shape_11.setTransform(93.6,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#303030").s().p("AgmBQQgLgIgFgPQgGgPAAgUQAAgdANgRQAMgSAWAAQAKAAAHAFQAHAEAHAKIABAAQgCgPAAgPIAAgiIAsAAIAACtIghAAIgKgQIgBAAQgLASgVAAQgNAAgKgIgAgKAAQgFAIgBAPQABAPAFAIQAEAHAHAAQAKAAAFgGQAFgHAAgOIAAgDQAAgRgFgGQgFgGgLAAQgGAAgEAGg");
	this.shape_12.setTransform(71.3,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#303030").s().p("AgtAwQgRgSAAgeQAAgeARgRQARgRAcAAQATAAAOAIQAOAIAJAPQAHAOAAATQAAAfgQARQgSARgdAAQgbAAgSgRgAgNgXQgFAIAAAPQAAAQAFAIQAFAJAIAAQAKAAAEgJQAEgIABgQQAAgPgFgIQgEgJgKAAQgIAAgFAJg");
	this.shape_13.setTransform(56.7,20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#303030").s().p("AgtAwQgRgSAAgeQAAgeARgRQARgRAcAAQATAAAOAIQAOAIAJAPQAHAOAAATQAAAfgQARQgSARgdAAQgbAAgSgRgAgNgXQgFAIAAAPQAAAQAFAIQAFAJAIAAQAKAAAEgJQAEgIABgQQAAgPgFgIQgEgJgKAAQgIAAgFAJg");
	this.shape_14.setTransform(41.8,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#303030").s().p("AgUBXIAAitIApAAIAACtg");
	this.shape_15.setTransform(30.6,17.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#303030").s().p("Ag+BSIAAijIA6AAQAfABARAJQAQAKAAAVQAAAOgHAKQgHAKgMADIAAABQAPACAHAJQAHAKAAAOQAAAXgRAMQgRAOgdAAgAgRAvIAPAAQATAAAAgRQAAgJgFgEQgGgEgIAAIgPAAgAgRgSIANAAQAIAAAFgDQAFgEAAgIQAAgOgTAAIgMAAg");
	this.shape_16.setTransform(19.3,18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#303030").s().p("AgqAxQgSgRAAggQAAgeARgRQAPgRAdAAQAdAAAPAPQAQAPAAAcIAAARIhNAAQABALAIAGQAGAGALAAQAMAAAJgCQAKgCAMgFIAAAfQgLAFgLACQgKACgQAAQgdAAgSgQgAAVgOQAAgJgFgGQgFgFgJAAQgFAAgFAFQgGAEgBALIAkAAIAAAAg");
	this.shape_17.setTransform(178.1,27.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#303030").s().p("AgsBAIAAh9IAhAAIAHAUIACAAQAEgKAJgGQAKgGAKAAIALABIADAAIgEAqQgGgCgJAAQgPAAgGAHQgFAGAAALIAAA+g");
	this.shape_18.setTransform(166.5,27.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#303030").s().p("AgyBTQgPgJAAgSQAAgKAHgIQAIgIAOgDQgGgCgFgGQgEgFAAgGQAAgFADgDQAEgEAKgHQgKgEgGgKQgFgJgBgNQAAgVAPgMQAOgLAbAAIAKABIAMABIAsAAIAAAVIgRAHQAEAHAAAIQAAAVgPALQgPAMgaAAIgMgBIgBADQAAADAFACQAGABAGABIAVAAQArgBAAAlQAAAXgTANQgVANghAAQgbAAgPgJgAgXAsQgFAEABAEQgBAFAGAEQAGAEAKgBQAOAAAKgDQAJgEAAgHQAAgFgGgCQgGgCgLAAIgPAAQgHAAgFADgAgOgvQAAAUAOAAQAEAAAEgGQADgEAAgKQAAgTgLAAQgOAAAAATg");
	this.shape_19.setTransform(153.3,30.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#303030").s().p("AASBAIAAhDQAAgNgEgGQgEgHgIAAQgJAAgFAJQgFAJAAAUIAAA3IgsAAIAAh9IAiAAIAFAQIADAAQAFgJAKgFQAIgEANAAQAVAAAMAMQAMAMAAAWIAABRg");
	this.shape_20.setTransform(138.5,27.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#303030").s().p("AgwA3QgKgLAAgUQAAgUANgIQAOgKAcgBIASgBIAAgCQAAgPgPAAQgLAAgWAJIgNgdQAWgLAgAAQAZAAANAMQANAMAAAWIAABRIgeAAIgIgRIgBAAQgJALgJAEQgHAEgPAAQgSAAgKgKgAAGAHQgUABAAAPQAAAMAMAAQAHAAAGgGQAFgFAAgIIAAgKg");
	this.shape_21.setTransform(123.2,27.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#303030").s().p("AgbBAQgKgCgLgEIAAgjQAKAFAMADQAMADAKAAQAMAAAAgHQAAgDgEgDQgEgDgRgHQgRgHgHgHQgIgKABgOQAAgRANgKQAOgKAXAAQANAAAKADQALACANAGIgMAcQgJgEgKgDQgKgDgGAAQgJAAABAGQAAADADACIATAKQAOAFAHAFQAGAEAEAHQACAHAAAKQAAAVgOAKQgOAKgYAAIgYgBg");
	this.shape_22.setTransform(110.2,27.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#303030").s().p("AgxA3QgKgLABgUQgBgUAOgIQAOgKAbgBIATgBIAAgCQAAgPgPAAQgLAAgWAJIgNgdQAWgLAhAAQAXAAAOAMQANAMAAAWIAABRIgeAAIgIgRIgBAAQgJALgJAEQgHAEgPAAQgSAAgLgKgAAGAHQgUABAAAPQAAAMAMAAQAGAAAHgGQAFgFAAgIIAAgKg");
	this.shape_23.setTransform(90.1,27.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#303030").s().p("AASBAIAAhDQAAgNgEgGQgEgHgIAAQgJAAgFAJQgFAJAAAUIAAA3IgsAAIAAh9IAiAAIAFAQIADAAQAFgJAKgFQAIgEANAAQAVAAAMAMQAMAMAAAWIAABRg");
	this.shape_24.setTransform(239,4.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#303030").s().p("AgwA3QgLgLAAgUQAAgUAOgIQAPgKAbgBIATgBIAAgCQAAgPgQAAQgMAAgVAJIgNgdQAXgLAfAAQAZAAANAMQAOAMAAAWIAABRIgfAAIgJgRIAAAAQgJALgJAEQgIAEgOAAQgSAAgKgKgAAGAHQgUABAAAPQAAAMANAAQAFAAAGgGQAGgFAAgIIAAgKg");
	this.shape_25.setTransform(203.1,4.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#303030").s().p("AgbBAQgLgCgKgEIAAgjQAKAFAMADQAMADAKAAQAMAAAAgHQAAgDgEgDQgEgDgRgHQgSgHgHgHQgGgKAAgOQAAgRANgKQAOgKAXAAQAMAAALADQAMACAMAGIgNAcQgIgEgKgDQgKgDgGAAQgJAAAAAGQAAADAEACIATAKQAOAFAGAFQAIAEACAHQAEAHAAAKQgBAVgOAKQgNAKgYAAIgZgBg");
	this.shape_26.setTransform(190.1,4.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#303030").s().p("AgsAwQgSgSAAgeQAAgeARgRQAQgRAdAAQATAAAOAIQAOAIAJAPQAHAOAAATQAAAfgRARQgQARgeAAQgbAAgRgRgAgNgXQgFAIABAPQgBAQAFAIQAFAJAIAAQAKAAAEgJQAFgIAAgQQgBgPgEgIQgEgJgKAAQgJAAgEAJg");
	this.shape_27.setTransform(176.2,4.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#303030").s().p("AglAxQgQgRAAggQAAgdARgSQASgRAeAAQAWAAAUAJIgNAhIgPgGQgHgCgHAAQgLAAgDAJQgHAIAAANQAAAfAWAAQATAAASgMIAAAjQgRALgZAAQgdAAgQgQg");
	this.shape_28.setTransform(162.8,4.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#303030").s().p("AgxA0QgMgMABgXIAAhQIArAAIAABEQAAAMAEAGQAEAHAHAAQAKgBAFgIQAEgJAAgUIAAg3IAsAAIAAB9IggAAIgGgQIgDAAQgGAJgJAEQgIAFgNAAQgVAAgMgMg");
	this.shape_29.setTransform(148.5,4.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#303030").s().p("AgVBXIAAitIArAAIAACtg");
	this.shape_30.setTransform(136.9,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#303030").s().p("AgyBTQgPgJAAgSQAAgLAHgHQAIgHAOgDQgHgDgDgFQgFgGAAgFQAAgHADgCQAEgFAKgGQgKgFgGgIQgFgKAAgOQAAgUAOgLQAOgMAbAAIAKABIAMACIAsAAIAAAUIgRAHQADAHABAIQAAAVgPALQgOALgbAAIgMgBIgBAEQAAADAGACQAEABAHAAIAVAAQArABAAAjQAAAYgUANQgUANghAAQgbAAgPgJgAgXAsQgFADABAGQgBAFAGADQAGADAKABQANAAALgFQAJgEAAgGQAAgFgGgCQgGgCgLAAIgPAAQgHAAgFADgAgOgvQAAATAOAAQAEAAAEgEQADgFAAgKQAAgUgLAAQgOAAAAAUg");
	this.shape_31.setTransform(125.9,6.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#303030").s().p("AgqAxQgSgRAAggQAAgeAQgRQARgRAcAAQAcAAAQAPQAQAPAAAcIAAARIhNAAQABALAHAGQAIAGALAAQALAAAKgCQAJgCALgFIAAAfQgKAFgKACQgLACgQAAQgeAAgRgQgAAVgOQAAgJgFgGQgFgFgIAAQgGAAgGAFQgEAEgBALIAjAAIAAAAg");
	this.shape_32.setTransform(105.6,4.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#303030").s().p("AgVBXIAAitIAqAAIAACtg");
	this.shape_33.setTransform(73.5,1.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#303030").s().p("AgqAxQgSgRAAggQAAgeAQgRQARgRAcAAQAcAAARAPQAPAPAAAcIAAARIhMAAQAAALAHAGQAIAGALAAQALAAAJgCQALgCAKgFIAAAfQgJAFgMACQgLACgPAAQgeAAgRgQgAAVgOQAAgJgFgGQgFgFgIAAQgGAAgGAFQgEAEgBALIAjAAIAAAAg");
	this.shape_34.setTransform(62.5,4.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#303030").s().p("AgVBZIAAh9IAqAAIAAB9gAgWhEQAAgKAGgFQAFgFALAAQAMAAAFAFQAGAFAAAKQAAATgXAAQgWAAAAgTg");
	this.shape_35.setTransform(37.3,1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#303030").s().p("AAUBSIg6hyIgBAAIACAoIAABKIgoAAIAAiiIA6AAIA6BvIABAAIgCglIAAhKIAoAAIAACig");
	this.shape_36.setTransform(23.8,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:71.3,y:18}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:172.7,y:20.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:220.6,y:20.3}},{t:this.shape_1},{t:this.shape,p:{x:245.9,y:17.9}}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_2,p:{x:48.2,y:4.3}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_12,p:{x:90.7,y:2}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_5,p:{x:224,y:4.2}},{t:this.shape_24},{t:this.shape,p:{x:79.3,y:25.2}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.1,35.4);


(lib.food_stomach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#553F3B").s().p("AAAAUQgKgBgFgJQgFgJAEgHQAEgIADgDQAJgEAHAFQAJAEACAJQACAHgHAIQgGAIgHAAIAAAAg");
	this.shape.setTransform(8.5,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#553F3B").s().p("AgPAYQgHgGgBgJQAAgIAHgKQAGgLAHgHIAMAAQAGABAFADQAHAHgFAQQgDAGgGAJQgHALgGACIgEAAQgGAAgFgEg");
	this.shape_1.setTransform(14.8,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#553F3B").s().p("AgUABQgDgGALgGIALgEIANABQAJACABAGQABAGgJAHQgIAIgIABQgLAAgHgPg");
	this.shape_2.setTransform(7.1,30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#553F3B").s().p("AAFARIAAgCQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgCACQgEADgGgFQgEgEgDgHQgDgFACgDIAFgEIAKgHQAEgEAEAAQADgBAFAHIAFALQAEAFgEAJQgDAKgJAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBABgBg");
	this.shape_3.setTransform(12.4,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#553F3B").s().p("AgeBLQgPgHgDgQQgDgQALgMIAQgKQALgHAHgGQAMgLABgMQAAgGgDgHIgEgNQgCgLACgOQAFgFAIAEQAIAEABAIIAAALQAAAGADAEQACADAIACQAJACACADQAFADgBAHQAAAFgEAFQgGAGgPAFQAFAAADADQADAEAAAGQAAAKgKAGQgIAFgLAAQgHAAgDADQgCACAAAKQABAIgCAGQgCAHgCACQgEAFgHAAQgEAAgFgCg");
	this.shape_4.setTransform(10.9,36.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#553F3B").s().p("AgOAhQgEgCgDgEQgCgEABgEIADgJQADgGgDgDIgEgBQgGgEADgJQABgDAMgLQANgKAPAGQAKAEACAHQADAJgIAIQgCADgNAFQAFAGACAEQACAIgDAFQgDAEgIACIgHAAQgFAAgEgBg");
	this.shape_5.setTransform(15.9,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#553F3B").s().p("AAPBPIgXgGQgWgHgIgHQgGgGgDgIQgCgJAEgHQACgFAFgDIAIgHQAMgKgFgHQgCgGgKgCQgMgDgEgEQgEgDAAgIQgBgGAEgGQAEgHAPgKIAjgWQAFAAAJACIANADQAKABAGAFQAIAFADANQACALgEAMQgEAOgVAUQgEAEABAEIAEAGQARAPABASQAAAKgGAJQgGAIgJABIgCAAIgKgCg");
	this.shape_6.setTransform(5.7,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,44.4);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As2D0IAAnnIZtAAIAAHng");
	mask.setTransform(139.8,24.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43CA53").s().p("AvgCcQmbhBAAhbQAAhaGbhBQGchBJEAAQJFAAGcBBQGbBBAABaQAABbmbBBQmcBBpFAAQpEAAmchBg");
	this.shape.setTransform(140.5,39.3);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.5,17.2,164.8,31.8);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As2D0IAAnnIZtAAIAAHng");
	mask.setTransform(139.8,24.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43CA53").s().p("AvgCcQmbhBAAhbQAAhaGbhBQGchBJEAAQJFAAGcBBQGbBBAABaQAABbmbBBQmcBBpFAAQpEAAmchBg");
	this.shape.setTransform(140.5,39.3);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.5,17.2,164.8,31.8);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("As2D0IAAnnIZtAAIAAHng");
	mask_1.setTransform(139.8,24.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339D3B").s().p("AvgCcQmbhBAAhbQAAhaGbhBQGchBJEAAQJFAAGcBBQGbBBAABaQAABbmbBBQmcBBpFAAQpEAAmchBg");
	this.shape_1.setTransform(140.5,39.3);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.5,17.2,164.8,31.8);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("As2D0IAAnnIZtAAIAAHng");
	mask_2.setTransform(139.8,24.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#43CA53").s().p("AvgCcQmbhBAAhbQAAhaGbhBQGchBJEAAQJFAAGcBBQGbBBAABaQAABbmbBBQmcBBpFAAQpEAAmchBg");
	this.shape_2.setTransform(140.5,39.3);

	this.shape_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.5,17.2,164.8,31.8);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAEHDQi+gChoiFQhch3gKjHQgJjHB6iBQBzh6CnADQDCADBtCHQBnCBgSC5QgUDFhfB5QhnCCimAAIgDAAg");
	this.shape.setTransform(39.4,45.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,78.8,90.2);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoZJeQizjcgYl8QgZl1Dij4QBnhwCKg+QCLg9CZgBQFsgBDTD8QBgB0AtCaQAsCagOCrQgeF0iwDmQjAD8k+ACIgIABQljAAjGj2g");
	this.shape.setTransform(74.4,85.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148.9,170.4);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZBXQgQgPgFgYQgHgiACgdQgBgfAKgVQABgFAEgDQAFgIAHgEQAZgSAXASQAVAPAFAbQAGAlgGAgQgHAqgaAVQgMAKgIAAQgLAAgKgKg");
	mask.setTransform(7.9,16.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#674E39").s().p("AhDhPQBFgFBCADQgRCegCAAIhWAHg");
	this.shape.setTransform(7.3,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#674E39").s().p("AhDBVIAFhQQAHhPABAAIBVgKIAlChQg8AIg9AAIgOAAg");
	this.shape_1.setTransform(6.9,8.5);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,7,10.5,19.4);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgZBXQgQgPgFgYQgHglACgaQAAghAJgTQABgEAEgDQAFgIAHgFQAZgSAXASQAVAPAFAbQAGAmgFAfQgIAqgaAVQgLAKgJAAQgLAAgKgKg");
	mask_1.setTransform(7.9,16.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#674E39").s().p("AhDhPQBDgFBEADQgRCegCAAIhWAGg");
	this.shape_1.setTransform(7.3,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#674E39").s().p("Ag+AFQAHhPABAAIBVgKIAlChQhBAIhGAAIAFhQg");
	this.shape_2.setTransform(6.9,8.6);

	this.shape_1.mask = this.shape_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,7,10.5,19.4);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("A0tGKIAAsTMApbAAAIAAMTg");
	mask_3.setTransform(225.1,39.4);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339D3B").s().p("A4+D8Qk5gxishAQiyhDAAhIQAAhHCyhDQCsg/E5gyQKXhpOnABQOogBKXBpQE5AyCsA/QCyBDAABHQAABIiyBDQisBAk5AxQqXBpuogBQunABqXhpg");
	this.shape_3.setTransform(226.2,63.4);

	this.shape_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92.5,27.7,265.3,51.1);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTBpQgHgGgPgXQgMgTgMgFQgIgEgSAAQgjAAgpgGQg6gJgSgcQgLgNABgVQACgUANgPQAPgRAYgLQAbgMAQAIQgBgLAOgGQAMgFANAFIAXAKQANAGAKAAQAHAAAJgDIAQgHQAogQAsAOQAQAFAFAJQACAFABAIIACANQAEAQATAJQALAFAZAFQAoAJAmASQAXAJANAQQAQATgHATQgFANgQAHQgNAGgRAAQgJAAgVgEQgUgDgLABQgRABgXAKQgaAOgOAFQgWAKgUABIgDAAQgUAAgOgMg");
	this.shape.setTransform(25.4,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.9,23.5);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIB4QgFgDgEgHIgIgLQgLgMgVABQgMABgZAHQgqAMgnABQgZACgTgIQgXgKgDgUQgCgOAKgNQAJgMAPgIIAdgLQASgGAJgGQAQgIAPgTIAagkQAPgTARgKQAVgMATAEQAJACAWANQAUALANgBQAIgBARgIQAggRAlgNQA3gUAeAQQARAJAIASQAJATgFATQgFAWgQAVQgSAWgSAAQAGAKgKALQgIAKgOACIgYACQgPAAgJAFQgGAEgHAHIgKANQgeAjgtAIIgKABQgHAAgGgDg");
	this.shape.setTransform(24.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,24.8);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALBuQgIgDgTgRQgSgOgNgBQgJgBgRAFQgkALgmAHQg5AKgbgUQgPgMgFgUQgGgUAIgRQAKgTATgSQAWgVARAEQgEgMALgJQAKgIAOAAIAYADQAPABAKgDQAGgCAIgGIAMgLQAjgdAsgBQASAAAHAHQAGAGAHARQAJANAVADQAMABAZgCQAqgFApAFQAZADARALQAVANgBAUQAAAPgNAJQgKAKgQAFIgeAGQgTAEgLAEQgQAHgTARIgfAeQgSAQgTAHQgMAFgLAAQgJAAgJgEg");
	this.shape.setTransform(25.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,22.9);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUgBQACgKAHgIQAHgIAHgDIADgGQAHgBAEABQAGADgBAFIgDAGQgCADAAABQgBABAAABQAAAAABABQAAAAAAABQAAAAABABIACAEQACAJgKADIgIADIgFAEQgDAEgDAIIgGAPQgLgVAEgRg");
	this.shape.setTransform(2.2,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,7.6);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggEqQgogHgigUQgjgUhEhEQg9g/gugTIgikuQgIgMASgbQAMgTASgTQAMgMAZgGQAlgKApAIQAoAHAhAWIAcAVQARAMAMAGQAZANAlAEQATACAsACQBSAFBFAfQBLAiApA6QAjAxgLAnQgIAcgdAUQgZARgkAIQgSAEgvAGQgpAEgXAHQgcAIgDAQQgCAKAHAMIAYA0QALAegIAWQgIAVgYAOQgUALgcAEQgQACgQAAQgWAAgXgFg");
	this.shape_1.setTransform(35.4,30.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,60.7);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6DkQgrgKgZgNQgkgSgPgbQgJgOgIgmQgJgigMgQQgNgTgrgWQgrgUgOgSQgQgWACgcQABgcAQgXQAPgUAwgeQArgbAegLQBLgeAogHQBFgMAxAYQAPAHAWAQQAaASALAGQASALAgAGQAqAIALAEQBDAWAdAeQATAUAGAgQAGAhgOAWQgNAUg1AYQgzAYgMAYQgHAPAAAWIAEAnQAFAzgbATQgNAJgbADIghACQhHAAhegYg");
	this.shape_1.setTransform(34.4,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.8,50.5);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2).p("AgoEcIBSo3");
	this.shape.setTransform(42.3,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2).p("AAqEcIhTo3");
	this.shape_1.setTransform(5.2,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2).p("ACPgVQAAANgqANQguARg3AAQg7AAgsgRQgngMAAgO");
	this.shape_2.setTransform(23.8,64.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2).p("ADjAAQAAAThCANQhCANhfAAQhdAAhDgNQhCgNAAgTQAAgSBCgMQBDgOBdAAQBeAABDAOQBCAMAAASg");
	this.shape_3.setTransform(23.8,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,69.7);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaBbQg/gbgvgcIACgiIAvgCIgchiIAFgOQAcAeBHAdQAyAVA4AOIAqALQAAAGhvByIg0gWg");
	this.shape.setTransform(13.8,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,22.7);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkaE6Qhch0gMjGQgLjDB3h/QBxh6ClABQC+ABBtCFQBnB+gQC3QgSDChcB4QhmCCimAAQi7AAhniCg");
	this.shape.setTransform(38.8,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.7,88.9);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAhQgWgCgHgQQgGgPASgOQARgNAYgFQASgDAOAEQAaABAJALQAKAOgMANQgMAQgeAGQgPAEgRAAIgPgBgAADgGQgHABgIACQgNADgEACQgFAGAEAAIALAAQATAAAUgIQAOgCAAgCIgBAAQgGADgHgEIgBAAIgDAAQgEAAgDgCIgGABg");
	this.shape.setTransform(6.4,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglATQgHgBgEgFQgDgFADgGQACgDAGgDQAVgRAlABIAGABIAOACQALADABAGQADAIgMAFQgNAHgQAEQgRAFgPAAQgJAAgIgCg");
	this.shape_1.setTransform(6.3,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,7);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAhQgWgCgHgQQgGgPASgOQAQgNAZgFQASgDAOAEQAaABAJALQAKAOgMANQgMAQgeAGQgPAEgRAAIgPgBgAgMgDQgOADgDACQgFAGAEAAIALAAQATAAAUgIQAOgCAAgCIgBAAQgFADgIgEIgBAAIgDAAQgEAAgDgCQgJAAgMAEg");
	this.shape.setTransform(6.4,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglATQgHgBgEgFQgDgFADgGQACgCAGgFQAVgQAlABIAFABIAPACQALADABAGQADAIgMAFQgKAGgTAFQgRAFgPAAQgJAAgIgCg");
	this.shape_1.setTransform(6.3,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,12.8,7);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAhQgWgCgHgQQgGgPASgOQAQgNAZgFQASgDAOAEQAaABAJALQAKAOgMANQgMAQgeAGQgPAEgRAAIgPgBgAgMgDQgOADgDACQgFAGAEAAIALAAQATAAAUgIQAOgCAAgCIgBAAQgFADgIgEIgBAAIgDAAQgEAAgDgCQgJAAgMAEg");
	this.shape.setTransform(6.4,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglATQgHgBgEgFQgDgFADgGQACgCAGgFQAVgQAlABIAFABIAPACQALADABAGQADAIgMAFQgNAHgQAEQgRAFgPAAQgJAAgIgCg");
	this.shape_1.setTransform(6.3,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,12.8,7);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAnBbQgJgDgLgMQgJgJgDgIQACAJgGAKQgFANgMgEQgOgFgGgUQgEgOABgRIhIhKIA2gxIA3A2IASAGIAUAEQAGAAAJgHQAJgHADgBQAQgEAKAIQAJAIABANQABANgIAGQgEAEgFACIAJAFQAOAKACANQADATgXAJQgPAGgJgGQAFAJgFAKQgGALgLAAQgFAAgFgCg");
	this.shape.setTransform(11.1,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,18.8);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFDoQgWgggjg/IgnhDIABgIIgshBQgXglgEgYQgShYALglQAQg2BXhAIAIAlQgbA4gYATQgCAGAIANIAhA1QAgA0BIBYQArA0BzCGIh7BpQgoglgZgng");
	this.shape.setTransform(18.5,30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0,36.8,61.8);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkeE9Qhdh1gLjIQgLjEB4iCQByh7CnABQDAABBuCGQBoCAgQC5QgSDFheB4QhnCEinAAQi9AAhpiEg");
	this.shape_1.setTransform(39.3,44.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.5,89.9);


(lib.TARGETRANGE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAqIAAhTIAxAAIAAASIgaAAIAAAOIAYAAIAAAQIgYAAIAAAQIAaAAIAAATg");
	this.shape.setTransform(40.9,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAgQgLgMAAgUQAAgUAMgLQAMgLATAAQAIAAAIABIAMAEIgHASQgJgFgMABQgIAAgFAGQgGAHAAAKQAAAMAFAHQAFAFAIAAIAJgBIAAgNIgPAAIAAgPIAlAAIAAAsQgPAEgSAAQgSABgLgMg");
	this.shape_1.setTransform(32.9,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAqIgeg6IAAAAIABAUIAAAmIgUAAIAAhTIAeAAIAdA5IAAAAIgBgTIAAgmIAVAAIAABTg");
	this.shape_2.setTransform(23.6,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAqIgFgPIgZAAIgEAPIgaAAIAchTIAdAAIAcBTgAAJAHIgEgLIgDgMIgCgMIAAAKIgHAZIAQAAg");
	this.shape_3.setTransform(14.2,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAqIgQgfIgGAAIAAAfIgXAAIAAhTIAcAAQAhAAgBAZQAAAPgOAGIAZAlgAgMgEIAEAAQALAAAAgLQgBgJgJAAIgFAAg");
	this.shape_4.setTransform(6.4,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAqIAAhAIgVAAIAAgTIA/AAIAAATIgVAAIAABAg");
	this.shape_5.setTransform(42.1,6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAqIAAhTIAxAAIAAASIgaAAIAAAOIAYAAIAAAQIgYAAIAAAQIAaAAIAAATg");
	this.shape_6.setTransform(35.5,6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAgQgLgMAAgUQAAgTAMgMQAMgMATAAQAIAAAIACIAMAEIgHASQgJgFgMAAQgIAAgFAHQgGAHAAAKQAAAMAFAGQAFAHAIAAIAJgBIAAgOIgPAAIAAgQIAlAAIAAAtQgPAEgSAAQgSAAgLgLg");
	this.shape_7.setTransform(27.5,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKAqIgQgfIgGAAIAAAfIgXAAIAAhTIAcAAQAgAAAAAZQAAAPgOAGIAZAlgAgMgEIAEAAQALAAAAgLQAAgJgLAAIgEAAg");
	this.shape_8.setTransform(19.7,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAqIgFgQIgZAAIgEAQIgaAAIAchUIAdAAIAcBUgAAJAHIgEgLIgDgNIgCgLIAAAKIgHAZIAQAAg");
	this.shape_9.setTransform(10.7,6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAqIAAhAIgVAAIAAgTIA/AAIAAATIgVAAIAABAg");
	this.shape_10.setTransform(3.7,6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAqIAAhTIAYAAIAABBIAeAAIAAASg");
	this.shape_11.setTransform(46.7,19.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAqIAAhTIAdAAQAQAAAIAFQAJAFAAALQAAAHgEAFQgEAFgGACIAAAAQAIABAEAEQADAFAAAIQAAAMgIAHQgJAGgPAAgAgIAYIAIAAQAJAAAAgJQAAgEgDgCQgDgDgEAAIgHAAgAgIgJIAHAAQADAAACgCQADgCAAgEQAAgHgJAAIgGAAg");
	this.shape_12.setTransform(39.1,19.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAqIAAhTIAdAAQAOAAAJAHQAHAHABANQAAAOgJAGQgIAIgOAAIgHAAIAAAcgAgHgDIAFAAQADAAADgDQADgDAAgFQAAgJgIAAIgGAAg");
	this.shape_13.setTransform(16.4,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWAgQgLgLAAgVQAAgLAGgKQAEgLAKgFQAJgGALABQAOAAANAFIgHATIgKgEQgEgCgGABQgHgBgEAIQgFAGABAKQAAAYAQAAQAGAAAFgBIALgDIAAATQgLAFgOgBQgRAAgKgLg");
	this.shape_14.setTransform(2.1,19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAqIgFgPIgZAAIgEAPIgaAAIAchTIAdAAIAcBTgAAJAHIgEgLIgDgMIgCgMIAAAKIgHAZIAQAAg");
	this.shape_15.setTransform(-6,19.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAhQgLgMAAgVQAAgUALgLQAKgMATAAQAUAAALAMQAKALAAAUQAAAVgKAMQgLALgUgBQgTABgKgLgAgQAAQAAAZAQAAQAIAAAFgHQAEgFAAgNQAAgLgEgHQgFgFgIgBQgQAAAAAYg");
	this.shape_16.setTransform(49.1,6.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASAqIgEgQIgaAAIgEAQIgaAAIAchUIAdAAIAcBUgAAJAHIgEgLIgDgNIgCgLIAAAKIgHAZIAQAAg");
	this.shape_17.setTransform(21.2,6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAKAqIgQgfIgGAAIAAAfIgXAAIAAhTIAcAAQAhAAAAAZQAAAPgPAGIAZAlgAgMgEIAEAAQAKAAAAgLQABgJgKAAIgFAAg");
	this.shape_18.setTransform(13.3,6.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAqIAAhTIAWAAIAABBIAgAAIAAASg");
	this.shape_19.setTransform(2.4,6.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAqIAAhTIAxAAIAAASIgaAAIAAAOIAYAAIAAAQIgYAAIAAAQIAaAAIAAATg");
	this.shape_20.setTransform(-4.4,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:27.5}},{t:this.shape_6,p:{x:35.5,y:6.1}},{t:this.shape_5,p:{x:42.1,y:6.1}},{t:this.shape_4},{t:this.shape_3,p:{x:14.2}},{t:this.shape_2,p:{x:23.6,y:19.4}},{t:this.shape_1},{t:this.shape,p:{x:40.9}}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_2,p:{x:30.5,y:6.1}},{t:this.shape_7,p:{x:39.8}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_6,p:{x:9.3,y:19.4}},{t:this.shape_13},{t:this.shape_5,p:{x:23.5,y:19.4}},{t:this.shape_3,p:{x:30.5}},{t:this.shape_12},{t:this.shape_11},{t:this.shape,p:{x:53.3}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.5,49.7,33.7);


(lib.DANGERTOOLOW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALAqIgIglIgCgHIgBgMIAAAJIgCAJIgIAmIgcAAIgVhTIAWAAIAKApIAEAWIADgQIADgPIAIggIATAAIAHAgIAFAQIACAPIAEgWIAJgpIAXAAIgVBTg");
	this.shape.setTransform(51.4,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAgQgLgLAAgVQAAgUALgLQAKgLATAAQAUAAALALQAKALAAAUQAAAVgKALQgLALgUAAQgTAAgKgLgAgQAAQAAAYAQAAQAIAAAFgFQAEgHAAgMQAAgLgEgHQgFgFgIAAQgQAAAAAXg");
	this.shape_1.setTransform(40.5,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAqIAAhTIAYAAIAABBIAfAAIAAASg");
	this.shape_2.setTransform(32.8,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAgQgLgLAAgVQAAgUALgLQAKgLATAAQAUAAALALQAKALAAAUQAAAVgKALQgLALgUAAQgTAAgKgLgAgQAAQAAAYAQAAQAIAAAFgFQAEgHAAgMQAAgLgEgHQgFgFgIAAQgQAAAAAXg");
	this.shape_3.setTransform(21.2,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAgQgLgLAAgVQAAgUALgLQAKgLATAAQAUAAALALQAKALAAAUQAAAVgKALQgLALgUAAQgTAAgKgLgAgQAAQAAAYAQAAQAIAAAFgFQAEgHAAgMQAAgLgEgHQgFgFgIAAQgQAAAAAXg");
	this.shape_4.setTransform(11.6,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAqIAAhAIgVAAIAAgTIA/AAIAAATIgVAAIAABAg");
	this.shape_5.setTransform(3.6,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAKAqIgQgfIgGAAIAAAfIgXAAIAAhTIAcAAQAgAAAAAZQAAAPgOAGIAZAlgAgMgEIAEAAQALAAAAgLQAAgJgLAAIgEAAg");
	this.shape_6.setTransform(50.7,6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAqIAAhTIAxAAIAAASIgaAAIAAAOIAYAAIAAAQIgYAAIAAAQIAaAAIAAATg");
	this.shape_7.setTransform(43,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAgQgLgMAAgUQAAgTAMgMQAMgMATAAQAIAAAIACIAMAEIgHASQgJgFgMAAQgIAAgFAHQgGAHAAAKQAAAMAFAGQAFAHAIAAIAJgBIAAgOIgPAAIAAgQIAlAAIAAAtQgPAEgSAAQgSAAgLgLg");
	this.shape_8.setTransform(35,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAKAqIgeg6IAAAAIABAUIAAAmIgUAAIAAhTIAeAAIAdA5IAAAAIgBgTIAAgmIAVAAIAABTg");
	this.shape_9.setTransform(25.7,6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAqIgFgQIgZAAIgEAQIgaAAIAchUIAdAAIAcBUgAAJAHIgEgLIgDgNIgCgLIgBAKIgGAZIAQAAg");
	this.shape_10.setTransform(16.4,6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjAqIAAhTIAeAAQASAAAMAKQALALAAAUQAAATgMAMQgMALgTAAgAgMAXIAFAAQAJAAAFgGQAFgGAAgLQAAgLgFgGQgFgGgHAAIgHAAg");
	this.shape_11.setTransform(8,6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUA2IAAgSIAEABIAFABQAGAAACgEIACgEIAAgIIAAhNIAWAAIAABLQAAASgIAJQgHAJgOAAQgGAAgGgCg");
	this.shape_12.setTransform(72.1,20.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASAqIgEgPIgaAAIgFAPIgZAAIAchTIAdAAIAcBTgAAJAHIgEgLIgDgMIgCgMIgBAKIgHAZIARAAg");
	this.shape_13.setTransform(65,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfAqIAAhTIAdAAQAQAAAIAFQAJAFAAALQAAAHgEAFQgEAFgGACIAAAAQAIABAEAEQADAFAAAIQAAAMgIAHQgJAGgPAAgAgIAYIAIAAQAJAAAAgJQAAgEgDgCQgDgDgEAAIgHAAgAgIgJIAHAAQADAAACgCQADgCAAgEQAAgHgJAAIgGAAg");
	this.shape_14.setTransform(57.1,19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAqIgFgPIgZAAIgEAPIgaAAIAchTIAdAAIAcBTgAAJAHIgEgLIgDgMIgCgMIgBAKIgGAZIAQAAg");
	this.shape_15.setTransform(27.1,19.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAqIAAhTIAVAAIAABTg");
	this.shape_16.setTransform(20.7,19.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAqQgHgBgFgCIAAgVQAGADAHACQAHACAGAAQADAAACgCQADgBAAgDIgBgEIgDgDIgJgFQgJgEgEgDQgEgBgCgFQgCgFAAgHQAAgLAJgHQAIgHANABQAOgBANAHIgHARQgMgFgJAAQgCAAgCACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAADACACIAMAIQAMAFAEADQAFAGgBAIQABAJgFAGQgEAGgIADQgHADgJAAIgNgBg");
	this.shape_17.setTransform(15.2,19.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAqIgEgPIgaAAIgFAPIgZAAIAchTIAdAAIAcBTgAAJAHIgEgLIgDgMIgCgMIAAAKIgIAZIARAAg");
	this.shape_18.setTransform(7.3,19.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAbAqIAAglIAAgFIABgRIgBAAIgRA7IgUAAIgSg7IAAAAIABAWIAAAlIgUAAIAAhTIAeAAIARA6IAAAAIARg6IAfAAIAABTg");
	this.shape_19.setTransform(-2.8,19.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjAqIAAhTIAeAAQASAAAMAKQALALAAAUQAAATgMAMQgMALgTAAgAgMAXIAFAAQAJAAAFgGQAFgGAAgLQAAgLgFgGQgFgGgHAAIgHAAg");
	this.shape_20.setTransform(-19.4,19.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAhQgLgMAAgVQAAgUALgLQAKgMATAAQAUAAALAMQAKALAAAUQAAAVgKAMQgLALgUgBQgTABgKgLgAgQAAQAAAZAQAAQAIAAAFgHQAEgFAAgNQAAgLgEgHQgFgFgIgBQgQAAAAAYg");
	this.shape_21.setTransform(51.4,6.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAKAqIgQgfIgGAAIAAAfIgXAAIAAhTIAcAAQAhAAgBAZQAAAPgOAGIAZAlgAgMgEIAEAAQALAAAAgLQgBgJgKAAIgEAAg");
	this.shape_22.setTransform(43.2,6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKAqIAAhTIAVAAIAABTg");
	this.shape_23.setTransform(27.7,6.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAqIAAhTIAYAAIAABBIAeAAIAAASg");
	this.shape_24.setTransform(22.4,6.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAqIAAhTIAxAAIAAASIgaAAIAAAOIAYAAIAAAQIgYAAIAAAQIAaAAIAAATg");
	this.shape_25.setTransform(15.5,6.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdAqIAAhTIAdAAQAOAAAJAHQAHAHAAANQABAOgJAGQgJAIgNAAIgHAAIAAAcgAgHgDIAFAAQADAAADgDQADgDAAgFQAAgJgHAAIgHAAg");
	this.shape_26.setTransform(8.6,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{x:8,y:6.1}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:35}},{t:this.shape_7,p:{x:43,y:6.1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:21.2}},{t:this.shape_2},{t:this.shape_1,p:{x:40.5}},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_8,p:{x:34}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_7,p:{x:-11.7,y:19.4}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_11,p:{x:36,y:19.4}},{t:this.shape_3,p:{x:45}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_1,p:{x:79.9}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.5,61.7,33.7);


(lib.DANGERTOOHIGH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANAqIAAgjIgZAAIAAAjIgXAAIAAhTIAXAAIAAAfIAZAAIAAgfIAXAAIAABTg");
	this.shape.setTransform(55.9,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAgQgLgMAAgUQAAgUAMgLQAMgLATAAQAIAAAIABIAMAEIgHASQgJgFgMABQgIAAgFAGQgGAHAAAKQAAAMAFAHQAFAFAIAAIAJgBIAAgNIgPAAIAAgPIAlAAIAAAsQgPAEgSAAQgSABgLgMg");
	this.shape_1.setTransform(46.7,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAqIAAhTIAVAAIAABTg");
	this.shape_2.setTransform(40.4,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AANAqIAAgjIgZAAIAAAjIgXAAIAAhTIAXAAIAAAfIAZAAIAAgfIAXAAIAABTg");
	this.shape_3.setTransform(33.7,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAgQgLgLAAgVQAAgUALgLQAKgLATAAQAUAAALALQAKALAAAUQAAAVgKALQgLALgUAAQgTAAgKgLgAgQAAQAAAYAQAAQAIAAAFgFQAEgHAAgMQAAgLgEgHQgFgFgIAAQgQAAAAAXg");
	this.shape_4.setTransform(21.2,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAgQgLgLAAgVQAAgUALgLQAKgLATAAQAUAAALALQAKALAAAUQAAAVgKALQgLALgUAAQgTAAgKgLgAgQAAQAAAYAQAAQAIAAAFgFQAEgHAAgMQAAgLgEgHQgFgFgIAAQgQAAAAAXg");
	this.shape_5.setTransform(11.7,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAqIAAhAIgVAAIAAgTIA/AAIAAATIgVAAIAABAg");
	this.shape_6.setTransform(3.7,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAKAqIgQgfIgGAAIAAAfIgXAAIAAhTIAcAAQAhAAAAAZQAAAPgPAGIAZAlgAgMgEIAEAAQAKAAAAgLQABgJgKAAIgFAAg");
	this.shape_7.setTransform(52.1,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAqIAAhTIAxAAIAAASIgaAAIAAAOIAYAAIAAAQIgYAAIAAAQIAaAAIAAATg");
	this.shape_8.setTransform(44.4,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAgQgLgMAAgUQAAgTAMgMQAMgMATAAQAIAAAIACIAMAEIgHASQgJgFgMAAQgIAAgFAHQgGAHAAAKQAAAMAFAGQAFAHAIAAIAJgBIAAgOIgPAAIAAgQIAlAAIAAAtQgPAEgSAAQgSAAgLgLg");
	this.shape_9.setTransform(36.4,6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAKAqIgeg6IAAAAIABAUIAAAmIgUAAIAAhTIAeAAIAdA5IAAAAIgBgTIAAgmIAVAAIAABTg");
	this.shape_10.setTransform(27.1,6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASAqIgEgQIgaAAIgFAQIgZAAIAchUIAdAAIAcBUgAAJAHIgEgLIgDgNIgCgLIgBAKIgHAZIARAAg");
	this.shape_11.setTransform(17.8,6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjAqIAAhTIAeAAQASAAAMAKQALALAAAUQAAATgMAMQgMALgTAAgAgMAXIAFAAQAJAAAFgGQAFgGAAgLQAAgLgFgGQgFgGgHAAIgHAAg");
	this.shape_12.setTransform(9.4,6.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAhQgLgMAAgVQAAgUALgLQAKgMATAAQAUABALAKQAKAMAAAUQAAAVgKAMQgLALgUgBQgTABgKgLgAgQAAQAAAZAQAAQAIAAAFgHQAEgFAAgNQAAgMgEgFQgFgGgIgBQgQAAAAAYg");
	this.shape_13.setTransform(83.3,19.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAqIAAhTIAWAAIAABBIAfAAIAAASg");
	this.shape_14.setTransform(68.8,19.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASArIgFgRIgZAAIgEARIgaAAIAchVIAdAAIAcBVgAAJAHIgEgMIgDgMIgCgKIAAAKIgHAYIAQAAg");
	this.shape_15.setTransform(60.7,19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAhQgLgMAAgVQAAgUALgLQAKgMATAAQAUABALAKQAKAMAAAUQAAAVgKAMQgLALgUgBQgTABgKgLgAgQAAQAAAZAQAAQAIAAAFgHQAEgFAAgNQAAgMgEgFQgFgGgIgBQgQAAAAAYg");
	this.shape_16.setTransform(48.4,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASArIgFgRIgZAAIgEARIgaAAIAchVIAdAAIAcBVgAAJAHIgEgMIgDgMIgCgKIAAAKIgHAYIAQAAg");
	this.shape_17.setTransform(30.5,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRArQgGgBgFgEIAAgVQAGAEAHACQAHACAGAAQAEAAACgCQACgCAAgDIgBgCIgDgDIgKgGQgHgEgFgDQgEgCgCgFQgCgEAAgGQAAgMAJgHQAIgGANgBQAOABAOAGIgIASQgMgGgJAAQgCAAgCABQgBABAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAACADACIALAHQALAFAFAEQAFAGAAAJQAAAIgFAGQgEAGgHAEQgIACgIAAIgPAAg");
	this.shape_18.setTransform(18.7,19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASArIgFgRIgZAAIgFARIgZAAIAchVIAdAAIAcBVgAAJAHIgEgMIgDgMIgCgKIgBAKIgHAYIARAAg");
	this.shape_19.setTransform(10.8,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAbAqIAAglIAAgFIABgRIgBAAIgRA7IgUAAIgSg7IAAAAIABAWIAAAlIgUAAIAAhTIAeAAIARA6IAAAAIARg6IAfAAIAABTg");
	this.shape_20.setTransform(0.6,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgjAqIAAhTIAeAAQASAAAMAKQALALAAAUQAAATgMAMQgMALgTAAgAgMAXIAFAAQAJAAAFgGQAFgGAAgLQAAgLgFgGQgFgGgHAAIgHAAg");
	this.shape_21.setTransform(-16,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdAgQgLgLAAgVQAAgUALgLQAKgLATAAQAUgBALALQAKAMAAAUQAAAVgKALQgLAMgUAAQgTAAgKgMgAgQAAQAAAZAQAAQAIgBAFgFQAEgHAAgMQAAgMgEgFQgFgHgIAAQgQAAAAAYg");
	this.shape_22.setTransform(54.8,6.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAKAqIgQgfIgGAAIAAAfIgXAAIAAhTIAcAAQAgAAAAAZQAAAPgOAGIAZAlgAgMgEIAEAAQALAAAAgLQAAgJgLAAIgEAAg");
	this.shape_23.setTransform(46.6,6.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAgQgLgMAAgUQAAgTAMgMQAMgLATAAQAIgBAIACIAMAEIgHASQgJgEgMgBQgIABgFAGQgGAHAAAKQAAAMAFAHQAFAFAIABIAJgCIAAgNIgPAAIAAgQIAlAAIAAAsQgPAFgSABQgSAAgLgMg");
	this.shape_24.setTransform(37.4,6.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAqIAAhTIAVAAIAABTg");
	this.shape_25.setTransform(31.1,6.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbAqIAAhTIAYAAIAABBIAeAAIAAASg");
	this.shape_26.setTransform(25.8,6.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAqIAAhTIAxAAIAAASIgaAAIAAAOIAYAAIAAAQIgYAAIAAAQIAaAAIAAATg");
	this.shape_27.setTransform(18.9,6.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAqIAAhTIAeAAQAOAAAIAHQAJAHgBANQAAAOgIAGQgJAIgNAAIgGAAIAAAcgAgGgDIADAAQAEAAADgDQADgDAAgFQAAgJgHAAIgGAAg");
	this.shape_28.setTransform(12,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12,p:{x:9.4,y:6.1}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:44.4,y:6.1}},{t:this.shape_7},{t:this.shape_6,p:{x:3.7,y:19.4}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:40.4,y:19.4}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_8,p:{x:-8.3,y:19.9}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_2,p:{x:24.1,y:19.9}},{t:this.shape_17},{t:this.shape_12,p:{x:39.4,y:19.9}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_6,p:{x:75.3,y:19.9}},{t:this.shape_13}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.5,64.5,33.7);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AufCvIAAldIc/AAIAAFdg");
	this.shape.setTransform(92.8,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.7,35);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AufCvIAAldIc/AAIAAFdg");
	this.shape_2.setTransform(92.8,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.7,35);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AufCvIAAldIc/AAIAAFdg");
	this.shape.setTransform(92.8,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.7,35);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgX3A7/MAAAh3+MAvvAAAMAAAB3+g");
	this.shape_2.setTransform(152.8,384);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305.7,768);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(13).p("EhDIAAmQGxg0MTgNQKVgLGgAVQIUAYOqAzQMWAmJQAFQYBALetjU");
	this.shape_1.setTransform(430.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,0,878.4,39.3);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(22).p("EhC0AAlQGxg0MTgMQKVgLGgAUQIUAYOqAzQMVAnJRAEQYAAMeujV");
	this.shape.setTransform(429.1,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,0,887.4,43.3);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(12).p("EhDLAAmQGyg0MSgNQKWgLGfAVQIVAYOqAzQMVAmJQAFQYBALeujU");
	this.shape_3.setTransform(430.8,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,0,877.4,32.5);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(16).p("EhDBAAxQGyg0MSgMQKWgLGfAUQRoA1FYAOQL0AdJ1AAQXPgBfbiy");
	this.shape.setTransform(430,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-54,881.4,89.3);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AJZGuQvCgXkcgVQsJg60pAXQlqAGoaAQQm9ANhTAAQiHgBAYliQAMiwAnixQCNABO+gZQOCgZCmAJITtA/QQJAxCTgFQAggBEPANQEqAPFNgDQRdgLdHjLIgvLLQ/QCfl8AOQhUADiUAAQlWAAqtgQg");
	this.shape_1.setTransform(428.7,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,857.5,89.3);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0bCtQBRg3BegfQBegeBigDQAogBBpAHQBcAGA1gFQB4gLDDhYQDXhkBhgTQBlgWC3AKQDRALBQgHQCDgODohTQD0hXB1gRIAiDCQh1ARj1BYQjoBQiDANQhQAJjRgMQi3gJhnAUQhfAUjXBkQjDBbh4ALQg1AEhcgFQhpgIgoABQhiADheAfQheAehQA3g");
	this.shape.setTransform(130.8,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.7,73.5);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0bCtQBRg4BegeQBegfBigCQAogBBpAHQBcAFA1gEQB4gLDDhYQDXhlBhgTQBlgVC3AKQDRALBQgIQCDgNDohTQD0hXB1gRIAiDCQh2ARj0BYQjoBQiDANQhQAJjRgMQi3gKhnAVQhfATjXBkQjDBbh3ALQg2AFhbgGQhqgHgoABQhhADhfAfQheAehQA3g");
	this.shape.setTransform(130.8,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.6,73.5);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0bCtQBRg3BegfQBegeBigDQAoAABpAGQBcAGA1gFQB3gLDEhYQDWhkBigTQBlgVC3AJQDQALBRgHQCDgODohTQD0hXB1gRIAiDCQh2ARj0BYQjpBQiCANQhQAJjRgMQi3gJhnAUQhfAUjXBkQjDBbh3ALQg2AEhbgFQhpgIgpABQhhADhfAfQheAehQA3g");
	this.shape.setTransform(130.8,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.6,73.5);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0bCtQBRg3BegfQBegeBigDQAngBBqAHQBbAGA2gFQB3gLDEhYQDWhlBigTQBlgVC3AKQDQALBRgHQCDgODohTQD0hXB1gRIAiDCQh2ARj0BYQjoBQiDANQhPAJjSgMQi3gJhnAUQheAUjYBkQjDBah3ALQg2AFhcgGQhpgGgoAAQhhADhfAfQhdAehRA3g");
	this.shape.setTransform(130.8,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.6,73.5);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0bCtQBRg3BegfQBegeBigDQAogBBpAHQBcAGA1gFQB4gLDDhYQDXhkBhgUQBlgVC3AKQDRALBQgIQCCgNDphTQD0hXB1gRIAiDCQh1ARj1BYQjoBQiDANQhQAIjRgLQi3gKhnAVQhfAUjXBkQjDBah4ALQg1AFhcgGQhpgHgoABQhiADheAeQheAfhQA3g");
	this.shape.setTransform(130.8,36.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.7,73.5);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A0bCtQBRg3BegfQBegeBigDQAogBBpAHQBcAGA1gFQB3gLDEhYQDXhlBhgTQBlgVC3AKQDQALBRgHQCDgODohTQD0hXB1gRIAiDCQh2ARj0BYQjoBQiDANQhQAJjRgMQi3gJhnAUQhfAUjXBkQjDBbh3ALQg2AEhbgFQhpgIgpABQhhADhfAfQheAehQA3g");
	this.shape_1.setTransform(130.8,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.6,73.5);


(lib.Path_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A0bCtQBRg4BegeQBegfBigCQAogBBpAHQBcAFA1gEQB3gLDEhYQDWhlBigTQBlgVC3AKQDQALBRgIQCDgNDohTQD0hXB1gRIAiDCQh2ARj0BYQjoBQiDANQhQAJjRgMQi3gKhnAVQhfATjXBkQjDBbh3ALQg2AFhbgGQhqgHgoABQhhADhfAfQheAehQA3g");
	this.shape_2.setTransform(130.8,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.6,73.5);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A0bCtQBRg3BegfQBegeBigDQAoAABpAGQBcAGA1gFQB3gLDEhYQDWhkBigTQBlgVC3AJQDQALBRgHQCDgODohTQD0hXB1gRIAiDCQh2ARj0BYQjoBQiDANQhQAJjRgMQi3gJhnAUQhfAUjXBkQjDBbh3ALQg2AEhbgFQhpgIgpABQhhADhfAfQheAehQA3g");
	this.shape_1.setTransform(130.8,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.6,73.5);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A2DBoQBagzBngZQBngZBoABQAqACByAMQBhALA6gCQCAgEDYhPQDthZBpgOQBugQDEAUQDeAXBXgEQCNgHD+hGQEMhLB/gLIAVDEQh+ALkMBLQj/BEiNAGQhWAEjfgXQjDgThwAQQhnAOjuBZQjXBQiBAFQg5AChigLQhxgNgqgBQhpgChnAaQhnAZhaAzg");
	this.shape_2.setTransform(141.3,30.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,282.6,60.1);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A0oDaQBxgyBUgrQBYg1BmgcQBngdBpAAQAqAABxAJQBiAIA6gDQCAgIDWhUQDohfBpgSQBwgSDDAOQDgAQBWgGQCNgKD7hOQEKhRB/gPIAbDDQh/APkKBRQj8BMiMAKQhXAGjfgQQjDgNhwARQhpASjpBfQjWBWh/AIQg6ADhigIQhxgJgrAAQhoAAhmAdQhnAchYA1IpVAjQCSgmDjhjg");
	this.shape_1.setTransform(169.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338.9,71.1);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A1EGuQBMhGBegxQBegxBmgWQArgIBvgOQBigNA3gPQB8giC/iBQDSiLBjgnQBogpDDgbQDdgeBTgXQCIgnDniBQDziGB5gpIBCC6Qh4Aoj0CHQjnCAiIAnQhTAXjdAfQjDAahpAnQhhAnjSCNQi/CBh8AiQg4AQhhAMQhwAOgqAJQhnAWheAxQheAwhMBHg");
	this.shape_3.setTransform(135,61.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,123.2);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AzNK9QA7hUBShEQBShDBggrQAngRBrglQBdghAzgaQByg7CgimQCwi0BZg6QBcg+C5hDQDThLBMgpQB9hCDHitQDSi2BuhBIBnCoQhtBAjSC3QjICth8BCQhNAojSBMQi5BChfA8QhWA6ixC3QigClhyA7QgzAbhdAgQhqAlgoASQhfArhSBDQhSBDg8BVg");
	this.shape_2.setTransform(123.1,86.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246.2,173.9);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AzCLQQA6hVBRhFQBRhFBfgsQAngSBqgnQBcghAzgcQBxg9CdioQCui2BYg8QBcg/C3hGQDRhPBMgpQB8hEDEixQDPi5BthCIBqClQhtBCjPC6QjECwh8BEQhMAqjQBPQi4BFheA+QhWA7itC5QieCohxA9QgzAchcAhQhqAngnASQhfAthRBEQhRBFg6BVg");
	this.shape_1.setTransform(122,88.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,177.4);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AykMBQA3hYBNhIQBOhHBdgwQAngUBogrQBcgmAxgdQBuhBCXiuQCmi+BWg/QBYhDC2hNQDNhXBKgtQB4hJC+i4QDHjCBqhGIBxChQhpBHjIDCQi+C4h5BJQhJAsjOBYQi1BMhbBBQhUA/ilDAQiXCuhvBCQgxAdhbAmQhpArglATQhdAwhOBIQhPBHg3BYg");
	this.shape_4.setTransform(119,93.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.9,186.2);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AykMBQA3hYBNhIQBOhHBdgwQAngUBogrQBcgmAxgdQBuhBCXiuQCmi+BWg/QBYhDC2hNQDNhXBKgtQB4hJC+i4QDHjCBqhGIBxChQhpBHjIDCQi+C4h5BJQhJAsjOBYQi1BMhbBBQhUA/ilDAQiXCuhvBCQgxAdhbAmQhpArglATQhdAwhOBIQhPBHg3BYg");
	this.shape_2.setTransform(119,93.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.9,186.2);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAJQgCgEgBgFQAAgEACgEQACgDADgBQADAAACAEQACAEABAEQAAAFgCADQgDAEgDAAIAAABQgCAAgCgEg");
	this.shape_2.setTransform(0.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.6);


(lib.Path_4_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAJQgCgEgBgFQAAgLAHAAQACgBADAEQACAEAAAEQABAFgDADQgCAEgDAAIAAAAQgCAAgCgDg");
	this.shape_4.setTransform(0.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.6);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAAQAAgLAHgBQACAAADAEQACAFAAADQABAFgDADQgCAFgDAAQgGAAgBgNg");
	this.shape_3.setTransform(0.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.6);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAIQgCgDAAgFQgBgDADgFQACgEACAAQACABADADQACAEABAEQAAAMgIABQgBAAgDgFg");
	this.shape_2.setTransform(0.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,1.6,2.6);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAJQgCgEAAgFQgBgDADgFQACgEACAAQAHAAABAMQAAAMgIABQgBgBgDgDg");
	this.shape_5.setTransform(0.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.6);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAAQAAgLAHgBQACAAADAEQACAFAAADQABAFgDADQgCAFgDAAQgGAAgBgNg");
	this.shape_1.setTransform(0.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.6);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah/BiQAbh2gZgwQgOgaAsgKQAkgIA+AEQA7AEAmAMQAqAMgTAMQgjAWAjCTQg1AJg4AAQhGAAhHgMg");
	this.shape_3.setTransform(13,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.9,22.2);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AheFmQgxgWABg4QABgLAShWQAIgjAAgoQABgegFgtQgCgOABgYIABgoQgGg3AMg2QANg3AegtQAfgxAkgcQAugoAtAMQAUAFAMAUQALARAEAXQAMBMgGAqQgJA7glAlQgOAPghAfQgbAegEAZQgGAiARBNQAPBHgLApQgOAugeAlQgfAkgeAAQgLAAgKgFg");
	this.shape_6.setTransform(14.3,36.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.7,72.6);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACxBNQgVgDgggQIgigSQgUgKgQgCQgigFgsALQhIASgxgDQhNgGgEg7QgCgDABgFQAMg0BMgBQAzgBA+ATQAwAQBoAtQAeAPAQABIANAAIANABQALADAGAFQAGAEAGAKQAEAHgGAKQgOAUgZAAIgJgBg");
	this.shape_4.setTransform(22.8,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.8,15.7);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AF3FrIgBAAQhigLhGgvQhNg0gohAIgyhhQgdg6gfggIhGhDQgqgpgegbQg3g0gigRQg4gcgyAYQg/AaACgbQAGg4A1ghQAOgIAcgEQAjgFAIgCQAPgFAUgKIAjgSQAygYAxAQQAvAOgKATQgGALgRAGQgnAMgPAVQgVAbAeAiQAfAkBSBHQBJBDAjApQAUAaAVA2QAWA6AQAXQAaAmAtAcQAfASA5AXIA6AVQAiAQAFAZQAGAfgvgBIgBAAIgCAAgAjkjUQAsAbA5A8QAUAWAnAkQArAnARATQAbAcAYAoQAMAVAcA5QArBXBMA3QBOA3BfAKQAtACgtgbQglgWgVgHIg9gZQg5gZgrg2QgSgWgQgqQgUg1gIgOQgTgkghghQgVgWgqgoQg5gvgcgaQgxgvgNgrQgHgVAJgVQAJgTATgLQAGgDAegHQAVgHgWgIQgggKgLABQgbACgrAWQguAYgXAEQgvAIgKADQghALgLAaQgNAcANgBQAEAAAfgNQAUgHAVAAQAnAAArAag");
	this.shape.setTransform(42,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AF4FiQhbgIhQg1QhPg1grhRQgGgMgRgmQgOgggLgRQgTgggegeQgTgTgqgkQgMgKgqgtQgjgngcgTIgmgcQgSgNgLgGQgegOgSAAQgVAAgjARQgPAHgOADQgQADgBgGQgBgFAEgKIAGgPQAJgYAYgSQAPgMAXgEIAqgHQAegGAWgMIAxgaQAKgFAQgCQAQgCALACQAeAFARAKQAbAPgxAMQgWAHgHAEQgIAEgHAKQgLAQADAVQACAPAKAWQAHAPCNCAQApAmAVAZQAhAjAPAkIAgBPQAVAsAdAWIAZAVQASAPAJAEQAXALAnAPQAnAPAXAKIAVAJQANAGAEAIQAHANgFAJQgEAJgRAAIgLgBg");
	this.shape_1.setTransform(42,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.1,72.8);


(lib.Path_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B54D4F").s().p("AhILPQhQgogIgkQgcASgjgBQgjgBgbgTQgbgUgMghQgNggAIghQguAOgaAEQgpAGgggJQglgLgUgjQgVglARgfQggASgmgIQgngIgWgdQgXgcABgnQABgnAYgbQglAJglgPQglgPgUghQgUggAEgoQADgoAZgdQgnADgeghQgdggABgoQAAglAXglQAUghAigbQgfAIgcgYQgbgYADggQADgeAdgaQATgRAngUQgXAEgTgqQgSgpANgWQASggAsgPQAmgMAdAHIDLhuQgEgKAKgZQAJgVAKgLQALgMAlgIQAOgDAPAGQAPAGAIAMQgDgGABgHQACgHAFgFIAlgvQARgSAZgCQAOgBASABQAYgCAPALILNAUIBTgBQA5ABAYAHQBFAWAcBAQAZA7gbAWQAhgIAhAOQAhAOARAeQAQAdgFAkQgFAkgYAXQAmAcAEA2QAEAzgcAqQgYAlgtAdQgjAXg1AUQAoAMAcAiQAcAiADAnQAEApgWAnQgVAmgmASQAxA+AYBOQAKAigFAVQgHAigzAeQhkA7h1ABQAOATgIAaQgGAWgOAOQgoAmg7AIQgsAGhGgMQAGAug4AsQg4AthTAOQgXAEgYAAQhFAAhGgkg");
	this.shape_4.setTransform(88.7,75.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.5,151.2);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AilKJQhxgmhphLQg5gng7g0QglgigZgZQgcgfgQgNIAEgDQAlgbALgVQAEgIgDgIQgDgHgHgEQAKgLgJgNQgJgOgNAKIg1AkQgPgMgMgPQgEgOgCgUIgCghQgGhDgHghQgHgdgJgRQAvAAAvADIAiALIBeAjQA3AUApAHQBqATBMg+QAIgGAHgJQA9gVAhguQAFgHgEgJQgDgIgIgCQgNgDgLAAQADgIgFgIQgFgJgJAAQgEgKgKgDIgFgaQALgGAIgJQAHgIgCgKQgCgLgKgCIgbgFIgLgfIAKgDQAMgFgDgMQgDgMgLgEQAIgIgFgLQgFgLgLgBIgEAAQAdgGAUgHQANgEAAgNQAAgNgNgFQgVgHgegDQAGgDAIgGQAIgHgDgJQgCgIgIgFQACgJgHgHQCDgqA1gNQAMgDAAgNQAAgNgJgFIAAgHIADADQAEAFAEABIAJALQAKAMANgKQANgKgHgNIgHgPQAJgLgKgLIgRgTIgKgYQAqgyAugeQAogaAzgPQAzgQBNAQQBGAOAyAeQBiA9A+BoQAvBSAkCCQAfB0gHB0QgHB3gwBpQg6CAhmBwQh/CKiVA5QhaAihhABIgJAAQhYAAhZgdg");
	this.shape_7.setTransform(70.1,67.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.2,135.7);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARD2QgMgGgIgMQgfgogIgaQgOglALgmQALgfAEgQQAHgcgGgPQgHgXgigmQgfgjgGgdQgGggAJgjQAKgtAegHQAlgHAQAhQADAGANA7QALAoAiAwQAFAIAHAQIAMAYQAVAbAJAlQAJAlgEAnQgEApgMAfQgSArgfAMQgGACgGAAQgIAAgHgDg");
	this.shape_5.setTransform(11,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,49.9);


(lib.Path_18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAtBqQgKgEgNgOQgKgKgEgJQACAKgGALQgGAPgOgFQgRgFgGgXQgFgRABgUIhUhWIA/g4IBAA/IAWAGQAQAFAHAAQAGAAAKgHQAMgJADgBQASgFAMAKQAKAJABAPQACAPgJAHQgFAFgGACQAFACAGAEQAPAMADAPQADAVgaALQgSAHgKgGQAFAKgGALQgGANgNAAQgFAAgHgCg");
	this.shape_1.setTransform(12.8,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,21.7);


(lib.Path_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGEMQgZgkgphJIgthOIABgJIgzhMQgagrgGgbQgUhmAMgqQAThABmhKIAIArQgfBBgbAWQgDAHAJAPIAnA9QAlA8BTBnQA0A/CECYIiPB6Qgugsgegtg");
	this.shape_1.setTransform(21.4,35.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0,42.6,71.5);


(lib.Path_8_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlLFwQhsiIgNjoQgNjkCLiVQCEiPDCABQDfABB/CcQB5CUgUDWQgUDjhtCMQh3CZjBAAQjcAAh5iYg");
	this.shape_3.setTransform(45.5,52);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,104.1);


(lib.Path_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj6GdQh7h2gwjjQgwjfBtipQBnigC4gcQDSggCRCGQCKCAAPDZQAQDihRCaQhZCpi4AdQgqAGgnAAQibAAhvhqg");
	this.shape_1.setTransform(43.7,51.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.5,103.9);


(lib.Path_10_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkWGWQh8h5gpjlQgpjgB4imQBxieDBgXQDdgaCRCKQCKCEAIDZQAHDjhaCYQhkCmjAAYQgkAFgjAAQiqAAh0hyg");
	this.shape_2.setTransform(45.4,52);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,91,104.1);


(lib.Path_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#584233").s().p("AAKBBQgZgUgCguQgCgyAfgNQAEgCACAFQABAFgFACQgMAFgEATQgEAOAAAQQABAoAUAQQAEADgDAEQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgDgBg");
	this.shape_8.setTransform(1.9,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.7,13.2);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#584233").s().p("AgHA/QgEgDAEgEQAVgUgFgoQgFgrgUgHQgEgCABgEQABgFAFABQAfALACAxQADAugXAWIgEABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_6.setTransform(2.1,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.2,13.2);


(lib.Path_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkjGNQh4h9gjjmQgijhB9iiQB2iaDBgRQDdgUCNCOQCHCIABDaQABDjhfCVQhoCjjBASQgcADgbAAQi1AAh2h7g");
	this.shape_1.setTransform(45.4,52);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.9,104.1);


(lib.Path_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AirCKIA+i0QAxiFAshFIC8BXQgOAXhDCQQhGCVgvBWg");
	this.shape_5.setTransform(17.3,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.5,49.1);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AheBAQhBhEgBgEIAygNQBDgRA5gYQBTgiAhgjIAGAQIghBzIA3ACIADAoQg3AhhKAgQgjAQgaAJIhBhEg");
	this.shape_3.setTransform(16.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.3,26.6);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#584233").s().p("AAKBBQgZgUgCguQgCgyAfgNQAEgCACAFQABAFgFACQgMAFgEATQgEAOAAAQQABAoAUAQQAEADgDAEQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgDgBg");
	this.shape_2.setTransform(1.9,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.7,13.2);


(lib.Path_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Aifg8QBQguBGAaQBUAgBVCLg");
	this.shape_9.setTransform(16,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,18.3);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#584233").s().p("AgHA/QgEgDAEgEQAVgUgFgoQgFgrgUgHQgEgCABgEQABgFAFABQAfALACAxQADAugXAWIgEABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_7.setTransform(2.1,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.2,13.2);


(lib.Path_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AlOMbQichCh3h3Qh4h4hBiaQhEihAAivQAAiuBEihQBBiaB4h4QB3h4CchBQCghECuAAQCvAAChBEQCbBBB3B4QB4B4BBCaQBEChAACuQAACvhEChQhBCah4B4Qh3B3ibBCQihBEivAAQiuAAighEg");
	this.shape_10.setTransform(86.4,86.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.8,172.7);


(lib.Path_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJCBQgJgIgHgUQgFgPgBgLQgCAMgMAIQgPAMgMgLQgPgMADgbQACgUAKgTIgwh9IBZgfIA/BcIALANQAHAJAGADQAGADAKAAIAQAAQAVACAIAPQAHAMgFAQQgGAQgNAGQgGADgIgBIAIALQALATgDAQQgGAXggAAQgUAAgIgLQABANgLAKQgIAHgIAAQgKAAgJgKg");
	this.shape_1.setTransform(12.2,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,27.8);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiCDKIADgcIADgKQgUhfgNhZQgdjNBUiJQBMh9CYgwIgcB/QhZBZgXBHQgeBPAZBzQARBMAzCMQAiBcBSDJIjFBRQg9h0gljag");
	this.shape_1.setTransform(16.6,53.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.1,107.3);


(lib.Path_10_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai6G9QBojUBZiyQA2hpgUiIQgTiEhNhdIgSiBQCUA7BCCDQBJCPgsDKQgVBbgaBaIhIDtIADAaIgzBlg");
	this.shape_3.setTransform(18.8,54.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.5,108.2);


(lib.Path_8_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbIHQjdgPhuigQhjiPADjnQADjlCViMQCNiGDAAPQDfARB1CjQBvCcgjDUQgkDih1CEQh2CFisAAIgfgCg");
	this.shape_4.setTransform(45.6,52.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.2,104.2);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AicCdQhChBAAhcQAAhbBChBQBBhCBbAAQBcAABCBCQBBBBAABbQAABchBBBQhCBChcAAQhbAAhBhCg");
	this.shape_4.setTransform(22.4,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.7,44.7);


(lib.Path_8_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAEIIQjcgCh3iaQhriIgLjnQgKjlCMiVQCGiNDAADQDgAEB9CcQB4CVgVDWQgXDkhuCKQh2CWi+AAIgGAAg");
	this.shape_5.setTransform(45.5,52);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,104.1);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egiwg0uMBDfAAAIAADJQp7AImoDzQmJDjjmG1QjOGKhZJTQhJH0gBLVQAAXrGyNKQIbQWS3APMhFgAABg");
	this.shape.setTransform(222.5,337.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,445,675);


(lib.Path_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("At8G9QgwgJgegUQgigVgWgoQhAh0gKhpQgDgeAIgcIARg4QAKgcAIguIAOhNQAJguAIgXQANgnAVgYQAkgpAxgpQA+g1AsgXQBFglA4AKQATAEA1AaQApAUAjgEQATgDAugKQApgHAXAJQBGAcAjAIQAVAGAeACIA0AFQBMAJAfAlQAEAEAHAQQAEALAKAFIAdANQASAIAKAGQAIAGAOASQANAMAQgIIAYgOIAZgOQAWgKAPACQAPACATAQIArAmQAcAYAVAEQAVAEAzAAQBQABBJAZIBMAaQAsAQAaAWQApAiAqA9QA+BcAMAOQAxA3A7AAIBfAAQA7AEAeAWQAoAegaAzQgWAqgrAbQgcARgiAHQgdAFgmgCQgwgDgQACQgSACgYAIIgpAOQg6APghAFQg4AJglgJQgQgEgZgLQgcgMgLgEQgUgGgYABIgtAEQiIAOg5ABQhxAChOgYQgigLgpgzQgdgkgLgdQgqAUhCgNQhdgagngFQhtgMgegJQg6gTgcgoIgBgBIgBABIACAAIgCAAIgNAgIgNAcQgIAQAAAGQAFAKgIAIQgWAVgPBGQgNBAgnAUQgqAWg3AGQgRABgSAAQghAAghgGg");
	this.shape_2.setTransform(110.2,45.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.5,90.4);


(lib.Path_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3CE67").s().p("Au3FYQgVgtgJgOQgIgOgKgzQgKgtgMgNQgSgUAJhSQAIhMARgYQAagkAWhLQAYhUARgeQAHgOAwgeQAvgdANABQgMgRApgMQARgGAegEQATgCBMAMQBPANgCAIIBQgDQBOgDgEgEQATASAQgGQAYgKAQADQAcAGAxATQA6AWAIANQAOgVAXANQASALAJATQABAsAogTQApAOAgAeQAaARBGgcQAWgJAWAMQAMAHAbAYQAyAuAogUQALgGAuAVIA5AaIAyAQQAWAFAbgCQA/gGBFBEQAmAjA9BIQAMAKAeAsQAZAjAeARQAMAIA9AAQAxAAAIAaQARgLAcALQAZAKAQAVQARAXgIAQQgKAUgrACQhJAUgxALQhcAVgGglQgcAfilgEQikgEgDgcQgMAKhIAFQhOAEgTACQg4AGgaABQg0ACgZgIQgsgPgpgjQg0grABgoQgIAHhQgGQhOgHgQgIIhRgLQhGgKABgQQgWAEhHgdQhJgegHgUQAAAQgZAQQgWANgRADQACAfAGAcQgsBpgIgDQAMA8heARQgxAJhJgCIgFAAQgeAAgWghg");
	this.shape_2.setTransform(103.5,37.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,75.6);


(lib.Path_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AvLH8QhsgQhKg6Qg5gsgmhJQgZgygkhsQgTg5AihRQAUgxA2hSQAcgrAGgRQALgZABgnQABglAGgVQAIgaAWgVQA4g4AvgWQAxgZA4ADQAXg5BXgMQBJgLA6AXQBZAjBIADQAjACA5gUQA5gVAjABQApAABBAoQBXA1AOAGQAmAPBFgJQBQgKAbADQBnANAtAiQAKAIAWAbQAUAZAPAIQAYANAqACIBFACQBvAMAvAJQBJAPBBAgQAwAZBKAzQAYARA2ASQA4ATAYAPIBLAxQAuAYAkACIBjAHQA+AMgGAtQgKBDhPA4QgyAjg4ASQgPAGhHAhQg2AZggAEQgbAEgyALQg7AOgRADQg1AJg5ADQhEADgogIQgZgGhBgZQg9gXgegFQgxgGgfAGQgRAEg9AXQhCAegXAHQggAKg0gNQhPgUhwhFQgugfgbgRQgzgfgZgCIhHAQQhAAOgmgJQgRgEgbgRQgfgUgRgKQg8gjgqAVQgUAJgDBGQgEBRgGANQgNAagtAqQg7A3gMAOQgmAthPAAQgYAAgbgEg");
	this.shape_5.setTransform(131.7,51.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,263.4,102.6);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah+BiQAah4gZguQgOgaAsgKQAlgIA9AEQA7AEAnAMQApAMgSAMQglAXAkCSQg0AJg5AAQhFAAhHgMg");
	this.shape_8.setTransform(13,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,22.2);


(lib.Path_8_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AlLFwQhsiIgNjoQgNjkCLiVQCEiPDCABQDfABB/CcQB5CUgUDWQgUDjhtCMQh3CZjBAAQjcAAh5iYg");
	this.shape_6.setTransform(45.5,52);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,104.1);


(lib.faded_glucose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD2025").s().p("AARCgQhJgBgkgoQgkgpABhQQADieCQAAIAFAAQAgACAfAJQAkALAAATQAAAMgMARQgNATgMAAIgNgEQgVgKgfgBIgBAAQg+AAgBBWQgBAzAWAVQAOAPAZAAIAEAAIAVgBIABglIgdgBQgUgCABgdIAAgNQABgcATAAIBWACQAMAAAHAGQAHAIAAAKIgCB2QAAAPgPAJQgMAIgUAEQgbAEgeAAg");
	this.shape.setTransform(16.6,15.4,0.556,0.556);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#911C22").s().p("AiJEOQgSAAgIgOIiKjuQgJgPAJgNICKjxQALgRAPgBIETAAQAQABAKARICKDyQAJAMgJAOIiKDwQgHANgTAAg");
	this.shape_1.setTransform(17.1,15,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,30);


(lib.stomach_labelcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADOBKQgJgHAAgLQAAgIAFgGQAFgFAKgCQgEgBgDgEQgDgEAAgEQAAgEADgEQADgEAGgDQgIgDgDgEQgFgHAAgIQAAgPAKgIQAJgHARgBIAQACIAeAAIAAANIgNADQADAGAAAHQAAAOgKAGQgJAHgSAAIgEAAIgEAAQgDADAAAEQAAAEAMAAIAQAAQAOAAAHAHQAIAGAAAMQAAAPgMAJQgOAIgXAAQgTAAgKgGgADeAuQgFADABAFQAAAFAEACQAFAEAJAAQAMgBAIgDQAHgDAAgHQAAgEgFgCQgEgDgIAAIgNAAQgHAAgEAEgADjgPQAAAHACAEQAEAEAGAAQAHAAADgEQAEgEAAgHQAAgQgOAAQgMAAAAAQgAE5AmQgJgGgFgKQgFgLgBgMQAAgUAMgMQALgNAVAAQAMAAAJAGQAKAGAFAKQAGAKAAANQAAAUgMAMQgLAMgUAAQgNAAgKgFgAFCgUQgEAGAAANQAAALAEAIQAFAGAJAAQAKAAAEgGQAEgIAAgLQAAgNgEgGQgEgHgKAAQgJAAgFAHgAByAkQgIgHAAgOQABgOAJgEQAKgHAUgBIAPAAIAAgDQAAgOgNAAQgLAAgPAGIgHgQQAPgHATgBQARAAAJAIQAJAHAAARIAAA3IgQAAIgEgLIgBAAQgGAHgHADQgGADgKAAQgNAAgHgHgACXACQgJgBgFAEQgGAEAAAGQAAAKALAAQAJABAFgFQAFgFAAgIIAAgHgAh/AmQgKgGgEgKQgGgLAAgMQAAgUALgMQAMgNAUAAQAMAAAKAGQAJAGAGAKQAFAKAAANQAAAUgMAMQgLAMgTAAQgOAAgJgFgAh3gUQgDAGAAANQgBALAFAIQAEAGAKAAQAJAAAEgGQAFgIAAgLQAAgNgFgGQgEgHgJAAQgKAAgFAHgAjJAkQgHgHAAgPIAAgoIgLAAIAAgKIANgIIAGgTIAQAAIAAATIAZAAIAAASIgZAAIAAAoQAAAFADADQADACAFAAQAFAAAKgCIAAARQgKAEgNAAQgOAAgGgHgAkaAqIgNgEIAAgTQAGACAJACQAIACAHAAQANABgBgIQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgFgDIgMgGQgKgEgEgCQgFgDgCgFQgDgFAAgGQAAgMAKgGQAJgHAQAAQAQABAPAGIgHARIgMgEQgGgCgGAAQgLAAAAAGQABADADADQADACALAEQALAEAFAEQAEACADAEQACAFAAAGQAAAOgJAHQgKAHgSAAIgQgBgABBApIAAgwQAAgKgEgFQgDgEgHgBQgIAAgFAHQgEAGgBANIAAAqIgXAAIAAgwQAAgKgDgFQgDgEgFgBQgKABgDAGQgFAHAAAOIAAAoIgXAAIAAhVIASAAIADAMIABAAQAEgHAGgDQAHgEAHAAQATAAAHAOIACAAQAEgHAGgDQAIgEAIAAQAPAAAHAIQAIAIAAARIAAA2gAl6ApIAAhvIBCAAIAAATIgqAAIAAAZIAnAAIAAAUIgnAAIAAAcIAqAAIAAATgAh2g2IAAgCQAOgPAFgIIAaAAIAAACIgdAXg");
	this.shape.setTransform(41.4,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,6.9,75.8,16.1);


(lib.stomach_label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADOBKQgJgHAAgLQAAgIAFgGQAFgFAKgCQgEgBgDgEQgDgEAAgEQAAgEADgEQADgEAGgDQgIgDgDgEQgFgHAAgIQAAgPAKgIQAJgHARgBIAQACIAeAAIAAANIgNADQADAGAAAHQAAAOgKAGQgJAHgSAAIgEAAIgEAAQgDADAAAEQAAAEAMAAIAQAAQAOAAAHAHQAIAGAAAMQAAAPgMAJQgOAIgXAAQgTAAgKgGgADeAuQgFADABAFQAAAFAEACQAFAEAJAAQAMgBAIgDQAHgDAAgHQAAgEgFgCQgEgDgIAAIgNAAQgHAAgEAEgADjgPQAAAHACAEQAEAEAGAAQAHAAADgEQAEgEAAgHQAAgQgOAAQgMAAAAAQgAE5AmQgJgGgFgKQgFgLgBgMQAAgUAMgMQALgNAVAAQAMAAAJAGQAKAGAFAKQAGAKAAANQAAAUgMAMQgLAMgUAAQgNAAgKgFgAFCgUQgEAGAAANQAAALAEAIQAFAGAJAAQAKAAAEgGQAEgIAAgLQAAgNgEgGQgEgHgKAAQgJAAgFAHgAByAkQgIgHAAgOQABgOAJgEQAKgHAUgBIAPAAIAAgDQAAgOgNAAQgLAAgPAGIgHgQQAPgHATgBQARAAAJAIQAJAHAAARIAAA3IgQAAIgEgLIgBAAQgGAHgHADQgGADgKAAQgNAAgHgHgACXACQgJgBgFAEQgGAEAAAGQAAAKALAAQAJABAFgFQAFgFAAgIIAAgHgAh/AmQgKgGgEgKQgGgLAAgMQAAgUALgMQAMgNAUAAQAMAAAKAGQAJAGAGAKQAFAKAAANQAAAUgMAMQgLAMgTAAQgOAAgJgFgAh3gUQgDAGAAANQgBALAFAIQAEAGAKAAQAJAAAEgGQAFgIAAgLQAAgNgFgGQgEgHgJAAQgKAAgFAHgAjJAkQgHgHAAgPIAAgoIgLAAIAAgKIANgIIAGgTIAQAAIAAATIAZAAIAAASIgZAAIAAAoQAAAFADADQADACAFAAQAFAAAKgCIAAARQgKAEgNAAQgOAAgGgHgAkaAqIgNgEIAAgTQAGACAJACQAIACAHAAQANABgBgIQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgFgDIgMgGQgKgEgEgCQgFgDgCgFQgDgFAAgGQAAgMAKgGQAJgHAQAAQAQABAPAGIgHARIgMgEQgGgCgGAAQgLAAAAAGQABADADADQADACALAEQALAEAFAEQAEACADAEQACAFAAAGQAAAOgJAHQgKAHgSAAIgQgBgABBApIAAgwQAAgKgEgFQgDgEgHgBQgIAAgFAHQgEAGgBANIAAAqIgXAAIAAgwQAAgKgDgFQgDgEgFgBQgKABgDAGQgFAHAAAOIAAAoIgXAAIAAhVIASAAIADAMIABAAQAEgHAGgDQAHgEAHAAQATAAAHAOIACAAQAEgHAGgDQAIgEAIAAQAPAAAHAIQAIAIAAARIAAA2gAl6ApIAAhvIBCAAIAAATIgqAAIAAAZIAnAAIAAAUIgnAAIAAAcIAqAAIAAATgAh2g2IAAgCQAOgPAFgIIAaAAIAAACIgdAXg");
	this.shape.setTransform(41.4,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,6.9,75.8,16.1);


(lib.dinnertext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5BUIAAikIAqAAIAJAaIADAAQAFgMANgIQANgJANAAIAOABIADABIgFA2QgHgCgMAAQgTAAgJAJQgGAJAAAOIAABRg");
	this.shape.setTransform(100.3,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4A/QgXgVAAgqQAAgoAWgWQAVgWAlAAQAmAAAUATQAVAUAAAkIAAAYIhlAAQABAOAJAIQAKAHAPAAQAPABAMgDQANgDAPgHIAAApQgOAHgOADQgOADgUAAQgoAAgXgXgAAcgTQgBgMgGgHQgHgIgLABQgIAAgHAGQgGAHgCANIAwAAIAAAAg");
	this.shape_1.setTransform(83.2,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgFgIQgEgJgLAAQgNAAgGALQgHAMAAAbIAABIIg5AAIAAikIAsAAIAHAVIADAAQAHgMANgGQALgGARAAQAcAAAPAQQAPAQAAAdIAABqg");
	this.shape_2.setTransform(64,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgFgIQgEgJgLAAQgNAAgGALQgHAMABAbIAABIIg6AAIAAikIArAAIAIAVIADAAQAHgMAOgGQALgGAQAAQAbAAAQAQQAPAQAAAdIAABqg");
	this.shape_3.setTransform(44,25.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbB0IAAikIA3AAIAACkgAgdhZQAAgNAIgGQAGgHAPAAQAPAAAIAHQAHAGAAANQAAAZgeAAQgdAAAAgZg");
	this.shape_4.setTransform(29,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhZBqIAAjTIBKAAQAxAAAcAZQAcAbAAAyQABAzgeAdQgeAdgzAAgAggA7IAOAAQAYAAAMgPQAMgPAAgeQABgegMgOQgMgOgWAAIgRAAg");
	this.shape_5.setTransform(13.5,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_6.setTransform(98.9,25.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgEgIQgFgJgLAAQgMAAgHALQgGAMgBAbIAABIIg4AAIAAikIArAAIAGAVIAEAAQAIgMAMgGQAMgGAQAAQAcAAAPAQQAQAQAAAdIAABqg");
	this.shape_7.setTransform(80,25.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgwA/QgVgVAAgqQAAgnAXgXQAWgXAoABQAdAAAZAMIgQArIgUgHQgIgDgKAAQgOAAgFALQgIAKAAASQAAAoAbAAQAaAAAXgPIAAAuQgWAPgfAAQgnAAgVgXg");
	this.shape_8.setTransform(43.6,25.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_9.setTransform(17.8,25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhFBqIAAjTIA6AAIAAClIBRAAIAAAug");
	this.shape_10.setTransform(0.7,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:83.2}},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_1,p:{x:60.7}},{t:this.shape_7},{t:this.shape_6}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.6,44.9);


(lib.dehydration_symptom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEzA6IAAgaQANAGAJADQAJACAIAAQAIAAAFgDQAFgEAAgHQAAgDgCgDIgGgGIgRgJQgMgFgGgDQgGgFgDgHQgEgHABgJQAAgRALgKQALgKAVAAQAKAAAJADIATAGIgJAWQgKgFgHgBIgNgCQgIAAgEAEQgEADAAAGQAAAEACACQABADAEADIARAJQASAIAHAHQAGAIABANQAAARgNAKQgMALgXAAQgVAAgPgIgAIgBAIAAgxIgrhOIAeAAIAaA1IAbg1IAeAAIgrBNIAAAygAG0BAIAAhoIgjAAIAAgXIBhAAIAAAXIgjAAIAABogAEMBAIgegyIgPAAIAAAyIgbAAIAAh/IAlAAQAbAAANAKQAMAJAAAUQAAALgHAJQgFAHgMAFIAmA4gADfgGIAJAAQANAAAGgEQAHgEAAgKQgBgJgGgEQgGgDgOAAIgIAAgACJBAIAAh/IAbAAIAAB/gABNBAIAAg4IgzAAIAAA4IgaAAIAAh/IAaAAIAAAzIAzAAIAAgzIAbAAIAAB/gAhRBAIAAhoIgjAAIAAgXIBhAAIAAAXIgjAAIAABogAjrBAIAAgxIgrhOIAeAAIAbA1IAbg1IAdAAIgrBNIAAAygAk0BAIgegyIgPAAIAAAyIgbAAIAAh/IAlAAQAbAAAMAKQANAJAAAUQAAALgHAJQgFAHgMAFIAmA4gAlhgGIAJAAQANAAAGgEQAHgEAAgKQgBgJgGgEQgGgDgNAAIgJAAgAngBAIAAh/IBJAAIAAAXIguAAIAAAcIAsAAIAAAUIgsAAIAAAhIAuAAIAAAXgAo5BAIgsh/IAbAAIAdBbIADAMQAAgIAGgUIAZhLIAbAAIgsB/g");
	this.shape.setTransform(100.2,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97E332").s().p("AoxHSQgfgMgaggQgQgSgagrQgHgMgRgkQgPgfgLgQQgLgPgyAQQgeAKggAQQglATgVAGQgkAJgbgNQg6gbADg/QACgyAmg2IAngyQAYgfAEgXQADgOgVgLQgagKgHgGQgTgNgHgGQgOgMgHgMQgjhDA0g6QAwg2BKgDQAZgBAmADIA+ADQAoACANgXQACgEAPgzQAKgjAUgbQAWgfAegPQAjgSAmgDQAogCAiAQQAoARAaAeIAsAzQAeAdAbgCQAlgFAdgwQAjg6ATgMQAdgRAhgCQAhgCAgAOQAiAQAuAuQA0A1AZAQQA5AiAqg0QAYgeAmhHQAug+BVAeQBGAYA0A+QALANAeAyQAgAlAhgZQATgOATgbIAegvQAVgaASgNQAagTAbAEQA2AJAZApQAbArgfAsQgdAqgJAeQgKAkAUAOQAQAKAlgBIADgBIADAAQAfABAZATQAeAXgGAhQgFAdgkAXIg+AgQhYAsB7BHQA1AcAQAdQAUAjgIAfQgJAggkATQgoAXg1gXQgVgJg+gqQhXg7goBMQgaAwgLAZQgXAwgQATQgaAhglAIQgkAJgigFQglgGgagVQgOgLgwhCQglgzgkgKQgygNgkAiQgVATgeA5QgUAngRAWQgYAcggAOQgcAMgkgDQgigEgdgQQgvgagbgcIgigoQgWgZgSgJQgxgYg1AtQgeAagyA3Qg6AxgtAAQgPAAgOgGg");
	this.shape_1.setTransform(101.5,47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203.1,94.4);


(lib.btn_prev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn_pg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,94);


(lib.brocc_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C966CC").s().p("Ag0BsQgBgRA6g1IAAAAQgDAAgJALQgLALgGAAQgHAAgBgIQABgDAJgMIAPgRIgDgEQgEACgKAAIgCgBIgCgBQgJAKgCAAQgLAAABgLIgKADQgFAAgCgFIgCgEQAAgDANgSIANgUIAAgBQgEADgQAPIgPAPQgJAAAAgHQAAgGAMgLQANgMABgFQADgNAMgQIALgTQAGgJAGgCQgFgFAAgBIACgFQADgEAFAAQAFABATASIAaAYIAmATQAOAHAAAPQAAAEgFAJQAHAJAAAIQAAAHgiAfQgjAigSAAQgCAAgDgCIgNAOIgJARQgJAPgIABQgIgBAAgHgABFgfIAAgCIgJgGIAJAIgAABhQIAgAWIgNgKIgUgQIABAEg");
	this.shape.setTransform(16.2,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B68E68").s().p("AgfAfIAOgnQANgPAOgHQARgGAFAKQAEAKgZAaQgTAXgPAAQgFAAgDgCg");
	this.shape_1.setTransform(26.3,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B68E68").s().p("AghgBQAOgRAcgLQAhgMgKAfQgEAPgVANQgPAMgTAEg");
	this.shape_2.setTransform(27.4,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B68E68").s().p("AgrAUQAHgRAbgWQAcgbAPAIQAXALgdAfQgRATgXASg");
	this.shape_3.setTransform(25.2,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B68E68").s().p("AgSgKQgHguATgDQAfgGgFBKIgeA0QACgLgKg8g");
	this.shape_4.setTransform(17.3,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B68E68").s().p("AgpAsQAPglAMgTQAVgpAWAMQAkATg+BDg");
	this.shape_5.setTransform(21.7,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B68E68").s().p("AgUA5IgjgXQgCgBAKgcIALghQADgBACgFIABgEIgCgHQAEgKAGgEQAFgEAMgBQAPAAATAUQAQAQAIASQAIARgQAYQgOAXgVAKQgDABgEAAQgIAAgPgIg");
	this.shape_6.setTransform(21,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#265820").ss(0.6,0,1).p("AA1A7QAIALAAAOQABAQgKAHQgKAHgSAAQgUABgHgHQgJgHgEgQQgDgMABgPQgEAHgIAEQgIADgJgBQgQgCgMgPQgQgVAEgcQAEgaAWgPQgPgZAHgUQAEgLALgGQAMgGAKAFQAPgXAbANQAdANgIAXQAMgGAOAFQANAEAIAMQAKAOABALQAAAQgQARIAJAZQADAaggAIg");
	this.shape_7.setTransform(26.3,1.3,1,1,-7.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#246C1E").s().p("AgDBsQgJgHgEgQQgDgMABgPQgEAHgIAEQgIADgJgBQgQgCgMgPQgQgVAEgcQAEgaAWgPQgPgZAHgUQAEgLALgGQAMgGAKAFQAPgXAbANQAdANgIAXQAMgGAOAFQANAEAIAMQAKAOABALQAAAQgQARIAJAZQADAaggAIQAIALAAAOQABAQgKAHQgKAHgSAAIgDAAQgRAAgHgGg");
	this.shape_8.setTransform(26.3,1.3,1,1,-7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#265820").ss(0.5,0,1).p("AAwgvQgQAWgeAGQgNADgmgCIgHgDQAEAcANAdIACAJQALgQAhgRQAhgOAWgB");
	this.shape_9.setTransform(15.9,5.9,1,1,-7.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#44883B").s().p("AgpAlQgNgdgEgbIAHADQAlABAOgCQAegHAQgVIANArQgVABghAOQgiARgKAQg");
	this.shape_10.setTransform(16.1,5.7,1,1,-7.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#79909F").s().p("AgJBzQgNhugZhwQgHgdAegEQAcgDAHAcQAaByAMBtQAEAdgfAEIgHAAQgVAAgDgag");
	this.shape_11.setTransform(22,27.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#79909F").s().p("AgyAKQgHgTAHgYIBggIIAJAoQgBAngvAEIgHAAQgoAAgKggg");
	this.shape_12.setTransform(19.5,12.2,1,1,-7.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#79909F").s().p("AgOA8IAAh2QAAgPAOgBQAPABAAAPIAAB2QAAAPgPAAQgOAAAAgPg");
	this.shape_13.setTransform(22.4,6.6,1,1,-7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#79909F").s().p("AgGBAQgKhDgEg5QgBgOAPAAQANAAABAOQAFA9AIA3QACAOgPAEIgFABQgIAAgBgLg");
	this.shape_14.setTransform(18.3,7.6,1,1,-7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#79909F").s().p("AgEA4QgMg4gHg0QgCgOAQAAQANAAACAOQAGA0AMAwQADAOgPAEIgGABQgHAAgDgLg");
	this.shape_15.setTransform(14.5,8.1,1,1,-7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B58F67").s().p("AAABMIgXgFQgPgCgJgFQgJgEAAgFIACgJIAJgYIACgHQAHgYAFgLIAAgCIADgFIABgBIgBgDQAAgGAHgSQAJgVAIgFIAAAAIABABQgEAGgEAOIABgBQAFAAAAAEIgCAIQACgDADAAIACAAIAAACIgGAJIACADQADgKAHgIQAJgIAAALQAAACgEAHIAGACIADgCQACgDADAAQAIAAgBAHQAAAGgEAJIADABIAFgEIAGgEQAGABACAGIAAgHQADgIACABQACACAAAEQAAAUgKApIgGASQgMAkgFAAIgYgGg");
	this.shape_16.setTransform(17,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.5,-11,28.5,71.1);


(lib.breakfasttext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaBWQgNgOAAgdIAAhCIgUAAIAAgYIAagSIAOgjIAkAAIAAAiIAoAAIAAArIgoAAIAAA+QAAAQAPAAQAMAAAQgFIAAApQgMAFgKACQgLADgOAAQgaAAgNgPg");
	this.shape.setTransform(146.4,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBTQgNgBgPgGIAAgtQAOAFAQAEQAQAEAMAAQARAAAAgJQAAgEgFgEQgGgDgXgKQgXgJgJgKQgJgMAAgTQAAgXASgNQASgMAfAAQAQAAAOADQAPAEAPAGIgPAlQgMgEgMgEQgNgDgIAAQgMAAAAAGQAAAEAFADIAaANQASAHAIAGQAJAGAEAJQAEAJAAAOQAAAagSAOQgTAOggAAQgSAAgOgDg");
	this.shape_1.setTransform(131.9,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_2.setTransform(113.9,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnByIAAh5IgWAAIAAgcIAXgOIAAgDQAAghAOgOQANgOAbAAQAMAAALABIAXAHIgNAlQgKgDgKAAQgGAAgDAEQgDAEgBAJIAAAEIAjAAIAAArIgjAAIAAB5g");
	this.shape_3.setTransform(99.5,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXBxIgjg7IgSAOIAAAtIg5AAIAAjhIA5AAIAABZQAAAXgDAUIABAAIASgYIAjguIBAAAIg6BEIA9Bfg");
	this.shape_4.setTransform(83.8,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag/BHQgOgOAAgZQAAgbATgLQASgNAjgBIAagBIAAgDQAAgUgVAAQgQAAgcAMIgQgmQAdgOAqAAQAgAAASAPQARAQAAAcIAABrIgoAAIgLgVIgBAAQgLAOgMAFQgKAGgUAAQgXAAgNgPgAAIAJQgaABAAAUQAAAPAQAAQAIAAAIgHQAHgGAAgKIAAgOg");
	this.shape_5.setTransform(63.1,25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4A/QgXgVAAgqQAAgoAWgWQAVgWAlAAQAmAAAUATQAVAUAAAkIAAAYIhlAAQABAOAJAIQAKAHAPAAQAPABAMgDQANgDAPgHIAAApQgOAHgOADQgOADgUAAQgoAAgXgXgAAcgTQgBgMgGgHQgHgIgLABQgIAAgHAGQgGAHgCANIAwAAIAAAAg");
	this.shape_6.setTransform(45,25.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag5BUIAAikIAqAAIAJAaIADAAQAFgMANgIQANgJANAAIAOABIADABIgFA2QgHgCgMAAQgTAAgJAJQgGAJAAAOIAABRg");
	this.shape_7.setTransform(30.1,25.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhRBqIAAjTIBLAAQAqAAAUAMQAWANAAAbQAAATgJANQgKAMgOAEIAAACQATADAJAMQAJAMAAAUQAAAdgVARQgXAQgmAAgAgXA+IAVAAQAZAAAAgXQgBgKgGgHQgIgFgMAAIgTAAgAgXgXIARAAQALgBAHgFQAGgEAAgLQAAgSgZAAIgQAAg");
	this.shape_8.setTransform(12.6,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag7A+QgXgXABgnQAAgoAVgWQAXgWAlAAQAYgBATALQATAKAKAUQAKATAAAZQAAAogVAWQgXAYgmAAQglgBgWgXgAgRgfQgGALAAAUQAAAUAGAMQAFALAMAAQANAAAFgLQAGgMAAgUQAAgUgGgLQgFgLgNAAQgMAAgFALg");
	this.shape_9.setTransform(159.8,25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAXBUIAAhYQAAgRgFgIQgEgJgLAAQgNAAgGALQgHAMABAbIAABIIg6AAIAAikIArAAIAIAVIADAAQAHgMAOgGQALgGAQAAQAbAAAQAQQAPAQAAAdIAABqg");
	this.shape_10.setTransform(140.3,25.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhABEQgPgQAAgdIAAhqIA5AAIAABYQAAARAFAIQAEAJALgBQANAAAGgLQAGgLAAgbIAAhIIA5AAIAACkIgrAAIgHgUIgDAAQgHALgNAGQgLAGgRAAQgcAAgPgQg");
	this.shape_11.setTransform(120.1,25.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhLB0IAAgtQAIACAKAAQAIAAAFgDQAGgDAEgGQAEgFAFgMIhBihIA8AAIAcBeQACAIAAALIAAAAIAEgSIAdhfIA6AAIhBCuQgNAhgQAPQgTANgdAAQgMAAgMgCg");
	this.shape_12.setTransform(101,29.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgzBpQgNgKgHgUQgIgTAAgbQAAgmARgXQAQgXAcAAQAOAAAJAGQAKAFAJAOIABAAQgDgUAAgUIAAgsIA6AAIAADiIgrAAIgNgVIgCAAQgPAYgbAAQgSAAgNgKgAgOAAQgHALAAATQAAAUAHAJQAGALAKgBQANAAAGgIQAGgIAAgTIAAgEQAAgWgGgIQgHgJgNAAQgJAAgGAJg");
	this.shape_13.setTransform(28.8,22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbBxIAAjhIA3AAIAADhg");
	this.shape_14.setTransform(7,22.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag+BqIAAjTIB9AAIAAAuIhDAAIAAAhIA+AAIAAAtIg+AAIAAAoIBDAAIAAAvg");
	this.shape_15.setTransform(-5.7,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:45}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:113.9}},{t:this.shape_1,p:{x:131.9}},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_6,p:{x:48}},{t:this.shape_1,p:{x:65.5}},{t:this.shape_2,p:{x:82.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.4,44.9);


(lib.zach_head_eat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#584233").s().p("AiLgKQgKgLALgLQALgLAJALQAqAtBNgBQBPgBAogvQAJgLAKAKQALALgJALQgvA5hdABIgBAAQhaAAgxg1g");
	this.shape.setTransform(54.7,100,0.634,0.634);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#584233").s().p("AhOAhQgXgVAAgWQAAgMADgKQAFgVAMAAQAHAAAAAGIgEAGQAEACAGAHIAFAEIACAEIACgBQAEAAAEAFIAIADIAHAEIAEADIAAAAQAGgEAFAAQAFAAADACQADAAADACQAEAAADgDQACAAAIAHIACgCIARgIQAZgGAIgFIAKgKQAFgEAFgBIgDgIQAAgOAIAHQAHAHAEALQADAHAAATIAAAIIgBAFQgEASgRAQQgfAag2AAQgtAAgbgbg");
	this.shape_1.setTransform(54.7,103.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#584233").s().p("AhKAqQgEgCAAgEQAAgGAQgCQAbgCAMgDQARgGASgNIAcgaIgKgGQgRgIAAgBQAAgHAOAAQAdAAAOAYQAJAPAAAMIgCAFQgCADgFAAQgHAAgDgMQgDgMgDgDQgGAKgaARQgnAeghAAQgTAAgFgDg");
	this.shape_2.setTransform(66,97.9);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#584233").s().p("AAnAWIgBgTQgGAEgPAGQgZALgSAAQgQAAgJgFQgGgDAAgFQAAgGANgCIAsgFIASgHIAKgDIgJgJIgMgJQAAgFAIAAQARAAAKAMIACACIAFAHQAJAOAAAMIgDANIAAAEQAAAHgIAAQgHAAgBgOg");
	this.shape_3.setTransform(62.8,100.4);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},4).to({state:[]},1).to({state:[{t:this.shape_2}]},8).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(13).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(18).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B3627").s().p("AAwAUQgagQgWgDQgXgCgYALQgKAGgGgKQgGgJAKgFQA4ggA/AoQAKAGgGAKQgEAHgFAAQgDAAgEgDg");
	this.shape_4.setTransform(70.5,55,0.634,0.634);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B3627").s().p("Ag8AVQgJgJAIgIQAugrBIAXQALAEgDALQgEAKgLgEQgdgHgVACQgYACgUATQgEAEgEAAQgEAAgEgEg");
	this.shape_5.setTransform(33.8,54.7,0.634,0.634);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#584233").s().p("AgvBnQgOgFAEgPQAEgOAOAFQAeAMAVgcQASgWAIgiQAIgigMgUQgPgXgUgCQgVgDgVATQgLAJgLgLQgKgKALgKQAYgUAagEQAbgFAXASQAUAQAJAXQAIAWgDAaQgHAygeAkQgZAegcAAQgNAAgOgGg");
	this.shape_6.setTransform(55,78.3,0.634,0.634);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#584233").s().p("AgMBjQgPgEACgPIAShQQAIgugFgiQgDgOANgEQAOgEADAOQAHAmgJAyIgTBYQgBAMgIAAIgFgBg");
	this.shape_7.setTransform(52.2,68.3,0.634,0.634);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAIQgDgEAAgEQAAgDADgEQAEgDAEAAQAFAAADADQAEAEAAADQAAAEgEAEQgDAEgFgBQgEABgEgEg");
	this.shape_8.setTransform(70.5,67.5,0.634,0.634);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAIQgDgEAAgEQAAgDADgEQAEgDAEAAQAFAAAEADQADAEAAADQAAAEgDAEQgEAEgFgBQgEABgEgEg");
	this.shape_9.setTransform(35.8,67.5,0.634,0.634);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZBQQgPgPgEgWQgFghADgYQAAgfAJgRQABgEAEgDQAFgIAGgDQAWgQAWARQATAOAEAZQAFAjgGAcQgIAngZATQgKAIgIAAQgKAAgJgJg");
	this.shape_10.setTransform(70.7,65,0.634,0.634);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZBQQgOgPgEgWQgGgiADgXQABgfAIgRQABgEAEgDQAFgIAGgDQAWgQAWARQATAOAEAZQAFAjgGAcQgIAngYATQgLAIgHAAQgKAAgKgJg");
	this.shape_11.setTransform(36,65,0.634,0.634);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#886B4D").s().p("AhMBhIASidQAfhDA0AUQA0ATgBBCQgBA0g1AyQggAggcAAQgUAAgSgPg");
	this.shape_12.setTransform(101.2,68.7,0.634,0.634);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#886B4D").s().p("AgVBQQg1gygCg0QAAhCA0gTQAzgUAgBDIASCdQgSAPgTAAQgdAAggggg");
	this.shape_13.setTransform(10.3,68.7,0.634,0.634);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3A2E25").p("Aq3FwQAXgdAYgyQAwhmAFhvQADhECpgmQCSgiDkgGQDSgGCoAVQCwAXAPAkQAWA2AwCYQA0CFBHArQAsgpgihuQgLgigRgmIgPgeIhulsImtibIkAAAIkVBIIjCDHIhjDGIg0CXg");
	this.shape_14.setTransform(55.3,38.9,0.634,0.634);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A2E25").s().p("AJODTQgwiZgWg1QgPgliwgWQiogVjSAFQjkAHiSAiQipAmgDBEQgFBvgwBlQgYAzgXAcIgqiFIA0iYIBjjFIDCjIIEVhIIEAAAIGtCcIBuFrIAPAfQARAlALAjQAiBugsAoQhHgqg0iFg");
	this.shape_15.setTransform(55.3,38.9,0.634,0.634);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#886B4D").s().p("An5IvQijjOgUlhQgUlbDUjkQBghoCBg4QCBg4COABQFTACDBDsQBZBsAoCPQAoCQgOCdQgfFailDVQi1DoknAAQlPAAi5jog");
	this.shape_16.setTransform(55.6,65.5,0.634,0.634);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3A2E25").s().p("Aq/HsQgggBgcgYIgwgyQgFgEAAgGQAAgGAFgFQAMgOARgOQgLgOgWgVQglgkgMgOQg2hBAqgzQAUgYAWgLIAXgLQAIgIgJgRQgKgPgGgNQgOgbgEggQgDggAJgbQAWhCA5gbQAdgNAAgSQgFgXACgQQAFgiAJgOQAjg4BAgOQAxgLBAAOQAcg2AsgnQA0guA+gOQBOgSA8AOQApAJAaANQAZANATgCQALgBAggNQBUgiA+gKQBSgNBFAZQA1AUAkAqQAeAkAKAsQBbgRA8AFQBcAJA3A9QAoAsgGA9QgDAngVAcQAtACAnAWQAyAcAcA1QAcAygGA7QgFA3ghAsQAkAhAIA1QAKA8gdA2QgeA5gzAiQgzAhg9AEIgEAAgAqfkVQgoAnAIAxQACAPAAAPQgBAOgLALQgKAJgOAFQgnAOgWAhQgWAhAEAoQADAVASAmQASAmADAWQACAQgjARQhRAoAuBBQANARAkAlQAiAjALARQADAGgCAGQgCAFgFAEQgOAKgNANIAXAZQAbAdADAAIV9AYQAvgCArgYQArgYAZgoQAegxAAg0QAAg8gtgfQgGgFgBgGQgBgHAFgGQAlgrAFg1QADgygZgqQgYgsgsgXQgvgZg4AGQgMACgCgMQgCgLAIgHQAzgkgNg/QgMg8g2gdQgzgdhEAAQguAAhOAQQgHABgFgEQgGgEgBgIQgIhAg7gqQg3gohEAAQhIAAhQAdIgzAWQggANgVAEQgSADgggQQgogUgJgCQhNgSg9ASQh2Ajg3ByQgFAKgMgDQgsgLgiAAQg4AAggAeg");
	this.shape_17.setTransform(56.8,32.7,0.634,0.634);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A2E25").s().p("AraHdIhHhGQAPgVAYgPQgLgTgWgWIgpgjQgzgxAKgtQAJgmA1gXQAWgKADgLQADgKgNgUQgTgcgIgfQgIgeAFgfQAGghAUgaQAUgcAegLIARgHQAKgEAFgHQAGgJgBgPIgDgbQgEgjAXggQAWgfAjgOQA6gYBUAYQAYg1AsgoQAsgoA2gSQA3gTA7AFQA8AFAyAcQATALAKAAQAIAAAOgGQBOgiAvgMQBIgUA7AFQBGAGA3ArQA5AvAGBAQA1gLAhgEQAwgFAmAGQAuAGAlAWQAoAYAUAkQAVAogIAtQgJAvglAXQA4gJA1AaQA1AaAbAyQAaAvgHA7QgIA7gmApQAdASAOAkQAMAhgDAlQgHBLg8A4Qg8A3hMAAg");
	this.shape_18.setTransform(56.8,32.7,0.634,0.634);

	this.instance = new lib.Path_20();
	this.instance.setTransform(55.8,110,0.634,0.634,0,0,0,12.8,11.8);
	this.instance.alpha = 0.102;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#584233").s().p("AiLgKQgKgLALgLQALgLAJALQAqAtBNgBQBPgBAogvQAJgLAKAKQALALgJALQgvA5hdABIgBAAQhaAAgxg1g");
	this.shape_19.setTransform(54.7,100,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},4).to({state:[]},1).to({state:[{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},8).to({state:[{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},50).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.6,116.6);


(lib.WINDOW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5CCCC").s().p("AhaP4IAA/vIC1AAIAAfvg");
	this.shape.setTransform(9.2,102.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5CCCC").s().p("AhaP4IAA/vIC1AAIAAfvg");
	this.shape_1.setTransform(171.6,102.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5CCCC").s().p("AuBBbIAAi1IcDAAIAAC1g");
	this.shape_2.setTransform(89.9,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5CCCC").s().p("AuBBbIAAi1IcDAAIAAC1g");
	this.shape_3.setTransform(89.9,194.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#98ADAC").s().p("Ag3N1IAA7pIBvAAIAAbpg");
	this.shape_4.setTransform(16.3,100);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#98ADAC").s().p("Ag3N1IAA7pIBvAAIAAbpg");
	this.shape_5.setTransform(164.6,100);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#98ADAC").s().p("At0A4IAAhvIbpAAIAABvg");
	this.shape_6.setTransform(89.9,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5CCCC").s().p("AtSAXIAAgtIalAAIAAAtg");
	this.shape_7.setTransform(91.6,100);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#98ADAC").s().p("At0A4IAAhvIbpAAIAABvg");
	this.shape_8.setTransform(89.9,187.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5CCCC").s().p("AgVNTIAA6lIAsAAIAAalg");
	this.shape_9.setTransform(91.6,100);

	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(92.3,171.7,1,1,0,0,0,140.5,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOBxQgXgFgTgMQgHgFgFgBQgFgBgJAEQg3AXgpgFQgagEgUgOQgVgPgFgWQgmASgYACQgRABgPgGQgQgHgHgNQgIgNAIgPQAJgQAQgBQgNgEgFgMQgEgNAGgMQALgWAhgFQATgCAlAGQgDgIAGgIQAFgIAJgEQAMgEAaACQA3AFAXATQgEgEABgGQABgGAFgEQAHgIAOgCQAPgDAdAKQAdAKANgEQAEgBAmgSQAqgQAbADQAnAGALADQASAFAOAOQALAMAhgKQAogMAMABQAUACANAhQAHAQACAQIhRA1QgSAegoAKQgoAJghgSQgKAUgTAOQgTAPgXAFQgOADgNAAQgKAAgKgBg");
	this.shape_10.setTransform(139.2,81.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEDD5E").s().p("AhxByQgvgvAAhDQAAhBAvgvQAwgwBBAAQBCAAAvAwQAwAvAABBQAABCgwAwQgvAvhCAAQhBAAgwgvg");
	this.shape_11.setTransform(136.4,69.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#93FEF3").s().p("ArUOVIAA8oIWpAAIAAcog");
	this.shape_12.setTransform(89.9,100.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,0,281,203.8);


(lib.weakness_slide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weakness_symptom();
	this.instance.setTransform(96,127.6,1,1,0,0,0,96,36.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:71.6,alpha:1},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.9,89.3,178.2,79.2);


(lib.vomiting_slide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.vomiting_symptom();
	this.instance.setTransform(101.9,115.9,1,1,0,0,0,101.5,47.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:72.9,alpha:1},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,70.4,167.8,86.8);


(lib.urinating_slide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.urinating_symptom();
	this.instance.setTransform(96,127.6,1,1,0,0,0,96,36.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:54.6,alpha:1},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,87.9,196.1,113.1);


(lib.stomach_art = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B87B6B").s().p("AgBAoQg1gEgjgOQgkgOABgPQABgRAmgJQAlgJAyADQA0AEAkAOQAkAPgBAOQgBARglAJQgcAHgjAAIgZgBg");
	this.shape.setTransform(67.2,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C85557").ss(2,1).p("AmAgfQAdAFBYATQBcAQBRAKQD0AeDrgj");
	this.shape_1.setTransform(75.1,208.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C85557").ss(2,1).p("AkDBEQBLABBxgXQCngjCkhO");
	this.shape_2.setTransform(46,246);

	this.instance = new lib.Path_22();
	this.instance.setTransform(153.9,97,1,1,0,0,0,11,24.9);
	this.instance.alpha = 0.129;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD9193").s().p("AhlKIQhtgjhuhNQg/gsg0gwQgbgXgkgkIgZgaQgPgPgLgJQgcgUgSABQgPADgFAPIgKAaQgSAWgPgLQgHgFADgMIAFgMQACgFALgLQAMgMACgDQAEgGgBgGQAAgIgGgCQgDgCgFABQgIABgSAGQgQAFgKAAQgGgBgCgDQgCgCABgDQACgOAKgPQAFgGARgSQAIgJABgFQABgFgBgEQgCgEgDgCIgJgBIgXAFQgPADgDgHQgGgLAKgIQAOgHAEgEIAMgKQAHgHADgGQADgIgCgEQgDgGgJAAQgIAAghAHQgZAGgDgIQgCgJASgUIAIgJQADgEACgHQABgHgEgHQgEgHgHAAQgHABgFADQgOAJgBgGQgBgCAEgGIAGgIQAYgcAhgQIATgIIADAAIACgBQBLgWB4ArIBhAkQA3ATAqACQBHAEAlghQAggcALgsQAShQghhxQgOgxgdg7QgMgYgshOIgEgHQgPgbg6haQgKgPgDgIQgFgOACgLQABgEACgBQADgDAGADQAJAFAKAOQAMAQAGAFQALAIAHgFQAFgCgDgOQgDgNAEgBQAGgDAMAMQAMALAGgEQAGgEgFgOIgGgTQgDgKABgJQAAgNAGgCQAGgDAIAIQAJAJANARQANAPAOAGIAEAAQACgBABgEIgBgLQAAgGAEgCQAHgDAGAFIALALQAFAFAFgBQAGAAAEgGQAEgGgBgHIgBgMIgCgNQAAgDACgCQAEgDAFAGQAGAGAKAQQAJAOAJgDQAFgHgKgWQgMgaABgKQABgIAEgBQAEgCAGAGIA5A7QArAxAhAZQAsg3AwggQAqgcA2gQQAzgPBMAPQBHAOAxAfQBjA9A9BoQAwBSAjCCQAfB0gHB0QgHB3gvBpQg7CAhmBvQh+CLiWA4QhaAihgACIgGAAQhbAAhZgeg");
	this.shape_3.setTransform(99.6,120.1);

	this.instance_1 = new lib.Path_1_7();
	this.instance_1.setTransform(108.2,121.7,1,1,0,0,0,70.1,67.8);
	this.instance_1.alpha = 0.078;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDCAB4").s().p("AhcDNIhAh/QgmhfgKhWQgNhqAIifQABgHAEgFQAFgFAHABIDWAXQAGABAFAEQAFAFAAAGQgCAYAAAcQgBCIAdBhQApCGBsBzIjCDEQgogshHiIg");
	this.shape_4.setTransform(75.6,40.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDCAB4").s().p("ABNN4QgKgNgEgJQgEgLABgPQADgUgLgaQgOghgBgKQgCgLAFgNQAEgMAHgIQAZgfADgGQALgVgIgbQgEgOAWgcQARgUASgOQAbgWAfgGQAbgFAmAGIBXANQAyAHAnAAQAqABAOgFQAbgKgXgeQgrg4g/gTQhDgUg+AgQg9AhhRBHQh1BpgOALQhCAzguAXQhFAhg8gJQhygRhHhTQgsg0gWg/QgVhBAFhEQACgVgQgFQgWgEgNgGQgfgRgPgSQgfglgOhIQgOhPAbhAQAbhDBDgnQAvgdA+gRIAegIIgKgDQiTgshHgvQhqhGgZh0QghiVBFiVQA8iEB+huQAEgDAEABICWA8QAHADgBAGIg1DCQgDALgIAKIgSATQhhB1BPBvQBDBfCNApQCcAtDLAEQBjABEJgNICVgJQBaABAyAlQAlAcANAkQANAmgRAqQgNAggfAkQgWAaglAgQghAdgYARQgiAYgfALQhCAXhZgEQhEgDhYgTIjXg7Qh+ghhbAEQiQAGhbAyQgTAKgWAbQgaAhAfgBQAWgBAXgFQAygKBDgVIB0glQAzgQAngBQAtgCAtAPQA7AWAjAfQAuApgFA1QgDAfg4AZQgQAHg/AVQg1AShMATIgsAJQgbAGgOAJQghAXgSAaQgZAkAVAdQAQAVAQAIQATAKAWgGQAggJAhgWQAWgQAigdQBVhKAfgYQBCgyA/ggQBTgpAugQQBLgaA+AGQBIAGBDBAQA3A0ApBNQAdA4AEAuQAFA+goAjQgxAqhgAHQhKAGhagKQhAgHhfgRQgIADgFARQgHAXgDAEQgXAXgCAaQgCAbAVAYQANAPAFASQAGAXgNANQgTAUgdAFIgOABQgXAAgOgQgAC3IXQgmAPgdAmQgNAQADAYQADAhgBAHQgCAKgPALQgTAPgCADQgfAmAOAUIAPAQQAJAMAAANIACA8QAJAlAwgRQAsgPgMgeQgCgEgdglQgmgxAhgnIAVgWQANgOAFgNQACgIAGgEQAEgDAJgBIACAAIACAAIBEAMQBjAPA4AEQBYAFBCgRQBfgYAMg9QAKgzgcg+QgWgvgrgzQgwg5gtgbQg6gjg+AHQhIAIhiAuIhPAmQgtAYgeAWQgQAMhbBVQhCA7gyAZQgYALgRADQgXAEgUgHQgTgGgQgVQgRgVgBgUQgBgvArgjQAjgcA0gMQBPgSAsgNQBDgVAygZIAZgNQAPgKAFgKQAIgRgJgYQgIgVgPgPQgygzhQgRQgwgKg3AMQgNADhWAcQhGAXgkALQg/ATgtABQgpABAGgiQAEgfAfgUQBKgvBmgRQBbgOBhAMQBFAJCLApQCHAoBLAHIBZAIQAzACAlgIQBSgSBPhHQBIhDAYg3QAkhVhQgtQg+gjhsADQh7ALg3ACIi+AJQhvADhNgFQiWgLhagXQiIgihNhJQhYhTAKheQAHg9A1g6QAQgRAHgRQAFgKAIgeIAniSQAHACgCgDQgDgGgBAFIgBACIgDgCIiKg2QgEgCg4A8QhxB6gnCVQgsCuBXB/QAkA0BJAmQAuAYBXAdQAsAOAsANIA5gLQAegGAwACIBQADIBGgCQArgBAcAHQAzAMCVAnIAHACIAagFQBmgRBAgEQBGgDATAAQA4ACAeASQAOAIAJAQQAJASgHALQgOAag5gFQgWgBg7gNQhQgPg5gJQgMgCgqgDQgfgDgTgEQhLALhCADQhXAEhTgLQh9gQh+gkQg9ANggALQhNAbguAxQggAjgMA4QgMA3AKA2QAMA5AgAkQAlAnA4ADQAHABAAAHQgMBnAoBdQAsBnBaAoQBYAnBWgZQBFgUBShCICLh9QBUhJA9gbQA2gYA8ANQA6ANAqAqQASASAIALQAQAUAAAPQgBAVgbAIQgQAEgcAAQg7AAhWgMQgogIgWgDQgNgCgMAAQgVAAgPAGgAGCg2QhAADhcAPIAqAEQA9AKBJAPIA3AJQAfAEAZgBQAagBAJgIQAJgKgTgSQgUgVg2gDIgMAAIhGACgAlRhSIgRAEQBfAYBgAPQCLAWChgUQhwgegugLQgfgHgsAAIhLABIhUgCIgTAAQglAAgaAEg");
	this.shape_5.setTransform(83.5,213.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDCAB4").s().p("ABeN7QgXgKgEgXQgBgIADgSQACgRgCgIQgCgJgJgOQgKgPgCgHQgGgSAJgUQAIgSARgNIATgQQAKgLgBgKQgBgGgGgMQgGgLAAgGQgBgJAKgNQAdgnAWgPQAmgcAxAHQDjAlApgXQAQgJgJgSQgEgJgTgZQgdglgxgVQhTgjhYAzQgtAahHA9Ih7BsQiYB/hmgOQg2gHgmgTQg+gfgwhDQhLhqATiOQgtAAgkgbQgYgSgMgYQgbgxgChGQgDhHAYgxQAYgvBEgoQA/gnA6gJIAlgHIgmgLQjRg/hDhIQgogrgVhGQgYhNAJhXQAWjZDPiwICXA8Ig4DOQiAB8BHB6QAjA+A+AkQBNA1CmAfQCIAZBkgDQFagJBwgIQCigOA8BAQAoAqgHAuQgKA7hXBSQhYBThOASQg0AMh6gJQhMgHiPgoQiYgrg/gJQhSgLhVALQhYAMhIAiQghAQgQAPQgVAWAEAaQAEAbCngyIDIg8QBIgIBRArQBfAxgLBHQgGAjiPAuQhiAghJAOQgfAGgiAkQgjAmAEAdQADAYAZAYQAzAxB3hhQCCh6AzgdQDYh3BkgBQBlgCBhBzQAqAyAZA2QAiBLgRAzQgxCSm6hUQgGgDgGAIQgGAHgBAJIgDAPQgCAJgEAEQgDADgGACIgJADQgRAGgFATQgGATAIARQAEAKALAMIARATQAWAbgGAVQgDAMgLAJQgKAIgNADQgKACgJAAQgNAAgMgFgAFfg7IiuAZQAzABByAWQA5ALAvAIQB4AQgBggQgBgKgMgOIgNgMQgogOg1gDIgXAAQgeAAgqACg");
	this.shape_6.setTransform(83.6,213.8);

	this.instance_2 = new lib.Path_3_4();
	this.instance_2.setTransform(88.8,240.8,1,1,0,0,0,88.7,75.6);
	this.instance_2.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.3,316.4);


(lib.splash_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFDxIlXAAIAAnhIFXAAIAAjzIHiHjIniHkg");
	this.shape.setTransform(90.6,86.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#28C5A4").s().p("AlOMbQichCh3h3Qh4h4hBiaQhEihAAivQAAiuBEihQBBiaB4h4QB3h4CchBQCghECuAAQCvAAChBEQCbBBB3B4QB4B4BBCaQBEChAACuQAACvhEChQhBCah4B4Qh3B3ibBCQihBEivAAQiuAAighEg");
	this.shape_1.setTransform(86.4,86.4);

	this.instance = new lib.Path_1_10();
	this.instance.setTransform(86.4,93.4,1,1,0,0,0,86.4,86.4);
	this.instance.alpha = 0.121;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.8,179.7);


(lib.short_insulin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shorttext();
	this.instance.setTransform(111.1,17.6,1,1,0,0,0,37.2,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20BA57").s().p("AH9C3QgIAAgGgGQgGgGAAgIIAAgmIvqAAQgaAAgTgQQgSgRAAgYIAAgFIAAh9IAAgFQAAgYASgRQATgRAaAAIPqAAIAAglQAAgIAGgGQAGgGAIAAIAwAAQAJAAAFAGQAGAGAAAIIAABnIAAB2IAABoQAAAIgGAGQgFAGgJAAg");
	this.shape.setTransform(109.4,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2B").s().p("APWCIQgFAAgFgFQgFgEAAgGIAAg+IlKAAIAAh2IFKAAIAAg9QAAgGAFgEQAFgFAFAAIAkAAQAGAAAFAFQAEAEABAGIAADxQgBAGgEAEQgFAFgGAAgAo+A/QgLAAgIgIQgIgHAAgLIAAgWImBAAIgvgeIGwAAIAAgVQAAgLAIgHQAIgIALAAIA5AAIAAB9g");
	this.shape_1.setTransform(103.4,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.8,36.7);


(lib.short_acting_insulin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txtlabel
	this.instance = new lib.short_label();
	this.instance.setTransform(79.9,13.2,1,1,0,0,0,24.9,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15D464").s().p("AgLCHQgIgBgGgFQgGgGAAgIIAAjlQAAgHAGgGQAGgHAIAAIAXAAQAIAAAGAHQAGAGAAAHIAADlQAAAIgGAGQgGAFgIABg");
	this.shape.setTransform(120,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#15D464").s().p("Al0BcQgTAAgOgMQgNgMAAgSIAAhjQAAgSANgMQAOgMATAAIMXAAIAAC3g");
	this.shape_1.setTransform(80.1,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2B").s().p("AiyALIgjgVIGrAAIAAAVg");
	this.shape_2.setTransform(21.4,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2B").s().p("AkoAvQgKAAgJgIQgHgIgBgLIAAgnQABgLAHgIQAJgIAKAAIJRAAQALAAAHAIQAIAIAAALIAAAnQAAALgIAIQgHAIgLAAg");
	this.shape_3.setTransform(64.2,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(1));

	// Layer 2
	this.instance_1 = new lib.needle_pumper();
	this.instance_1.setTransform(123.4,13.5,1,1,0,0,0,29.1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:103.2},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.4,27);


(lib.screen78_stomachlabel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACqAQQAAgUALgMQAMgLAUgBQAPAAANAHIgIASIgKgEIgKgCQgSABAAAYQAAAaASAAQAHAAAGgCQAFgCAHgEIAAAUQgGAFgGAAQgGACgJAAQgpAAAAgtgABQA2QgHgIAAgNQAAgNAKgHQAKgGAUgCIAOAAIAAgDQAAgMgNAAQgKAAgPAHIgIgRQAPgIATAAQASABAJAHQAJAHAAAPIAAA5IgRAAIgEgLIgBAAQgGAHgGADQgHADgKAAQgMAAgIgHgAB2AUQgKAAgFADQgFAEgBAGQAAALAMgBQAIABAGgFQAEgFAAgIIAAgHgAihA4QgJgGgFgKQgFgLAAgOQAAgSALgNQALgLAVgBQAMABAJAFQAKAGAFAJQAGAJgBANQAAAWgLAMQgLAMgUAAQgNAAgKgFgAiYgCQgEAFAAAMQAAAOAEAGQAEAHAKAAQAJAAAFgHQAEgGAAgOQAAgMgEgFQgFgGgJgBQgKABgEAGgAjrA2QgGgHgBgPIAAgoIgLAAIAAgKIANgIIAHgTIAQAAIAAATIAYAAIAAASIgYAAIAAAoQAAAFACADQADACAFAAQAGAAAJgCIAAARQgJAEgNAAQgOAAgHgHgAlRA2IAAgWQALAFAJACQAHACAHAAQAIAAAFgDQADgDAAgGQAAgDgBgDQgCgDgEgCIgOgIQgLgEgFgFQgFgDgEgGQgDgGAAgIQAAgPALgJQAKgJASAAQAJABAIACIARAGIgIASIgPgEQgGgCgGAAQgHAAgDADQgEADAAAGQAAADABACIAFAFIAQAIQAQAFAFAIQAHAHAAAMQAAAPgMAJQgLAJgUAAQgSAAgOgHgAE6A7IAAgzQAAgQgOgBQgKAAgEAHQgFAFAAAPIAAApIgXAAIAAh3IAXAAIAAAnIgBAHIABAAQAIgNASgBQAPAAAIAJQAIAIAAAOIAAA4gAAfA7IAAgzQAAgIgEgDQgCgGgIAAQgIABgEAGQgFAEAAANIAAAsIgVAAIAAgzQgBgIgDgDQgDgGgHAAQgJAAgEAHQgEAFAAAPIAAApIgYAAIAAhVIASAAIAEAMIABAAQADgHAHgDQAHgDAIgBQATABAIANIABAAQACgHAHgDQAHgDAJgBQAOABAIAHQAHAIAAAPIAAA4g");
	this.shape.setTransform(33.9,6.2);

	this.instance = new lib.stomach_labelcopy();
	this.instance.setTransform(32.9,8.9,1,1,0,0,0,36.9,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.7,12.3);


(lib.screen4_stomach_txtlabel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":1,"es":2});

	// timeline functions:
	this.frame_0 = function() {
		changeSymbolToLang(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACqAQQAAgUALgMQAMgLAUgBQAPAAANAHIgIASIgKgEIgKgCQgSABAAAYQAAAaASAAQAHAAAGgCQAFgCAHgEIAAAUQgGAFgGAAQgGACgJAAQgpAAAAgtgABQA2QgHgIAAgNQAAgNAKgHQAKgGAUgCIAOAAIAAgDQAAgMgNAAQgKAAgPAHIgIgRQAPgIATAAQASABAJAHQAJAHAAAPIAAA5IgRAAIgEgLIgBAAQgGAHgGADQgHADgKAAQgMAAgIgHgAB2AUQgKAAgFADQgFAEgBAGQAAALAMgBQAIABAGgFQAEgFAAgIIAAgHgAihA4QgJgGgFgKQgFgLAAgOQAAgSALgNQALgLAVgBQAMABAJAFQAKAGAFAJQAGAJgBANQAAAWgLAMQgLAMgUAAQgNAAgKgFgAiYgCQgEAFAAAMQAAAOAEAGQAEAHAKAAQAJAAAFgHQAEgGAAgOQAAgMgEgFQgFgGgJgBQgKABgEAGgAjrA2QgGgHgBgPIAAgoIgLAAIAAgKIANgIIAHgTIAQAAIAAATIAYAAIAAASIgYAAIAAAoQAAAFACADQADACAFAAQAGAAAJgCIAAARQgJAEgNAAQgOAAgHgHgAlRA2IAAgWQALAFAJACQAHACAHAAQAIAAAFgDQADgDAAgGQAAgDgBgDQgCgDgEgCIgOgIQgLgEgFgFQgFgDgEgGQgDgGAAgIQAAgPALgJQAKgJASAAQAJABAIACIARAGIgIASIgPgEQgGgCgGAAQgHAAgDADQgEADAAAGQAAADABACIAFAFIAQAIQAQAFAFAIQAHAHAAAMQAAAPgMAJQgLAJgUAAQgSAAgOgHgAE6A7IAAgzQAAgQgOgBQgKAAgEAHQgFAFAAAPIAAApIgXAAIAAh3IAXAAIAAAnIgBAHIABAAQAIgNASgBQAPAAAIAJQAIAIAAAOIAAA4gAAfA7IAAgzQAAgIgEgDQgCgGgIAAQgIABgEAGQgFAEAAANIAAAsIgVAAIAAgzQgBgIgDgDQgDgGgHAAQgJAAgEAHQgEAFAAAPIAAApIgYAAIAAhVIASAAIAEAMIABAAQADgHAHgDQAHgDAIgBQATABAIANIABAAQACgHAHgDQAHgDAJgBQAOABAIAHQAHAIAAAPIAAA4g");
	this.shape.setTransform(33.9,6.2);

	this.instance = new lib.stomach_label();
	this.instance.setTransform(36.9,9.9,1,1,0,0,0,36.9,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.7,12.3);


(lib.screen1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kara
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A2E25").s().p("AlDCtQgHgBAAgIQgDgnABgTQACgfAQgUIBpiBQAEgEAJgDIAOgFIDZhWQAJgEADAKQADAKgJAEIjOBRQgeANABgBIAAAAIAAAAIh1CPQAAAAABAAQAAgBAAABQABAAAAAAQAAABAAAAIgBANIAAAlQATgSAbgQQA0gbAYgRQAggVA9gtQA3glAvgJQAbgFArAKIBGAOQBxAMA3hBQAHgIAHAIQAHAHgGAHQgoAwhBAKQgwAHhLgNQgpgIgUgDQgkgEgYALQgdALgfATIg4ApQgJAHhVAxQg8AjgWAiQgDAFgFAAIgEgBg");
	this.shape.setTransform(274,217.8,1.304,1.304);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A2E25").s().p("AlBBPIB4iUIDuhdIEdBQQgsA4hWACQgbABghgFIgjgGQgKgBgRgEQgTgFgIgBQg4gIhHAvQgOAIgrAhQgiAagXAOQgWANguAYQgmAXgRAcg");
	this.shape_1.setTransform(274.1,217.8,1.304,1.304);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAEQgCgCAAgCQAAgFAGAAQAHAAAAAFQAAAGgHAAQgBAAgDgCg");
	this.shape_2.setTransform(305.6,258.5,1.304,1.304);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAuQgIgIgCgNQgEgSACgOQAAgSAGgKQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBQACgDAFgDQAMgKAMAKQALAJACAOQADAUgDAPQgFAWgOALQgGAFgEAAQgFAAgGgFg");
	this.shape_3.setTransform(306.6,254.4,1.304,1.304);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAEQgCgCAAgCQAAgGAGABQAHgBAAAGQAAACgCACQgDACgCABQgCgBgCgCg");
	this.shape_4.setTransform(264.1,259.3,1.304,1.304);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAuQgJgJgCgNQgDgUABgMQAAgQAGgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAHgHQAMgJAMAKQAMAIABAPQAHAwgaAVQgGAEgEAAQgFAAgFgFg");
	this.shape_5.setTransform(265.2,255.3,1.304,1.304);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#584233").s().p("AgXAoQAAgHAHgBQAVgCARgMQATgPgIgUQgHgSgaADQgSACgTALQgGAEgEgGQgDgHAGgDQAYgPAaAAQAjgBAGAaQAIAcgWAUQgUASgdACIgCAAQgFAAAAgHg");
	this.shape_6.setTransform(287.8,272.3,1.304,1.304);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#584233").s().p("AhZADQgIgDAFgJQAFgIAIAFQAeAQAxgCQAygCAegTQAIgGAFAJQAFAIgIAGQgjAWg3ACIgHAAQgxAAghgTg");
	this.shape_7.setTransform(286.7,297.7,1.304,1.304);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#584233").s().p("AATAZQgOgkgfgEQgHgBAAgHQAAgIAHABQApAFASAuQADAHgIACIgCABQgFAAgCgGg");
	this.shape_8.setTransform(321.7,232.5,1.304,1.304);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#584233").s().p("AgYAhQgHgCABgHQAGgnAugRQAHgCACAHQACAIgHACQglANgFAgQgBAFgEAAIgDAAg");
	this.shape_9.setTransform(252.3,236.2,1.304,1.304);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B58F67").s().p("AgxBAIAMhnQAUgrAhAMQAjANgBArQgBAigiAhQgUAVgTAAQgOAAgLgKg");
	this.shape_10.setTransform(346,250.5,1.304,1.304);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A2E25").s().p("AmJG3QgbiBAFh/QAGiQAuhpQAehDAkgkQAsgrBAgLQA2gKBMABIBDABQApABAbAIIAvAOQAbAHAUgCQAsgGAbAFQAYAFAWAfQANARASAhQAeAwA1BIIAYAgQASAVACgSIACgSQADgOgBgDIhhkaQgIgXgDgGQgHgLgSgIIhxgzQhCgdgggQQgGgDgWACIgfADQhPAGiiAOQggADgmAqQgUAXgjAtIg6A9QghAlgSAdQgQAcgBA1QAAAeACA2QgFDtABBiQAAAKgKAAQgJAAgBgKQgBh2AEieIAFi7QAAgmAggkICujAIAMgPQAJgJAHgCQAigKA5gDIBdgFIBpgHIAXgDQAOgBAIACQAWAGAsAYIB4A3IAmAPQAXAMAGAPIBaEKQAPArACAMQAFAigSAWQgUAahJhkIhPh8QgTgdgVgLQgWgMghAEQgeAEgVgDQgPgBgbgKQgdgJgOgCQhegNhnAKQhAAHgqAYQgxAbgaA0QglBNgMA9QgmDTAnC5QACAJgJADIgEAAQgGAAgCgHg");
	this.shape_11.setTransform(285.7,233.6,1.304,1.304);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A2E25").s().p("AnKFSIAAimIAIk8QAAgCANgVIAOgXIDAjVQAGgHAJgBQE9gbAGAEQAMAIDbBhQAJAEAEAKIBsE8IgFAsQgEANgPgGQgNgFgJgNIg/hWQgbgogfgzQgbgrgbgJQgPgFgbADQgjAEgIAAQgQgBgYgHIgngMQghgJgqAAQiIgBgrAIQhfAQgrBCQgLARgMAZIgUAtQgdA/gKCMQgLCdAcB6g");
	this.shape_12.setTransform(285.7,233.6,1.304,1.304);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B58F67").s().p("AlLFwQhsiIgNjoQgNjkCLiWQCEiODCABQDfABB/CbQB5CUgUDXQgUDkhtCLQh3CZjBAAQjcAAh5iYg");
	this.shape_13.setTransform(285.1,247.9,1.304,1.304);

	this.instance = new lib.Path_8_3();
	this.instance.setTransform(285.3,249.6,1.304,1.304,0,0,0,45.5,52.1);
	this.instance.alpha = 0.102;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A2E25").s().p("AgugKQAFAAAtgQQAtgKgCAVQgBAIgjAHQghAJAAAVg");
	this.shape_14.setTransform(319.2,178.6,1.304,1.304);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A2E25").s().p("AgoAaIAkgtQAcgiAOAKQALAIgaAjIggAug");
	this.shape_15.setTransform(314.9,172.4,1.304,1.304);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A2E25").s().p("AgMAQIAHgYQAFgUAGABQAIABgBAZQAAALgCASg");
	this.shape_16.setTransform(309.3,173.6,1.304,1.304);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B58F67").s().p("AhNCmQgVghgBhOQAHgOAFgeQALg6gEhQQgCgsAbgSQAYgQAjAHQAjAHAYAUQAaAWgGAWQgLAnANBKQAGAiAJAdQAABSgVAhQgXAlg4AAQg3AAgWgjg");
	this.shape_17.setTransform(286.7,315.9,1.304,1.304);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C966CC").s().p("ABXBNQgPhAgWgcQgWgbgygdQhSgohBghIhxhzQEGgTCEB+QB3BtA0EEIieAtIgmi5g");
	this.shape_18.setTransform(325.1,356.4,1.304,1.304);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B58F67").s().p("AgNBZQgOgJgGgVQgDgHAAgHQgEAGgHADQgMAGgPgHQgPgIgFgOQgGgQALgPIAKgLQAHgHACgHQACgGgDgLQgCgNAAgEIBxggQAVAGAPAMQAWAQgBATQAAARgSADQgOACgJgGQAIAHAHAOQAKARgBAMQABAagWADQgOABgIgJQACANgNAPQgOAPgMAAQgGAAgHgDg");
	this.shape_19.setTransform(353.4,396.6,1.304,1.304);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C966CC").s().p("AhGDMQhah8gohQQgihDAKhOQAKhLAvg/QAwhBBJghQBNgjBaAKIgSBqQhqApgoBTQgkBJAfAxQApA/BCBVQA9BNBrB7IiDBzQhQhUhWh5g");
	this.shape_20.setTransform(260.4,376.8,1.304,1.304);

	this.instance_1 = new lib.Path_16_1();
	this.instance_1.setTransform(263.9,385,1.304,1.304,0,0,0,21.6,35.7);
	this.instance_1.alpha = 0.102;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B58F67").s().p("AAtBqQgKgEgNgOQgKgKgEgJQACAKgGALQgGAPgOgFQgRgFgGgXQgFgRABgUIhUhWIA/g4IBUA1IANAHQAJAFAGABQAGAAAJgDIANgGQASgFAMAKQAKAJABAPQACAPgJAHQgFAFgGACQAFACAGAEQAPAMADAPQADAVgaALQgSAHgKgGQAFAKgGALQgGANgNAAQgFAAgHgCg");
	this.shape_21.setTransform(284.4,424.5,1.304,1.304);

	this.instance_2 = new lib.Path_18_1();
	this.instance_2.setTransform(285.7,424.5,1.304,1.304,0,0,0,12.8,10.7);
	this.instance_2.alpha = 0.102;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2B2B2B").ss(0.5).p("AgGgPIANAf");
	this.shape_22.setTransform(341.8,411.1,1.304,1.304);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgPIAMAf");
	this.shape_23.setTransform(346.7,409,1.304,1.304);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgPIAMAf");
	this.shape_24.setTransform(351.6,406.9,1.304,1.304);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgPIAMAf");
	this.shape_25.setTransform(356.5,404.9,1.304,1.304);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgPIAMAf");
	this.shape_26.setTransform(361.4,402.8,1.304,1.304);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#2B2B2B").ss(0.5).p("AgGgPIAMAf");
	this.shape_27.setTransform(366.3,400.7,1.304,1.304);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#2B2B2B").ss(0.5).p("AgGgPIAMAf");
	this.shape_28.setTransform(371.2,398.6,1.304,1.304);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2B2B2B").ss(0.5).p("AA/gZIh9Az");
	this.shape_29.setTransform(322.9,422.7,1.304,1.304);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B2B2B").s().p("AgWgkIANgFIAgBOIgNAFg");
	this.shape_30.setTransform(393,393.3,1.304,1.304);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B2B2B").s().p("Aghg1IATgIIAwB0IgTAIg");
	this.shape_31.setTransform(377.9,399.7,1.304,1.304);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#2B2B2B").ss(0.5).p("ACahwIlNCMQgIADgCAIQgDAIADAIIAVAxQADAHAHADQAHACAHgDIFOiMg");
	this.shape_32.setTransform(354.8,409.2,1.304,1.304);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AidBxQgHgDgDgHIgVgxQgDgIADgIQACgIAIgDIFNiMIAkBVIlOCMQgEACgFAAIgFgBg");
	this.shape_33.setTransform(354.7,409.3,1.304,1.304);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B2B2B").s().p("Ag6AuQgKgEgEgKIAAABQgEgKAEgKQAFgKAKgDIBwgvIAUAvIhxAuQgFACgFAAQgFAAgFgCg");
	this.shape_34.setTransform(384.4,396.7,1.304,1.304);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C966CC").s().p("AkyILIBXwWIG3ACIBXJOQgwAMg4AUQhxAngvAnQgkAdAGBoQADA5gBATQgCAmgQARQgxAziEAUQg+AKg2AAIgGgBg");
	this.shape_35.setTransform(290.6,396.7,1.304,1.304);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D5D858").s().p("AhlBhQg3gCgHgtQgIgrArgXQA9gkA/gqICpgDQADAogMAZQgJAUgVANQh+BhhfAAIgGgBg");
	this.shape_36.setTransform(261.7,616.7,1.304,1.304);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D5D858").s().p("AgOBNQgmgPhGgqQgUgLgJgVQgJgXAAgsICogPQAUALAjAdQAgAbAaAMQAtASgFAoQgGApg2AIQgOADgPAAQgpAAgtgSg");
	this.shape_37.setTransform(328.9,615.2,1.304,1.304);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#353535").ss(24).p("AgnorQAHC5AjGgQAjGHACB3");
	this.shape_38.setTransform(313.6,533.1,1.304,1.304);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#353535").ss(24).p("AAJosQADC6gMGgQgMGJAFB2");
	this.shape_39.setTransform(273.4,533,1.304,1.304);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#353535").s().p("Ai2B7QhggGgMgzQgFgUAThJIAUhGQBcgBDCgIQDigJAegIIAGBOQADBQgQARQgjAlhIAOQgrAIhtAGQiBAHgyAAIgXgBg");
	this.shape_40.setTransform(292.3,452.2,1.304,1.304);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B58F67").s().p("AjzA5QALjyAFABQAFAADcg5IDZg6QAEADASEAIASD+In9BWQAFh6AGh5g");
	this.shape_41.setTransform(296.4,424,1.304,1.304);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3A2E25").s().p("AjIJgQhZgQiIgkQgGgBgBgFQgmjCgMiLQgRi3ASiWQATifA2hpQBBiAB7hAQCThMB8AYQBJANAzAhQAqAcA6AGQAPABAQAJQB1BEAsCLQAkB0gSCYQgBAKgKAAQgKAAABgKQAMhlgIhJQgKhfgshFQgzhQg5ghQgTgMgtgIQgqgIgWgOQhlhCh7AMQh2ALhmBKQhcBDgxBxQgpBdgOCEQgWDNAkD/QALBLAKA1IAFAlQAEAdABABIBUAUQBuAZA6AKQBfAQBJABQBKABBYgNQBAgJBggVQAxgLA+gQIATgEQgEABABgsIADgzQAIiTAAknQAAgHAKAAQAKAAAAAHQAAC9gCBUQgDCYgKB4QgBAIgHABQiAAjhXARQh5AWhjABIgEAAQhjAAh7gXg");
	this.shape_42.setTransform(284.9,249.3,1.304,1.304);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3A2E25").s().p("AADJtQhlgDitgkQhWgShCgRQgvjrgIi4QgLjgAsioQAXhYAohAQA0hSBjg5QBjg5BlgHQBvgHBZA4IAdATQARAKAOADQAIABAPABIAWABQAWAFAbATQAzAlAlA1QAlA1ARA/QAcBkgTCSIgBA9QAADAgCBZQgDCPgKB5QhJAThdATQisAkhmAAIgPAAg");
	this.shape_43.setTransform(285.1,249.3,1.304,1.304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_2},{t:this.shape_21},{t:this.instance_1},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// title
	this.instance_3 = new lib.titlescreen_txt();
	this.instance_3.setTransform(310.7,55.3,1,1,0,0,0,300.2,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-13.3,808.5,672.8);


(lib.replay_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28C5A4").s().p("Ag+AkIBUhgIApB5g");
	this.shape.setTransform(29.6,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#28C5A4").ss(4.7,2).p("ABHhQQgfgcgoAAQgsAAggAgQggAgAAAsQAAAsAgAgQAgAgAsAAQAkAAAdgWQAdgWAKgj");
	this.shape_1.setTransform(21.8,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AicCdQhChBAAhcQAAhbBChBQBBhCBbAAQBcAABCBCQBBBBAABbQAABchBBBQhCBChcAAQhbAAhBhCg");
	this.shape_2.setTransform(22.4,22.3);

	this.instance = new lib.Path_2_4();
	this.instance.setTransform(22.4,25.3,1,1,0,0,0,22.4,22.3);
	this.instance.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.7,47.7);


(lib.pancreas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C531").s().p("AgeBiQhIgNgxguQg2gwAChGQABgWAXAAQAWAAgBAWQgCA0AqAkQAkAiA3AKQA9ALAygZQA1gaAVg4QAIgVAWAGQAVAGgHAVQgbBHhBAkQgvAag1AAQgSAAgWgEg");
	this.shape.setTransform(162.9,60.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CAAD2E").s().p("Ag3A4QgXgXgBghQABggAXgXQAYgYAfAAQAhAAAXAYQAYAXgBAgQABAhgYAXQgXAYghAAQgfAAgYgYg");
	this.shape_1.setTransform(183.7,28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CAAD2E").s().p("Ag3A4QgYgXAAghQAAggAYgXQAXgXAgAAQAhAAAXAXQAXAXABAgQAAAhgYAXQgXAXghAAQggAAgXgXg");
	this.shape_2.setTransform(144.1,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiECFQg4g3ABhOQgBhNA4g3QA3g3BNAAQBOgBA3A4QA3A3ABBNQgBBOg3A3Qg3A4hOAAQhMAAg4g4g");
	this.shape_3.setTransform(184.8,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g4BNAAQBOAAA3A4QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_4.setTransform(143.6,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6D84C").s().p("Ah8CzQg8gygchIQgUgzAXhFQAUhAAlgnQAfghBKgQQBDgPAjAMQA7ATAxA4QAyA6AHA3QAKBcgfAzQgoBBh8AnQgYAHgWAAQg6AAg3gtg");
	this.shape_5.setTransform(143.6,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6D84C").s().p("Ag+DNQg+gTgmglQgggegPhIQgPhBAMgjQASg4A3gxQA4gxA2gGQBZgKAxAeQBAAnAmB6QAZBOg+BMQgwA7hGAbQgYAJgbAAQgeAAglgMg");
	this.shape_6.setTransform(184.4,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCED65").s().p("AvMGnQhjgNhJgvQgvgfgNg/IgLg7QgIglgOgeQgVgsAZhBQAPglArhCQAWgiAFgNQAIgUgCggQgCgZARgmQARglAUgSQAvgrAogRQApgRA0ADQARguBMgNQBDgMA0ASQAgAKAkADIBEADQAhABBQgPQBSgPAgABQAjABAuAjQA3ArAXAIQA3ATAdAGQApAIAugEIBOgHQAwgCAXAOQALAHAMAbQAMAaAOAGQAXAKAmACIBAADQCmAPAlAHQBKANAsAQQArAPA9AkQATALBBAtQA7ApAaAOQAWAKBGApQBBAlAgACQAVABBGgLQA6gDgDAiQgEA1hFAsQgqAbgyAPQgRAFg2AZQgrAUgcADQgZACgtAJIhEANQgvAHg1ACQg+ACglgHQgXgEg+gUQg5gTgcgEQgygGhIAFQhLAGgtAPQg6AYgUAFQgdAIgxgLQghgHgrgnQg4gvgSgJIhHgmQgwgZgXgCIhPAHQhIAHgkgIQhKgagxgPQhbgdgmARQgRAHACBLQACBVgFAKQgJAUgmAiQgzArgKALQgfAjhHAAQgWAAgagDg");
	this.shape_7.setTransform(131.4,51.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6D84C").s().p("AvLH8QhsgQhKg6Qg5gsgmhJQgZgygkhsQgTg5AihRQAUgxA2hSQAcgrAGgRQALgZABgnQABglAGgVQAIgaAWgVQA4g4AvgWQAxgZA4ADQAXg5BXgMQBJgLA6AXQBZAjBIADQAjACA5gUQA5gVAjABQApAABBAoQBXA1AOAGQAmAPBFgJQBQgKAbADQBnANAtAiQAKAIAWAbQAUAZAPAIQAYANAqACIBFACQBvAMAvAJQBJAPBBAgQAwAZBKAzQAYARA2ASQA4ATAYAPIBLAxQAuAYAkACIBjAHQA+AMgGAtQgKBDhPA4QgyAjg4ASQgPAGhHAhQg2AZggAEQgbAEgyALQg7AOgRADQg1AJg5ADQhEADgogIQgZgGhBgZQg9gXgegFQgxgGgfAGQgRAEg9AXQhCAegXAHQggAKg0gNQhPgUhwhFQgugfgbgRQgzgfgZgCIhHAQQhAAOgmgJQgRgEgbgRQgfgUgRgKQg8gjgqAVQgUAJgDBGQgEBRgGANQgNAagtAqQg7A3gMAOQgmAthPAAQgYAAgbgEg");
	this.shape_8.setTransform(131.7,52.4);

	this.instance = new lib.Path_2_5();
	this.instance.setTransform(132.7,56.4,1,1,0,0,0,131.7,51.2);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264.4,107.7);


(lib.meter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{bot_up:98,mid_up:130,top_up:165,high:240,high_down:313,top_down:388,mid_down:424,bot_down:456});

	// timeline functions:
	this.frame_99 = function() {
		playSfx("up_long");
	}
	this.frame_165 = function() {
		if (exportRoot.getCurrentLabel() == "screen14" || exportRoot.dropCnt == 2) {
			this.gotoAndPlay("top_down");
			playSfx("dn_med");
		} else {
			change_storytext("screen15a16a");
			read_storytext("screen15a16a");
		}
	}
	this.frame_240 = function() {
		this.parent.syringe.mouseEnabled = true;
		begin_pulseAlt(this.parent.syringe);
		addHandHover(this.parent.syringe);
		this.stop();
	}
	this.frame_313 = function() {
		playSfx("dn_xlong");
	}
	this.frame_423 = function() {
		if (exportRoot.getCurrentLabel() != "screen14") { exportRoot.btn_replay.visible = true; }
	}
	this.frame_424 = function() {
		this.stop();
	}
	this.frame_425 = function() {
		playSfx("dn_short");
	}
	this.frame_456 = function() {
		if (exportRoot.getCurrentLabel() == "screen14") {
			change_storytext("screen14a");
			read_storytext_call("screen14a", function(e) {
				e.target.removeAllEventListeners("complete");
				exportRoot.btn_replay.visible = true;
			});
			this.parent.play();
		} else {  // screens 15 & 16
			this.parent.food.mouseEnabled = true;
			begin_pulseAlt(this.parent.food);
			addHandHover(this.parent.food);
		}
		this.gotoAndStop("bot_up");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(66).call(this.frame_165).wait(75).call(this.frame_240).wait(73).call(this.frame_313).wait(110).call(this.frame_423).wait(1).call(this.frame_424).wait(1).call(this.frame_425).wait(31).call(this.frame_456).wait(100));

	// title
	this.instance = new lib.glucmeterlabel();
	this.instance.setTransform(120.7,-44.8,1,1,0,0,0,130.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(556));

	// markers
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AnBAAIODAA");
	this.shape.setTransform(166.5,389.4,1.04,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").p("AnBAAIODAA");
	this.shape_1.setTransform(166.5,325.4,1.04,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AnBAAIODAA");
	this.shape_2.setTransform(166.5,260.4,1.04,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").p("AnBAAIODAA");
	this.shape_3.setTransform(166.5,196.4,1.04,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("AnBAAIODAA");
	this.shape_4.setTransform(166.5,132.4,1.04,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("AnBAAIODAA");
	this.shape_5.setTransform(166.5,67.4,1.04,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(556));

	// top border
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2B").s().p("EgFsAj0Qg1AAgkglQgmglAAg0MAAAhDqQAAg0AmgmQAkglA1AAILaAAQA0AAAlAlQAlAmAAA0MAAABDqQAAA0glAlQglAlg0AAgEgGqgiyQgaAZAAAlMAAABDqQAAAkAaAaQAZAaAlAAILaAAQAkAAAagaQAagaAAgkMAAAhDqQAAglgagZQgagagkAAIraAAQglAAgZAag");
	this.shape_6.setTransform(167.2,228.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(556));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgFsAj0Qg1AAglglQglglAAg1MAAAhDqQAAg0AlglQAlglA1AAILZAAQA1AAAlAlQAlAlAAA0MAAABDqQAAA1glAlQglAlg1AAg");
	mask.setTransform(167.2,228.4);

	// Layer 5
	this.instance_1 = new lib.marker();
	this.instance_1.setTransform(167.7,490.9,1,2.143,0,0,0,63.4,176.6);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:28.64,y:475.9},262).to({_off:true},1).wait(29).to({_off:false},0).to({scaleY:2.14,y:490.9},263).wait(1));

	// bg
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2B").s().p("EgFsAj0Qg1AAglglQglglAAg0MAAAhDqQAAg0AlgmQAlglA1AAILZAAQA1AAAlAlQAlAmAAA0MAAABDqQAAA0glAlQglAlg1AAgEgGrgiyQgaAZAAAlMAAABDqQAAAkAaAaQAaAaAlAAILZAAQAlAAAagaQAagaAAgkMAAAhDqQAAglgagZQgagaglAAIrZAAQglAAgaAag");
	this.shape_7.setTransform(167.2,228.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E4E9EA").s().p("EgFsAjOQglAAgagaQgagaAAglMAAAhDqQAAgkAagaQAagaAlAAILZAAQAlAAAaAaQAaAaAAAkMAAABDqQAAAlgaAaQgaAaglAAg");
	this.shape_8.setTransform(167.1,228.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(556));

	// labels
	this.instance_2 = new lib.TARGETRANGE();
	this.instance_2.setTransform(55.1,229.4,1,1,0,0,0,22.9,15.1);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.DANGERTOOLOW();
	this.instance_3.setTransform(55.6,421.5,1,1,0,0,0,28.9,14.3);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.DANGERTOOHIGH();
	this.instance_4.setTransform(55.2,36.2,1,1,0,0,0,30.2,14.3);
	this.instance_4.alpha = 0.602;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F12E44").s().p("AwbCyIAAljMAg3AAAIAAFjg");
	this.shape_9.setTransform(105.2,35.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F12E44").s().p("AufCxIAAlhIc/AAIAAFhg");
	this.shape_10.setTransform(92.8,420.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2DB828").ss(2).p("AgsJOIBPAAIAAybIhPAA");
	this.shape_11.setTransform(226,226.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2DB828").ss(2).p("AgijMIAAGPIBPAA");
	this.shape_12.setTransform(107,266.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2DB828").ss(2).p("AgiDcIAAmtIBPAA");
	this.shape_13.setTransform(107,188.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2DB828").s().p("AufCvIAAldIc/AAIAAFdg");
	this.shape_14.setTransform(92.8,227.6);

	this.instance_5 = new lib.Path_3();
	this.instance_5.setTransform(95.8,423.4,1,1,0,0,0,92.8,17.5);
	this.instance_5.alpha = 0.141;

	this.instance_6 = new lib.Path_4_2();
	this.instance_6.setTransform(95.8,38.8,1,1,0,0,0,92.8,17.5);
	this.instance_6.alpha = 0.141;

	this.instance_7 = new lib.Path_5();
	this.instance_7.setTransform(95.8,230.8,1,1,0,0,0,92.8,17.5);
	this.instance_7.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(556));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-62.5,261.1,520.2);


(lib.lunch_drag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(22.4,27.3,1,1,0,0,0,2.2,3.8);
	this.instance.alpha = 0.281;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C9830").s().p("Ag6AWQAEgXAFgJQAIgRAXgQQAVgRA0gXQAPAogCAiQgEApgaAYQgTARgdAGQgVAEgkABg");
	this.shape.setTransform(42.7,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF292D").s().p("ABlDeIgagHQgOgEgJgIQgTgPgIgDQgNgEgXAMIgnARQgiAJgigSQgigTgMgiQgDgKACgfQACgfgCgKQgFgZgbgvQgagvgFgcQgEgYAGgYQAGgZAOgTQAOgTAWgMQAWgLAXgBQAiAAAvAbQAOAEAhgOQAugSANgCQA+gLAsAVQAZAMARAVQASAXACAbQADAcgPAlIgdA9QgUA0ADA2QAEAygBAHQgCAhgSAPQgPANgUAAQgJAAgKgCg");
	this.shape_1.setTransform(38.8,43);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A3C1D").s().p("AASAyQAHgPgLghIgHgLQgFgJgNgJQgUgLgEgEIgBgCIABgCIAIgHIAEgCQABAAAAAAQABAAAAAAQAAAAABABQAAAAABABIAWASQAZAUAGAPQABAFABANIABAmg");
	this.shape_2.setTransform(32.4,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBAC6B").s().p("AAAAFQgEgBAAgEIABgBQABgFACACQAFABgBADIAAACQAAADgDAAIgBAAg");
	this.shape_3.setTransform(127.4,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBAC6B").s().p("AgDAAQAAgDADAAQAFAAgBADQAAAFgEAAQgDAAAAgFg");
	this.shape_4.setTransform(123.8,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBAC6B").s().p("AgEAAQABgDADAAQAEAAAAADQAAAFgEAAQgDAAgBgFg");
	this.shape_5.setTransform(131.8,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBAC6B").s().p("AAAAFQgEgBAAgEIABgBQABgEACABQAFABgBADIAAACQAAADgDAAIgBAAg");
	this.shape_6.setTransform(135.9,23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CBAC6B").s().p("AAAAFIgCgBQgFgBABgDQABgEAFABIADAAQAFABgCACQAAAFgEAAIgCAAg");
	this.shape_7.setTransform(120.6,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CBAC6B").s().p("AgEAAQAAgDAEAAQAEAAAAADQAAAFgEgBQgEABAAgFg");
	this.shape_8.setTransform(125.6,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBAC6B").s().p("AgCADIgBgCQgDgCAEgCQADgDACAEIACACQACACgEADIgDAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(108.4,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBAC6B").s().p("AgDADQgDgDAEgCIACgCQACgCADAEQACACgEADIgCABIgBACQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_10.setTransform(118.5,20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CBAC6B").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAFgEAAQgDAAAAgFg");
	this.shape_11.setTransform(112.9,25.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBAC6B").s().p("AgEAAQAAgEAEAAQAEAAAAAEQAAAEgEAAQgEAAAAgEg");
	this.shape_12.setTransform(105.9,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CBAC6B").s().p("AgCADIgBgCQgDgCAEgCQADgDACAEIACACQACACgEACIgDABQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_13.setTransform(116.2,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CBAC6B").s().p("AgEAAQABgDADAAQAEAAAAADQAAAFgEAAQgDAAgBgFg");
	this.shape_14.setTransform(135.8,55.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CBAC6B").s().p("AgFAEQgEAAAAgEQAAgEAEAAIAKABQAGAAAAADQAAAFgGAAg");
	this.shape_15.setTransform(131.2,62.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CBAC6B").s().p("AAAAEIAAAAQgGAAACgEQABgEADAAIABABQAFABgBACQgBAFgEAAIAAgBg");
	this.shape_16.setTransform(120.4,56.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CBAC6B").s().p("AgEAAQABgEADAAQAEAAAAAEQAAAEgEAAQgDAAgBgEg");
	this.shape_17.setTransform(115.1,61.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CBAC6B").s().p("AAAAGQgEgBAAgFIABgBQABgFACABQAFACgBADIAAADQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAIgBAAg");
	this.shape_18.setTransform(124,61.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CBAC6B").s().p("AABAFIgDgBQgFgBABgDQABgEAFAAIADABQAFABgBADQgBAEgEAAIgBAAg");
	this.shape_19.setTransform(130.4,57.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBAC6B").s().p("AgEAAQAAgDAEAAQAEAAAAADQAAAEgEABQgEgBAAgEg");
	this.shape_20.setTransform(130.2,53.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CBAC6B").s().p("AgDAAQAAgDADgBQAEABAAADQAAAEgEABQgDgBAAgEg");
	this.shape_21.setTransform(133.5,48.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBAC6B").s().p("AAAAEIgCAAQgEgBABgDQABgEAEAAIACABQAFABgBACQgBAFgEAAIgBgBg");
	this.shape_22.setTransform(131.2,42.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBAC6B").s().p("AgBAEIgDgEQgDgCAEgDQADgCADAEIACADQADACgEADIgEABQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_23.setTransform(134.4,37.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CBAC6B").s().p("AgEACQgBgDAEgDQACgCADAEQACACgCABQAAADgEABIAAAAQgDAAgBgDg");
	this.shape_24.setTransform(140.6,30.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CBAC6B").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAFgEAAQgEAAABgFg");
	this.shape_25.setTransform(143.1,25.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CBAC6B").s().p("AgFACQgDgCAFgCQADgCACAAQAFAAAAAEQAAAEgFAAIgCAAIgBABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBg");
	this.shape_26.setTransform(143.1,20.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CBAC6B").s().p("AgEAEQgDgEAEgBIADgDQADgDACAEQACADgDADIgEACIgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_27.setTransform(87.6,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBAC6B").s().p("AgEAEQgEgCABgCQABgFAFABQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAEgCADAEQACACgEACIgFACIgEgBg");
	this.shape_28.setTransform(92.6,20.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CBAC6B").s().p("AAAAEIgBAAQgFgBABgDQABgEAEAAIADABQAEABgBACQgBAFgEAAIgBgBg");
	this.shape_29.setTransform(88.2,22.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CBAC6B").s().p("AAAAEIgBAAQgFAAACgEQABgEADABIACAAQAEABgBACQgBAEgDAAIgBAAg");
	this.shape_30.setTransform(92,30.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CBAC6B").s().p("AACAFIgGgCQgFAAACgDQABgFAFABIAGABQAFABgCADQgBAEgDAAIgCAAg");
	this.shape_31.setTransform(94.1,37);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CBAC6B").s().p("AgBAEIgDgEQgDgCAEgCQADgDADAEIACADQADADgEACIgDABQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_32.setTransform(113.3,47.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CBAC6B").s().p("AgHAEQgDgEAEAAIAIgFQAEgDADAFQACADgEABIgHAFIgDABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBg");
	this.shape_33.setTransform(106.8,52.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CBAC6B").s().p("AgIAAQAAgDAFAAIAHgBQAFAAAAAEQAAAEgFAAIgHABIgBAAQgEAAAAgFg");
	this.shape_34.setTransform(104.7,58.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CBAC6B").s().p("AgEAAQAAgDAEAAQAEAAAAADQAAAEgEABQgEgBAAgEg");
	this.shape_35.setTransform(98.3,57.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CBAC6B").s().p("AgFABQgDgCAFgDQADgCACAEIAAgBQAFAAAAADQAAAFgFAAIAAABQgDAAgEgFg");
	this.shape_36.setTransform(95.2,54.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CBAC6B").s().p("AgCAHQgEgDACgEIADgEQABgEADACQAEADgCADIgDAFQAAABAAAAQgBABAAAAQgBABAAAAQAAAAAAAAIgCgBg");
	this.shape_37.setTransform(95.7,49.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CBAC6B").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAFgEAAQgDAAAAgFg");
	this.shape_38.setTransform(99.1,42.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CBAC6B").s().p("AgEAAQAAgDAEAAQAEAAAAADQAAAEgEABQgEgBAAgEg");
	this.shape_39.setTransform(98.6,42.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CBAC6B").s().p("AAAAEIgBAAQgEgBABgDQABgEADAAIACABQAFABgCACQgBAFgEAAIAAgBg");
	this.shape_40.setTransform(90,41.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CBAC6B").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAFgEAAQgDAAAAgFg");
	this.shape_41.setTransform(96.3,70.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CBAC6B").s().p("AAAAEIgBAAQgEAAABgEQABgEADABIACAAQAFABgCACQgBAEgEAAIAAAAg");
	this.shape_42.setTransform(94,68.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CBAC6B").s().p("AADAGQgDgDgEAAQgFgBAAgDQAAgFAFABQAFAAAHAEQAEABgDAEQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_43.setTransform(83.2,63.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CBAC6B").s().p("AgHACQgCgDAFgBIAGgCQAFgBACAEQABADgFABIgHADIgBAAQgDAAgBgEg");
	this.shape_44.setTransform(87.1,65.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CBAC6B").s().p("AAHAHIgQgFQgEgBABgDQABgFAFABIAQAFQAEABgBAEQgBADgEAAIgBAAg");
	this.shape_45.setTransform(85.5,67.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CBAC6B").s().p("AgCADIgCgDQgCgEAEgCQACgDADAEQADAFAAADQAAAFgFAAQgDAAAAgFg");
	this.shape_46.setTransform(91.6,68.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CBAC6B").s().p("AgDAEQgEgDAEgCIACgCQACgEAEAEQADADgDACIgDACQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_47.setTransform(114.1,55.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CBAC6B").s().p("AgCAEIgCgFQgCgEAFgCQADgBABAFIACAFQACAEgFACIgCAAQgBAAgBgEg");
	this.shape_48.setTransform(123.4,50.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CBAC6B").s().p("AAFAHIgLgFQgFgCACgDQABgFAFACIAKAFQAFABgBAEQgBAEgDAAIgCgBg");
	this.shape_49.setTransform(121.5,45.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CBAC6B").s().p("AAAAHQgEgBAAgFIABgDQABgFADACQAFABgBAEIgBADQgBAEgDAAIAAAAg");
	this.shape_50.setTransform(121.9,40.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CBAC6B").s().p("AAAAGQgEgBAAgFIABgCQABgEADABQAFABgBAEIgBACQgBAEgDAAIAAAAg");
	this.shape_51.setTransform(129.2,33.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CBAC6B").s().p("AAAAFIgEgCQgDgDACgCQADgEACACIAFACQADACgCADQAAABgBAAQAAABgBAAQAAABgBAAQgBAAAAAAIgCgBg");
	this.shape_52.setTransform(131.9,26.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CBAC6B").s().p("AAAAGIgEgEQgEgCADgDQACgFADADIAFAEQAEABgDAFQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_53.setTransform(129.2,21.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CBAC6B").s().p("AgEAAQABgDADAAQAEAAABADQgBAFgEAAQgDAAgBgFg");
	this.shape_54.setTransform(120.6,16.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CBAC6B").s().p("AgHAGQgBgKAJgGQAEgCADAFQACAEgEACQgFABAAAGQAAAFgDAAQgFAAAAgFg");
	this.shape_55.setTransform(113,18);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CBAC6B").s().p("AgDADQgDgDAEgCIACgBQACgDACAEQADACgEADIgCACIgBABQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_56.setTransform(120.3,24.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CBAC6B").s().p("AgJAFQgEgBAAgEQAAgEAEABIASAAQAGAAAAADQAAAFgGAAg");
	this.shape_57.setTransform(122.3,28.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CBAC6B").s().p("AADALIgMgOQgDgDADgEQAEgEADAEIAMAOQAEADgEAEIgEACQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_58.setTransform(109.3,28.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CBAC6B").s().p("AgDAFQgFAAAAgFQAAgDAFAAIAHAAQAFgBAAAEQAAAEgFABg");
	this.shape_59.setTransform(114.5,33.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CBAC6B").s().p("AgMABQAAgDAFgBIAPgCQAFAAAAAFQAAADgFAAIgPACIgCABQgDAAAAgFg");
	this.shape_60.setTransform(108.5,38.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CBAC6B").s().p("AAAAGIAAgDIgEgBQgEgBABgDQABgFAFABQADABAEAEQADABgBAEIgCACIgDABIgDgBg");
	this.shape_61.setTransform(102.1,33.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CBAC6B").s().p("AAFAHIgMgFQgEgCABgDQABgFAFACIAMAGQAEAAgBAEQgBAEgDAAIgCgBg");
	this.shape_62.setTransform(98,28);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CBAC6B").s().p("AgHAFQgEgEAEgBQAGgFAFgBQAFAAABAEQABADgFABQgFABgBACIgEACQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_63.setTransform(100.3,23.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CBAC6B").s().p("AAAAGIgGgGQgDgCADgDQAEgEACAEIAHAFQADADgDADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_64.setTransform(105.4,19.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CBAC6B").s().p("AAPAFQgOgCgPABQgFABgBgFQABgDAFgBQAPgBAOACQAGAAAAADQAAAFgFAAIgBAAg");
	this.shape_65.setTransform(100.1,16.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CBAC6B").s().p("AgDADQgDgDAEgCIACgCQACgCACAEQADACgEADIgCABIgBACQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_66.setTransform(97.2,14.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EED18D").s().p("AAKEuQgzgFhNgNQhFgNglgOQg4gXgdgpQgdgqAHhDIAWhvQAIgtABgUQACglgOgaQgGgMgbgYQgXgVgGgSQgThHCeAFIADgDQAdgJAqAHIBIAKQASACA3AAQArABAcADQAhAFApAOIBHAdIBBAZQAoAQAZAMQArAXAEAgQADAjgtAiQgeAXgQAUQgVAXgJAfQgIAZAAAjIAAA+QgBBEgbAhQgaAhg3AHQggAFglAAQgeAAghgDgAk1kcQg4AJgBAeQgBAWAZAXQAhAfAEAGQAWAjgIA+QgEAjgQA+QgJAygCAOQgDAlAKAbQARAuAwAdQAqAYBDAOQAjAHBPAIQA9AGAzAAQArAAAUgEQAkgGAVgTQAigdAChDQgDhMAFggQAIgsAWgfQAKgPAQgOIAfgZQAmgcgBgdQgCgagigUQgUgLgggNIg2gVIg2gWQgggNgXgIQgygRhCgCIg4AAQghgBgYgDIg6gKQgfgEgXAHQAAAEgFAAIgagBQghAAgUADg");
	this.shape_67.setTransform(115.1,37.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EED18D").s().p("AiNEUQhIgOgngXQgbgQgTgWQgUgZgGgcQgFgWACgbQACgRAGggIAQhUQAJgsgBgZQgBgmgSgYQgGgJgOgMQgQgNgGgHQgKgNgEgOQgDgRAHgMQAJgNAbgGQAzgLAxACIAAgDQAWgIAfAEQATACAkAHQAfAFBIABQBAAAAkAIQAZAGA4AWICTA8QA9AYACAmQABAYgVAVQgHAHgMAJIgUAPQgmAcgRAuQgQAtADA0QAFBGgTAuQgOAigoAPQgaAKgvABIgYABQhnAAh2gYg");
	this.shape_68.setTransform(115.1,37.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CBAC6B").s().p("AAmFOQg1gGhdgUQhZgUgqgPQhNgdgkgsQgngvAIhMQAShVAEgrQAFgwgJgdQgFgTgOgMQgTgNgMgKQgVgSgCgbQgBgmAggcQAbgWAqgKIAFgBQCzgXCvAeQC1AgCdBUQAvAYAVAhQAbArggAnQgLAPgnAVQgiATgMAWQgLAYgDArQgDA8gCAKQgLA8gbAsQghA2gzAQQgnANg2AAQgaAAgcgDgAlLkoQgfAHgVAPQgeAVAFAbQADAOAVAPQAbASAFAHQAYAhgBA2QAAAjgMA3QgNA9gBAUQgDAvASAgQAWAoBCAbQB5AzCPAOQBcAKAsgIQBIgOAgg/QATglAGhFQAHhNALgeQALgeAagTQANgJAjgSQAcgSABgZQAAgfgvgdQgLgGg/gdQg/gdg6gSQing2iwAAQhMAAhPAKg");
	this.shape_69.setTransform(114.9,38.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CBAC6B").s().p("Aj1D+QgtgSgagUQgkgcgMgnQgKgiAHgzIARhVQAKgxgGgoQgGgwgdgTIgSgLQgLgGgGgHQgPgXAPgfQAUgoA+gNQC2gZCyAhQC0AgCiBYQAcAPAOAUQATAZgHAbQgGAagjATQgsAYgKALQgSATgGAmIgGBDQgEBAgYAzQgbA6gsAVQgdAPg3AAIgGAAQi1AAishCg");
	this.shape_70.setTransform(114.9,37.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#57BB6F").s().p("Ag2BVQgKgLAKgKIA6g6IANgKQAJgIACgGQAFgNgHgNQgEgGgOgNQgIgKAIgLQALgLAKAKQAsApgSAlQgEAJgLALIgTASIg2A2QgFAFgFAAQgFAAgGgFg");
	this.shape_71.setTransform(148.3,39.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#57BB6F").s().p("AAShKQAQAPAFAJQAJAQgEAQQgEAKgOANIhGBGg");
	this.shape_72.setTransform(148.3,39.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#57BB6F").s().p("ABgBGQgggNgZgDQgagCgfAHQgnAJgmgMQgmgNgjghQgXgWgggsQgIgLANgIQANgHAIALQAcAnAUAUQAeAcAgALQAZAIAhgHQAugKAHAAQAWgBAbALIAuAUQAsANAVgTQAVgTgKggQgFgSgUggQgHgNANgHQANgIAHANQAWAjAGAcQAJAkgTAcQgTAbgkADIgHAAQgaAAgegNg");
	this.shape_73.setTransform(114.1,68.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#57BB6F").s().p("AByA+IgsgUQgagLgUABQgLABgPAFIgcAIQg0AKgzglQgkgYgqg7IGKgDQATAfAGAVQAJAhgPAYQgNAVgaAEIgOABQgRAAgSgGg");
	this.shape_74.setTransform(114.1,68.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E3523A").s().p("Ag4BqQg4ghgWg2QgWg0AYgsQAYgsA4gIQA2gIA4AgQA3AhAWA2QAWA0gYAsQgYAsg4AIQgLACgLAAQgrAAgsgag");
	this.shape_75.setTransform(132.7,19.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#943E33").s().p("Ag5BqQg3gggWg3QgWg0AYgsQAYgsA4gIQA3gIA3AgQA2AhAXA2QAWA0gYAsQgZAsg4AIQgLACgLAAQgqAAgtgag");
	this.shape_76.setTransform(132.1,20.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E3523A").s().p("Ag0CQQg4gSgYg4QgXg3AWg7QAWg7A3geQA3gdA2ASQA4ATAXA3QAYA4gWA6QgXA8g3AeQghASggAAQgVAAgWgIg");
	this.shape_77.setTransform(135.4,54.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#943E33").s().p("Ag0CRQg4gTgXg4QgYg3AWg7QAWg8A4gdQA3gdA1ASQA4ATAYA3QAXA4gWA6QgWA8g4AeQgiASggAAQgVAAgVgHg");
	this.shape_78.setTransform(136.9,54.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E3523A").s().p("AAxC+QhHgEhDg6QhCg6gUhNQgUhPAlg1QAlg1BJADQBHAEBDA6QBCA6AUBNQAUBPglA1QgjAyhCAAIgJAAg");
	this.shape_79.setTransform(93.4,43.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#943E33").s().p("AAwC+QhGgDhCg7QhDg6gUhNQgUhPAlg1QAlg1BJADQBIADBCA6QBBA7AVBNQAUBOglA2QgjAyhDAAIgJAAg");
	this.shape_80.setTransform(92.4,44.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#57BB6F").s().p("AjfBAQgEgDgBgFQgVgqANgZQAMgaAugWQAQgIAVAEIAnAIQAPADAdgHQAcgIAPAEQAKACAOAJQASAKAIACQATAHARgGQAKgDAWgNQAagRAnAOQAPAGAQALQARALAKALQAIAKABAQQABAVAEAIQAEAIgEAHQgEAHgJAAIm6AHQgFAAgDgBgAidgcQgeAHgNASQgNAPAIAXIGegGIAAgFQgBgRgGgHQgFgIgQgKQgQgKgKgDQgZgGgPAMQgZASgFACQgTAFgcgGQgHgCgdgPQgUgMgOACQgIABgPAHQgOAFgKAAQgMABgbgHQgNgEgLAAQgIAAgHACg");
	this.shape_81.setTransform(101.4,6.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#57BB6F").s().p("AjjAOQgDgTAPgLQAFgEAKgFIAQgIIALgJQAHgGAHgBQAOgDAiAKQAgAKAOgDQAGgCAMgHQAKgGAKAAQAIAAAMAFIAmAUQAXALASgCQAPgBAQgRQAPgPAQAAQAbAAAaASQANAJARAOQAIAEAAAUQAAAYAEAEIm6AHQgMgXgCgOg");
	this.shape_82.setTransform(101.2,6.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#57BB6F").s().p("AgFDqQgKgFgJgKIgQgSIgUgSQgNgMgFgKQgGgMADgVIAJglQADgSgJgVQgKgUgCgIQgDgNAJgPQACgFAJgLQAIgKADgGQAFgOgFgTQgFgRgKgMIgLgKQgIgGgDgGQgJgPACgTQADgRAKgQQAKgOAPgNQAQgQAOgGQANgHAZADQAbADAMgEQAHgDAGAFQAFAFABAHIAxG8QACANgMABIgBAAQggAKgUABIgKABQgXAAgQgJgAgSjNQgnAFgNAhQgKAaAUASQAhAdABACQAMAVgKAbIgYAnQgOAUAKAUIANAWQAFALgBAOQgBAGgDAIIgFAOQgDASAEAOQAEAMALAPQAXAhAbAHQAVAFAhgIIgvmhIgvAGg");
	this.shape_83.setTransform(81.7,37);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#57BB6F").s().p("AgKDUQgGgFgIgLIgPgQIgPgMQgIgHgDgIQgFgOAMghQAMgggGgOQgDgGgMgNQgKgKgBgKQAAgJAHgLQAHgKATgaQAOgWgEgSQgEgPgagSQgZgQgBgRQgDgbAZgYQANgMAUgQQAGgHAfACQAkACAGgEIAxG8QgiAKgVABIgDAAQgcAAgQgQg");
	this.shape_84.setTransform(81.7,37);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CBAC6B").s().p("AAjEwQg6gEhKgLQhQgNglgMQhBgWghgqQgigpAEg/QABgRAShcQALg4ABgLQADgngLgbQgHgRgbgXQgagWgHgRQghhNCvAFIADgCQAcgJArAGIBGAMQAWACA5AAQAwABAdAEQAfAEAmAMIBCAaIBFAbIBFAcQAzAVAJAdQANAmgtAkQgmAegIAIQgYAWgLAZQgLAbgCAjQgBAQABAvQACBKgbAlQgYAggyAKQgaAFgpAAQgbAAgjgCgAlBkdQg7AIgBAfQAAAWAbAZQAkAgAFAJQARAhgHA7QgDAYgHAjIgMA4QgIApAAAYQABAjAPAbQAYApA0AZQAwAWBGAMQApAIBRAHQA7AGA+gCQAggBAVgFQAcgHASgRQAigeABhFQABhoABgGQAJgtAZgdQALgPAZgRQAbgUAKgKQAbgcgOgcQgLgXgjgQIg3gXIg3gVIg3gXQghgMgYgIQgtgOhGgCIg4gBQghgBgYgDQgngHgUgDQgggEgXAGQAAAFgFgBIgfAAQghAAgSACg");
	this.shape_85.setTransform(113.8,44.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CBAC6B").s().p("AiPEUQhNgPgngWQg+gkgOg5QgFgVADgbQABgTAGgeIARhVQAIgrgBgaQgBgmgTgYQgHgIgOgNQgRgOgGgGQgLgNgDgOQgEgRAIgMQAJgNAcgGQAzgLA1ADIgBgDQAXgIAhAEQATACAmAIQAgAFBKABQBDAAAmAJQAdAHA3AVICZA9QBAAZACAlQABAZgWAVQgHAHgMAJIgVAOQgnAdgSAuQgQAsAEA1QAFBGgTAuQgPAigpAOQgbAKgwABIgRAAQhsAAiCgZg");
	this.shape_86.setTransform(113.8,44.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CBAC6B").s().p("AAvFNQhJgGhJgPQhZgSgugQQhOgbgqgoQgsgsABhHQAAgTAThpQALg6gKgkQgGgXgOgNIghgYQgXgRgCgaQgEgoAjgcQAbgXAsgKIAGgBQCzgVCwAdQCyAeCjBOQA4AbAaAaQAoApgYAuQgKATgbAOQgeAPgOAKQgfAUgHAyQgEAdgCA5QgJA7gZAsQgdA2gvAVQghAPgwABIgFAAQgZAAg2gEgAlZkpQghAIgVAOQgeAUAEAcQACANAZASQAdAUAFAJQAZAkgDA6QgCAcgOBDQgLA2ABAfQACAvAdAfQATAUAeAPQAVALAjANQCAAtCFAMIBIAGQApABAegHQBEgOAhhPQANggAFhHQAFhGAQggQAOgcAjgUQArgZALgQQATgbggghQgTgTgngSIhAgbQhBgbg5gRQiqg0i1AAQhLAAhNAJg");
	this.shape_87.setTransform(113.7,44.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CBAC6B").s().p("Aj8D8QgugRgcgVQglgcgNgnQgLgjAIgyIARhVQAKgygHgoQgHgvgegUIgTgKQgLgHgGgHQgQgWAQghQAUgnBAgNQC9gYC5AiQC8AjCoBZQAdAPAQAUQATAZgHAbQgGAagkATQguAXgKAMQgTASgGAmQgBAJgEA7QgEA/gZAzQgcA5gtAWQgeAOg6AAQjBgBi0hEg");
	this.shape_88.setTransform(113.6,44.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E2E2E2").s().p("ApkECQj+hrAAiXQAAiWD+hrQD/hsFlAAQFnAAD9BsQD/BrAACWQAACXj/BrQj9BslnAAQlmAAj+hsg");
	this.shape_89.setTransform(86.7,56.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C4C4C4").s().p("ApkEDQj+hsAAiXQAAiWD+hsQD+hrFmAAQFnAAD9BrQD/BsAACWQAACXj/BsQj9BrlnAAQlmAAj+hrg");
	this.shape_90.setTransform(86.7,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.4,96.3);


(lib.long_acting_insulin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txtlabel
	this.instance = new lib.long_label();
	this.instance.setTransform(78.9,13.5,1,1,0,0,0,19.1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8900CF").s().p("AgLCHQgIgBgGgFQgGgGAAgIIAAjlQAAgHAGgGQAGgHAIAAIAXAAQAIAAAGAHQAGAGAAAHIAADlQAAAIgGAGQgGAFgIABg");
	this.shape.setTransform(120,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8900CF").s().p("Al0BcQgTAAgOgMQgNgMAAgSIAAhjQAAgSANgMQAOgMATAAIMXAAIAAC3g");
	this.shape_1.setTransform(80.1,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2B").s().p("AiyALIgjgVIGrAAIAAAVg");
	this.shape_2.setTransform(21.4,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2B").s().p("AkoAvQgKAAgJgIQgHgIgBgLIAAgnQABgLAHgIQAJgIAKAAIJRAAQALAAAHAIQAIAIAAALIAAAnQAAALgIAIQgHAIgLAAg");
	this.shape_3.setTransform(64.2,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(1));

	// Layer 2
	this.instance_1 = new lib.needle_pumper();
	this.instance_1.setTransform(123.4,13.5,1,1,0,0,0,29.1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:103.2},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.4,27);


(lib.long_acting_drag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.longlabel();
	this.instance.setTransform(105.3,17.2,1,1,0,0,0,31.3,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8525CE").s().p("AHvCyQgIAAgFgGQgGgFAAgIIAAglIvPAAQgaAAgSgQQgSgRAAgXIAAgEIAAh7IAAgFQAAgXASgQQASgRAaAAIPPAAIAAgkQAAgIAGgFQAFgGAIAAIAwAAQAIAAAFAGQAGAFAAAIIAABlIAABzIAABlQAAAIgGAFQgFAGgIAAg");
	this.shape.setTransform(106.5,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2B").s().p("AO8CEQgGAAgEgEQgEgEAAgGIAAg8IlCAAIAAhzIFCAAIAAg8QAAgGAEgEQAEgEAGAAIAkAAQAGAAAEAEQAEAEAAAGIAADrQAAAGgEAEQgEAEgGAAgAowA+QgKAAgHgHQgIgIAAgKIAAgWIl2AAIgugdIGkAAIAAgWQAAgKAIgHQAHgIAKAAIA5AAIAAB7g");
	this.shape_1.setTransform(100.7,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.3,35.7);


(lib.liver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_21();
	this.instance.setTransform(132,24.4,1.26,1.26,0,0,0,22.9,7.9);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.Path_1_6();
	this.instance_1.setTransform(37.9,85.5,1.26,1.26,0,0,0,14.2,36.4);
	this.instance_1.alpha = 0.199;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDDC92").s().p("AF3FrIgBAAQhhgKhHgwQhNgzgohCIgyhgQgdg6gfggQhdhbgwgtQg5g0ghgQQg3gcgzAXQg/AbACgbQAGg3A1giQAOgJAcgDQAjgFAIgCQAPgFAVgKIAigSQAygYAxAPQAUAHAGAEQARALgGAMQgGAMgRAFQgnAMgPAUQgUAbAdAjQAgAkBRBHQBKBDAiApQAUAZAVA3QAWA5AQAYQAaAmAtAcQAfATA6AWIA5AVQAiAQAFAZQADASgQAHQgKAGgSgBIgBABIgCgBgAjkjUQAsAaA5A9QAUAVAnAlQAqAnASATQAbAbAYApQALAUAdA6QArBXBMA2QBOA4BfAKQAtACgtgbIg5gdQgqgQgUgJQg6gagqg1QgSgWgQgqQgUg0gIgPQgTgkghghQgUgWgqgoQg6gvgbgaQgxgvgOgrQgHgVAJgVQAJgUATgKQAGgDAegHQAVgHgWgIQgdgKgOABQgbACgrAWQguAXgXAEQgxAJgIADQghALgLAZQgNAdANgBQADAAAggNQAUgHAVAAQAnAAArAag");
	this.shape.setTransform(104,51.2,1.26,1.26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDDC92").s().p("AF4FiQhbgIhQg1QhPg1grhRQgGgMgRgmQgOgggLgRQgTgggegeQgUgUgpgjQgLgKgqgtQgkgngcgTIgmgcQgQgMgNgHQgegOgSAAQgVAAgjARQgPAHgOADQgQADgBgGQgBgFAEgKIAGgPQAJgXAYgUQAPgLAXgEQANgDAdgEQAegGAWgMIAxgaQAKgFAQgCQAQgCALACQAfAGAQAJQAbAPgxAMQgWAHgGAEQgJAEgHAKQgLAQADAVQACAOAKAXQAHAOCNCBQAoAlAWAZQAhAkAPAkIAgBPQAVAsAdAWIAaAVQASAPAIAEQAXALAnAOQAnAPAXALIAVAJQANAGAEAIQAHANgFAJQgEAJgRAAIgLgBg");
	this.shape_1.setTransform(103.9,51.1,1.26,1.26);

	this.instance_2 = new lib.Group_1();
	this.instance_2.setTransform(102.6,53.2,1.26,1.26,0,0,0,41.6,36.6);
	this.instance_2.alpha = 0.141;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7232B").s().p("AiJJqQhxgRhmh0QhZhkgoh7QgviMANibQAJhmAriiQAkiEBfhVQBvhjCqgHIFWBbQBdA+A7BaQA7BYANBhQAOBkgmBXQgoBcheBBQgXAQhhAtQhNAjghAlQgeAigPBCQgIAlgOBIQgRBBgxAjQgqAbg1AAQgRAAgTgDg");
	this.shape_2.setTransform(69.4,99.3,1.26,1.26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7232B").s().p("AnXjSQBoheBfgUQBLgPBSAfICCBAQBKAjAxgFQBZgIBRALQBQALAtAbQAvAcgKAkQgLAphQAqQhZAtgzA5QgeAggkA/QghA6gdAcQguArhSAdg");
	this.shape_3.setTransform(141.3,45.1,1.26,1.26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A31C21").s().p("AiyKDQhtgihXhgQhShcgvh1Qguh0gDh8QgDh4AdiFQAThTAIgdQARg+AYgsQA9hxBqhBQBog/CDgHQATgBALAPQAKANgCAQIETBKQAFgQAQgHQARgHAPALQCSBiBACeQBGCthLCUQgoBShEA2QgjAcg5AcQhAAeggAQQhAAigSAlQgTAkgJA6QgMBBgKAdQgRAyggAfQg5A6hPAAQgmAAgqgNg");
	this.shape_4.setTransform(69.9,100.3,1.26,1.26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A31C21").s().p("AguFZQgPgaAVgQImYnnIgBABQgZAWgVgbQgVgbAYgWQB/hxBxgLQBZgJBkAvQAPAHArAXQAjATAWAJQAfANAjACIBEgBQCLgDBVAgQBhAlgBBEQgBArgrAkQgWASg6AeQhmA5gyBMIgjA9QgVAkgTAVQg4A/hnAlQgIADgGAAQgSAAgKgTg");
	this.shape_5.setTransform(141.6,45.9,1.26,1.26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.5,183);


(lib.KARA_EAT_HEAD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#584233").s().p("AiLgKQgKgLALgLQALgLAJALQAqAtBNgBQBPgBAogvQAJgLAKAKQALALgJALQgvA5hdABIgBAAQhaAAgxg1g");
	this.shape.setTransform(47.7,98.5,0.634,0.634);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#584233").s().p("AhPAhQgWgVABgWQAAgMACgKQAFgVAMAAQAHAAAAAGIgEAGQAEACAFAHIAGAEIACAEIACgBQAEAAADAFIAJADIAIAEIADADQAHgEAEAAQAFAAADACQACAAAEACQADAAAEgDQACAAAHAHIADgCIARgIQAZgGAIgFIAKgKQAFgEAFgBQgDgGAAgCQAAgOAIAHQAHAHAEALQAEAHgBATIAAAIIgBAFQgFASgQAQQgeAag3AAQgtAAgcgbg");
	this.shape_1.setTransform(47.7,101.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#584233").s().p("AhKAqQgEgCAAgEQAAgGAQgCQAbgCAMgDQARgGASgNIAcgaIgKgGQgRgIAAgBQAAgHAOAAQAdAAAOAYQAJAPAAAMIgCAFQgCADgFAAQgHAAgDgMQgDgMgDgDQgGAKgaARQgnAeghAAQgTAAgFgDg");
	this.shape_2.setTransform(59,96.4);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#584233").s().p("AAnAWIgBgTQgGAEgPAGQgZALgSAAQgQAAgJgFQgGgDAAgFQAAgGANgCIAsgFIASgHIAKgDIgJgJIgMgJQAAgFAIAAQARAAAKAMIACACIAFAHQAJAOAAAMIgDANIAAAEQAAAHgIAAQgHAAgBgOg");
	this.shape_3.setTransform(55.8,98.9);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[]},1).to({state:[{t:this.shape_3}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(16).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(21).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A2E25").s().p("AlDCtQgHgBAAgIQgDgnABgTQACgfAQgUIBpiBQAEgEAJgDIAOgFIDZhWQAJgEADAKQADAKgJAEIjOBRQgeANABgBIAAAAIAAAAIh1CPQAAAAABAAQAAgBAAABQABAAAAAAQAAABAAAAIgBANIAAAlQATgSAbgQQA0gbAYgRQA+guAfgUQA3glAvgJQAbgFArAKIBGAOQA1AGAngLQAugMAegkQAHgIAHAIQAHAHgGAHQgoAwhBAKQgwAHhLgNQgpgIgUgDQgkgEgYALQgdALgfATIg4ApQgJAHhVAxQg8AjgWAiQgDAFgFAAIgEgBg");
	this.shape_4.setTransform(39,32.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A2E25").s().p("AlBBPIB4iUIDuhdIEdBQQgsA4hWACQgbABghgFIgjgGQgKgBgRgEQgTgFgIgBQg4gIhHAvQgOAIgrAhQgiAagXAOQgWANguAYQgmAXgRAcg");
	this.shape_5.setTransform(39.1,32.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGAAQAHAAAAAFQAAAGgHAAQgGAAAAgGg");
	this.shape_6.setTransform(62.2,60.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAuQgIgIgCgNQgEgSACgOQAAgSAGgKQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQACgDAFgDQAMgKAMAKQALAJACAOQADAUgDAPQgFAWgOALQgGAFgEAAQgFAAgGgFg");
	this.shape_7.setTransform(63,63.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAEQgCgCAAgCQAAgGAGABQAHgBAAAGQAAACgCACQgDACgCAAQgCAAgCgCg");
	this.shape_8.setTransform(30.4,61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAuQgJgIgCgNQgDgVABgLQAAgRAGgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAHgGQAMgKAMAKQAMAJABAOQAHAwgaAUQgGAFgEAAQgFAAgFgFg");
	this.shape_9.setTransform(31.2,64.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#584233").s().p("AgXAoQAAgHAHgBQAVgCARgMQATgPgIgUQgHgSgaADQgSACgTALQgGAEgEgGQgDgHAGgDQAYgPAaAAQAjgBAGAaQAIAcgWAUQgUASgdACIgCAAQgFAAAAgHg");
	this.shape_10.setTransform(48.6,78.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#584233").s().p("AhbgGQgHgHAHgHQAHgHAHAHQAbAdAygBQA0gBAageQAGgHAHAHQAHAHgGAHQgfAkg9ABIgBAAQg6AAgggig");
	this.shape_11.setTransform(47.7,98.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#584233").s().p("AATAZQgOgkgfgEQgHgBAAgHQAAgIAHABQApAFASAuQADAHgIACIgCABQgFAAgCgGg");
	this.shape_12.setTransform(74.6,52);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#584233").s().p("AgYAhQgHgCABgHQAGgnAugRQAHgCACAHQACAIgHACQglANgFAgQgBAFgEAAIgDAAg");
	this.shape_13.setTransform(21.3,54.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B58F67").s().p("AgxBAIAMhnQAUgrAhAMQAjANgBArQgBAigiAhQgUAVgTAAQgOAAgLgKg");
	this.shape_14.setTransform(93.2,65.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A2E25").s().p("AmJG3QgciBAFh/QAGiQAvhpQA7iHBygwQBEgcBHgIQBNgHBAAUQA1ARAqgEIAcgDQARAAALAFQAbANAWAdQANATATAmIAjBLQAVAuAQAcQATAdAJAKQAVAaADgcQAEgUgCgGIhgkaQgIgXgEgGQgHgLgRgIIhxgzQhCgdgggQQgHgDgVACIgfADQhPAGiiAOQggADgmAqQgVAXgiAtIg6A9QgiAlgRAdQgRAcAAA1QgBAeADA2QgGDtACBiQAAAKgKAAQgKAAAAgKQgCh2AFieIAEi7QABgmAigmIB2iDQAZggAPgSQAbggAWgGQAjgJA6gDIBfgDIBlgIIAVgCQANgBAHAEQAnAVA8AaIBlAsIAeANQAPAJAFAPIBeEVQAgBZgkAKQgaAHgZggQgJgMgWgnQgIgQgihKQgZg4gVggQgTgdgVgLQgWgMgiAEQgdAEgVgDQgPgBgbgKQgdgJgOgCQhvgQhhAlQhaAhg4BMQg1BHgSBiQgnDTAoC5QACAJgKADIgEAAQgGAAgBgHg");
	this.shape_15.setTransform(47,52.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A2E25").s().p("AnKFSIAAimIAIk8QAAgCANgVIAOgXIDAjVQAGgHAJgBQE9gbAGAEQAMAIDbBhQAJAEAEAKIBsE8IgFAsQgEANgPgGQgNgFgJgNQgcglgkhMQgphXgSgfQgZgqgcgKQgQgFgaADIgrAEQgRgBgXgHIgogMQgggJgqAAQhhgBhRAiQhbAmgvBIQgLARgMAZIgUAtQgdA/gKCMQgLCdAcB6g");
	this.shape_16.setTransform(47,52.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B58F67").s().p("AlLFwQhsiIgNjoQgNjkCLiWQCEiODCABQDfABB/CbQB5CUgUDXQgUDkhtCLQh3CZjBAAQjcAAh5iYg");
	this.shape_17.setTransform(46.5,63.7);

	this.instance = new lib.Path_8_6();
	this.instance.setTransform(46.6,65.1,1,1,0,0,0,45.5,52.1);
	this.instance.alpha = 0.102;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A2E25").s().p("AgtAAQAFAAApgZQAqgTADAVQAAAIghAPQgeAOAEAVg");
	this.shape_18.setTransform(72,9.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A2E25").s().p("AghAkQANggAMgTQAVgoAQAIQAMAGgSAnIgXAzg");
	this.shape_19.setTransform(68,5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3A2E25").s().p("AgMAUIACgZQACgVAHAAQAGgBAEAZIAEAdg");
	this.shape_20.setTransform(64.4,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},8).to({state:[]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},5).to({state:[]},47).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.3,117.1);


(lib.insulin_key_wglucose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhICfQgMABgDgJQgCgEABgKIAAgDQgBgPACgFQACgIAGgEQAEgCADAAIAhAAIAAjGIghAAQgMAAgDgNQgCgEABgLIAAgDQgBgOACgEQAEgLALAAICQAAQASgBAAAeIAAACQAAAdgSAAIghAAIAADGIAhAAQASAAAAAiIAAADQAAAKgCAFQgFAHgLAAg");
	this.shape.setTransform(30.4,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DABC37").s().p("AiqCqQhGhHAAhjQAAhjBGhHQBHhGBjAAQBjAABHBGQBHBHAABjQAABjhHBHQhHBHhjAAQhjAAhHhHg");
	this.shape_1.setTransform(30.5,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6D84C").s().p("Ao2DVQhahcAAh8QAAh+BXhYQBZhXB+AAQBkAABTBEQBSBCAcBjIJ+AAQAhAAAXAXQAYAXAAAgQAAAhgYAYQgXAXghAAIgpAAIAAAyIAqAAQAEAAACAEQACAFAAAEIAACNQAAAGgIAAIhQAAQgMAAAAgGIAAhKIgeAAIAABKQAAAGgIAAIhkAAQgMAAAAgGIAAhKIgeAAIAABKQAAAGgIAAIhQAAQgMAAAAgGIAAiNQAAgDAEgGQAEgEAEAAIAmAAIAAgyIk9AAQgbBihPA8QhRA8hqAAQh6AAhahcg");
	this.shape_2.setTransform(65.8,30.6);

	this.instance = new lib.glucose2();
	this.instance.setTransform(78.8,-6.4,0.956,0.956,0,0,0,22.6,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.5,61.1);


(lib.insulin_glucose_flowcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loopflow:87});

	// timeline functions:
	this.frame_0 = function() {
		playSfx('snd_insulinappear');
	}
	this.frame_26 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_92 = function() {
		playSfx("snd_insulinappear");
	}
	this.frame_115 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_174 = function() {
		this.gotoAndPlay("loopflow");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(66).call(this.frame_92).wait(23).call(this.frame_115).wait(59).call(this.frame_174).wait(1));

	// Layer 6
	this.instance = new lib.insulin_key();
	this.instance.setTransform(25.4,82.9,0.265,0.272,0,0,0,65.8,30.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).to({scaleX:0.63,scaleY:0.64,guide:{path:[25.5,82.8,56.4,93.3,73.4,121.3,74.5,123.2,75.6,125.1]},alpha:1},16).to({guide:{path:[75.5,125.4,87.3,146.6,87.3,169.5,87.3,186.9,82.1,200.8,79.3,208.5,70.8,223.5,62.7,237.7,59.4,247.7,54.3,263.5,54.3,283.8,54.3,302.2,58.8,320.3,61.2,329.7,68.8,351.3,75.8,371.3,78.7,384.7,79.6,388.5,80.2,392.4]}},71).wait(1));

	// liver glucose
	this.instance_1 = new lib.new_single_glucose();
	this.instance_1.setTransform(-163.4,232,1,1,0,0,0,22.7,19.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).wait(15).to({x:-159,y:238.9},0).to({guide:{path:[-158.9,238.9,-153.2,249.3,-129.1,251.1,-112.3,252.3,-77,249.1,-31.4,244.9,-20.3,244.5,9.9,243.4,23.5,249,47,258.7,58,269.7,73.3,285.1,73.5,309.7,73.6,322.4,73,334.3]}},72).wait(1));

	// Layer 2
	this.instance_2 = new lib.insulin_key();
	this.instance_2.setTransform(25.4,82.9,0.265,0.272,0,0,0,65.8,30.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.63,scaleY:0.64,guide:{path:[25.5,82.8,56.4,93.3,73.4,121.3,74.5,123.2,75.6,125.1]},alpha:1},16).wait(1).to({x:77.5,y:128.7},0).wait(1).to({x:79.2,y:132.3},0).wait(1).to({x:80.7,y:135.8},0).wait(1).to({x:82.1,y:139.5},0).wait(1).to({x:83.4,y:143.2},0).wait(1).to({x:84.4,y:147},0).wait(1).to({x:85.4,y:150.8},0).wait(1).to({x:86.1,y:154.6},0).wait(1).to({x:86.7,y:158.5},0).wait(1).to({x:87.1,y:162.4},0).wait(1).to({x:87.3,y:166.3},0).wait(1).to({x:87.4,y:170.3},0).wait(1).to({x:87.3,y:174.1},0).wait(1).to({x:87,y:178},0).wait(1).to({x:86.7,y:181.9},0).wait(1).to({x:86.1,y:185.8},0).wait(1).to({x:85.4,y:189.6},0).wait(1).to({x:84.5,y:193.4},0).wait(1).to({x:83.5,y:197.2},0).wait(1).to({x:82.2,y:200.9},0).wait(1).to({x:80.7,y:204.6},0).wait(1).to({x:79,y:208.4},0).wait(1).to({x:77.2,y:212},0).wait(1).to({x:75.3,y:215.5},0).wait(1).to({x:73.4,y:219},0).wait(1).to({x:71.5,y:222.5},0).wait(1).to({x:69.6,y:225.9},0).wait(1).to({x:67.8,y:229.3},0).wait(1).to({x:66,y:232.7},0).wait(1).to({x:64.3,y:236.1},0).wait(1).to({x:62.7,y:239.7},0).wait(1).to({x:61.2,y:243.2},0).wait(1).to({x:59.8,y:246.9},0).wait(1).to({x:58.7,y:250.7},0).wait(1).to({x:57.6,y:254.5},0).wait(1).to({x:56.8,y:258.3},0).wait(1).to({x:56,y:262.2},0).wait(1).to({x:55.5,y:266.2},0).wait(1).to({x:55,y:270.1},0).wait(1).to({x:54.7,y:274},0).wait(1).to({x:54.5,y:277.9},0).wait(1).to({x:54.4,y:281.9},0).wait(1).to({y:285.8},0).wait(1).to({x:54.5,y:289.7},0).wait(1).to({x:54.7,y:293.6},0).wait(1).to({x:55,y:297.5},0).wait(1).to({x:55.4,y:301.4},0).wait(1).to({x:55.9,y:305.3},0).wait(1).to({x:56.6,y:309.2},0).wait(1).to({x:57.3,y:313.1},0).wait(1).to({x:58.1,y:316.9},0).wait(1).to({x:59,y:320.7},0).wait(1).to({x:60.1,y:324.7},0).wait(1).to({x:61.3,y:328.7},0).wait(1).to({x:62.5,y:332.5},0).wait(1).to({x:63.7,y:336.4},0).wait(1).to({x:65,y:340.2},0).wait(1).to({x:66.3,y:343.9},0).wait(1).to({x:67.6,y:347.7},0).wait(1).to({x:68.9,y:351.4},0).wait(1).to({x:70.1,y:355.1},0).wait(1).to({x:71.4,y:358.7},0).wait(1).to({regY:30.9,x:72.6,y:362.4},0).wait(1).to({x:73.7,y:366.1},0).wait(1).to({x:74.8,y:369.8},0).wait(1).to({x:75.9,y:373.5},0).wait(1).to({x:77,y:377.2},0).wait(1).to({x:77.9,y:381},0).wait(1).to({x:78.8,y:384.8},0).wait(1).to({regY:30.8,x:79.6,y:388.7},0).wait(1).to({x:80.3,y:392.5},0).wait(1).to({x:81,y:396.4},0).wait(1).to({x:81.5,y:400.3},0).wait(1).to({x:82,y:404.2},0).wait(1).to({x:82.4,y:408.1},0).wait(1).to({x:82.8,y:412},0).wait(1).to({x:83,y:416},0).wait(1).to({x:83.2,y:419.9},0).wait(1).to({x:83.3,y:423.8},0).wait(1).to({x:83.4,y:427.7},0).wait(1).to({y:431.7},0).wait(1).to({x:83.3,y:435.6},0).wait(1).to({x:83.1,y:439.6},0).wait(1).to({x:82.9,y:443.5},0).wait(1).to({x:82.7,y:447.4},0).wait(1).to({x:82.4,y:451.4},0).wait(1).to({x:82,y:455.3},0).wait(1).to({x:81.6,y:459.2},0).wait(1).to({x:81.2,y:463.1},0).wait(1).to({x:80.6,y:467},0).wait(1).to({x:80.1,y:470.9},0).wait(1).to({x:79.4,y:474.8},0).wait(1).to({x:78.8,y:478.7},0).wait(1).to({x:78,y:482.5},0).wait(1).to({x:77.3,y:486.4},0).wait(1).to({x:76.5,y:490.2},0).wait(1).to({x:75.6,y:494.1},0).wait(1).to({x:74.7,y:497.9},0).wait(1).to({x:73.7,y:501.7},0).wait(1).to({x:72.7,y:505.5},0).wait(1).to({x:71.7,y:509.3},0).wait(1).to({x:70.6,y:513.1},0).wait(1).to({x:69.5,y:516.9},0).wait(1).to({x:68.4,y:520.6},0).wait(1).to({x:67.2,y:524.3},0).wait(1).to({x:65.9,y:528},0).wait(1).to({x:64.6,y:531.6},0).wait(1).to({x:63.3,y:535.3},0).wait(1).to({x:61.9,y:538.9},0).wait(1).to({x:60.4,y:542.5},0).wait(1).to({x:58.9,y:546.1},0).wait(1).to({x:57.3,y:549.7},0).wait(1).to({x:55.6,y:553.2},0).wait(1).to({x:53.9,y:556.5},0).wait(1).to({x:52,y:559.8},0).wait(1).to({x:49.9,y:563},0).wait(1).to({regY:30.7,x:48,y:566.8},0).to({_off:true},10).wait(32));

	// liver glucose
	this.instance_3 = new lib.new_single_glucose();
	this.instance_3.setTransform(-163.4,232,1,1,0,0,0,22.7,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({x:-159,y:238.9},0).to({guide:{path:[-158.9,239,-153.2,249.5,-129.1,251.2,-112.3,252.4,-77,249.2,-31.4,245.1,-20.3,244.7,9.9,243.5,23.5,249.1,47,258.8,58,269.8,73.3,285.1,73.5,309.7,73.6,335.6,71.3,358.2,69.7,372.8,65.9,394.6,61.8,418.2,60.5,429.2,58,449.8,58,471.9,58,480.6,50.7,518.2,43.9,553.6,43.5,559.3]}},127).to({_off:true},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.1,74.5,229,177);


(lib.insulin_glucose_flow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loopflow":87});

	// timeline functions:
	this.frame_0 = function() {
		playSfx("snd_insulinappear");
	}
	this.frame_39 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_90 = function() {
		playSfx("snd_insulinappear");
	}
	this.frame_128 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_174 = function() {
		this.gotoAndPlay("loopflow");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(51).call(this.frame_90).wait(38).call(this.frame_128).wait(46).call(this.frame_174).wait(1));

	// single insulin
	this.instance = new lib.insulin_key();
	this.instance.setTransform(102.3,-4.7,0.627,0.642,0,0,0,65.8,30.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).to({guide:{path:[102.2,-4.6,89,12,83.3,27.3,78.3,40.6,78.3,55,78.3,64.7,79.8,73.1,80.6,77.4,83.3,87.1,88.3,105.6,88.3,125.5,88.3,132.6,84.1,142.7,84,142.9,74.9,162.4,61.4,191.3,61.4,215.8,61.4,229.3,64.9,245.1,68.3,260.9,68.3,268.3,68.3,292.6,62.1,312.8,61,316.4,59.5,320.4]}},87).wait(1));

	// liver glucose
	this.instance_1 = new lib.new_single_glucose();
	this.instance_1.setTransform(-149.5,241.9,1,1,0,0,0,22.7,19.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(122).to({_off:false},0).to({guide:{path:[-149.3,241.8,-146.3,241.6,-74.9,235.6,-57.6,234.1,-21.7,235.5,15.2,237,26.2,239.8,35.6,242.2,41.4,246.8,41.9,247.2,51.4,256.8,57.2,262.7,60.8,271]}},52).wait(1));

	// single insulin
	this.instance_2 = new lib.insulin_key();
	this.instance_2.setTransform(102.3,-4.7,0.627,0.642,0,0,0,65.8,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[102.2,-4.6,89,12,83.3,27.3,78.3,40.6,78.3,55,78.3,64.7,79.8,73.1,80.6,77.4,83.3,87.1,88.3,105.6,88.3,125.5,88.3,132.6,84.1,142.7,84,142.9,74.9,162.6,61.4,191.5,61.4,216,61.4,229.5,64.9,245.3,68.3,261.1,68.3,268.5,68.3,292.6,62.1,312.8,59.8,320.2,55.9,329.8,53.6,335.2,49.2,346.2,40.7,367.1,37.4,386.8,32.8,414.5,35.1,452.9,36.1,469.3,35.2,494.3,34.1,526.5,30.1,545.9]}},146).to({_off:true},11).wait(18));

	// liver glucose
	this.instance_3 = new lib.new_single_glucose();
	this.instance_3.setTransform(-149.5,241.9,1,1,0,0,0,22.7,19.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).wait(1).to({x:-144.3,y:241.5},0).wait(1).to({x:-138.9,y:241},0).wait(1).to({x:-134.1,y:240.6},0).wait(1).to({x:-129.6,y:240.2},0).wait(1).to({x:-125.1,y:239.9},0).wait(1).to({x:-120.7,y:239.5},0).wait(1).to({x:-116.3,y:239.1},0).wait(1).to({x:-112,y:238.8},0).wait(1).to({x:-107.6,y:238.4},0).wait(1).to({x:-103.3,y:238},0).wait(1).to({x:-99.1,y:237.7},0).wait(1).to({x:-94.8,y:237.3},0).wait(1).to({x:-90.5,y:237},0).wait(1).to({x:-86.3,y:236.6},0).wait(1).to({x:-82.1,y:236.3},0).wait(1).to({x:-77.8,y:235.9},0).wait(1).to({x:-73.6,y:235.6},0).wait(1).to({x:-69.2,y:235.3},0).wait(1).to({x:-64.7,y:235.1},0).wait(1).to({x:-60.3,y:235},0).wait(1).to({x:-56,y:234.9},0).wait(1).to({x:-51.6},0).wait(1).to({x:-47.3,y:235},0).wait(1).to({x:-43},0).wait(1).to({x:-38.8,y:235.1},0).wait(1).to({x:-34.5,y:235.2},0).wait(1).to({x:-30.2,y:235.3},0).wait(1).to({x:-26,y:235.5},0).wait(1).to({x:-21.8,y:235.6},0).wait(1).to({x:-17.6,y:235.8},0).wait(1).to({x:-13.6,y:236},0).wait(1).to({x:-9.5,y:236.2},0).wait(1).to({x:-5.5,y:236.4},0).wait(1).to({x:-1.4,y:236.6},0).wait(1).to({x:2.6,y:236.9},0).wait(1).to({x:6.7,y:237.2},0).wait(1).to({x:10.8,y:237.6},0).wait(1).to({x:14.8,y:238},0).wait(1).to({x:18.9,y:238.5},0).wait(1).to({x:23,y:239.2},0).wait(1).to({x:27.1,y:240.1},0).wait(1).to({x:31,y:241.3},0).wait(1).to({x:34.9,y:242.9},0).wait(1).to({x:38.6,y:244.9},0).wait(1).to({x:42.1,y:247.5},0).wait(1).to({x:45.4,y:250.8},0).wait(1).to({x:48.5,y:253.9},0).wait(1).to({x:51.5,y:257},0).wait(1).to({x:54.3,y:260.1},0).wait(1).to({x:56.8,y:263.5},0).wait(1).to({x:59,y:267.2},0).wait(1).to({x:60.9,y:271},0).wait(1).to({x:62.5,y:275},0).wait(1).to({x:63.8,y:279},0).wait(1).to({x:64.8,y:283.1},0).wait(1).to({x:65.6,y:287.4},0).wait(1).to({x:66.2,y:291.7},0).wait(1).to({x:66.6,y:296.1},0).wait(1).to({x:66.9,y:300.4},0).wait(1).to({x:67.1,y:304.7},0).wait(1).to({x:67.3,y:308.9},0).wait(1).to({y:313.2},0).wait(1).to({x:67.4,y:317.4},0).wait(1).to({x:67.3,y:321.7},0).wait(1).to({x:67.2,y:325.9},0).wait(1).to({x:66.9,y:330.2},0).wait(1).to({x:66.6,y:334.4},0).wait(1).to({x:66.1,y:338.6},0).wait(1).to({x:65.5,y:342.8},0).wait(1).to({x:64.9,y:347},0).wait(1).to({x:64.1,y:351.2},0).wait(1).to({x:63.3,y:355.4},0).wait(1).to({x:62.4,y:359.5},0).wait(1).to({x:61.4,y:363.6},0).wait(1).to({x:60.3,y:367.7},0).wait(1).to({x:59.2,y:371.9},0).wait(1).to({x:58,y:376.2},0).wait(1).to({x:56.9,y:380.4},0).wait(1).to({x:55.7,y:384.5},0).wait(1).to({x:54.6,y:388.6},0).wait(1).to({x:53.5,y:392.7},0).wait(1).to({x:52.5,y:396.8},0).wait(1).to({x:51.5,y:400.9},0).wait(1).to({x:50.6,y:405},0).wait(1).to({x:49.7,y:409.2},0).wait(1).to({x:48.9,y:413.3},0).wait(1).to({x:48.1,y:417.4},0).wait(1).to({x:47.4,y:421.6},0).wait(1).to({x:46.6,y:425.8},0).wait(1).to({x:45.8,y:430.1},0).wait(1).to({x:44.8,y:434.4},0).wait(1).to({x:43.7,y:438.6},0).wait(1).to({x:42.6,y:442.8},0).wait(1).to({x:41.3,y:446.9},0).wait(1).to({x:40.1,y:451.1},0).wait(1).to({x:38.7,y:455.2},0).wait(1).to({x:37.4,y:459.2},0).wait(1).to({x:36,y:463.3},0).wait(1).to({x:34.5,y:467.3},0).wait(1).to({x:33,y:471.3},0).wait(1).to({x:31.5,y:475.2},0).wait(1).to({x:29.9,y:479.2},0).wait(1).to({x:28.4,y:483.1},0).wait(1).to({x:26.8,y:487.1},0).wait(1).to({x:25.1,y:491},0).wait(1).to({x:23.4,y:494.9},0).wait(1).to({x:21.7,y:499},0).wait(1).to({x:20,y:503},0).wait(1).to({x:18.3,y:507},0).wait(1).to({x:16.6,y:510.9},0).wait(1).to({x:14.9,y:514.9},0).wait(1).to({x:13.3,y:518.8},0).wait(1).to({x:11.6,y:522.7},0).wait(1).to({x:10,y:526.6},0).wait(1).to({x:8.4,y:530.4},0).wait(1).to({x:6.9,y:534.3},0).wait(1).to({x:5.4,y:538.2},0).wait(1).to({x:4,y:542.1},0).wait(1).to({x:2.6,y:546},0).wait(1).to({x:1.3,y:550},0).wait(1).to({x:-1.2,y:555.4},0).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.1,-24.4,82.5,39.3);


(lib.insulin_clustercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.insulin_key();
	this.instance.setTransform(75.9,82.5,0.384,0.394,133.1,0,0,66.2,30.6);

	this.instance_1 = new lib.insulin_key();
	this.instance_1.setTransform(-5.2,46.5,0.384,0.394,64.5,0,0,66,30.9);

	this.instance_2 = new lib.insulin_key();
	this.instance_2.setTransform(89.5,34,0.384,0.394,52.6,0,0,65.8,30.7);

	this.instance_3 = new lib.insulin_key();
	this.instance_3.setTransform(27.8,10.7,0.384,0.394,-28.8,0,0,66.2,30.9);

	this.instance_4 = new lib.insulin_key();
	this.instance_4.setTransform(45.2,67.5,0.384,0.394,-8.8,0,0,65.7,30.9);

	this.instance_5 = new lib.insulin_key();
	this.instance_5.setTransform(58.8,34.1,0.384,0.394,22.4,0,0,66.2,30.8);

	this.instance_6 = new lib.insulin_key();
	this.instance_6.setTransform(35.1,46.8,0.384,0.394,5.7,0,0,65.8,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-12.1,141.3,121.2);


(lib.insulin_cluster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.insulin_key();
	this.instance.setTransform(104,73.5,0.384,0.394,107.4,0,0,66,30.6);

	this.instance_1 = new lib.insulin_key();
	this.instance_1.setTransform(20.7,75.5,0.384,0.394,38.9,0,0,66,30.8);

	this.instance_2 = new lib.insulin_key();
	this.instance_2.setTransform(95.5,24,0.384,0.394,27,0,0,66,30.8);

	this.instance_3 = new lib.insulin_key();
	this.instance_3.setTransform(29.6,29.6,0.384,0.394,-54.4,0,0,66.1,30.9);

	this.instance_4 = new lib.insulin_key();
	this.instance_4.setTransform(69.8,73.3,0.384,0.394,-34.5,0,0,65.8,30.8);

	this.instance_5 = new lib.insulin_key();
	this.instance_5.setTransform(67.6,37.4,0.384,0.394,-3.3,0,0,66,30.9);

	this.instance_6 = new lib.insulin_key();
	this.instance_6.setTransform(51.7,59.1,0.384,0.394,-20,0,0,65.9,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,1.7,130,99.4);


(lib.heavybreathing_slide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heavybreathing_symptom();
	this.instance.setTransform(96,127.6,1,1,0,0,0,96,36.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:54.6,alpha:1},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,84.8,166.7,123.2);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AJZGuQvCgXkcgVQsJg60pAXQlqAGoaAQQm9ANhTAAQiHgBAYliQAMiwAnixQBuABOlgcQNegaECANQIVAaOqAzQMVAmJQAFQYBALeujWIgvLLQ/QCfl8AOQhUADiUAAQlWAAqtgQg");
	mask_4.setTransform(438,49.1);

	// Layer 3
	this.instance = new lib.Path_0();
	this.instance.setTransform(434.1,58,1,1,0,0,0,433.7,-9.5);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.setTransform(434,64.7,1,1,0,0,0,433.4,16.2);
	this.instance_1.alpha = 0.148;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(434,43.1,1,1,0,0,0,434,21.6);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.setTransform(434,19.6,1,1,0,0,0,433.4,19.6);
	this.instance_3.alpha = 0.148;

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.3,4.5,857.5,89.3);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EhKvAmOIg9xwQO0CEMng2QGTgbDXg2QFQhdB1jfQAzhjAUiNQAPhygCiyIgJlWQgGjeAHimQAWnoCXmrQDHoxAUg+QCAl/A0j9IFqAdQGPAdC6AAQEDAADZgRQDGgQBrgZQg0D8h/F/QgZBLi/IjQhiEWgdF4QgeGHA4FpQA8GOCXEMQCrEtEJBbQFWB3N5gkQD7gKGegdQF5gaBggDQJfgOHMANQK4ATDMBQIAAQhg");
	mask_5.setTransform(484.5,264.6);

	// Layer 3
	this.instance_4 = new lib.Path_17();
	this.instance_4.setTransform(695.9,473.5,1,1,0,0,0,119,93);
	this.instance_4.alpha = 0.051;

	this.instance_5 = new lib.Path_1_4();
	this.instance_5.setTransform(612.9,473.5,1,1,0,0,0,119,93);
	this.instance_5.alpha = 0.051;

	this.instance_6 = new lib.Path_2_1();
	this.instance_6.setTransform(537.9,469.7,1,1,0,0,0,122,88.7);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.Path_3_2();
	this.instance_7.setTransform(144.8,429.6,1,1,0,0,0,123,86.9);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.Path_4_3();
	this.instance_8.setTransform(457.7,438.7,1,1,0,0,0,134.9,61.6);
	this.instance_8.alpha = 0.051;

	this.instance_9 = new lib.Path_5_1();
	this.instance_9.setTransform(378.2,399.4,1,1,0,0,0,169.5,35.5);
	this.instance_9.alpha = 0.051;

	this.instance_10 = new lib.Path_6_2();
	this.instance_10.setTransform(402.5,353.8,1,1,0,0,0,141.2,30.1);
	this.instance_10.alpha = 0.051;

	this.instance_11 = new lib.Path_7_1();
	this.instance_11.setTransform(398.4,314.2,1,1,0,0,0,130.8,36.8);
	this.instance_11.alpha = 0.051;

	this.instance_12 = new lib.Path_8_2();
	this.instance_12.setTransform(398.4,274.6,1,1,0,0,0,130.8,36.8);
	this.instance_12.alpha = 0.051;

	this.instance_13 = new lib.Path_9_1();
	this.instance_13.setTransform(398.4,235,1,1,0,0,0,130.8,36.8);
	this.instance_13.alpha = 0.051;

	this.instance_14 = new lib.Path_10_1();
	this.instance_14.setTransform(378.7,195.3,1,1,0,0,0,130.8,36.7);
	this.instance_14.alpha = 0.051;

	this.instance_15 = new lib.Path_11();
	this.instance_15.setTransform(384.8,155.7,1,1,0,0,0,130.8,36.8);
	this.instance_15.alpha = 0.051;

	this.instance_16 = new lib.Path_12();
	this.instance_16.setTransform(390.8,116.1,1,1,0,0,0,130.8,36.8);
	this.instance_16.alpha = 0.051;

	this.instance_17 = new lib.Path_13();
	this.instance_17.setTransform(396.9,76.5,1,1,0,0,0,130.8,36.8);
	this.instance_17.alpha = 0.051;

	this.instance_18 = new lib.Path_14();
	this.instance_18.setTransform(402.9,36.8,1,1,0,0,0,130.8,36.8);
	this.instance_18.alpha = 0.051;

	this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.8,20,793.1,489.4);


(lib.dinner_drag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5292C").s().p("AgVAgQgNgCgHgJQgFgHAAgJQABgHAEgHQAJgOATgGQAegJAbAQQAJAegVANQgDADgcAHQgFACgHAAIgKgBg");
	this.shape.setTransform(87.1,19.8,1.017,1.017);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5292C").s().p("AgPAbQgfgKgBgUQgBgIAFgIQAFgHAIgEQANgHATAEQAfAJAPAaQgJAhgYAAQgFAAgZgIg");
	this.shape_1.setTransform(72,10.7,1.017,1.017);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5292C").s().p("AgCAxQgSgHgKgUQgRgeAMgiQAigRASAUQAEAEANAdQAHALAAANQAAAPgIAJQgHAHgLACIgGAAQgHAAgEgCg");
	this.shape_2.setTransform(57.3,18.9,1.017,1.017);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#348D29").s().p("AALBuQgIgDgTgRQgSgOgNgBQgJgBgRAFQgkALgmAHQg5AKgbgUQgPgMgFgUQgGgUAIgRQAKgTATgSQAWgVARAEQgEgMALgJQAKgIAOAAIAYADQAPABAKgDQAGgCAIgGIAMgLQAjgdAsgBQASAAAHAHQAGAGAHARQAJANAVADQAMABAZgCQAqgFApAFQAZADARALQAVANgBAUQAAAPgNAJQgKAKgQAFIgeAGQgTAEgLAEQgQAHgTARIgfAeQgSAQgTAHQgMAFgLAAQgJAAgJgEg");
	this.shape_3.setTransform(66.8,11.6,1.017,1.017);

	this.instance = new lib.Path_4();
	this.instance.setTransform(66.1,13.1,1.017,1.017,0,0,0,24.8,11.6);
	this.instance.alpha = 0.109;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AC8942").s().p("AhBAlQgBgFAFgBQAmgIAbgQQAlgRAPgbQADgEAEADQAEACgCAEQgQAdgnASQgdARgoAIIgBAAQgDAAgCgDg");
	this.shape_4.setTransform(118.7,50,1.017,1.017);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CDA54A").s().p("AgJDdQgrgPgZgnQgbgqAOgoQAGgRAWgcQAZgfAGgMQgOADgQADQggAGgMgIQgFgBgVgSQgQgNgMgFQgZgKgiAKQgOAEguAVQhiAshQgaQgJgDgEgEQgFgFAEgKQAEgIAIgGQAVgQAtgIQA0gJASgIQAWgKAZgaIArgrQBDg/BogOQBdgMBiAfIAwAQQAcAJAVACQAcADBTgKQBFgJAmAPQAaALABARQABAKgJALIgSATQgLAOgEAXQgDAOgDAcQgIBAgmA5QgnA4g7AfQgZANghALQgVAHgoAJQg1ANgiADIgWABQgjAAgbgKg");
	this.shape_5.setTransform(117.9,53,1.017,1.017);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AC8942").s().p("AgSDnQgrgPgbgwQgbgxAPgpQAHgVAPgRIAfghQgKAGgOACQgaAGgQgNIgZgTQgOgKgNgGQgagKggAMIg6AZQhoAvhQgiQgGgDgJgKQgFgFAEgKQAEgIAIgHQAYgSAagHIBWgUQAYgGAagdIArgwQBFhBBtgNQBigNBkAgIAyARQAdALAVACQAZADBNgMQA+gLAyATQAMAFAJAHQAMAKABAJQABALgJAOQgFAHgNAPQgLANgFAWIgGAoQgJBEglA6QgnA+g7AfQgZANgkALQgVAHgrAKQhDAQgzAAQgnAAgcgKg");
	this.shape_6.setTransform(117.8,53,1.017,1.017);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DFBE65").ss(1,1,1).p("AgKhsQgvgDgqAdQgpAdgUAxQgEAIABAEQABAGAHAJQA0A+BoATQA3AKAkgKQAYgHARgPQATgPAIgVQAKgegPgfQgNgfgdgUQgcgUgYgJQgbgJgsgEg");
	this.shape_7.setTransform(134.6,15.5,1.017,1.017);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EED697").s().p("AABBoQhogTg0g+QgHgJgBgGQgBgEAEgIQAUgxApgdQAqgdAvADQAsAEAbAJQAYAJAcAUQAdAUANAfQAPAfgKAeQgIAVgTAPQgRAPgYAHQgSAFgYAAQgWAAgbgFg");
	this.shape_8.setTransform(134.6,15.5,1.017,1.017);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#348D29").s().p("AgIB4QgFgDgEgHIgIgLQgLgMgVABQgMABgZAHQgqAMgnABQgZACgTgIQgXgKgDgUQgCgOAKgNQAJgMAPgIIAdgLQASgGAJgGQAQgIAPgTIAagkQAPgTARgKQAVgMATAEQAJACAWANQAUALANgBQAIgBARgIQAggRAlgNQA3gUAeAQQARAJAIASQAJATgFATQgFAWgQAVQgSAWgSAAQAGAKgKALQgIAKgOACIgYACQgPAAgJAFQgGAEgHAHIgKANQgeAjgtAIIgKABQgHAAgGgDg");
	this.shape_9.setTransform(88.1,15.8,1.017,1.017);

	this.instance_1 = new lib.Path_7();
	this.instance_1.setTransform(87.3,17.3,1.017,1.017,0,0,0,24.2,12.5);
	this.instance_1.alpha = 0.109;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#348D29").s().p("AgTBpQgHgGgPgXQgMgTgMgFQgIgEgSAAQgjAAgpgGQg6gJgSgcQgLgNABgVQACgUANgPQAPgRAYgLQAbgMAQAIQgBgLAOgGQAMgFANAFIAXAKQANAGAKAAQAHAAAJgDIAQgHQAogQAsAOQAQAFAFAJQACAFABAIIACANQAEAQATAJQALAFAZAFQAoAJAmASQAXAJANAQQAQATgHATQgFANgQAHQgNAGgRAAQgJAAgVgEQgUgDgLABQgRABgXAKQgaAOgOAFQgWAKgUABIgDAAQgUAAgOgMg");
	this.shape_10.setTransform(74.6,25.3,1.017,1.017);

	this.instance_2 = new lib.Path_9();
	this.instance_2.setTransform(74,26.4,1.017,1.017,0,0,0,25.4,11.7);
	this.instance_2.alpha = 0.109;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#265820").ss(0.6,0,1).p("AAWBWQACAPgHAQQgIAQgLACQgOADgUgKQgUgJgHgNQgLgVAWgmQgIAFgLAAQgKgBgIgGQgPgLgFgWQgGgbATgcQATgbAegEQgBgiARgRQAKgKAPAAQAOAAAIALQAbgRAXAdQAXAdgUAUQAQAAAMAMQAMAMACARQACAUgFAJQgIARgaALIgEAfQgLAdglgJg");
	this.shape_11.setTransform(56.8,58.3,1.017,1.017);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#246C1E").s().p("AgkCAQgUgJgHgNQgLgVAWgmQgIAFgLAAQgKgBgIgGQgPgLgFgWQgGgbATgcQATgbAegEQgBgiARgRQAKgKAPAAQAOAAAIALQAbgRAXAdQAXAdgUAUQAQAAAMAMQAMAMACARQACAUgFAJQgIARgaALIgEAfQgLAdglgJQACAPgHAQQgIAQgLACIgGABQgNAAgPgIg");
	this.shape_12.setTransform(56.8,58.3,1.017,1.017);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#265820").ss(0.5,0,1).p("ABHgKQgcAMgjgIQgRgFgkgVIgGgHQgLAggCAjIgDAMQAUgMAuACQAoABAXAJ");
	this.shape_13.setTransform(43.7,54.2,1.017,1.017);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#44883B").s().p("AgDAeQgugCgTAMIACgMQADgjAKggIAGAHQAlAVARAFQAjAIAbgMIgIAyQgXgJgpgBg");
	this.shape_14.setTransform(43.9,54.2,1.017,1.017);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#265820").ss(0.6,0,1).p("AA3hJQAMgLAQgDQARgFAKAJQALAKAFAVQAFAWgGANQgFALgRAGQgOAHgRACQAJADAGAJQAGAIABAKQABASgOASQgUAYghABQgfACgWgVQgaAWgYgCQgOgCgKgMQgJgMADgNQgdgKAIglQAIgiAcADQgKgMACgRQACgRAMgMQAOgOAMgDQASgFAZAOIAZgQQAdgJAQAig");
	this.shape_15.setTransform(25,49.5,1.017,1.017);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#246C1E").s().p("AhLBlQgOgCgKgMQgJgMADgNQgdgKAIglQAIgiAcADQgKgMACgRQACgRAMgMQAOgOAMgDQASgFAZAOIAZgQQAdgJAQAiQAMgLAQgDQARgFAKAJQALAKAFAVQAFAWgGANQgFALgRAGQgOAHgRACQAJADAGAJQAGAIABAKQABASgOASQgUAYghABQgfACgWgVQgXAUgWAAIgFAAg");
	this.shape_16.setTransform(25,49.5,1.017,1.017);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#265820").ss(0.5,0,1).p("AhAgtQAdANAOAgQAIASAGApIgCAJQAegLAegWIALgFQgVgIgcgjQgXgigHgY");
	this.shape_17.setTransform(31.4,61.8,1.017,1.017);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#44883B").s().p("AgGA9QgGgpgIgTQgOgfgcgNIAugaQAHAYAYAiQAbAjAVAIIgKAFQgfAVgeAMg");
	this.shape_18.setTransform(31.2,61.6,1.017,1.017);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#265820").ss(0.6,0,1).p("AAMhbQAEgPAMgLQANgNANACQAOADAPAQQAQAQABAOQACANgLAQQgIAMgOALQAJgCAKAEQAJAEAGAIQALAOgEAWQgEAegcATQgcATgdgHQgKAggVAKQgNAGgOgGQgPgFgDgNQgfAGgMgjQgMgjAagMQgOgFgHgQQgHgOAEgQQAFgTAIgJQAOgOAcgBQAEgPALgMQAVgXAdAVg");
	this.shape_19.setTransform(34.3,36,1.017,1.017);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#246C1E").s().p("AglB+QgPgFgDgNQgfAGgMgjQgMgjAagMQgOgFgHgQQgHgOAEgQQAFgTAIgJQAOgOAcgBQAEgPALgMQAVgXAdAVQAEgPAMgLQANgNANACQAOADAPAQQAQAQABAOQACANgLAQQgIAMgOALQAJgCAKAEQAJAEAGAIQALAOgEAWQgEAegcATQgcATgdgHQgKAggVAKQgHADgHAAQgHAAgGgDg");
	this.shape_20.setTransform(34.3,36,1.017,1.017);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#265820").ss(0.5,0,1).p("AhLgMQAfgDAdATQAPAMAZAgIADAJQAXgcAOgeIAHgKQgXAEgqgRQglgRgTgR");
	this.shape_21.setTransform(45.9,44,1.017,1.017);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#44883B").s().p("AAcAxQgagggPgMQgdgTgfADIAaguQATARAlAQQArASAWgEIgHAKQgOAegWAcg");
	this.shape_22.setTransform(45.7,43.9,1.017,1.017);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2E2E2").s().p("ApkECQj+hrAAiXQAAiWD+hrQD/hsFlAAQFnAAD9BsQD/BrAACWQAACXj/BrQj9BslnAAQlmAAj+hsg");
	this.shape_23.setTransform(88.2,46.1,1.017,1.017);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4C4C4").s().p("ApkECQj+hqAAiYQAAiXD+hqQD+hrFmAAQFnAAD9BrQD/BqAACXQAACYj/BqQj9BrlnAAQlmAAj+hrg");
	this.shape_24.setTransform(88.2,49.3,1.017,1.017);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.shape_10},{t:this.instance_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.3,86.5);


(lib.dehydration_slide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.dehydration_symptom();
	this.instance.setTransform(101.9,115.9,1,1,0,0,0,101.5,47.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:72.9,alpha:1},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,68.7,203.1,94.4);


(lib.damaged_pancreas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.pancreas_eye("single",0);
	this.instance.setTransform(173.6,31.7,1,1,0,0,180,21.6,21.8);

	this.instance_1 = new lib.pancreas_eye("single",0);
	this.instance_1.setTransform(131.7,26.9,1,1,0,0,0,21.6,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{startPosition:0,rotation:0,x:131.7,y:26.9}},{t:this.instance,p:{startPosition:0,skewX:0,skewY:180,x:173.6,y:31.7}}]}).to({state:[{t:this.instance_1,p:{startPosition:1,rotation:0,x:131.7,y:26.9}},{t:this.instance,p:{startPosition:1,skewX:0,skewY:180,x:173.6,y:31.7}}]},14).to({state:[{t:this.instance_1,p:{startPosition:1,rotation:2.5,x:132.8,y:27.1}},{t:this.instance,p:{startPosition:1,skewX:2.5,skewY:-177.5,x:174.4,y:33.6}}]},4).to({state:[{t:this.instance_1,p:{startPosition:1,rotation:0,x:131.7,y:26.9}},{t:this.instance,p:{startPosition:1,skewX:0,skewY:180,x:173.6,y:31.7}}]},4).to({state:[{t:this.instance_1,p:{startPosition:1,rotation:2.5,x:132.8,y:27.1}},{t:this.instance,p:{startPosition:1,skewX:2.5,skewY:-177.5,x:174.4,y:33.6}}]},4).to({state:[{t:this.instance_1,p:{startPosition:1,rotation:0,x:131.7,y:26.9}},{t:this.instance,p:{startPosition:1,skewX:0,skewY:180,x:173.6,y:31.7}}]},4).to({state:[{t:this.instance_1,p:{startPosition:1,rotation:2.5,x:132.8,y:27.1}},{t:this.instance,p:{startPosition:1,skewX:2.5,skewY:-177.5,x:174.4,y:33.6}}]},4).to({state:[{t:this.instance_1,p:{startPosition:1,rotation:0,x:131.7,y:26.9}},{t:this.instance,p:{startPosition:1,skewX:0,skewY:180,x:173.6,y:31.7}}]},5).to({state:[{t:this.instance_1,p:{startPosition:1,rotation:2.5,x:132.8,y:27.1}},{t:this.instance,p:{startPosition:1,skewX:2.5,skewY:-177.5,x:174.4,y:33.6}}]},4).to({state:[{t:this.instance_1,p:{startPosition:1,rotation:0,x:131.7,y:26.9}},{t:this.instance,p:{startPosition:1,skewX:0,skewY:180,x:173.6,y:31.7}}]},5).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#918031").s().p("AglAhQgRgbAAgXQAAg5BPgDQAhgBAXALQAZALAAASQAAAKgJAGQgQAKgOALQAKAOANAMQAEAFAAAMQAAAOgEAHQgKAPgfAAQg7AAgbgtgAAAAbIAAAHQAAADgCADIAAABQATAQAgAAQASAAAGgHQADgEgBgEQgBgFgOgNIAAgBIgFABQgHAAgDgGQgDgGgHAAQgCAAgEAJQgFAJgIAAQgEAAgFgFQgEgFgDgBQAAADAAAFgAhoANIgBgNQAAgPAMgLQANgLAAARIgDAIQgCAIAAAEQAAAFAEAEQAGAEAAAFQgBAEgCADQgDADgEAAQgPAAgEgPg");
	this.shape.setTransform(147.1,64.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#918031").s().p("ACkA0IAAgFQgBgGANgGQANgHABgIQAAgHgKgJQgKgHAAgHQgBgVAVASQATARAAASQAAAHgHAMQgJAQgPAAQgLAAgDgFgAANAIQhUgLhIAAQgIAAgCgFIgCgFQABgIAGgFQAOgLAmAFIAAgBIBIAAQAYAFBNAIQBBAJAAALQgBAGgGAGQgKAJgWAAIhagNgAjRAEIAAgHQAAgVAWgVQAUgVAAAXQABACgLANQgLAOAAAIQAAADACADQABAAAAADQABAKgMAAQgKAAgDgJg");
	this.shape_1.setTransform(154.6,66.5);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#918031").s().p("ACvBAQgKAAgDgFIAAgGQAAgGANgFQANgGABgIQAAgHgKgJQgJgKAAgFQABgVATATQATARAAASQgBAIgIAMQgJAOgPAAIgBAAgABnAZIhagRQhTgPhJgDQgIAAgCgFIgBgFQABgIAHgFQAOgKAlAGIAAgBIBIADQAYAGBNAMQBAAMAAAJQgBAIgHAFQgJAIgSAAIgEAAgAjFAEQgJgBgCgGIAAgJQABgWAWgUQAWgUgBAXQgBACgLANQgMANAAAJQAAACACADQACADgBACQAAAIgKAAIgCAAg");
	this.shape_2.setTransform(153.9,67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},14).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_1}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(14).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(5).to({_off:false},0).to({_off:true},4).wait(5).to({_off:false},0).wait(1));

	// FlashAICB
	this.instance_2 = new lib.Path_7_2();
	this.instance_2.setTransform(129.6,50.6,1,1,0,0,0,103.5,37.7);
	this.instance_2.alpha = 0.691;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#918031").s().p("At9G9QgvgJgfgUQghgWgWgoQhBh0gJhoQgDgeAHgdIASg3QAKgdAIgtIANhNQAJguAJgYQANgnAUgXQAkgpAxgqQA/g0AsgYQBEgkA5AKQATAEA0AaQAqAUAigEQATgDAugKQAqgHAXAJQBKAcAeAIQAWAFAeADIAzAEQBMAJAgAmQADAEAHAPQAFAMAKAFIAcANQASAHALAHQAHAGAPARQANANAPgIIAZgPIAZgOQAVgKAQADQAPACATAPIArAnQAbAXAVAFQAPADAVABIAlAAQBQABBIAZIBMAZQAsARAaAVQAoAiArA+QA+BcAMANQAyA3A7ABIBeAAQA8AEAdAWQAoAdgaAzQgVAqgrAbQgdASghAGQgeAGglgDIgggCQgTAAgOABQgRACgYAIIgpAOQg5APgjAGQg4AIglgJQgQgEgYgKQgdgNgLgDQgUgHgYABIgsAFQiJANg5ABQhwAChOgYQgigLgqgzQgdgkgKgdQgqAVhDgNQhcgbgogFQhrgLgfgKQg7gSgcgoIAAAAIgBAAIgOAfIgNAcQgHARAAAHQAEAJgHAHQgWAVgPBHQgOA/gmAUQgrAXg2AFQgRACgRAAQghAAgjgGg");
	this.shape_3.setTransform(129.2,50.5);

	this.instance_3 = new lib.Path_9_2();
	this.instance_3.setTransform(131.2,55.7,1,1,0,0,0,110.2,45.3);
	this.instance_3.alpha = 0.07;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#918031").s().p("At9G9QgvgJgfgUQghgWgWgoQhBh0gJhoQgDgeAHgdIASg3QAKgdAIgtIANhNQAJguAJgYQANgnAUgXQAkgpAxgqQA/g0AsgYQBEgkA5AKQATAEA0AaQAqAUAigEQATgDAugKQAqgHAXAJQBKAcAeAIQAWAFAeADIAzAEQBMAJAgAmQADAEAHAPQAFAMAKAFIAcANQASAHALAHQAHAGAPARQANANAPgIIAZgPIAZgOQAVgKAQADQAPACATAPIArAnQAbAXAVAFQAPADAVABIAlAAQBQABBIAZIBMAZQAsARAaAVQAoAiArA+QA+BcAMANQAyA3A7ABIBeAAQA8AEAdAWQAoAdgaAzQgVAqgrAbQgdASghAGQgeAGglgDIgggCQgTAAgOABQgRACgYAIIgpAOQg5APgjAGQg4AIglgJQgQgEgYgKQgdgNgLgDQgUgHgYABIgsAFQiJANg5ABQhwAChOgYQgigLgqgzQgdgjgKgeQgqAVhDgNQhcgbgogFQhrgLgfgKQg7gSgcgoIAAAAIgBAAIgOAfIgNAcQgHARAAAHQAEAJgHAHQgWAVgPBHQgOA/gmAUQgrAXg2AFQgRACgRAAQghAAgjgGgArcmgQh0Aeh3CIQgpAugPBlQgSB2gSAlQgcA3AaBcQATBFApBHQAiA5BHATQA/AQBIgRQApgJAUgSQAXgUAJgmIAOg4QAIgaANgPQAAgMAIgUIASgmIANggQAGgOAHgIQACgEAHgCIACgBIgBAAIgEABIAAAAQAFgEAGACIABABQAHACABAEIgBgBIACACIAAABIABACIABACIABAEIgCgGQAVA2BQASQAsALBXAFQASADAZAIIAqANQAkAJAgAAQAtABAUgQQAIgHAJAEQAIADABAKQACATAUAaQAJAMAZAZQAXAaAYAMQAZANAkADQAtAEA6gBIBngEIBVgIQA1gHAgACQASABAZAMIApASQAoANA9gHQBCgIAsgQIAggLQATgGAOgCQARgBA6ADQAvADAagJQAggKAqgoQAygvghgUQghgUg7gBQhCABgfgCQgygEgtgtQgagagpg9IgrhAQgbgkgagWQgfgZg0gUQgVgIhGgUQghgKg0gCQhFgCgRgCQgcgEgcgSQgPgKghgcIgagVQgQgKgOAIIgZAOIgVANQgNAHgKACQgXAFgRgQQgXgagIgEQgegMgQgIQgcgQgDgVQgEgcg3gLQghgGgsAAQgWAAgegHIg0gQIgxgSQgdgLgVADIhLANQgvAHgdgKQgrgXgVgJQgYgLgWAAQgNAAgMADg");
	this.shape_4.setTransform(129.2,50.8,1,0.908);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#918031").s().p("AvSGLQgtgqgnh4QgqiAAcgzQARghAXiAQAVhyAmgnQDrj1B2BiQAlAeBRgOQBYgPAVALQAKAJBBASQBBASAPgBQAkgEAuANQA3APAMAbQAAAWAqARQAxAUAKAXQANAYAxgdQA1ggAOAHQALAGAoAiQAlAgAWAJQAPAHA+AAQBDABATAFQAhAIAsAPIBJAZQAwAPAqAvQAZAbArBAQAqA/AYAaQAoApAsAIQAEABA0AAQA2ABAhAEQBuARgvBFQg3BRhYACIhHgDQgpgBgbALQgvASg3AKQg4AKgygBQgVgBg0gXQgvgUgdAFQhPANi0ADQgyABgdgDQgrgEgkgMQgUgHgsg1Qgug1AAgWQgRARg9AAQg7AAgYgNQgXgMg0gGQg/gHgggEQh3gTgYhDQAGASgDgCQgCgCgBgPQgBgKgdBFQgcBDAIgGQgPALgOA0IgSBEQgYBAh8AFIgVAAQhmAAgsgpg");
	this.shape_5.setTransform(129.2,50.7,1,0.908);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{regY:45.3,scaleY:1,y:55.7,regX:110.2,rotation:0,x:131.2}},{t:this.shape_3},{t:this.instance_2,p:{regY:37.7,scaleY:1,y:50.6,regX:103.5,rotation:0,x:129.6}}]}).to({state:[{t:this.instance_3,p:{regY:45.4,scaleY:0.908,y:55.6,regX:110.2,rotation:0,x:131.2}},{t:this.shape_5,p:{rotation:0,x:129.2,y:50.7}},{t:this.shape_4,p:{rotation:0,x:129.2,y:50.8}},{t:this.instance_2,p:{regY:37.8,scaleY:0.908,y:50.9,regX:103.5,rotation:0,x:129.6}}]},14).to({state:[{t:this.instance_3,p:{regY:45.1,scaleY:0.908,y:55.6,regX:110,rotation:2.5,x:131}},{t:this.shape_5,p:{rotation:2.5,x:129.5,y:50.9}},{t:this.shape_4,p:{rotation:2.5,x:129.5,y:50.9}},{t:this.instance_2,p:{regY:37.4,scaleY:0.908,y:50.9,regX:103.4,rotation:2.5,x:129.7}}]},4).to({state:[{t:this.instance_3,p:{regY:45.4,scaleY:0.908,y:55.6,regX:110.2,rotation:0,x:131.2}},{t:this.shape_5,p:{rotation:0,x:129.2,y:50.7}},{t:this.shape_4,p:{rotation:0,x:129.2,y:50.8}},{t:this.instance_2,p:{regY:37.8,scaleY:0.908,y:50.9,regX:103.5,rotation:0,x:129.6}}]},4).to({state:[{t:this.instance_3,p:{regY:45.1,scaleY:0.908,y:55.6,regX:110,rotation:2.5,x:131}},{t:this.shape_5,p:{rotation:2.5,x:129.5,y:50.9}},{t:this.shape_4,p:{rotation:2.5,x:129.5,y:50.9}},{t:this.instance_2,p:{regY:37.4,scaleY:0.908,y:50.9,regX:103.4,rotation:2.5,x:129.7}}]},4).to({state:[{t:this.instance_3,p:{regY:45.4,scaleY:0.908,y:55.6,regX:110.2,rotation:0,x:131.2}},{t:this.shape_5,p:{rotation:0,x:129.2,y:50.7}},{t:this.shape_4,p:{rotation:0,x:129.2,y:50.8}},{t:this.instance_2,p:{regY:37.8,scaleY:0.908,y:50.9,regX:103.5,rotation:0,x:129.6}}]},4).to({state:[{t:this.instance_3,p:{regY:45.1,scaleY:0.908,y:55.6,regX:110,rotation:2.5,x:131}},{t:this.shape_5,p:{rotation:2.5,x:129.5,y:50.9}},{t:this.shape_4,p:{rotation:2.5,x:129.5,y:50.9}},{t:this.instance_2,p:{regY:37.4,scaleY:0.908,y:50.9,regX:103.4,rotation:2.5,x:129.7}}]},4).to({state:[{t:this.instance_3,p:{regY:45.4,scaleY:0.908,y:55.6,regX:110.2,rotation:0,x:131.2}},{t:this.shape_5,p:{rotation:0,x:129.2,y:50.7}},{t:this.shape_4,p:{rotation:0,x:129.2,y:50.8}},{t:this.instance_2,p:{regY:37.8,scaleY:0.908,y:50.9,regX:103.5,rotation:0,x:129.6}}]},5).to({state:[{t:this.instance_3,p:{regY:45.1,scaleY:0.908,y:55.6,regX:110,rotation:2.5,x:131}},{t:this.shape_5,p:{rotation:2.5,x:129.5,y:50.9}},{t:this.shape_4,p:{rotation:2.5,x:129.5,y:50.9}},{t:this.instance_2,p:{regY:37.4,scaleY:0.908,y:50.9,regX:103.4,rotation:2.5,x:129.7}}]},4).to({state:[{t:this.instance_3,p:{regY:45.4,scaleY:0.908,y:55.6,regX:110.2,rotation:0,x:131.2}},{t:this.shape_5,p:{rotation:0,x:129.2,y:50.7}},{t:this.shape_4,p:{rotation:0,x:129.2,y:50.8}},{t:this.instance_2,p:{regY:37.8,scaleY:0.908,y:50.9,regX:103.5,rotation:0,x:129.6}}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264.4,107.7);


(lib.clock = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{breakfast:0,lunch_syringe:138,lunch_food:276,dinner_syringe:500,dinner_food:638});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_135 = function() {
		this.stop();
	}
	this.frame_138 = function() {
		this.stop();
	}
	this.frame_170 = function() {
		this.stop();
	}
	this.frame_273 = function() {
		this.stop();
	}
	this.frame_386 = function() {
		this.stop();
	}
	this.frame_497 = function() {
		this.stop();
	}
	this.frame_532 = function() {
		this.stop();
	}
	this.frame_635 = function() {
		this.stop();
	}
	this.frame_748 = function() {
		this.stop();
	}
	this.frame_859 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(103).call(this.frame_135).wait(3).call(this.frame_138).wait(32).call(this.frame_170).wait(103).call(this.frame_273).wait(113).call(this.frame_386).wait(111).call(this.frame_497).wait(35).call(this.frame_532).wait(103).call(this.frame_635).wait(113).call(this.frame_748).wait(111).call(this.frame_859).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#849190").s().p("AgfAgQgNgNAAgTQAAgRANgOQAOgNARAAQATAAANANQANAOAAARQAAATgNANQgNANgTAAQgRAAgOgNg");
	this.shape.setTransform(45,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(860));

	// hour
	this.instance = new lib.HOUR();
	this.instance.setTransform(45.5,42.7,1,1,-117.4,0,0,0.1,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1,scaleY:1,rotation:-104.6,x:45.6,y:42.9},32).to({regY:18.7,scaleX:1,scaleY:1,rotation:-89.7,y:42.8},38).to({regX:0.1,rotation:-59.7,x:45.7,y:42.7},52).to({regY:18.8,scaleX:1,scaleY:1,rotation:-47.9,y:42.9},13).to({_off:true},2).wait(1).to({_off:false,regX:0,scaleX:1,scaleY:1,rotation:0,x:45,y:42.5},0).to({regX:0.1,rotation:29.2,x:45.1},70).to({rotation:58.8,y:42.6},52).to({scaleX:1,scaleY:1,rotation:70.2,x:45.2},13).wait(3).to({regX:0,scaleX:1,scaleY:1,rotation:0,x:45,y:42.5},0).to({regX:0.1,rotation:29.2,x:45.1},151).to({rotation:58.8,y:42.6},56).to({scaleX:1,scaleY:1,rotation:70.2,x:45.2},14).wait(3).to({regY:18.7,scaleX:1,scaleY:1,rotation:178.9,x:45.4},0).to({regY:18.6,rotation:210.4,y:42.7},70).to({rotation:242.6,x:45.5},52).to({regX:0,scaleX:1,scaleY:1,rotation:255.4,x:45.6,y:42.9},13).to({_off:true},2).wait(1).to({_off:false,regX:0.1,regY:18.7,scaleX:1,scaleY:1,rotation:178.9,x:45.4,y:42.6},0).to({regY:18.6,rotation:210.4,y:42.7},151).to({rotation:242.6,x:45.5},56).to({regX:0,scaleX:1,scaleY:1,rotation:255.4,x:45.6,y:42.9},14).wait(1));

	// minute
	this.instance_1 = new lib.minute();
	this.instance_1.setTransform(45,42.4,1,1,0,0,0,0,30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:90,x:45.1},32).to({rotation:180,x:45,y:42.5},12).to({rotation:270,y:42.4},13).to({rotation:360},13).to({rotation:450,x:45.1},13).to({rotation:540,x:45,y:42.5},13).to({rotation:630,y:42.4},13).to({rotation:720},13).to({rotation:810,x:45.1},13).to({_off:true},2).wait(1).to({_off:false,rotation:720,x:45},0).to({rotation:810,x:45.1},32).to({rotation:900,x:45,y:42.5},12).to({rotation:990,y:42.4},13).to({rotation:1080},13).to({rotation:1170,x:45.1},13).to({rotation:1260,x:45,y:42.5},13).to({rotation:1350,y:42.4},13).to({rotation:1440},13).to({rotation:1530,x:45.1},13).wait(3).to({rotation:1440,x:45},0).to({rotation:1530,x:45.1},110).to({rotation:1620,x:45,y:42.5},13).to({rotation:1710,y:42.4},14).to({rotation:1800},14).to({rotation:1890,x:45.1},14).to({rotation:1980,x:45,y:42.5},14).to({rotation:2070,y:42.4},14).to({rotation:2160},14).to({rotation:2250,x:45.1},14).wait(3).to({rotation:2160,x:45},0).to({rotation:2250,x:45.1},32).to({rotation:2340,x:45,y:42.5},12).to({rotation:2430,y:42.4},13).to({rotation:2520},13).to({rotation:2610,x:45.1},13).to({rotation:2700,x:45,y:42.5},13).to({rotation:2790,y:42.4},13).to({rotation:2880},13).to({rotation:2970,x:45.1},13).to({_off:true},2).wait(1).to({_off:false,rotation:2880,x:45},0).to({rotation:2970,x:45.1},110).to({rotation:3060,x:45,y:42.5},13).to({rotation:3150,y:42.4},14).to({rotation:3240},14).to({rotation:3330,x:45.1},14).to({rotation:3420,x:45,y:42.5},14).to({rotation:3510,y:42.4},14).to({rotation:3600},14).to({rotation:3690,x:45.1},14).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#839190").s().p("AgJF2IABgyIAIABIAAAxgACaEdIAIgEIAZArIgKAFgAjDE+IAagqIAIAFIgZAsgAEUCqIAFgIIArAYIgGAKgAlJCyIAtgYIAEAIIgrAagAFEAJIABgJIAxAAIAAAKgAl2gJIAzACIAAAHIgzAAgAEYijIAsgYIAEAJIgrAYgAlEi5IAFgKIArAbIgFAIgAChkZIAYgrIAKAFIgaArgAi7lDIAKgGIAXAtIgIAEgAAAlDIAAgzIAJAAIgBAzg");
	this.shape_1.setTransform(45,42,0.989,0.989);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#ABBFBE").ss(4).p("AGkAAQAACth7B8Qh7B7iuAAQitAAh7h7Qh7h8AAitQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtg");
	this.shape_2.setTransform(45,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("AknEpQh8h8AAitQAAisB8h7QB6h7CtgBQCuABB6B7QB8B7AACsQAACth8B8Qh6B6iuAAQitAAh6h6g");
	this.shape_3.setTransform(45,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(860));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-2,88,89.3);


(lib.burger_handcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C966CC").s().p("Ag0BsQgBgRA6g1IAAAAQgDAAgJALQgLALgGAAQgHAAgBgIQABgDAJgMIAPgRIgDgEQgEACgKAAIgCgBIgCgBQgJAKgCAAQgLAAABgLIgKADQgFAAgCgFIgCgEQAAgDANgSIANgUIAAgBQgEADgQAPIgPAPQgJAAAAgHQAAgGAMgLQANgMABgFQADgNAMgQIALgTQAGgJAGgCQgFgFAAgBIACgFQADgEAFAAQAFABATASIAaAYIAmATQAOAHAAAPQAAAEgFAJQAHAJAAAIQAAAHgiAfQgjAigSAAQgCAAgDgCIgNAOIgJARQgJAPgIABQgIgBAAgHgABFgfIAAgCIgJgGIAJAIgAABhQIAgAWIgNgKIgUgQIABAEg");
	this.shape.setTransform(16.2,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B58F67").s().p("AhGAgIAzg5QAdgRAeAAQAfAAAAAVQAAASg6AcQggASgXAAQgSAAgKgLg");
	this.shape_1.setTransform(29,34.1,0.634,0.634);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B58F67").s().p("Ag9gDQAZggA0gTQA8gVgSA4QgHAcgmAYQgdAUgiAHg");
	this.shape_2.setTransform(29.4,29.2,0.634,0.634);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B58F67").s().p("AhCA6QAFggAjgzQAng9AdAHQAtAJgjBGQgWAnghApg");
	this.shape_3.setTransform(25.8,24.5,0.634,0.634);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B58F67").s().p("AgsgLQgJhTAsgGQBFgIgQCgIhBAxQgShGgFgqg");
	this.shape_4.setTransform(19.6,23.9,0.634,0.634);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B58F67").s().p("AABByIg8goIAJgdQAKghgMgYIgBAHQhEAFgYgZQgYgZAngcQAPgMApARQAVAIAaAOQAOAEAGgNQACgNACABIgCgOQAFgUAMgIQALgIAXgEQAfgDAiAlQAbAdAOAjQAMAhghAzQgeAvgnAVQgIADgJAAQgTAAgZgNg");
	this.shape_5.setTransform(18.4,33.7,0.634,0.634);

	this.instance = new lib.Path_0_1();
	this.instance.setTransform(28.7,8.4,0.634,0.634,0,0,0,0.7,0.7);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Path_1_5();
	this.instance_1.setTransform(21.4,15.8,0.634,0.634,0,0,0,0.8,1.2);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(27.6,12.6,0.634,0.634,0,0,0,0.8,1.2);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Path_3_3();
	this.instance_3.setTransform(23.5,8.4,0.634,0.634,0,0,0,0.6,0.7);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Path_4_4();
	this.instance_4.setTransform(19.6,10.1,0.634,0.634,0,0,0,0.6,0.8);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Path_5_2();
	this.instance_5.setTransform(15.9,9.6,0.634,0.634,0,0,0,1.6,1.9);
	this.instance_5.alpha = 0.391;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6B66F").s().p("Aj+B6QhrhWBWiSQAdgyBQgeQgJAKgBAPQgBANAHAMQAOAaA7gaQgIAVAHAUQAGAUAPAGQAUAIAZgLQAagLAZgeQAGAeAdAJQAWAIASgGQAdgHAHgQQAFgLgCgfQAIAFAUAEQAWAEAKgEQAKgEADgQIACgaQARAKAXAVQAVAUANARQAZAlAGAuQAHAzgXAsQg4ByjUAIIghABQijAAhXhFg");
	this.shape_6.setTransform(23.4,12.1,0.634,0.634);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E25037").s().p("AgnBPQg7gTgfglQgegiARghQARghA2gKQA2gKA5ASQA8ATAeAlQAeAigQAhQgRAig2AKQgUAEgUAAQgiAAgmgNg");
	this.shape_7.setTransform(12.2,17.3,0.634,0.634);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#943E32").s().p("AgnBPQg7gSgfglQgegjARghQAQghA2gKQA2gKA6ASQA7ATAfAlQAeAigQAhQgRAig2AKQgUAEgTAAQgjAAgmgNg");
	this.shape_8.setTransform(11.9,17.8,0.634,0.634);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E25037").s().p("AiHBLQg5gfAAgsQAAgrA5gfQA4ggBPAAQBQAAA4AgQA5AfAAArQAAAsg5AfQg5AghPAAQhPAAg4ggg");
	this.shape_9.setTransform(28.7,18.6,0.634,0.634);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#943E32").s().p("AiHBLQg5gfAAgsQAAgrA5ggQA4gfBPAAQBQAAA4AfQA5AgAAArQAAAsg5AfQg5AghPAAQhPAAg4ggg");
	this.shape_10.setTransform(28.7,19.3,0.634,0.634);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#54BE6F").s().p("ABgDNQgagBgsgJIhBgZQgXgIgpAWQglAUgngFQgrgFgOgjQgHgRAAgPIAAgQQgDgGg8gEQgugDgQgRQgRgTAkgaQApgegDgGIgrgbQgjgWAhgiQAsgjAJgKQAKgKgLgOQgOgSAAgGQAAgZAngCQAVgBApADIA7BTICpAeIBogGIBNhEIAzgrQAzAAgBAZQgBASgeAiQgHAIAMACIAhACQA5ACALAZQANAhgPAUQgJANgjAaQgLALAIAOQACADAUAWQAeAggsAXQgkAUgXAGQgTAFgwAGQgTACgHAPQgKAWgEAEQgTASgpAAIgFgBg");
	this.shape_11.setTransform(23.8,16.1,0.634,0.634);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#71511E").s().p("AhdBYQhZgThKglQgjgSAAg0QAGg2gDgIIJBA5QAeBQjlA3QgjAJgqAAQgwAAg6gNg");
	this.shape_12.setTransform(22.1,23.3,0.634,0.634);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6B66F").s().p("Aj8BZQhrhWBWiSQANgXAfAQQATAKAwApQBvBfA5AAQAkABAtggQAYgRA0gwQAsgpAWgKQAggQATAYQAZAlAGAvQAHA0gWArQg5BxjSAJIghABQiiAAhWhGg");
	this.shape_13.setTransform(22.3,20.5,0.634,0.634);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C49B63").s().p("Aj8BiQhrhVBWiSQAUgkBZAUIBQATQAxAKAigCQAjgDAxgNIBNgXQBTgUAlAwQAZAkAGAvQAHAzgWAsQg5ByjSAIIgfABQijAAhXhGg");
	this.shape_14.setTransform(22.3,22.3,0.634,0.634);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B58F67").s().p("AAABMIgXgFQgPgCgJgFQgJgEAAgFIACgJIAJgYIACgHQAHgYAFgLIAAgCIADgFIABgBIgBgDQAAgGAHgSQAJgVAIgFIAAAAIABABQgEAGgEAOIABgBQAFAAAAAEIgCAIQACgDADAAIACAAIAAACIgGAJIACADQADgKAHgIQAJgIAAALQAAACgEAHIAGACIADgCQACgDADAAQAIAAgBAHQAAAGgEAJIADABIAFgEIAGgEQAGABACAGIAAgHQADgIACABQACACAAAEQAAAUgKApIgGASQgMAkgFAAIgYgGg");
	this.shape_15.setTransform(17,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,60.1);


(lib.burger_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#886B4D").s().p("AhGAgIAzg5QAdgRAeAAQAfAAAAAVQAAASg6AcQggASgXAAQgSAAgKgLg");
	this.shape.setTransform(29,34.1,0.634,0.634);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#886B4D").s().p("Ag9gDQAZggA0gTQA8gVgSA4QgHAcgmAYQgdAUgiAHg");
	this.shape_1.setTransform(29.4,29.2,0.634,0.634);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#886B4D").s().p("AhCA6QAFggAjgzQAng9AdAHQAtAJgjBGQgWAnghApg");
	this.shape_2.setTransform(25.8,24.5,0.634,0.634);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#886B4D").s().p("AgsgLQgJhTAsgGQBFgIgQCgIhBAxQgShGgFgqg");
	this.shape_3.setTransform(19.6,23.9,0.634,0.634);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#886B4D").s().p("AABByIg8goIAJgdQAKghgMgYIgBAHQhEAFgYgZQgYgZAngcQAPgMApARQAVAIAaAOQAOAEAGgNQACgNACABIgCgOQAFgUAMgIQALgIAXgEQAfgDAiAlQAbAdAOAjQAMAhghAzQgeAvgnAVQgIADgJAAQgTAAgZgNg");
	this.shape_4.setTransform(18.4,33.7,0.634,0.634);

	this.instance = new lib.Path_0_1();
	this.instance.setTransform(28.7,8.4,0.634,0.634,0,0,0,0.7,0.7);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Path_1_5();
	this.instance_1.setTransform(21.4,15.8,0.634,0.634,0,0,0,0.8,1.2);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(27.6,12.6,0.634,0.634,0,0,0,0.8,1.2);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Path_3_3();
	this.instance_3.setTransform(23.5,8.4,0.634,0.634,0,0,0,0.6,0.7);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Path_4_4();
	this.instance_4.setTransform(19.6,10.1,0.634,0.634,0,0,0,0.6,0.8);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Path_5_2();
	this.instance_5.setTransform(15.9,9.6,0.634,0.634,0,0,0,1.6,1.9);
	this.instance_5.alpha = 0.391;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6B66F").s().p("Aj+B6QhrhWBWiSQAdgyBQgeQgJAKgBAPQgBANAHAMQAOAaA7gaQgIAVAHAUQAGAUAPAGQAUAIAZgLQAagLAZgeQAGAeAdAJQAWAIASgGQAdgHAHgQQAFgLgCgfQAIAFAUAEQAWAEAKgEQAKgEADgQIACgaQARAKAXAVQAVAUANARQAZAlAGAuQAHAzgXAsQg4ByjUAIIghABQijAAhXhFg");
	this.shape_5.setTransform(23.4,12.1,0.634,0.634);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E25037").s().p("AgnBPQg7gTgfglQgegiARghQARghA2gKQA2gKA5ASQA8ATAeAlQAeAigQAhQgRAig2AKQgUAEgUAAQgiAAgmgNg");
	this.shape_6.setTransform(12.2,17.3,0.634,0.634);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#943E32").s().p("AgnBPQg7gSgfglQgegjARghQAQghA2gKQA2gKA6ASQA7ATAfAlQAeAigQAhQgRAig2AKQgUAEgTAAQgjAAgmgNg");
	this.shape_7.setTransform(11.9,17.8,0.634,0.634);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E25037").s().p("AiHBLQg5gfAAgsQAAgrA5gfQA4ggBPAAQBQAAA4AgQA5AfAAArQAAAsg5AfQg5AghPAAQhPAAg4ggg");
	this.shape_8.setTransform(28.7,18.6,0.634,0.634);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#943E32").s().p("AiHBLQg5gfAAgsQAAgrA5ggQA4gfBPAAQBQAAA4AfQA5AgAAArQAAAsg5AfQg5AghPAAQhPAAg4ggg");
	this.shape_9.setTransform(28.7,19.3,0.634,0.634);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#54BE6F").s().p("ABgDNQgagBgsgJIhBgZQgXgIgpAWQglAUgngFQgrgFgOgjQgHgRAAgPIAAgQQgDgGg8gEQgugDgQgRQgRgTAkgaQApgegDgGIgrgbQgjgWAhgiQAsgjAJgKQAKgKgLgOQgOgSAAgGQAAgZAngCQAVgBApADIA7BTICpAeIBogGIBNhEIAzgrQAzAAgBAZQgBASgeAiQgHAIAMACIAhACQA5ACALAZQANAhgPAUQgJANgjAaQgLALAIAOQACADAUAWQAeAggsAXQgkAUgXAGQgTAFgwAGQgTACgHAPQgKAWgEAEQgTASgpAAIgFgBg");
	this.shape_10.setTransform(23.8,16.1,0.634,0.634);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#71511E").s().p("AhdBYQhZgThKglQgjgSAAg0QAGg2gDgIIJBA5QAeBQjlA3QgjAJgqAAQgwAAg6gNg");
	this.shape_11.setTransform(22.1,23.3,0.634,0.634);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6B66F").s().p("Aj8BZQhrhWBWiSQANgXAfAQQATAKAwApQBvBfA5AAQAkABAtggQAYgRA0gwQAsgpAWgKQAggQATAYQAZAlAGAvQAHA0gWArQg5BxjSAJIghABQiiAAhWhGg");
	this.shape_12.setTransform(22.3,20.5,0.634,0.634);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C49B63").s().p("Aj8BiQhrhVBWiSQAUgkBZAUIBQATQAxAKAigCQAjgDAxgNIBNgXQBTgUAlAwQAZAkAGAvQAHAzgWAsQg5ByjSAIIgfABQijAAhXhGg");
	this.shape_13.setTransform(22.3,22.3,0.634,0.634);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#886B4D").s().p("AAABMIgXgFQgPgCgJgFQgJgEAAgFQAAgHALgaIACgHQAHgYAFgLIAAgCIADgFIABgBIgBgDQAAgGAHgSQAJgVAIgFIAAAAIABABQgEAGgEAOIABgBQAFAAAAAEIgCAIQACgDADAAIACAAIAAACIgGAJIACADQADgKAHgIQAJgIAAALQAAACgEAHIAGACIADgCQACgDADAAQAIAAgBAHQAAAGgEAJIADABIAFgEIAGgEQAGABACAGIAAgHQADgIACABQACACAAAEQAAAUgKApQgRA3gGgBIgYgGg");
	this.shape_14.setTransform(17,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,51.4);


(lib.breakfast_drag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.setTransform(18.1,26.8,0.793,0.793,0,0,0,23.8,34.8);
	this.instance.alpha = 0.469;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiMAYQg6gKAAgOQAAgNA6gKQA7gKBRAAQBSAAA7AKQA6AKAAANQAAAOg6AKQg7AKhSAAQhRAAg7gKg");
	this.shape.setTransform(18,19.1,0.793,0.793);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92681A").s().p("AAAAFQgFgBAAgEQAAgDAFgBIABAAQAFABAAADQAAAEgFABg");
	this.shape_1.setTransform(60.4,37.7,0.793,0.793);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#92681A").s().p("AgHACQgBgDAEgBIAGgDQAEgBACAFQABACgFACIgFADIgCAAQgDAAgBgEg");
	this.shape_2.setTransform(63.6,35.4,0.793,0.793);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#92681A").s().p("AgJABQAAgEAFAAIAJgBQAFgBAAAFQAAAEgFAAIgJABIgBAAQgEAAAAgEg");
	this.shape_3.setTransform(68.9,31.7,0.793,0.793);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#92681A").s().p("AgBAEQgFAAAAgEQAAgEAFAAIADAAQAFAAAAAEQAAAEgFAAg");
	this.shape_4.setTransform(73.7,36.1,0.793,0.793);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#92681A").s().p("AgDADQgDgDAEgCIACgBQABgDADAEQADADgEACIgCABIgBABQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_5.setTransform(74,38.9,0.793,0.793);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#92681A").s().p("AgBAEQgFAAAAgEQAAgDAFgBIADAAQAFABAAADQAAAEgFAAg");
	this.shape_6.setTransform(104.7,34.8,0.793,0.793);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#92681A").s().p("AABAFIgEgCQgFgCACgDQABgEAFACIAEACQAEABgBAEQgBADgCAAIgDgBg");
	this.shape_7.setTransform(104.7,37.3,0.793,0.793);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#92681A").s().p("AgIAAQAAgDAFAAIAGgBQAFgBABAFQABACgEACIgJABQgFAAAAgFg");
	this.shape_8.setTransform(90.7,38.2,0.793,0.793);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#92681A").s().p("AAAAGIgFgFQgEgCAEgDQADgEACAEIAGAEQAEABgDAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_9.setTransform(88.1,35.7,0.793,0.793);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#92681A").s().p("AgIABQgBgDAFgBIAGgBQAFgBABAFQACADgFABIgHABIgBAAQgDAAgCgEg");
	this.shape_10.setTransform(82.7,30,0.793,0.793);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#92681A").s().p("AgEAEQgEAAAAgEQAAgEAEAAIAIAAQAGAAAAAEQAAAEgGAAg");
	this.shape_11.setTransform(96.5,28.7,0.793,0.793);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#92681A").s().p("AABAGIgGgEQgEgCACgCQADgFAEACIAGAEQAEABgDADQgBADgDAAIgCAAg");
	this.shape_12.setTransform(92.3,29.4,0.793,0.793);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#92681A").s().p("AgIADQgCgDAEgCQAGgDAEAAQAFAAAAAFQAAADgFAAIgFACIgDABQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_13.setTransform(87.4,24.1,0.793,0.793);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#92681A").s().p("AgFACQgBgDAEgCIACgBQAFgCABAFQABADgEACIgDABIgBAAQgDAAgBgDg");
	this.shape_14.setTransform(92.2,26.2,0.793,0.793);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#92681A").s().p("AgGACQgCgDAEgBIAGgDQAEgBABAFQACACgFACIgFADIgCAAQgDAAAAgEg");
	this.shape_15.setTransform(97.7,32.1,0.793,0.793);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#92681A").s().p("AAAAFIgDgCQgFgCADgDQADgEACACIAFACQAEACgDADQgCADgCAAIgCgBg");
	this.shape_16.setTransform(94.4,37,0.793,0.793);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#92681A").s().p("AAHAFIgNgBQgFAAAAgEQAAgFAFABIANABQAFAAAAAEQAAAEgEAAIgBAAg");
	this.shape_17.setTransform(94,33.8,0.793,0.793);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#92681A").s().p("AgFAFQgFAAAAgFQAAgDAFAAIALAAQAFAAAAADQAAAFgFAAg");
	this.shape_18.setTransform(88.7,31.5,0.793,0.793);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#92681A").s().p("AgGADQgBgDAEgCIAEgDQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQADADgBABIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIAAABIgCAAQgDAAgBgDg");
	this.shape_19.setTransform(83.3,34.6,0.793,0.793);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#92681A").s().p("AAAAEIgDAAQgFAAAAgEQAAgEAFAAQADAAAFABQAEACgBACQAAAEgEAAIgDAAIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_20.setTransform(80.7,36.9,0.793,0.793);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#92681A").s().p("AAAAFQgEAAAAgFQAAgDAEAAIAAAAQAFAAAAADQAAAFgFAAg");
	this.shape_21.setTransform(76.6,34.5,0.793,0.793);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#92681A").s().p("AgKAEQgCgEAFgBIANgFQAEgBABAFQACACgFACIgNAFIgCAAQgCAAgBgDg");
	this.shape_22.setTransform(69,35,0.793,0.793);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#92681A").s().p("AgBAEQgFABAAgFQAAgDAFAAIADAAQAFAAAAADQAAAFgFgBg");
	this.shape_23.setTransform(75.1,32,0.793,0.793);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#92681A").s().p("AAAAFIgCgBQgEgDACgCQACgDACAAQADAAACADQADACgFADIgDABIAAAAg");
	this.shape_24.setTransform(75.4,29.7,0.793,0.793);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#92681A").s().p("AGrCtIgDgBQhggZiHAHQicANhNABQjJAEjBhJQgJgEgCgJQgCgJAJgFQCEhPCNhBQBBgdBBgaQATgHApgTQAmgQAagDQAUgDAUALQALAGAYASQAZATAeAdIA1AzQBAA9AbAdQAwA0AfAuQAEADAAAGIgBAGIgCAGIgEADQgEACgEABIgEgBgABNiKIgmAOQjfBSjUB7QDBBDDBgLQBKgECUgKQBngDBRAPQgXgfgfgiQgcgeg6g3IgqgpQgYgYgTgQIgagWQgRgOgLgEQgKgEgMAAQgIAAgKACg");
	this.shape_25.setTransform(82.9,31.2,0.793,0.793);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AE7E2A").s().p("ADiCHQhAABiRAPQhkAKh+gTQh6gThjgmQDziTEKhbQAPgGAJABQAJABANAIQAeATAhAeQAUARAmAmIBgBdQA6A+AfAxQhYgah1ACg");
	this.shape_26.setTransform(82.9,31.1,0.793,0.793);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C4A0E").s().p("AiRBCQgfgEhrgXQhUgTg1AAQgMAAgDgLQgKgkgBgiQAAgOAPAAQAPAAAAAOQAAAXAHAeQAnACAyAIIBiAVQBsAWBxABQAqABA9gGIBpgJQAwgFAqAEIBGALQAxADABghQABgMAOAAQAPAAAAAMQgBAigaAPQgXAOglgDIhDgJQgngFgdACIg+AGIg/AHQgtADguAAQhLAAhPgKg");
	this.shape_27.setTransform(83,42.9,0.793,0.793);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C4A0E").s().p("Aj9AhQg4gOgbgFQgwgKglABQgLgnABgbINfBKQACAPgLANQgLAMgQAEQgNADgSgCIgggGQgtgJguACQgVAAgfAEIg0AGQhBAHhBAAQiDAAiCgdg");
	this.shape_28.setTransform(83,42.8,0.793,0.793);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E7D236").s().p("Ag1BCQg+gNgLgiQgLggAmgeQAhgaAkgCIABAAIABAAQAagBAbAHQAVAGAgANQASAHAIAFQAOAIAGAMQARAhglAaQgdAVgnAFQgPACgQAAQgbAAgfgHgAhCgdQgZAMgEAPQgEAPAQAJQAFADAYAGQAwAOAjgEQAYgCAWgKQAigRgWgWQgFgFgMgEIgTgGQgwgRgfABIgBAAQgQABgVALg");
	this.shape_29.setTransform(93.9,70.3,0.793,0.793);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E7D236").s().p("AhIAqQgcgJgJgMQgOgVAggdQANgMAQgHQASgJAQABQAZgCAbAIIAyASQAcALAIALQAHAKgFANQgFAMgMAJQgeAXgzAAQgiAAg0gPg");
	this.shape_30.setTransform(93.9,70.2,0.793,0.793);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7D236").s().p("Ag/BLQg7gRgGgnQgGgiAkgiQAhgeAkgEIAAAAIACgBIABAAQAmgCAwARQA4AVALAiQAMAlgmAeQggAZgpAFIgaACQgfAAgigKgAg4gsQgQAJgIAMQgWAhAKAPQAGAIAfAKQA2ARAjgIQApgIAJgPIgGg1IgQgIQgcgMgQgFQgWgGgXABIgBAAQgNACgPAIg");
	this.shape_31.setTransform(53.6,65,0.793,0.793);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E7D236").s().p("AhJA1QgdgKgIgOQgNgZAhglQANgPAQgKQATgLAPABQAZgEAbAKIAyAVQAaAKAJAQQAHANgFAPQgFAPgNAMQgdAcg0ACIgGAAQgiAAgugRg");
	this.shape_32.setTransform(53.6,65,0.793,0.793);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAoD4QgpgGg5gOQgrgKgZgNQgkgSgPgbQgJgOgIgmQgJgigMgQQgNgTgrgWQgrgUgOgSQgQgWACgcQABgcAQgXQAPgUAwgeQArgbAegLQBLgeAogHQBFgMAxAYQAPAHAWAQIAlAYQAUAMAeAKIA1ARQBDAWAdAeQATAVAGAaQAGAcgOAWQgNAUg1AYQgzAYgMAYQgHAPAAAWIAEAnQAFAzgbATQgNAJgbADQgSACgTAAQgeAAghgEg");
	this.shape_33.setTransform(52.6,71.1,0.793,0.793);

	this.instance_1 = new lib.Path_4_1();
	this.instance_1.setTransform(53.5,72.1,0.793,0.793,0,0,0,34.5,25.2);
	this.instance_1.alpha = 0.109;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AggEqQgogHgigUQgjgUhEhEQg9g/gugTIgikuQgIgMASgbQAMgTASgTQAMgMAZgGQAlgKApAIQAoAHAhAWIAcAVQARAMAMAGQAZANAlAEQATACAsACQBSAFBFAfQBLAiApA6QAjAxgLAnQgIAcgdAUQgZARgkAIQgSAEgvAGQgpAEgXAHQgcAIgDAQQgCAKAHAMIAYA0QALAegIAWQgIAVgYAOQgUALgcAEQgQACgQAAQgWAAgXgFg");
	this.shape_34.setTransform(93,74.8,0.793,0.793);

	this.instance_2 = new lib.Path_6_1();
	this.instance_2.setTransform(93.1,75.5,0.793,0.793,0,0,0,35.5,30.2);
	this.instance_2.alpha = 0.109;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#92681A").s().p("AAAAFIgCgBQgEgCABgDQABgFAEACIACABQAFACgBADQgBADgDAAIgCAAg");
	this.shape_35.setTransform(94.7,38.6,0.793,0.793);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#92681A").s().p("AgCAFQgFgBAAgEQAAgDAFgBIAFAAQAFABAAADQAAAEgFABg");
	this.shape_36.setTransform(98.3,37.4,0.793,0.793);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#92681A").s().p("AADAGIgIgDQgFgBACgDQABgEAFABIAIACQAFABgCADQgBAEgDAAIgCAAg");
	this.shape_37.setTransform(104.3,35.7,0.793,0.793);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#92681A").s().p("AAAAFIgCgBQgFgCACgDQABgFAEACIADABQAFACgCADQgBAEgDAAIgCgBg");
	this.shape_38.setTransform(107.4,41.1,0.793,0.793);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#92681A").s().p("AgEABQgBgDAEgBIABgBQAEgBABAFQABACgEACIgCAAIAAABQgDAAgBgEg");
	this.shape_39.setTransform(106.7,43.8,0.793,0.793);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#92681A").s().p("AAAAFIgCgCQgFgBACgDQABgFAEACIADABQAEACgBADQgBADgDAAIgCAAg");
	this.shape_40.setTransform(136.1,49.5,0.793,0.793);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#92681A").s().p("AAAAFIgFgEQgDgBADgEQAEgDABADIAFAEQAEABgDAEQgBAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_41.setTransform(135.3,51.8,0.793,0.793);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#92681A").s().p("AgFAEQgEgCABgDQABgFAFACIAGACQAFAAAAADQAAAFgFAAIgJgCg");
	this.shape_42.setTransform(122.3,48.2,0.793,0.793);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#92681A").s().p("AgBAFIgEgFQgCgDAEgCQADgDACAEIAEAEQACAEgEADIgDABQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_43.setTransform(120.6,45.2,0.793,0.793);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#92681A").s().p("AACAFIgGgBQgFgBACgDQABgFAFABIAGABQAFABgCADQgBAEgDAAIgCAAg");
	this.shape_44.setTransform(117.5,38.4,0.793,0.793);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#92681A").s().p("AADAGIgHgDQgFgCACgCQABgFAEABIAHADQAFACgBADQgCADgCAAIgCAAg");
	this.shape_45.setTransform(130.5,41.3,0.793,0.793);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#92681A").s().p("AAAAGIgFgGQgDgBADgEQAEgDABADIAGAFQADACgDAEQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_46.setTransform(126.4,40.7,0.793,0.793);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#92681A").s().p("AADAFIgFgBQgFABgBgFQgBgDAFAAQAEgCAGACQAEACgBADQgBADgDAAIgCAAg");
	this.shape_47.setTransform(123.5,34.3,0.793,0.793);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#92681A").s().p("AgGAAQAAgDAGAAIABgBQAGAAAAAEQAAAEgGAAIgBABQgGAAAAgFg");
	this.shape_48.setTransform(127.3,37.7,0.793,0.793);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#92681A").s().p("AgCAEQgFABAAgFQAAgDAFAAIAFAAQAFAAAAADQAAAFgFgBg");
	this.shape_49.setTransform(130.5,44.8,0.793,0.793);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#92681A").s().p("AAAAFIgEgEQgDgCADgDQAEgDABADIAEAEQADABgDAEQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_50.setTransform(126,48.4,0.793,0.793);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#92681A").s().p("AADAHIgLgGQgEgBADgDQACgFAFACIALAGQAEAAgDAEQgBADgDAAIgDAAg");
	this.shape_51.setTransform(126.6,45.3,0.793,0.793);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#92681A").s().p("AAEAGIgKgDQgEgCABgDQACgFAEACIAJAEQAFABgBADQgBAEgDAAIgCgBg");
	this.shape_52.setTransform(122.5,41.5,0.793,0.793);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#92681A").s().p("AAAAFIgBAAQgFAAAAgFQAAgDAFAAIAEgBQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQABACgBABIgEADIgDABIAAAAg");
	this.shape_53.setTransform(116.6,42.7,0.793,0.793);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#92681A").s().p("AACAGIgCAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIgCgBQgEgBABgDQABgEAFABQADABADADQAEABgCADQgBADgDAAIgBAAg");
	this.shape_54.setTransform(113.5,44,0.793,0.793);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#92681A").s().p("AAAAFIAAgBQgFgBACgDQABgFACABIABAAQAFADgBACQgCAEgCAAIgBAAg");
	this.shape_55.setTransform(110.5,40.6,0.793,0.793);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#92681A").s().p("AgGAEQgFAAAAgEQAAgEAFAAIANABQAFAAAAADQAAAFgFAAg");
	this.shape_56.setTransform(103.5,38.7,0.793,0.793);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#92681A").s().p("AAAAFIgCgBQgFgCACgDQABgFAEACIADABQAEACgBADQgBAEgDAAIgCgBg");
	this.shape_57.setTransform(109.9,37.8,0.793,0.793);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#92681A").s().p("AAAAEIgDgBQgDgDADgCQADgDABABQAEABAAADQACAEgFABIgCAAIAAgBg");
	this.shape_58.setTransform(110.9,35.8,0.793,0.793);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#92681A").s().p("AF7DWQgFgBgCgDQhOgzh5gjQiPgjhFgWQjAg5ihiDQgHgFADgJQACgJAIgCQCTghCGgPQBDgIBSgFIBBgFQAogDAYAGQAnAKAkA+QAUAiAcBAQApBPAQAiQAdBCAPA3IABABQABAFgEAGIgDAEIgGACIgFABIgCAAgAFlCmQgMgjgRgmQgPgjgkhFIgagzIgcgzIgRgcQgKgSgKgHQgNgMgTgBIgjAAQjmAFjtAyQBLA6BTAqQBkAxBlAZQCTAjAxAQQBVAcBBAlIAAAAg");
	this.shape_59.setTransform(114.3,45.7,0.793,0.793);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#AE7E2A").s().p("ADKBxQg5gSiKggQhegVhug3Qhqg2hPhBQEHg+EUgCQAQgBAIAEQAHAEAJALQAWAaAVAmQAOAYAWAsIA6ByQAjBLAOA3QhJgzhsgig");
	this.shape_60.setTransform(114.3,45.8,0.793,0.793);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6C4A0E").s().p("AEkCzQgxgZhFgTIh6ggQhsgdhogzQgYgMhag0QhGgqgwgQQgLgFAAgKQACgnAJgeQAEgOAPAEQAOAEgEAOQgGAXgDAcQAhAMAnAXIBPAvQBbA0BlAkQA+AXB/AcQA0AMAiAOQANAFA2AcQAyAUALgcQAFgNAPAEQAOAEgFANQgNAkgiADIgGAAQgZAAghgQg");
	this.shape_61.setTransform(113.9,49.5,0.793,0.793);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6C4A0E").s().p("AFWC1QgNgCgPgHIgbgOQgmgVgrgOQgVgGhOgRQi7gqijhhQgugdgYgNQgpgYgigKQADgpAIgYIL+FLQgCAPgPAJQgLAGgMAAIgHAAg");
	this.shape_62.setTransform(113.9,49.6,0.793,0.793);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhnC+QgogPAAgOIg1lpIGJgGIg3FvQAAAOgpAPQgvAQg2AAQg7AAgsgQg");
	this.shape_63.setTransform(18.1,35.8,0.793,0.793);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E2E2E2").s().p("ApjFwQh5hJhChdQhDhgAAhqQAAhoBDhhQBCheB5hHQD9iZFmAAQFnAAD9CZQB5BHBCBeQBDBhAABoQAABqhDBgQhCBdh5BJQj9CYlnAAQlmAAj9iYg");
	this.shape_64.setTransform(81.3,70.3,0.793,0.793);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C4C4C4").s().p("ApjFvQh5hHhCheQhDhgAAhqQAAhpBDhgQBChdB5hJQD9iYFmAAQFnAAD9CYQB5BJBCBdQBDBgAABpQAABqhDBgQhCBeh5BHQj9CZlnAAQlmAAj9iZg");
	this.shape_65.setTransform(81.3,73.8,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_2},{t:this.shape_34},{t:this.instance_1},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,150.8,115.9);


(lib.blood_system = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(484.5,263.4,1,1,0,0,0,484.5,283.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD2025").s().p("EhKvAmOIg9xwQO0CEMng2QGTgbDXg2QFQhdB1jfQAzhjAUiNQAPhygCiyIgJlWQgGjeAHimQAWnoCXmrQDHoxAUg+QCAl/A0j9IFqAdQGPAdC6AAQEDAADZgRQDGgQBrgZQg0D8h/F/QgZBLi/IjQhiEWgdF4QgeGHA4FpQA8GOCXEMQCrEtEJBbQFWB3N5gkQD7gKGegdQF5gaBggDQJfgOHMANQK4ATDMBQIAAQhg");
	this.shape.setTransform(484.5,244.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19.9,969,566.7);


(lib.bg_NEW = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5CCCC").s().p("AhaP4IAA/vIC1AAIAAfvg");
	this.shape.setTransform(87.5,176.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5CCCC").s().p("AhaP4IAA/vIC1AAIAAfvg");
	this.shape_1.setTransform(249.9,176.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5CCCC").s().p("AuBBbIAAi1IcDAAIAAC1g");
	this.shape_2.setTransform(168.2,83.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5CCCC").s().p("AuBBbIAAi1IcDAAIAAC1g");
	this.shape_3.setTransform(168.2,268.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#98ADAC").s().p("Ag3N1IAA7pIBvAAIAAbpg");
	this.shape_4.setTransform(94.6,174);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#98ADAC").s().p("Ag3N1IAA7pIBvAAIAAbpg");
	this.shape_5.setTransform(242.9,174);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#98ADAC").s().p("At0A4IAAhvIbpAAIAABvg");
	this.shape_6.setTransform(168.2,89.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5CCCC").s().p("AtSAXIAAgtIalAAIAAAtg");
	this.shape_7.setTransform(169.9,174);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#98ADAC").s().p("At0A4IAAhvIbpAAIAABvg");
	this.shape_8.setTransform(168.2,261.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5CCCC").s().p("AgVNTIAA6lIAsAAIAAalg");
	this.shape_9.setTransform(169.9,174);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(170.6,245.7,1,1,0,0,0,140.5,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#93FEF3").s().p("ArUOVIAA8oIWpAAIAAcog");
	this.shape_10.setTransform(168.2,174.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CDFED9").s().p("EhP6Ae3MAAAg9uMCf1AAAMAAAA9ug");
	this.shape_11.setTransform(522.4,196.7,1.046,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B1ACF5").s().p("EhP6AT9MAAAgn5MCf1AAAMAAAAn5g");
	this.shape_12.setTransform(521.5,528.6,1.046,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-0.9,1071,657.3);


(lib.bg_glucose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lastframe:280});

	// timeline functions:
	this.frame_280 = function() {
		this.stop();
		//console.log("bg_gloucose stopping at lastframe");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(280).call(this.frame_280).wait(9));

	// faded_glucose
	this.instance = new lib.faded_glucose();
	this.instance.setTransform(565.1,375.5,1,1,0,0,0,17.1,15);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260).to({alpha:1},11).to({_off:true},10).wait(8));

	// faded_glucose
	this.instance_1 = new lib.faded_glucose();
	this.instance_1.setTransform(446.1,360.5,1,1,0,0,0,17.1,15);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(236).to({alpha:1},11).to({_off:true},34).wait(8));

	// faded_glucose
	this.instance_2 = new lib.faded_glucose();
	this.instance_2.setTransform(388.1,15,1,1,0,0,0,17.1,15);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(216).to({alpha:1},10).to({_off:true},55).wait(8));

	// faded_glucose
	this.instance_3 = new lib.faded_glucose();
	this.instance_3.setTransform(286.6,52,1,1,0,0,0,17.1,15);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(192).to({alpha:1},12).to({_off:true},77).wait(8));

	// faded_glucose
	this.instance_4 = new lib.faded_glucose();
	this.instance_4.setTransform(350.6,117,1,1,0,0,0,17.1,15);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(163).to({alpha:1},13).to({_off:true},105).wait(8));

	// faded_glucose
	this.instance_5 = new lib.faded_glucose();
	this.instance_5.setTransform(252.6,188,1,1,0,0,0,17.1,15);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(134).to({alpha:1},12).to({_off:true},135).wait(8));

	// faded_glucose
	this.instance_6 = new lib.faded_glucose();
	this.instance_6.setTransform(356.1,263.5,1,1,0,0,0,17.1,15);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({alpha:1},11).to({_off:true},161).wait(8));

	// faded_glucose
	this.instance_7 = new lib.faded_glucose();
	this.instance_7.setTransform(329.1,368.5,1,1,0,0,0,17.1,15);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({alpha:1},11).to({_off:true},188).wait(8));

	// faded_glucose
	this.instance_8 = new lib.faded_glucose();
	this.instance_8.setTransform(260.6,321.5,1,1,0,0,0,17.1,15);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({alpha:1},13).to({_off:true},212).wait(8));

	// faded_glucose
	this.instance_9 = new lib.faded_glucose();
	this.instance_9.setTransform(157.6,374.5,1,1,0,0,0,17.1,15);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({alpha:1},11).to({_off:true},243).wait(8));

	// faded_glucose
	this.instance_10 = new lib.faded_glucose();
	this.instance_10.setTransform(17.1,370.5,1,1,0,0,0,17.1,15);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},12).to({_off:true},269).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,582.1,390.5);


(lib.zach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{zachnormal:0,zacheat:14});

	// timeline functions:
	this.frame_183 = function() {
		this.gotoAndPlay("zacheat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(183).call(this.frame_183).wait(1));

	// burger hand
	this.instance = new lib.burger_hand();
	this.instance.setTransform(89.8,159.1,1,1,0,0,0,23.8,20.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({y:152.3},6).to({y:159.1},5).wait(53).to({y:152.3},6).to({y:159.1},5).wait(95));

	// head
	this.instance_1 = new lib.zach_head_eat("single",4);
	this.instance_1.setTransform(89.6,81.5,1,1,0,0,0,56.8,58.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:87.5,mode:"synched",startPosition:13,loop:false},6).to({y:81.5},5).wait(53).to({mode:"single",startPosition:4},0).to({y:87.5,mode:"synched",startPosition:13,loop:false},6).to({y:81.5},5).wait(95));

	// Layer 6
	this.instance_2 = new lib.shoulders_eat();
	this.instance_2.setTransform(105.8,190.5,1,1,0,0,0,69.2,47.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({y:184.5},6).to({y:190.5},5).wait(53).to({y:184.5},6).to({y:190.5},5).wait(95));

	// z
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#584233").s().p("AiLgKQgKgLALgLQAKgLAKALQAqAtBMgBQBQgBAngvQAKgLAKAKQALALgJALQgvA5hdABIgBAAQhaAAgxg1g");
	this.shape.setTransform(87.6,123.5,0.635,0.635);

	this.instance_3 = new lib.Path_25();
	this.instance_3.setTransform(88.6,133.2,0.635,0.635,0,0,0,13.5,10.4);
	this.instance_3.alpha = 0.102;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#886B4D").s().p("Ah2C7QgbgvgGhVQARgwAMg4QAYhzgZguQgNgZArgKQAlgJA9AFQA8AEAmALQApANgSALQggAVAaB8QANA+ATA4QgHBYgdAwQgnA/hOAAQhPAAgmhBg");
	this.shape_1.setTransform(88.4,142.4,0.635,0.635);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#256659").s().p("AocuJIBtgeQCZggDagLQDDgJCjAMQBSAHApAIICqdYIyeA/g");
	this.shape_2.setTransform(92.8,206.8,0.635,0.635);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#313E71").s().p("AkDCYQgzsAg1h+IH/iXQA2DhBSKuQBOKUACC8IpEAbQgSllgZmAg");
	this.shape_3.setTransform(114.9,311.2,0.635,0.635);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#313E71").s().p("AkaAhQAfqMAgkJIILAAQguE4gGLcQgCEvAIDIQAIDEAPAJQgigBogATQgTiiAiqzg");
	this.shape_4.setTransform(76.9,312.6,0.635,0.635);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("Ag9CZQhEgmiQhwQglgagJg0QgGgpAHhmIFZALQAoAbBEBJQA+BDA2AgQArAYASAnQARAlgKAlQgKAmgjAYQgmAag6ACIgMAAQhvAAh0hCg");
	this.shape_5.setTransform(125.5,374,0.635,0.635);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AiwDbQg6gCgmgaQgkgYgKgmQgKglARglQASgnArgYQA2ggA/hDQBEhJAngbIFZgLQAHBmgGApQgJA0glAZQiQBxhEAmQh0BChvAAIgLAAg");
	this.shape_6.setTransform(70,374.7,0.635,0.635);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.shape}]},14).wait(170));

	// z
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4B3627").s().p("AAcAnQgWg4gugFQgLgCAAgMQAAgMALACQBAAHAbBIQAEALgLADIgFABQgIAAgDgJg");
	this.shape_7.setTransform(112.4,78.1,0.635,0.635);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4B3627").s().p("AgmAzQgLgDABgMQAKg8BIgaQALgDADALQADAMgLADQg5AUgHAxQgCAJgHAAIgFAAg");
	this.shape_8.setTransform(61,80.9,0.635,0.635);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#584233").s().p("AgvBnQgNgFAEgPQAEgOANAFQAeAMAVgcQASgWAIgiQAIgjgMgTQgOgXgUgCQgWgDgVATQgLAJgLgLQgKgKALgKQAYgUAagEQAcgFAXASQAUAQAIAXQAJAWgEAaQgHAygdAkQgaAegcAAQgNAAgOgGg");
	this.shape_9.setTransform(87.9,101.8,0.635,0.635);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#584233").s().p("AgNBjQgOgFACgOIAShQQAHgugEgiQgDgOANgEQAOgEADAOQAHAmgJAyQgGAdgNA7QgCAMgHAAIgGgBg");
	this.shape_10.setTransform(85.1,91.7,0.635,0.635);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgDAEgEQADgEAEABQAFgBAEAEQADAEAAADQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_11.setTransform(102.8,85.3,0.635,0.635);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAIQgDgEAAgEQAAgDADgEQAEgEAEABQAFgBADAEQAEAEAAADQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_12.setTransform(68,85.3,0.635,0.635);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZBQQgOgPgEgWQgGggADgZQABgfAIgRQABgDAEgEQAFgHAGgEQAXgQAWARQATAOADAZQAFAjgGAcQgIAngYATQgLAIgHAAQgLAAgJgJg");
	this.shape_13.setTransform(103.7,88.5,0.635,0.635);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZBQQgPgPgEgWQgFghADgYQAAgdAJgTQABgEAEgDQAFgIAGgDQAWgQAWARQATAOAEAZQAFAjgGAcQgIAngZATQgKAIgIAAQgKAAgJgJg");
	this.shape_14.setTransform(68.8,88.5,0.635,0.635);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#886B4D").s().p("AhMBhIASidQAghDAzAUQA1ATgBBCQgCA0g1AyQggAggcAAQgUAAgSgPg");
	this.shape_15.setTransform(134.2,92.1,0.635,0.635);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#886B4D").s().p("AgVBQQg1gygCg0QgBhCA1gTQAzgUAfBDIATCdQgSAPgUAAQgdAAgfggg");
	this.shape_16.setTransform(43.1,92.1,0.635,0.635);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#3A2E25").p("Aq3FwQAXgdAYgyQAwhmAFhvQADhECpgmQCSgiDjgGQDTgGCnAVQCwAXAQAkQAWA2AwCYQA0CFBHArQAsgpgihuQgLgigRgmIgPgeIhvlsImsibIkAAAIkVBIIjDDHIhiDGIg0CXg");
	this.shape_17.setTransform(88.2,62.3,0.635,0.635);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A2E25").s().p("AJODTQgwiZgWg1QgQgkiwgXQingVjTAFQjjAHiSAiQipAmgDBEQgFBvgwBmQgYAygXAcIgqiFIA0iXIBijGIDDjIIEVhIIEAAAIGsCcIBvFrIAPAfQARAmALAiQAiBugsAoQhHgqg0iFg");
	this.shape_18.setTransform(88.2,62.3,0.635,0.635);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#584233").s().p("AiLgKQgKgLALgLQAKgLAKALQAqAtBMgBQBQgBAngvQAKgLAKAKQALALgJALQgvA5hdABIgBAAQhaAAgxg1g");
	this.shape_19.setTransform(87.6,123.5,0.635,0.635);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#886B4D").s().p("An5IvQijjOgUlhQgUlbDUjkQBghoCBg4QCBg4COABQFTACDBDsQBZBsAoCPQAoCQgOCdQggFbilDUQi0DoknAAQlPAAi5jog");
	this.shape_20.setTransform(88.5,88.9,0.635,0.635);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3A2E25").s().p("ArAHsQgggBgbgYIgxgyQgEgEAAgGQABgGADgFQAMgOARgOQgKgOgVgVQgmgkgMgOQg2hBAqgzQATgXAYgMIAVgLQAKgIgKgRQgKgOgHgOQgNgbgEggQgEggAKgbQAVhCA5gbQAdgNABgSQgFgXACgQQAEghAJgPQAkg4BAgOQAxgLBAAOQAcg2AtgnQAzguA+gOQBOgSA9AOQAoAJAZANQAaANATgCQALgBAggNQBVgiA8gKQBTgNBFAZQA1AUAkAqQAeAkAKAsQBbgRA7AFQBcAJA3A9QAqAsgHA9QgDAngUAcQAsACAnAWQAyAcAcA1QAbAygFA7QgGA2ghAtQAlAhAIA1QAKA8gdA2QgeA5gzAiQgzAhg9AEIgEAAgAqekVQgpAnAIAxQACAPgBAPQAAAOgLALQgLAJgOAFQgmAOgWAhQgWAhAEAoQACAVATAmQASAnACAVQACAQgiARQhRAoAvBBQAMARAkAlQAiAjAKARQAEAGgDAGQgBAFgFAEQgOAJgNAOIAXAZQAaAdAEAAIV9AYQAwgCApgYQAsgYAYgoQAfgxAAg0QAAg8gtgfQgGgFgBgGQgBgHAFgGQAlgrAFg1QADgygZgqQgYgsgsgXQgvgZg4AGQgMACgCgMQgCgLAJgHQAygkgNg/QgMg8g2gdQgzgdhEAAQguAAhOAQQgIABgFgEQgFgEgBgIQgIhAg7gqQg3gohEAAQhIAAhRAdIgyAWQgfANgXAEQgRADgggQQgpgUgIgCQhNgSg9ASQh3Ajg2ByQgCAEgGACQgEACgFgBQgsgLgjAAQg4AAgeAeg");
	this.shape_21.setTransform(89.7,56.1,0.635,0.635);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3A2E25").s().p("AraHdIhIhGQARgVAWgPQgKgUgXgVIgogjQg0gxALgtQAJgmA1gXQAKgFAFgDQAIgFACgIQADgLgOgTQgng9AKg7QAGghATgaQAVgcAegLIARgHQAKgEAFgHQAGgJgBgPIgDgbQgEgjAXggQAVgfAjgOQA7gYBUAYQAYg1AsgoQAsgoA2gSQA3gTA7AFQA7AFAzAcQAUALAJAAQAIAAAOgGQBNghAwgNQBHgUA8AFQBGAGA3ArQA5AvAFBAQA2gLAhgEQAwgFAmAGQAuAHAkAVQApAYAUAkQAVAogJAtQgJAvgkAXQA3gJA2AaQA1AaAbAyQAaAvgHA7QgIA7gmApQAdASAOAkQAMAhgDAlQgHBLg8A4Qg8A3hMAAg");
	this.shape_22.setTransform(89.7,56.1,0.635,0.635);

	this.instance_4 = new lib.Path_25();
	this.instance_4.setTransform(88.6,133.2,0.635,0.635,0,0,0,13.5,10.4);
	this.instance_4.alpha = 0.102;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#886B4D").s().p("Ah2C7QgbgvgGhVQARgwAMg4QAYhzgZguQgNgZArgKQAlgJA9AFQA8AEAmALQApANgSALQggAVAaB8QANA+ATA4QgHBYgdAwQgnA/hOAAQhPAAgmhBg");
	this.shape_23.setTransform(88.4,142.4,0.635,0.635);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#886B4D").s().p("AgrAwQgLgOAigtQAggzAjAEIgDBMQgMAeggAJQgIACgIAAQgRAAgKgLg");
	this.shape_24.setTransform(5.5,228.2,0.635,0.635);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#886B4D").s().p("AgmA0QgMgcAOgoQAMgkAVgaIAwArQAAAmgeAxQgPAbgNAAQgOAAgLgbg");
	this.shape_25.setTransform(9.4,233,0.635,0.635);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#886B4D").s().p("AgpAUQAAgtAMg0IBBgJQAKAegHA+QgIBIgdAHQgEACgFAAQghAAgBhDg");
	this.shape_26.setTransform(14.6,234.7,0.635,0.635);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#886B4D").s().p("AhDgVIAkhKQAMARA8BIQAwBDglAaQgMAJgNAAQgsAAgyh1g");
	this.shape_27.setTransform(20.7,230.3,0.635,0.635);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#886B4D").s().p("AglB2QgngGghgSQgggVgKgsQgJgpAQgmQAMgcAYgTQAZgUAbgBQAWgBAYAIQAaAJAHAPIANAjQB1grACBEQABAcg2AKQggAFgKgBIgFgCIgGABQAHAWgEAZQgEAagPAQQgQAQgeAAQgLAAgNgBg");
	this.shape_28.setTransform(15.4,224.2,0.635,0.635);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#256659").s().p("AxCB+ID8jIQEOjRBfgjQBSgeCMgPQBNgICdgHIDHgCQDYACBLAUQBNAVEWDWQCLBsB8BlIlaD/QgIgOiVi2IkLlFIqCAoIkKFFQiVC2gJAOg");
	this.shape_29.setTransform(88.8,167.6,0.635,0.635);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#886B4D").s().p("Aj4E1QAvkcCTicIAAAAIABAAQAzg4BMg4IAAAAIB3hRIA4BTIh1BQIAAAAQhFAxgtAwIAAABQh+CKgqD6g");
	this.shape_30.setTransform(32.7,192.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#256659").s().p("AocuJIBtgeQCZggDagLQDDgJCjAMQBSAHApAIICqdYIyeA/g");
	this.shape_31.setTransform(92.8,206.8,0.635,0.635);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#313E71").s().p("AkDCYQgzsAg1h+IH/iXQA2DhBSKuQBOKUACC8IpEAbQgSllgZmAg");
	this.shape_32.setTransform(114.9,311.2,0.635,0.635);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#313E71").s().p("AkaAhQAfqMAgkJIILAAQguE4gGLcQgCEvAIDIQAIDEAPAJQgigBogATQgTiiAiqzg");
	this.shape_33.setTransform(76.9,312.6,0.635,0.635);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("Ag9CZQhEgmiQhwQglgagJg0QgGgpAHhmIFZALQAoAbBEBJQA+BDA2AgQArAYASAnQARAlgKAlQgKAmgjAYQgmAag6ACIgMAAQhvAAh0hCg");
	this.shape_34.setTransform(125.5,374,0.635,0.635);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AiwDbQg6gCgmgaQgkgYgKgmQgKglARglQASgnArgYQA2ggA/hDQBEhJAngbIFZgLQAHBmgGApQgJA0glAZQiQBxhEAmQh0BChvAAIgLAAg");
	this.shape_35.setTransform(70,374.7,0.635,0.635);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#886B4D").s().p("AgRhAIAAAAQgtgxhFgxIACABQhTg3glgbIA8hRQAjAbBQA1IABAAIAAABQBNA4AzA4IAAAAQCUCcAvEbIhjARQgpj6h/iLg");
	this.shape_36.setTransform(144.9,189.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#886B4D").s().p("AAAA5QgfgJgMgeIgDhMQAjgEAgAzQAiAtgLAOQgKALgRAAQgIAAgJgCg");
	this.shape_37.setTransform(172.2,225.7,0.635,0.635);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#886B4D").s().p("AgOA0QgegxAAgmIAwgrQAWAbALAjQAOAogMAcQgLAbgOAAQgOAAgOgbg");
	this.shape_38.setTransform(168.2,230.5,0.635,0.635);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#886B4D").s().p("AgBBVQgdgHgIhIQgHg+AKgeIBBAJQAMA0AAAtQgBBDggAAQgGAAgEgCg");
	this.shape_39.setTransform(163,232.1,0.635,0.635);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#886B4D").s().p("AgzBXQglgaAwhDQAagkAug1IAkBKQgWAzgWAeQgZAkgZAAQgNAAgMgJg");
	this.shape_40.setTransform(156.9,227.7,0.635,0.635);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#886B4D").s().p("AggBnQgPgQgEgaQgEgZAHgWIgFgBQgBACgFAAQgJABghgFQg2gKABgcQABgpArgBQAbgBAxASIAMgjQAHgPAagJQAYgIAWABQAbABAZAUQAYATAMAcQAQAmgJApQgKAsggAVQghASgnAGQgNABgLAAQgeAAgQgQg");
	this.shape_41.setTransform(162.3,221.6,0.635,0.635);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_4},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},14).wait(170));

	// text
	this.instance_5 = new lib.zach_text_diabtes();
	this.instance_5.setTransform(97.5,449.5,1,1,0,0,0,85.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(184));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,23.4,180.5,448.2);


(lib.stomach_pulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stomach_art();
	this.instance.setTransform(89.2,158.2,1,1,0,0,0,89.2,158.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92},5,cjs.Ease.get(1)).to({scaleX:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.3,316.4);


(lib.stomach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loopstomach:29});

	// timeline functions:
	this.frame_105 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_145 = function() {
		playSfx("snd_insulinappear");
	}
	this.frame_184 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_205 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_219 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_231 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_251 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_269 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_284 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_336 = function() {
		this.gotoAndPlay("loopstomach");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(105).call(this.frame_105).wait(40).call(this.frame_145).wait(39).call(this.frame_184).wait(21).call(this.frame_205).wait(14).call(this.frame_219).wait(12).call(this.frame_231).wait(20).call(this.frame_251).wait(18).call(this.frame_269).wait(15).call(this.frame_284).wait(52).call(this.frame_336).wait(1));

	// food
	this.instance = new lib.food_stomach();
	this.instance.setTransform(68,-45,1,1,0,0,0,9.3,22.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:-21,alpha:1},13).to({y:29,alpha:0},22).wait(4).to({y:-45},0).to({y:-21,alpha:1},13).to({y:29,alpha:0},22).wait(234));

	// Layer 5
	this.instance_1 = new lib.stomach_fade();
	this.instance_1.setTransform(104.9,150.5,1,1,0,0,0,114.5,169.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).wait(323));

	// txtlabel
	this.instance_2 = new lib.screen4_stomach_txtlabel();
	this.instance_2.setTransform(191.6,31,1,1,0,0,0,33.5,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(337));

	// stomach
	this.instance_3 = new lib.stomach_pulse("single",0);
	this.instance_3.setTransform(89.2,156.2,1,1,0,0,0,89.2,158.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({startPosition:0},0).wait(71).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(216));

	// insulin
	this.instance_4 = new lib.insulin_cluster();
	this.instance_4.setTransform(-141.3,-105.8,1,1,0,0,0,60.1,58.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.insulin_key();
	this.instance_5.setTransform(-101.4,46.6,0.384,0.394,107.4,0,0,66,30.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.insulin_key();
	this.instance_6.setTransform(-109.9,-2.9,0.384,0.394,27,0,0,66,30.8);

	this.instance_7 = new lib.insulin_key();
	this.instance_7.setTransform(-175.8,2.8,0.384,0.394,-54.4,0,0,66.1,30.9);

	this.instance_8 = new lib.insulin_key();
	this.instance_8.setTransform(-135.6,46.5,0.384,0.394,-34.5,0,0,65.8,30.8);

	this.instance_9 = new lib.insulin_key();
	this.instance_9.setTransform(-137.8,10.5,0.384,0.394,-3.3,0,0,66,30.9);

	this.instance_10 = new lib.insulin_key();
	this.instance_10.setTransform(-153.7,32.2,0.384,0.394,-20,0,0,65.9,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},144).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_10},{t:this.instance_9,p:{regX:66,regY:30.9,rotation:-3.3,x:-137.8,y:10.5}},{t:this.instance_8,p:{regX:65.8,regY:30.8,rotation:-34.5,x:-135.6,y:46.5}},{t:this.instance_7,p:{regX:66.1,regY:30.9,rotation:-54.4,x:-175.8,y:2.8}},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9,p:{regX:65.9,regY:30.8,rotation:-20,x:-153.7,y:32.2}},{t:this.instance_8,p:{regX:66,regY:30.9,rotation:-3.3,x:-137.8,y:10.5}},{t:this.instance_7,p:{regX:65.8,regY:30.8,rotation:-34.5,x:-135.6,y:46.5}},{t:this.instance_6},{t:this.instance_5}]},11).to({state:[{t:this.instance_8,p:{regX:66,regY:30.9,rotation:-3.3,x:-137.8,y:10.5}},{t:this.instance_7,p:{regX:65.8,regY:30.8,rotation:-34.5,x:-135.6,y:46.5}},{t:this.instance_6},{t:this.instance_5}]},19).to({state:[{t:this.instance_7,p:{regX:66,regY:30.9,rotation:-3.3,x:-137.8,y:10.5}},{t:this.instance_6},{t:this.instance_5}]},15).to({state:[{t:this.instance_6},{t:this.instance_5}]},13).to({state:[{t:this.instance_5}]},14).to({state:[{t:this.instance_5}]},17).to({state:[{t:this.instance_5}]},55).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144).to({_off:false},0).to({x:-144.3,y:-102.9},1).wait(1).to({x:-147.2,y:-99.9},0).wait(1).to({x:-150,y:-96.8},0).wait(1).to({x:-152.8,y:-93.6},0).wait(1).to({x:-155.4,y:-90.3},0).wait(1).to({x:-157.9,y:-86.9},0).wait(1).to({x:-160.2,y:-83.4},0).wait(1).to({x:-162.3,y:-79.7},0).wait(1).to({x:-164.3,y:-75.9},0).wait(1).to({x:-166,y:-72},0).wait(1).to({x:-167.4,y:-68},0).wait(1).to({x:-168.5,y:-63.9},0).wait(1).to({x:-169.3,y:-59.7},0).wait(1).to({x:-169.9,y:-55.4},0).wait(1).to({x:-170.2,y:-51.2},0).wait(1).to({x:-170.3,y:-46.9},0).wait(1).to({x:-169.8,y:-42.6},0).wait(1).to({x:-168.9,y:-38.3},0).wait(1).to({x:-167.6,y:-34.2},0).wait(1).to({x:-166.1,y:-30.2},0).wait(1).to({x:-164.2,y:-25.8},0).wait(1).to({x:-162.3,y:-21.5},0).wait(1).to({x:-160.5,y:-17.5},0).wait(1).to({x:-158.7,y:-13.5},0).wait(1).to({x:-156.9,y:-9.6},0).wait(1).to({x:-155.1,y:-5.7},0).wait(1).to({x:-153.5,y:-1.9},0).wait(1).to({x:-151.9,y:2},0).wait(1).to({x:-150.3,y:5.9},0).wait(1).to({x:-148.9,y:9.9},0).wait(1).to({x:-147.5,y:13.9},0).wait(1).to({x:-146.3,y:18},0).to({_off:true},1).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(177).to({_off:false},0).wait(89).to({x:-101,y:45.2},0).to({guide:{path:[-101.1,45.3,-147.3,32.1,-179.2,60.6,-190.7,70.8,-198.5,85,-204.7,96.2,-206.2,104.7,-215.7,158.8,-203.2,223.9,-200,240.8,-192.2,272.3,-185.5,299.5,-183.8,311.1,-176.7,358.7,-179,411.9,-179.5,423.2,-180.6,438.7]}},55).wait(16));

	// Layer 28
	this.instance_11 = new lib.insulin_key();
	this.instance_11.setTransform(-109.6,0,0.384,0.394,27,0,0,66,30.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(249).to({_off:false},0).to({guide:{path:[-109.5,0.1,-154.3,5.6,-182.9,48.8,-192.8,63.9,-199.6,81.9,-204.5,95,-206.2,104.7,-215.7,158.7,-203.2,223.9,-200,240.8,-192.2,272.2,-185.5,299.5,-183.8,311,-176.7,358.7,-179,411.8,-179.4,422.4,-180.5,436.7]}},59).wait(29));

	// Layer 24
	this.instance_12 = new lib.insulin_key();
	this.instance_12.setTransform(-142.7,11.9,0.384,0.394,-3.3,0,0,66,30.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(235).to({_off:false},0).to({guide:{path:[-142.7,12,-169.7,21.3,-188.9,57,-195.8,69.8,-200.8,84.6,-204.7,96.1,-206.2,104.7,-215.7,158.7,-203.2,223.9,-200,240.8,-192.2,272.2,-185.5,299.5,-183.8,311,-176.7,358.7,-179,411.8,-179.6,425.8,-181.2,446.2]}},63).wait(39));

	// Layer 20
	this.instance_13 = new lib.insulin_key();
	this.instance_13.setTransform(-138,50,0.384,0.394,-34.5,0,0,65.8,30.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(222).to({_off:false},0).to({guide:{path:[-137.9,50.2,-164.4,55.1,-185.1,73.4,-193.9,81.1,-199.5,89.6,-205,97.8,-206.2,104.7,-215.7,158.8,-203.2,223.9,-200,240.8,-192.2,272.3,-185.5,299.5,-183.8,311.1,-176.7,358.7,-179,411.9,-179.6,425.2,-181,444.3]}},68).wait(47));

	// Layer 16
	this.instance_14 = new lib.insulin_key();
	this.instance_14.setTransform(-159.4,35.7,0.384,0.394,-20,0,0,65.9,30.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(207).to({_off:false},0).to({guide:{path:[-159.3,35.8,-186.1,45,-197.2,68.9,-201.1,77.2,-203.4,88.3,-204.7,94.5,-206.2,104.7,-215.7,158.7,-203.2,223.9,-200,240.8,-192.2,272.2,-185.5,299.5,-183.8,311,-176.7,358.7,-179,411.8,-179.6,425.3,-181.1,444.7]}},65).wait(65));

	// Layer 12
	this.instance_15 = new lib.insulin_key();
	this.instance_15.setTransform(-174.8,3.2,0.384,0.394,-54.4,0,0,66.1,30.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(188).to({_off:false},0).to({guide:{path:[-174.6,3.3,-180.9,18.5,-192,53.8,-203.9,91.7,-206.2,104.7,-215.6,158.2,-202.7,224,-199.9,237.9,-191.6,272.1,-185.2,298.6,-183.8,311,-181.9,328.2,-182.1,359.5,-182.3,377.7,-183.1,417.2,-183.4,436.8,-183,452.4]}},67).wait(82));

	// Layer 3
	this.instance_16 = new lib.insulin_key();
	this.instance_16.setTransform(-190,49,0.384,0.394,38.9,0,0,66,30.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(177).to({_off:false},0).to({guide:{path:[-189.9,49.2,-218.7,118.5,-206.5,201.8,-203.1,225.1,-193.8,263,-185.2,298.4,-183.8,311.1,-182.9,319,-182.8,358.6,-182.6,394.6,-183.1,417.3,-183.3,429,-183.2,439.3]}},61).wait(99));

	// glucose
	this.instance_17 = new lib.glucose_cluster("single",0);
	this.instance_17.setTransform(126.1,129.4,1,1,0,0,0,42.1,42);
	this.instance_17._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-137.4,85.7,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_1.setTransform(-137.4,85.7,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_2.setTransform(-137,85.8,0.618,0.618);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_3.setTransform(-113.2,99.6,0.618,0.618);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_4.setTransform(-113.2,99.6,0.618,0.618);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_5.setTransform(-112.8,99.7,0.618,0.618);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_6.setTransform(-113.5,125.7,0.618,0.618);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_7.setTransform(-113.5,125.7,0.618,0.618);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_8.setTransform(-113,125.8,0.618,0.618);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_9.setTransform(-137.7,138.8,0.618,0.618);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_10.setTransform(-137.7,138.8,0.618,0.618);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_11.setTransform(-137.3,138.9,0.618,0.618);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_12.setTransform(-137.4,111.8,0.618,0.618);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_13.setTransform(-137.4,111.8,0.618,0.618);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_14.setTransform(-137,111.9,0.618,0.618);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape_15.setTransform(-161.5,125.4,0.618,0.618);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_16.setTransform(-161.5,125.4,0.618,0.618);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8961F4").s().p("AhlDDQgNAAgGgLIhmixQgGgIAGgKIBmiwQACgFAGgBIALAAIDLAAIALAAQAGABACAFIBmCuQAHAKgHAJIhmCyQgGAKgNABg");
	this.shape_17.setTransform(-161.1,125.5,0.618,0.618);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape_18.setTransform(-161.5,97.6,0.618,0.618);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_19.setTransform(-161.5,97.6,0.618,0.618);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8961F4").s().p("AhlDDQgNAAgGgLIhmixQgGgIAGgKIBmiwQACgFAGgBIALAAIDLAAIALAAQAGABACAFIBmCuQAHAKgHAJIhmCyQgGAKgNABg");
	this.shape_20.setTransform(-161.1,97.7,0.618,0.618);

	this.instance_18 = new lib.Tween24("synched",0);
	this.instance_18.setTransform(-113.8,126.3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},106).to({state:[{t:this.instance_17}]},31).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-137.3,y:138.9}},{t:this.shape_10,p:{x:-137.7,y:138.8}},{t:this.shape_9,p:{x:-137.7,y:138.8}},{t:this.shape_8,p:{x:-113,y:125.8}},{t:this.shape_7,p:{x:-113.5,y:125.7}},{t:this.shape_6,p:{x:-113.5,y:125.7}},{t:this.shape_5,p:{x:-112.8,y:99.7}},{t:this.shape_4,p:{x:-113.2,y:99.6}},{t:this.shape_3,p:{x:-113.2,y:99.6}},{t:this.shape_2,p:{x:-137,y:85.8}},{t:this.shape_1,p:{x:-137.4,y:85.7}},{t:this.shape,p:{x:-137.4,y:85.7}}]},40).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-137.3,y:138.9}},{t:this.shape_10,p:{x:-137.7,y:138.8}},{t:this.shape_9,p:{x:-137.7,y:138.8}},{t:this.shape_8,p:{x:-113,y:125.8}},{t:this.shape_7,p:{x:-113.5,y:125.7}},{t:this.shape_6,p:{x:-113.5,y:125.7}},{t:this.shape_5,p:{x:-112.8,y:99.7}},{t:this.shape_4,p:{x:-113.2,y:99.6}},{t:this.shape_3,p:{x:-113.2,y:99.6}},{t:this.shape_2,p:{x:-137,y:85.8}},{t:this.shape_1,p:{x:-137.4,y:85.7}},{t:this.shape,p:{x:-137.4,y:85.7}}]},7).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-137.3,y:138.9}},{t:this.shape_10,p:{x:-137.7,y:138.8}},{t:this.shape_9,p:{x:-137.7,y:138.8}},{t:this.shape_8,p:{x:-113,y:125.8}},{t:this.shape_7,p:{x:-113.5,y:125.7}},{t:this.shape_6,p:{x:-113.5,y:125.7}},{t:this.shape_5,p:{x:-112.8,y:99.7}},{t:this.shape_4,p:{x:-113.2,y:99.6}},{t:this.shape_3,p:{x:-113.2,y:99.6}},{t:this.shape_2,p:{x:-137,y:85.8}},{t:this.shape_1,p:{x:-137.4,y:85.7}},{t:this.shape,p:{x:-137.4,y:85.7}}]},16).to({state:[{t:this.shape_11,p:{x:-137,y:111.9}},{t:this.shape_10,p:{x:-137.4,y:111.8}},{t:this.shape_9,p:{x:-137.4,y:111.8}},{t:this.shape_8,p:{x:-137.3,y:138.9}},{t:this.shape_7,p:{x:-137.7,y:138.8}},{t:this.shape_6,p:{x:-137.7,y:138.8}},{t:this.shape_5,p:{x:-113,y:125.8}},{t:this.shape_4,p:{x:-113.5,y:125.7}},{t:this.shape_3,p:{x:-113.5,y:125.7}},{t:this.shape_2,p:{x:-112.8,y:99.7}},{t:this.shape_1,p:{x:-113.2,y:99.6}},{t:this.shape,p:{x:-113.2,y:99.6}}]},9).to({state:[{t:this.shape_8,p:{x:-137.3,y:138.9}},{t:this.shape_7,p:{x:-137.7,y:138.8}},{t:this.shape_6,p:{x:-137.7,y:138.8}},{t:this.shape_5,p:{x:-113,y:125.8}},{t:this.shape_4,p:{x:-113.5,y:125.7}},{t:this.shape_3,p:{x:-113.5,y:125.7}},{t:this.shape_2,p:{x:-112.8,y:99.7}},{t:this.shape_1,p:{x:-113.2,y:99.6}},{t:this.shape,p:{x:-113.2,y:99.6}}]},17).to({state:[{t:this.shape_5,p:{x:-113,y:125.8}},{t:this.shape_4,p:{x:-113.5,y:125.7}},{t:this.shape_3,p:{x:-113.5,y:125.7}},{t:this.shape_2,p:{x:-112.8,y:99.7}},{t:this.shape_1,p:{x:-113.2,y:99.6}},{t:this.shape,p:{x:-113.2,y:99.6}}]},16).to({state:[{t:this.shape_2,p:{x:-113,y:125.8}},{t:this.shape_1,p:{x:-113.5,y:125.7}},{t:this.shape,p:{x:-113.5,y:125.7}}]},21).to({state:[{t:this.instance_18}]},11).to({state:[{t:this.instance_18}]},45).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(106).to({_off:false},0).to({x:-129.1,y:117.2},31,cjs.Ease.get(1)).to({_off:true},40).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(274).to({_off:false},0).to({guide:{path:[-113.7,126.4,-128.9,125.1,-136.8,124.8,-151.7,124.3,-162.3,126.1,-191.3,131,-191.6,153.2,-192,189.2,-179.4,242.2,-176.1,256,-169.8,280.6,-164.9,300.6,-163.8,311.1,-159.3,350.9,-160.1,402.9,-160.3,422.5,-161.2,449.3]}},45).wait(18));

	// Layer 30
	this.instance_19 = new lib.Tween23("synched",0);
	this.instance_19.setTransform(-113.6,99.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(263).to({_off:false},0).to({guide:{path:[-113.4,99.5,-129.4,95.3,-144.8,99.4,-158.4,103,-169.8,112.5,-180.1,121.1,-186.1,132.5,-191.9,143.5,-191.6,153.1,-190.3,188.7,-178.3,242.1,-175.2,255.9,-169.4,280.5,-164.9,300.4,-163.8,311,-159.3,350.9,-160.1,402.8,-160.3,422.4,-161.2,449.2]}},49).wait(25));

	// Layer 26
	this.instance_20 = new lib.Tween22("synched",0);
	this.instance_20.setTransform(-138,138);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(243).to({_off:false},0).to({guide:{path:[-137.8,138.1,-145.1,130.4,-154.9,127.9,-163.9,125.6,-172.6,128.2,-181.3,130.7,-186.4,137.2,-191.9,144,-191.6,153.1,-190.3,188.7,-178.3,242.1,-175.2,255.9,-169.4,280.5,-164.9,300.4,-163.8,311,-159.3,350.9,-160.1,402.8,-160.4,423.5,-161.3,452.4]}},52).wait(42));

	// Layer 22
	this.instance_21 = new lib.Tween21("synched",0);
	this.instance_21.setTransform(-139.2,110.7);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(226).to({_off:false},0).to({guide:{path:[-139,110.8,-148.7,110,-158.4,112.9,-167.8,115.8,-175.5,121.7,-192.3,134.7,-191.6,153.1,-190.3,188.7,-178.3,242.1,-175.2,255.9,-169.4,280.5,-164.9,300.4,-163.8,311,-159.3,350.9,-160.1,402.8,-160.3,420.8,-161.1,445]}},60).wait(51));

	// Layer 18
	this.instance_22 = new lib.Tween20("synched",0);
	this.instance_22.setTransform(-138,84.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(209).to({_off:false},0).to({guide:{path:[-137.9,84.7,-160.7,87.5,-176.4,106.9,-192.7,127,-191.6,153.2,-190.2,187.2,-177.4,242.1,-169.2,277.4,-168.5,280.5,-164.4,300,-163.8,311.1,-161.1,364.3,-161.2,410.1,-161.2,413.6,-161.8,447.3]}},59).wait(69));

	// Layer 14
	this.instance_23 = new lib.Tween19("synched",0);
	this.instance_23.setTransform(-163,124.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(200).to({_off:false},0).to({x:-161.4,y:450},52).wait(85));

	// Layer 10
	this.instance_24 = new lib.Tween15("synched",0);
	this.instance_24.setTransform(-163,97);
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween16("synched",0);
	this.instance_25.setTransform(-161.5,450.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},184).to({state:[{t:this.instance_25}]},58).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(184).to({_off:false},0).to({_off:true,guide:{path:[-162.9,97.1,-173.8,98.5,-180.1,102.4,-186.1,106.2,-188.9,113.1,-191.4,119.4,-191.9,129.8,-192.2,137.4,-191.6,153.1,-190.2,187.1,-177.4,242,-169.1,277.4,-168.5,280.5,-164.3,299.9,-163.8,311,-161.1,364.2,-161.1,410.1,-161.2,413.6,-161.7,450]}},58).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-19,277,339);


(lib.skin_divider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(426.8,56.9,1,1,0,0,0,434,51.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F19456").s().p("AJZGuQvCgXkcgVQsJg60pAXQlqAGoaAQQm9ANhTAAQiHgBAYliQAMiwAnixQBuABOlgcQNegaECANQIVAaOqAzQMVAmJQAFQYBALeujWIgvLLQ/QCfl8AOQhUADiUAAQlWAAqtgQg");
	this.shape.setTransform(430.7,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F19456").s().p("AJZGuQvCgXkcgVQsJg60pAXQlqAGoaAQQm9ANhTAAQiHgBAYliQAMiwAnixQBuABOlgcQNegaECANQIVAaOqAzQMVAmJQAFQYBALeujWIgvLLQ/QCfl8AOQhUADiUAAQlWAAqtgQg");
	this.shape_1.setTransform(430.7,54.7);

	this.instance_1 = new lib.Path_10();
	this.instance_1.setTransform(430.7,59.6,1,1,0,0,0,428.7,44.6);
	this.instance_1.alpha = 0.07;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BA804B").s().p("AJZGGQvCgXkcgVQsJg60pAXQlqAGoaAQQm9ANhTAAQiHgBAYlJQAMijAnilQBdABPugFQN6gFCuAJISuA8QPJAuCUgFQAegBEkANQFDAOFggEQSbgNdIjLIgvJ7Q/QCfl8AOQhUADiUAAQlWAAqtgQg");
	this.shape_2.setTransform(428.7,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,0,887.4,108.3);


(lib.screen345 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{screen3:0,screen4:9,screen5:19});

	// timeline functions:
	this.frame_0 = function() {
		//starting with "screen3"
		this.stop();
		
		//console.log("setup screen3 within screen345");
		exportRoot.screen345.screenCount=3;	
		
		this.screen35.visible=true;
		this.screen35.gotoAndPlay(0);
		this.screen4.visible=false;	
		this.screen4.gotoAndStop(0);
		exportRoot.zach.gotoAndStop("zachnormal");
		
		//console.log("screenCount: " + exportRoot.screen345.screenCount);
		
		setTimeout(function(){
			change_storytext("screen" + exportRoot.screen345.screenCount);
			read_storytext("screen" + exportRoot.screen345.screenCount);
		}, 20);
	}
	this.frame_9 = function() {
		this.stop();
		
		//console.log("setup screen4 within screen345");
		exportRoot.screen345.screenCount=4;
		
		exportRoot.zach.gotoAndPlay("zacheat")
		playSfx("snd_eating");
		
		this.screen35.gotoAndStop(0);
		this.screen35.visible=false;
		
		this.screen4.visible=true;
		this.screen4.gotoAndPlay(0);
		
		//console.log("screenCount: " + exportRoot.screen345.screenCount);
		
		setTimeout(function(){
			change_storytext("screen" + exportRoot.screen345.screenCount);
			read_storytext("screen" + exportRoot.screen345.screenCount);
		}, 20);
	}
	this.frame_19 = function() {
		//console.log("setup screen5 within screen345");
		exportRoot.screen345.screenCount=5;	
		
		this.screen35.visible=true;
		this.screen35.gotoAndPlay(0);
		this.screen4.visible=true;	
		this.screen4.gotoAndStop("loopstomach");
		exportRoot.zach.gotoAndStop("zachnormal");
		
		//console.log("screenCount: " + exportRoot.screen345.screenCount);
		
		setTimeout(function(){
			change_storytext("screen" + exportRoot.screen345.screenCount);
			read_storytext("screen" + exportRoot.screen345.screenCount);
		}, 20);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(17));

	// txt_labels
	this.instance = new lib.screen345_txtlabels();
	this.instance.setTransform(93.1,223.6,1,1,0,0,0,378.9,260.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// liver
	this.instance_1 = new lib.Path_21();
	this.instance_1.setTransform(-133.6,199.3,1.26,1.26,0,0,0,22.9,7.9);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_1_6();
	this.instance_2.setTransform(-227.7,260.3,1.26,1.26,0,0,0,14.2,36.4);
	this.instance_2.alpha = 0.199;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDDC92").s().p("AF3FrIgBAAQhhgKhHgwQhNgzgohCIgyhgQgdg6gfggQhdhbgwgtQg5g0ghgQQg3gcgzAXQg/AbACgbQAGg3A1giQAOgJAcgDQAjgFAIgCQAPgFAVgKIAigSQAygYAxAPQAUAHAGAEQARALgGAMQgGAMgRAFQgnAMgPAUQgUAbAdAjQAgAkBRBHQBKBDAiApQAUAZAVA3QAWA5AQAYQAaAmAtAcQAfATA6AWIA5AVQAiAQAFAZQADASgQAHQgKAGgSgBIgBABIgCgBgAjkjUQAsAaA5A9QAUAVAnAlQAqAnASATQAbAbAYApQALAUAdA6QArBXBMA2QBOA4BfAKQAtACgtgbIg5gdQgqgQgUgJQg6gagqg1QgSgWgQgqQgUg0gIgPQgTgkghghQgUgWgqgoQg6gvgbgaQgxgvgOgrQgHgVAJgVQAJgUATgKQAGgDAegHQAVgHgWgIQgdgKgOABQgbACgrAWQguAXgXAEQgxAJgIADQghALgLAZQgNAdANgBQADAAAggNQAUgHAVAAQAnAAArAag");
	this.shape.setTransform(-161.6,226,1.26,1.26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDDC92").s().p("AF4FiQhbgIhQg1QhPg1grhRQgGgMgRgmQgOgggLgRQgTgggegeQgUgUgpgjQgLgKgqgtQgkgngcgTIgmgcQgQgMgNgHQgegOgSAAQgVAAgjARQgPAHgOADQgQADgBgGQgBgFAEgKIAGgPQAJgXAYgUQAPgLAXgEQANgDAdgEQAegGAWgMIAxgaQAKgFAQgCQAQgCALACQAfAGAQAJQAbAPgxAMQgWAHgGAEQgJAEgHAKQgLAQADAVQACAOAKAXQAHAOCNCBQAoAlAWAZQAhAkAPAkIAgBPQAVAsAdAWIAaAVQASAPAIAEQAXALAnAOQAnAPAXALIAVAJQANAGAEAIQAHANgFAJQgEAJgRAAIgLgBg");
	this.shape_1.setTransform(-161.7,226,1.26,1.26);

	this.instance_3 = new lib.Group_1();
	this.instance_3.setTransform(-163,228,1.26,1.26,0,0,0,41.6,36.6);
	this.instance_3.alpha = 0.141;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7232B").s().p("AiJJqQhxgRhmh0QhZhkgoh7QgviMANibQAJhmAriiQAkiEBfhVQBvhjCqgHIFWBbQBdA+A7BaQA7BYANBhQAOBkgmBXQgoBcheBBQgXAQhhAtQhNAjghAlQgeAigPBCQgIAlgOBIQgRBBgxAjQgqAbg1AAQgRAAgTgDg");
	this.shape_2.setTransform(-196.2,274.2,1.26,1.26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7232B").s().p("AnXjSQBoheBfgUQBLgPBSAfICCBAQBKAjAxgFQBZgIBRALQBQALAtAbQAvAcgKAkQgLAphQAqQhZAtgzA5QgeAggkA/QghA6gdAcQguArhSAdg");
	this.shape_3.setTransform(-124.3,220,1.26,1.26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A31C21").s().p("AiyKDQhtgihXhgQhShcgvh1Qguh0gDh8QgDh4AdiFQAThTAIgdQARg+AYgsQA9hxBqhBQBog/CDgHQATgBALAPQAKANgCAQIETBKQAFgQAQgHQARgHAPALQCSBiBACeQBGCthLCUQgoBShEA2QgjAcg5AcQhAAeggAQQhAAigSAlQgTAkgJA6QgMBBgKAdQgRAyggAfQg5A6hPAAQgmAAgqgNg");
	this.shape_4.setTransform(-195.7,275.1,1.26,1.26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A31C21").s().p("AguFZQgPgaAVgQImYnnIgBABQgZAWgVgbQgVgbAYgWQB/hxBxgLQBZgJBkAvQAPAHArAXQAjATAWAJQAfANAjACIBEgBQCLgDBVAgQBhAlgBBEQgBArgrAkQgWASg6AeQhmA5gyBMIgjA9QgVAkgTAVQg4A/hnAlQgIADgGAAQgSAAgKgTg");
	this.shape_5.setTransform(-124,220.8,1.26,1.26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(36));

	// pancreas
	this.instance_4 = new lib.pancreas("single",0);
	this.instance_4.setTransform(108,5.1,1,1,0,0,0,132.2,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36));

	// screen4_stomach
	this.screen4 = new lib.stomach();
	this.screen4.setTransform(323.4,265.2,1,1,0,0,0,89.2,157.2);

	this.timeline.addTween(cjs.Tween.get(this.screen4).wait(36));

	// screen35
	this.screen35 = new lib.insulin_glucose_flow();
	this.screen35.setTransform(14.7,120.6,1,1,0,0,0,14.5,120.5);

	this.timeline.addTween(cjs.Tween.get(this.screen35).wait(36));

	// FlashAICB
	this.instance_5 = new lib.ClipGroup_6();
	this.instance_5.setTransform(161.8,336.7,1,1,0,0,0,484.5,283.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AD2025").s().p("EhKvAmOIg9xwQO0CEMng2QGTgbDXg2QFQhdB1jfQAzhjAUiNQAPhygCiyIgJlWQgGjeAHimQAWnoCXmrQDHoxAUg+QCAl/A0j9IFqAdQGPAdC6AAQEDAADZgRQDGgQBrgZQg0D8h/F/QgZBLi/IjQhiEWgdF4QgeGHA4FpQA8GOCXEMQCrEtEJBbQFWB3N5gkQD7gKGegdQF5gaBggDQJfgOHMANQK4ATDMBQIAAQhg");
	this.shape_6.setTransform(161.8,318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance_5}]}).wait(36));

	// skin/red bg
	this.instance_6 = new lib.skin_redbg();
	this.instance_6.setTransform(58.8,116.4,1,1,0,0,0,479.9,357.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36));

	// blue bg
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2FFF6").s().p("EhK+AkfMAAAhI9MCV9AAAMAAABI9g");
	this.shape_7.setTransform(8.8,118);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550.4,-199.5,1196.7,901.5);


(lib.screen10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stomachloop:19});

	// timeline functions:
	this.frame_10 = function() {
		playSfx("snd_insulininjection");
	}
	this.frame_62 = function() {
		playSfx("snd_insulinappear");
	}
	this.frame_178 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_221 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_238 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_248 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_267 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_285 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_303 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_319 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_373 = function() {
		this.gotoAndPlay("stomachloop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(52).call(this.frame_62).wait(116).call(this.frame_178).wait(43).call(this.frame_221).wait(17).call(this.frame_238).wait(10).call(this.frame_248).wait(19).call(this.frame_267).wait(18).call(this.frame_285).wait(18).call(this.frame_303).wait(16).call(this.frame_319).wait(54).call(this.frame_373).wait(1));

	// insulin shot
	this.instance = new lib.short_acting_insulin("single",0);
	this.instance.setTransform(131.8,-286.4,1,1,-45.7,0,0,76.2,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-5,y:-145},14,cjs.Ease.get(1)).wait(5).to({mode:"synched",loop:false},0).wait(16).to({startPosition:9},0).to({x:15.9,y:-165.9},7).to({rotation:-1,x:76.8,y:-147.7},6).wait(326));

	// insulin
	this.instance_1 = new lib.insulin_clustercopy();
	this.instance_1.setTransform(-61.2,-84.2,0.231,0.231,0,0,0,48.7,63);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({regX:48.6,regY:62.9,scaleX:1,scaleY:1,rotation:-25.5,x:-134.5,y:40.8,alpha:1},22,cjs.Ease.get(1)).to({_off:true},26).wait(267));

	// food
	this.instance_2 = new lib.food_stomach();
	this.instance_2.setTransform(68,-45,1,1,0,0,0,9.3,22.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).to({y:-21,alpha:1},13).to({y:29,alpha:0},22).wait(4).to({y:-45},0).to({y:-21,alpha:1},13).to({y:29,alpha:0},22).wait(212));

	// Layer
	this.instance_3 = new lib.stomach_fade();
	this.instance_3.setTransform(104.9,150.5,1,1,0,0,0,114.5,169.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(374));

	// stomach
	this.instance_4 = new lib.stomach_pulse("single",0);
	this.instance_4.setTransform(89.2,156.2,1,1,0,0,0,89.2,158.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({startPosition:0},0).wait(47).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(207));

	// insulin
	this.instance_5 = new lib.insulin_key();
	this.instance_5.setTransform(-190,49,0.384,0.394,38.9,0,0,66,30.8);
	this.instance_5._off = true;

	this.instance_6 = new lib.insulin_key();
	this.instance_6.setTransform(-101.4,46.6,0.384,0.394,107.4,0,0,66,30.6);

	this.instance_7 = new lib.insulin_key();
	this.instance_7.setTransform(-109.9,-2.9,0.384,0.394,27,0,0,66,30.8);

	this.instance_8 = new lib.insulin_key();
	this.instance_8.setTransform(-175.8,2.8,0.384,0.394,-54.4,0,0,66.1,30.9);

	this.instance_9 = new lib.insulin_key();
	this.instance_9.setTransform(-135.6,46.5,0.384,0.394,-34.5,0,0,65.8,30.8);

	this.instance_10 = new lib.insulin_key();
	this.instance_10.setTransform(-137.8,10.5,0.384,0.394,-3.3,0,0,66,30.9);

	this.instance_11 = new lib.insulin_key();
	this.instance_11.setTransform(-153.7,32.2,0.384,0.394,-20,0,0,65.9,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10,p:{regX:66,regY:30.9,rotation:-3.3,x:-137.8,y:10.5}},{t:this.instance_9,p:{regX:65.8,regY:30.8,rotation:-34.5,x:-135.6,y:46.5}},{t:this.instance_8,p:{regX:66.1,regY:30.9,rotation:-54.4,x:-175.8,y:2.8}},{t:this.instance_7,p:{regX:66,regY:30.8,rotation:27,x:-109.9,y:-2.9}},{t:this.instance_6,p:{regY:30.6,rotation:107.4,x:-101.4,y:46.6}},{t:this.instance_5}]},107).to({state:[{t:this.instance_10,p:{regX:65.9,regY:30.8,rotation:-20,x:-153.7,y:32.2}},{t:this.instance_9,p:{regX:66,regY:30.9,rotation:-3.3,x:-137.8,y:10.5}},{t:this.instance_8,p:{regX:65.8,regY:30.8,rotation:-34.5,x:-135.6,y:46.5}},{t:this.instance_7,p:{regX:66.1,regY:30.9,rotation:-54.4,x:-175.8,y:2.8}},{t:this.instance_6,p:{regY:30.8,rotation:27,x:-109.9,y:-2.9}},{t:this.instance_5}]},107).to({state:[{t:this.instance_9,p:{regX:65.9,regY:30.8,rotation:-20,x:-153.7,y:32.2}},{t:this.instance_8,p:{regX:66,regY:30.9,rotation:-3.3,x:-137.8,y:10.5}},{t:this.instance_7,p:{regX:65.8,regY:30.8,rotation:-34.5,x:-135.6,y:46.5}},{t:this.instance_6,p:{regY:30.8,rotation:27,x:-109.9,y:-2.9}},{t:this.instance_5}]},11).to({state:[{t:this.instance_8,p:{regX:66,regY:30.9,rotation:-3.3,x:-137.8,y:10.5}},{t:this.instance_7,p:{regX:65.8,regY:30.8,rotation:-34.5,x:-135.6,y:46.5}},{t:this.instance_6,p:{regY:30.8,rotation:27,x:-109.9,y:-2.9}},{t:this.instance_5}]},19).to({state:[{t:this.instance_7,p:{regX:66,regY:30.9,rotation:-3.3,x:-137.8,y:10.5}},{t:this.instance_6,p:{regY:30.8,rotation:27,x:-109.9,y:-2.9}},{t:this.instance_5}]},15).to({state:[{t:this.instance_6,p:{regY:30.8,rotation:27,x:-109.9,y:-2.9}},{t:this.instance_5}]},13).to({state:[{t:this.instance_5}]},14).to({state:[{t:this.instance_5}]},17).to({state:[{t:this.instance_5}]},55).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).wait(107).to({regY:30.6,rotation:107.4,x:-101.4,y:46.6},0).wait(89).to({x:-101,y:45.2},0).to({guide:{path:[-101.1,45.3,-147.3,32.1,-179.2,60.6,-190.7,70.8,-198.5,85,-204.7,96.2,-206.2,104.7,-215.7,158.8,-203.2,223.9,-200,240.8,-192.2,272.3,-185.5,299.5,-183.8,311.1,-176.7,358.7,-179,411.9,-179.5,423.2,-180.6,438.7]}},55).wait(16));

	// Layer 5
	this.instance_12 = new lib.insulin_key();
	this.instance_12.setTransform(-109.6,0,0.384,0.394,27,0,0,66,30.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(286).to({_off:false},0).to({guide:{path:[-109.5,0.1,-154.3,5.6,-182.9,48.8,-192.8,63.9,-199.6,81.9,-204.5,95,-206.2,104.7,-215.7,158.7,-203.2,223.9,-200,240.8,-192.2,272.2,-185.5,299.5,-183.8,311,-176.7,358.7,-179,411.8,-179.4,422.4,-180.5,436.7]}},59).wait(29));

	// Layer 9
	this.instance_13 = new lib.insulin_key();
	this.instance_13.setTransform(-142.7,11.9,0.384,0.394,-3.3,0,0,66,30.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(272).to({_off:false},0).to({guide:{path:[-142.7,12,-169.7,21.3,-188.9,57,-195.8,69.8,-200.8,84.6,-204.7,96.1,-206.2,104.7,-215.7,158.7,-203.2,223.9,-200,240.8,-192.2,272.2,-185.5,299.5,-183.8,311,-176.7,358.7,-179,411.8,-179.6,425.8,-181.2,446.2]}},63).wait(39));

	// Layer 11
	this.instance_14 = new lib.insulin_key();
	this.instance_14.setTransform(-138,50,0.384,0.394,-34.5,0,0,65.8,30.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(259).to({_off:false},0).to({guide:{path:[-137.9,50.2,-164.4,55.1,-185.1,73.4,-193.9,81.1,-199.5,89.6,-205,97.8,-206.2,104.7,-215.7,158.8,-203.2,223.9,-200,240.8,-192.2,272.3,-185.5,299.5,-183.8,311.1,-176.7,358.7,-179,411.9,-179.6,425.2,-181,444.3]}},68).wait(47));

	// Layer 13
	this.instance_15 = new lib.insulin_key();
	this.instance_15.setTransform(-159.4,35.7,0.384,0.394,-20,0,0,65.9,30.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(244).to({_off:false},0).to({guide:{path:[-159.3,35.8,-186.1,45,-197.2,68.9,-201.1,77.2,-203.4,88.3,-204.7,94.5,-206.2,104.7,-215.7,158.7,-203.2,223.9,-200,240.8,-192.2,272.2,-185.5,299.5,-183.8,311,-176.7,358.7,-179,411.8,-179.6,425.3,-181.1,444.7]}},65).wait(65));

	// Layer 15
	this.instance_16 = new lib.insulin_key();
	this.instance_16.setTransform(-174.8,3.2,0.384,0.394,-54.4,0,0,66.1,30.9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(225).to({_off:false},0).to({guide:{path:[-174.6,3.3,-180.9,18.5,-192,53.8,-203.9,91.7,-206.2,104.7,-215.6,158.2,-202.7,224,-199.9,237.9,-191.6,272.1,-185.2,298.6,-183.8,311,-181.9,328.2,-182.1,359.5,-182.3,377.7,-183.1,417.2,-183.4,436.8,-183,452.4]}},67).wait(82));

	// Layer 17
	this.instance_17 = new lib.insulin_key();
	this.instance_17.setTransform(-190,49,0.384,0.394,38.9,0,0,66,30.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(214).to({_off:false},0).to({guide:{path:[-189.9,49.2,-218.7,118.5,-206.5,201.8,-203.1,225.1,-193.8,263,-185.2,298.4,-183.8,311.1,-182.9,319,-182.8,358.6,-182.6,394.6,-183.1,417.3,-183.3,429,-183.2,439.3]}},61).wait(99));

	// glucose
	this.instance_18 = new lib.glucose_cluster("single",0);
	this.instance_18.setTransform(126.1,129.4,1,1,0,0,0,42.1,42);
	this.instance_18._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape.setTransform(-137.4,85.7,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_1.setTransform(-137.4,85.7,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_2.setTransform(-137,85.8,0.618,0.618);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_3.setTransform(-113.2,99.6,0.618,0.618);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_4.setTransform(-113.2,99.6,0.618,0.618);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_5.setTransform(-112.8,99.7,0.618,0.618);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_6.setTransform(-113.5,125.7,0.618,0.618);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_7.setTransform(-113.5,125.7,0.618,0.618);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_8.setTransform(-113,125.8,0.618,0.618);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_9.setTransform(-137.7,138.8,0.618,0.618);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_10.setTransform(-137.7,138.8,0.618,0.618);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_11.setTransform(-137.3,138.9,0.618,0.618);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdQgYgbAAg5g");
	this.shape_12.setTransform(-137.4,111.8,0.618,0.618);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAIAAAQgCIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgIAGgMABQgUAEgZAAQgzAAgZgdg");
	this.shape_13.setTransform(-137.4,111.8,0.618,0.618);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8961F4").s().p("AhlDCQgNABgGgLIhmiwQgGgJAGgLIBmivQACgEAGgCIALgBIDLAAIALABQAGACACAEIBmCtQAHALgHAJIhmCxQgGALgNAAg");
	this.shape_14.setTransform(-137,111.9,0.618,0.618);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape_15.setTransform(-161.5,125.4,0.618,0.618);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_16.setTransform(-161.5,125.4,0.618,0.618);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8961F4").s().p("AhlDDQgNAAgGgLIhmixQgGgIAGgKIBmiwQACgFAGgBIALAAIDLAAIALAAQAGABACAFIBmCuQAHAKgHAJIhmCyQgGAKgNABg");
	this.shape_17.setTransform(-161.1,125.5,0.618,0.618);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.3).p("AhXgBQADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdQgYgbAAg5g");
	this.shape_18.setTransform(-161.5,97.6,0.618,0.618);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag/BTQgYgbAAg5QADhwBmACQAYABAVAGQAWAHAAAJQAAAHgHALQgIALgGAAIgHgCQgQgIgYgBQg1AAgBBGQgBBGA0ABQAMABAMgDIABgoIgcAAQgJAAAAgQIAAgKQAAgOAKAAIBAABQAMAAAAALIgBBYQAAAHgJAFQgHAFgNADQgVADgYAAQgzAAgZgdg");
	this.shape_19.setTransform(-161.5,97.6,0.618,0.618);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8961F4").s().p("AhlDDQgNAAgGgLIhmixQgGgIAGgKIBmiwQACgFAGgBIALAAIDLAAIALAAQAGABACAFIBmCuQAHAKgHAJIhmCyQgGAKgNABg");
	this.shape_20.setTransform(-161.1,97.7,0.618,0.618);

	this.instance_19 = new lib.Tween24("synched",0);
	this.instance_19.setTransform(-113.8,126.3);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},178).to({state:[{t:this.instance_18}]},31).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-137.3,y:138.9}},{t:this.shape_10,p:{x:-137.7,y:138.8}},{t:this.shape_9,p:{x:-137.7,y:138.8}},{t:this.shape_8,p:{x:-113,y:125.8}},{t:this.shape_7,p:{x:-113.5,y:125.7}},{t:this.shape_6,p:{x:-113.5,y:125.7}},{t:this.shape_5,p:{x:-112.8,y:99.7}},{t:this.shape_4,p:{x:-113.2,y:99.6}},{t:this.shape_3,p:{x:-113.2,y:99.6}},{t:this.shape_2,p:{x:-137,y:85.8}},{t:this.shape_1,p:{x:-137.4,y:85.7}},{t:this.shape,p:{x:-137.4,y:85.7}}]},5).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-137.3,y:138.9}},{t:this.shape_10,p:{x:-137.7,y:138.8}},{t:this.shape_9,p:{x:-137.7,y:138.8}},{t:this.shape_8,p:{x:-113,y:125.8}},{t:this.shape_7,p:{x:-113.5,y:125.7}},{t:this.shape_6,p:{x:-113.5,y:125.7}},{t:this.shape_5,p:{x:-112.8,y:99.7}},{t:this.shape_4,p:{x:-113.2,y:99.6}},{t:this.shape_3,p:{x:-113.2,y:99.6}},{t:this.shape_2,p:{x:-137,y:85.8}},{t:this.shape_1,p:{x:-137.4,y:85.7}},{t:this.shape,p:{x:-137.4,y:85.7}}]},7).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-137.3,y:138.9}},{t:this.shape_10,p:{x:-137.7,y:138.8}},{t:this.shape_9,p:{x:-137.7,y:138.8}},{t:this.shape_8,p:{x:-113,y:125.8}},{t:this.shape_7,p:{x:-113.5,y:125.7}},{t:this.shape_6,p:{x:-113.5,y:125.7}},{t:this.shape_5,p:{x:-112.8,y:99.7}},{t:this.shape_4,p:{x:-113.2,y:99.6}},{t:this.shape_3,p:{x:-113.2,y:99.6}},{t:this.shape_2,p:{x:-137,y:85.8}},{t:this.shape_1,p:{x:-137.4,y:85.7}},{t:this.shape,p:{x:-137.4,y:85.7}}]},16).to({state:[{t:this.shape_11,p:{x:-137,y:111.9}},{t:this.shape_10,p:{x:-137.4,y:111.8}},{t:this.shape_9,p:{x:-137.4,y:111.8}},{t:this.shape_8,p:{x:-137.3,y:138.9}},{t:this.shape_7,p:{x:-137.7,y:138.8}},{t:this.shape_6,p:{x:-137.7,y:138.8}},{t:this.shape_5,p:{x:-113,y:125.8}},{t:this.shape_4,p:{x:-113.5,y:125.7}},{t:this.shape_3,p:{x:-113.5,y:125.7}},{t:this.shape_2,p:{x:-112.8,y:99.7}},{t:this.shape_1,p:{x:-113.2,y:99.6}},{t:this.shape,p:{x:-113.2,y:99.6}}]},9).to({state:[{t:this.shape_8,p:{x:-137.3,y:138.9}},{t:this.shape_7,p:{x:-137.7,y:138.8}},{t:this.shape_6,p:{x:-137.7,y:138.8}},{t:this.shape_5,p:{x:-113,y:125.8}},{t:this.shape_4,p:{x:-113.5,y:125.7}},{t:this.shape_3,p:{x:-113.5,y:125.7}},{t:this.shape_2,p:{x:-112.8,y:99.7}},{t:this.shape_1,p:{x:-113.2,y:99.6}},{t:this.shape,p:{x:-113.2,y:99.6}}]},17).to({state:[{t:this.shape_5,p:{x:-113,y:125.8}},{t:this.shape_4,p:{x:-113.5,y:125.7}},{t:this.shape_3,p:{x:-113.5,y:125.7}},{t:this.shape_2,p:{x:-112.8,y:99.7}},{t:this.shape_1,p:{x:-113.2,y:99.6}},{t:this.shape,p:{x:-113.2,y:99.6}}]},16).to({state:[{t:this.shape_2,p:{x:-113,y:125.8}},{t:this.shape_1,p:{x:-113.5,y:125.7}},{t:this.shape,p:{x:-113.5,y:125.7}}]},21).to({state:[{t:this.instance_19}]},11).to({state:[{t:this.instance_19}]},45).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(178).to({_off:false},0).to({x:-129.1,y:117.2},31,cjs.Ease.get(1)).to({_off:true},5).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(311).to({_off:false},0).to({guide:{path:[-113.7,126.4,-128.9,125.1,-136.8,124.8,-151.7,124.3,-162.3,126.1,-191.3,131,-191.6,153.2,-192,189.2,-179.4,242.2,-176.1,256,-169.8,280.6,-164.9,300.6,-163.8,311.1,-159.3,350.9,-160.1,402.9,-160.3,422.5,-161.2,449.3]}},45).wait(18));

	// Layer 21
	this.instance_20 = new lib.Tween23("synched",0);
	this.instance_20.setTransform(-113.6,99.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(300).to({_off:false},0).to({guide:{path:[-113.4,99.5,-129.4,95.3,-144.8,99.4,-158.4,103,-169.8,112.5,-180.1,121.1,-186.1,132.5,-191.9,143.5,-191.6,153.1,-190.3,188.7,-178.3,242.1,-175.2,255.9,-169.4,280.5,-164.9,300.4,-163.8,311,-159.3,350.9,-160.1,402.8,-160.3,422.4,-161.2,449.2]}},49).wait(25));

	// Layer 23
	this.instance_21 = new lib.Tween22("synched",0);
	this.instance_21.setTransform(-138,138);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(280).to({_off:false},0).to({guide:{path:[-137.8,138.1,-145.1,130.4,-154.9,127.9,-163.9,125.6,-172.6,128.2,-181.3,130.7,-186.4,137.2,-191.9,144,-191.6,153.1,-190.3,188.7,-178.3,242.1,-175.2,255.9,-169.4,280.5,-164.9,300.4,-163.8,311,-159.3,350.9,-160.1,402.8,-160.4,423.5,-161.3,452.4]}},52).wait(42));

	// Layer 25
	this.instance_22 = new lib.Tween21("synched",0);
	this.instance_22.setTransform(-139.2,110.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(263).to({_off:false},0).to({guide:{path:[-139,110.8,-148.7,110,-158.4,112.9,-167.8,115.8,-175.5,121.7,-192.3,134.7,-191.6,153.1,-190.3,188.7,-178.3,242.1,-175.2,255.9,-169.4,280.5,-164.9,300.4,-163.8,311,-159.3,350.9,-160.1,402.8,-160.3,420.8,-161.1,445]}},60).wait(51));

	// Layer 27
	this.instance_23 = new lib.Tween20("synched",0);
	this.instance_23.setTransform(-138,84.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(246).to({_off:false},0).to({guide:{path:[-137.9,84.7,-160.7,87.5,-176.4,106.9,-192.7,127,-191.6,153.2,-190.2,187.2,-177.4,242.1,-169.2,277.4,-168.5,280.5,-164.4,300,-163.8,311.1,-161.1,364.3,-161.2,410.1,-161.2,413.6,-161.8,447.3]}},59).wait(69));

	// Layer 29
	this.instance_24 = new lib.Tween19("synched",0);
	this.instance_24.setTransform(-163,124.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(237).to({_off:false},0).to({x:-161.4,y:450},52).wait(85));

	// Layer 31
	this.instance_25 = new lib.Tween15("synched",0);
	this.instance_25.setTransform(-163,97);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween16("synched",0);
	this.instance_26.setTransform(-161.5,450.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25}]},221).to({state:[{t:this.instance_26}]},58).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(221).to({_off:false},0).to({_off:true,guide:{path:[-162.9,97.1,-173.8,98.5,-180.1,102.4,-186.1,106.2,-188.9,113.1,-191.4,119.4,-191.9,129.8,-192.2,137.4,-191.6,153.1,-190.2,187.1,-177.4,242,-169.1,277.4,-168.5,280.5,-164.3,299.9,-163.8,311,-161.1,364.2,-161.1,410.1,-161.2,413.6,-161.7,450]}},58).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-347.3,277,667.3);


(lib.screen9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bg_glucose.gotoAndStop(0);
	}
	this.frame_93 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_129 = function() {
		playSfx("snd_insulinappear");
	}
	this.frame_155 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_209 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_233 = function() {
		playSfx("snd_insulinappear");
	}
	this.frame_272 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_322 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_341 = function() {
		playSfx("snd_insulinappear");
	}
	this.frame_349 = function() {
		//console.log("play screen9.bg_glucose");
		this.bg_glucose.gotoAndPlay(1);
	}
	this.frame_370 = function() {
		playSfx("snd_gimeet");
	}
	this.frame_385 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_479 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(93).call(this.frame_93).wait(36).call(this.frame_129).wait(26).call(this.frame_155).wait(54).call(this.frame_209).wait(24).call(this.frame_233).wait(39).call(this.frame_272).wait(50).call(this.frame_322).wait(19).call(this.frame_341).wait(8).call(this.frame_349).wait(21).call(this.frame_370).wait(15).call(this.frame_385).wait(94).call(this.frame_479).wait(1));

	// Layer 2 copy 2
	this.instance = new lib.insulin_key();
	this.instance.setTransform(-208.2,-54.8,0.262,0.268,0,0,0,65.7,30.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.insulin_key_wglucose("single",0);
	this.instance_1.setTransform(-160.8,8.1,0.627,0.642,0,0,0,65.8,30.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(335).to({_off:false},0).wait(1).to({regX:65.8,scaleX:0.28,scaleY:0.28,x:-205.4,y:-52.8,alpha:0.039},0).wait(1).to({regX:65.6,scaleX:0.29,scaleY:0.3,x:-202.6,y:-50.7,alpha:0.09},0).wait(1).to({regX:65.8,scaleX:0.31,scaleY:0.32,x:-199.9,y:-48.5,alpha:0.129},0).wait(1).to({regX:65.7,scaleX:0.33,scaleY:0.33,x:-197.2,y:-46.3,alpha:0.18},0).wait(1).to({scaleX:0.34,scaleY:0.35,x:-194.6,y:-44,alpha:0.219},0).wait(1).to({regX:65.8,scaleX:0.36,scaleY:0.37,x:-192,y:-41.7,alpha:0.262},0).wait(1).to({regX:65.7,scaleX:0.37,scaleY:0.38,x:-189.6,y:-39.3,alpha:0.301},0).wait(1).to({scaleX:0.39,scaleY:0.4,x:-187.1,y:-36.8,alpha:0.352},0).wait(1).to({regX:65.8,scaleX:0.41,scaleY:0.41,x:-184.7,y:-34.2,alpha:0.391},0).wait(1).to({scaleX:0.42,scaleY:0.43,x:-182.5,y:-31.6,alpha:0.43},0).wait(1).to({scaleX:0.44,scaleY:0.45,x:-180.2,y:-28.9,alpha:0.48},0).wait(1).to({regX:65.7,scaleX:0.45,scaleY:0.46,x:-178.1,y:-26.1,alpha:0.52},0).wait(1).to({scaleX:0.47,scaleY:0.48,x:-176,y:-23.3,alpha:0.57},0).wait(1).to({scaleX:0.48,scaleY:0.5,x:-174.1,y:-20.4,alpha:0.609},0).wait(1).to({scaleX:0.5,scaleY:0.51,x:-172.2,y:-17.5,alpha:0.648},0).wait(1).to({scaleX:0.52,scaleY:0.53,x:-170.4,y:-14.4,alpha:0.699},0).wait(1).to({scaleX:0.53,scaleY:0.55,x:-168.7,y:-11.4,alpha:0.738},0).wait(1).to({regX:65.8,scaleX:0.55,scaleY:0.56,x:-167.1,y:-8.2,alpha:0.781},0).wait(1).to({scaleX:0.56,scaleY:0.58,x:-165.6,y:-5.1,alpha:0.82},0).wait(1).to({regX:65.7,scaleX:0.58,scaleY:0.59,x:-164.3,y:-1.8,alpha:0.871},0).wait(1).to({regX:65.8,scaleX:0.6,scaleY:0.61,x:-163,y:1.5,alpha:0.91},0).wait(1).to({scaleX:0.61,scaleY:0.63,x:-161.8,y:4.8,alpha:0.961},0).to({_off:true},1).wait(105).to({_off:false,scaleX:0.63,scaleY:0.64,x:-168,y:410.6,alpha:1},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(358).to({_off:false},0).wait(1).to({x:-159.7,y:11.9},0).wait(1).to({x:-158.7,y:15.7},0).wait(1).to({x:-157.9,y:19.5},0).wait(1).to({x:-157.2,y:23.3},0).wait(1).to({x:-156.7,y:27.2},0).wait(1).to({x:-156.2,y:31.1},0).wait(1).to({x:-155.9,y:35},0).wait(1).to({x:-155.6,y:38.8},0).wait(1).to({x:-155.5,y:42.7},0).wait(1).to({y:46.6},0).wait(1).to({x:-155.6,y:50.5},0).wait(1).to({x:-155.9,y:54.4,startPosition:1},0).wait(1).to({x:-156.3,y:58.3},0).wait(1).to({x:-156.8,y:62.2},0).wait(1).to({x:-157.4,y:66.1},0).wait(1).to({x:-158.1,y:69.9},0).wait(1).to({x:-158.9,y:73.7},0).wait(1).to({x:-159.7,y:77.5},0).wait(1).to({x:-160.8,y:81.7},0).wait(1).to({x:-162,y:86},0).wait(1).to({x:-163.1,y:90},0).wait(1).to({x:-164.2,y:93.9},0).wait(1).to({x:-165.3,y:97.7},0).wait(1).to({x:-166.3,y:101.6},0).wait(1).to({x:-167.4,y:105.4},0).wait(1).to({x:-168.5,y:109.1},0).wait(1).to({x:-169.5,y:112.9},0).wait(1).to({x:-170.6,y:116.6},0).wait(1).to({x:-171.6,y:120.3},0).wait(1).to({x:-172.5,y:124},0).wait(1).to({x:-173.5,y:127.7},0).wait(1).to({x:-174.4,y:131.4},0).wait(1).to({x:-175.3,y:135.2},0).wait(1).to({x:-176.2,y:138.9},0).wait(1).to({x:-177,y:142.7},0).wait(1).to({x:-177.7,y:146.5},0).wait(1).to({x:-178.5,y:150.3},0).wait(1).to({x:-179.2,y:154.1},0).wait(1).to({x:-179.8,y:157.9},0).wait(1).to({x:-180.4,y:161.8},0).wait(1).to({x:-180.9,y:165.6},0).wait(1).to({x:-181.4,y:169.5},0).wait(1).to({x:-181.8,y:173.3},0).wait(1).to({x:-182.2,y:177.2},0).wait(1).to({x:-182.6,y:181.1},0).wait(1).to({x:-182.8,y:184.9},0).wait(1).to({x:-183.1,y:188.8},0).wait(1).to({x:-183.2,y:192.7},0).wait(1).to({x:-183.4,y:196.6},0).wait(1).to({y:200.5},0).wait(1).to({x:-183.5,y:204.4},0).wait(1).to({x:-183.4,y:208.3},0).wait(1).to({x:-183.2,y:212.3},0).wait(1).to({x:-182.9,y:216.2},0).wait(1).to({x:-182.6,y:220.2},0).wait(1).to({x:-182.1,y:224.1},0).wait(1).to({x:-181.6,y:228},0).wait(1).to({x:-181.1,y:231.8},0).wait(1).to({x:-180.4,y:235.7},0).wait(1).to({x:-179.8,y:239.5},0).wait(1).to({x:-179.1,y:243.4},0).wait(1).to({x:-178.3,y:247.3},0).wait(1).to({x:-177.5,y:251.3},0).wait(1).to({x:-176.6,y:255.2},0).wait(1).to({x:-175.7,y:259.1},0).wait(1).to({x:-174.8,y:263},0).wait(1).to({x:-174,y:266.8},0).wait(1).to({x:-173.1,y:270.7},0).wait(1).to({x:-172.2,y:274.5},0).wait(1).to({x:-171.2,y:278.3},0).wait(1).to({x:-170.3,y:282.1},0).wait(1).to({x:-169.4,y:285.8},0).wait(1).to({x:-168.5,y:289.5},0).wait(1).to({x:-167.7,y:293.1},0).wait(1).to({x:-166.8,y:296.8},0).wait(1).to({x:-166,y:300.4},0).wait(1).to({x:-165.1,y:304.1},0).wait(1).to({x:-164.2,y:307.8},0).wait(1).to({x:-163.4,y:311.5},0).wait(1).to({x:-162.6,y:315.2},0).wait(1).to({x:-161.7,y:318.9},0).wait(1).to({x:-160.9,y:322.6},0).wait(1).to({x:-160.2,y:326.4},0).wait(1).to({x:-159.5,y:330.2},0).wait(1).to({x:-158.9,y:333.9},0).wait(1).to({x:-158.3,y:337.7},0).wait(1).to({x:-157.7,y:341.4},0).wait(1).to({x:-157.3,y:345.2},0).wait(1).to({x:-156.9,y:349},0).wait(1).to({x:-156.6,y:352.9},0).wait(1).to({x:-156.5,y:356.7},0).wait(1).to({y:360.6},0).wait(1).to({y:364.4},0).wait(1).to({x:-156.6,y:368.1},0).wait(1).to({x:-156.8,y:371.9},0).wait(1).to({x:-157,y:375.7},0).wait(1).to({x:-157.4,y:379.5},0).wait(1).to({x:-157.8,y:383.3},0).wait(1).to({x:-158.5,y:387.1},0).wait(1).to({x:-159.5,y:391},0).wait(1).to({x:-160.9,y:395},0).wait(1).to({x:-162.3,y:398.9},0).wait(1).to({x:-163.7,y:402.6},0).wait(1).to({x:-165.1,y:406.3},0).to({_off:true},1).wait(17));

	// Layer 2 copy
	this.instance_2 = new lib.insulin_key();
	this.instance_2.setTransform(-208.2,-54.8,0.262,0.268,0,0,0,65.7,30.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.insulin_key_wglucose("single",0);
	this.instance_3.setTransform(-160.8,8.1,0.627,0.642,0,0,0,65.8,30.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(228).to({_off:false},0).to({regX:65.8,scaleX:0.28,scaleY:0.28,guide:{path:[-208.1,-54.7,-206.7,-53.7,-205.3,-52.7]},alpha:0.039},1).wait(1).to({regX:65.6,scaleX:0.29,scaleY:0.3,x:-202.6,y:-50.7,alpha:0.09},0).wait(1).to({regX:65.8,scaleX:0.31,scaleY:0.32,x:-199.9,y:-48.5,alpha:0.129},0).wait(1).to({regX:65.7,scaleX:0.33,scaleY:0.33,x:-197.2,y:-46.3,alpha:0.18},0).wait(1).to({scaleX:0.34,scaleY:0.35,x:-194.6,y:-44,alpha:0.219},0).wait(1).to({regX:65.8,scaleX:0.36,scaleY:0.37,x:-192,y:-41.7,alpha:0.262},0).wait(1).to({regX:65.7,scaleX:0.37,scaleY:0.38,x:-189.6,y:-39.3,alpha:0.301},0).wait(1).to({scaleX:0.39,scaleY:0.4,x:-187.1,y:-36.8,alpha:0.352},0).wait(1).to({regX:65.8,scaleX:0.41,scaleY:0.41,x:-184.7,y:-34.2,alpha:0.391},0).wait(1).to({scaleX:0.42,scaleY:0.43,x:-182.5,y:-31.6,alpha:0.43},0).wait(1).to({scaleX:0.44,scaleY:0.45,x:-180.2,y:-28.9,alpha:0.48},0).wait(1).to({regX:65.7,scaleX:0.45,scaleY:0.46,x:-178.1,y:-26.1,alpha:0.52},0).wait(1).to({scaleX:0.47,scaleY:0.48,x:-176,y:-23.3,alpha:0.57},0).wait(1).to({scaleX:0.48,scaleY:0.5,x:-174.1,y:-20.4,alpha:0.609},0).wait(1).to({scaleX:0.5,scaleY:0.51,x:-172.2,y:-17.5,alpha:0.648},0).wait(1).to({scaleX:0.52,scaleY:0.53,x:-170.4,y:-14.4,alpha:0.699},0).wait(1).to({scaleX:0.53,scaleY:0.55,x:-168.7,y:-11.4,alpha:0.738},0).wait(1).to({regX:65.8,scaleX:0.55,scaleY:0.56,x:-167.1,y:-8.2,alpha:0.781},0).wait(1).to({scaleX:0.56,scaleY:0.58,x:-165.6,y:-5.1,alpha:0.82},0).wait(1).to({regX:65.7,scaleX:0.58,scaleY:0.59,x:-164.3,y:-1.8,alpha:0.871},0).wait(1).to({regX:65.8,scaleX:0.6,scaleY:0.61,x:-163,y:1.5,alpha:0.91},0).wait(1).to({scaleX:0.61,scaleY:0.63,x:-161.8,y:4.8,alpha:0.961},0).to({_off:true},1).wait(105).to({_off:false,scaleX:0.63,scaleY:0.64,x:-168,y:410.6,alpha:1},0).to({_off:true},1).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(251).to({_off:false},0).wait(1).to({x:-159.7,y:11.9},0).wait(1).to({x:-158.7,y:15.7},0).wait(1).to({x:-157.9,y:19.6},0).wait(1).to({x:-157.2,y:23.4},0).wait(1).to({x:-156.6,y:27.3},0).wait(1).to({x:-156.2,y:31.2},0).wait(1).to({x:-155.8,y:35.2},0).wait(1).to({x:-155.6,y:39.1},0).wait(1).to({x:-155.5,y:43},0).wait(1).to({y:46.9},0).wait(1).to({x:-155.6,y:50.9},0).wait(1).to({x:-155.9,y:54.9},0).wait(1).to({x:-156.3,y:58.8},0).wait(1).to({x:-156.8,y:62.7},0).wait(1).to({x:-157.5,y:66.7},0).wait(1).to({x:-158.2,y:70.5},0).wait(1).to({x:-159,y:74.4},0).wait(1).to({x:-159.9,y:78.2},0).wait(1).to({x:-161,y:82.2},0).wait(1).to({x:-162,y:86.2},0).wait(1).to({x:-163.1,y:90,startPosition:1},0).wait(1).to({x:-164.2,y:93.8},0).wait(1).to({x:-165.2,y:97.7},0).wait(1).to({x:-166.3,y:101.5},0).wait(1).to({x:-167.4,y:105.3},0).wait(1).to({x:-168.4,y:109.1},0).wait(1).to({x:-169.5,y:112.8},0).wait(1).to({x:-170.5,y:116.5},0).wait(1).to({x:-171.5,y:120.2},0).wait(1).to({x:-172.5,y:123.9},0).wait(1).to({x:-173.5,y:127.6},0).wait(1).to({x:-174.4,y:131.4},0).wait(1).to({x:-175.3,y:135.1},0).wait(1).to({x:-176.1,y:138.9},0).wait(1).to({x:-177,y:142.6},0).wait(1).to({x:-177.7,y:146.4},0).wait(1).to({x:-178.5,y:150.2},0).wait(1).to({x:-179.1,y:154},0).wait(1).to({x:-179.8,y:157.9},0).wait(1).to({x:-180.4,y:161.7},0).wait(1).to({x:-180.9,y:165.6},0).wait(1).to({x:-181.4,y:169.4},0).wait(1).to({x:-181.8,y:173.3},0).wait(1).to({x:-182.2,y:177.2},0).wait(1).to({x:-182.6,y:181},0).wait(1).to({x:-182.8,y:184.9},0).wait(1).to({x:-183.1,y:188.8},0).wait(1).to({x:-183.2,y:192.7},0).wait(1).to({x:-183.4,y:196.5},0).wait(1).to({y:200.4},0).wait(1).to({x:-183.5,y:204.3},0).wait(1).to({x:-183.4,y:208.3},0).wait(1).to({x:-183.2,y:212.2},0).wait(1).to({x:-183,y:216.2},0).wait(1).to({x:-182.6,y:220.1},0).wait(1).to({x:-182.1,y:224},0).wait(1).to({x:-181.6,y:227.9},0).wait(1).to({x:-181.1,y:231.8},0).wait(1).to({x:-180.5,y:235.7},0).wait(1).to({x:-179.8,y:239.5},0).wait(1).to({x:-179.1,y:243.4},0).wait(1).to({x:-178.3,y:247.3},0).wait(1).to({x:-177.5,y:251.3},0).wait(1).to({x:-176.6,y:255.2},0).wait(1).to({x:-175.8,y:259.1},0).wait(1).to({x:-174.9,y:263},0).wait(1).to({x:-174,y:266.8},0).wait(1).to({x:-173.1,y:270.6},0).wait(1).to({x:-172.2,y:274.5},0).wait(1).to({x:-171.3,y:278.3},0).wait(1).to({x:-170.4,y:282},0).wait(1).to({x:-169.5,y:285.8},0).wait(1).to({x:-168.6,y:289.5},0).wait(1).to({x:-167.7,y:293.1},0).wait(1).to({x:-166.8,y:296.8},0).wait(1).to({x:-166,y:300.4},0).wait(1).to({x:-165.1,y:304.1},0).wait(1).to({x:-164.2,y:307.8},0).wait(1).to({x:-163.5,y:311.4},0).wait(1).to({x:-162.6,y:315.2},0).wait(1).to({x:-161.8,y:318.9},0).wait(1).to({x:-161,y:322.6},0).wait(1).to({x:-160.3,y:326.4},0).wait(1).to({x:-159.6,y:330.1},0).wait(1).to({x:-158.9,y:333.9},0).wait(1).to({x:-158.3,y:337.6},0).wait(1).to({x:-157.8,y:341.4},0).wait(1).to({x:-157.3,y:345.2},0).wait(1).to({x:-157,y:349},0).wait(1).to({x:-156.7,y:352.9},0).wait(1).to({x:-156.5,y:356.7},0).wait(1).to({y:360.6},0).wait(1).to({x:-156.6,y:364.4},0).wait(1).to({x:-156.7,y:368.1},0).wait(1).to({x:-156.8,y:371.9},0).wait(1).to({x:-157.1,y:375.7},0).wait(1).to({x:-157.4,y:379.5},0).wait(1).to({x:-157.9,y:383.3},0).wait(1).to({x:-158.5,y:387.1},0).wait(1).to({x:-159.6,y:391},0).wait(1).to({x:-161,y:395},0).wait(1).to({x:-162.3,y:398.8},0).wait(1).to({x:-163.7,y:402.6},0).wait(1).to({x:-165.1,y:406.3},0).to({_off:true},1).wait(124));

	// Layer 2
	this.instance_4 = new lib.insulin_key();
	this.instance_4.setTransform(-208.2,-54.8,0.262,0.268,0,0,0,65.7,30.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.insulin_key_wglucose("single",0);
	this.instance_5.setTransform(-160.8,8.1,0.627,0.642,0,0,0,65.8,30.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(122).to({_off:false},0).wait(1).to({regX:65.8,scaleX:0.28,scaleY:0.28,x:-205.4,y:-52.8,alpha:0.039},0).wait(1).to({regX:65.6,scaleX:0.29,scaleY:0.3,x:-202.6,y:-50.7,alpha:0.09},0).wait(1).to({regX:65.8,scaleX:0.31,scaleY:0.32,x:-199.9,y:-48.5,alpha:0.129},0).wait(1).to({regX:65.7,scaleX:0.33,scaleY:0.33,x:-197.2,y:-46.3,alpha:0.18},0).wait(1).to({scaleX:0.34,scaleY:0.35,x:-194.6,y:-44,alpha:0.219},0).wait(1).to({regX:65.8,scaleX:0.36,scaleY:0.37,x:-192,y:-41.7,alpha:0.262},0).wait(1).to({regX:65.7,scaleX:0.37,scaleY:0.38,x:-189.6,y:-39.3,alpha:0.301},0).wait(1).to({scaleX:0.39,scaleY:0.4,x:-187.1,y:-36.8,alpha:0.352},0).wait(1).to({regX:65.8,scaleX:0.41,scaleY:0.41,x:-184.7,y:-34.2,alpha:0.391},0).wait(1).to({scaleX:0.42,scaleY:0.43,x:-182.5,y:-31.6,alpha:0.43},0).wait(1).to({scaleX:0.44,scaleY:0.45,x:-180.2,y:-28.9,alpha:0.48},0).wait(1).to({regX:65.7,scaleX:0.45,scaleY:0.46,x:-178.1,y:-26.1,alpha:0.52},0).wait(1).to({scaleX:0.47,scaleY:0.48,x:-176,y:-23.3,alpha:0.57},0).wait(1).to({scaleX:0.48,scaleY:0.5,x:-174.1,y:-20.4,alpha:0.609},0).wait(1).to({scaleX:0.5,scaleY:0.51,x:-172.2,y:-17.5,alpha:0.648},0).wait(1).to({scaleX:0.52,scaleY:0.53,x:-170.4,y:-14.4,alpha:0.699},0).wait(1).to({scaleX:0.53,scaleY:0.55,x:-168.7,y:-11.4,alpha:0.738},0).wait(1).to({regX:65.8,scaleX:0.55,scaleY:0.56,x:-167.1,y:-8.2,alpha:0.781},0).wait(1).to({scaleX:0.56,scaleY:0.58,x:-165.6,y:-5.1,alpha:0.82},0).wait(1).to({regX:65.7,scaleX:0.58,scaleY:0.59,x:-164.3,y:-1.8,alpha:0.871},0).wait(1).to({regX:65.8,scaleX:0.6,scaleY:0.61,x:-163,y:1.5,alpha:0.91},0).wait(1).to({scaleX:0.61,scaleY:0.63,x:-161.8,y:4.8,alpha:0.961},0).to({_off:true},1).wait(335));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(145).to({_off:false},0).wait(1).to({x:-159.7,y:11.9},0).wait(1).to({x:-158.7,y:15.6},0).wait(1).to({x:-157.9,y:19.5},0).wait(1).to({x:-157.2,y:23.3},0).wait(1).to({x:-156.7,y:27.2},0).wait(1).to({x:-156.2,y:31},0).wait(1).to({x:-155.9,y:34.9},0).wait(1).to({x:-155.6,y:38.8},0).wait(1).to({x:-155.5,y:42.7},0).wait(1).to({y:46.6,startPosition:1},0).wait(1).to({x:-155.6,y:50.5},0).wait(1).to({x:-155.9,y:54.4},0).wait(1).to({x:-156.3,y:58.3},0).wait(1).to({x:-156.8,y:62.2},0).wait(1).to({x:-157.4,y:66.1},0).wait(1).to({x:-158.1,y:70},0).wait(1).to({x:-158.9,y:73.8},0).wait(1).to({x:-159.7,y:77.6},0).wait(1).to({x:-160.8,y:81.7},0).wait(1).to({x:-162,y:86},0).wait(1).to({x:-163.1,y:90},0).wait(1).to({x:-164.2,y:93.9},0).wait(1).to({x:-165.3,y:97.8},0).wait(1).to({x:-166.3,y:101.6},0).wait(1).to({x:-167.4,y:105.4},0).wait(1).to({x:-168.5,y:109.2},0).wait(1).to({x:-169.5,y:112.9},0).wait(1).to({x:-170.6,y:116.6},0).wait(1).to({x:-171.6,y:120.3},0).wait(1).to({x:-172.5,y:124},0).wait(1).to({x:-173.5,y:127.7},0).wait(1).to({x:-174.4,y:131.5},0).wait(1).to({x:-175.3,y:135.2},0).wait(1).to({x:-176.2,y:138.9},0).wait(1).to({x:-177,y:142.7},0).wait(1).to({x:-177.8,y:146.5},0).wait(1).to({x:-178.5,y:150.3},0).wait(1).to({x:-179.2,y:154.1},0).wait(1).to({x:-179.8,y:158},0).wait(1).to({x:-180.4,y:161.8},0).wait(1).to({x:-180.9,y:165.6},0).wait(1).to({x:-181.4,y:169.5},0).wait(1).to({x:-181.8,y:173.4},0).wait(1).to({x:-182.2,y:177.2},0).wait(1).to({x:-182.6,y:181.1},0).wait(1).to({x:-182.8,y:185},0).wait(1).to({x:-183.1,y:188.8},0).wait(1).to({x:-183.2,y:192.7},0).wait(1).to({x:-183.4,y:196.6},0).wait(1).to({y:200.5},0).wait(1).to({x:-183.5,y:204.4},0).wait(1).to({x:-183.4,y:208.3},0).wait(1).to({x:-183.2,y:212.3},0).wait(1).to({x:-182.9,y:216.2},0).wait(1).to({x:-182.6,y:220.2},0).wait(1).to({x:-182.1,y:224.1},0).wait(1).to({x:-181.6,y:228},0).wait(1).to({x:-181.1,y:231.9},0).wait(1).to({x:-180.4,y:235.7},0).wait(1).to({x:-179.8,y:239.6},0).wait(1).to({x:-179.1,y:243.4},0).wait(1).to({x:-178.3,y:247.3},0).wait(1).to({x:-177.5,y:251.3},0).wait(1).to({x:-176.6,y:255.2},0).wait(1).to({x:-175.8,y:259.1},0).wait(1).to({x:-174.9,y:263},0).wait(1).to({x:-174,y:266.9},0).wait(1).to({x:-173.1,y:270.7},0).wait(1).to({x:-172.2,y:274.5},0).wait(1).to({x:-171.3,y:278.3},0).wait(1).to({x:-170.4,y:282.1},0).wait(1).to({x:-169.5,y:285.8},0).wait(1).to({x:-168.6,y:289.5},0).wait(1).to({x:-167.7,y:293.1},0).wait(1).to({x:-166.8,y:296.8},0).wait(1).to({x:-166,y:300.5},0).wait(1).to({x:-165.1,y:304.1},0).wait(1).to({x:-164.3,y:307.8},0).wait(1).to({x:-163.4,y:311.5},0).wait(1).to({x:-162.6,y:315.2},0).wait(1).to({x:-161.8,y:318.9},0).wait(1).to({x:-161,y:322.6},0).wait(1).to({x:-160.3,y:326.4},0).wait(1).to({x:-159.6,y:330.2},0).wait(1).to({x:-158.9,y:333.9},0).wait(1).to({x:-158.3,y:337.7},0).wait(1).to({x:-157.8,y:341.5},0).wait(1).to({x:-157.3,y:345.2},0).wait(1).to({x:-156.9,y:349.1},0).wait(1).to({x:-156.6,y:352.9},0).wait(1).to({x:-156.5,y:356.7},0).wait(1).to({y:360.6},0).wait(1).to({y:364.4},0).wait(1).to({x:-156.6,y:368.2},0).wait(1).to({x:-156.8,y:371.9},0).wait(1).to({x:-157,y:375.7},0).wait(1).to({x:-157.4,y:379.5},0).wait(1).to({x:-157.8,y:383.3},0).wait(1).to({x:-158.5,y:387.1},0).wait(1).to({x:-159.5,y:391},0).wait(1).to({x:-160.9,y:395},0).wait(1).to({x:-162.3,y:398.9},0).wait(1).to({x:-163.7,y:402.6},0).wait(1).to({x:-165.1,y:406.3},0).to({_off:true},1).wait(230));

	// food
	this.instance_6 = new lib.food_stomach();
	this.instance_6.setTransform(68,-45,1,1,0,0,0,9.3,22.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({y:-21,alpha:1},13).to({y:29,alpha:0},22).wait(4).to({y:-45},0).to({y:-21,alpha:1},13).to({y:29,alpha:0},22).wait(391));

	// fade in
	this.instance_7 = new lib.stomach_fade();
	this.instance_7.setTransform(104.9,150.5,1,1,0,0,0,114.5,169.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(480));

	// stomach
	this.instance_8 = new lib.stomach_pulse("single",0);
	this.instance_8.setTransform(89.2,156.2,1,1,0,0,0,89.2,158.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({startPosition:0},0).wait(71).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(85).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(93).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(41).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(48).to({startPosition:0},0).wait(43));

	// glucose2
	this.instance_9 = new lib.glucose_cluster("single",0);
	this.instance_9.setTransform(108.5,107.7,1,1,0,0,0,22.7,19.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(93).to({_off:false},0).to({x:-141.5,y:18.8},22,cjs.Ease.get(1)).wait(40).to({startPosition:4},0).wait(117).to({startPosition:9},0).wait(98).to({startPosition:14},0).wait(110));

	// glucose2
	this.instance_10 = new lib.glucose_cluster("single",0);
	this.instance_10.setTransform(133.5,158.5,1,1,0,0,0,22.7,19.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(378).to({_off:false},0).to({x:-123.2,y:295},20).wait(82));

	// glucose2
	this.instance_11 = new lib.glucose_cluster("single",0);
	this.instance_11.setTransform(129.5,160.9,1,1,0,0,0,22.7,19.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(317).to({_off:false},0).to({x:-208.2,y:215.4},23).wait(140));

	// glucose2
	this.instance_12 = new lib.glucose_cluster("single",0);
	this.instance_12.setTransform(121.5,170,1,1,0,0,0,22.7,19.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(204).to({_off:false},0).to({x:-191.3,y:107.1},20).wait(256));

	// bg glucose
	this.bg_glucose = new lib.bg_glucose();
	this.bg_glucose.setTransform(-184.1,183.1,1,1,0,0,0,291.1,195.2);

	this.timeline.addTween(cjs.Tween.get(this.bg_glucose).wait(480));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-475.2,-19,718.6,397.4);


(lib.screen75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.kara.gotoAndPlay("karaeat");
		playSfx("snd_eating");
	}
	this.frame_107 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_156 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_201 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_248 = function() {
		playSfx("snd_glucoseappear");
	}
	this.frame_271 = function() {
		this.stop();
		exportRoot.kara.gotoAndStop("weakened");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(107).call(this.frame_107).wait(49).call(this.frame_156).wait(45).call(this.frame_201).wait(47).call(this.frame_248).wait(23).call(this.frame_271).wait(1));

	// food
	this.instance = new lib.food_stomach();
	this.instance.setTransform(68,-45,1,1,0,0,0,9.3,22.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:-21,alpha:1},13).to({y:29,alpha:0},22).wait(4).to({y:-45},0).to({y:-21,alpha:1},13).to({y:29,alpha:0},22).wait(169));

	// fade in
	this.instance_1 = new lib.stomach_fade();
	this.instance_1.setTransform(104.9,150.5,1,1,0,0,0,114.5,169.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).wait(258));

	// screen78_stomachlabel
	this.instance_2 = new lib.screen78_stomachlabel();
	this.instance_2.setTransform(191.9,23,1,1,0,0,0,33.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(272));

	// stomach
	this.instance_3 = new lib.stomach_pulse("single",0);
	this.instance_3.setTransform(89.2,156.2,1,1,0,0,0,89.2,158.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({startPosition:0},0).wait(71).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(23).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(23).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(25).to({mode:"synched"},0).wait(21).to({mode:"single"},0).wait(17));

	// glucose2
	this.instance_4 = new lib.glucose_cluster("single",0);
	this.instance_4.setTransform(108.5,107.7,1,1,0,0,0,22.7,19.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(107).to({_off:false},0).to({x:-141.5,y:18.8},22,cjs.Ease.get(1)).wait(143));

	// glucose2
	this.instance_5 = new lib.glucose_cluster("single",0);
	this.instance_5.setTransform(133.9,116.1,1,1,0,0,0,22.7,19.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(244).to({_off:false},0).to({x:-115.1,y:298.2},23,cjs.Ease.get(1)).wait(5));

	// glucose2
	this.instance_6 = new lib.glucose_cluster("single",0);
	this.instance_6.setTransform(130.1,118.8,1,1,0,0,0,22.7,19.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(199).to({_off:false},0).to({x:-199.9,y:216.6},23,cjs.Ease.get(1)).wait(50));

	// glucose2
	this.instance_7 = new lib.glucose_cluster("single",0);
	this.instance_7.setTransform(122.7,127.9,1,1,0,0,0,22.7,19.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(156).to({_off:false},0).to({x:-205.2,y:100.1},20,cjs.Ease.get(1)).wait(96));

	// bg glucose
	this.instance_8 = new lib.bg_glucose("single",279);
	this.instance_8.setTransform(-184.1,183.1,1,1,0,0,0,291.1,195.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(272));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-475.2,-19,718.6,397.4);


(lib.screen7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loopflow":87});

	// timeline functions:
	this.frame_0 = function() {
		//console.log("FRAME0 of screen7!");
		this.bg_glucose.gotoAndStop(0);
		this.bg_glucose.hasPlayed=false;
		//console.log("bg_glucose.hasPlayed: " + this.bg_glucose.hasPlayed);
	}
	this.frame_87 = function() {
		//console.log("bg_glucose.hasPlayed: "  + this.bg_glucose.hasPlayed);
		
		if(!this.bg_glucose.hasPlayed){
			//console.log("bg_gloucose finishing single playthru");
			this.bg_glucose.hasPlayed=true;
			this.bg_glucose.gotoAndPlay(0);
		}
	}
	this.frame_174 = function() {
		this.bg_glucose.hasPlayed=true;
		this.gotoAndPlay("loopflow");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(87).call(this.frame_87).wait(87).call(this.frame_174).wait(1));

	// liver glucose
	this.instance = new lib.new_single_glucose();
	this.instance.setTransform(-163.4,232,1,1,0,0,0,22.7,19.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).wait(35).to({x:-159,y:238.9},0).to({guide:{path:[-158.9,238.8,-153.2,249.3,-129.1,251,-112.3,252.2,-77,249,-31.4,244.9,-20.3,244.5,9.9,243.3,23.5,248.9,42,256.5,52.7,265.4]}},52).wait(1));

	// liver glucose
	this.instance_1 = new lib.new_single_glucose();
	this.instance_1.setTransform(-163.4,232,1,1,0,0,0,22.7,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({x:-159,y:238.9},0).wait(1).to({x:-156.4,y:242.4},0).wait(1).to({x:-152.9,y:245.1},0).wait(1).to({x:-148.9,y:247.1},0).wait(1).to({x:-144.8,y:248.6},0).wait(1).to({x:-140.5,y:249.6},0).wait(1).to({x:-136.3,y:250.4},0).wait(1).to({x:-132,y:250.9},0).wait(1).to({x:-127.7,y:251.2},0).wait(1).to({x:-123.2,y:251.4},0).wait(1).to({x:-118.7,y:251.5},0).wait(1).to({x:-114.3,y:251.4},0).wait(1).to({x:-109.8,y:251.3},0).wait(1).to({x:-105.5,y:251.1},0).wait(1).to({x:-101.1,y:250.9},0).wait(1).to({x:-96.8,y:250.7},0).wait(1).to({x:-92.4,y:250.4},0).wait(1).to({x:-88.1,y:250.1},0).wait(1).to({x:-83.8,y:249.7},0).wait(1).to({x:-79.6,y:249.3},0).wait(1).to({x:-75.3,y:249},0).wait(1).to({x:-71.2,y:248.6},0).wait(1).to({x:-67.1,y:248.2},0).wait(1).to({x:-63.1,y:247.9},0).wait(1).to({x:-59,y:247.5},0).wait(1).to({x:-54.9,y:247.2},0).wait(1).to({x:-50.8,y:246.8},0).wait(1).to({x:-46.7,y:246.5},0).wait(1).to({x:-42.6,y:246.1},0).wait(1).to({x:-38.5,y:245.8},0).wait(1).to({x:-34.4,y:245.5},0).wait(1).to({x:-30.3,y:245.2},0).wait(1).to({x:-26.2,y:244.9},0).wait(1).to({x:-22,y:244.7},0).wait(1).to({x:-17.8,y:244.5},0).wait(1).to({x:-13.6,y:244.4},0).wait(1).to({x:-9.5},0).wait(1).to({x:-5.3},0).wait(1).to({x:-1.2,y:244.6},0).wait(1).to({x:3,y:244.9},0).wait(1).to({x:7.1,y:245.3},0).wait(1).to({x:11.3,y:245.8},0).wait(1).to({x:15.4,y:246.6},0).wait(1).to({x:19.5,y:247.6},0).wait(1).to({x:23.5,y:249},0).wait(1).to({x:27.4,y:250.7},0).wait(1).to({x:31.2,y:252.4},0).wait(1).to({x:35,y:254.2},0).wait(1).to({x:38.7,y:256.2},0).wait(1).to({x:42.4,y:258.3},0).wait(1).to({x:45.9,y:260.5},0).wait(1).to({x:49.4,y:262.9},0).wait(1).to({x:52.8,y:265.5},0).wait(1).to({x:55.9,y:268.4},0).wait(1).to({x:58.9,y:271.4},0).wait(1).to({x:61.6,y:274.7},0).wait(1).to({x:64.1,y:278.2},0).wait(1).to({x:66.3,y:282},0).wait(1).to({x:68.1,y:285.8},0).wait(1).to({x:69.7,y:289.8},0).wait(1).to({x:71,y:294},0).wait(1).to({x:72,y:298.1},0).wait(1).to({x:72.8,y:302.4},0).wait(1).to({x:73.3,y:306.6},0).wait(1).to({x:73.6,y:310.9},0).wait(1).to({x:73.7,y:315.1},0).wait(1).to({y:319.4},0).wait(1).to({x:73.6,y:323.6},0).wait(1).to({x:73.4,y:327.8},0).wait(1).to({x:73,y:332},0).wait(1).to({x:72.5,y:336.2},0).wait(1).to({x:71.7,y:340.4},0).wait(1).to({x:70.8,y:344.6},0).wait(1).to({x:69.7,y:348.7},0).wait(1).to({x:68.4,y:352.8},0).wait(1).to({x:66.9,y:356.8},0).wait(1).to({x:65.1,y:360.8},0).wait(1).to({x:63.1,y:364.7},0).wait(1).to({x:61,y:368.5},0).wait(1).to({x:58.8,y:372.2},0).wait(1).to({x:56.5,y:375.9},0).wait(1).to({x:54.1,y:379.5},0).wait(1).to({x:51.7,y:383},0).wait(1).to({x:49.3,y:386.4},0).wait(1).to({x:47,y:389.9},0).wait(1).to({x:44.8,y:393.4},0).wait(1).to({x:42.6,y:396.9},0).wait(1).to({x:40.4,y:400.5},0).wait(1).to({x:38.4,y:404.1},0).wait(1).to({x:36.5,y:407.9},0).wait(1).to({x:34.8,y:411.8},0).wait(1).to({x:33.3,y:415.9},0).wait(1).to({x:32.1,y:420},0).wait(1).to({x:31,y:424.2},0).wait(1).to({x:30.2,y:428.4},0).wait(1).to({x:29.5,y:432.7},0).wait(1).to({x:29,y:436.9},0).wait(1).to({x:28.7,y:441.2},0).wait(1).to({x:28.6,y:445.5},0).wait(1).to({x:28.5,y:449.8},0).wait(1).to({x:28.7,y:454.2},0).wait(1).to({x:29.1,y:458.6},0).wait(1).to({x:29.5,y:462.9},0).wait(1).to({x:29.9,y:467.2},0).wait(1).to({x:30.5,y:471.5},0).wait(1).to({x:31,y:475.6},0).wait(1).to({x:31.5,y:479.7},0).wait(1).to({x:32,y:483.8},0).wait(1).to({x:32.4,y:487.9},0).wait(1).to({x:32.5,y:492.1},0).wait(1).to({x:32.4,y:496.3},0).wait(1).to({x:32.1,y:500.6},0).wait(1).to({x:31.6,y:504.8},0).wait(1).to({x:31,y:509},0).wait(1).to({x:30.1,y:513.2},0).wait(1).to({x:29.1,y:517.4},0).wait(1).to({x:27.9,y:521.5},0).wait(1).to({x:26.4,y:525.5},0).wait(1).to({x:24.8,y:529.5},0).wait(1).to({x:23.1,y:533.3},0).wait(1).to({x:21.1,y:537},0).wait(1).to({x:19,y:540.6},0).wait(1).to({x:16.5,y:544},0).wait(1).to({x:13.8,y:547.2},0).wait(1).to({x:10.7,y:550.1},0).wait(1).to({x:7.3,y:552.6},0).wait(1).to({x:3.6,y:554.6},0).wait(1).to({x:-1.2,y:555.4},0).to({_off:true},1).wait(12));

	// bg glucose
	this.bg_glucose = new lib.bg_glucose();
	this.bg_glucose.setTransform(47.9,301.1,1,1,0,0,0,291.1,195.2);

	this.timeline.addTween(cjs.Tween.get(this.bg_glucose).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.2,105.9,582.1,390.5);


(lib.KaraEatLunch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_110 = function() {
		if (exportRoot.dropCnt == 1) {
			this.stop();
			this.parent.gotoAndStop("sick");
		}
	}
	this.frame_120 = function() {
		if (exportRoot.dropCnt == 2) {
			this.parent.gotoAndStop("normal");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(110).call(this.frame_110).wait(10).call(this.frame_120).wait(1));

	// burger hand
	this.instance = new lib.sand_hand();
	this.instance.setTransform(61.8,174.4,1,1,15.7,0,0,23.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:171.4},5).to({y:174.4},6).wait(28).to({y:171.4},5).to({y:174.4},6).wait(71));

	// head
	this.instance_1 = new lib.KARA_EAT_HEAD("single",9);
	this.instance_1.setTransform(64.9,93.4,1,1,0,0,0,49.1,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:96.9,mode:"synched",startPosition:15,loop:false},5).to({y:93.4,startPosition:21},6).wait(28).to({mode:"single",startPosition:9},0).to({y:96.9,mode:"synched",startPosition:15,loop:false},5).to({y:93.4,startPosition:21},6).wait(41).to({mode:"single",startPosition:0},0).wait(30));

	// arms neck
	this.instance_2 = new lib.karashoulders();
	this.instance_2.setTransform(75.3,198.4,1,1,0,0,0,58.9,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:195.4},5).to({y:198.4},6).wait(28).to({y:195.4},5).to({y:198.4},6).wait(71));

	// body
	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(69.9,275.8);

	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(69.9,275.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},5).to({_off:false},6).wait(28).to({startPosition:0},0).to({_off:true},5).to({_off:false},6).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},5).to({_off:true},6).wait(28).to({_off:false},5).to({_off:true},6).wait(71));

	// kara hair back
	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.setTransform(62.2,99.6);

	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.setTransform(62.2,103.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:103.1},5).to({_off:false,y:99.6},6).wait(28).to({startPosition:0},0).to({_off:true,y:103.1},5).to({_off:false,y:99.6},6).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},5).to({_off:true,y:99.6},6).wait(28).to({_off:false,y:103.1},5).to({_off:true,y:99.6},6).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,34.8,123.2,372.8);


(lib.KaraEatDinner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_110 = function() {
		if (exportRoot.dropCnt == 1) {
			this.stop();
			this.parent.gotoAndStop("sick");
		}
	}
	this.frame_120 = function() {
		if (exportRoot.dropCnt == 2) {
			this.parent.gotoAndStop("normal");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(110).call(this.frame_110).wait(10).call(this.frame_120).wait(1));

	// burger hand
	this.instance = new lib.brocc_hand();
	this.instance.setTransform(61.8,174.4,1,1,15.7,0,0,23.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:171.4},5).to({y:174.4},6).wait(28).to({y:171.4},5).to({y:174.4},6).wait(71));

	// head
	this.instance_1 = new lib.KARA_EAT_HEAD("single",9);
	this.instance_1.setTransform(64.9,93.4,1,1,0,0,0,49.1,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:96.9,mode:"synched",startPosition:15,loop:false},5).to({y:93.4,startPosition:21},6).wait(28).to({mode:"single",startPosition:9},0).to({y:96.9,mode:"synched",startPosition:15,loop:false},5).to({y:93.4,startPosition:21},6).wait(41).to({mode:"single",startPosition:0},0).wait(30));

	// arms neck
	this.instance_2 = new lib.karashoulders();
	this.instance_2.setTransform(75.3,198.4,1,1,0,0,0,58.9,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:195.4},5).to({y:198.4},6).wait(28).to({y:195.4},5).to({y:198.4},6).wait(71));

	// body
	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(69.9,275.8);

	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(69.9,275.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},5).to({_off:false},6).wait(28).to({startPosition:0},0).to({_off:true},5).to({_off:false},6).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},5).to({_off:true},6).wait(28).to({_off:false},5).to({_off:true},6).wait(71));

	// kara hair back
	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.setTransform(62.2,99.6);

	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.setTransform(62.2,103.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:103.1},5).to({_off:false,y:99.6},6).wait(28).to({startPosition:0},0).to({_off:true,y:103.1},5).to({_off:false,y:99.6},6).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},5).to({_off:true,y:99.6},6).wait(28).to({_off:false,y:103.1},5).to({_off:true,y:99.6},6).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,34.8,123.2,372.8);


(lib.KaraEatBreakfast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_103 = function() {
		this.parent.gotoAndStop("normal");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(103).call(this.frame_103).wait(1));

	// burger hand
	this.instance = new lib.toast_hand();
	this.instance.setTransform(61.8,174.4,1,1,15.7,0,0,23.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:171.4},5).to({y:174.4},6).wait(28).to({y:171.4},5).to({y:174.4},6).wait(54));

	// head
	this.instance_1 = new lib.KARA_EAT_HEAD("single",9);
	this.instance_1.setTransform(64.9,93.4,1,1,0,0,0,49.1,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:96.9,mode:"synched",startPosition:15,loop:false},5).to({y:93.4,startPosition:21},6).wait(28).to({mode:"single",startPosition:9},0).to({y:96.9,mode:"synched",startPosition:15,loop:false},5).to({y:93.4,startPosition:21},6).wait(41).to({mode:"single",startPosition:0},0).wait(13));

	// arms neck
	this.instance_2 = new lib.karashoulders();
	this.instance_2.setTransform(75.3,198.4,1,1,0,0,0,58.9,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:195.4},5).to({y:198.4},6).wait(28).to({y:195.4},5).to({y:198.4},6).wait(54));

	// body
	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(69.9,275.8);

	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(69.9,275.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},5).to({_off:false},6).wait(28).to({startPosition:0},0).to({_off:true},5).to({_off:false},6).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},5).to({_off:true},6).wait(28).to({_off:false},5).to({_off:true},6).wait(54));

	// kara hair back
	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.setTransform(62.2,99.6);

	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.setTransform(62.2,103.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:103.1},5).to({_off:false,y:99.6},6).wait(28).to({startPosition:0},0).to({_off:true,y:103.1},5).to({_off:false,y:99.6},6).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},5).to({_off:true,y:99.6},6).wait(28).to({_off:false,y:103.1},5).to({_off:true,y:99.6},6).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,34.8,123.2,372.8);


(lib.Kara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{happy:0,weakened:1,urinating:20,vomiting:40,heavy_breathing:60,dehydrated:80,karaeat:100});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}
	this.frame_232 = function() {
		this.gotoAndPlay("karaeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(20).call(this.frame_79).wait(20).call(this.frame_99).wait(133).call(this.frame_232).wait(1));

	// burger hand
	this.instance = new lib.burger_handcopy();
	this.instance.setTransform(61.8,174.4,1,1,15.7,0,0,23.8,20.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({y:171.4},5).to({y:174.4},6).wait(28).to({y:171.4},5).to({y:174.4},6).wait(83));

	// head
	this.instance_1 = new lib.KARA_EAT_HEAD("single",9);
	this.instance_1.setTransform(64.9,93.4,1,1,0,0,0,49.1,58.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).to({y:96.9,mode:"synched",startPosition:15,loop:false},5).to({y:93.4,startPosition:21},6).wait(28).to({mode:"single",startPosition:9},0).to({y:96.9,mode:"synched",startPosition:15,loop:false},5).to({y:93.4,startPosition:21},6).wait(41).to({mode:"single",startPosition:0},0).wait(41).to({mode:"synched",startPosition:94,loop:false},0).wait(1));

	// arms neck
	this.instance_2 = new lib.karashoulders();
	this.instance_2.setTransform(75.3,198.4,1,1,0,0,0,58.9,64);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({y:195.4},5).to({y:198.4},6).wait(28).to({y:195.4},5).to({y:198.4},6).wait(83));

	// body
	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(69.9,275.8);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(69.9,275.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({_off:true},5).to({_off:false},6).wait(28).to({startPosition:0},0).to({_off:true},5).to({_off:false},6).wait(82).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},5).to({_off:true},6).wait(28).to({_off:false},5).to({_off:true},6).wait(83));

	// kara hair back
	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.setTransform(62.2,99.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.setTransform(62.2,103.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100).to({_off:false},0).to({_off:true,y:103.1},5).to({_off:false,y:99.6},6).wait(28).to({startPosition:0},0).to({_off:true,y:103.1},5).to({_off:false,y:99.6},6).wait(82).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100).to({_off:false},5).to({_off:true,y:99.6},6).wait(28).to({_off:false,y:103.1},5).to({_off:true,y:99.6},6).wait(83));

	// text
	this.instance_7 = new lib.kara_txt_diabetes();
	this.instance_7.setTransform(70,450.3,1,1,0,0,0,45.9,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(233));

	// symptom
	this.instance_8 = new lib.weakness_slide("synched",0,false);
	this.instance_8.setTransform(69.8,-37,1,1,0,0,0,96,36.6);

	this.instance_9 = new lib.urinating_slide("synched",0,false);
	this.instance_9.setTransform(69.8,-42,1,1,0,0,0,96,36.6);

	this.instance_10 = new lib.vomiting_slide("synched",0,false);
	this.instance_10.setTransform(61.3,-44.7,1,1,0,0,0,96,36.6);

	this.instance_11 = new lib.heavybreathing_slide("synched",0,false);
	this.instance_11.setTransform(77.7,59.3,1,1,0,0,0,97,143.2);

	this.instance_12 = new lib.dehydration_slide("synched",0,false);
	this.instance_12.setTransform(77.7,59.3,1,1,0,0,0,97,143.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_10}]},20).to({state:[{t:this.instance_11}]},20).to({state:[{t:this.instance_12}]},20).to({state:[]},20).wait(133));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A2E25").s().p("AlDCtQgHgBAAgIQgDgnABgTQACgfAQgUIBpiBQAEgEAJgDIAOgFIDZhWQAJgEADAKQADAKgJAEIjOBRQgeANABgBIAAAAIAAAAIh1CPQAAAAABAAQAAgBAAABQABAAAAAAQAAABAAAAIgBANIAAAlQATgSAbgQQA0gbAYgRQA+guAfgUQA3glAvgJQAbgFArAKIBGAOQA1AGAngLQAugMAegkQAHgIAHAIQAHAHgGAHQgoAwhBAKQgwAHhLgNQgpgIgUgDQgkgEgYALQgdALgfATIg4ApQgJAHhVAxQg8AjgWAiQgDAFgFAAIgEgBg");
	this.shape.setTransform(54.8,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A2E25").s().p("AlBBPIB4iUIDuhdIEdBQQgsA4hWACQgbABghgFIgjgGQgKgBgRgEQgTgFgIgBQg4gIhHAvQgOAIgrAhQgiAagXAOQgWANguAYQgmAXgRAcg");
	this.shape_1.setTransform(54.9,67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGAAQAHAAAAAFQAAAGgHAAQgGAAAAgGg");
	this.shape_2.setTransform(78,95.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAuQgIgIgCgNQgEgSACgOQAAgSAGgKQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQACgDAFgDQAMgKAMAKQALAJACAOQADAUgDAPQgFAWgOALQgGAFgEAAQgFAAgGgFg");
	this.shape_3.setTransform(78.8,98.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAEQgCgCAAgCQAAgGAGABQAHgBAAAGQAAACgCACQgDACgCAAQgCAAgCgCg");
	this.shape_4.setTransform(46.2,96.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAuQgJgIgCgNQgDgVABgLQAAgRAGgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAHgGQAMgKAMAKQAMAJABAOQAHAwgaAUQgGAFgEAAQgFAAgFgFg");
	this.shape_5.setTransform(47,99.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#584233").s().p("AgXAoQAAgHAHgBQAVgCARgMQATgPgIgUQgHgSgaADQgSACgTALQgGAEgEgGQgDgHAGgDQAYgPAaAAQAjgBAGAaQAIAcgWAUQgUASgdACIgCAAQgFAAAAgHg");
	this.shape_6.setTransform(64.4,113.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#584233").s().p("AhbgGQgHgHAHgHQAHgHAHAHQAbAdAygBQA0gBAageQAGgHAHAHQAHAHgGAHQgfAkg9ABIgBAAQg6AAgggig");
	this.shape_7.setTransform(63.5,133);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#584233").s().p("AATAZQgOgkgfgEQgHgBAAgHQAAgIAHABQApAFASAuQADAHgIACIgCABQgFAAgCgGg");
	this.shape_8.setTransform(90.4,86.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#584233").s().p("AgYAhQgHgCABgHQAGgnAugRQAHgCACAHQACAIgHACQglANgFAgQgBAFgEAAIgDAAg");
	this.shape_9.setTransform(37.1,89.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B58F67").s().p("AgxBAIAMhnQAUgrAhAMQAjANgBArQgBAigiAhQgUAVgTAAQgOAAgLgKg");
	this.shape_10.setTransform(109,100.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A2E25").s().p("AmJG3QgciBAFh/QAGiQAvhpQA7iHBygwQBEgcBHgIQBNgHBAAUQA1ARAqgEIAcgDQARAAALAFQAbANAWAdQANATATAmIAjBLQAVAuAQAcQATAdAJAKQAVAaADgcQAEgUgCgGIhgkaQgIgXgEgGQgHgLgRgIIhxgzQhCgdgggQQgHgDgVACIgfADQhPAGiiAOQggADgmAqQgVAXgiAtIg6A9QgiAlgRAdQgRAcAAA1QgBAeADA2QgGDtACBiQAAAKgKAAQgKAAAAgKQgCh2AFieIAEi7QABgmAigmIB2iDQAZggAPgSQAbggAWgGQAjgJA6gDIBfgDIBlgIIAVgCQANgBAHAEQAnAVA8AaIBlAsIAeANQAPAJAFAPIBeEVQAgBZgkAKQgaAHgZggQgJgMgWgnQgIgQgihKQgZg4gVggQgTgdgVgLQgWgMgiAEQgdAEgVgDQgPgBgbgKQgdgJgOgCQhvgQhhAlQhaAhg4BMQg1BHgSBiQgnDTAoC5QACAJgKADIgEAAQgGAAgBgHg");
	this.shape_11.setTransform(62.8,87.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A2E25").s().p("AnKFSIAAimIAIk8QAAgCANgVIAOgXIDAjVQAGgHAJgBQE9gbAGAEQAMAIDbBhQAJAEAEAKIBsE8IgFAsQgEANgPgGQgNgFgJgNQgcglgkhMQgphXgSgfQgZgqgcgKQgQgFgaADIgrAEQgRgBgXgHIgogMQgggJgqAAQhhgBhRAiQhbAmgvBIQgLARgMAZIgUAtQgdA/gKCMQgLCdAcB6g");
	this.shape_12.setTransform(62.8,87.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B58F67").s().p("AlLFwQhsiIgNjoQgNjkCLiWQCEiODCABQDfABB/CbQB5CUgUDXQgUDkhtCLQh3CZjBAAQjcAAh5iYg");
	this.shape_13.setTransform(62.3,98.5);

	this.instance_13 = new lib.Path_8_6();
	this.instance_13.setTransform(62.4,99.9,1,1,0,0,0,45.5,52.1);
	this.instance_13.alpha = 0.102;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A2E25").s().p("AgtAAQAFAAApgZQAqgTADAVQAAAIghAPQgeAOAEAVg");
	this.shape_14.setTransform(87.8,43.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A2E25").s().p("AghAkQANggAMgTQAVgoAQAIQAMAGgSAnIgXAzg");
	this.shape_15.setTransform(83.8,39.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A2E25").s().p("AgMAUIACgZQACgVAHAAQAGgBAEAZIAEAdg");
	this.shape_16.setTransform(80.2,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B58F67").s().p("AhNCmQgVghgBhOQAHgOAFgeQALg6gEhQQgCgsAbgSQAYgQAjAHQAjAHAYAUQAaAWgGAWQgLAnANBKQAGAiAJAdQAABSgVAhQgXAlg4AAQg3AAgWgjg");
	this.shape_17.setTransform(63.5,150.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C966CC").s().p("AkFpnIHRABICRSZIq5A1g");
	this.shape_18.setTransform(68.2,222);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C966CC").s().p("ACmHDQgTkdhTi5QhhjgjChcIhxhyQFCgTC2EjQCXDvAaGFg");
	this.shape_19.setTransform(98.8,200.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C966CC").s().p("Aj9CmQAcizAyh4QCBk0FQg1IhACmQh1A+hABFQg/BEggBcQgcBSgMCHQgIBTgHDaIi4APQAXjwANhag");
	this.shape_20.setTransform(29.9,204.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D5D858").s().p("AhlBhQg3gCgHgtQgIgrArgXQA9gkA/gqICpgDQADAogMAZQgJAUgVANQh+BhhfAAIgGgBg");
	this.shape_21.setTransform(44.4,381.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D5D858").s().p("AgOBNQgmgPhGgqQgUgLgJgVQgJgXAAgsICogPQAUALAjAdQAgAbAaAMQAtASgFAoQgGApg2AIQgOADgPAAQgpAAgtgSg");
	this.shape_22.setTransform(95.9,380.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B58F67").s().p("AgqBMQgLgNABgWQAAgHABgGQgFAEgIABQgNABgNgLQgMgMAAgNQgBgRAQgMIANgIQAIgFAEgGQAEgFABgMQABgNACgEIB1AFQASAMALAQQAQAWgHASQgFANgSgCQgOAAgHgJQAFAJADAOQAEAVgEAMQgIAYgVgEQgNgCgFgMQgCAOgQAKQgMAIgKAAQgLAAgJgJg");
	this.shape_23.setTransform(123,253.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B58F67").s().p("AAIBQQgRgJgCgOQgFAMgOAEQgVAGgKgYQgGgLADgVQABgQAEgIQgGAIgOADQgTAEgGgOQgIgRAOgXQAKgQARgOIB6gPQACAEADANQACALAEAFQAFAGAJAEIAOAHQASALAAARQABANgMANQgLAMgPgBQgHAAgHgEQACAGABAIQACAVgKAOQgIALgNAAQgKAAgNgGg");
	this.shape_24.setTransform(10.9,261.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#353535").ss(17.1).p("AgnorQAHC5AjGgQAjGHACB3");
	this.shape_25.setTransform(84.2,317.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#353535").ss(17.1).p("AAJosQADC6gMGgQgMGJAFB2");
	this.shape_26.setTransform(53.3,317.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A2E25").s().p("AjIJgQhZgQiIgkQgGgBgBgFQgmjCgMiLQgRi3ASiWQATifA2hpQBBiAB7hAQCThMB8AYQBJANAzAhQAqAcA6AGQAPABAQAJQB1BEAsCLQAkB0gSCYQgBAKgKAAQgKAAABgKQAMhlgIhJQgKhfgshFQgzhQg5ghQgTgMgtgIQgqgIgWgOQhlhCh7AMQh2ALhmBKQhcBDgxBxQgpBdgOCEQgWDNAkD/QALBLAKA1IAFAlQAEAdABABIBUAUQBuAZA6AKQBfAQBJABQBKABBYgNQBAgJBggVQAxgLA+gQIATgEQgEABABgsIADgzQAIiTAAknQAAgHAKAAQAKAAAAAHQAAC9gCBUQgDCYgKB4QgBAIgHABQiAAjhXARQh5AWhjABIgEAAQhjAAh7gXg");
	this.shape_27.setTransform(62.2,99.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A2E25").s().p("AADJtQhlgDitgkIiYgjQgvjrgIi4QgLjgAsioQAXhYAohAQA0hSBjg5QBjg5BlgHQBvgHBZA4IAdATQARAKAOADQAIABAPABIAWABQAWAFAbATQAzAlAlA1QAlA1ARA/QAcBkgTCSIgBA9QAADAgCBZQgDCPgKB5QhJAThdATQisAkhmAAIgPAAg");
	this.shape_28.setTransform(62.3,99.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#584233").s().p("AhZAJQgCgJAJgBQBSgaBTAWQAKADgDAHQgDAKgJgDQhOgShNAWIgEAAQgGAAgCgHg");
	this.shape_29.setTransform(72.1,144.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A2E25").s().p("AlECsQgIgCAAgIQgCgnABgSQACgfAQgUIBriAQAEgEAIgDIAOgFIDbhUQAJgEADAKQACAKgJAEIjOBPQgfAOABgCIh1CNQAAAAAAAAQABgBAAABQAAAAAAAAQAAABAAABIgBANIAAAlQATgSAbgQIBNgrQAggVA9gsQA3glAvgIQAcgFAsAKQA+AOAKABQBtANA4hBQAGgHAIAHQAHAIgHAHQgpAwhCAIQgpAFhTgMQhFgJgHAAQgmgCghATQgeAOg5ArQgLAIhUAwQg7AigYAiQgDAEgFAAIgDAAg");
	this.shape_30.setTransform(65.4,77.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3A2E25").s().p("AlBBNIB5iSIDvhcIEcBTQgsA4hXACQgbAAghgFIgigHQgLgBgQgEIgbgGQg4gJhIAvQgOAIgqAgQgkAbgXANQgtAXgWANQgnAWgRAdg");
	this.shape_31.setTransform(65.5,78);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAAQAAgBADgCQACgCABAAQAHABAAAEQgBAHgGgBQgGABAAgHg");
	this.shape_32.setTransform(88.4,106.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOAuQgIgJgCgNQgEgRACgPQABgSAFgJQAAgDADgBQACgEAEgCQAMgJANAJQALAJACAOQAGAxgaATQgHAFgDAAQgGAAgFgFg");
	this.shape_33.setTransform(89.1,109.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGAAQABgFAFAAQAHAAAAAFQAAAGgHAAQgGAAAAgGg");
	this.shape_34.setTransform(56.6,106.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAtQgJgIgCgNQgDgVACgLQABgSAFgJQAAgCACgDIAHgGQAMgJAMAKQAMAJABAOQADAUgEAPQgEAWgPALQgFAFgEAAQgGAAgFgGg");
	this.shape_35.setTransform(57.3,109.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#584233").s().p("AgYAoQAAgHAHgBQAWgCAQgMQAUgOgIgUQgHgSgaACQgSACgTALQgGADgEgGQgDgGAGgEQAYgOAaAAQAjgBAGAbQAIAcgXATQgTASgeACIgBAAQgGAAAAgHg");
	this.shape_36.setTransform(74.6,124);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#584233").s().p("AASAaQgOglgegEQgHgBAAgHQAAgHAHAAQApAGASAuQACAHgHACIgDAAQgFAAgCgFg");
	this.shape_37.setTransform(100.8,97.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#584233").s().p("AgYAgQgHgBABgIQAGgnAvgQQAHgCABAIQACAHgHACQglANgFAgQgBAFgFAAIgCgBg");
	this.shape_38.setTransform(47.5,100.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B58F67").s().p("AgyA/IANhmQAVgsAhANQAiANgBAsQgBAhgjAhQgUAVgTAAQgNAAgMgLg");
	this.shape_39.setTransform(119.3,111.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3A2E25").s().p("AmMG1QgaiBAGh/QAHiQAwhpQA8iGBygvQBFgcBHgHQBNgHBAAWQA1ARAqgEIAcgCQARAAALAFQAbANAVAdQAMASATAnIAjBMQAUAtARAdQAuBSAFgsQAEgUgBgGIhekbQgIgXgEgGQgHgLgRgIIhxg0IhhguQgHgDgVABIgfADIjxARQggADgmApQgoAzgRARIg6A9QgiAlgSAdQgQAbgBA2QgBAdACA2QgHDgAABvQAAAKgKAAQgKAAAAgKQAAhrAFipIAGi7QACgmAigmIB3iBQAMgNAcglQAcgfAWgGQAjgJA6gCIBfgDIBlgHIAVgCQAOAAAGADQAnAWA8AbIBkAsIAeAOQAPAJAFAPIBbEVQAgBaglAKQgZAHgZghQgJgMgVgnQgIgPgihLQgZg4gUghQgTgdgUgMQgWgLgiADQgcADgXgCQgPgCgbgJQgcgKgOgCQhvgRhhAkQhbAhg5BLQg1BGgTBiQgpDRAmC7QACAJgKADIgDAAQgGAAgCgHg");
	this.shape_40.setTransform(73.1,98.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3A2E25").s().p("AnLFPIABimIALk8IAbgtIDDjUQAGgGAJgBQE9gZAFAEIBmAwICBA8QAKAEADAKIBoE8IgFAtQgEAMgPgFQgNgFgJgNQgcgogihKQgohYgTgfQgYgrgcgJQgQgFgaACQgjAEgIgBQgRAAgXgIIgogMQgigJgqAAQhegChSAhQhbAlgwBHQgMASgMAZIgUAsQgdA+gLCMQgNCeAaB6g");
	this.shape_41.setTransform(73,98.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B58F67").s().p("AAEIIQjcgCh3iaQhriIgLjnQgKjlCMiVQCGiNDAADQDgAEB+CcQB4CUgWDXQgXDkhtCKQh3CWi/AAIgFAAg");
	this.shape_42.setTransform(72.7,109.2);

	this.instance_14 = new lib.Path_8_5();
	this.instance_14.setTransform(72.7,110.6,1,1,0,0,0,45.5,52.1);
	this.instance_14.alpha = 0.102;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B58F67").s().p("AgKDJQg4gFgUglQgSgiAGhNQAIgOAIgeQAQg5AChQQABgsAdgQQAZgNAjAKQAiAJAWAWQAYAYgIAWQgNAmAGBKQADAjAGAeQgGBRgYAgQgXAegtAAIgMAAg");
	this.shape_43.setTransform(68.2,160.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C966CC").s().p("AkmAiIBfqQIHOAyIgxKYICDHbIqxA4g");
	this.shape_44.setTransform(64,226.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D5D858").s().p("AgZBIQgkgUhAgyQgTgMgGgXQgGgZAFgrICqAHQASAMAfAiQAcAfAZAPQAqAYgLAnQgLAng2ACIgFAAQg0AAg3geg");
	this.shape_45.setTransform(50.5,387.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#353535").ss(17.1).p("AAHosQgHBYAaC8QAdDHgDBaQgFB+guC2QgwDJgEAn");
	this.shape_46.setTransform(49,322.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#353535").ss(17.1).p("Ag6orQADBYAzC3QA0DBAIBbQALB9gWC6QgYDPAAAm");
	this.shape_47.setTransform(82.5,324.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3A2E25").s().p("AgugHQAFgBAsgRQAtgNgBAVQgBAIgiAJQghAKABAVg");
	this.shape_48.setTransform(89.5,52.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3A2E25").s().p("AgmAdQAZglAHgKQAagkAPAKQAMAIgZAkIgdAvg");
	this.shape_49.setTransform(86.1,47.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3A2E25").s().p("AgMARIAHgYQAEgVAFABQAIABABAZIgBAdg");
	this.shape_50.setTransform(81.9,49);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C966CC").s().p("AA/HEQgNifgXihQgrlAgyghIimizQBdg/BbAKQCDAPAdC/IB5K6IhVADIgvABQgmAAAAgDg");
	this.shape_51.setTransform(93.6,210.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C966CC").s().p("AkXGxIDJq4QAxi8CEgBQBbgBBWBIIi4ChQgwAahJEUQgwCxglDAQAAACgIAAQgdAAiEgUg");
	this.shape_52.setTransform(34.7,205.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3A2E25").s().p("AAUJ3QhlAAh9gZQhagRiHglQgGgCAAgFQgkjCgMiKQgPi4AUiWQAUieA3hpQBDiAB7g+QCUhLB7AZQBLAPAxAgQAqAcA6AHQAPACAPAJQB1BFArCMQAjB0gUCXQgBAKgKAAQgKAAABgKQANhkgHhKQgJhfgrhFQgzhSg4ggQgUgMgsgJQgqgIgWgOQhlhDh7AKQh2AKhnBJQhcBDgzBwQgqBdgPCDQgXDGAfD3QANBgAJAwIAEAkQAEAeACAAQAqAMAqAJQBvAbA4AKQBfARBLACQBHACBZgMQBAgJBggUQA6gNA2gNIASgEQgEABACgsQACgiACgRQAJiTADkmQAAgIAKAAQAKAAgBAIQgBCwgDBgQgFCXgLB5QAAAHgHADQiDAhhVAQQh3AVhgAAIgFAAg");
	this.shape_53.setTransform(72.5,110.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3A2E25").s().p("AgBJtQhngEitglIiYglQgsjsgHi4QgJjgAuioQAYhYApg/QA1hSBjg3QBjg4BlgGQBvgGBZA5IAcATQARAKAPADQAHABAPABIAXACQAUAEAcAUQAzAlAkA2QAkA2ARA+QAbBigUCUIgBA+QgCDBgDBXQgECPgMB5QhIATheASQioAhhkAAIgTAAg");
	this.shape_54.setTransform(72.6,110.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B58F67").s().p("AgDBLQgQgLgBgNQgFALgOACQgWADgGgZQgEgMAFgVQAEgNAFgJQgHAIgOABQgSACgEgQQgGgSARgVQAMgQASgLIB2ACQABAEABANQAAALAEAGQADAGAIAFIANAJQAPANgCAPQgBAQgNAKQgMALgOgCQgHgBgFgFIAAANQgBAWgLAMQgIAJgKAAQgLAAgMgKg");
	this.shape_55.setTransform(15.3,257.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B58F67").s().p("AglBNQgMgNgBgWIABgMQgFAEgHABQgOADgNgMQgMgLgCgPQgBgPAPgNIAMgJQAJgFADgFQADgHABgLQABgNABgEIB2gBQASAKAMAQQARAVgGASQgEAQgSgCQgOgBgIgJQAGAKAEANQAFAVgEAMQgGAZgWgDQgNgCgGgMQgBAOgRALQgLAKgLAAQgKAAgIgIg");
	this.shape_56.setTransform(108.3,263.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#584233").s().p("AAXASQgXgSgdgFQgHgCACgHQACgHAHABQAgAHAaAVQAGAFgFAFQgDADgDAAQgDAAgCgDg");
	this.shape_57.setTransform(72.3,149.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3A2E25").s().p("AlLChQgIgBAAgIQABgnACgTQADgfASgTIBxh5QAEgFAJgCIAPgEIDehHQAKgDADAKQACAKgJADIjtBLIgEABIh/CHQABAAAAgBQAAAAAAAAQABAAAAABQAAAAAAABIgCANIgDAmQAUgRAcgOIBPgmQAegSA9goQA3gjAsgFQAhgEAxALIBTAUQBjARA6g6QAHgHAHAHQAIAHgHAHQgtAshCAEQgoADhTgOQgugMgVgDQgkgFgfAMQgZAKgcAQIgzAgQgLAIhXAqQg9AegaAhQgEAEgFAAIgCAAg");
	this.shape_58.setTransform(66.9,81.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3A2E25").s().p("AlDBCICCiKID0hOIEXBjQgwA0hWgCQgbgBghgHIgigIQgKgCgRgGIgbgIQg2gMhLAsIg7AkQglAYgYAMQgvAVgWALQgoAUgTAcg");
	this.shape_59.setTransform(67,81.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgGAAQAAgGAGABQAHABAAAEQgBAGgGAAQgHgBABgFg");
	this.shape_60.setTransform(88.4,112.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgRAtQgHgJgCgNQgCgUADgNQACgRAFgKIADgDIAHgGQANgIALAKQALAJABAPQABAUgEAPQgGAWgPAKQgEAEgFAAQgHAAgFgGg");
	this.shape_61.setTransform(88.9,115.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGAAQABgGAFABQAHABAAAEQgBAHgGAAQgGgBAAgGg");
	this.shape_62.setTransform(56.6,110.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgRAsQgIgIgBgNQgCgRADgQQACgSAFgJQAAAAAAAAQAAgBABAAQAAgBABAAQAAgBABgBIAHgFQANgIALAKQALAJABAPQABAUgEAPQgGAVgPAKQgEAFgFAAQgHAAgFgHg");
	this.shape_63.setTransform(57.2,113.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#584233").s().p("AgbAnQAAgIAHAAQAVAAARgLQAWgNgHgUQgGgTgaABQgRAAgUAKQgHADgDgGQgEgHAGgDQAbgNAaACQAhACAGAdQAFAbgYASQgWAPgbAAQgHAAAAgHg");
	this.shape_64.setTransform(73.7,128.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#584233").s().p("AARAbQgLgmgggGQgHgBACgHQACgHAHABQAnAHAPAvQACAHgHACIgDAAQgFAAgCgFg");
	this.shape_65.setTransform(101.3,104.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#584233").s().p("AgbAfQgHgCACgHQAJgnAvgNQAHgCACAHQACAHgHACQgnALgHAfQgBAFgFAAIgDAAg");
	this.shape_66.setTransform(48,103.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B58F67").s().p("Ag0A9IAThlQAXgrAgAPQAiAPgDArQgEAiglAeQgUATgSAAQgOAAgMgMg");
	this.shape_67.setTransform(118.8,119.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3A2E25").s().p("AmZGlQgTiGAQiDQARiRA6hqQA+h1CJgvQCHgvB8AyQA0AVArgCIAcAAQAQABALAFQAaAPATAeQALARASAqIAeBNQASAwAOAaQAJASAPAVQAVAdADgRIAGgfIAAAAIAAAAIhNkhQgGgYgGgIQgIgMgUgKIhwg8IgsgXQgagOgRgLQgHgEgYABIgiACQhQAAifADQgSABgOAKIgYAYIhOBMIg9A5QgkAigTAdQgOAUgDA2IgEBUQgUDbgHBxQAAAJgKAAQgKAAAAgJQAHh6AQijIARi2QADgjAmgkICDh/QAKgJAfgkQAegeAUAAIDCgDIBjgBIASAAQAMABAGADQAoAYA7AfIBkA1QAfAQAMAdIARBAIAwCjQAjCQgoADQgdABgXgmQgEgHgYg3IgjhbQgVg4gVghQgXgigpgEIgkAAQgWgBgQgFIgtgQQgbgKgTgEQhqgThcAcQhcAbg+BIQg5BDgZBgQg1DQAaC7QACAKgKACIgEABQgGAAgBgIg");
	this.shape_68.setTransform(72.4,102.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3A2E25").s().p("AnUE8IAonhQAAgCAOgUIAQgVIDPjIQAGgGAJAAQE+gGAFAEQAJAHDXByQAJAEADALIBWFCIgIAsQgFAMgOgGQgNgGgIgOQgagpgehMQgjhbgQgfQgWgsgcgLQgPgGgaABQgkABgHgBQgRgBgXgJIgmgPQghgKgrgEQhegHhUAdQhdAfg0BFQgMAQgOAYIgWArQgiA9gTCLQgWCdATB7g");
	this.shape_69.setTransform(72.6,102.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B58F67").s().p("AgbIHQjdgPhvigQhiiPADjnQADjlCViMQCNiGDAAPQDfAQB0CkQBvCbgiDVQgkDih1CEQh3CEisAAIgegBg");
	this.shape_70.setTransform(72.8,114);

	this.instance_15 = new lib.Path_8_4();
	this.instance_15.setTransform(72.8,115.4,1,1,0,0,0,45.6,52.1);
	this.instance_15.alpha = 0.102;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3A2E25").s().p("AgtgCIAvgXQArgQABAVQAAAIghAMQgfAMACAVg");
	this.shape_71.setTransform(101.7,61.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3A2E25").s().p("AgkAhIAdgxQAYgmAPAJQAMAGgVAmIgaAxg");
	this.shape_72.setTransform(98,56.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3A2E25").s().p("AgLASIAEgYQADgVAFAAQAIAAACAZIABAeg");
	this.shape_73.setTransform(94.1,58.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B58F67").s().p("AgIDJQg4gEgUgkQgTgiAFhOQAIgOAHgdQAPg6ABhQQABgsAdgQQAYgOAjAJQAiAJAXAWQAYAYgHAWQgNAmAHBKQAEAjAGAdQgFBSgXAgQgXAfgwAAIgJAAg");
	this.shape_74.setTransform(69.7,166.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C966CC").s().p("Ai3HMQBljFAmhSQA9iJAJhJQANh8gqhaQgthdhkgtIATikQDaBABCCpQAxB9ghDJQgRBqg0CaQg3Cmg5Bqg");
	this.shape_75.setTransform(91.6,223.4);

	this.instance_16 = new lib.Path_10_4();
	this.instance_16.setTransform(90.7,225.3,1,1,0,0,0,18.8,54.1);
	this.instance_16.alpha = 0.102;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C966CC").s().p("AhwEEQgjiNgRh5QghjoBBh2QBMiKDogxIhBCUQhnBkgaBBQghBLAZByQARBMAyCKQAfBSBUDPIiyBKQgwhpgqivg");
	this.shape_76.setTransform(44.2,224);

	this.instance_17 = new lib.Path_12_1();
	this.instance_17.setTransform(44.5,225.7,1,1,0,0,0,16.6,53.6);
	this.instance_17.alpha = 0.102;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B58F67").s().p("AgJCBQgJgIgHgUQgGgPAAgLQgCALgLAJQgPAMgNgLQgPgMADgbQADgTAJgUIgwh8IBZgfIA/BbQADADAIAKQAHAKAGACQAGADAKAAIAQAAQAVACAIAQQAHALgFAQQgFAQgOAGQgGADgHgBQAEAFAEAGQALATgEARQgGAXggAAQgUAAgIgMQABANgLAKQgIAGgJAAQgJAAgJgJg");
	this.shape_77.setTransform(55.5,278.4);

	this.instance_18 = new lib.Path_14_1();
	this.instance_18.setTransform(56,279.4,1,1,0,0,0,12.2,13.9);
	this.instance_18.alpha = 0.102;

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B58F67").s().p("Ag4CYQgLgJABgNQgIALgVAAQggAAgGgXQgDgRALgSIAIgLQgHABgHgDQgNgGgFgQQgFgRAHgNQAIgPAUgCIAQAAQAKAAAGgBQAHgDAHgJIALgNIB/iFIA3AaQAxAggZAfQgqAwg9A7QAKAUACAUQADAbgOAMQgNALgPgMQgMgJgCgMQAAAMgDAPQgHAUgKAIQgKAJgKAAQgIAAgIgHg");
	this.shape_78.setTransform(76.2,277.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C966CC").s().p("AkwgPIB0n2ICghSIElBIIALHiIBJJRIq5A0g");
	this.shape_79.setTransform(63.1,230.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D5D858").s().p("AA8CGQhegdhZiHQgPgVgDgWQgDgbAQglICiA6QBCBWAXAbQAgAlgVAnQgQAcgfAAQgMAAgPgEg");
	this.shape_80.setTransform(83.1,386.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D5D858").s().p("AAqCIQgxgTgrgzQgbgggphEQgMgUADgYQADgZAVgnICbA/QAMATAQAuQAPApASAXQAdAngYAgQgQAWgbAAQgPAAgSgHg");
	this.shape_81.setTransform(56.1,384.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#353535").ss(17.1).p("AB5ogQgYD8hSFVQhFEphHDH");
	this.shape_82.setTransform(65.8,319.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#353535").ss(17.1).p("AiWpfQgHCnAnCeQAwDJBsB6QBbB4ASCXQAOBvgaBn");
	this.shape_83.setTransform(64.5,324.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3A2E25").s().p("AgQJ2QhmgGh9ggQhWgWiHgtQgGgCgBgHQgXi8gEiLQgFiyAaiSQAciiA9hpQBLiBCCg4QCZhCB5AgQBJATAvAkQAYASAOAHQAVAKAYADQAVACALAGQB6BAAlCaQAdB7gdCaQgBAKgKgDQgJgDABgJQAUhpgFhPQgGhkguhKQhFhtg2gJQgigGgPgFQgXgIgWgQQhghIh7AEQh2ADhqBDQheA7g4BoQgvBXgYB9QgmDIAREDQAFBIAGA5IAEAtQADAmgBAAIBKAXQBpAgA7APQBcAXBMAIQBHAHBZgGQBAgFBigOQBNgLAqgIIAXgEQgDAAAMheQASiSAUkmQABgJAJAAQAKAAgBAJQgLCsgJBmQgOCWgSB5QgBAGgGABQiEAahXALQhWAKhLAAQgfAAgagCg");
	this.shape_84.setTransform(72.5,115.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3A2E25").s().p("AgoJrQhngKiqgwQhVgXhBgWQgejvAEi3QAEjhA4ikQAchVAtg+QA6hPBmgyQBngyBjAAQBxABBVA+IAcAVQAQALAOADQAHACAPACQAPABAIACQAVAGAaAVQAwAoAhA4QAhA4AOA/QAUBlgcCRIgFA9QgODDgHBVQgNCPgTB4QhJAOheANQiJAThbAAQghAAgcgDg");
	this.shape_85.setTransform(72.7,115.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#584233").s().p("Ag2AJQgEgGAGgDQA0gYAzAVQAHADgCAFQgCAGgGgCQgwgRgtAUIgDABQgEAAgCgEg");
	this.shape_86.setTransform(86,112.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#584233").s().p("Ag8ARQgFgFAFgFQAYgTAigFQAhgFAdAOQAGADgEAFQgDAFgGgDQgYgKgdAFQgeADgUARQgDACgCAAQgDAAgCgCg");
	this.shape_87.setTransform(55.1,116.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgGAAQAAgEAGgBQACgBACACQADACAAACQAAACgCACQgCACgDAAIAAAAQgFAAgBgGg");
	this.shape_88.setTransform(84.8,104.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgJAvQgJgIgDgMQgFgTAAgNQgBgSAEgKQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBABAAIAGgHQANgLALAJQAMAHADAOQAFAUgCAQQgCAWgNAMQgHAGgFAAQgEAAgFgEg");
	this.shape_89.setTransform(85.8,107);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGgBQAGAAABAGQAAAFgHABIAAABQgFAAgBgHg");
	this.shape_90.setTransform(53.3,107.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgJAvQgJgIgEgMQgFgVABgLQgCgQAEgMIADgEIAFgHQANgLAMAJQAMAHADAOQAFAUgCAPQgCAXgNAMQgGAGgGAAQgEAAgFgEg");
	this.shape_91.setTransform(54.3,110.6);

	this.instance_19 = new lib.Path_24();
	this.instance_19.setTransform(51.6,139.3,1,1,0,0,0,2,6.5);
	this.instance_19.alpha = 0.32;

	this.instance_20 = new lib.Path_1_0_1();
	this.instance_20.setTransform(86.5,137.8,1,1,0,0,0,1.9,6.6);
	this.instance_20.alpha = 0.32;

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C966CC").s().p("AhoFyQgcAAgYgOQgXgPgNgZQgOgaAHg2QAJhNAyiSIA+i0QAxiGAphEIC/BcQgSAXhLClQhECSgdBIIA8gJQAGAZgBAOQgCAfgWAsQhACEhaAEg");
	this.shape_92.setTransform(50.6,188.1);

	this.instance_21 = new lib.Path_3_5();
	this.instance_21.setTransform(54.7,176.5,1,1,0,0,0,17.2,24.5);
	this.instance_21.alpha = 0.129;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#957455").ss(0.7,0,1).p("AAZh0QAAgPgNgKQgUgPgVAYQgKAKgHAaQgEASAAANQgDgNgOgJQgTgMgOAPQgQARAHAgQAFAXANAVIgsBkAAZh0QgFAJABALABcg0QAEgGAEgIQALgZgGgTQgJgbgmAEQgYADgJAOAgZCUQADgEAeg2QAfg1AHgEQAHgFAVADQAXACAEgBQAYgGAIgTQAHgQgIgTQgIgTgQgFQgIgCgIACQgLACgLAKIAAADQANgDAJgMAgyhBQABAEABAE");
	this.shape_93.setTransform(68.5,147.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B58F67").s().p("AiHBtIAshkQgNgVgFgXQgHggAQgRQAOgPATAMQAOAJAEANQgBgNAEgSQAHgaAKgKQAVgYAUAPQAOAKgBAPQAJgOAYgDQAmgEAJAbQAGATgLAZQgEAIgEAGQAIgCAIACQAQAFAIATQAIATgHAQQgIATgYAGQgEABgXgCQgVgDgHAFQgHAEgfA1QgeA2gDAEg");
	this.shape_94.setTransform(68.5,147.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#584233").s().p("AgdAbQgBgYARgQQAOgRAXgCQAHgBAAAGQAAAHgHAAQgSACgLAOQgMANAAASQAAAGgGAAQgGAAAAgGg");
	this.shape_95.setTransform(48.3,98.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3A2E25").s().p("AkzC9QgHgCgBgHQgGgqAAgSQgBgeAQgYIBaiFQADgGAKgEIAQgHIDLhoQAJgEAFAJQAFAJgJAEIjdBxIgFACIhZCEIgMATQgBADABAPIADAlQATgXAegVIBOg4QAwgvAbgVQAvgnApgLQAfgIAyADIBUAGQBjADAvhEQAFgIAJAFQAJAGgGAIQgkA0hAAPQgoAKhUgDQgsgEgUAAQghgBgbAPQgaAOgcAWQgRAMgfAeQgLAJhPA5Qg4AogUAlQgDAFgFAAIgDgBg");
	this.shape_96.setTransform(58.3,78.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3A2E25").s().p("Ak4BfIBqieIDkh0IEjA2QgmA8hWAKQgbADghgCIgkgCQgKAAgRgDIgbgDQg5gDhDA2QgOALgmAjQggAegVAPQgVAPgrAcQgkAbgOAeg");
	this.shape_97.setTransform(58.2,78.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#97B935").s().p("AgqA+QgEgFgNgkQgBgFAFgBQAEgCACAFIAHAXQAEAOAHAHQAVATAHgQQADgXACgFQAJgNANAEIAVAKQAPAEgKgZQgGgPgOgEQgGgDgDgGQgDgDACgGIACgKQAEgUgOgLQgMgMgSAGQgFACgBgFQgBgFAEgBQAVgHASANQAUANgFAXQgDATAKAHIAHAFQAHAFADAGQAIATgLANQgFAGgVgDQgRgEgCANQgDAYgLACIgJABQgRAAgLgRg");
	this.shape_98.setTransform(80.7,147);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#97B935").s().p("AgZBJQgMgGgIgSQgFgUgEgKIAihaQAKgEAKABQAJACAHAHQAIAHADAKQADAKgDAKQgEALACAEQABADALAGQANAGAEANQAEAPgIAHQgFAEgHgBQgGAAgGgEIgIgEQgFgBgEAFQgDADgCAGIgBALQgBAGgCAEQgBAGgJACIgGABQgFAAgEgCg");
	this.shape_99.setTransform(80.8,147);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#584233").s().p("AgSAqQgCgHAHgBQAVgEARgPQAUgQgOgVQgKgPgXAFQgSAFgSAMQgGAEgEgGQgDgGAFgEQAYgRAZgDQAigEAJAbQAKAagTAWQgSATgcAFIgCAAQgFAAgCgGg");
	this.shape_100.setTransform(71.8,121.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#584233").s().p("AAaATQgYggggAFQgFABgCgGQgCgGAGgBQAogGAeAmQAEAFgGADIgEACQgDAAgCgDg");
	this.shape_101.setTransform(90.3,93.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B58F67").s().p("AgtBDIAChnQAQguAiAKQAkAJADArQACAigfAkQgUAZgUAAQgLAAgLgIg");
	this.shape_102.setTransform(115.4,105.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3A2E25").s().p("AldHMQgpiBgFiCQgGiSAnhxQAsh/B/hEQB+hECEAdQAcAGAcgBIA5gFQAkgDAQAJQAZAQAXAdQAOASAWAlIAtBOQAbAuAYAcQAjAoABgXIAAgSQABgNgBgDIh/kbQgHgRgMgIQgIgHgXgHIh7grIgrgOQgZgIgRgIQgHgCgbAFIgjAJIjrApQgOACgLAOIgTAaIhBBXQgPAVgiAqQgdAmgOAeQgNAdAEA2QADAeAHA1QAQDfAMBvQABAJgKAAQgKAAgBgJQgNh8gLihIgNi2QgCghAigtIBviWQAUgfANgRQAXgfAUgEIDIgkQAQgCAtgMQAqgJAVAHQAsARBBAWIBuAlQAeAKARAfQAKATAQArIBaDJQANAeACAYQADAggaAGQgXAGgegjQgFgHgfgxIgzhdQggg5gfgbQgagWgtAEQhFAHgIgBIg1gKQgegFgVACQh1AIhOAtQhPAvgrBUQgmBLgHBiQgODNA2CrQADAJgKADIgDAAQgHAAgCgHg");
	this.shape_103.setTransform(67.8,97.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3A2E25").s().p("AmlFuIgQimIgWk7QAAgCALgWIAMgYICrjmQAGgHAJgCQE4g6AGAEQAJAEDoBPQAKAEAEAJICJEyIgBAtQgDALgPgCQgNgDgLgNQgggkgqhIQgxhVgVgcQgdgogdgGQgQgEgaAFIgqAIQgRABgYgFIgogIQgggFgrADQhgAIhOAqQhXAugoBMQgKASgJAaIgQAuQgWBCADCMQAECeAmB3g");
	this.shape_104.setTransform(67.6,97.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B58F67").s().p("AkjGNQh4h9gjjmQgijhB8iiQB3iaDBgRQDdgUCNCOQCHCIABDZQABDjhgCVQhoCkjBASQgcADgbAAQi1AAh1h7g");
	this.shape_105.setTransform(68.1,107.4);

	this.instance_22 = new lib.Path_13_1();
	this.instance_22.setTransform(68.2,108.7,1,1,0,0,0,45.4,52);
	this.instance_22.alpha = 0.102;

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B58F67").s().p("AhFCrQgYgggGhRQAGgeADgjQAGhKgOgmQgHgWAXgYQAXgWAigJQAjgKAZANQAdAQABAsQACBQAQA5QAIAeAIAOQAGBNgSAiQgUAlg4AFIgMAAQgtAAgXgeg");
	this.shape_106.setTransform(74.9,157.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C966CC").s().p("AioFJQg7g9AAgEQAAgCCMgoQCOg1APhBQARhNg5hmQg2hmgyALIiCjBQBQguBGAaQBUAgBUCNQBcCZARBSQARBVgtBQQglBDiKBHQhDAjg+AWIg7g8g");
	this.shape_107.setTransform(103.3,200.2);

	this.instance_23 = new lib.Path_1_9();
	this.instance_23.setTransform(98.8,171.3,1,1,0,0,0,16,9.1);
	this.instance_23.alpha = 0.129;

	this.instance_24 = new lib.Path_2_3();
	this.instance_24.setTransform(94.9,227,1,1,0,0,0,16.1,13.2);
	this.instance_24.alpha = 0.129;

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#957455").ss(0.6,0,1).p("ABYhbQgEAAgxARQgtARgHgBQgGgBgMgMQgNgOgEgBQgSgJgPAIQgNAHgFAQQgGAQAIALQAEAGAGADQgGACgHADQgUAJgGAOQgJAVAaARQARALANgEQAHgDAGgHAhbgcQAIAEAMAAIABgCQgJgFgMADgAgJA2QgEAKAEANQAFARAPgCQASgCANgXQAKgSADgVIBRglAhTAtQgJAJAEAOQAFAVAagEQAMgBARgNQANgJAGgIQACgDACgD");
	this.shape_108.setTransform(79.2,236.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B58F67").s().p("AgKBNQgFgNAFgKQgGAIgNAJQgRANgMABQgaAEgFgVQgEgOAIgJQgMAEgRgLQgagRAJgVQAGgOAUgJIAMgFQAIAEANAAIABgCQgJgFgNADQgGgDgDgGQgIgLAGgQQAFgQANgHQAPgIASAJQAEABANAOQAMAMAGABQAHABAtgRQAxgRAEAAIAwBSIhRAlQgDAVgKASQgNAXgSACIgEAAQgMAAgEgPg");
	this.shape_109.setTransform(79.3,236.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C966CC").s().p("AlYIbICDnbIhipyIGuggIDMIgIAWKFg");
	this.shape_110.setTransform(78.4,226.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D5D858").s().p("AhVBmQg3gCgLgnQgLgnArgYQAZgPAcgfQAeghATgNICpgHQAFArgGAZQgGAXgTAMQg/AyglAUQg2Aeg1AAIgEAAg");
	this.shape_111.setTransform(91.8,384.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#353535").ss(17.1).p("AgGosQAGBYgZC8QgdDHADBaQAFB+AuC2QAwDJAEAn");
	this.shape_112.setTransform(93.3,320);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D5D858").s().p("AhkBcQg2gIgGgpQgFgoAtgSQAagLAggcQAigdAVgLICoAPQAAAsgJAXQgJAVgVALQhGAqgmAPQgsASgpAAQgPAAgOgDg");
	this.shape_113.setTransform(50.1,384.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#353535").ss(17.1).p("AA7orQgDBYgzC3Qg0DCgIBaQgLB9AWC6QAZDOgBAn");
	this.shape_114.setTransform(59.8,321.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3A2E25").s().p("AgtgBIAvgYQAqgRACAVQAAAHghAOQgfAMADAWg");
	this.shape_115.setTransform(79.3,49.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3A2E25").s().p("AgjAiIAcgyQAWgmAQAIQAMAGgUAnIgYAyg");
	this.shape_116.setTransform(75.5,44.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3A2E25").s().p("AgMATIAEgZQADgUAFgBQAIABACAYIADAdg");
	this.shape_117.setTransform(71.7,46.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3A2E25").s().p("AidJwQhYgIiMgXQgFgBgCgGQg2i4gaiGQghiwACiUQABikAshxQA1iMB3hMQCPhcCBAOQBIAIAxAbQAaANAZAFQAVAFAgAAQANAAASAIQB7A5A4CHQAvBwgECZQAAAKgKAAQgKAAAAgKQADhhgNhFQgRhaguhAQg0hJg/giQgWgMgqgDQgsgEgUgKQhDghg8gKQhCgMhCARQhvAdhTBJQhWBMgnB1QggBhgCCFQgCDPA8D6QASBKAPA0IAIAjQAGAdADAAIBeAOQBsAOA6AEQBdAHBIgGQBIgFBYgWQA9gPBfgeQBEgWApgPIARgHIAAAAIAAAAQgHADgChgQgDhigKh7IgUjaQAAgJAJAAQAKAAABAJQAQCuAHBgQALCWABB6QAAAHgHACQh+AvhUAYQh2AihiAKQgwAFg1AAQg8AAhDgGg");
	this.shape_118.setTransform(69.8,108.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3A2E25").s().p("AjjJdQhYgKhEgLQhEjogai0QggjeAdisQAPhbAihCQAshWBdhCQBdhCBkgQQBugSBdAwIAfAPQASAJAOABQAIABAPgBIAXAAQAVACAdARQA2AfAqAyQAqAyAXA8QAlBggFCVIAFA/QATDFAFBQQALCPABB5QhHAbhbAbQi1A3hnAHQgbACgfAAQhZAAiBgOg");
	this.shape_119.setTransform(69.8,108.6);

	this.instance_25 = new lib.Path_23();
	this.instance_25.setTransform(58.1,144.5,1,1,0,0,0,2,6.5);
	this.instance_25.alpha = 0.32;

	this.instance_26 = new lib.Path_1_8();
	this.instance_26.setTransform(68.1,144.1,1,1,0,0,0,1.9,6.6);
	this.instance_26.alpha = 0.32;

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#584233").p("AAaAAQABAJgHAIQgIAIgLAAQgJABgIgHQgJgIAAgKQgBgJAIgIQAHgHALgBQAJgBAJAHQAIAIAAAKg");
	this.shape_120.setTransform(63.2,144.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#584233").s().p("AgQATQgJgIAAgKQgBgJAIgIQAHgHALgBQAJgBAJAHQAIAIAAAKQABAJgHAIQgIAIgLAAIgBAAQgJAAgHgGg");
	this.shape_121.setTransform(63.2,144.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#584233").s().p("AAOAaQgCgSgIgKQgIgPgQAAQgHABAAgIQAAgHAHAAQAVgCAOAUQALAOACAZQABAHgHAAQgIAAAAgHg");
	this.shape_122.setTransform(78.9,100.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#584233").s().p("AgKAjQgEgYABgNQACgWAMgNQAGgFAFAGQAFAFgFAFQgMAKAAAQQAAAKADAVQABAHgFACIgDAAQgFAAgBgFg");
	this.shape_123.setTransform(31.2,106.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3A2E25").s().p("AktDCQgHgDgBgHQgHgpgBgSQgCgeAPgYIBWiIQADgFAKgGIAQgHIDIhtQAIgFAGAJQAFAIgJAFIjeB6IhVCGIgLAUQgCAEACAOIAEAkQAUgaAigZQBKg4AJgIQA/g9AKgIQAugmAogHQA0gJBsAJQBdgDArhDQAGgIAIAFQAJAFgFAIQgjA2hAARQgnAKhVAAQgrgDgVABQghAAgaAPQgaAPgbAYIgvArQgJAJhOA7Qg3AqgTAmQgDAFgFAAIgDgBg");
	this.shape_124.setTransform(46.5,81.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3A2E25").s().p("Ak0BkIBligIDgh8IEkAtQgkA+hVAMQgbAFgigBIgjgCQgKAAgSgCIgbgDQg5gBhAA5QgOAMglAjQggAggUAPQgUAQgrAdQgjAbgNAeg");
	this.shape_125.setTransform(46.4,81.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgDAFQgCgCgBgCQgBgFAHgBQAGgBABAGQABAGgHABIgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_126.setTransform(72.8,104.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgIAvQgJgHgEgNQgFgRAAgOQgCgRAEgLIACgFIAFgHQANgLAMAJQAMAHAEAOQAFATgBAQQgCAWgNANQgGAGgGAAQgEAAgFgEg");
	this.shape_127.setTransform(73.9,107.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgGAAQgBgEAHgBQAGgCABAHQABAGgIAAIAAABQgFAAgBgHg");
	this.shape_128.setTransform(41.3,109.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgHAvQgJgHgEgNQgGgRAAgOQgCgSAEgKQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBIAGgHQAMgLAMAJQAMAHAEAOQAFATgBAQQgCAWgMANQgHAGgGAAQgDAAgFgEg");
	this.shape_129.setTransform(42.4,112.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#584233").s().p("AgQArQgCgIAHgBQAVgFAQgPQATgRgOgUQgLgPgXAGQgSAFgRANQgGAEgEgGQgDgGAFgFQAXgRAZgDQAigFAKAaQALAagTAWQgRAUgcAGIgDABQgFAAgBgGg");
	this.shape_130.setTransform(61.3,123.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B58F67").s().p("AgsBEIgBhnQAPguAjAIQAjAIAFArQAEAigfAlQgTAagVAAQgLAAgLgHg");
	this.shape_131.setTransform(104.4,105.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3A2E25").s().p("AlNHSQgsiAgKiDQgKiRAkhyQAniAB+hIQB8hICEAaQAdAGAbgCQAYgBAegHQAYgFAdAJQAXAHAXAdQALAMAXAlIAsBGQAbArAUAaIAeAjQAZAXAAgcIAAgXIiFkUQgRgjg5gSQhCgRgcgIIgwgOQgcgJgTgHQgIgEgXAGIgfAJQhnAUiFAdQgQADgKAKIgSAZIg9BXQgPAWghArQgcAngOAeQgOAfAEAyQADAdAJA2QAYDxAOBjQABAJgKADQgJADgBgKQgPhrgRiqIgTi6QgDgmAegqIBtidQATggAMgRQAWggAUgEIDHgqQAQgDAugNQApgKAUAHQA1ARCpA0QAdAJASAfQALASARAqIBhDHQAOAdACAYQADAjgZAGQgXAGgfgkQgHgIgeguIg2hcQgig4gggZQgagWguAGQhEAIgIgBIg1gHQgfgEgUACQh1ALhNAwQhOAxgoBVQgkBNgDBiQgIDOA7CoQADAJgKADIgEABQgGAAgCgHg");
	this.shape_132.setTransform(56.4,100.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3A2E25").s().p("AmYF3Ig0ngQATgtACgDICljsQAGgHAIgCQE2hCAHADQANAGDmBGQAKADAEAJICSEuIABAtQgDANgPgEQgOgDgKgMQghgjgthHQgzhTgWgcQgegmgdgGQgQgDgaAGQgjAIgIABQgQABgYgEIgpgHQgfgFgsAGQhfALhNAsQhVAwgnBNQgJATgIAaIgOAuQgVBDAHCMQAJCdAqB2g");
	this.shape_133.setTransform(56.2,100.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B58F67").s().p("AkWGWQh8h5gpjlQgpjgB4imQBxieDBgXQDdgaCRCKQCKCEAIDZQAHDjhaCYQhkCmjAAYQgkAFgjAAQiqAAh0hyg");
	this.shape_134.setTransform(57,109.4);

	this.instance_27 = new lib.Path_10_3();
	this.instance_27.setTransform(57.2,110.8,1,1,0,0,0,45.4,52);
	this.instance_27.alpha = 0.102;

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3A2E25").s().p("AgrAGQAEgCAngcQAmgYAGAVQABAHgeAUQgcARAGAVg");
	this.shape_135.setTransform(76,52);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3A2E25").s().p("AgcAqIASg2QAQgqARAFQANAEgOAqIgRA1g");
	this.shape_136.setTransform(71.7,48.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#3A2E25").s().p("AgMAWIgBgZQgBgVAHgBQAHgBAGAXIAIAdg");
	this.shape_137.setTransform(68.6,50.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C966CC").s().p("AgLEbIBbkYQABgDgXglQgcgugfgnQhmh4hcALIhiiaQBGgTByAWQBuAVAwApQAfAZAJAJQAWAUANATQA0BJAfAuQAeAtAwBNQAKANgBAJQgBAFgKANQgrA7g7CcQgdBPgUBCg");
	this.shape_138.setTransform(100.8,205.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C966CC").s().p("AigD6Qg7icgrg7QgKgOgBgEQgBgKAJgMQAvhKAggwQAdgrA2hMQANgTAWgUIAogiQAwgqBbgVQBfgWBEATIhNCsQhcgLhcBwQgcAkgZArQgUAhABAEIBbEYIiPBvQgUhCgdhPg");
	this.shape_139.setTransform(33.7,206.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B58F67").s().p("AADCEQgVgGgRgPQgPgNgJgRQgIgSgBgUQgBgTAHgTQAHgRAOgNIgog2IA+g3IAlA6IAEAGIAIAFQAmATAOApIgDB+QgaAOgZAAQgNAAgMgDg");
	this.shape_140.setTransform(36,248.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B58F67").s().p("AhOB5IgDh+QAOgoAmgUIAIgFIAFgGIAkg6IA+A3IgnA2QANANAHARQAIATgBATQgDApgfAbQgSAPgUAGQgMADgMAAQgaAAgagOg");
	this.shape_141.setTransform(100.5,247.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3A2E25").s().p("AiOJzQhVgFiQgTQgIgCgCgGQg7i1geiGQgmivgDiUQgDikAohzQAxiMB1hRQA/grBBgWQBJgZBFAFQBGAGA0AZQAaANAYAEQAWAEAgAAQARgBAWALQB5A9A6B/QAwBsABCXQAAAKgKAAQgKAAAAgKQgBhhgPhFQgThZgwg+Qg5hKg9gfQgYgLgwgEQgxgEgYgMQhtg3h/AfQh3AchbBcQhQBQggB5QgaBiAECGQAGDMBGD8IAXBeQAUBMAIABIBeAKQBsALA6ACQBeAEBHgHQBIgIBXgYQA8gRBfghIBrgoIASgHIAAAAIAAAAQgIADgEhhQgLicgkkZQgBgKAKAAQAKAAABAKQAWCtAKBfQAPCWAFB6QAAAHgHADQh2AwhZAcQhzAkhiAOQhCAKhMAAQgpAAgtgDg");
	this.shape_142.setTransform(59.5,110.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3A2E25").s().p("AjXJjQhZgIhDgJQhLjkggi1QgmjdAXisQAMhbAghEQAqhXBbhFQBbhFBjgTQBwgVBdAtIAfAPQASAIAOABQAIAAAPgBIAXgBQAUABAfAQQA3AfArAwQArAxAZA7QAoBeAACVIAGA/QAYC8AJBZQAOCOAFB6QhGAchaAeQi0A9hmAKQgqAEg2AAQhOAAhmgIg");
	this.shape_143.setTransform(59.5,110.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B58F67").s().p("AhVBPQgXgSACgVQAAgSAUgDQAPgCALAIQgJgJgHgPQgKgTAAgOQABgcAYgCQAPgBAJALQgDgPAPgQQAXgZAUANQAQALAGAWQACAIABAHQAEgGAHgDQAOgGARAJQAQAIAFAQQAGASgOAPQgBADgKAKQgHAHgCAHIgJAbIhzAqQgWgHgRgOg");
	this.shape_144.setTransform(106.1,145.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#B2B2B2").p("Ai3BiIE2AtQAIACAMgXQANgWAJgjQAKgiABgaQABgYgJgCIkgh5");
	this.shape_145.setTransform(94.1,134.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#B2B2B2").p("AAhh4QAIADgEAlQgEAlgOAwQgOAygNAiQgQAigIgDQgIgCADglQAEglAOgwQAOgyAOgiQAQgiAIACg");
	this.shape_146.setTransform(79,132);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AggB4QgIgCADglQAEglAOgwQAOgyAOgiQAQgiAIACQAIADgEAlQgEAlgOAwQgOAygNAiQgPAggIAAIgBgBg");
	this.shape_147.setTransform(79,132);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#38D5F3").s().p("ABvBjIkTgoQAggOAohAQAGgJATgDQAUgDAIgOQAHgMAQAAIAaAAQAVgDAPgaQALgSAiAOQALAFAiALQAcANABATQABAegOA0QgQA/gXAAIgCgBg");
	this.shape_148.setTransform(95.6,138.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("ACBCPIk2gtIBDjwIEgB5QAJACgBAYQgBAagKAiQgJAjgNAWQgLAVgIAAIgBAAg");
	this.shape_149.setTransform(93.9,134.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#584233").s().p("AgRAvQgQgIACgSQAEgoAegdQAEgDAFABQAFABACAGQAbBHgeATIAAABIgCABIgCAAQgHACgFAAQgJAAgIgEg");
	this.shape_150.setTransform(73.6,141.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(1.5,1).p("AgvAQQAdgXAUgGQAVgFAaAJ");
	this.shape_151.setTransform(79.3,104.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1.5,1).p("AgwAQQAdgXAUgGQAVgFAaAJ");
	this.shape_152.setTransform(51.3,110.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3A2E25").s().p("AkmDIQgHgBgBgGQgJgngCgSQgDggAMgWIBUiPQADgGAIgEIANgHIDJh3QAJgFAFAJQAFAJgJAFIjaCAIhcCfQgBgHgBAGQgBAGADgEIAAgBIAAABIAIAzQATgaAigbQBIg6AIgJQA+g/AJgIQAtgoAogIQAzgKBsAFQBdgGAphEQAFgJAJAFQAJAFgFAJQghA3hAATQgnALhVADQgrgCgVABQghACgaAQQgZAQgaAYIgtAtQgKAKhLA9Qg2AsgSAmQgCAFgGAAIgCAAg");
	this.shape_153.setTransform(46,79.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#3A2E25").s().p("AkwBqIBfilIDdiCIElAkQgiA+hVAQQgbAEghAAIgjAAQgLABgRgBIgbgCQg5AAg/A7QgNAMgkAlQgeAfgVARQgTARgqAeQgiAdgMAeg");
	this.shape_154.setTransform(45.9,79.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#584233").s().p("AgOAsQgCgIAHgBQAVgFAOgPQASgQgLgUQgKgRgXAGQgTAFgSAOQgFAFgFgFQgFgGAFgEQAWgSAZgGQAigHALAaQANAcgSAVQgQAVgdAHIgCAAQgFAAgCgFg");
	this.shape_155.setTransform(68.2,121);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#584233").s().p("AAgAMQgigTgdAQQgGAEgDgHQgEgGAGgCQAjgWAqAYQAHADgEAGQgDAEgDAAIgEgBg");
	this.shape_156.setTransform(83.9,90.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#584233").s().p("AgjAUQgGgEADgGQAXgiAwAEQAHABAAAHQAAAIgHgBQgogEgSAaQgCAEgEAAIgEgBg");
	this.shape_157.setTransform(41.8,100.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3A2E25").s().p("AhrIzIjYh2QgTgJgJgFQgPgJgEgNIgjhvIgBgFIgDgTQgXiTgcjRQgIgwgCgXQgDglANgeQANgeAbgoQAggtAOgWIA9heIAMgTQAIgOAHgDQAngRBBgOIBrgWIBFgSQAngKAcAIIDkA/QALADAIAMIAMAVICMEKQAOAcgEAaQgFAfgfgGQgbgFgiguIgthGQgpg9gQgVIgXgdQgPgSgMgHQgYgMgWADQgZAHgQADQgWAFgcgDQghgEgSgBQg7gDg4AOQhxAdg+A7QgkAjgRAhQgTAlgCAtQgFBQAEAtQAOCcA5CMQA/CcBlBfIACACQAGAFgFAHQgEAFgEAAIgFgCgAiaICQhEhPgvhvQgwh2gbihQgShjAPhwQAHg7A5g3QAvguBAgcQBQgiBGgGQAmgDA1AHQAWADAjgIQAmgIASAAQAhABAcAWQATAQAaAjIA8BYQAkA2AdAeQAKAMAKAHQARALgBgQIgBgbIAAgFIgEgHIiFj9IgQgeQgKgNgTgFIh4ghIhogdQgIgDgUAGIgbAIQhPASieAnQggAIgfAuQgRAagbAyQgPAXghAvQgcAqgMAfQgMAdAHAyQAEAcALA1QAeDkATBsIAjBwIABAFIAKAEIC6BlIAAAAg");
	this.shape_158.setTransform(56.5,106.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3A2E25").s().p("AljGgIgmh4IgaikIgqk5QgBgCAKgXIAKgYICdjxQAGgHAIgDQE2hMAFACQAGADDvBCQAKACAFAJICcEpIACAtQgDANgPgDQgNgDgMgLQgigiguhGQg2hQgXgcQgggmgdgEQgRgDgZAHQgiAJgIABQgQACgYgDIgpgGQgigEgpAHQhfAOhMAvQhTAzgkBOQgJAUgCBRQgCBJAEAaQA7GCCzChg");
	this.shape_159.setTransform(56.2,106.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#B58F67").s().p("Aj6GdQh7h2gxjjQgwjfBtipQBnigC5gcQDSggCRCGQCKCAAPDZQAQDihSCaQhZCpi3AdQgqAGgnAAQibAAhvhqg");
	this.shape_160.setTransform(57.5,106.7);

	this.instance_28 = new lib.Path_10_2();
	this.instance_28.setTransform(57.7,108.1,1,1,0,0,0,43.7,52);
	this.instance_28.alpha = 0.102;

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3A2E25").s().p("AgeARIAcglQAYgfAJASQADAHgUAZQgSAXAHATg");
	this.shape_161.setTransform(73.2,48.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3A2E25").s().p("AgOAxQAAgiACgWQAFgsANACQALABgCAsIgBA3g");
	this.shape_162.setTransform(69.3,45.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#3A2E25").s().p("AgMAAQgFgUAFgDQAGgDAJAXIANAaIgVABIgHgYg");
	this.shape_163.setTransform(67.3,48.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C966CC").s().p("ABCEFQh3iCg4hUIhEh2IhyhzQBjgFAzAGQA9AHAoAbQAoAbAlA7QAhAyAxBnIhjlzIC9hBQAFgDAoD3QAqD6gFAtQgKBdgeAmQgVAbgdAAQg2AAhRhYg");
	this.shape_164.setTransform(95.9,184.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#C966CC").s().p("Aj9CmQAcizAzh4QB/k0FRg2IhBCnQhzA+hCBFQg+BDgfBdQgdBSgMCHQgIBUgHDZIi4APQAXjwANhag");
	this.shape_165.setTransform(32,215.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3A2E25").s().p("AlYJlQgHgBgCgHQhDi5giiHQgtizgGiXQgGioArh2QA0iNB9hRQCHhWCMAOQAUACA9AYQA1AVAdgDQAegEAcAHQAaAHAcASQBqBFA6CDQAbA/AHAuQAIA8gXAvQAJBDABBaQABA3AABtQAAB3AFAsQALBdAlA8QACAEgCAEQgCAFgEABQh/ArhSAWQh1AghhAKQhFAHhQAAQh5AAiXgPgAhTpfQg8ADg2AXQhyAwhJBbQhMBegRB3QgdDJA8ECQAcB7AkBsIAjBpIADAUQABAHALABQCjAOBxgBQCBAACVghQBygZCSgyQgdgzgLhKQgHgzgChfIABi3QgBhpgLhKQgCgEADgGQAvhWhUicQg2hlhTgxQgcgQgNgFQgYgJgWACQgZAEgIgBQgTgDgegNQgkgPgNgDQgtgNgvAAIgWABg");
	this.shape_166.setTransform(59.3,108.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#3A2E25").s().p("Ai8JnQhYgEhEgHQhSjigli0QgujbARitQAJhaAfhGQAmhZBZhHQBYhJBjgVQBvgZBeAqIAgAOQASAHAPAAQAHABAPgCIAXgCQAWAAAeAQQA4AcAsAvQAtAvAbA7QAiBJAKAxQAPBIgcAsQAJA/ACBlIAAC2QADDcAzBOQg9AVhSAXQijAvhmANQg+AJhZAAQg5AAhFgEg");
	this.shape_167.setTransform(59.3,108.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:53.3,y:317.2}},{t:this.shape_25,p:{x:84.2,y:317.3}},{t:this.shape_24,p:{x:10.9,y:261.1}},{t:this.shape_23},{t:this.shape_22,p:{x:95.9,y:380.2}},{t:this.shape_21,p:{x:44.4,y:381.4}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:68.2,y:222}},{t:this.shape_17,p:{x:63.5,y:150.7}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_13},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_22,p:{x:92.3,y:387.3}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.instance_14},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.instance_18},{t:this.shape_77},{t:this.instance_17},{t:this.shape_76},{t:this.instance_16},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.instance_15},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},19).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.instance_24},{t:this.instance_23},{t:this.shape_107},{t:this.shape_106},{t:this.instance_22},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.instance_21},{t:this.shape_92},{t:this.instance_20},{t:this.instance_19},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},20).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_26,p:{x:55,y:327.6}},{t:this.shape_25,p:{x:85.8,y:327.7}},{t:this.shape_22,p:{x:97.5,y:390.6}},{t:this.shape_21,p:{x:46,y:391.8}},{t:this.shape_18,p:{x:69.9,y:232.4}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_17,p:{x:65.2,y:161.1}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.instance_27},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.instance_26},{t:this.instance_25}]},20).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_26,p:{x:55.4,y:327.7}},{t:this.shape_25,p:{x:86.2,y:327.7}},{t:this.shape_24,p:{x:12.9,y:271.6}},{t:this.shape_22,p:{x:97.9,y:390.7}},{t:this.shape_21,p:{x:46.4,y:391.8}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_18,p:{x:70.3,y:232.5}},{t:this.shape_17,p:{x:65.6,y:161.2}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.instance_28},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},20).to({state:[]},20).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,34.8,133.4,443.3);


(lib.screen711 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{screen7:0,screen75:17,trans78:33,screen8:134,screen9:148,screen10:173,screen11:204});

	// timeline functions:
	this.frame_0 = function() {
		//starting with "screen7"
		this.stop();
		
		//unique fix to only play audio here if coming from screen75.
		//normally alraedy playing as part of trans67 on main timeline
		if (exportRoot.screen711.screenCount == 75) {
			setTimeout(function () {
				change_storytext("screen" + exportRoot.screen711.screenCount);
				read_storytext("screen" + exportRoot.screen711.screenCount);
			}, 20);
		}
		
		//console.log("setup screen7 within screen711");
		exportRoot.screen711.screenCount = 7;
		
		//delayed sfx for pancreas trying
		setTimeout(function () {
			playSfx("snd_pancreastries");
		}, 750);
		
		
		//console.log("screenCount: " + exportRoot.screen711.screenCount);
	}
	this.frame_17 = function() {
		this.stop();
		
		//console.log("setup screen75 within screen711");
		exportRoot.screen711.screenCount = 75;
		//exportRoot.kara.gotoAndStop("weakened");
		exportRoot.screen711.screen75.gotoAndPlay(0);
		
		//console.log("screenCount: " + exportRoot.screen711.screenCount);
		
		setTimeout(function () {
			change_storytext("screen" + exportRoot.screen711.screenCount);
			read_storytext("screen" + exportRoot.screen711.screenCount);
		}, 20);
	}
	this.frame_33 = function() {
		exportRoot.kara.gotoAndStop("happy");
		change_storytext("screen8");
		read_storytext("screen8");
	}
	this.frame_44 = function() {
		playSfx("snd_lookinside");
	}
	this.frame_73 = function() {
		playSfx("snd_insulininjection");
	}
	this.frame_134 = function() {
		this.stop();
		
		//console.log("setup screen8 within screen711");
		
		// unique fix to prevent dupe play after "trans78"
		// only allow playback of sound here if coming from screen9
		if (exportRoot.screen711.screenCount == 9) {
			setTimeout(function () {
				change_storytext("screen" + exportRoot.screen711.screenCount);
				read_storytext("screen" + exportRoot.screen711.screenCount);
			}, 20);
		}
		//
		
		exportRoot.screen711.screenCount = 8;
		
		this.screen8.gotoAndPlay(0);
		exportRoot.kara.gotoAndStop("happy");
		
		btn_replay.visible = false;
		//console.log("screenCount: " + exportRoot.screen711.screenCount);
	}
	this.frame_148 = function() {
		this.stop();
		
		//console.log("setup screen8 within screen711");
		exportRoot.screen711.screenCount = 9;
		
		this.screen9.gotoAndPlay(0);
		exportRoot.kara.gotoAndPlay("karaeat");
		playSfx("snd_eating");
		
		btn_replay.visible = true;
		//console.log("screenCount: " + exportRoot.screen711.screenCount);
		
		setTimeout(function () {
			change_storytext("screen" + exportRoot.screen711.screenCount);
			read_storytext("screen" + exportRoot.screen711.screenCount);
		}, 20);
	}
	this.frame_173 = function() {
		this.stop();
		
		//console.log("setup screen10 within screen711");
		exportRoot.screen711.screenCount = 10;
		
		this.screen10.gotoAndPlay(0);
		exportRoot.kara.gotoAndPlay("karaeat");
		playSfx("snd_eating");
		
		btn_replay.visible = false;
		//console.log("screenCount: " + exportRoot.screen711.screenCount);
		
		setTimeout(function () {
			change_storytext("screen" + exportRoot.screen711.screenCount);
			read_storytext("screen" + exportRoot.screen711.screenCount);
		}, 20);
	}
	this.frame_204 = function() {
		this.stop();
		
		//console.log("setup screen11 within screen711");
		exportRoot.screen711.screenCount = 11;
		
		this.screen11.gotoAndPlay(0);
		exportRoot.kara.gotoAndStop("happy");
		
		btn_replay.visible = false;
		//console.log("screenCount: " + exportRoot.screen711.screenCount);
		
		setTimeout(function () {
			change_storytext("screen" + exportRoot.screen711.screenCount);
			read_storytext("screen" + exportRoot.screen711.screenCount);
		}, 20);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(16).call(this.frame_33).wait(11).call(this.frame_44).wait(29).call(this.frame_73).wait(61).call(this.frame_134).wait(14).call(this.frame_148).wait(25).call(this.frame_173).wait(31).call(this.frame_204).wait(14));

	// txt_labels
	this.instance = new lib.labels_woo();
	this.instance.setTransform(93.1,324.4,1,1,0,0,0,382.4,166.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({y:333.4},11,cjs.Ease.get(1)).wait(163));

	// liver
	this.instance_1 = new lib.liver();
	this.instance_1.setTransform(-162.8,266.4,1,1,0,0,0,102.8,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({y:276.4},11,cjs.Ease.get(1)).wait(163));

	// stomach_label_11
	this.instance_2 = new lib.screen78_stomachlabel();
	this.instance_2.setTransform(425.9,142.2,1,1,0,0,0,33.9,6.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).wait(11).to({regX:36.9,regY:12.9,x:428.9,y:148.9},0).to({x:429,y:169},11,cjs.Ease.get(1)).wait(163));

	// stomach_11
	this.instance_3 = new lib.stomach_pulse("single",0);
	this.instance_3.setTransform(323.2,274.4,1,1,0,0,0,89.2,158.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:false},0).wait(11).to({startPosition:0},0).to({y:294.2},11,cjs.Ease.get(1)).to({_off:true},93).wait(56).to({_off:false},0).wait(14));

	// screen 11
	this.screen11 = new lib.insulin_glucose_flowcopy();
	this.screen11.setTransform(14.7,120.6,1,1,0,0,0,14.5,120.5);
	this.screen11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen11).wait(204).to({_off:false},0).wait(14));

	// screen 8
	this.screen8 = new lib.insulin_glucose_flowcopy();
	this.screen8.setTransform(5.8,122.9,1,1,0,0,0,14.5,120.5);
	this.screen8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen8).wait(134).to({_off:false},0).to({_off:true},14).wait(70));

	// screen 10
	this.screen10 = new lib.screen10();
	this.screen10.setTransform(323.4,295.2,1,1,0,0,0,89.2,157.2);
	this.screen10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen10).wait(173).to({_off:false},0).to({_off:true},31).wait(14));

	// screen75
	this.screen75 = new lib.screen75();
	this.screen75.setTransform(323.4,276.7,1,1,0,0,0,89.2,157.2);
	this.screen75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen75).wait(17).to({_off:false},0).to({_off:true},16).wait(185));

	// screen 9
	this.screen9 = new lib.screen9();
	this.screen9.setTransform(323.4,295.2,1,1,0,0,0,89.2,157.2);
	this.screen9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen9).wait(148).to({_off:false},0).to({_off:true},25).wait(45));

	// long acting insulin
	this.instance_4 = new lib.long_acting_insulin("single",0);
	this.instance_4.setTransform(121.8,-145.3,1,1,-44.7,0,0,76.2,13.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({regY:13.6,x:-12.8,y:-14.9},15,cjs.Ease.get(1)).wait(3).to({mode:"synched",loop:false},0).wait(29).to({startPosition:9},0).to({x:6,y:-33.7},9).to({regY:13.5,rotation:0.2,x:52.2,y:-19.9},9).to({_off:true},23).wait(70));

	// FlashAICB
	this.instance_5 = new lib.insulincrystals();
	this.instance_5.setTransform(-66,39.1,0.121,0.121,0,0,0,113.7,31.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).to({regX:114,scaleX:1,scaleY:1,x:-65.7,y:64.4,alpha:1},18,cjs.Ease.get(1)).wait(121));

	// Layer 3
	this.instance_6 = new lib.skin_divider();
	this.instance_6.setTransform(96.9,-184.3,1,1,0,0,0,426.8,54.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({y:63},26,cjs.Ease.get(1)).wait(159));

	// Layer 4
	this.instance_7 = new lib.stomach_fade();
	this.instance_7.setTransform(130.4,-109.9,1,1,0,0,0,114.5,169.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:false},0).to({x:140.5,alpha:1},7).to({_off:true},1).wait(177));

	// pancreas_label
	this.instance_8 = new lib.pancreas_label();
	this.instance_8.setTransform(228.8,-25.3,1,1,0,0,0,35.3,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},41).wait(177));

	// pancreas
	this.pancreas = new lib.damaged_pancreas();
	this.pancreas.setTransform(108,5.1,1,1,0,0,0,132.2,53.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AErA4IgMgEIAAgTQAGADAIACQAJACAGAAQANAAAAgIQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgGgEIgLgFQgKgFgEgDQgGgEgBgEQgDgDAAgHQAAgLAKgHQAIgGARAAQAQAAAPAHIgHARIgNgFQgFgCgHAAQgKAAAAAGQAAADAEADQADACALADQAKAEAFADQAFAEACAFQACAEABAHQAAANgKAHQgJAHgTAAIgQgBgADFAyQgIgHAAgNQAAgOAKgHQAKgGATgBIAQgBIAAgBQAAgOgOAAQgLAAgOAHIgHgQQAPgIASAAQASAAAIAHQAKAIAAAQIAAA4IgQAAIgFgMIgBAAQgGAHgGADQgGADgKAAQgOAAgGgHgADqAQQgKAAgFADQgGAEAAAHQAAAKAMAAQAJAAAEgFQAGgFAAgIIAAgHgABrAuQgMgMAAgVQAAgUALgMQALgMAUAAQASAAAKAKQALALgBAQIAAAMIg3AAQgBAKAHAGQAFAGAKAAQAIAAAHgCQAHgCAIgDIAAASQgHADgHACQgGABgLAAQgVAAgMgLgACaACQgBgHgFgEQgEgFgHAAQgIAAgEAFQgEAEgBAHIAiAAIAAAAgAg6ANQAAgVAMgLQALgMAVAAQAOAAALAGIgIASIgIgEIgJgBQgTAAAAAYQAAAaATAAQAGAAAGgCQAEgCAGgEIAAAVQgFAEgFABQgGABgIAAQgpAAgBgsgAj8AyQgIgHABgNQAAgOAKgHQAJgGAUgBIAPgBIAAgBQAAgOgOAAQgKAAgPAHIgHgQQAPgIASAAQASAAAJAHQAJAIAAAQIAAA4IgQAAIgFgMIAAAAQgHAHgFADQgHADgKAAQgNAAgHgHgAjWAQQgLAAgFADQgFAEAAAHQAAAKAMAAQAIAAAFgFQAFgFAAgIIAAgHgAAcA4IAAhWIASAAIADAPIABAAQAFgHAHgFQAHgEAIAAIAIAAIgCAXIgHgBQgMAAgGAGQgGAEAAAKIAAAtgAhkA4IAAgzQAAgIgEgEQgDgFgHAAQgKAAgFAHQgEAFAAAPIAAApIgYAAIAAhWIASAAIADAMIACAAQAEgHAHgDQAHgDAJAAQAPAAAHAIQAJAIgBAPIAAA4gAlgA4IAAhwIAlAAQAVAAAKAJQAMAIgBASQAAATgLAHQgMAKgVAAIgLAAIAAApgAlIgDIAIAAQALAAAHgEQAFgFAAgIQAAgIgFgFQgEgEgLAAIgLAAg");
	this.shape.setTransform(228.8,-25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pancreas,p:{alpha:1}}]}).to({state:[{t:this.pancreas,p:{alpha:1}},{t:this.shape}]},17).to({state:[{t:this.pancreas,p:{alpha:1}},{t:this.shape}]},16).to({state:[{t:this.pancreas,p:{alpha:0}}]},7).to({state:[]},1).wait(177));

	// screen7
	this.screen7 = new lib.screen7();
	this.screen7.setTransform(14.7,120.6,1,1,0,0,0,14.5,120.5);

	this.timeline.addTween(cjs.Tween.get(this.screen7).to({_off:true},17).wait(201));

	// blood
	this.instance_9 = new lib.blood_system();
	this.instance_9.setTransform(161.8,336.7,1,1,0,0,0,484.5,263.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({y:356.7},11,cjs.Ease.get(1)).wait(163));

	// skin/red bg
	this.instance_10 = new lib.skin_redbg();
	this.instance_10.setTransform(58.8,116.4,1,1,0,0,0,479.9,357.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(33).to({y:347.9},26,cjs.Ease.get(1)).wait(159));

	// blue bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2FFF6").s().p("EhK+AkfMAAAhI9MCV9AAAMAAABI9g");
	this.shape_1.setTransform(8.8,118);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(218));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550.4,-199.5,1196.7,901.5);


(lib.NEWKara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:0,hungry:8,insulin:16,"breakfast":24,lunch:33,dinner:41,sick:49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57));

	// misc
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A2E25").s().p("AlDCtQgHgBAAgIQgDgnABgTQACgfAQgUIBpiBQAEgEAJgDIAOgFIDZhWQAJgEADAKQADAKgJAEIjOBRQgeANABgBIAAAAIAAAAIh1CPQAAAAABAAQAAgBAAABQABAAAAAAQAAABAAAAIgBANIAAAlQATgSAbgQQA0gbAYgRQA+guAfgUQA3glAvgJQAbgFArAKIBGAOQA1AGAngLQAugMAegkQAHgIAHAIQAHAHgGAHQgoAwhBAKQgwAHhLgNQgpgIgUgDQgkgEgYALQgdALgfATIg4ApQgJAHhVAxQg8AjgWAiQgDAFgFAAIgEgBg");
	this.shape.setTransform(54.8,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A2E25").s().p("AlBBPIB4iUIDuhdIEdBQQgsA4hWACQgbABghgFIgjgGQgKgBgRgEQgTgFgIgBQg4gIhHAvQgOAIgrAhQgiAagXAOQgWANguAYQgmAXgRAcg");
	this.shape_1.setTransform(54.9,67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGAAQAHAAAAAFQAAAGgHAAQgGAAAAgGg");
	this.shape_2.setTransform(78,95.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAuQgIgIgCgNQgEgSACgOQAAgSAGgKQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQACgDAFgDQAMgKAMAKQALAJACAOQADAUgDAPQgFAWgOALQgGAFgEAAQgFAAgGgFg");
	this.shape_3.setTransform(78.8,98.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAEQgCgCAAgCQAAgGAGABQAHgBAAAGQAAACgCACQgDACgCAAQgCAAgCgCg");
	this.shape_4.setTransform(46.2,96.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAuQgJgIgCgNQgDgVABgLQAAgRAGgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAHgGQAMgKAMAKQAMAJABAOQAHAwgaAUQgGAFgEAAQgFAAgFgFg");
	this.shape_5.setTransform(47,99.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#584233").s().p("AgXAoQAAgHAHgBQAVgCARgMQATgPgIgUQgHgSgaADQgSACgTALQgGAEgEgGQgDgHAGgDQAYgPAaAAQAjgBAGAaQAIAcgWAUQgUASgdACIgCAAQgFAAAAgHg");
	this.shape_6.setTransform(64.4,113.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#584233").s().p("AhbgGQgHgHAHgHQAHgHAHAHQAbAdAygBQA0gBAageQAGgHAHAHQAHAHgGAHQgfAkg9ABIgBAAQg6AAgggig");
	this.shape_7.setTransform(63.5,133);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#584233").s().p("AATAZQgOgkgfgEQgHgBAAgHQAAgIAHABQApAFASAuQADAHgIACIgCABQgFAAgCgGg");
	this.shape_8.setTransform(90.4,86.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#584233").s().p("AgYAhQgHgCABgHQAGgnAugRQAHgCACAHQACAIgHACQglANgFAgQgBAFgEAAIgDAAg");
	this.shape_9.setTransform(37.1,89.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B58F67").s().p("AgxBAIAMhnQAUgrAhAMQAjANgBArQgBAigiAhQgUAVgTAAQgOAAgLgKg");
	this.shape_10.setTransform(109,100.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A2E25").s().p("AmJG3QgciBAFh/QAGiQAvhpQA7iHBygwQBEgcBHgIQBNgHBAAUQA1ARAqgEIAcgDQARAAALAFQAbANAWAdQANATATAmIAjBLQAVAuAQAcQATAdAJAKQAVAaADgcQAEgUgCgGIhgkaQgIgXgEgGQgHgLgRgIIhxgzQhCgdgggQQgHgDgVACIgfADQhPAGiiAOQggADgmAqQgVAXgiAtIg6A9QgiAlgRAdQgRAcAAA1QgBAeADA2QgGDtACBiQAAAKgKAAQgKAAAAgKQgCh2AFieIAEi7QABgmAigmIB2iDQAZggAPgSQAbggAWgGQAjgJA6gDIBfgDIBlgIIAVgCQANgBAHAEQAnAVA8AaIBlAsIAeANQAPAJAFAPIBeEVQAgBZgkAKQgaAHgZggQgJgMgWgnQgIgQgihKQgZg4gVggQgTgdgVgLQgWgMgiAEQgdAEgVgDQgPgBgbgKQgdgJgOgCQhvgQhhAlQhaAhg4BMQg1BHgSBiQgnDTAoC5QACAJgKADIgEAAQgGAAgBgHg");
	this.shape_11.setTransform(62.8,87.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A2E25").s().p("AnKFSIAAimIAIk8QAAgCANgVIAOgXIDAjVQAGgHAJgBQE9gbAGAEQAMAIDbBhQAJAEAEAKIBsE8IgFAsQgEANgPgGQgNgFgJgNQgcglgkhMQgphXgSgfQgZgqgcgKQgQgFgaADIgrAEQgRgBgXgHIgogMQgggJgqAAQhhgBhRAiQhbAmgvBIQgLARgMAZIgUAtQgdA/gKCMQgLCdAcB6g");
	this.shape_12.setTransform(62.8,87.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B58F67").s().p("AlLFwQhsiIgNjoQgNjkCLiWQCEiODCABQDfABB/CbQB5CUgUDXQgUDkhtCLQh3CZjBAAQjcAAh5iYg");
	this.shape_13.setTransform(62.3,98.5);

	this.instance = new lib.Path_8_6();
	this.instance.setTransform(62.4,99.9,1,1,0,0,0,45.5,52.1);
	this.instance.alpha = 0.102;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A2E25").s().p("AgtAAQAFAAApgZQAqgTADAVQAAAIghAPQgeAOAEAVg");
	this.shape_14.setTransform(87.8,43.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A2E25").s().p("AghAkQANggAMgTQAVgoAQAIQAMAGgSAnIgXAzg");
	this.shape_15.setTransform(83.8,39.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A2E25").s().p("AgMAUIACgZQACgVAHAAQAGgBAEAZIAEAdg");
	this.shape_16.setTransform(80.2,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B58F67").s().p("AhNCmQgVghgBhOQAHgOAFgeQALg6gEhQQgCgsAbgSQAYgQAjAHQAjAHAYAUQAaAWgGAWQgLAnANBKQAGAiAJAdQAABSgVAhQgXAlg4AAQg3AAgWgjg");
	this.shape_17.setTransform(63.5,150.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C966CC").s().p("AkFpnIHRABICRSZIq5A1g");
	this.shape_18.setTransform(68.2,222);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C966CC").s().p("ACmHDQgTkdhTi5QhhjgjChcIhxhyQFCgTC2EjQCXDvAaGFg");
	this.shape_19.setTransform(98.8,200.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C966CC").s().p("Aj9CmQAcizAyh4QCBk0FQg1IhACmQh1A+hABFQg/BEggBcQgcBSgMCHQgIBTgHDaIi4APQAXjwANhag");
	this.shape_20.setTransform(29.9,204.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D5D858").s().p("AhlBhQg3gCgHgtQgIgrArgXQA9gkA/gqICpgDQADAogMAZQgJAUgVANQh+BhhfAAIgGgBg");
	this.shape_21.setTransform(44.4,381.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D5D858").s().p("AgOBNQgmgPhGgqQgUgLgJgVQgJgXAAgsICogPQAUALAjAdQAgAbAaAMQAtASgFAoQgGApg2AIQgOADgPAAQgpAAgtgSg");
	this.shape_22.setTransform(95.9,380.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B58F67").s().p("AgqBMQgLgNABgWQAAgHABgGQgFAEgIABQgNABgNgLQgMgMAAgNQgBgRAQgMIANgIQAIgFAEgGQAEgFABgMQABgNACgEIB1AFQASAMALAQQAQAWgHASQgFANgSgCQgOAAgHgJQAFAJADAOQAEAVgEAMQgIAYgVgEQgNgCgFgMQgCAOgQAKQgMAIgKAAQgLAAgJgJg");
	this.shape_23.setTransform(123,253.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B58F67").s().p("AAIBQQgRgJgCgOQgFAMgOAEQgVAGgKgYQgGgLADgVQABgQAEgIQgGAIgOADQgTAEgGgOQgIgRAOgXQAKgQARgOIB6gPQACAEADANQACALAEAFQAFAGAJAEIAOAHQASALAAARQABANgMANQgLAMgPgBQgHAAgHgEQACAGABAIQACAVgKAOQgIALgNAAQgKAAgNgGg");
	this.shape_24.setTransform(10.9,261.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#353535").ss(17.1).p("AgnorQAHC5AjGgQAjGHACB3");
	this.shape_25.setTransform(84.2,317.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#353535").ss(17.1).p("AAJosQADC6gMGgQgMGJAFB2");
	this.shape_26.setTransform(53.3,317.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A2E25").s().p("AjIJgQhZgQiIgkQgGgBgBgFQgmjCgMiLQgRi3ASiWQATifA2hpQBBiAB7hAQCThMB8AYQBJANAzAhQAqAcA6AGQAPABAQAJQB1BEAsCLQAkB0gSCYQgBAKgKAAQgKAAABgKQAMhlgIhJQgKhfgshFQgzhQg5ghQgTgMgtgIQgqgIgWgOQhlhCh7AMQh2ALhmBKQhcBDgxBxQgpBdgOCEQgWDNAkD/QALBLAKA1IAFAlQAEAdABABIBUAUQBuAZA6AKQBfAQBJABQBKABBYgNQBAgJBggVQAxgLA+gQIATgEQgEABABgsIADgzQAIiTAAknQAAgHAKAAQAKAAAAAHQAAC9gCBUQgDCYgKB4QgBAIgHABQiAAjhXARQh5AWhjABIgEAAQhjAAh7gXg");
	this.shape_27.setTransform(62.2,99.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A2E25").s().p("AADJtQhlgDitgkIiYgjQgvjrgIi4QgLjgAsioQAXhYAohAQA0hSBjg5QBjg5BlgHQBvgHBZA4IAdATQARAKAOADQAIABAPABIAWABQAWAFAbATQAzAlAlA1QAlA1ARA/QAcBkgTCSIgBA9QAADAgCBZQgDCPgKB5QhJAThdATQisAkhmAAIgPAAg");
	this.shape_28.setTransform(62.3,99.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B68E68").s().p("AgfAiQgXgDgGgQQgHgPATgOQAQgNAZgFQARgDAOADQAaACAJAMQAFAGgBAIQAAAGgFAGQgMAQgfAHQgPAEgQAAIgPgBgAgLgDQgNADgEACQgGAGAEAAIALAAQATAAAUgHQAPgDgBgCIAAAAQgGAEgHgFIgBAAIgDAAQgFAAgDgCQgJAAgLAEg");
	this.shape_29.setTransform(147.4,172.2,1.164,1.164);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B68E68").s().p("AglATQgIgCgDgEQgDgFADgGQACgDAGgDQAWgRAkABIAGABIAOACQALADABAGQADAIgMAFQgKAGgTAFQgSAFgQAAIgPgCg");
	this.shape_30.setTransform(147.4,172.2,1.164,1.164);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(147.3,173.3,1.164,1.164,0,0,0,6.4,3.2);
	this.instance_1.alpha = 0.078;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B68E68").s().p("AggAhQgWgCgHgQQgGgPASgOQARgNAYgFQASgDAOAEQAaABAJALQAKAOgMANQgMAQgeAGQgPAEgRAAIgPgBgAgMgDQgNADgEACQgFAGAEAAIALAAQATAAAUgIQAOgCAAgCIgBAAQgFAEgIgFIgBAAIgDAAQgEAAgDgCQgJABgMADg");
	this.shape_31.setTransform(147.4,177.4,1.164,1.164);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B68E68").s().p("AglATQgHgBgEgFQgDgFADgGQACgDAGgDQAVgRAlABIAGABIAOACQALADABAGQADAIgMAFQgLAHgSAEQgRAFgPAAQgJAAgIgCg");
	this.shape_32.setTransform(147.4,177.4,1.164,1.164);

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.setTransform(147.3,178,1.164,1.164,0,0,0,6.4,3.2);
	this.instance_2.alpha = 0.078;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B68E68").s().p("AgfAhQgXgCgGgQQgHgPATgOQAQgNAZgFQARgDAOAEQAaABAJALQAFAHgBAIQAAAGgFAGQgNAQgeAHQgPADgPAAIgQgBgAgLgDQgNADgEACQgGAGAEAAIALAAQATAAAUgHQAPgDgBgCIAAAAQgGAEgHgFIgBAAIgDAAQgFAAgDgCQgIABgMADg");
	this.shape_33.setTransform(147.4,181.7,1.164,1.164);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B68E68").s().p("AglATQgIgCgDgEQgDgFADgGQACgDAGgDQAWgRAkABIAGABIAOACQALADABAGQADAIgMAFQgKAGgTAFQgTAFgPAAIgPgCg");
	this.shape_34.setTransform(147.4,181.7,1.164,1.164);

	this.instance_3 = new lib.Path_1();
	this.instance_3.setTransform(147.3,184.2,1.164,1.164,0,0,0,6.4,3.1);
	this.instance_3.alpha = 0.078;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#79909F").s().p("AgYBxQABhvgLhyQgDgdAfgBQAcABADAdQALBxgBBwQAAAegfgBQgcABAAgeg");
	this.shape_35.setTransform(145.3,174.8,1.164,1.164);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#79909F").s().p("AgyAKQgHgTAHgYIBggIIAJAoQgBAngvAEIgHAAQgoAAgKggg");
	this.shape_36.setTransform(144.6,157.3,1.164,1.164);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#79909F").s().p("AgOA8IAAh3QAAgOAOAAQAPAAAAAOIAAB3QAAAOgPAAQgOAAAAgOg");
	this.shape_37.setTransform(148.8,151.3,1.164,1.164);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#79909F").s().p("AgGBAQgKhDgEg5QgBgOAPAAQANAAABAOQAFA9AIA3QACAOgPAEIgFABQgIAAgBgLg");
	this.shape_38.setTransform(143.9,151.8,1.164,1.164);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#79909F").s().p("AgEA4QgMg4gHg0QgCgOAQAAQANAAACAOQAGA0AMAwQADAOgPAEIgGABQgHAAgDgLg");
	this.shape_39.setTransform(139.4,151.8,1.164,1.164);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#7B3334").ss(1,1).p("AgKgbQAMAFAGASQAFARgFAP");
	this.shape_40.setTransform(62.8,143.2,1.164,1.164);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AD3F41").s().p("AgGAsQgLgEgEgIQgEgGgCgIIgBgPQgDgTgKgFIAEgHQALgHAOgFQANgGAJACQALACAIAKQAHAIAEANQAEARgEAQQgEAMgIAGQgGAEgKACIgFAAQgHAAgGgCg");
	this.shape_41.setTransform(62.2,143.6,1.164,1.164);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3A2E26").s().p("AkUCWQgHgCAAgIQgCgiAAgPQACgbANgRIArg5QAbglAVgRQAPgMAfgKIAxgRIBygtQAJgEADAKQADAKgKAEIiuBFQgdANAEgEQgTAPgYAiIgnAzIgJAKQgGAHgBAEIgBAGQgBANABATIAAAEQAQgPAWgOQAsgXAWgPQAagRAzgmQAughAmgGQAcgEAqAHIBFAMQBRAKAug2QAHgIAHAIQAHAHgGAIQgjAog3AJQgpAHg/gLIgxgJQgcgEgTAGQgaAHgdARIgyAlQgIAHhJAqQgzAegUAdQgDAFgGAAIgDAAg");
	this.shape_42.setTransform(49.3,69.7,1.164,1.164);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3A2E26").s().p("AkRBDIBmh9IDLhRIDzBFQglAwhKACQgYABgbgFIgegFQgJgBgPgDIgWgGQgwgGg9ApQgMAFgkAdQgeAXgTALQgTALgnAUQghAUgNAYg");
	this.shape_43.setTransform(49.4,69.7,1.164,1.164);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAFgGAAQgFAAAAgFg");
	this.shape_44.setTransform(72.3,97.7,1.164,1.164);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMAnQgHgHgCgLQgDgQACgLQABgQAEgIIACgDIAFgGQAKgIALAJQAKAHABAMQAGAqgWAQQgFAFgDAAQgFAAgFgFg");
	this.shape_45.setTransform(73.1,100.7,1.164,1.164);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgFAAQAAgEAFAAQAGAAAAAEQAAAFgGAAQgFAAAAgFg");
	this.shape_46.setTransform(40.8,98.4,1.164,1.164);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgMAnQgHgHgCgLQgDgQACgLQABgQAEgIIACgDIAFgGQAKgIALAJQAKAHABAMQAGAqgWAQQgFAFgDAAQgFAAgFgFg");
	this.shape_47.setTransform(41.5,101.3,1.164,1.164);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#584233").s().p("AgVAjQAAgIAHgBQASgBANgKQAQgMgGgQQgFgPgWACQgPACgQAJQgGAEgEgGQgEgHAHgDQAWgNAVAAQAdgBAHAYQAIAXgUASQgSAQgZABIgBAAQgGAAAAgGg");
	this.shape_48.setTransform(58.8,115.2,1.164,1.164);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#584233").s().p("AgcA4QgjgFgNghQgMgaAHgkQABgGAGgBQAGgCAEAEQAOAQAVAFQARAFAXgCQAOgCAKgGQAGgDAOgMQAWgSAFARIABACIAAADIAAABQACAfgBAMQgDAXgOAOQgQAOgfAFQgOACgLAAQgMAAgLgCgAg7AJQAKAZAbADQAUADAUgEQAbgEAKgMQAJgKABgUIgBgTIgDADIgLAKQgMAIgXACQgdADgVgFQgQgEgNgJQgBARAGANg");
	this.shape_49.setTransform(57.8,138.4,1.164,1.164);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#584233").s().p("AhIAEIAAgtQAOASAVAFQAKADAVAAQAXABATgFQAGgCARgRQANgOAAAIQADA1gLAQQgPATg6AEIgHAAQguAAgKgsg");
	this.shape_50.setTransform(57.9,138.4,1.164,1.164);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#584233").s().p("AAPAWQgMgegZgDQgHgBAAgHQAAgIAHABQAkAFAPAnQADAHgHACIgDAAQgFAAgCgFg");
	this.shape_51.setTransform(84.7,88.9,1.164,1.164);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#584233").s().p("AgUAdQgHgCAAgHQAGghAogPQAHgCACAHQACAHgHACQgfALgEAbQgBAFgEAAIgDAAg");
	this.shape_52.setTransform(31.7,91.7,1.164,1.164);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B68E68").s().p("AgqA2IAKhXQASglAcALQAdAKAAAlQgBAdgeAcQgQASgRAAQgLAAgKgJg");
	this.shape_53.setTransform(103.2,102.7,1.164,1.164);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3A2E26").s().p("AlQF4QgXhrADhqQAEh3AkhYQAZg8AigoQAmgrA2gZQAygWA4gIQA6gIAyAKQAKACAeAJQAaAIAPABIAdgDQATgCALABQAdADAWAZQAcAeAbBCQAgBLARAZIARAZQAMAQAGgIIABgGIAAgHQADgMgBgGQAAgEgEgJIgGgOIgriAIgQg2QgJgigLgSQgKgSglgQQgqgPgPgHIgzgaQghgQgSgDQgWgFglAFQgoAGgSABIhHAEQgqADgcAFQgSADgTAVQgVAZgKALIhcBmIgZAcQgOASgEAOQgFATABAiIACA3IgDCDQgCBPABBaQAAAKgKAAQgKAAAAgKQgBhWADiBIAEifQAAgcAEgNQAEgRAPgUQAbglAvgyIBOhUQAOgPANgGQAMgFAWgCICegNIAvgGQAegDARAEQAWAFAiASIA2AbQAQAIAqAPQAlAQALAUQAIAPAHAZIAMApIAxCPIALAiQAFAQgCARQgCAdgQAFQgQAFgUgWQgdgggehHQgghPgXgdQgUgbgsgCQhFgDgGgBQhLgVg4AFQhKAGg7AeQhCAjgiA6Qg1BdgKCGQgIB0AZB5QACAKgJACIgEABQgGAAgCgHg");
	this.shape_54.setTransform(57.1,89.7,1.164,1.164);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3A2E26").s().p("AmGEgIAAiOIAGkNIAXgnICki2QAFgFAIgBQENgZAGAEQAIAGC+BUQAIAEADAIIBcEOIgEAmQgEAKgMgEQgLgEgIgMQgZgfgehBQgjhLgPgaQgVgkgZgIQgNgFgXADIgkADQgPAAgUgGIghgLQgdgHgiAAQhTgBhFAdQhOAggoA+QgKAOgKAWIgRAmQgYA2gJB3QgJCHAXBng");
	this.shape_55.setTransform(57.2,89.7,1.164,1.164);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B68E68").s().p("AkaE6Qhch0gMjGQgLjCB3iAQBxh6ClABQC+ABBtCFQBnB+gQC3QgSDDhcB3QhmCCimAAQi7AAhniCg");
	this.shape_56.setTransform(56.8,100.6,1.164,1.164);

	this.instance_4 = new lib.Path_15();
	this.instance_4.setTransform(56.2,101.7,1.164,1.164,0,0,0,38.6,42.8);
	this.instance_4.alpha = 0.102;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3A2E26").s().p("AgmAAIAngVQAjgQADASQAAAGgcANQgZALADATg");
	this.shape_57.setTransform(82.1,46.3,1.164,1.164);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3A2E26").s().p("AgcAfIAVgsQASgiAOAHQAKAFgQAiIgTArg");
	this.shape_58.setTransform(78.1,42.2,1.164,1.164);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3A2E26").s().p("AgKARIACgVQACgSAFAAQAGgBADAWIADAYg");
	this.shape_59.setTransform(74.5,44,1.164,1.164);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B68E68").s().p("AhCCNQgSgcAAhCQAFgMAFgaQAJgxgDhEQgCgmAXgQQAVgNAdAGQAeAFAVASQAWATgFATQgJAhALA/QAFAdAHAZQAABFgSAdQgTAfgwAAQgvAAgTgeg");
	this.shape_60.setTransform(58,152.4,1.164,1.164);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C86ECC").s().p("AirB/IAchjID+ixIA8CbIkeCQg");
	this.shape_61.setTransform(116.7,190.8,1.164,1.164);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C86ECC").s().p("ABYDOQgQgKgMgaQg5h8gbgqQgwhEg/gTIguh4QEFhGBmGuIgFAYQgKAZgbAGQgKACgKAAQgSAAgOgIg");
	this.shape_62.setTransform(85.4,184,1.164,1.164);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C86ECC").s().p("AgQEbQh2g8ggg5QgmhEAOhJQAPhGBOiDQBIh4BIgbQA8gWBDAnIhvCkQgqgJguBYQgwBWAPBBQAMA4B5AtQA9AXA7ANQgBAEgyA0IgzAzQg0gTg5geg");
	this.shape_63.setTransform(29.7,195.5,1.164,1.164);

	this.instance_5 = new lib.Path_19();
	this.instance_5.setTransform(37.7,223,1.164,1.164,0,0,0,13.9,11.2);
	this.instance_5.alpha = 0.129;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#957356").ss(0.6,0,1).p("AhKhNQAEAAApAOQAmAPAGgBQAFgBALgKQALgMADgBQAPgIANAHQALAGAFANQAEAOgGAKQgEAFgFADQgHADgKAAIgBgCQAIgEAKADQAFABAGADQARAIAGALQAHASgWAPQgPAJgLgEQAIAIgDAMQgFASgWgDQgKgBgPgLQgLgIgGgIQgBgCgBgCAAHAtQAFAJgEAMQgEAPgMgCQgQgCgLgUQgJgPgCgSIhFgfABHAmQgGgCgFgG");
	this.shape_64.setTransform(53.7,231.3,1.164,1.164);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B68E68").s().p("AgHBPQgQgCgLgUQgIgPgDgSIhFgfIAphGQAEAAApAOQAnAPAFgBQAGgBAKgKQALgMADgBQAPgIANAHQAMAGAEANQAFAOgHAKQgDAFgGADIAMAEQAQAIAGALQAIASgWAPQgPAJgLgEQAHAIgDAMQgEASgWgDQgLgBgOgLQgMgIgFgIQAEAJgDAMQgEANgKAAIgDAAg");
	this.shape_65.setTransform(53.6,231.3,1.164,1.164);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C86ECC").s().p("AkLgXIgin4IE/AHICtJSIBvGWIpMAwg");
	this.shape_66.setTransform(69.5,222.2,1.164,1.164);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D7D55A").s().p("AgVA+QgggSg1gqQgRgKgFgUQgFgVAFglICQAGQAQALAaAdQAYAbAVAMQAkAUgJAhQgJAigvABIgFAAQgsAAgugZg");
	this.shape_67.setTransform(57.1,381.4,1.164,1.164);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#353535").ss(17.3).p("AAGnaQgGBLAWCgQAZCqgDBNQgEBrgnCbQgpCsgEAh");
	this.shape_68.setTransform(55.6,317.6,1.164,1.164);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D7D55A").s().p("AgLBBQghgMg8gkQgRgKgIgRQgIgUAAgmICQgMQARAJAeAZQAbAXAWAKQAnAPgFAjQgFAiguAIQgMACgMAAQgkAAglgQg");
	this.shape_69.setTransform(98.6,381.6,1.164,1.164);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#353535").ss(17.3).p("AgynaQADBLArCcQAsCmAHBNQAKBrgTCfQgVCwABAh");
	this.shape_70.setTransform(88.9,319,1.164,1.164);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3A2E26").s().p("AiqIJQhKgNh4ggQgFgCgCgFQgbiNgMhtQgOiJAGhzQAGhvAUhQQAchoA4hDQA7hHBagnQBcgpBYAIQAsAEAnAQQAOAFAeASQAaAQARAFIAnAIQAYAEAOAIQAcAQAhAjQA/BEAUBhQAQBRgNBrQgBAJgKAAQgKAAABgJQAOh3gXhaQgdhwhWg5QgRgLgZgFQgcgEgPgEQgNgEgSgMIgegSQgwgag5gFQg1gGg3APQhcAYhGA8QhIA+ggBYQgzCJAGDRQACBZANBoIANBZQACAOADAhQAEAeAHAPIAGAOIAEAAQAIAGAbADIBlAWQBUARA0AGQBJAJA+gFQBigHCVgiIAlgGQAZgFAKgHQAGgFABgmIAAg2QAGhvAAj5QAAgIAKAAQAKAAAAAIQAACVgCBTQgCCBgJBoQgBAIgGABQhsAdhLAOQhlAThUACIgMAAQhRAAhngTg");
	this.shape_71.setTransform(56.7,101.7,1.164,1.164);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3A2E26").s().p("AADISQhWgCiUgfQhKgPg4gPQgojJgHidQgKi/AmiQQAThKAjg4QAthFBUgxQBWgxBUgFQBfgHBMAwIAZAQQAOAJAMACQAHACANAAIATABQATAEAWAQQAsAgAfAtQAgAuAPA1QAYBUgQB/IgBA0QAACkgCBLQgCB6gJBoQg+ARhQAQQiTAehWAAIgNAAg");
	this.shape_72.setTransform(56.7,101.7,1.164,1.164);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B68E68").s().p("AhQBgQgFgEABgGIAGhFQgCgJAKgFIAigTQAQgNAEgVIAEgTQACgLAGgHQAHgLAOgCQAOgBALAKQAPANgDAZQgDAjACAGQACAIALAMIAQAVQAGAHgGAIQgXAkgsAMQgSAFhCAEIgBAAQgFAAgFgFgAANgyQgCACAAAOQgDAPgIALQgHAJgRALIgYANIgEAtQAugEAGgBQAhgHASgVIgSgbQgLgQACgUQAAgagHAAQgCAAgCACg");
	this.shape_73.setTransform(137.9,177.9,1.164,1.164);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B68E68").s().p("Ag+AQIAagPQAagOAGgNQADgHABgQQAAgOACgJQAHgNAMAAQAMAAAGAPQADAIgCARIgCAmIAgAsQgOAVgJAHQgPALggAEQgQADg1ADg");
	this.shape_74.setTransform(137.8,177.9,1.164,1.164);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3A2E26").s().p("AkXCXQgHgCAAgHQgCgiAAgQQACgbANgRIArg6QAcgmAVgQQAPgMAfgLIAygRIBzguQAJgDADAKQADAKgKADIiwBGIgRAHQgLAFADgDQgTAQgZAiIgnA0IgJAKQgGAGgCAFIAAAAIAAAGQgBANAAATIAAAEQAPgOAUgMQArgXAVgNQAbgRAzgnQAugiAngIQAcgHArAGIBIANQBVAMAwg4QAHgHAHAHQAHAHgGAIQgkApg4AJQgqAGhBgLQgtgIgLAAQgegCgXAJQgYAJgbARIgvAkQgIAGhHApQgxAcgTAdQgDAFgGAAIgDgBg");
	this.shape_75.setTransform(54.1,76.4,1.152,1.152);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3A2E26").s().p("AkVBEIBoh/IDNhRID2BFQgmAxhKACQgYAAgcgEIgegFIgYgFIgXgFQgwgHg+ApIgwAjQgeAXgUAMIg6AfQghAUgPAZg");
	this.shape_76.setTransform(54.2,76.5,1.152,1.152);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgFAAQAAgEAFAAQAGAAAAAEQAAAGgGgBQgFABAAgGg");
	this.shape_77.setTransform(78.1,107.5,1.152,1.152);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgMAnQgHgHgCgLQgDgQACgLQAAgPAFgJQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgDADgCQAKgIALAJQAKAHACAMQACARgDANQgEATgMAKQgFAEgDAAQgFAAgFgFg");
	this.shape_78.setTransform(78.9,104.4,1.152,1.152);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgFAAQAAgEAFAAQAGAAAAAEQAAAGgGgBQgFABAAgGg");
	this.shape_79.setTransform(46.5,108.1,1.152,1.152);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgMAnQgHgHgCgLQgDgQACgMQAAgNAFgKIACgEIAFgFQAKgIALAIQAKAIACAMQAGApgXASQgFAEgDAAQgFAAgFgFg");
	this.shape_80.setTransform(47.3,105.1,1.152,1.152);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#584233").s().p("AgVAjQAAgHAHgBQARgCAOgKQARgMgHgRQgFgPgWADQgQACgPAJQgHAEgDgHQgEgGAGgEQAWgNAWAAQAdAAAHAXQAJAYgVASQgSAQgZACIgBAAQgGAAAAgHg");
	this.shape_81.setTransform(64.6,118,1.152,1.152);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#584233").s().p("AhNAEQgIgEAFgIQAEgJAJAFQAaAOApgCQArAAAZgSQAIgFAFAJQAFAIgIAFQgdATgxACIgHABQgqAAgcgRg");
	this.shape_82.setTransform(63.8,137.3,1.152,1.152);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#584233").s().p("AAPAWQgNgegYgEQgHAAAAgIQAAgHAHABQAjAEAQAoQADAHgIACIgCAAQgFAAgCgFg");
	this.shape_83.setTransform(90.5,87.6,1.152,1.152);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#584233").s().p("AgVAdQgHgCABgHQAFghApgPQAHgCACAHQACAHgHACQggALgEAbQgBAGgEAAIgDgBg");
	this.shape_84.setTransform(37.5,90.4,1.152,1.152);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B68E68").s().p("AgqA3IAKhYQASgmAcALQAeALAAAlQgCAdgeAdQgRASgQAAQgMAAgJgJg");
	this.shape_85.setTransform(109,101.4,1.152,1.152);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3A2E26").s().p("AlUF8QgXhvAEhsQAEh7AnhaQAYg5AdgfQAiglA0gOQAxgMA9gBQA4gBA1AIQANACAZAHQAYAHANACQANACARgBIAegCQAlgBAZAZIBIBqQA/BdAJgGQAKgIgIgdIgNglIgsiDIgOgyQgJgggKgPQgMgSgpgRQgugQgQgHIgwgYQgegPgSgDQgYgDgoAEQgqAGgUACIhUAHIgcABQgSAAgJAEQgRAGgUAXIgfAmIhaBkIgXAbQgNAQgDAOQgFAUABAiIABA3IgDCCQgCBNABBgQAAAKgKAAQgJAAgBgKQAAhZACh+IAEihQABgdADgMQAEgRAOgUQAaglAvgyIBNhSQAQgSAKgGQANgIAVgCICZgNQAOgBAngFQAjgEAUAEQAUAFAfAQIAyAZQARAIAvAQQApASAMAUQAIANAHAYIALAnIAvCLIANAjQAHAVABAMQABAcgLANQgNAQgYgRQgQgMgTgdIgegtQgIgLgUgiQgSgdgMgQQgUgbgxgDQhJgFgHgCQgygOhQgBQhWgBgsAMQhEATghA4Qg3BfgJCGQgIB2AZB6QACAKgJACIgEABQgGAAgCgHg");
	this.shape_86.setTransform(63,88.4,1.152,1.152);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3A2E26").s().p("AmLEkIAGmgIAYgnICmi5QAFgFAIgBQEQgZAGAEQAGAEDCBXQAIAEADAIIBdERIgEAmQgEALgMgFQgLgEgJgLIg2hKQgYgjgbgsQgVglgZgIQgNgEgXACQgeAEgHgBQgOAAgVgGIgigLQgZgGgmgBQh2gBglAGQhSAOglA5QgNAUgYA3QgZA2gIB5QgKCIAXBpg");
	this.shape_87.setTransform(63,88.5,1.152,1.152);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B68E68").s().p("AkeE+Qhdh2gLjIQgLjEB4iCQByh7CnABQDAACBuCFQBoCAgQC5QgSDFheB4QhnCEinAAQi9AAhpiDg");
	this.shape_88.setTransform(62.5,99.3,1.152,1.152);

	this.instance_6 = new lib.Path_8_1();
	this.instance_6.setTransform(62.2,100.3,1.152,1.152,0,0,0,38.8,45);
	this.instance_6.alpha = 0.102;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3A2E26").s().p("AgogIIArgOQAngJgCASQAAAHgfAGQgcAHAAATg");
	this.shape_89.setTransform(88.5,46.5,1.152,1.152);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3A2E26").s().p("AgiAXIAegnQAYgeAMAKQAKAHgWAdQgbAmgBACg");
	this.shape_90.setTransform(85.3,41.8,1.152,1.152);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3A2E26").s().p("AgKANIAGgUQAEgRAFABQAHABgBAVIgCAZg");
	this.shape_91.setTransform(81,42.8,1.152,1.152);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B68E68").s().p("AhDCPQgSgcAAhDQAGgNAEgaQAKgygEhEQgCgmAYgQQAVgOAdAGQAeAGAWASQAVASgEAUQgKAhAMBAQAFAdAHAZQAABGgSAeQgUAfgwAAQgvAAgUgeg");
	this.shape_92.setTransform(63.7,151.2,1.152,1.152);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C86ECC").s().p("ABLBDQgNg4gTgXQgTgYgrgZIh/hAIhihiQDjgRByBtQBlBfAvDgIiJAnIghigg");
	this.shape_93.setTransform(93.1,182.1,1.152,1.152);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B68E68").s().p("AgLBMQgMgHgGgSIgCgMQgDAFgGADQgLAFgNgHQgNgGgEgMQgFgOAKgNIAIgJQAGgHABgFQACgGgCgKQgCgLAAgDIBigcQASAGANAKQASAOAAARQAAAOgQACQgMACgIgFQAHAHAGAMQAJAOgBAKQAAAWgSADQgMABgHgIQACALgMANQgLAOgLAAQgFAAgGgEg");
	this.shape_94.setTransform(114.6,212.7,1.152,1.152);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C86ECC").s().p("Ag8CwQhOhrgihFQgeg6AJhDQAJhBAog2QApg4A/gcQBCgfBOAIIgPBcQhbAjgjBJQgfA/AbAqQAkA1A4BKQA1BCBcBrIhxBkQhFhJhKhpg");
	this.shape_95.setTransform(43.7,197.7,1.152,1.152);

	this.instance_7 = new lib.Path_16();
	this.instance_7.setTransform(46.4,203.7,1.152,1.152,0,0,0,19.5,30.5);
	this.instance_7.alpha = 0.102;

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B68E68").s().p("AAnBbQgJgDgLgMQgJgJgDgIQACAJgGAKQgFANgMgEQgOgFgGgUQgEgOABgRIhIhKIA2gxIBIAuIALAGQAIAEAFABQAGAAAHgDIALgFQAPgEALAIQAJAIABANQABANgIAGQgEAEgFACIAJAFQAOAKACANQADATgXAJQgPAGgJgGQAFAJgFAKQgGALgLAAQgFAAgFgCg");
	this.shape_96.setTransform(62,234.1,1.152,1.152);

	this.instance_8 = new lib.Path_18();
	this.instance_8.setTransform(62.3,234.1,1.152,1.152,0,0,0,10.3,9.4);
	this.instance_8.alpha = 0.102;

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgNIALAb");
	this.shape_97.setTransform(105.8,223.8,1.152,1.152);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgMIALAa");
	this.shape_98.setTransform(109.5,222.2,1.152,1.152);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgNIALAb");
	this.shape_99.setTransform(113.2,220.6,1.152,1.152);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgNIAKAb");
	this.shape_100.setTransform(117,219.1,1.152,1.152);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgNIAKAb");
	this.shape_101.setTransform(120.7,217.5,1.152,1.152);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgNIAKAb");
	this.shape_102.setTransform(124.4,215.9,1.152,1.152);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#2B2B2B").ss(0.5).p("AgFgNIAKAb");
	this.shape_103.setTransform(128.2,214.3,1.152,1.152);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#2B2B2B").ss(0.5).p("AA2gWIhrAt");
	this.shape_104.setTransform(91.3,232.7,1.152,1.152);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2B2B2B").s().p("AgTgfIAMgFIAbBEIgLAFg");
	this.shape_105.setTransform(144.8,210.3,1.152,1.152);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#2B2B2B").s().p("AgcguIAQgHIApBkIgQAHg");
	this.shape_106.setTransform(133.3,215.2,1.152,1.152);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#2B2B2B").ss(0.5).p("ACFhgIkgB4QgGACgCAIQgCAHACAGIASArQADAGAGACQAGABAGgCIEgh4g");
	this.shape_107.setTransform(115.7,222.4,1.152,1.152);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AiIBhQgGgCgCgGIgSgrQgDgGACgHQADgHAGgDIEfh4IAfBJIkfB4IgIACIgFgBg");
	this.shape_108.setTransform(115.6,222.5,1.152,1.152);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2B2B2B").s().p("AgxAoQgJgDgEgJIAAABQgDgJAEgJQADgIAJgDIBhgpIARApIhhAoQgEACgFAAQgEAAgEgCg");
	this.shape_109.setTransform(138.2,212.8,1.152,1.152);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C86ECC").s().p("AkIHEIBMuHIF7ACIBKH8QgpALgwARQhiAigoAhQggAaAGBaQAEBcgSAVQgrAshxARQg2AIguAAIgGAAg");
	this.shape_110.setTransform(66.7,212.9,1.152,1.152);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D7D55A").s().p("AhXBUQgvgCgHgnQgGglAlgUQA5ghAygjICSgBQACAigKAVQgIARgSALQhtBUhSAAIgFAAg");
	this.shape_111.setTransform(44.7,380.6,1.152,1.152);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D7D55A").s().p("AgLBCQgigNg8gkQgRgJgIgSQgIgUAAgmICRgNQARAJAeAaQAcAXAXAKQAnAQgFAiQgFAjgvAIQgMACgNAAQgjAAgmgQg");
	this.shape_112.setTransform(95.9,379.5,1.152,1.152);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#353535").ss(17.1).p("AginfQAHCiAeFlQAeFTACBl");
	this.shape_113.setTransform(84.3,316.8,1.152,1.152);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#353535").ss(17.1).p("AAHngQADChgKFnQgKFUAEBl");
	this.shape_114.setTransform(53.6,316.8,1.152,1.152);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#353535").s().p("AidBrQhTgGgKgsQgFgSARg+IARg8QBMgBCqgHQDEgIAagHIAFBEQADBEgPAPQgeAgg9AMQgkAHhgAFQhyAGgrAAIgRAAg");
	this.shape_115.setTransform(68.1,255.2,1.152,1.152);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B68E68").s().p("AjSAxQAJjQAFAAQAFAAC9gxIC7gyQAEADAPDdIAQDbIm3BKIAJjSg");
	this.shape_116.setTransform(71.1,233.7,1.152,1.152);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3A2E26").s().p("AivIOQhKgOh2gfQgGgBgBgFQgciOgMhuQgOiIAFh0QAGhwAUhPQAahpA2hEQA6hJBbgpQBcgrBZAGQApADAsASIBOAnQAPAHAdAEQAeAEAOAHQAcAOAjAjQBDBFAVBkQASBUgNBtQgBAKgKAAQgKAAABgKQAOh6gYhdQggh2hbg1QgQgKgagEQgggFgLgEQgNgEgTgNIgfgTQgxgZg6gDQg1gEg4AQQhgAbhFBCQhGBBggBeQgvCOAIDSQADBWAMBfQAGAvAKA7IAEApQACAbAGAKQADAFACABIAKAEQAHACAfAHQA0AMAyAKQBRAQA1AGQBIAJA9gFQBlgHCbgkIAlgGQAcgFAGgGQACgDgDgXQgBgQADgaIAEgrQAFh1AAjqQAAgIAKAAQAKAAAAAIQAACXgCBUQgDCCgJBpQAAAIgHABQhuAehNAPQhpAThWABIgEAAQhUAAhrgUg");
	this.shape_117.setTransform(62.4,100.5,1.152,1.152);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3A2E26").s().p("AADIYQhXgDiVgfQhLgPg5gPQgojMgIieQgJjBAmiRQAUhNAjg2QAthHBVgxQBVgxBXgGQBggHBNAxIAZAQQAPAJAMACQAGACANAAIAUABQARAEAZARQAsAfAfAuQAgAvAPA1QAYBVgQCAIgBA1QAAClgBBNQgDB7gJBpQg+ARhRAQQiVAfhXAAIgNAAg");
	this.shape_118.setTransform(62.5,100.5,1.152,1.152);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#584233").s().p("AhNAIQgCgIAIgBQBHgXBIAUQAIACgCAGQgCAIgIgCQhEgQhDATIgDABQgFAAgCgGg");
	this.shape_119.setTransform(68.4,139,1.152,1.152);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3A2E26").s().p("AkZCVQgGgCAAgHQgCggABgQQABgaAMgRIAsg6QAcglAXgSQAOgLAegKIAvgQIB5gvQAIgDACAJQADAIgIADIiyBFIgXAIIgEADIABgBQgVAQgaAkIgqA2IgMAPQgBABAAAMIAAAiQAPgPAWgNIBAgkQAbgQAzgmQAvgiAngIQAdgHArAHIBIANQBVANAxg4QAGgGAGAGQAGAGgFAHQgkApg4AIQgpAGhBgMQgvgIgKgBQgegCgYAJQgWAIgYAOIgqAeQgIAGhNAtQg3AfgVAfQgDAEgEAAIgDAAg");
	this.shape_120.setTransform(61.7,72.1,1.152,1.152);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3A2E26").s().p("AkWBDIBph/IDPhPID2BIQgmAwhLABIhSgJQgJgBgPgEIgXgFQgxgIg9ApQgOAHgkAbQgeAXgUAMQgoAUgTALQghATgPAZg");
	this.shape_121.setTransform(61.8,72.2,1.152,1.152);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFABQAGgBAAAFQAAAFgGAAQgFAAAAgFg");
	this.shape_122.setTransform(84.6,100.6,1.152,1.152);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgMAoQgHgHgCgMQgDgRACgLQAAgNAFgKIACgEIAGgFQAKgIALAIQAJAIACAMQAFAqgWARQgFAEgDAAQgGAAgEgEg");
	this.shape_123.setTransform(85.4,103.5,1.152,1.152);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAFgGABQgFgBAAgFg");
	this.shape_124.setTransform(52.9,101,1.152,1.152);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgMAoQgHgHgCgMQgDgQACgLQAAgOAFgKIACgEIAGgFQAKgIALAIQAJAIACAMQAFAqgWARQgFAEgDAAQgGAAgEgEg");
	this.shape_125.setTransform(53.6,103.9,1.152,1.152);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#584233").s().p("AgVAjQAAgHAGAAQATgCAOgKQARgNgHgRQgFgQgXADQgPACgRAJQgGADgDgGQgDgFAGgDQAVgNAWAAQAdAAAHAXQAHAXgUASQgSAPgZACIgBAAQgFAAAAgGg");
	this.shape_126.setTransform(70.9,118,1.152,1.152);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#584233").s().p("AAQAWQgLgfgbgEQgGgBAAgGQAAgHAGABQAkAFAOAoQADAFgHACIgCABQgEAAgCgFg");
	this.shape_127.setTransform(97,91.8,1.152,1.152);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#584233").s().p("AgVAcQgGgCABgGQAFghAogOQAGgCACAGQABAGgFACQghAMgEAbQAAAFgFAAIgCgBg");
	this.shape_128.setTransform(43.9,94.1,1.152,1.152);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B68E68").s().p("AgrA3IALhYQASgmAdALQAdALAAAmQgCAdgeAcQgRASgRAAQgLAAgKgJg");
	this.shape_129.setTransform(115.5,105.8,1.152,1.152);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3A2E26").s().p("AlVF7QgXhxAFhuQAHh9AqhbQAuhoBngyQBlgwBxAVQAIACAkALQAbAIATAAIAagCQAQgCAKABQAdAEAXAaQAbAfAdBGQAfBMAUAbQAiAwACgdQACgWgMgiIgriBIgPg2QgJghgLgSQgLgTgngRQgtgQgPgIIgxgZQgfgRgUgDQgYgEgpAEQgrAGgVABIhGACQguABgYAIQgRAGgVAXIgfAmIheBmQgiAlgEASQgFATABAhIAAA1IgECEQgCBKAABnQAAAIgJAAQgJAAAAgIQAAhlAEhyIAGijQABgdADgNQAEgSAQgUQAbgkAvgxIBOhSQAQgRALgGQANgHAVgCICfgLIAygGQAggDASAFQAWAFAjASIA2AcQAPAIArAQQAlAQALAUQAIAPAHAaIAMAqIA7CyQAFARgCASQgDAcgPAEQgPAFgUgWQgdgggdhIQghhRgWgdQgUgdgtgCQhFgEgHgCQgogKgegFQgigFgjADQhKAGg7AfQhCAjgjA6Qg3BegLCHQgKB3AZB8QACAIgIACIgEAAQgFAAgBgGg");
	this.shape_130.setTransform(69.2,92.2,1.152,1.152);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3A2E26").s().p("AmOEiIABiQIAJkRIAYgnICpi4QAFgFAIgBQESgVAFADIDIBdQAIADADAJIBbESIgFAnQgEALgMgFQgMgEgIgMQgYgigehAQgihMgQgbQgVglgZgIQgNgFgXACQgfAEgHgBQgOAAgUgHIgigLQgcgHgmgBQhSgBhHAdQhOAggqA+QgKAPgKAVIgSAmQgZA2gKB6QgLCIAXBqg");
	this.shape_131.setTransform(69.4,92.3,1.152,1.152);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B68E68").s().p("AAEHDQi+gChoiFQhch3gKjHQgJjHB6iBQBzh6CnADQDCADBtCHQBoCBgTC5QgUDGhfB4QhnCCikAAIgFAAg");
	this.shape_132.setTransform(69,103.3,1.152,1.152);

	this.instance_9 = new lib.Path_8();
	this.instance_9.setTransform(69.1,104.7,1.152,1.152,0,0,0,39.2,45.1);
	this.instance_9.alpha = 0.102;

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B68E68").s().p("AgICuQgxgEgRggQgQgeAGhDQAGgMAHgZQAOgyAChFQABgmAZgOQAWgLAdAIQAeAIATAUQAVAUgHATQgMAhAGBAQADAfAFAZQgGBHgUAbQgUAagnAAIgKAAg");
	this.shape_133.setTransform(64.5,154.6,1.152,1.152);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C86ECC").s().p("Aj+AeIBSo5IGQAsIgrI+IByGcIpVAxg");
	this.shape_134.setTransform(60.3,220.3,1.152,1.152);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D7D55A").s().p("AgWA+QgfgRg3grQgRgKgFgUQgGgWAFgmICTAHQAQALAaAdQAZAbAVANQAlAUgJAhQgKAjgvABIgFABQgtAAgvgbg");
	this.shape_135.setTransform(46.9,380.6,1.152,1.152);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#353535").ss(14.8).p("AAGnhQgGBMAXCiQAZCtgDBOQgEBtgoCdQgqCwgDAg");
	this.shape_136.setTransform(45.3,316.6,1.152,1.152);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D7D55A").s().p("AgMBDQghgNg8gkQgSgKgIgSQgIgUAAgmICSgNQARAJAeAaQAcAYAXAKQAnAPgFAjQgFAjgvAHQgMACgNAAQgkAAgmgPg");
	this.shape_137.setTransform(88.5,380.9,1.152,1.152);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#353535").ss(14.8).p("AgznhQADBMAsCfQAtCnAHBPQAKBsgTChQgVCzAAAi");
	this.shape_138.setTransform(78.8,318,1.152,1.152);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3A2E26").s().p("AgogGQAFAAAmgQQAmgLAAASQgBAHgeAIQgbAJAAASg");
	this.shape_139.setTransform(85.8,46.7,1.152,1.152);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3A2E26").s().p("AghAZQAWggAHgIQAWgfANAIQAKAHgVAfIgaAog");
	this.shape_140.setTransform(82.3,42.1,1.152,1.152);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3A2E26").s().p("AgKAPIAFgVQAFgSAEABQAHAAAAAWIgBAZg");
	this.shape_141.setTransform(78.1,43.3,1.152,1.152);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C86ECC").s().p("AA3GIQgMiKgTiMQgmkUgrgdIiQicQBRg2BOAJQByAMAZCnIBoJcIhJADIgpAAQghAAABgCg");
	this.shape_142.setTransform(89.8,204.6,1.152,1.152);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#C86ECC").s().p("AjxF4ICupcQAqijBxgBQBPAABMA+IifCMQgrAWg/DvQgoCZghCnQAAACgHAAQgYAAhzgRg");
	this.shape_143.setTransform(31,199.2,1.152,1.152);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3A2E26").s().p("AiyIOQhJgOh7giQgFgBgBgFQgaiQgLhsQgNiKAHhzQAHhwAUhPQAbhpA3hEQA7hIBbgpQBcgqBZAIQAqADArATIBOAnQAOAHAeAEQAeAFAOAHQAdAPAhAjQBDBFAUBlQARBSgOBvQgBAIgJAAQgIAAABgIQAQh8gahhQggh8hfgyQgNgHgbgEQgcgEgMgEQgNgFgVgOQgYgQgLgFQgygYg7gDQg1gDg4ARQhhAchFBDQhGBDgfBgQgtCNAFDLQADBXAMBoIAOBiIAIAuIACAnQAGAFAVAEIAcAFQBEAQAwAKQBNAPA1AHQBFAIA9gEQBngICUghIAlgFQAbgFAHgHQAHgGABgtIAAg9QAHh1ACjsQAAgGAJAAQAIAAAAAGQgBCYgDBUQgECDgKBpQAAAHgGABQhsAchNAOQhnAThWABIgEAAQhVAAhtgVg");
	this.shape_144.setTransform(68.9,104.5,1.152,1.152);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#3A2E26").s().p("AgBIaQhZgDiWghIiEggQgmjMgGigQgIjBAoiSQAVhMAjg3QAuhGBWgxQBWgxBXgFQBhgFBMAyIAZAQQAPAJAMACQAHACANAAIATACQASADAYASQAsAgAfAuQAgAvAPA2QAXBUgRCCIgCA0QgBCkgDBPQgEB8gKBpQg/ARhQAPQiUAdhXAAIgOAAg");
	this.shape_145.setTransform(68.9,104.4,1.152,1.152);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#B68E68").s().p("AgCBBQgOgJgBgMQgFAKgMACQgSACgGgWQgDgKAEgSQADgLAFgIQgGAHgMABQgQACgEgOQgEgQAOgSQAKgNAQgKIBmABQABAEABALQAAAKADAFQADAFAHAFIALAHQANALgBANQgBAOgLAJQgLAJgMgCQgGgBgFgEIABAMQgBATgKAKQgHAHgJAAQgJAAgKgIg");
	this.shape_146.setTransform(11.7,250.9,1.152,1.152);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B68E68").s().p("AggBCQgKgKgBgTIABgMQgFAEgGABQgMACgLgJQgLgKgBgNQgBgNANgLIALgHQAHgFADgFQADgFAAgKIACgPIBmgBQAQAKAKANQAOASgEAQQgEAOgQgCQgMgBgGgHQAFAIADALQAEASgDAKQgFAWgTgCQgMgCgFgKQgBAMgOAJQgKAIgJAAQgJAAgHgHg");
	this.shape_147.setTransform(104.5,256.9,1.152,1.152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.instance_5},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_4},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_3},{t:this.shape_34},{t:this.shape_33},{t:this.instance_2},{t:this.shape_32},{t:this.shape_31},{t:this.instance_1},{t:this.shape_30},{t:this.shape_29}]},8).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_8},{t:this.shape_96},{t:this.instance_7},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.instance_6},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},8).to({state:[]},8).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.instance_9},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},25).wait(8));

	// bfast
	this.eating = new lib.KaraEatBreakfast();
	this.eating.setTransform(66.1,230.1,0.998,0.998,0,0,0,66.7,229.8);
	this.eating._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eating).wait(24).to({_off:false},0).to({_off:true},9).wait(24));

	// lunch
	this.eating_1 = new lib.KaraEatLunch();
	this.eating_1.setTransform(66.1,230.1,0.998,0.998,0,0,0,66.7,229.8);
	this.eating_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eating_1).wait(33).to({_off:false},0).to({_off:true},8).wait(16));

	// dinner
	this.eating_2 = new lib.KaraEatDinner();
	this.eating_2.setTransform(66.1,230.1,0.998,0.998,0,0,0,66.7,229.8);
	this.eating_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eating_2).wait(41).to({_off:false},0).to({_off:true},8).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,34.8,133.4,372.8);


(lib.Lunch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		this.meter.gotoAndStop("mid_down");
		this.kara.gotoAndStop("hungry");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// EaselJS fix
	this.instance = new lib.meter("single",424);
	this.instance.setTransform(-184.7,276.7,1,1,0,0,0,115.2,229.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(1));

	// meter
	this.meter = new lib.meter();
	this.meter.setTransform(-184.7,276.7,1,1,0,0,0,115.2,229.2);
	this.meter.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.meter).wait(2).to({visible:true},0).wait(1));

	// meter bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF9CC").s().p("EgX3A8AMAAAh3/MAvvAAAMAAAB3/g");
	this.shape.setTransform(-181,312.2);

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(-175.1,312.2,1,1,0,0,0,152.8,384);
	this.instance_1.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).wait(3));

	// window
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5CCCC").s().p("AhaP4IAA/vIC1AAIAAfvg");
	this.shape_1.setTransform(479.3,129.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5CCCC").s().p("AhaP4IAA/vIC1AAIAAfvg");
	this.shape_2.setTransform(641.7,129.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5CCCC").s().p("AuBBbIAAi1IcDAAIAAC1g");
	this.shape_3.setTransform(560,36.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5CCCC").s().p("AuBBbIAAi1IcDAAIAAC1g");
	this.shape_4.setTransform(560,222.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#98ADAC").s().p("Ag3N1IAA7pIBvAAIAAbpg");
	this.shape_5.setTransform(486.5,127.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#98ADAC").s().p("Ag3N1IAA7pIBvAAIAAbpg");
	this.shape_6.setTransform(634.7,127.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#98ADAC").s().p("At0A4IAAhvIbpAAIAABvg");
	this.shape_7.setTransform(560,43.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5CCCC").s().p("AtSAXIAAgtIalAAIAAAtg");
	this.shape_8.setTransform(561.7,127.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#98ADAC").s().p("At0A4IAAhvIbpAAIAABvg");
	this.shape_9.setTransform(560,215.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5CCCC").s().p("AgVNTIAA6lIAsAAIAAalg");
	this.shape_10.setTransform(561.7,127.7);

	this.instance_2 = new lib.ClipGroup_3();
	this.instance_2.setTransform(562.4,199.4,1,1,0,0,0,140.5,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEDD5E").s().p("AieCfQhDhCAAhdQAAhcBDhCQBChDBcAAQBeAABBBDQBDBCAABcQAABdhDBCQhBBDheAAQhcAAhChDg");
	this.shape_11.setTransform(553.9,85.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#93FEF3").s().p("ArUOUIAA8nIWpAAIAAcng");
	this.shape_12.setTransform(560,128.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// title
	this.instance_3 = new lib.lunchtext();
	this.instance_3.setTransform(333.8,2,1,1,0,0,0,49,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

	// insulin
	this.syringe = new lib.short_insulin();
	this.syringe.setTransform(175,475,1,1,0,0,0,103.4,18.3);

	this.timeline.addTween(cjs.Tween.get(this.syringe).wait(3));

	// food
	this.food = new lib.lunch_drag();
	this.food.setTransform(509,473,1,1,0,0,0,86.7,48.1);

	this.timeline.addTween(cjs.Tween.get(this.food).wait(3));

	// EaselJS fix
	this.instance_4 = new lib.NEWKara("single",9);
	this.instance_4.setTransform(333.9,250,0.88,0.88,0,0,0,66.7,229.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},2).wait(1));

	// kara
	this.kara = new lib.NEWKara();
	this.kara.setTransform(333.9,250,0.88,0.88,0,0,0,66.7,229.7);
	this.kara.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kara).wait(2).to({visible:true},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.8,-71.8,1036.7,768);


(lib.Long_Acting = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		this.meter.gotoAndStop("top_down");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// EaselJS fix
	this.instance = new lib.meter("single",388);
	this.instance.setTransform(-184.7,276.7,1,1,0,0,0,115.2,229.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(1));

	// meter
	this.meter = new lib.meter();
	this.meter.setTransform(-184.7,276.7,1,1,0,0,0,115.2,229.2);
	this.meter.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.meter).wait(2).to({visible:true},0).wait(1));

	// meter bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF9CC").s().p("EgX3A7/MAAAh3+MAvvAAAMAAAB3+g");
	this.shape.setTransform(-181,312.2);

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(-175.1,312.2,1,1,0,0,0,152.8,384);
	this.instance_1.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).wait(3));

	// title
	this.instance_2 = new lib.morningtext();
	this.instance_2.setTransform(333.8,2,1,1,0,0,0,67.2,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// darggable item
	this.syringe = new lib.long_acting_drag();
	this.syringe.setTransform(329.1,480,1,1,0,0,0,100.7,17.8);

	this.timeline.addTween(cjs.Tween.get(this.syringe).wait(3));

	// kara
	this.kara = new lib.NEWKara();
	this.kara.setTransform(333.9,250,0.88,0.88,0,0,0,66.7,229.7);

	this.timeline.addTween(cjs.Tween.get(this.kara).wait(3));

	// window
	this.instance_3 = new lib.WINDOW();
	this.instance_3.setTransform(562.4,129.6,1,1,0,0,0,92.2,101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.8,-71.8,1036.7,768);


(lib.Dinner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		this.meter.gotoAndStop("mid_down");
		this.kara.gotoAndStop("hungry");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// EaselJS fix
	this.instance = new lib.meter("single",424);
	this.instance.setTransform(-184.7,276.7,1,1,0,0,0,115.2,229.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(1));

	// meter
	this.meter = new lib.meter();
	this.meter.setTransform(-184.7,276.7,1,1,0,0,0,115.2,229.2);
	this.meter.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.meter).wait(2).to({visible:true},0).wait(1));

	// meter bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF9CC").s().p("EgX3A7/MAAAh3+MAvvAAAMAAAB3+g");
	this.shape.setTransform(-181,312.2);

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(-175.1,312.2,1,1,0,0,0,152.8,384);
	this.instance_1.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).wait(3));

	// title
	this.instance_2 = new lib.dinnertext();
	this.instance_2.setTransform(333.8,2,1,1,0,0,0,54.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// insulin
	this.syringe = new lib.short_insulin();
	this.syringe.setTransform(175,475,1,1,0,0,0,103.4,18.3);

	this.timeline.addTween(cjs.Tween.get(this.syringe).wait(3));

	// food
	this.food = new lib.dinner_drag();
	this.food.setTransform(510.2,478.8,1,1,0,0,0,88.2,43.2);

	this.timeline.addTween(cjs.Tween.get(this.food).wait(3));

	// EaselJS fix
	this.instance_3 = new lib.NEWKara("single",9);
	this.instance_3.setTransform(333.9,250,0.88,0.88,0,0,0,66.7,229.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},2).wait(1));

	// kara
	this.kara = new lib.NEWKara();
	this.kara.setTransform(333.9,250,0.88,0.88,0,0,0,66.7,229.7);
	this.kara.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kara).wait(2).to({visible:true},0).wait(1));

	// window
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5CCCC").s().p("AhaP4IAA/vIC1AAIAAfvg");
	this.shape_1.setTransform(479.3,129.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5CCCC").s().p("AhaP4IAA/vIC1AAIAAfvg");
	this.shape_2.setTransform(641.7,129.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5CCCC").s().p("AuBBbIAAi1IcDAAIAAC1g");
	this.shape_3.setTransform(560,36.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5CCCC").s().p("AuBBbIAAi1IcDAAIAAC1g");
	this.shape_4.setTransform(560,222.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#98ADAC").s().p("Ag3N1IAA7pIBvAAIAAbpg");
	this.shape_5.setTransform(486.5,127.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#98ADAC").s().p("Ag3N1IAA7pIBvAAIAAbpg");
	this.shape_6.setTransform(634.7,127.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#98ADAC").s().p("At0A4IAAhvIbpAAIAABvg");
	this.shape_7.setTransform(560,43.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5CCCC").s().p("AtSAXIAAgtIalAAIAAAtg");
	this.shape_8.setTransform(561.7,127.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#98ADAC").s().p("At0A4IAAhvIbpAAIAABvg");
	this.shape_9.setTransform(560,215.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5CCCC").s().p("AgVNTIAA6lIAsAAIAAalg");
	this.shape_10.setTransform(561.7,127.7);

	this.instance_4 = new lib.ClipGroup_2();
	this.instance_4.setTransform(562.4,199.4,1,1,0,0,0,140.5,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECC841").s().p("Ai4C5QhMhNAAhsQAAhrBMhNQBNhMBrAAQBsAABNBMQBMBNAABrQAABshMBNQhNBNhsgBQhrABhNhNg");
	this.shape_11.setTransform(525.8,188.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FAD04B","#8B67B2","#7654C8"],[0.012,0.843,1],0,105.9,0,-17.3).s().p("ArUOUIAA8oIWpAAIAAcog");
	this.shape_12.setTransform(560,128.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.instance_4},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.8,-71.8,1036.7,768);


(lib.Breakfast = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		this.meter.gotoAndStop("mid_down");
		this.kara.gotoAndStop("hungry");
		this.stop();
	}
	this.frame_3 = function() {
		this.food.visible = true;
	}
	this.frame_24 = function() {
		this.food.mouseEnabled = true;
		this.food.initX = this.food.x;
		this.food.initY = this.food.y;
		begin_pulseAlt(this.food);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(21).call(this.frame_24).wait(1));

	// EaselJS fix
	this.instance = new lib.meter("single",424);
	this.instance.setTransform(-184.7,276.7,1,1,0,0,0,115.2,229.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(23));

	// meter
	this.meter = new lib.meter();
	this.meter.setTransform(-184.7,276.7,1,1,0,0,0,115.2,229.2);
	this.meter.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.meter).wait(2).to({visible:true},0).wait(23));

	// meter bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF9CC").s().p("EgX3A7/MAAAh3+MAvvAAAMAAAB3+g");
	this.shape.setTransform(-181,312.2);

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(-175.1,312.2,1,1,0,0,0,152.8,384);
	this.instance_1.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).wait(25));

	// title
	this.instance_2 = new lib.breakfasttext();
	this.instance_2.setTransform(333.8,2,1,1,0,0,0,77.7,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

	// insulin
	this.syringe = new lib.short_insulin();
	this.syringe.setTransform(330.2,479.6,1,1,0,0,0,103.4,18.3);

	this.timeline.addTween(cjs.Tween.get(this.syringe).to({_off:true},3).wait(22));

	// food
	this.food = new lib.breakfast_drag();
	this.food.setTransform(354.9,618.6,1,1,0,0,0,94.1,72.1);

	this.timeline.addTween(cjs.Tween.get(this.food).wait(3).to({y:482.6},21,cjs.Ease.get(1)).wait(1));

	// EaselJS fix
	this.instance_3 = new lib.NEWKara("single",9);
	this.instance_3.setTransform(333.9,250,0.88,0.88,0,0,0,66.7,229.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},2).wait(23));

	// kara
	this.kara = new lib.NEWKara();
	this.kara.setTransform(333.9,250,0.88,0.88,0,0,0,66.7,229.7);
	this.kara.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.kara).wait(2).to({visible:true},0).wait(23));

	// window
	this.instance_4 = new lib.WINDOW();
	this.instance_4.setTransform(562.4,129.6,1,1,0,0,0,92.2,101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.8,-71.8,1036.7,768);


// stage content:
(lib.basalBolus = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{screen1:0,screen2:1,trans23:2,screen345:31,screen6:41,trans67:50,screen711:77,screen12:87,screen13:96,screen14:105,screen15:114,screen16:123,screen17:132});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.stop();
		
		setTimeout(change_storytext, 10);
		setTimeout(read_storytext, 500); //extra delay on pg1 for loading
		
		exportRoot.btn_screen1.removeAllEventListeners("mousedown"); //removes all existing listnerers of this type
		exportRoot.btn_screen1.addEventListener("mousedown", goto_screen2);
		addHandHover(exportRoot.btn_screen1);
		
		begin_pulseObj(exportRoot.btn_screen1);
		
		function goto_screen2(e) {
			playSfx('sfx_btnclick');
		
			end_pulseObj(exportRoot.btn_screen1);
		
			removeHandHover(exportRoot.btn_screen1);
			cursorDefault();
			exportRoot.btn_screen1.removeEventListener("mousedown", goto_screen2);
		
			exportRoot.gotoAndStop("screen2");
		}
		
		exportRoot.longTimeout1 = 0;
		exportRoot.longTimeout2 = 0;
		//setting global ref vars
		btn_next = this.btn_next;
		btn_next.removeAllEventListeners("mousedown");
		btn_next.addEventListener("mousedown", btn_next_clicked);
		addHandHover(btn_next);
		
		btn_prev = this.btn_prev;
		btn_prev.removeAllEventListeners("mousedown");
		btn_prev.addEventListener("mousedown", btn_prev_clicked);
		addHandHover(btn_prev);
		
		function btn_next_clicked(e) {
			sndch.stop(); //stop narration
			stopSfx(); //stop playing sfx
			sndch.removeAllEventListeners("complete");
			playSfx('sfx_btnclick');
		
			switch (exportRoot.getCurrentLabel()) {
				case "screen1":
					{
						exportRoot.gotoAndStop("screen2");
						break;
					}
				case "screen2":
					{
						exportRoot.gotoAndPlay("trans23");
						break;
					}
				case "screen345":
					{
						if (exportRoot.screen345.screenCount == 3) {
							//console.log("transitioning screen345: 3 to 4");
							exportRoot.screen345.gotoAndStop("screen4");
						} else if (exportRoot.screen345.screenCount == 4) {
							//console.log("transitioning screen345: 4 to 5");
							exportRoot.screen345.gotoAndStop("screen5");
						} else if (exportRoot.screen345.screenCount == 5) {
							//console.log("leaving screen345");
							exportRoot.gotoAndStop("screen6");
						}
						break;
					}
				case "screen6":
					{
						exportRoot.gotoAndPlay("trans67");
						break;
					}
				case "screen711":
					{
						if (exportRoot.screen711.screenCount == 7) {
							//console.log("transitioning screen711: 7 to 7.5");
							exportRoot.screen711.gotoAndStop("screen75");
						} else if (exportRoot.screen711.screenCount == 75) {
							//console.log("transitioning screen711: 7.5 to 8");
							exportRoot.screen711.screenCount = 7.1; //prevent further transitioning.
							exportRoot.screen711.screen7.bg_glucose.gotoAndStop("lastframe");
							exportRoot.screen711.gotoAndPlay("trans78");
						} else if (exportRoot.screen711.screenCount == 8) {
							//console.log("transitioning screen711: 8 to 9");
							exportRoot.screen711.gotoAndStop("screen9");
						} else if (exportRoot.screen711.screenCount == 9) {
							//console.log("transitioning screen711: 9 to 10");
							exportRoot.screen711.gotoAndStop("screen10");
						} else if (exportRoot.screen711.screenCount == 10) {
							//console.log("transitioning screen711: 10 to 11");
							exportRoot.screen711.gotoAndStop("screen11");
							//btn_next.visible = false; //hidden for last page
						} else if (exportRoot.screen711.screenCount == 11) {
							exportRoot.gotoAndStop("screen12");
						}
						break;
					}
				case "screen12":
					{
						exportRoot.gotoAndStop("screen13");
						break;
					}
				case "screen13":
					{
						exportRoot.gotoAndStop("screen14");
						break;
					}
				case "screen14":
					{
						exportRoot.gotoAndStop("screen15");
						break;
					}
				case "screen15":
					{
						exportRoot.gotoAndStop("screen16");
						break;
					}
				case "screen16":
					{
						exportRoot.gotoAndStop("screen17");
						btn_next.visible = false;
						break;
					}
				default:
					break;
			}
		}
		
		function btn_prev_clicked(e) {
			sndch.stop();
			stopSfx(); //stop playing sfx
			sndch.removeAllEventListeners("complete");
			playSfx('sfx_btnclick');
		
			switch (exportRoot.getCurrentLabel()) {
				//case "screen5": exportRoot.gotoAndPlay("trans56"); break;
				case "screen2":
					{
						exportRoot.gotoAndStop("screen1");
						break;
					}
				case "screen345":
					{
						if (exportRoot.screen345.screenCount == 3) {
							//console.log("leave screen345 to screen2");
							exportRoot.gotoAndStop("screen2");
						} else if (exportRoot.screen345.screenCount == 4) {
							//console.log("transitioning screen345: 4 to 3");
							exportRoot.screen345.gotoAndStop("screen3");
						} else if (exportRoot.screen345.screenCount == 5) {
							//console.log("transitioning screen345: 5 to 4");
							exportRoot.screen345.gotoAndStop("screen4");
						}
						break;
					}
				case "screen6":
					{
						//going back to screen3 of screen345 for now.
						exportRoot.gotoAndStop("screen345");
						break;
					}
				case "screen711":
					{
						exportRoot.screen711.screen7.stop();
						exportRoot.kara.gotoAndStop("happy");
						if (exportRoot.screen711.screenCount == 11) {
							//console.log("transitioning screen711: 11 to 10");								
							exportRoot.screen711.gotoAndStop("screen10");
						} else if (exportRoot.screen711.screenCount == 10) {
							//console.log("transitioning screen711: 10 to 9");								
							exportRoot.screen711.gotoAndStop("screen9");
						} else if (exportRoot.screen711.screenCount == 9) {
							//console.log("transitioning screen711: 9 to 8");								
							exportRoot.screen711.gotoAndStop("screen8");
						} else if (exportRoot.screen711.screenCount == 8) {
							//console.log("transitioning screen711: 8 to 75");								
							exportRoot.screen711.gotoAndStop("screen75");
						} else if (exportRoot.screen711.screenCount == 75) {
							//console.log("transitioning screen711: 75 to 7");								
							exportRoot.screen711.gotoAndStop("screen7");
						} else if (exportRoot.screen711.screenCount == 7) {
							//console.log("leave screen711: 7 to 6");								
							exportRoot.gotoAndStop("screen6");
						}
					}
				case "screen12":
					{
						exportRoot.gotoAndStop("screen711");
						setTimeout(function () {
							change_storytext("screen7");
							read_storytext("screen7");
							exportRoot.screen711.screenCount = 7;
						}, 20);
						break;
					}
				case "screen13":
					{
						exportRoot.gotoAndStop("screen12");
						break;
					}
				case "screen14":
					{
						exportRoot.gotoAndStop("screen13");
						break;
					}
				case "screen15":
					{
						exportRoot.gotoAndStop("screen14");
						break;
					}
				case "screen16":
					{
						exportRoot.gotoAndStop("screen15");
						break;
					}
				case "screen17":
					{
						exportRoot.gotoAndStop("screen16");
						btn_next.visible = true;
						break;
					}
				default:
					break;
			}
		}
	}
	this.frame_1 = function() {
		exportRoot.stop();
		exportRoot.kara.gotoAndStop("happy");
		exportRoot.zach.gotoAndStop("happy");
		
		setTimeout(change_storytext, 10);
		setTimeout(read_storytext, 10);
		
		//(KL note: was on btn_replay layer)
		btn_replay = this.btn_replay;
		addHandHover(btn_replay);
		btn_replay.visible = false;
		
		exportRoot.btn_replay.mouseChildren = false;
		exportRoot.btn_next.mouseChildren = false;
		exportRoot.btn_prev.mouseChildren = false;
		addHandHover(exportRoot.btn_replay);
	}
	this.frame_12 = function() {
		playSfx("snd_lookinside");
	}
	this.frame_31 = function() {
		exportRoot.stop();
		setTimeout(change_storytext, 20);
	}
	this.frame_41 = function() {
		exportRoot.stop();
		exportRoot.kara.gotoAndStop("happy");
		
		btn_replay.visible = false;
		
		setTimeout(change_storytext, 20);
		setTimeout(read_storytext, 20);
	}
	this.frame_50 = function() {
		setTimeout(function () {
			change_storytext("screen7");
			read_storytext("screen7");
		}, 20);
	}
	this.frame_57 = function() {
		playSfx("snd_lookinside");
	}
	this.frame_77 = function() {
		exportRoot.stop();
		
		//console.log("arrived at screen711 from screen6");
		exportRoot.screen711.gotoAndStop(0);
		exportRoot.screen711.screen7.gotoAndPlay(0);
		
		btn_replay.visible = false;
		btn_replay.removeAllEventListeners("mousedown"); //remove any existing eventListener if returning to this frame
		btn_replay.addEventListener("mousedown", function () {
			if (exportRoot.screen711.getCurrentLabel() == "screen9") {
				//console.log("REPLAY SCREEN 9!");
				playSfx("sfx_btnclick");
				exportRoot.screen711.screen9.gotoAndPlay(0);
			}
		});
	}
	this.frame_87 = function() {
		exportRoot.stop();
		
		btn_replay.visible = false;
		
		setTimeout(change_storytext, 20);
		setTimeout(read_storytext, 20);
		
		clearTimeout(exportRoot.longTimeout1);
		clearTimeout(exportRoot.longTimeout2);
	}
	this.frame_96 = function() {
		setTimeout(change_storytext, 20);
		setTimeout(read_storytext_call, 20, "screen13", screen13_ready);
		
		function screen13_ready(e) {
			e.target.removeAllEventListeners("complete");
			exportRoot.btn_replay.visible = true;
		}
		
		function grabDrag(e) {
			end_pulseObj(e.target);
			playSfx("click6");
		}
		
		function resetDrag(e) {
			var mc = e.target;
			mc.x = mc.initX;
			mc.y = mc.initY;
		}
		
		dragTargetX = 664;
		dragTargetY = 302;
		dragThresh = 160;
		
		clearTimeout(exportRoot.longTimeout1);
		clearTimeout(exportRoot.longTimeout2);
		
		//•••••••••••••••••••••••••••••••••••••••••
		
		exportRoot.btn_replay.visible = false;
		exportRoot.btn_replay.removeAllEventListeners("mousedown");
		exportRoot.btn_replay.addEventListener("mousedown", function(e) {
			e.target.visible = false;
			cursorDefault();
			playSfx("click6");
			exportRoot.screen13.meter.gotoAndStop("top_down");
			setupScreen13();
			stopSfx();
			read_storytext_call("screen13", screen13_ready);
		});
		
		//•••••••••••••••••••••••••••••••••••••••••
		
		screen13_syringe = exportRoot.screen13.syringe;
		screen13_syringe.hitArea = new createjs.Shape(new createjs.Graphics().f("#000").dr(-8, -8, 217, 52));
		screen13_syringe_diffX = -335;
		screen13_syringe_diffY = -73;
		screen13_syringe.mouseChildren = false;
		
		function setupScreen13() {
			screen13_syringe.x = screen13_syringe.initX || screen13_syringe.x;
			screen13_syringe.y = screen13_syringe.initY || screen13_syringe.y;
			screen13_syringe.initX = screen13_syringe.x;
			screen13_syringe.initY = screen13_syringe.y;
			screen13_syringe.visible = true;
			screen13_syringe.alpha = 1;
			screen13_syringe.removeAllEventListeners();
			screen13_syringe.addEventListener("mousedown", grabDrag);
			screen13_syringe.addEventListener("pressmove", screen13_dragSyringe);
			screen13_syringe.addEventListener("pressup", resetDrag);
			addHandHover(screen13_syringe);
			begin_pulseObj(screen13_syringe);
		}
		setupScreen13();
		
		function screen13_dragSyringe(e) {
			var mc = e.target;
			mc.x = stage.mouseX + screen13_syringe_diffX;
			mc.y = stage.mouseY + screen13_syringe_diffY;
		
			var diffX = Math.abs(stage.mouseX - dragTargetX);
			var diffY = Math.abs(stage.mouseY - dragTargetY);
		
			if (diffX < dragThresh && diffY < dragThresh) {
				mc.removeAllEventListeners();
				removeHandHover(mc);
				cursorDefault();
				createjs.Tween.get(mc).to({alpha: 0}, 167).set({visible: false});
				exportRoot.screen13.kara.gotoAndStop("insulin");
				exportRoot.longTimeout1 = setTimeout(function(){
					exportRoot.screen13.meter.play();
					playSfx("dn_short");
				}, 950);
				exportRoot.longTimeout2 = setTimeout(function(){exportRoot.screen13.kara.gotoAndStop("normal");}, 1200);
			}
		}
	}
	this.frame_97 = function() {
		exportRoot.stop();
	}
	this.frame_105 = function() {
		setTimeout(change_storytext, 20);
		setTimeout(read_storytext_call, 20, "screen14", screen14_ready);
		
		function screen14_ready(e) {
			e.target.removeAllEventListeners("complete");
			screen14_syringe.mouseEnabled = true;
			addHandHover(screen14_syringe);
			begin_pulseObj(screen14_syringe);
		}
		
		function grabDrag(e) {
			end_pulseObj(e.target);
			playSfx("click6");
		}
		
		function resetDrag(e) {
			var mc = e.target;
			mc.x = mc.initX;
			mc.y = mc.initY;
		}
		
		dragTargetX = 664;
		dragTargetY = 302;
		dragThresh = 160;
		
		//•••••••••••••••••••••••••••••••••••••••••
		
		exportRoot.btn_replay.visible = false;
		exportRoot.btn_replay.removeAllEventListeners("mousedown");
		exportRoot.btn_replay.addEventListener("mousedown", function (e) {
			e.target.visible = false;
			cursorDefault();
			playSfx("click6");
			exportRoot.screen14.gotoAndPlay(1);
			setupScreen14();
			stopSfx();
			change_storytext();
			read_storytext_call("screen14", screen14_ready);
		});
		
		clearTimeout(exportRoot.longTimeout1);
		clearTimeout(exportRoot.longTimeout2);
		
		//•••••••••••••••••••••••••••••••••••••••••
		
		screen14_syringe = exportRoot.screen14.syringe;
		screen14_syringe.hitArea = new createjs.Shape(new createjs.Graphics().f("#000").dr(-8, -8, 223, 53));
		screen14_syringe_diffX = -335;
		screen14_syringe_diffY = -75;
		screen14_syringe.mouseChildren = false;
		end_pulseObj(screen14_syringe);
		
		screen14_food = exportRoot.screen14.food;
		screen14_food_diffX = -315;
		screen14_food_diffY = -68;
		screen14_food.mouseChildren = false;
		end_pulseObj(screen14_food);
		
		function setupScreen14() {
			screen14_syringe.x = screen14_syringe.initX || screen14_syringe.x;
			screen14_syringe.y = screen14_syringe.initY || screen14_syringe.y;
			screen14_syringe.initX = screen14_syringe.x;
			screen14_syringe.initY = screen14_syringe.y;
			screen14_syringe.visible = true;
			screen14_syringe.alpha = 1;
			screen14_syringe.mouseEnabled = false;
			screen14_syringe.removeAllEventListeners();
			screen14_syringe.addEventListener("mousedown", grabDrag);
			screen14_syringe.addEventListener("pressmove", screen14_dragSyringe);
			screen14_syringe.addEventListener("pressup", resetDrag);
		
			screen14_food.x = screen14_food.initX || screen14_food.x;
			screen14_food.y = screen14_food.initY || screen14_food.y;
			screen14_food.visible = false;
			screen14_food.alpha = 1;
			screen14_food.removeAllEventListeners();
			screen14_food.addEventListener("mousedown", grabDrag);
			screen14_food.addEventListener("pressmove", screen14_dragFood);
			screen14_food.addEventListener("pressup", resetDrag);
			addHandHover(screen14_food);
			screen14_food.mouseEnabled = false;
			
			exportRoot.clock.gotoAndStop("breakfast");
		}
		setupScreen14();
		
		
		function screen14_dragSyringe(e) {
			var mc = e.target;
			mc.x = stage.mouseX + screen14_syringe_diffX;
			mc.y = stage.mouseY + screen14_syringe_diffY;
		
			var diffX = Math.abs(stage.mouseX - dragTargetX);
			var diffY = Math.abs(stage.mouseY - dragTargetY);
		
			if (diffX < dragThresh && diffY < dragThresh) {
				mc.removeAllEventListeners();
				removeHandHover(mc);
				cursorDefault();
				createjs.Tween.get(mc).to({alpha: 0}, 167).set({visible: false});
				exportRoot.screen14.kara.gotoAndStop("insulin");
				exportRoot.longTimeout1 = setTimeout(function() {
					exportRoot.screen14.meter.play();
					exportRoot.clock.play();
				}, 950);
				exportRoot.longTimeout2 = setTimeout(function(){exportRoot.screen14.kara.gotoAndStop("normal");}, 1200);
			}
		}
		
		function screen14_dragFood(e) {
			var mc = e.target;
			mc.x = stage.mouseX + screen14_food_diffX;
			mc.y = stage.mouseY + screen14_food_diffY;
		
			var diffX = Math.abs(stage.mouseX - dragTargetX);
			var diffY = Math.abs(stage.mouseY - dragTargetY);
		
			if (diffX < dragThresh && diffY < dragThresh) {
				mc.removeAllEventListeners();
				removeHandHover(mc);
				cursorDefault();
				createjs.Tween.get(mc).to({alpha:0}, 167).set({visible: false});
				exportRoot.screen14.kara.gotoAndStop("breakfast");
				playSfxVol("snd_eating", 0.25);
				exportRoot.screen14.meter.play();
				exportRoot.clock.play();
			}
		}
	}
	this.frame_106 = function() {
		exportRoot.stop();
	}
	this.frame_114 = function() {
		setTimeout(change_storytext, 20);
		setTimeout(read_storytext_call, 20, "screen15", screen15_ready);
		
		function screen15_ready(e) {
			e.target.removeAllEventListeners("complete");
			screen15_syringe.mouseEnabled = true;
			addHandHover(screen15_syringe);
			begin_pulseAlt(screen15_syringe);
			screen15_food.mouseEnabled = true;
			addHandHover(screen15_food);
			begin_pulseAlt(screen15_food);
		}
		
		function grabDrag(e) {
			end_pulseObj(e.target);
			playSfx("click6");
		}
		
		function resetDrag(e) {
			var mc = e.target;
			mc.x = mc.initX;
			mc.y = mc.initY;
		}
		
		dragTargetX = 664;
		dragTargetY = 302;
		dragThresh = 160;
		
		clearTimeout(exportRoot.longTimeout1);
		clearTimeout(exportRoot.longTimeout2);
		
		//•••••••••••••••••••••••••••••••••••••••••
		
		exportRoot.btn_replay.visible = false;
		exportRoot.btn_replay.removeAllEventListeners("mousedown");
		exportRoot.btn_replay.addEventListener("mousedown", function(e) {
			e.target.visible = false;
			cursorDefault();
			playSfx("click6");
			exportRoot.screen15.meter.gotoAndStop("mid_down");
			exportRoot.screen15.kara.gotoAndStop("hungry");
			setupScreen15();
			stopSfx();
			change_storytext();
			read_storytext_call("screen15", screen15_ready);
		});
		
		//•••••••••••••••••••••••••••••••••••••••••
		
		screen15_syringe = exportRoot.screen15.syringe;
		screen15_syringe.hitArea = new createjs.Shape(new createjs.Graphics().f("#000").dr(-8, -8, 223, 53));
		screen15_syringe_diffX = -335;
		screen15_syringe_diffY = -75;
		screen15_syringe.mouseChildren = false;
		end_pulseObj(screen15_syringe);
		
		screen15_food = exportRoot.screen15.food;
		screen15_food_diffX = -325;
		screen15_food_diffY = -73;
		screen15_food.mouseChildren = false;
		end_pulseObj(screen15_food);
		
		function setupScreen15() {
			screen15_syringe.x = screen15_syringe.initX || screen15_syringe.x;
			screen15_syringe.y = screen15_syringe.initY || screen15_syringe.y;
			screen15_syringe.initX = screen15_syringe.x;
			screen15_syringe.initY = screen15_syringe.y;
			screen15_syringe.visible = true;
			screen15_syringe.alpha = 1;
			screen15_syringe.removeAllEventListeners();
			screen15_syringe.addEventListener("mousedown", grabDrag);
			screen15_syringe.addEventListener("pressmove", screen15_dragSyringe);
			screen15_syringe.addEventListener("pressup", resetDrag);
			screen15_syringe.mouseEnabled = false;
			
			screen15_food.x = screen15_food.initX || screen15_food.x;
			screen15_food.y = screen15_food.initY || screen15_food.y;
			screen15_food.initX = screen15_food.x;
			screen15_food.initY = screen15_food.y;
			screen15_food.visible = true;
			screen15_food.alpha = 1;
			screen15_food.removeAllEventListeners();
			screen15_food.addEventListener("mousedown", grabDrag);
			screen15_food.addEventListener("pressmove", screen15_dragFood);
			screen15_food.addEventListener("pressup", resetDrag);
			screen15_food.mouseEnabled = false;
			
			exportRoot.clock.gotoAndStop("lunch_syringe");
			exportRoot.dropCnt = 0;
		}
		setupScreen15();
		
		
		function screen15_dragSyringe(e) {
			var mc = e.target;
			mc.x = stage.mouseX + screen15_syringe_diffX;
			mc.y = stage.mouseY + screen15_syringe_diffY;
		
			var diffX = Math.abs(stage.mouseX - dragTargetX);
			var diffY = Math.abs(stage.mouseY - dragTargetY);
		
			if (diffX < dragThresh && diffY < dragThresh) {
				exportRoot.dropCnt++;
				mc.removeAllEventListeners();
				removeHandHover(mc);
				cursorDefault();
				screen15_food.mouseEnabled = false;
				end_pulseObj(screen15_food);
				removeHandHover(screen15_food);
				createjs.Tween.get(mc).to({alpha: 0}, 167).set({visible: false});
				exportRoot.screen15.kara.gotoAndStop("insulin");
				exportRoot.longTimeout1 = setTimeout(function() {
					if (exportRoot.dropCnt == 1) {
						exportRoot.screen15.meter.play();
						change_storytext("screen15b");
						read_storytext("screen15b");
					} else { exportRoot.screen15.meter.gotoAndPlay("high_down"); }
					exportRoot.clock.play();
				}, 950);
				exportRoot.longTimeout2 = setTimeout(function(){exportRoot.screen15.kara.gotoAndStop("normal");}, 1200);
			}
		}
		
		function screen15_dragFood(e) {
			var mc = e.target;
			mc.x = stage.mouseX + screen15_food_diffX;
			mc.y = stage.mouseY + screen15_food_diffY;
		
			var diffX = Math.abs(stage.mouseX - dragTargetX);
			var diffY = Math.abs(stage.mouseY - dragTargetY);
		
			if (diffX < dragThresh && diffY < dragThresh) {
				exportRoot.dropCnt++;
				mc.removeAllEventListeners();
				removeHandHover(mc);
				cursorDefault();
				screen15_syringe.mouseEnabled = false;
				end_pulseObj(screen15_syringe);
				removeHandHover(screen15_syringe);
				createjs.Tween.get(mc).to({alpha:0}, 167).set({visible: false});
				exportRoot.screen15.kara.gotoAndStop("lunch");
				playSfxVol("snd_eating", 0.25);
				if (exportRoot.dropCnt == 1) {
					exportRoot.screen15.meter.gotoAndPlay("mid_up");
					exportRoot.clock.gotoAndPlay("lunch_food");
					playSfx("up_xlong");
				} else {
					exportRoot.screen15.meter.play();
					exportRoot.clock.play();
				}
			}
		}
	}
	this.frame_115 = function() {
		exportRoot.stop();
	}
	this.frame_123 = function() {
		setTimeout(change_storytext, 20);
		setTimeout(read_storytext_call, 20, "screen16", screen16_ready);
		exportRoot.clock.visible = true;
		
		function screen16_ready(e) {
			e.target.removeAllEventListeners("complete");
			screen16_syringe.mouseEnabled = true;
			addHandHover(screen16_syringe);
			begin_pulseAlt(screen16_syringe);
			screen16_food.mouseEnabled = true;
			addHandHover(screen16_food);
			begin_pulseAlt(screen16_food);
		}
		
		function grabDrag(e) {
			end_pulseObj(e.target);
			playSfx("click6");
		}
		
		function resetDrag(e) {
			var mc = e.target;
			mc.x = mc.initX;
			mc.y = mc.initY;
		}
		
		dragTargetX = 664;
		dragTargetY = 302;
		dragThresh = 160;
		
		clearTimeout(exportRoot.longTimeout1);
		clearTimeout(exportRoot.longTimeout2);
		
		//•••••••••••••••••••••••••••••••••••••••••
		
		exportRoot.btn_replay.visible = false;
		exportRoot.btn_replay.removeAllEventListeners("mousedown");
		exportRoot.btn_replay.addEventListener("mousedown", function(e) {
			e.target.visible = false;
			cursorDefault();
			playSfx("click6");
			exportRoot.screen16.meter.gotoAndStop("mid_down");
			exportRoot.screen16.kara.gotoAndStop("hungry");
			setupScreen16();
			stopSfx();
			change_storytext();
			read_storytext_call("screen16", screen16_ready);
		});
		
		//•••••••••••••••••••••••••••••••••••••••••
		
		screen16_syringe = exportRoot.screen16.syringe;
		screen16_syringe.hitArea = new createjs.Shape(new createjs.Graphics().f("#000").dr(-8, -8, 223, 53));
		screen16_syringe_diffX = -335;
		screen16_syringe_diffY = -75;
		screen16_syringe.mouseChildren = false;
		end_pulseObj(screen16_syringe);
		
		screen16_food = exportRoot.screen16.food;
		screen16_food_diffX = -325;
		screen16_food_diffY = -73;
		screen16_food.mouseChildren = false;
		end_pulseObj(screen16_food);
		
		function setupScreen16() {
			screen16_syringe.x = screen16_syringe.initX || screen16_syringe.x;
			screen16_syringe.y = screen16_syringe.initY || screen16_syringe.y;
			screen16_syringe.initX = screen16_syringe.x;
			screen16_syringe.initY = screen16_syringe.y;
			screen16_syringe.visible = true;
			screen16_syringe.alpha = 1;
			screen16_syringe.removeAllEventListeners();
			screen16_syringe.addEventListener("mousedown", grabDrag);
			screen16_syringe.addEventListener("pressmove", screen16_dragSyringe);
			screen16_syringe.addEventListener("pressup", resetDrag);
			screen16_syringe.mouseEnabled = false;
			
			screen16_food.x = screen16_food.initX || screen16_food.x;
			screen16_food.y = screen16_food.initY || screen16_food.y;
			screen16_food.initX = screen16_food.x;
			screen16_food.initY = screen16_food.y;
			screen16_food.visible = true;
			screen16_food.alpha = 1;
			screen16_food.removeAllEventListeners();
			screen16_food.addEventListener("mousedown", grabDrag);
			screen16_food.addEventListener("pressmove", screen16_dragFood);
			screen16_food.addEventListener("pressup", resetDrag);
			screen16_food.mouseEnabled = false;
			
			exportRoot.clock.gotoAndStop("dinner_syringe");
			exportRoot.dropCnt = 0;
		}
		setupScreen16();
		
		
		function screen16_dragSyringe(e) {
			var mc = e.target;
			mc.x = stage.mouseX + screen16_syringe_diffX;
			mc.y = stage.mouseY + screen16_syringe_diffY;
		
			var diffX = Math.abs(stage.mouseX - dragTargetX);
			var diffY = Math.abs(stage.mouseY - dragTargetY);
		
			if (diffX < dragThresh && diffY < dragThresh) {
				exportRoot.dropCnt++;
				mc.removeAllEventListeners();
				removeHandHover(mc);
				cursorDefault();
				screen16_food.mouseEnabled = false;
				end_pulseObj(screen16_food);
				removeHandHover(screen16_food);
				createjs.Tween.get(mc).to({alpha: 0}, 167).set({visible: false});
				exportRoot.screen16.kara.gotoAndStop("insulin");
				exportRoot.longTimeout1 = setTimeout(function() {
					if (exportRoot.dropCnt == 1) {
						exportRoot.screen16.meter.play();
						change_storytext("screen16b");
						read_storytext("screen16b");
					} else { exportRoot.screen16.meter.gotoAndPlay("high_down") }
					exportRoot.clock.play();
				}, 950);
				exportRoot.longTimeout2 = setTimeout(function(){exportRoot.screen16.kara.gotoAndStop("normal");}, 1200);
			}
		}
		
		function screen16_dragFood(e) {
			var mc = e.target;
			mc.x = stage.mouseX + screen16_food_diffX;
			mc.y = stage.mouseY + screen16_food_diffY;
		
			var diffX = Math.abs(stage.mouseX - dragTargetX);
			var diffY = Math.abs(stage.mouseY - dragTargetY);
		
			if (diffX < dragThresh && diffY < dragThresh) {
				exportRoot.dropCnt++;
				mc.removeAllEventListeners();
				removeHandHover(mc);
				cursorDefault();
				screen16_syringe.mouseEnabled = false;
				end_pulseObj(screen16_syringe);
				removeHandHover(screen16_syringe);
				createjs.Tween.get(mc).to({alpha:0}, 167).set({visible: false});
				exportRoot.screen16.kara.gotoAndStop("dinner");
				playSfxVol("snd_eating", 0.25);
				if (exportRoot.dropCnt == 1) {
					exportRoot.screen16.meter.gotoAndPlay("mid_up");
					exportRoot.clock.gotoAndPlay("dinner_food");
					playSfx("up_xlong");
				} else {
					exportRoot.screen16.meter.play();
					exportRoot.clock.play();
				}
			}
		}
	}
	this.frame_124 = function() {
		exportRoot.stop();
	}
	this.frame_132 = function() {
		setTimeout(change_storytext, 20);
		setTimeout(read_storytext, 20);
		
		exportRoot.clock.visible = false;
		btn_replay.visible = false;
		exportRoot.stop();
		
		clearTimeout(exportRoot.longTimeout1);
		clearTimeout(exportRoot.longTimeout2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(11).call(this.frame_12).wait(19).call(this.frame_31).wait(10).call(this.frame_41).wait(9).call(this.frame_50).wait(7).call(this.frame_57).wait(20).call(this.frame_77).wait(10).call(this.frame_87).wait(9).call(this.frame_96).wait(1).call(this.frame_97).wait(8).call(this.frame_105).wait(1).call(this.frame_106).wait(8).call(this.frame_114).wait(1).call(this.frame_115).wait(8).call(this.frame_123).wait(1).call(this.frame_124).wait(8).call(this.frame_132).wait(9));

	// btn_screen1
	this.btn_screen1 = new lib.splash_btn();
	this.btn_screen1.setTransform(825.1,603.1,1,1,0,0,0,86.4,89.9);

	this.timeline.addTween(cjs.Tween.get(this.btn_screen1).to({_off:true},1).wait(140));

	// btn_replay
	this.btn_replay = new lib.replay_btn();
	this.btn_replay.setTransform(985,70.8,1,1,0,0,0,22.4,23.8);
	this.btn_replay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_replay).wait(1).to({_off:false},0).wait(140));

	// btn_next
	this.btn_next = new lib.btn_prev();
	this.btn_next.setTransform(986.3,694.2,1,1,0,0,180,38,47);
	this.btn_next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(1).to({_off:false},0).wait(140));

	// btn_prev
	this.btn_prev = new lib.btn_prev();
	this.btn_prev.setTransform(38,694.2,1,1,0,0,0,38,47);
	this.btn_prev._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_prev).wait(1).to({_off:false},0).wait(140));

	// graybar_top
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EBOrACvIvTAAIirAAMiOBAAAIAAlcMCOBAAAICrAAIPTAAICqAAIAAFcg");
	this.shape.setTransform(519.6,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(141));

	// graybar_bottom
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhQOASGMAAAgkLMCgdAAAIAAKSIAAIUIAARlg");
	this.shape_1.setTransform(513.1,618.2,1,1,0,0,0,2.1,-113.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(140));

	// pointer
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D5D0A8").ss(8,0,1).p("AHdlGIvaGWIP7D3g");
	this.shape_2.setTransform(166.6,310.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5D0A8").s().p("An8BPIPZmVIAgKNg");
	this.shape_3.setTransform(166.6,310.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},31).to({state:[]},10).to({state:[{t:this.shape_3},{t:this.shape_2}]},36).to({state:[]},10).wait(54));

	// Zach
	this.zach = new lib.zach();
	this.zach.setTransform(615.1,330.9,1,1,0,0,0,88.4,223.3);
	this.zach._off = true;

	this.timeline.addTween(cjs.Tween.get(this.zach).wait(1).to({_off:false},0).wait(1).to({x:106.1},20,cjs.Ease.get(1)).wait(19).to({x:615.1},0).to({_off:true},11).wait(89));

	// kara
	this.kara = new lib.Kara();
	this.kara.setTransform(391.8,337.4,1,1,0,0,0,66.7,229.8);
	this.kara._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kara).wait(1).to({_off:false},0).to({_off:true},2).wait(38).to({_off:false},0).wait(9).to({x:108.5},16,cjs.Ease.get(1)).to({_off:true},21).wait(54));

	// mask outline
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D5D0A8").ss(12).p("EAJrAzKIDJgBQy1gPocwVQmztKAA3rQAArVBKn0QBYpTDOmKQDmm2GIjiQGnjzJ6gI");
	this.shape_4.setTransform(351.3,339);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFBCC").s().p("Egh+g0uMBB7AAAIAADJQp7AImoDzQmJDjjmG1QjOGKhZJTQhHH0gBLVQAAXrGwNKQIbQWS3APMhD8AABg");
	this.shape_5.setTransform(215.1,329);

	this.instance = new lib.Group_2();
	this.instance.setTransform(220.9,329,1,0.991,0,0,0,222.5,337.5);
	this.instance.alpha = 0.078;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4}]},31).to({state:[]},10).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4}]},35).to({state:[]},11).wait(54));

	// screen1
	this.screen1 = new lib.screen1();
	this.screen1.setTransform(554.4,390.7,1,1,0,0,0,352.7,328.2);

	this.timeline.addTween(cjs.Tween.get(this.screen1).to({_off:true},1).wait(140));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("EAzxAcEQgMgCgKgDIgFgCIgCAAQgPgLgFgTQgCgHgBgKIAAgPQAAgdAKgMQADgEAGgDIAEgBIAEgCIARgDIAegCQATgBAQABQASABALAEQAGACAEAGQAFAFADAIQACAHACAKQABAJAAAJIgCATQgCAJgDAHQgDAIgEAFQgFAFgFABQgaAIgYACIgQABIgTgBg");
	var mask_graphics_13 = new cjs.Graphics().p("EAwZAdkQgygGgogNIgXgIIgHgDQhAgrgUhQQgIgegCgnIgChBQABh2AogyQAPgSAWgKIATgIIARgFQASgGA1gGQA8gIBBgDQBOgDBAAEQBLAFAvAQQAYAJATAXQASAVAMAhQALAgAGAmQAFAlgBAoQgBAogHAlQgHAmgNAeQgNAggSAUQgSAWgXAGQhrAfhiAJQgjADgiAAQgpAAglgEg");
	var mask_graphics_14 = new cjs.Graphics().p("EAtAAfEQhXgKhHgWQgWgHgRgIIgOgGQhvhLgkiNQgNg1gEhFQgCghgBhRQAAjQBIhWQAaggAmgTQAPgHASgGIAegJQAhgKBdgMQBqgNBxgFQCKgHBwAIQCFAJBSAdQAqAOAiApQAfAmAVA6QAUA3AJBEQAKBBgCBGQgCBGgMBBQgMBCgWA2QgXA4ggAkQghAmgoALQi7A3isAPQhAAFg7AAQhHAAhDgHg");
	var mask_graphics_15 = new cjs.Graphics().p("EApoAgkQh9gPhlgfQgggKgZgLIgTgIQighsgzjKQgThMgGhiQgDgwgBhzQABkrBmh7QAmguA3gbQAUgJAbgJIArgOQAugOCFgQQCYgTCjgIQDFgJCgALQC+ANB1ApQA9AVAwA6QAtA2AeBTQAdBPANBhQAOBegDBkQgCBkgSBdQgSBfgfBNQghBQgtAzQgvA2g5ARQkNBPj2AVQhbAIhVAAQhmAAhfgLg");
	var mask_graphics_16 = new cjs.Graphics().p("EAmQAiEQijgTiDgpQgpgNghgOIgZgLQjQiMhCkHQgZhjgIiAQgEg9gBiXQABmECFihQAwg8BIgiQAbgNAigLIA5gSQA8gTCtgVQDGgZDTgKQEBgMDQAPQD4ARCYA1QBQAbA+BMQA6BHAnBsQAmBmARB+QARB6gDCDQgDCCgXB5QgXB8gpBjQgrBpg6BCQg9BHhLAWQldBmlBAcQh2AKhvAAQiEAAh8gOg");
	var mask_graphics_17 = new cjs.Graphics().p("EAi4AjkQjIgXijgzQgygQgpgRIgfgNQj/ithSlEQgfh6gJidQgFhMgCi6QACneCjjGQA8hJBZgrQAggPArgPIBFgVQBKgXDWgbQDzgeEEgMQE9gPEAASQExAVC8BBQBiAiBNBdQBHBXAxCFQAuB+AVCcQAVCWgEChQgECfgcCWQgcCZgzB6Qg0CBhIBSQhMBXhbAbQmvB+mLAiQiRAMiJAAQijAAiYgRg");
	var mask_graphics_18 = new cjs.Graphics().p("EAfgAlEQjugcjBg8Qg8gTgwgUIglgQQkwjOhhmAQgkiRgMi7QgFhagCjdQABo3DDjsQBHhXBpgyQAngTAygRIBTgYQBYgbD+gfQEhgkE1gPQF4gREwAVQFrAYDfBOQB0AnBbBvQBVBnA6CeQA3CVAZC5QAZCzgFC/QgEC9ghCyQgiC2g8CRQg/CZhVBhQhaBohtAgQn/CVnWApQisAOijAAQjBAAi1gUg");
	var mask_graphics_19 = new cjs.Graphics().p("EAcIAmkQkUggjfhGQhGgWg4gXIgqgSQlgjvhwm9QgringNjaQgHhogCj/QACqSDhkPQBThlB6g6QAtgVA6gUIBfgeQBmgfEmglQFPgqFmgQQG0gVFgAZQGkAcEDBaQCGAvBqCBQBiB1BDC3QBACtAdDXQAdDOgFDeQgGDbgmDOQgoDShFCpQhJCxhiBxQhpB4h9AkQpRCuogAvQjHARi9AAQjgAAjRgYg");
	var mask_graphics_20 = new cjs.Graphics().p("EAYvAoEQk5glj9hPQhQgZhAgaIgwgVQmQkPh/n6Qgwi+gPj3QgIh3gDkiQADrrD/k1QBfhyCKhDQAzgYBDgWIBsgiQB0gkFOgqQF9gvGXgTQHugXGRAbQHeAhEmBmQCZA2B4CSQBvCIBMDQQBIDDAiDzQAhDrgGD8QgGD5gsDqQgtDvhPDAQhSDJhwCAQh3CJiPApQqhDFprA2QjiATjXAAQj/AAjugbg");
	var mask_graphics_21 = new cjs.Graphics().p("EAVXApkQlfgpkchYQhZgchHgeIg2gXQnAkwiNo3Qg2jVgRkVQgIiEgDlGQADtDEclcQBpiACchKQA5gcBKgZIB6glQCCgpF2guQGqg2HIgVQIqgaHBAfQIXAlFJBzQCsA7CGCkQB9CYBWDpQBQDdAmEOQAlEIgHEZQgHEYgxEGQgyEMhYDXQhdDhh9CQQiFCYihAvQryDdq1A8Qj9AVjxAAQkdAAkLgeg");
	var mask_graphics_22 = new cjs.Graphics().p("EAR/ArEQmEgtk7hiQhigfhQghIg7gaQnulQifp0Qg7jsgTkyQgJiTgEloQAEueE8mBQB1iOCqhSQA/geBTgcICGgqQCQgsGeg0QHZg7H5gXQJlgdHxAiQJRApFsB/QC+BCCVC1QCLCpBeECQBZD0AqEsQApEjgIE4QgIE2g2EiQg3EphiDtQhmD7iLCeQiUCpixA0QtDD0sABCQkYAZkLAAQk8AAkngig");
	var mask_graphics_23 = new cjs.Graphics().p("EAOnAskQmqgylZhrQhsgihVgkIhBgcQohlxitqxQhCkDgUlQQgKihgEmLQADv3FcmmQCAicC8hbQBGghBageICSguQCegxHGg5QIGhAIqgaQKhgfIhAlQKKAtGQCLQDQBICkDHQCYC5BnEbQBiEMAuFLQAtE+gJFWQgIFUg8E+Qg9FFhrEFQhwETiYCtQiiC6jDA5QuTEMtLBIQk0AbkjAAQlbAAlEglg");
	var mask_graphics_24 = new cjs.Graphics().p("EALPAuEQnQg2l2h1Qh1glhfgnIhHgfQpQmRi9ruQhHkagXltQgLiwgEmuQAExRF6nLQCMiqDNhiQBLgkBjghIChgyQCrg2Htg9QI0hHJagcQLdgiJRApQLEAxGzCXQDjBPCxDYQCmDKBwE0QBrEjAyFpQAxFagKF0QgJFyhAFaQhDFih1EcQh6ErilC9QiwDKjUA+QvlEjuUBPQlQAdk9AAQl6AAlggog");
	var mask_graphics_25 = new cjs.Graphics().p("EAH3AvjQn2g5mUh/Qh/gohmgqIhNgiQqBmxjMsrQhNkxgYmLQgMi9gEnRQAEyrGZnxQCXi4DdhqQBSgnBqgkICug2QC6g5IVhDQJhhMKMgeQMYglKBAsQL9A0HXCkQD1BWDADpQCzDaB6FNQBzE7A2GGQA1F4gLGRQgJGQhGF2QhIF/h+EzQiEFDizDMQi/DbjlBDQw1E7vfBVQlrAflXAAQmYAAl9gsg");
	var mask_graphics_26 = new cjs.Graphics().p("EAEfAxDQoag+m0iIQiJgrhugtIhSgkQqxnTjctnQhSlIgbmoQgMjMgFn0QAF0FG3oWQCijGDvhyQBXgpBzgnIC7g6QDHg+I/hHQKOhSK8ghQNUgoKxAwQM3A4H5CwQEIBcDPD7QDADrCDFmQB8FTA6GjQA5GUgLGvQgLGuhLGSQhNGciIFKQiOFbjADcQjNDrj2BIQyHFSwpBcQmGAilxAAQm3AAmZgwg");
	var mask_graphics_27 = new cjs.Graphics().p("EABGAyjQo/hCnTiSQiSguh1gvIhZgoQrgnzjrujQhZlfgcnHQgNjagFoVQAE1gHXo8QCtjTD/h6QBegtB6gpIDIg+QDWhCJnhNQK7hYLugiQOPgrLhAzQNwA8IdC9QEaBiDdENQDOD6CMF/QCFFrA+HAQA9GxgMHNQgMHMhQGuQhSG5iSFhQiYFzjNDrQjcD7kHBNQzXFrx0BiQmhAkmLAAQnVAAm3gzg");
	var mask_graphics_28 = new cjs.Graphics().p("EgCQA0DQpmhGnyicQicgwh9gzIhegqQsRoUj6vgQhel2genlQgPjogFo4QAF26H1phQC5jhEQiCQBkgvCCgsIDVhDQDjhGKQhSQLphdMeglQPLgtMRA2QOqBAJADJQEsBoDsEfQDbEKCVGZQCOGCBCHdQBAHNgMHsQgMHqhWHKQhYHViaF5QiiGLjbD7QjqELkZBSQ0oGCy+BpQm8AmmlAAQn0AAnRg2g");
	var mask_graphics_29 = new cjs.Graphics().p("EgFoA1jQqMhLoQikQilg0iFg2IhkgtQtBo0kKwdQhkmNggoCQgPj3gFpaQAF4VIUqGQDEjvEgiKQBqgyCLgvIDihGQDxhLK3hWQMXhjNQgoQQGgwNBA6QPjBEJkDVQE/BvD5EwQDpEbCfGxQCVGaBHH7QBEHpgNIMQgNIGhbHmQhdHyikGPQisGkjoEKQj4EckqBXQ15Ga0JBvQnXApm/AAQoSAAnug6g");
	var mask_graphics_30 = new cjs.Graphics().p("EgJAA4CQqyhQoviuQiug3iNg5IhpgvQtypVkYxaQhqmkgiofQgQkFgGp+QAG5uIyqrQDQj9ExiSQBwg1CSgxIDvhLQD/hPLghcQNHhoN+gqQRBgzNyA9QQdBIKHDhQFRB2EIFBQD2EsCoHKQCeGyBLIYQBIIFgOIqQgNIkhgICQhjIPiuGnQi1G7j3EaQkGEsk7BcQ3KGy1TB1QnyArnZAAQovAAoMg8g");
	var mask_graphics_57 = new cjs.Graphics().p("EAzxAcEQgMgCgKgDIgFgCIgCAAQgPgLgFgTQgCgHgBgKIAAgPQAAgdAKgMQADgEAGgDIAEgBIAEgCIARgDIAegCQATgBAQABQASABALAEQAGACAEAGQAFAFADAIQACAHACAKQABAJAAAJIgCATQgCAJgDAHQgDAIgEAFQgFAFgFABQgaAIgYACIgQABIgTgBg");
	var mask_graphics_58 = new cjs.Graphics().p("EAwkAdfQgwgGgmgMIgWgIIgHgDQg9gpgUhNQgHgdgCglIgCg/QABhxAngvQAOgSAVgKIASgHIAQgFQASgGAzgGQA6gHA9gDQBMgEA9AFQBIAFAtAPQAXAIASAWQARAVAMAgQALAeAFAlQAFAjgBAnQgBAmgHAjQgGAkgMAeQgNAegRAUQgSAUgWAHQhmAeheAIQgjADggAAQgnAAgkgEg");
	var mask_graphics_59 = new cjs.Graphics().p("EAtXAe6QhTgKhEgVQgVgHgRgHIgMgFQhrhIgiiHQgNgzgEhBQgCggAAhNQAAjHBEhSQAZgfAlgRQAOgHARgGIAdgJQAfgJBZgLQBlgNBsgFQCEgGBqAHQCAAJBOAbQAoAOAgAnQAeAkAUA4QATA0AJBBQAJA+gCBDQgBBCgMA/QgMA/gVAzQgWA2gdAiQggAkgmALQizA0ilAPQg8AFg5AAQhEAAg/gHg");
	var mask_graphics_60 = new cjs.Graphics().p("EAqKAgUQh3gNhggeQgegKgYgKIgTgIQiYhngwjAQgShIgGheQgDgtgBhuQABkcBhh2QAkgsA1gZQATgJAZgIIApgNQAsgOB/gQQCRgSCagHQC8gJCYALQC2AMBwAnQA6AUAtA4QArAzAdBPQAbBLANBdQAMBZgCBfQgCBfgRBZQgRBbgeBJQgfBMgrAxQgtA0g2APQkABLjrAVQhWAHhRAAQhhAAhbgLg");
	var mask_graphics_61 = new cjs.Graphics().p("EAm+AhvQibgRh9gnQgngNgggNIgYgKQjFiGg/j6QgYhegHh6QgEg6gBiQQABlxB+iZQAug4BFghQAZgMAhgLIA1gRQA6gSClgUQC8gYDJgJQD0gLDFANQDsAQCRAzQBMAaA7BIQA3BDAmBnQAkBhAQB5QARB0gEB8QgDB7gVBzQgWB3gnBeQgpBkg3A/Qg7BDhHAVQlMBhkxAaQhwAKhqAAQh+AAh1gOg");
	var mask_graphics_62 = new cjs.Graphics().p("EAjxAjKQi/gWiagwQgwgPgngQIgdgNQjzikhNk0QgehzgJiWQgEhIgCixQACnGCbi9QA5hFBUgpQAfgOApgOIBBgUQBHgWDLgaQDngcD4gMQEsgODzARQEjAUCyA+QBdAgBJBZQBEBTAuB+QAsB4AVCUQAUCOgECZQgECYgaCOQgcCRgwB1QgyB6hEBOQhIBThXAZQmZB4l4AgQiJAMiDAAQibAAiQgRg");
	var mask_graphics_63 = new cjs.Graphics().p("EAgkAklQjigai3g5Qg5gSgugTIgjgPQkhjDhcluQgiiJgLiyQgGhWgCjRQACobC5jgQBEhTBjgwQAlgRAwgRIBPgYQBTgaDxgeQETggEmgOQFlgREgAUQFZAWDUBKQBvAmBWBqQBRBiA3CWQA0COAYCwQAYCpgFC2QgEC0ggCoQggCtg5CKQg7CShRBcQhWBihnAfQnmCNm+AnQikAOiaAAQi4AAisgUg");
	var mask_graphics_64 = new cjs.Graphics().p("EAdXAmAQkFgejUhCQhDgVg1gWIgogRQlOjjhrmmQgoiggNjOQgGhjgCjyQACpxDVkDQBPheB0g3QAqgVA4gSIBbgdQBggeEYgiQE+goFUgQQGdgTFOAXQGQAbD1BWQCAAsBkB6QBeBwA/CuQA8CkAdDLQAbDFgFDSQgFDRglDDQglDIhCCgQhFCohdBrQhkByh3AjQozCkoFAtQi9AQizAAQjVAAjHgXg");
	var mask_graphics_65 = new cjs.Graphics().p("EAaKAnbQkpgijxhLQhLgYg9gZIgtgUQl8kBh5ngQgui1gOjrQgHhwgDkUQADrFDyklQBahtCDg/QAwgXBAgVIBnggQBugiE9goQFpgtGDgSQHVgWF8AbQHGAfEXBhQCRAyByCLQBqCBBJDEQBEC6AgDnQAfDfgGDvQgGDtgpDeQgrDjhKC2QhPDAhqB5QhxCBiIAoQp/C7pLAzQjXASjMAAQjyAAjigag");
	var mask_graphics_66 = new cjs.Graphics().p("EAW+Ao2QlNgmkOhUQhUgbhEgcIgzgWQmqkgiHoaQgzjLgRkGQgHh+gDk1QACsZEQlKQBkh6CThGQA3gaBGgYIB0gkQB7gmFjgsQGVgzGxgUQIOgYGpAdQH8AjE5BtQCjA4B/CcQB3CQBRDdQBNDQAjECQAjD6gGEMQgHEJguD5QgwD+hUDMQhXDWh3CIQh/CRiYAtQrMDRqSA5QjwAUjkAAQkPAAj9gdg");
	var mask_graphics_67 = new cjs.Graphics().p("EATxAqRQlxgqkqheQhegdhLgfIg4gZQnVk/iWpTQg5jhgSkiQgJiLgDlWQADtuEtluQBtiHCjhOQA8gcBOgaICAgoQCIgqGJgxQHBg4HfgXQJGgbHXAhQIzAmFaB5QC0A+CNCsQCECgBZD1QBVDoAoEcQAnEVgIEoQgHEmg0ETQg0EahdDhQhhDuiECWQiMChioAxQsYDnrZA/QkKAXj9AAQksAAkYggg");
	var mask_graphics_68 = new cjs.Graphics().p("EAQkArsQmUgvlIhmQhmgghTgiIg9gbQoDleilqNQg+j2gTk/QgKiZgDl3QADvDFKmQQB5iUCzhWQBAgfBWgdICMgsQCVguGwg2QHrg9IOgZQJ+gdIFAjQJpAqF8CFQDFBECbC9QCRCvBiENQBdD+ArE4QArEwgIFFQgIFCg5EuQg6E0hlD4QhrEEiQClQiaCwi5A2QtkD+sfBFQklAZkVAAQlJAAkzgjg");
	var mask_graphics_69 = new cjs.Graphics().p("EANXAtHQm4gzlkhvQhugjhZglIhEgdQoyl9izrHQhDkMgWlbQgKimgEmYQAEwYFmm0QCFihDChdQBIgiBdggICZgvQChgzHVg6QIXhDI8gbQK3ggIyAnQKgAuGdCQQDXBKCoDNQCdDABrEkQBlEUAwFWQAuFIgJFiQgJFfg9FIQg/FQhvENQh0EcidCzQinDAjJA7QuxEUtmBLQk+AbktAAQlmAAlPgmg");
	var mask_graphics_70 = new cjs.Graphics().p("EAKLAuiQncg3mAh4Qh4gmhhgoIhJggQpfmbjCsBQhJkhgXl3QgLi0gFm5QAExuGEnXQCPiuDThlQBNglBlgiIClgzQCwg2H5hAQJDhIJqgdQLvgjJgAqQLWAyG+CbQDpBRC2DeQCqDPB0E8QBtErAzFxQAyFjgKF+QgJF8hCFiQhEFsh4EjQh9EyiqDCQi1DPjZBAQv+ErusBRQlYAdlGAAQmDAAlpgpg");
	var mask_graphics_71 = new cjs.Graphics().p("EAG+Av9Qn+g7meiBQiBgphogrIhPgiQqNm7jQs6QhPk3gZmTQgMjBgEnaQAEzDGhn7QCai7DihsQBTgoBtgkICxg4QC9g6IghEQJthOKZgfQMoglKNAtQMMA1HgCnQD6BXDEDvQC3DeB8FUQB1FBA4GNQA1GAgKGZQgKGYhHF9QhKGGiAE6QiHFJi2DQQjDDfjpBEQxLFCvzBXQlxAgleAAQmhAAmEgtg");
	var mask_graphics_72 = new cjs.Graphics().p("EADxAxYQohg/m7iKQiLgshvguIhUglQq7nZjft0QhTlNgbmvQgNjOgFn6QAF0ZG+oeQCkjJDyh0QBZgqB0gnIC+g7QDKg/JIhIQKXhTLHgiQNggoK7AwQNDA6IBCyQEMBdDRD/QDDDuCFFsQB+FXA7GpQA6GbgMG1QgKG0hNGYQhOGiiKFPQiQFgjDDfQjQDvj6BJQyXFXw5BeQmMAil2AAQm9AAmggwg");
	var mask_graphics_73 = new cjs.Graphics().p("EAAkAyzQpFhEnYiTQiTguh3gwIhZgoQrpn4jtuuQhZligdnLQgNjdgFoaQAE1vHcpBQCvjWECh7QBegtB8gqIDKg/QDYhCJthOQLDhYL1gjQOYgrLpAzQN5A9IjC+QEdBjDfEQQDQD9COGDQCGFuA/HFQA9G1gMHSQgMHRhRGzQhTG9iTFlQiZF3jQDtQjeD+kKBOQzkFux/BjQmmAlmPAAQnaAAm7gzg");
	var mask_graphics_74 = new cjs.Graphics().p("EgCnA0OQpqhIn1icQidgxh9gzIhfgqQsWoYj8vnQhfl4gennQgOjqgGo7QAF3EH5plQC5jjESiCQBlgwCDgsIDWhDQDlhHKUhSQLtheMkglQPRguMWA3QOwBAJEDKQEuBpDtEhQDdEMCWGbQCOGFBDHgQBBHQgNHvQgMHthWHNQhZHZibF6QijGOjdD8QjrEOkaBSQ0xGFzGBpQm/AnmnAAQn4AAnUg2g");
	var mask_graphics_75 = new cjs.Graphics().p("EgFzA1oQqPhLoRilQimg0iFg2IhkgtQtEo2kKwgQhkmOggoEQgQj3gFpdQAF4ZIVqIQDFjvEhiLQBrgyCKgvIDjhHQDyhLK6hXQMZhjNSgnQQJgxNEA6QPmBEJmDWQFABvD6ExQDqEcCeGzQCXGbBGH8QBFHrgNINQgNIIhbHoQheHzikGRQitGljpEKQj5EdkrBYQ19Gb0MBvQnZApnAAAQoUAAnvg6g");
	var mask_graphics_76 = new cjs.Graphics().p("EgJAA4CQqyhQoviuQiug3iNg5IhpgvQtypVkYxaQhqmkgiofQgQkFgGp+QAG5uIyqrQDQj9ExiSQBwg1CSgxIDvhLQD/hPLghcQNHhoN+gqQRBgzNyA9QQdBIKHDhQFRB2EIFBQD2EsCoHKQCeGyBLIYQBIIFgOIqQgNIkhgICQhjIPiuGnQi1G7j3EaQkGEsk7BcQ3KGy1TB1QnyArnZAAQovAAoMg8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:342.2,y:179.7}).wait(1).to({graphics:mask_graphics_13,x:354.9,y:189.7}).wait(1).to({graphics:mask_graphics_14,x:367.7,y:199.6}).wait(1).to({graphics:mask_graphics_15,x:380.4,y:209.5}).wait(1).to({graphics:mask_graphics_16,x:393.1,y:219.4}).wait(1).to({graphics:mask_graphics_17,x:405.8,y:229.4}).wait(1).to({graphics:mask_graphics_18,x:418.6,y:239.3}).wait(1).to({graphics:mask_graphics_19,x:431.3,y:249.2}).wait(1).to({graphics:mask_graphics_20,x:444,y:259.1}).wait(1).to({graphics:mask_graphics_21,x:456.8,y:269.1}).wait(1).to({graphics:mask_graphics_22,x:469.5,y:279}).wait(1).to({graphics:mask_graphics_23,x:482.2,y:288.9}).wait(1).to({graphics:mask_graphics_24,x:494.9,y:298.9}).wait(1).to({graphics:mask_graphics_25,x:507.7,y:308.8}).wait(1).to({graphics:mask_graphics_26,x:520.4,y:318.7}).wait(1).to({graphics:mask_graphics_27,x:533.1,y:328.6}).wait(1).to({graphics:mask_graphics_28,x:545.8,y:338.6}).wait(1).to({graphics:mask_graphics_29,x:558.6,y:348.5}).wait(1).to({graphics:mask_graphics_30,x:571.3,y:350.8}).wait(1).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_graphics_57,x:342.2,y:179.7}).wait(1).to({graphics:mask_graphics_58,x:354.3,y:189.1}).wait(1).to({graphics:mask_graphics_59,x:366.3,y:198.5}).wait(1).to({graphics:mask_graphics_60,x:378.4,y:207.9}).wait(1).to({graphics:mask_graphics_61,x:390.4,y:217.3}).wait(1).to({graphics:mask_graphics_62,x:402.5,y:226.8}).wait(1).to({graphics:mask_graphics_63,x:414.6,y:236.2}).wait(1).to({graphics:mask_graphics_64,x:426.6,y:245.6}).wait(1).to({graphics:mask_graphics_65,x:438.7,y:255}).wait(1).to({graphics:mask_graphics_66,x:450.7,y:264.4}).wait(1).to({graphics:mask_graphics_67,x:462.8,y:273.8}).wait(1).to({graphics:mask_graphics_68,x:474.8,y:283.2}).wait(1).to({graphics:mask_graphics_69,x:486.9,y:292.6}).wait(1).to({graphics:mask_graphics_70,x:499,y:302}).wait(1).to({graphics:mask_graphics_71,x:511,y:311.4}).wait(1).to({graphics:mask_graphics_72,x:523.1,y:320.8}).wait(1).to({graphics:mask_graphics_73,x:535.1,y:330.2}).wait(1).to({graphics:mask_graphics_74,x:547.2,y:339.6}).wait(1).to({graphics:mask_graphics_75,x:559.2,y:349}).wait(1).to({graphics:mask_graphics_76,x:571.3,y:350.8}).wait(65));

	// screen345
	this.screen345 = new lib.screen345();
	this.screen345.setTransform(625.9,325.2,1,1,0,0,0,87.5,210.2);
	this.screen345._off = true;

	this.screen345.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.screen345).wait(12).to({_off:false},0).to({_off:true},29).wait(100));

	// screen711
	this.screen711 = new lib.screen711();
	this.screen711.setTransform(560.9,155.5,1,1,0,0,0,22.5,40.5);
	this.screen711._off = true;

	this.screen711.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.screen711).wait(57).to({_off:false},0).to({_off:true},30).wait(54));

	// yell bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFBCC").s().p("EhcxBE8MAAAiJ3MC5kAAAMAAACJ3g");
	this.shape_6.setTransform(509.7,383.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},87).wait(54));

	// clock
	this.clock = new lib.clock();
	this.clock.setTransform(374,104.1,1,1,0,0,0,44,43.8);
	this.clock._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clock).wait(96).to({_off:false},0).wait(45));

	// screen12
	this.instance_1 = new lib.screen12text();
	this.instance_1.setTransform(512,92.8,1,1,0,0,0,181.8,22.4);

	this.instance_2 = new lib.NEWKara("single",0);
	this.instance_2.setTransform(508.7,324.9,0.88,0.88,0,0,0,66.7,229.7);

	this.instance_3 = new lib.WINDOW();
	this.instance_3.setTransform(870,200,1,1,0,0,0,92.2,101.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},87).to({state:[]},9).wait(45));

	// screen13
	this.screen13 = new lib.Long_Acting();
	this.screen13.setTransform(670.4,275.9,1,1,0,0,0,340.2,205.5);
	this.screen13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen13).wait(96).to({_off:false},0).to({_off:true},9).wait(36));

	// screen14
	this.screen14 = new lib.Breakfast();
	this.screen14.setTransform(670.4,275.9,1,1,0,0,0,340.2,205.5);
	this.screen14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen14).wait(105).to({_off:false},0).to({_off:true},9).wait(27));

	// screen15
	this.screen15 = new lib.Lunch();
	this.screen15.setTransform(670.4,275.9,1,1,0,0,0,340.2,205.5);
	this.screen15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen15).wait(114).to({_off:false},0).to({_off:true},9).wait(18));

	// screen16
	this.screen16 = new lib.Dinner();
	this.screen16.setTransform(670.4,275.9,1,1,0,0,0,340.2,205.5);
	this.screen16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen16).wait(123).to({_off:false},0).to({_off:true},9).wait(9));

	// screen17
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#584233").s().p("AAGAqQhggDhBgwQgMgKAIgOQAIgOAMAKQA2AnBVAIQBdAJAmgyQAKgNAOAIQAOAIgKANQgrA5hgAAIgOAAg");
	this.shape_7.setTransform(512.6,389.1);

	this.instance_4 = new lib.ClipGroup_2_1();
	this.instance_4.setTransform(540.1,333.8,1,1,0,0,0,7,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQAAgDAEgDQADgDAEgBQAEAAAEAEQADADAAADQABAEgEADQgDAEgFAAIAAAAQgDAAgEgDg");
	this.shape_8.setTransform(539,329.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWBMQgOgNgEgVQgGgfACgXQgBgaAJgTQAAgEAEgDQAEgGAGgFQAWgQAUAQQASAOAEAXQAGAggFAbQgHAkgWATQgKAIgHAAQgKAAgJgIg");
	this.shape_9.setTransform(541.1,332.8);

	this.instance_5 = new lib.ClipGroup_1_1();
	this.instance_5.setTransform(490.4,335.3,1,1,0,0,0,7,17.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQgBgDAEgDQADgDAEgBQAEAAAEADQADAEABADQAAAEgEADQgDADgFABQgDAAgEgDg");
	this.shape_10.setTransform(489.3,331.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWBMQgNgNgFgVQgGgdACgZQAAgdAIgQQAAgEAEgDQAEgGAGgFQAWgQAUAQQASANAEAYQAGAggFAbQgHAkgWATQgKAIgIAAQgJAAgJgIg");
	this.shape_11.setTransform(491.4,334.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A2E26").s().p("AoOEfQgMgDgBgNQgEg3gBgdQgBg1AUgaICOiyQAbgiAHgHQARgRAZgKIFsiTQAPgGAEAQQAEAQgOAGIluCUQgLADgHADIgDAFIgzBBIhABTQgnAzgdAeIgCACIAAgBIAAABIAAAAIAAAoIABAvQAggiAzgeICHhPQAwgiBhhJQBXg8BMgIQAtgFBKAQQBeATAZACQCtAOBUhpQAKgNAMAMQAMAMgKAMQhDBUh1AOQhLAJiKgWIgwgKQgdgGgUgBQg0AAg+AeQgoAUgwAiIhSBAQg6AthPAqQgwAZgaAUQglAcgVAiQgFAIgJAAIgFgBg");
	this.shape_12.setTransform(499.5,280.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A2E26").s().p("AoNCEIDDj0IGFieIHTCAQhGBdiOAFQgtABg1gIIg5gJQgRgBgcgHQgfgHgNgCQhegNhzBPQgYAPhEA1Qg4AtglAWQhLAngkAWQg+AngbAvg");
	this.shape_13.setTransform(499.7,280.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#584233").s().p("AgnBDQAAgMAMgBQAjgDAagUQAfgXgKghQgKghgsAFQgfAEggASQgKAGgGgKQgGgLAKgGQApgZArAAQA4AAAMAtQANAugmAgQggAcgwAEIgCAAQgKAAAAgLg");
	this.shape_14.setTransform(516,354.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B68E68").s().p("AhRBpIASipQAhhIA3AUQAZAJAQAYQAQAaAAAhQgCA4g4A2QgiAjgfAAQgVAAgTgQg");
	this.shape_15.setTransform(588.8,333.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A2E26").s().p("Ap/LSQgWhfgIhtQglnnCnj/QAyhNBSg4QBLg0BfgdQDMg+DXA+QAhAJAlAAIBHgFQA3gEAiAUQAmAWAgAzQAOAVAjBFIA2ByQAhBFAZArQAZApAMARQAhAuAOgKQAEgDABgWIAAgcQADgUgPgqQgTgvgHgVIh+lnIgIgaQgFgPgIgIQgPgPglgPQgqgOgQgIIkAhxIgSgIQgEgBgPAAQhCADi+ASIiSANIg3ADQgjACgSAIQgLAGgNAOIgUAZIj3EXQghAlgJAMQgWAfgEAZQgHAmABA/IADBlIgED8QgDC2AECSQABAPgRAAQgQAAAAgPIgBhPQgBjAADjBIAEkJQAAguAHgaQAJgdAaglQASgaAggkIA3g7ICyjJIARgVQALgNAIgHQAPgNAdgFQAQgCAggCIEugbQBRgHArgDIAcgBQAQgBALAEQAsANBCAgIBsA0ICDA6QAbAMAJAGQAQALAIATQAPAiARA1IAdBXIBbEEIAOAlQAJAXADAPQADANgBAQIgDAfQgDAbgHALQgKARgYgCQgmgEgjg1QgIgKgnhIQgTgkgkhNQgkhLgUgmQgZgwgLgQQgXgkgagRQgbgSgqACQgwAHgYABQgbABghgHQgRgEgrgNQhEgUhDgBQhxgDhsAeQj1BFhjDkQgjBRgUBeQgQBQgHBpQgSEGAvDNQAEAQgQAEIgHABQgKAAgCgMg");
	this.shape_16.setTransform(513.1,313.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3A2E26").s().p("ArrIuIgCkQIAIoHQAAgDAUgjQAUghADgDIE4lhQAKgLAPgBQIIgxAIAFQAGAEChBHIDWBfQAQAGAFAQIC1IHIgHBHQgHAUgYgIQgVgIgQgVQgug+g7h8QhEiPgfgyQgrhFgtgPQgagIgrAFQg6AHgMAAQgbgBgngLQgrgOgWgFQg0gOhHAAQieAAiFA5QiUBAhMB2QgTAdgSApIgfBIQgvBpgODmQgQECAuDHg");
	this.shape_17.setTransform(513.1,313.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B68E68").s().p("AoaJeQiyjcgZl8QgMi6A4ikQA0iaBqh1QBnhwCKg+QCLg9CZgBQFsgBDTD8QBgB0AtCaQAsCagOCrQgeF0iwDlQjBD8k9ADIgIABQljAAjHj2g");
	this.shape_18.setTransform(512.3,330.8);

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(512.3,333,1,1,0,0,0,74.4,85.2);
	this.instance_6.alpha = 0.102;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A2E26").s().p("AhMgKQAIgCBJgfQBIgWAAAjQAAALgSAHIgnAMQg1ARABAjg");
	this.shape_19.setTransform(552.3,241.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3A2E26").s().p("Ag+AyIA0hPQArg8AYAQQATALgmA9QgvBLgBAEg");
	this.shape_20.setTransform(546.5,233.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3A2E26").s().p("AgUAdIAKgqQAHghAJABQAOABABApIgBAxg");
	this.shape_21.setTransform(539.8,235.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B68E68").s().p("AiAEQQgig1AAiAQAKgXAJgyQAShhgHiCQgEhIAtgeQAngZA7ALQA5AKAoAiQAqAkgKAkQgRBAAUB4QALA7ANAvQAACFgiA4QglA7hcAAQhbAAglg5g");
	this.shape_22.setTransform(515.8,415.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3A2E26").s().p("AiWP9Qj7gdkghKQgJgCgCgJQg0j8gYjHQgej1AFjTQAEjcAiidQAtjSBmiJQBmiJCjhUQClhVCqAAQBfAABVAdQAlAMArAXIBLArQAdARA6AHQA8AHAbANQA5AdBCBDQB9CAAqC9QAiCdgXDOQgCAPgQAAQgQABABgQQAWjEgdiTQgki0hzh7Qg7hBg2gdQgbgPgzgGQg4gGgXgJQgZgLgvgdQgugdgbgKQhPgghUgGQiQgKiWA8QiOA5huBqQhoBkg7CdQgvB8gWCvQghEDAhFNQAQCfAdCsQAIAvAVBuQACAGAAAPQAAAPgCgBIAFABIAFABQASALAmAGIA6AKQBvAZBcAQQCFAYBVAKQB6AOBhgFQCbgJC3gkQCLgcC2gyQAOjDADjuQACiggDkdQAAgPARAAQAQAAAAAPQACEogCCVQgDD4gPDFQgBANgLADQhnAchsAZQjMAuiSAQQhgAKhaAAQhVAAhRgKg");
	this.shape_23.setTransform(512.1,332.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3A2E26").s().p("AAPP5QingDkcg5Ij6g4QhPmCgRkrQgVlwBGkUQAkiQBChpQBTiGChhgQChheCmgNQBWgGBTATQBXAUBJAtIAwAeQAcAQAXAEQANACAYABQAZABAMACQAjAGAtAfQBUA8A9BXQA+BXAdBlQAaBaADBuQADBagNByIgBBnQACE+gCCLQgDDrgPDGQh2AhiYAgQkjA/inAAIgPAAg");
	this.shape_24.setTransform(512.2,332.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#55DCF2").s().p("AEQLjQgfnKiIkzQiil2k8iXIi4i6QIQgfEpHcQD4GJAqJ+g");
	this.shape_25.setTransform(573.5,497.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#55DCF2").s().p("AmfERQAuknBSjFQBkjxCsiOQDAiiEqgvIhqERQi+BmhqBwQhnBvg0CZQgvCGgUDcQgMCKgMFlIktAXQAlmJAWiSg");
	this.shape_26.setTransform(460.7,504.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#957356").ss(0.6,0,1).p("ABOgXQAFABAGADQARAIAGALQAHASgWAPQgPAJgLgEQgGgCgFgGAhKhNQAEAAApAOQAmAPAGgBQAFgBALgKQALgMADgBQAPgIANAHQALAGAFANQAEAOgGAKQgEAFgFADQgHADgKAAIgBgCQAIgEAKADAAHAtQAFAJgEAMQgEAPgMgCQgQgCgLgUQgJgPgCgSIhFgfABHAmQAIAIgDAMQgFASgWgDQgKgBgPgLQgLgIgGgIQgBgCgBgC");
	this.shape_27.setTransform(616.5,579.1,1.897,2.2,0,-78.1,106.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B68E68").s().p("AgHBPQgQgCgLgUQgIgPgDgSIhFgfIAphGQAEAAApAOQAnAPAFgBQAGgBAKgKQALgMADgBQAPgIANAHQAMAGAEANQAFAOgHAKQgDAFgGADIAMAEQAQAIAGALQAIASgWAPQgPAJgLgEQAHAIgDAMQgEASgWgDQgLgBgOgLQgMgIgFgIQAEAJgDAMQgEANgKAAIgDAAg");
	this.shape_28.setTransform(616.6,578.8,1.897,2.2,0,-78.1,106.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#957356").ss(0.6,0,1).p("AhKhNQAEAAApAOQAmAPAGgBQAFgBALgKQALgMADgBQAPgIANAHQALAGAFANQAEAOgGAKQgEAFgFADQAFABAGADQARAIAGALQAHASgWAPQgPAJgLgEQgGgCgFgGABOgXQgHADgKAAIgBgCQAIgEAKADgAAHAtQAFAJgEAMQgEAPgMgCQgQgCgLgUQgJgPgCgSIhFgfABHAmQAIAIgDAMQgFASgWgDQgKgBgPgLQgLgIgGgIQgBgCgBgC");
	this.shape_29.setTransform(426.9,592.2,1.897,2.2,0,78.1,73.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B68E68").s().p("AgHBPQgQgCgLgUQgIgPgDgSIhFgfIAphGQAEAAApAOQAnAPAFgBQAGgBAKgKQALgMADgBQAPgIANAHQAMAGAEANQAFAOgHAKQgDAFgGADIAMAEQAQAIAGALQAIASgWAPQgPAJgLgEQAHAIgDAMQgEASgWgDQgLgBgOgLQgMgIgFgIQAEAJgDAMQgEANgKAAIgDAAg");
	this.shape_30.setTransform(426.8,592,1.897,2.2,0,78.1,73.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#303030").s().p("AjWCbIAThBIEEjJIiwgyIAZhVIEtBXIgVBIIj9DEIC8A2IgYBUg");
	this.shape_31.setTransform(733,240);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#303030").s().p("AiHBjIAMgqICkh/IhvggIAPg2IC/A3IgNAuIifB7IB3AjIgPA2g");
	this.shape_32.setTransform(698.6,285.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#303030").s().p("AhCBAIAEgYIBPhQIg+gJIAFgfIBrARIgEAaIhNBNIBCAKIgEAfg");
	this.shape_33.setTransform(642.8,313.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#303030").s().p("AheBKIAIgeIByheIhPgUIAJgnICIAiIgIAhIhuBbIBVAWIgJAng");
	this.shape_34.setTransform(669.9,303.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E87CA0").s().p("At+NSIDV5AQD5hlC+gcQC/gdEJAYQFqAfCBAvQArAQAYAVQANALASASIBcZkg");
	this.shape_35.setTransform(510.7,543.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#55DCF2").s().p("AmsvwIL6ADIDueHIx3BXg");
	this.shape_36.setTransform(523.5,532.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D76888").s().p("Eg7eAOuQgPgEAFgOQAdhQBFhjIBBhbQAlg1AXgpQAeg4AQhIQAKgqAMhcQAOhtA5iDIBujhIB2jxIAihSQAVgvAZgcQBjhtDHgYQBCgHCcgCQCOgBBPgMQBNgNCShAQCOhABRgLQBlgNCFAXIDlA0QCXAhBigCQBngDCVgtIDghGQCCgjBkADQBgADCGArIDfBIQB5AiCLgQQBngMCbgvQEPhTDjgHQDIgGFOAnQGKAuCKAGQBlAECbgKQDbgOAlgBQB+gEBkATQB3AWBcA5QBSAzBMBRQA+BEA/BfQA7BYBICAIB7DcICGDnQBPCJAuBkQA1B0ASBjQAUB3gdBoQgEAPgPgEQgPgEAEgPQAih3giiGQgbhrhEiDIh/jgQjJlkg1hdQhDhzgyhHQhFhjhIhFQivilkEgKQhZgDiaAMQiwAOhEAAQh0ABiMgLQhhgIiegSQlzgriPgGQkigLjeA6QiaAuhOAWQiKAnhjADQhiADh9glQiQgwhJgWQiIgrhjACQhiABiQArQiNAuhHAUQh8AjheAEQhgAEiDgbQiVgkhLgPQiTgehiAJQg7AGhCAYQgqAPhNAjQhfArhjAWQhdAUhuACQiMAAhHAEQh5AHhUAhQhPAeg9BDQgWAYgVA0IgiBTIh1DtQhHCMgqBgQgaA8gQBLQgLAugNBdQgPBvgpBQQgaA0hdCDQhPBvgcBNQgEALgKAAIgGgBg");
	this.shape_37.setTransform(512,546.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E87CA0").s().p("Eg5WAK/QBmiNAahWQAPgvALhWQAMhhAJglQALgvAZg5QANggAhhEIC7l9IAjhJQASgqAKgiIA1g6QBKg8BpgZQBOgTB8gDIDSgEQB5gGBTgaQAvgOBpgwQBhgtA4gOQCMgiDzA4QClAmAcAFQBuAVBVgDQBPgDBjgaQAxgNB+goQDhhJCAAGQBmAEDABCQDDBEBiAGQByAHCggsQBbgZC0g2QCxgqDYAAQCfAADuAaIGQAtQDlAWCqgIQBygFDmgRQDFgDCFA6QCUBBCBCiQBTBoB4DUIEoIMQBjCvAkBxQA1CpgpCGMh2jABPQAchRBoiQg");
	this.shape_38.setTransform(512.1,546.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D7D55A").s().p("AAsR7Qm7gKmvgaQi3gKhugLIhogPQhXgMhuANQg9AIiFAcQgiAHgbgQQgagPgMggQgsh1gLiGQgLh8ATiEQAOhqAvidQBGjrAHgZQAyjFgMkLQgFhdgpl3QgEgmAkgZQAjgaAkAMQCbAyDFgPQB9gKDigyQFdhNExgcQD7gYBPgFQC9gMCQAIQBwAGDIAmQDXApBhAJQCrAOBIACQCMACBmgaQAegHAYAMIAHADQAhARAFAfQAbC+gFD4QgBA/gSF4QgNEHAOCzQAGBNAbCAQAfCTAHA5QAMBcgUBMQgXBag/A0Qg/AzhdgBQgyAAh1gYQhTgRhuALQglADiaAZIiYAZQhZAOg+AMQg1AKhFAEQgiAChZABIhNAAQh8AAiygDgAzJOSQAeAEAkAGIAtAFQBwALDeANQHIAZGPAJQDaAECVgCQBNgCA2gEQAYgBAWgDQgSACAKgCIAWgDQBEgOBngQICsgbQCIgWA8gEQBtgJBYAPIA8AOQApAKAaACQBQAGAZg4QAcg+gShiQgdhvgKgxQgjipgDjRQgCiMANjuQAPkUAChpQACingOiKQhYAMhpgBQhlgBi5gSQhTgIj2gtQjMgmh+gCQiZgBi9AOQh8AJjYAYQiKAOi+AmQjYAthtAWQi6AkiNADQhvAChkgSQAeEZAEBLQAOEHgtDDQgRBNg5C7Qg0CmgRBiQgWB3AKB3QAHBUAVBNQBYgRA1gGQBFgJA9AAQAvAAAqAFg");
	this.shape_39.setTransform(513.3,368.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D7D55A").s().p("AkEQgQsRgdiOgbQhkgUh+AOQhNAIiWAfQgwh7gHiaQgGiTAgiJQARhKA5i9QAyilAThhQAfifgQkKQgGhkgklJQDIBEEYgpQCigXFFhLQCMgbCwgTQBygMDKgQQC0gOBagCQCWgEB3AOQBMAJCnAhQCdAgBWAIQF/AkClgrQAZCogDDcQgCBlgQEkQgNDzAECRQAFDVAmCqIAZBmQANA8ACAtQACA5gPAwQgRA2gjAfQgxAshWgHIiWgcQhHgMhZAHQg4AEhpARIluA7Qg2AUkOAAQjgAAl0gOg");
	this.shape_40.setTransform(513.3,369);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D2A16B").s().p("EgrdAbtQADhpAJnVQAIm0AFiKQAOmQAxkcQBAlvCGkcQDjneGqkTQFJjVIdiIQN8jgTlDTQFsA9EBByQFCCPC3DqQBTBsBECQQA1B0A1ChQC6I3AhJZQAhJch8JIIgZAeMglgAEfg");
	this.shape_41.setTransform(513.8,312.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A47F58").s().p("AiIeuQg6g5AAhRMAAAg5HQAAhRA6g5QA5g5BPgBQBQABA5A5QA6A5AABRMAAAA5HQAABRg6A5Qg5A5hQABQhPgBg5g5g");
	this.shape_42.setTransform(792,285.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A47F58").s().p("EgCIAgqQg6g5AAhRMAAAg8/QAAhRA6g5QA5g6BPAAQBQAAA6A6QA5A5AABRMAAAA8/QAABRg5A5Qg6A6hQAAQhPAAg5g6g");
	this.shape_43.setTransform(226.2,297.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_44.setTransform(-4.8,178.5,1,1,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAKQgIgIAHgGIAGgGQAGgIAIAJQAJAIgIAGIgGAFQgEAEgCAAQgEAAgEgEg");
	this.shape_45.setTransform(9.3,141.9,1,1,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_46.setTransform(-8.2,149.7,1,1,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgKADIAAgEQAAgLAKAAQALAAAAALIAAAEQAAAKgLABQgKgBAAgKg");
	this.shape_47.setTransform(20.6,149.4,1,1,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_48.setTransform(9,188.8,1,1,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_49.setTransform(6.7,164.1,1,1,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_50.setTransform(6.7,126.1,1,1,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_51.setTransform(127.5,124.4,1,1,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgJAAQgBgKAKAAQAKAAAAAKQAAALgKAAQgKAAABgLg");
	this.shape_52.setTransform(95.9,121.5,1,1,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_53.setTransform(94.8,120.9,1,1,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQAKAAAAAKQAAALgKAAQgKAAAAgLg");
	this.shape_54.setTransform(62,133.6,1,1,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_55.setTransform(89.6,163.5,1,1,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_56.setTransform(50.5,161.8,1,1,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_57.setTransform(95.3,190.6,1,1,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAAQgBgKAKAAQAKAAAAAKQAAALgKAAQgKAAABgLg");
	this.shape_58.setTransform(122.4,177.9,1,1,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_59.setTransform(106.8,148,1,1,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_60.setTransform(54.5,98.5,1,1,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKACIAAgEQAAgLAKAAQALAAAAALIAAAEQAAALgLAAQgKAAAAgLg");
	this.shape_61.setTransform(-2.4,-0.1,1,1,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgBALQgLAAAAgLQAAgKALAAIADAAQAMAAAAAKQAAALgMAAg");
	this.shape_62.setTransform(9.3,16.2,1,1,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_63.setTransform(14.8,-3.9,1,1,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgJAAQgBgKAKAAQAKAAAAAKQAAALgKAAQgKAAABgLg");
	this.shape_64.setTransform(15.4,37.5,1,1,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_65.setTransform(-3.1,48.5,1,1,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_66.setTransform(-50.2,74.9,1,1,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_67.setTransform(4.4,62.8,1,1,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_68.setTransform(-7.7,22.6,1,1,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_69.setTransform(47.6,1.9,1,1,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_70.setTransform(64.8,54.8,1,1,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_71.setTransform(44.7,70.3,1,1,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_72.setTransform(83.8,80.7,1,1,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_73.setTransform(105.7,69.2,1,1,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_74.setTransform(106.8,69.2,1,1,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_75.setTransform(88.4,53.6,1,1,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQAKAAAAAKQAAALgKAAQgKAAAAgLg");
	this.shape_76.setTransform(72.3,31.2,1,1,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgJAAQgBgKAKAAQAKAAAAAKQAAALgKAAQgKAAABgLg");
	this.shape_77.setTransform(116.6,6.5,1,1,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_78.setTransform(87.3,8.2,1,1,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgCALQgLAAAAgLQAAgKALAAIAEAAQALAAAAAKQAAALgLAAg");
	this.shape_79.setTransform(107.1,24.9,1,1,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B5CCCC").s().p("AiSZlMAAAgzJIElAAMAAAAzJg");
	this.shape_80.setTransform(162.3,111.6,1,1,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B5CCCC").s().p("AiSZlMAAAgzJIElAAMAAAAzJg");
	this.shape_81.setTransform(-99.2,111.6,1,1,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B5CCCC").s().p("A2mCTIAAklMAtNAAAIAAElg");
	this.shape_82.setTransform(32.3,-38.1,1,1,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B5CCCC").s().p("A2mCTIAAklMAtNAAAIAAElg");
	this.shape_83.setTransform(32.3,260.6,1,1,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#98ADAC").s().p("AhaWSMAAAgsjIC1AAMAAAAsjg");
	this.shape_84.setTransform(150.7,108.2,1,1,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#98ADAC").s().p("AhaWSMAAAgsjIC1AAMAAAAsjg");
	this.shape_85.setTransform(-87.9,108.2,1,1,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#98ADAC").s().p("A2RBbIAAi1MAsjAAAIAAC1g");
	this.shape_86.setTransform(32.3,-27.7,1,1,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B5CCCC").s().p("A1aAlIAAhJMAq0AAAIAABJg");
	this.shape_87.setTransform(29.6,108.1,1,1,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#98ADAC").s().p("A2RBbIAAi1MAsjAAAIAAC1g");
	this.shape_88.setTransform(32.3,249.1,1,1,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B5CCCC").s().p("AgkVaMAAAgqzIBJAAMAAAAqzg");
	this.shape_89.setTransform(29.6,108.2,1,1,0,0,180);

	this.instance_7 = new lib.ClipGroup_4();
	this.instance_7.setTransform(28.5,223.5,1,1,0,0,180,226.2,49.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#FAD04B","#E8BF4A","#BE9848","#987347","#765448","#5B3A49","#44264B","#33174C","#270D4D","#20074D","#1E054E","#1E0552","#1E0553"],[0.012,0.027,0.075,0.122,0.176,0.235,0.302,0.376,0.471,0.596,0.918,0.922,0.949],0,170.4,0,-28).s().p("AyOXEMAAAguHMAkdAAAMAAAAuHg");
	this.shape_90.setTransform(32.3,109.6,1,1,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_91.setTransform(1023.6,178.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgJAKQgIgIAHgGIAGgGQAGgIAIAJQAJAIgIAGIgGAFQgEAEgCAAQgEAAgEgEg");
	this.shape_92.setTransform(1009.5,141.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_93.setTransform(1027.1,149.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgKADIAAgEQAAgLAKAAQALAAAAALIAAAEQAAAKgLABQgKgBAAgKg");
	this.shape_94.setTransform(998.3,149.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_95.setTransform(1009.8,188.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_96.setTransform(1012.1,164.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_97.setTransform(1012.1,126.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_98.setTransform(891.3,124.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgJAAQgBgKAKAAQAKAAAAAKQAAALgKAAQgKAAABgLg");
	this.shape_99.setTransform(923,121.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_100.setTransform(924.1,120.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQAKAAAAAKQAAALgKAAQgKAAAAgLg");
	this.shape_101.setTransform(956.9,133.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_102.setTransform(929.3,163.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_103.setTransform(968.4,161.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_104.setTransform(923.5,190.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgJAAQgBgKAKAAQAKAAAAAKQAAALgKAAQgKAAABgLg");
	this.shape_105.setTransform(896.5,177.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_106.setTransform(912,148);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_107.setTransform(964.4,98.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgKACIAAgEQAAgLAKAAQALAAAAALIAAAEQAAALgLAAQgKAAAAgLg");
	this.shape_108.setTransform(1021.3,-0.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgBALQgLAAAAgLQAAgKALAAIADAAQAMAAAAAKQAAALgMAAg");
	this.shape_109.setTransform(1009.6,16.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_110.setTransform(1004.1,-3.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgJAAQgBgKAKAAQAKAAAAAKQAAALgKAAQgKAAABgLg");
	this.shape_111.setTransform(1003.5,37.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_112.setTransform(1021.9,48.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_113.setTransform(1069.1,74.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_114.setTransform(1014.4,62.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_115.setTransform(1026.5,22.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_116.setTransform(971.3,1.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_117.setTransform(954,54.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_118.setTransform(974.2,70.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_119.setTransform(935,80.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_120.setTransform(913.2,69.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_121.setTransform(912,69.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_122.setTransform(930.4,53.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQAKAAAAAKQAAALgKAAQgKAAAAgLg");
	this.shape_123.setTransform(946.6,31.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgJAAQgBgKAKAAQAKAAAAAKQAAALgKAAQgKAAABgLg");
	this.shape_124.setTransform(902.3,6.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_125.setTransform(931.6,8.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgCALQgLAAAAgLQAAgKALAAIAEAAQALAAAAAKQAAALgLAAg");
	this.shape_126.setTransform(911.8,24.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B5CCCC").s().p("AiSZlMAAAgzJIElAAMAAAAzJg");
	this.shape_127.setTransform(856.6,111.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B5CCCC").s().p("AiSZlMAAAgzJIElAAMAAAAzJg");
	this.shape_128.setTransform(1118.1,111.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B5CCCC").s().p("A2mCTIAAklMAtNAAAIAAElg");
	this.shape_129.setTransform(986.5,-38.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B5CCCC").s().p("A2mCTIAAklMAtNAAAIAAElg");
	this.shape_130.setTransform(986.5,260.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#98ADAC").s().p("AhaWSMAAAgsjIC1AAMAAAAsjg");
	this.shape_131.setTransform(868.1,108.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#98ADAC").s().p("AhaWSMAAAgsjIC1AAMAAAAsjg");
	this.shape_132.setTransform(1106.8,108.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#98ADAC").s().p("A2RBbIAAi1MAsjAAAIAAC1g");
	this.shape_133.setTransform(986.5,-27.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B5CCCC").s().p("A1aAlIAAhJMAq0AAAIAABJg");
	this.shape_134.setTransform(989.3,108.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#98ADAC").s().p("A2RBbIAAi1MAsjAAAIAAC1g");
	this.shape_135.setTransform(986.5,249.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B5CCCC").s().p("AgkVaMAAAgqzIBJAAMAAAAqzg");
	this.shape_136.setTransform(989.3,108.2);

	this.instance_8 = new lib.ClipGroup_4();
	this.instance_8.setTransform(990.4,223.5,1,1,0,0,0,226.2,49.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#FAD04B","#E8BF4A","#BE9848","#987347","#765448","#5B3A49","#44264B","#33174C","#270D4D","#20074D","#1E054E","#1E0552","#1E0553"],[0.012,0.027,0.075,0.122,0.176,0.235,0.302,0.376,0.471,0.596,0.918,0.922,0.949],0,170.4,0,-28).s().p("AyOXEMAAAguHMAkdAAAMAAAAuHg");
	this.shape_137.setTransform(986.5,109.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_137},{t:this.instance_8},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.instance_7},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_6},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_5},{t:this.shape_9},{t:this.shape_8},{t:this.instance_4},{t:this.shape_7}]},132).wait(9));

	// bg
	this.instance_9 = new lib.bg_NEW();
	this.instance_9.setTransform(510.4,354.1,1,1,0,0,0,511.5,328.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CDFED9").s().p("EhP+AkQMAAAhIfMCf9AAAMAAABIfg");
	this.shape_138.setTransform(516.8,252.3,1.016,1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B1ACF5").s().p("EhP+AXbMAAAgu1MCf9AAAMAAAAu1g");
	this.shape_139.setTransform(516.8,641,1.016,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},87).to({state:[{t:this.shape_139},{t:this.shape_138}]},45).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(427.8,325.8,1187.8,882.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;