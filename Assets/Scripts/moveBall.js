#pragma strict

// the rigid body of the ball
var rb : Rigidbody;
var speed : int = 3.0;

// runs first
function Start () {

	rb = GetComponent.<Rigidbody>();

}

// called once per frame
function Update () {

}

// called before performing any fisics calculations
function FixedUpdate () {

	var moveH = Input.GetAxis("Horizontal");
	var moveV = Input.GetAxis("Vertical");
	
	var movement = new Vector3(moveH*speed,0,moveV*speed);
	
	rb.AddForce(movement);

}