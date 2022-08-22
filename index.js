
// body-styling
document.querySelector('body').style.backgroundColor = '#283149';
document.querySelector('body').style.color = '#fff';
document.querySelector('body').style.textAlign = 'center';
document.querySelector('body').style.fontFamily = 'Syne Mono';

//header-styling
document.querySelector('h1').style.fontSize = '5.5rem';
// document.querySelector('h1').style.fontFamily = 'Major Mono Display';
document.querySelector('h1').style.textShadow = '5px 5px salmon';
document.querySelector('h1').style.marginBottom = '8rem';



//button-styling
document.querySelector('.drums').style.margin = 'auto';
var imgName = ['tom1.png', 'tom2.png', 'tom3.png', 'tom4.png', 'snare.png', 'crash.png', 'kick.png'];
var btn = document.querySelectorAll('button');
for (let i = 0; i < 7; i++ ) {
    let file = "url('images/"+imgName[i];
    btn[i].style.outline = 'none';
    btn[i].style.margin = '0.5%';
    btn[i].style.width = '150px';
    btn[i].style.height = '150px';
    btn[i].style.border = 'solid 10px #404B69';
    btn[i].style.borderRadius = '10%';
    btn[i].style.fontFamily = 'Arvo';
    btn[i].style.fontSize = '5rem';
    btn[i].style.color = 'salmon';
    btn[i].style.textShadow = '3px 3px white';
    btn[i].style.backgroundImage = file;

}


//footer-styling
document.querySelector('footer').style.marginTop = '10rem';

//button-sound
let audioName = ['tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3', 'snare.mp3', 'crash.mp3', 'kick-bass.mp3'];
for (let i = 0; i < 7; i++ ) {
  btn[i].addEventListener('click', function() {
      file = 'sounds/'+audioName[i];
      btn[i].style.boxShadow = '0 4px 4px 0 azure';
      btn[i].style.opacity = '90%';

      setTimeout(function() {
        btn[i].style.boxShadow = null;
        btn[i].style.opacity = null;
      }, 100);

      new Audio(file).play();

  });
  document.addEventListener('keydown', function(event) {
      var char = btn[i].textContent;
      if (char == event.key) {
            file = 'sounds/'+audioName[i];
            btn[i].style.boxShadow = '0 4px 4px 0 azure';
            btn[i].style.opacity = '90%';

            setTimeout(function() {
              btn[i].style.boxShadow = null;
              btn[i].style.opacity = null;
            }, 100);

            new Audio(file).play();
      };
  });

};
