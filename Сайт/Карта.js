(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Slide_1 = function() {
	this.initialize(img.Slide_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1229,615);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Slide_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1229,615);


(lib.Кнопка5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Ключ");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.text = new cjs.Text("5", "65px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 74;
	this.text.lineWidth = 45;
	this.text.alpha = 0.85882353;
	this.text.parent = this;
	this.text.setTransform(-22.8,-39.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.298)").s().p("As3M3QlVlUAAnjQAAnhFVlWQFVlVHiAAQHiAAFWFVQFVFWAAHhQAAHjlVFUQlWFWniAAQniAAlVlWg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-116.5,233,233);


(lib.Кнопка4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Мультирезистор");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.text = new cjs.Text("4", "65px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 75;
	this.text.lineWidth = 45;
	this.text.alpha = 0.85882353;
	this.text.parent = this;
	this.text.setTransform(-20.8,-38.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.298)").s().p("As3M3QlVlUAAnjQAAniFVlVQFWlVHhAAQHjAAFVFVQFVFVAAHiQAAHjlVFUQlVFWnjAAQnhAAlWlWg");
	this.shape.setTransform(2.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-115.9,233,233);


(lib.Кнопка3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Линейкаonlineaudioconvertercom");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.text = new cjs.Text("3", "65px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 75;
	this.text.lineWidth = 44;
	this.text.alpha = 0.85882353;
	this.text.parent = this;
	this.text.setTransform(-18.7,-36.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.298)").s().p("As3M3QlVlUAAnjQAAniFVlVQFWlVHhAAQHjAAFVFVQFVFVAAHiQAAHjlVFUQlVFWnjAAQnhAAlWlWg");
	this.shape.setTransform(2.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-115.9,233,233);


(lib.Кнопка2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Мост");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.text = new cjs.Text("2", "65px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 75;
	this.text.lineWidth = 44;
	this.text.alpha = 0.85882353;
	this.text.parent = this;
	this.text.setTransform(-18.1,-37.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.298)").s().p("As3M3QlVlUAAnjQAAniFVlVQFWlVHhAAQHjAAFVFVQFVFVAAHiQAAHjlVFUQlVFWnjAAQnhAAlWlWg");
	this.shape.setTransform(2.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-115.9,233,233);


(lib.Кнопка1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Магазинсопротивлений");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Слой_1
	this.text = new cjs.Text("1", "65px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 75;
	this.text.lineWidth = 44;
	this.text.alpha = 0.85882353;
	this.text.parent = this;
	this.text.setTransform(-19,-37.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.298)").s().p("As3M3QlVlUAAnjQAAniFVlVQFWlVHhAAQHjAAFVFVQFVFVAAHiQAAHjlVFUQlVFWnjAAQnhAAlWlWg");
	this.shape.setTransform(2.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-115.9,233,233);


(lib.Монтажный_кадр_1_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Кнопка5();
	this.instance.parent = this;
	this.instance.setTransform(1374.9,824.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.instance_1 = new lib.Кнопка4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(532.9,531.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.Кнопка3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(711.3,971.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.instance_3 = new lib.Кнопка2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1012.9,427.2);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.instance_4 = new lib.Кнопка1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1502.1,387.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.instance_5 = new lib.Символ1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(956.3,699.8,1.449,1.716,0,0,0,614.5,307.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Монтажный_кадр_1_Слой_1, null, null);


// stage content:
(lib.Карта = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// Слой_1_obj_
	this.Слой_1 = new lib.Монтажный_кадр_1_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(956.2,700,1,1,0,0,0,956.2,700);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1026.1,892.3,1780.3,1055.3);
// library properties:
lib.properties = {
	id: 'AAD40BC3548EFE42B0039B21B55D600E',
	width: 1920,
	height: 1440,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Slide_1.jpg", id:"Slide_1"},
		{src:"sounds/Ключ_.mp3", id:"Ключ"},
		{src:"sounds/Линейкаonlineaudioconvertercom.mp3", id:"Линейкаonlineaudioconvertercom"},
		{src:"sounds/Магазинсопротивлений_.mp3", id:"Магазинсопротивлений"},
		{src:"sounds/Мост_.mp3", id:"Мост"},
		{src:"sounds/Мультирезистор_.mp3", id:"Мультирезистор"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AAD40BC3548EFE42B0039B21B55D600E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;