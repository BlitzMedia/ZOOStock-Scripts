const body = document.body;
const checkHomepage   = () => body.classList.contains('homepage');
const checkProducts   = () => body.classList.contains('collection-type-blog');
const checkList       = () => body.classList.contains('view-list');
const checkItem       = () => body.classList.contains('view-item');

// interval passed to reveal
window.sr = ScrollReveal({
  mobile: false,
  viewFactor: 0.1,
  //reset: true,
  distance: '10px'
});

// INIT
function initBlitz() {
  initZOOStockHome()
  animater();
  setProductQuote();
  setCatNav();
  checkCustomItem()
  initAccordions()

  console.log('⚡️');

}

// Init! ⚡️
window.Squarespace.onInitialize(Y, () => initBlitz());


/*

Functions

*/

function initZOOStockHome() {
  // Get links
  var galButtons = document.querySelectorAll('.Index-gallery-item-content-body a')
  // Turn them to buttons
  galButtons.forEach(el => turnToButton(el))

  // Set video properly
  window.vid = document.querySelector('#zoostock-nav .sqs-video-icon');
}

// Other functions
function animater() {
  sr.reveal(document.querySelectorAll('.homepage [id*="anim"] .Index-page-content'), {
    distance: '0px'
  });
  // Secuential anims
  sr.reveal(document.querySelectorAll('.sqs-col-3'), { viewFactor: 0.3 }, 50);
  sr.reveal('.sqs-gallery-design-grid-slide', { duration: 500 }, 75);
  sr.reveal('.Index-gallery-item-inner', { duration: 500, opacity: 0.6 }, 75);
  // Multiple Anims
  sr.reveal(document.querySelectorAll('#networking-accesories-components-home-red .spacer-block + .row'));
  sr.reveal(document.querySelectorAll('.homepage .image-card'), { origin: 'left' });
}

function setProductQuote() {
  const lightboxButton = document.querySelector('.Footer .lightbox-handle');

  if(checkItem()) {
    const getQuoteButton = document.querySelector('#block-getQuote .sqs-block-button-element');
    if(getQuoteButton) getQuoteButton.onclick = e => lightboxButton.click();
  }

  if(checkList()) {
    Y.one('body').delegate('click', e => {
      e.preventDefault();
      lightboxButton.click();
    }, '.quoter')
    document.querySelectorAll('.filtered .button-block a').forEach(el => {
      if(el.text === 'Get a Quote') el.onclick = e => {
        e.preventDefault();
        lightboxButton.click();
      }
    })
  }
}

function setCatNav() {
  if(!checkProducts() && !checkItem()) return;
  if(checkList()) return;
  if(!Y.one('.Main--blog-item') && !Y.one('.ProductItem-nav')) return;

  const archives = document.querySelectorAll('.BlogItem .sqs-block-archive');
  if(!archives) return;
  const cat = document.querySelector('a.Blog-meta-item-category').textContent.trim();
  const title = document.querySelector('.BlogItem-title');
  const target = title.parentNode;

  archives.forEach(archive => {
    target.insertBefore(archive, title);
    archive.querySelectorAll('a').forEach(el => {
      if(el.textContent.trim() === cat) el.classList.add('active');
    })
  })
}

function initAccordions() {
  const accordion = document.querySelector('.Intro .markdown-block');
  const filters = document.querySelector('.customFiltersWrapper');

  if(!accordion || !filters) return;

  filters.append('accordion')

  document.querySelectorAll('.markdown-block h4 + p').forEach(el => {
    const target = el;
    const triggerer = el.previousSibling.previousSibling;
    target.classList.add('accTarget', 'accHidden')
    triggerer.classList.add('accTrigger')
    triggerer.onclick = e => target.classList.toggle('accHidden')
  })
}
