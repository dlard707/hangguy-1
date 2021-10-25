let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(800, 600);
  // let div = createDiv('this is some text');
  // div.style('font-size', '16px');
  // div.position(CENTER, CENTER);

  let img = createImg(
  'ahorcado/transparent.png',
  'hangguy'
);
img.position(570, 300);


  input = createInput();
  input.position(120, 165);

  button = createButton('submit');
  button.position(input.x + input.width + 10, 165);
  button.mousePressed(greet);

  // function initialGreet(){
  //   greeting = createElement('h2', 'Hi user, try to guess the word...');
  // }
  // initialGreet();
  greeting = createElement('h2', 'Hi user, try to guess the word...');
  greeting.position(120, 90);
  // setTimeout(initialGreet,7000);
  greeting.html(`What is the animal I´m thinking?`)

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  const lista = ["dog", "cat", "bird"]
  const lista2 = ["apple","lemon","kiwi"]
  const elemento = lista[Math.floor(Math.random() * lista.length)]
  
  // greeting.html('Hello ' + name + '!' + 'you are a ' + elemento);
  input.value('');
  if(name == lista[0] || name == lista[1] || name == lista[2] ){
    greeting.html('You guess the word.What is the fruit I like?')
    if(name == lista2[0] || name == lista2[1] || name == lista2[2])
    greeting.html('You guess the word again')
  }else{
    greeting.html('you are so wrong. What is the fruit I like?')
    if(name == lista2[0] || name == lista2[1] || name == lista2[2]){
      greeting.html('You guess the word ')
    }else{
      greeting.html('You can´t guess nothing! ')
    }
    
  }

  // for (let i = 0; i < 200; i++) {
  //   push();
  //   fill(random(255), 255, 255);
  //   translate(random(width), random(height));
  //   rotate(random(2 * PI));
  //   text(name, 0, 0);
  //   pop();
  // }
}
