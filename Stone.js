class Stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
		var options = {
			'density':12,
      		'friction': 0.9,
      		'restitution':0.8
		}
		this.body=Bodies.rectangle(x, y, 75, 75,options);
		World.add(world, this.body);

	}
	display()
	{
			var stonePos=this.body.position;		
			push()
			translate(stonePos.x, stonePos.y);
			rectMode(CENTER)
			fill("black");
			rect(0, 0, 75, 75);
			pop()
	}

}