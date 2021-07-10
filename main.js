Canvas = fabric.Canvas("Canvas");

ball_y = 0;

ball_x = 0;

hole_y = 400;

hole_x = 800;

block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {

		hole_obj = Img;

		hole_obj.scaleToWidth(50);

		hole_obj.scaleToHeight(50);

		hole_obj.set({

			top: hole_y,

			left: hole_x

		});

		Canvas.add(hole_obj);

	});
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function (Img) {

		ball_obj = Img;

		ball_obj.scaleToWidth(50);

		ball_obj.scaleToHeight(50);

		ball_obj.set({

			top: ball_y,

			left: ball_x

		});

		Canvas.add(ball_obj);

	});

	window.addEventListener("keydown", my_keydown);

	function my_keydown(e) {

		keyPressed = e.keyCode;
		console.log(keyPressed);

		if ((ball_x==hole_x)&&(ball_y==hole_y)) {

			Canvas.remove(ball_obj);

			document.getElementById("hd3").innerHTML = "You Have Hit The Goal Good For You";

			document.getElementById("Canvas").style.borderColor = "Teal";
			
		}else {
			if (keyPressed == '38') {
				up();
				console.log("up");
			}
			if (keyPressed == '40') {
				down();
				console.log("down");
			}
			if (keyPressed == '37') {
				left();
				console.log("left");
			}
			if (keyPressed == '39') {
				right();
				console.log("right");
			}
		}

		function up() {

			if (ball_y > 0) {

				ball_y -= block_image_height;

				console.log("block image Height = " + block_image_height);

				console.log("When Down Arrow Key Is Pressed The X Of The Ball Is " + ball_x + " The Y Is = " + ball_y);
				
			}

		}

		function down() {

			if (ball_y <= 0) {

				ball_y += block_image_height;

				console.log("block image Height = " + block_image_height);

				console.log("When Down Arrow Key Is Pressed The X Of The Ball Is " + ball_x + " The Y Is = " + ball_y);
				
			}
			
		}

		function left() {
			if (ball_x > 5) {

				ball_y -= block_image_width;

				console.log("block image Width = " + block_image_width);

				console.log("When Down Arrow Key Is Pressed The X Of The Ball Is " + ball_x + " The Y Is = " + ball_y);
				
			}
		}

		function right() {
			if (ball_x <= 1050) {

			ball_y += block_image_width;

			console.log("block image Width = " + block_image_height);

			console.log("When Down Arrow Key Is Pressed The X Of The Ball Is " + ball_x + " The Y Is = " + ball_y);
			
		}
	}