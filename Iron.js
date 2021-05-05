class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
		var options = {
			'density':30,
			'friction':3.0,
			'restitution':0.8
		}
		this.body=Bodies.rectangle(x, y, 60, 60, options);
		World.add(world, this.body);

	}
	display()
	{
			var ironPos=this.body.position;
			push()
			translate(ironPos.x, ironPos.y);
			rectMode(CENTER)
			fill("darkred");
			rect(0, 0, 60, 60);
			pop()
	}

}