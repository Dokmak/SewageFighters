/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */



/**
The interaction manager deals with mouse and touch events. At this moment only Sprite's can be interactive.
This manager also supports multitouch.
@class InteractionManager
@constructor
@param stage {Stage}
@type Stage
*/
PIXI.InteractionManager = function(stage)
{
	/**
	 * a refference to the stage
	 * @property stage
	 * @type Stage
	 */
	this.stage = stage;

	// helpers
	this.tempPoint = new PIXI.Point();
	//this.tempMatrix =  mat3.create();

	this.mouseoverEnabled = true;

	/**
	 * the mouse data 
	 * @property mouse
	 * @type InteractionData
	 */
	this.mouse = new PIXI.InteractionData();

	/**
	 * an object that stores current touches (InteractionData) by id reference 
	 * @property touchs
	 * @type Object
	 */
	this.touchs = {};

	//tiny little interactiveData pool!
	this.pool = [];

	this.interactiveItems = [];

	this.last = 0;
}

// constructor
PIXI.InteractionManager.constructor = PIXI.InteractionManager;

PIXI.InteractionManager.prototype.collectInteractiveSprite = function(displayObject, iParent)
{
	var children = displayObject.children;
	var length = children.length;

	//this.interactiveItems = [];
	/// make an interaction tree... {item.__interactiveParent}
	for (var i = length-1; i >= 0; i--)
	{
		var child = children[i];

		// push all interactive bits
		if(child.interactive)
		{
			iParent.interactiveChildren = true;
			//child.__iParent = iParent;
			this.interactiveItems.push(child);

			if(child.children.length > 0)
			{
				this.collectInteractiveSprite(child, child);
			}
		}
		else
		{
			child.__iParent = null;

			if(child.children.length > 0)
			{
				this.collectInteractiveSprite(child, iParent);
			}
		}
	}
}

PIXI.InteractionManager.prototype.setTarget = function(target)
{
	if (window.navigator.msPointerEnabled) 
	{
		// time to remove some of that zoom in ja..
		target.view.style["-ms-content-zooming"] = "none";
    	target.view.style["-ms-touch-action"] = "none"
    
		// DO some window specific touch!
	}


	{

		this.target = target;
		target.view.addEventListener('mousemove',  this.onMouseMove.bind(this), true);
		target.view.addEventListener('mousedown',  this.onMouseDown.bind(this), true);
	 	document.body.addEventListener('mouseup',  this.onMouseUp.bind(this), true);
	 	target.view.addEventListener('mouseout',   this.onMouseUp.bind(this), true);

		// aint no multi touch just yet!
		target.view.addEventListener("touchstart", this.onTouchStart.bind(this), true);
		target.view.addEventListener("touchend", this.onTouchEnd.bind(this), true);
		target.view.addEventListener("touchmove", this.onTouchMove.bind(this), true);
	}



}

PIXI.InteractionManager.prototype.update = function()
{
	// frequency of 30fps??
	var now = Date.now();
	var diff = now - this.last;
	diff = (diff * 30) / 1000;
	if(diff < 1)return;
	this.last = now;
	//

	// ok.. so mouse events??
	// yes for now :)
	// OPTIMSE - how often to check??
	if(this.dirty)
	{
		this.dirty = false;

		var len = this.interactiveItems.length;

		for (var i=0; i < this.interactiveItems.length; i++) {
		  this.interactiveItems[i].interactiveChildren = true;
		}

		this.interactiveItems = [];

		if(this.stage.interactive)this.interactiveItems.push(this.stage);
		// go through and collect all the objects that are interactive..
		this.collectInteractiveSprite(this.stage, this.stage);
	}

	// loop through interactive objects!
	var length = this.interactiveItems.length;

	for (var i = 0; i < length; i++)
	{
		var item = this.interactiveItems[i];
		if(!item.visible)continue;

		// OPTIMISATION - only calculate every time if the mousemove function exists..
		// OK so.. does the object have any other interactive functions?
		// hit-test the clip!
		if(item.mouseover || item.mouseout || item.buttonMode)
		{
			// ok so there are some functions so lets hit test it..
			item.__hit = this.hitTest(item, this.mouse);
			// ok so deal with interactions..
			// loks like there was a hit!
			if(item.__hit)
			{
				if(!item.__isOver)
				{
					if(item.buttonMode)this.target.view.style.cursor = "pointer";	
					if(item.mouseover)item.mouseover(this.mouse);
					item.__isOver = true;	
				}
			}
			else
			{
				if(item.__isOver)
				{
					// roll out!
					if(item.buttonMode)this.target.view.style.cursor = "default";	
					if(item.mouseout)item.mouseout(this.mouse);
					item.__isOver = false;	
				}
			}
		}

		// --->
	}
}

