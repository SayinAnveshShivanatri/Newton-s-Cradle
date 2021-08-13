const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options = {
		isStatic: true
	}

	var bob_options = {
		restitution = 0.8
	}
	roof = Bodies.rectangle(400, 100, 230, 20, roof_options);
	World.add(world, roof);

	Engine.run(engine);

	bob1 = Bodies.circle(200, 50, 10, bob_options);
	World.add(world, bob1);

	Engine.run(engine);

	bob2 = Bodies.circle(210, 50, 10, bob_options);
	World.add(world, bob2);

	Engine.run(engine);

	bob3 = Bodies.circle(220, 50, 10, bob_options);
	World.add(world, bob3);

	Engine.run(engine);

	bob4 = Bodies.circle(230, 50, 10, bob_options);
	World.add(world, bob4);

	Engine.run(engine);

	bob5 = Bodies.circle(240, 50, 10, bob_options);
	World.add(world, bob5);

	Engine.run(engine);

	rope1 = Matter.Constraint.create({
		pointA: {
			x: 200,
			y: 20

		},
		bodyA: bob1,
		length: 100,
		stiffness: 0.1
	})
	World.add(world, rope)

	rope2 = Matter.Constraint.create({
		pointB: {
			x: 200,
			y: 20

		},
		bodyB: bob2,
		length: 100,
		stiffness: 0.1
	})
	World.add(world, rope)

	rope3 = Matter.Constraint.create({
		point: {
			x: 200,
			y: 20

		},
		body: ball,
		length: 100,
		stiffness: 0.1
	})
	World.add(world, rope)

	rope4 = Matter.Constraint.create({
		point: {
			x: 200,
			y: 20

		},
		body: ball,
		length: 100,
		stiffness: 0.1
	})
	World.add(world, rope)

	rope5 = Matter.Constraint.create({
		point: {
			x: 200,
			y: 20

		},
		body: ball,
		length: 100,
		stiffness: 0.1
	})
	World.add(world, rope)




}

function draw() {
	rectMode(CENTER);
	background("#99004d");
	rect(roof.position.x, roof.position.y, 230, 20);

	//call display() to show ropes here


	ellipseMode(RADIUS)
	ellipse(bob1.position.x, bob1.position.y, 10);
  	stroke(255)

	ellipseMode(RADIUS)
	ellipse(bob2.position.x, bob2.position.y, 10);
    stroke(255)

	ellipseMode(RADIUS)
	ellipse(bob3.position.x, bob3.position.y, 10);
    stroke(255)

	ellipseMode(RADIUS)
	ellipse(bob4.position.x, bob4.position.y, 10);
    stroke(255)

	ellipseMode(RADIUS)
	ellipse(bob5.position.x, bob5.position.y, 10);
    stroke(255)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
