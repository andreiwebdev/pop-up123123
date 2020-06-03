// - daca inchide modalul de la X, sau daca apas in afara modalului
// (adica pe langa el) - trebuie sa se inchida in ambele situatii - si
// setezi un cookie prin care nu imi mai afisezi modalul decat dupa 8 minute petrecute pe site(edited)
// [6:28 PM]
// - daca dau click pe poza din modal. ma duce pe pagina care trebuie, si setezi un cookie care expira dupa 1 zi, iar timp de 1 zi nu imi mai apare acel modal

const popBtn = document.querySelector('.pop-up-btn');
const popCtn = document.querySelector('.pop-up-ctn')
const popUpEl = document.createElement('div');

const disableScroll = () => {
  document.body.classList.add('overflow-handler');
  document.querySelector('html').scrollTop = window.scrollY;
}

const createPopUpElement = () => {
  popUpEl.className = 'pop-up';
  popCtn.className = 'pop-up-active';
  popUpEl.innerHTML = `
  <div class="pop-up">
    <button class="pop-up-close">X</button>
    <h3>PopUp Thing</h3>
    <hr>
    <p>Some random text for this snap</p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo sint earum iusto natus, praesentium quaerat nulla
      suscipit nemo odit vitae laborum nihil, ullam in. Consequatur qui, inventore numquam nesciunt repellendus,
      tempore ipsa asperiores, odit veritatis illum nobis commodi fuga. Magni?
    </p>
    <button class="pop-up__read-more-btn">
    <a href="../assets/new-page.html">Read More</a>
    </button>
  </div>
  `;
  popCtn.appendChild(popUpEl);
}

const scrollPopUpHandler = () => {
  if (window.scrollY >= 200) {
    window.scroll(0, 0);
    createPopUpElement();
    disableScroll();
    closePopUpHandler();
  }
}

const popUpHandler = () => {
  createPopUpElement();
  disableScroll();
  closePopUpHandler();
}

const closePopUpEventListener = (btn) => {
  btn.addEventListener('click', () => {
    popCtn.classList.add('visible');
    document.body.classList.remove('overflow-handler');
  })
}

const closePopUpHandler = () => {
  const popUpCloseBtn = document.querySelector('.pop-up-close');
  const popUpOverlay = document.querySelector('.pop-up-active');
  closePopUpEventListener(popUpCloseBtn);
  closePopUpEventListener(popUpOverlay);
}

window.addEventListener('scroll', scrollPopUpHandler);
popBtn.addEventListener('click', popUpHandler);
