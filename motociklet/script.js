const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);//stexcuma  nor array aisinkn inky arancin vercnuma sax itemn-ery

carouselList.addEventListener('click', function (event) {//event enk kapum  carouselList-in
  var newActive = event.target; //variable-mech enk mtcnum parametrin target kpcnely vory vor petka veradarcni elementy vory vory kanchuma event-y
  var isItem = newActive.closest('.carousel__item');//popxakani mech grum enk  vor   newActive-michocov  poxenk 1-nkary vory vor bervela closest-y

  if (!isItem || newActive.classList.contains('carousel__item_active')){//newActive -i mech enk mtcnum  carousel__item_active' class-y
    return;
  };
  
  update(newActive);
});





const update = function(newActive) {
  const newActivePos = newActive.dataset.p;

  const current = elems.find((elem) => elem.dataset.p == 0);//find-i shnorhiv  
  const prev = elems.find((elem) => elem.dataset.p == -1);
  const next = elems.find((elem) => elem.dataset.p == 1);
  const first = elems.find((elem) => elem.dataset.p == -2);
  const last = elems.find((elem) => elem.dataset.p == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.p;

    item.dataset.p = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

const el = document.querySelector('#user');

el.dataset.dateOfBirth = '1960-10-03'; 
console.log(el.dataset.dateOfBirth);




function openclick(){
  document.getElementById('myid').style.width="100%";

}

function closeclick(){
  document.getElementById('myid').style.width="0%";

}

// void function iife() {

//   console.log("Executed!");

// }(iife());