PIXI.InteractionManager.prototype.onMouseMove = function(event)
{
	event.preventDefault();

	// TODO optimize by not check EVERY TIME! maybe half as often? //
	var rect = this.target.view.getBoundingClientRect();

	this.mouse.global.x = (event.clientX - rect.left) * (this.target.width / rect.width);
	this.mouse.global.y = (event.clientY - rect.top) * ( this.target.height / rect.height);

	var length = this.interactiveItems.length;
	var global = this.mouse.global;


	for (var i = 0; i < length; i++)
	{
		var item = this.interactiveItems[i];

		if(item.mousemove)
		{
			//call the function!
			item.mousemove(this.mouse);
		}
	}
}

PIXI.InteractionManager.prototype.onMouseDown = function(event)
{
	event.preventDefault();

	// loop through inteaction tree...
	// hit test each item! -> 
	// --->--->--->--->
	// get interactive items under point??
	// --->--->--->--->
	//stage.__i
	var length = this.interactiveItems.length;
	var global = this.mouse.global;

	var index = 0;
	var parent = this.stage;

	// while 
	// hit test 
	for (var i = 0; i < length; i++)
	{
		var item = this.interactiveItems[i];

		if(item.mousedown || item.click)
		{
			item.__mouseIsDown = true;
			item.__hit = this.hitTest(item, this.mouse);

			if(item.__hit)
			{
				//call the function!
				if(item.mousedown)item.mousedown(this.mouse);
				item.__isDown = true;

				// just the one!
				if(!item.interactiveChildren)break;
			}
		}
	}
}

PIXI.InteractionManager.prototype.onMouseUp = function(event)
{
	event.preventDefault();
	var global = this.mouse.global;


	var length = this.interactiveItems.length;
	var up = false;

	for (var i = 0; i < length; i++)
	{
		var item = this.interactiveItems[i];

		if(item.mouseup || item.mouseupoutside || item.click)
		{
			item.__hit = this.hitTest(item, this.mouse);

			if(item.__hit && !up)
			{
				//call the function!
				if(item.mouseup)
				{
					item.mouseup(this.mouse);
				}
				if(item.__isDown)
				{
					if(item.click)item.click(this.mouse);
				}

				if(!item.interactiveChildren)up = true;
			}
			else
			{
				if(item.__isDown)
				{
					if(item.mouseupoutside)item.mouseupoutside(this.mouse);
				}
			}

			item.__isDown = false;	
		}
	}
}

PIXI.InteractionManager.prototype.hitTest = function(item, interactionData)
{
	var global = interactionData.global;

	if(!item.visible)return false;

	if(item instanceof PIXI.Sprite)
	{
		var worldTransform = item.worldTransform;

		var a00 = worldTransform[0], a01 = worldTransform[1], a02 = worldTransform[2],
            a10 = worldTransform[3], a11 = worldTransform[4], a12 = worldTransform[5],
            id = 1 / (a00 * a11 + a01 * -a10);

		var x = a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id; 
		var y = a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id;

		var width = item.texture.frame.width;
		var height = item.texture.frame.height;

		var x1 = -width * item.anchor.x;

		if(x > x1 && x < x1 + width)
		{
			var y1 = -height * item.anchor.y;

			if(y > y1 && y < y1 + height)
			{
				return true;
			}
		}
	}
	else if(item.hitArea)
	{
		var worldTransform = item.worldTransform;
		var hitArea = item.hitArea;

		var a00 = worldTransform[0], a01 = worldTransform[1], a02 = worldTransform[2],
            a10 = worldTransform[3], a11 = worldTransform[4], a12 = worldTransform[5],
            id = 1 / (a00 * a11 + a01 * -a10);

		var x = a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id; 
		var y = a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id;

		var x1 = hitArea.x;
		if(x > x1 && x < x1 + hitArea.width)
		{
			var y1 = hitArea.y;

			if(y > y1 && y < y1 + hitArea.height)
			{
				return true;
			}
		}
	}

	var length = item.children.length;

	for (var i = 0; i < length; i++)
	{
		var tempItem = item.children[i];
		var hit = this.hitTest(tempItem, interactionData);
		if(hit)return true;
	}

	return false;	
}



