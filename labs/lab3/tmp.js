var cats = [];

for (let i = 0; i < 3; i++) {
  cats[i] = function(){
    console.log(`Cat ${i} is ready!`);
  }
}

console.log(`i = ${i}`);
cats[0]();
cats[1]();
cats[2]();

for (var i = 0; i < 3; i++) {
  cats[i] = function(){
    console.log(`Cat ${i} is ready!`);
  }
}

console.log(`i = ${i}`);
cats[0]();
cats[1]();
cats[2]();