let ham_open = document.getElementById('nav-ham');
let menu = document.getElementById('ham-btn');
let ham_btn = document.getElementById('btn-1');
let close_nav = document.getElementById('close-btn');

function ham_Start() {
  ham_open.style.display = 'flex';
  menu.style.width = '80%';
  menu.style.marginLeft = '-16%';
  ham_btn.style.display = 'none';
  document.querySelector('.logo').style.display = 'none';
}
close_nav.addEventListener('click', function () {
  ham_open.style.display = 'none';
  ham_btn.style.display = 'block';
  document.querySelector('.logo').style.display = 'block';
  menu.style.width = '';
  menu.style.marginLeft = '35px';
});

//toggle lang

let lang_block = document.querySelector('.lang-block');

let lang1= document.querySelector('#i1')

lang1.addEventListener('click', function() {
  lang_block.style.display='none'
})

let lang2 = document.querySelector('#i2');

lang2.addEventListener('click', function () {
  lang_block.style.display = 'none';
});
//
function langToggle() {
  lang_block.style.display = 'flex';
}