PIXI.InteractionManager.prototype.onTouchMove = function(event)
{
	event.preventDefault();

	var rect = this.target.view.getBoundingClientRect();
	var changedTouches = event.changedTouches;

	for (var i=0; i < changedTouches.length; i++) 
	{
		var touchEvent = changedTouches[i];
		var touchData = this.touchs[touchEvent.identifier];

		// update the touch position
		touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
		touchData.global.y = (touchEvent.clientY - rect.top)  * (this.target.height / rect.height);
	}

	var length = this.interactiveItems.length;
	for (var i = 0; i < length; i++)
	{
		var item = this.interactiveItems[i];
		if(item.touchmove)item.touchmove(touchData);
	}
}

PIXI.InteractionManager.prototype.onTouchStart = function(event)
{
	event.preventDefault();
	var rect = this.target.view.getBoundingClientRect();

	var changedTouches = event.changedTouches;
	for (var i=0; i < changedTouches.length; i++) 
	{
		var touchEvent = changedTouches[i];

		var touchData = this.pool.pop();
		if(!touchData)touchData = new PIXI.InteractionData();

		this.touchs[touchEvent.identifier] = touchData;
		touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
		touchData.global.y = (touchEvent.clientY - rect.top)  * (this.target.height / rect.height);

		var length = this.interactiveItems.length;

		for (var j = 0; j < length; j++)
		{
			var item = this.interactiveItems[j];

			if(item.touchstart || item.tap)
			{
				item.__hit = this.hitTest(item, touchData);

				if(item.__hit)
				{
					//call the function!
					if(item.touchstart)item.touchstart(touchData);
					item.__isDown = true;
					item.__touchData = touchData;

					if(!item.interactiveChildren)break;
				}
			}
		}
	}

}

PIXI.InteractionManager.prototype.onTouchEnd = function(event)
{
	event.preventDefault();


	var rect = this.target.view.getBoundingClientRect();
	var changedTouches = event.changedTouches;

	for (var i=0; i < changedTouches.length; i++) 
	{

		var touchEvent = changedTouches[i];
		var touchData = this.touchs[touchEvent.identifier];
		var up = false;
		touchData.global.x = (touchEvent.clientX - rect.left) * (this.target.width / rect.width);
		touchData.global.y = (touchEvent.clientY - rect.top)  * (this.target.height / rect.height);

		var length = this.interactiveItems.length;
		for (var j = 0; j < length; j++)
		{
			var item = this.interactiveItems[j];
			var itemTouchData = item.__touchData; // <-- Here!
			item.__hit = this.hitTest(item, touchData);

			if(itemTouchData == touchData)
			{
				// so this one WAS down...

				// hitTest??

				if(item.touchend || item.tap)
				{
					if(item.__hit && !up)
					{
						if(item.touchend)item.touchend(touchData);
						if(item.__isDown)
						{
							if(item.tap)item.tap(touchData);
						}

						if(!item.interactiveChildren)up = true;
					}
					else
					{
						if(item.__isDown)
						{
							if(item.touchendoutside)item.touchendoutside(touchData);
						}
					}

					item.__isDown = false;
				}

				item.__touchData = null;

			}
			else
			{

			}
		}
		// remove the touch..
		this.pool.push(touchData);
		this.touchs[touchEvent.identifier] = null;
	}
}

/**
@class InteractionData
@constructor
*/
PIXI.InteractionData = function()
{
	/**
	 * This point stores the global coords of where the touch/mouse event happened
	 * @property global 
	 * @type Point
	 */
	this.global = new PIXI.Point();

	// this is here for legacy... but will remove
	this.local = new PIXI.Point();

	/**
	 * The target Sprite that was interacted with
	 * @property target
	 * @type Sprite
	 */
	this.target;
}

/**
 * This will return the local coords of the specified displayObject for this InteractionData
 * @method getLocalPosition
 * @param displayObject {DisplayObject} The DisplayObject that you would like the local coords off
 * @return {Point} A point containing the coords of the InteractionData position relative to the DisplayObject
 */
PIXI.InteractionData.prototype.getLocalPosition = function(displayObject)
{
	var worldTransform = displayObject.worldTransform;
	var global = this.global;

	// do a cheeky transform to get the mouse coords;
	var a00 = worldTransform[0], a01 = worldTransform[1], a02 = worldTransform[2],
        a10 = worldTransform[3], a11 = worldTransform[4], a12 = worldTransform[5],
        id = 1 / (a00 * a11 + a01 * -a10);
	// set the mouse coords...
	return new PIXI.Point(a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id,
							   a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id)
}

// constructor
PIXI.InteractionData.constructor = PIXI.InteractionData;


