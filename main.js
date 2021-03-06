canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


nasa_images_array=["mars.jpg","space_image_1.jpg","space_image_2.jpg","space_image_3.jpg","space_image_4.jpg"];


random_number=Math.floor(Math.random()* 5);
console.log(random_number);
mars_background= nasa_images_array[random_number];
console.log("Background Image =" + mars_background );


rover_width=90;
rover_height=100;
rover_x=10;
rover_y=10;


rover_background="rover.png";

function add(){

    background_image=new Image();
    background_image.onload = uploadbackground;
    background_image.src = mars_background;

    rover_image = new Image();
    rover_image.onload = uploadrover;
    rover_image.src = rover_background;
}

function uploadbackground(){
ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}

function uploadrover(){
ctx.drawImage(rover_image,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
key_down=e.keyCode;
console.log(key_down);
if (key_down==37){
left();
console.log("LEFT HAS BEEN PRESSED");

}
if (key_down==38){
up();
console.log("UP HAS BEEN PRESSED");
}
if (key_down==39){
right();
console.log("RIGHT HAS BEEN PRESSED");
}
if (key_down==40){
down();
console.log("DOWN HAS BEEN PRESSED");
}

}

function up(){

if(rover_y>=0){
rover_y = rover_y - 5;
console.log("When up is pressed"+"x = "+ rover_x + "y = " + rover_y);
uploadbackground();
uploadrover();


}
}

function down(){
if(rover_y<=500){
rover_y=rover_y + 5;
console.log("When down is pressed"+"x = "+ rover_x+ "y =" + rover_y);
uploadbackground();
uploadrover();
}
}

function left(){
if (rover_x>=0){
rover_x= rover_x-5;
console.log("When left is pressed"+"x = "+rover_x + "y = " + rover_y);
uploadbackground();
uploadrover();
}
}

function right(){
if(rover_x<=700){
rover_x=rover_x+5;
console.log("When right is pressed"+ "x = "+ rover_x+ "y = "+ rover_y);
uploadbackground();
uploadrover();
}


}
