async function getRecords(a){var b=await fetch(a),c=await b.json(),d=c.records;return d}const megaBuild={masterList:(a,b,c,d)=>{const e=Y.Node.create(`
      <div class="firstLevel">
        <a class="firstLevel-item" href="${a}">${b}</a>
        <div class="secondLevel ${c}"></div>
      </div>
    `);d.append(e)},imageList:a=>{a&&Y.one(".imageMenu").append(`
      <li class="catImg">
        <img src="${a[0].url}" alt="${a}">
      </li>
    `)},slaveList:(a,b)=>{a&&a.forEach(a=>{var c=Y.Node.create(`
        <a href="${a.fields.URL}">${a.fields.Name}</a>
      `);Y.one(`.secondLevel.${b}`).append(c)})},megaTemplate:"<div class=\"megaMenu-wrapper\"><div class=\"Header-nav-item--megamenu-close\"></div><div class=\"megaMenu-innerWrapper\"><div class=\"megaMenu\"></div><ul class=\"imageMenu\"></ul></div></div>"};function buildMegaMenu(a,b){b=b.ancestor(),b.addClass("Header-nav-item--megamenu");const c=Y.Node.create(megaBuild.megaTemplate);c.appendTo(b),a.forEach(a=>{const b=a.fields.Name.toLowerCase().replace(/[0-9]/g,"");megaBuild.masterList(a.fields.URL,a.fields.Name,b,Y.one(".megaMenu")),megaBuild.imageList(a.fields.Image),megaBuild.slaveList(a.children,b)})}function initMegaMenu(){initClickers();const a=Y.one(".Header-nav a[href*=\"/catalog\"]"),b=getRecords(`${"https://api.airtable.com/v0/app6ponqcBGtYfPYT"}/Megamenu?api_key=${"keyMmV8ObRgCW8YNy"}`);b.then(b=>{const c=b.filter(a=>"master"===a.fields.Hierarchy),d=b.filter(a=>"slave"===a.fields.Hierarchy);c.sort((a,b)=>a.fields.Order-b.fields.Order),d.sort((a,b)=>a.fields.Order-b.fields.Order),c.forEach(a=>{const b=a.id,c=d.filter(b=>b.fields["Master Record"]==a.id);a.children=c}),buildMegaMenu(c,a)})}function initClickers(){document.querySelector(".Header-nav-item--megamenu").onclick=a=>{a.preventDefault(),a.stopPropagation();document.body.classList.contains("no-touch")||document.querySelector(".Header-nav-item--megamenu").classList.add("Header-nav-item--megamenu-active")},document.querySelector(".Header-nav-item--megamenu-close").onclick=a=>{a.preventDefault(),a.stopPropagation(),document.querySelector(".Header-nav-item--megamenu").classList.remove("Header-nav-item--megamenu-active")}}window.Squarespace.onInitialize(Y,()=>initMegaMenu());
function buildProductNav(a,b){var c=Y.Node.create("<nav style=\"margin:0 0 5px 0;line-height:1.4\" class=\"ProductItem-nav\"><div class=\"ProductItem-nav-breadcrumb\"></div><div class=\"ProductItem-nav-pagination\"></div></nav>");if(a&&a.length){var d="/";a.forEach(function(b,e){d+=b+"/";var f=e<a.length-1?"<span class=\"ProductItem-nav-breadcrumb-separator\"></span>":"",g=f?"":"disabled";c.one(".ProductItem-nav-breadcrumb").append("<a href=\""+d+"\" class=\"ProductItem-nav-breadcrumb-link "+g+"\">"+b+"</a>"+f)})}if(b&&3==b.length){var e="<a href=\"/"+a[0]+b[1].fullUrl+"\" class=\"ProductItem-nav-pagination-link ProductItem-nav-pagination-link--prev\"><span class=\"ProductItem-nav-pagination-link-direction\">Previous</span><span class=\"ProductItem-nav-pagination-link-title\">"+b[1].title+"</span></a><span class=\"ProductItem-nav-pagination-separator ProductItem-nav-pagination-separator--hasPrev ProductItem-nav-pagination-separator--hasNext\"></span><a href=\"/"+a[0]+b[2].fullUrl+"\" class=\"ProductItem-nav-pagination-link ProductItem-nav-pagination-link--next\"><span class=\"ProductItem-nav-pagination-link-direction\">Next</span><span class=\"ProductItem-nav-pagination-link-title\">"+b[2].title+"</span></a>";c.one(".ProductItem-nav-pagination").append(e)}return c}function initProductNav(){if(Y.one(".Main--blog-item")){var a=!!location.pathname&&location.pathname.replace(/^\/|\/$/g,"").split("/"),b=Y.one(".Main-content");b&&1<a.length&&b.prepend(buildProductNav(a))}}window.Squarespace.onInitialize(Y,()=>initProductNav());
const body=document.body,checkHomepage=()=>body.classList.contains("homepage"),checkProducts=()=>body.classList.contains("collection-type-blog"),checkList=()=>body.classList.contains("view-list"),checkItem=()=>body.classList.contains("view-item"),checkCustomItem=()=>!!Y.one(".custom-table-block");window.sr=ScrollReveal({mobile:!1,viewFactor:.1,distance:"10px"});function initBlitz(){initTranslationButtons(),initStrangeElements(),initGalleryButtons(),animater(),setProductQuote(),setCatNav(),console.log("\u26A1\uFE0F")}function afterFilters(){setFilteredSections(),setFilterQuoteButtons(),initAccordions()}window.Squarespace.onInitialize(Y,()=>initBlitz()),Y.on("custom-filter:filter-init",()=>{afterFilters()});function initTranslationButtons(){if(!Y.one(".translateLink")){var a=document.querySelector(".SocialLinks-link");Object.entries({"en-US":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAMAAACd646MAAAApVBMVEUAJH0BJX4CJn4DJ39UbKhVbahWbqlXb6lZcKpbcquOnsWPn8aQn8aRoMfPFCvSJTrTJjzTJzzTKD3T2enU2unW3OrY3uvbTl/bT2DfYXHfYnLhbXzhbnzhb33ib33i5vDk6PHl6fLniJTniZTojpnoj5rpkZzpk57wtLvwtr3wt77zxMr319v32Nz88vP98/T99PX99fb+9/j++Pj++fr++vv////6WcwLAAABa0lEQVRYw+3Y2U7DQAwFUDd0wh6WAmFPSwsUwr74/z+NSUWKMpmx7+QBIZT7ECWKNedtZJvykuscriUUjrEV2TL2YygUr6wf8dNsZ1Gal1Q9ICYCaRLMVL+oDIy4hEX2MpABkTZhkZcbkIEQH2GRAwYZAPETPKJkFWRUJESYgf0JMgoiEoQyIqISICMgEAExQQQmACaARBEq40WiCYXxIJ0IkUldJO1KCMzYRSY4YTxJNwt+v7s8rTJ95J80kI/5uVtRbKS+84hj0kDw/CMk+4X0SI/0yF9B+gsyChl6km5PlgUPVydVLu4/Q8h3xdn8jcdbxndeoDOvU+aLI/dvX7lwkcKt2r1+VqY1hRiZViNhbC/QiQkSA19LlHRhBCLQ3EUzIhFsU6MYhRAabphRCXF0gBiAUIYglYEIdZwTGZAABlOBAQloxA4xBBLgssDPEEjAaw8fQyARscBpMwQSUasolyGQiFyqNZjjL0uit54JMrXBAAAAAElFTkSuQmCC",es:"data:image/png;base64,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"}).forEach(b=>{var c=b[0],d=b[1],e=a.cloneNode();e.className="SocialLinks-link translateLink",e.innerHTML=`<div class="translateWrap"><img src="${d}"></div>`,e.href=`javascript:bablic.redirectTo('${c}')`,a.parentNode.append(e)})}}function initGalleryButtons(){var a=document.querySelectorAll(".Index-gallery-item-content-body a");a.forEach(a=>turnToButton(a))}function initStrangeElements(){window.vid=document.querySelector("#zoostock-nav .sqs-video-icon"),window.lightbox=document.querySelector(".Footer .lightbox-handle"),checkCustomItem()&&document.body.classList.add("customItems")}function animater(){sr.reveal(document.querySelectorAll(".homepage [id*=\"anim\"] .Index-page-content"),{distance:"0px"}),sr.reveal(document.querySelectorAll(".sqs-col-3"),{viewFactor:.3},50),sr.reveal(".sqs-gallery-design-grid-slide",{duration:500},75),sr.reveal(".Index-gallery-item-inner",{duration:500,opacity:.6},75),sr.reveal(document.querySelectorAll("#networking-accesories-components-home-red .spacer-block + .row")),sr.reveal(document.querySelectorAll(".homepage .image-card"),{origin:"left"})}function setProductQuote(){const a=document.querySelector(".Footer .lightbox-handle"),b=window.translations.getAQuote;if(checkItem()){const c=document.querySelector("#block-getQuote .sqs-block-button-element");c&&(c.onclick=b=>{b.stopPropagation(),b.preventDefault(),a.click()}),document.querySelectorAll(".sqs-block-button-element").forEach(c=>{Object.values(b).forEach(b=>{c.text!=b||(c.onclick=b=>{b.stopPropagation(),b.preventDefault(),a.click()})})})}checkList()&&Y.one("body").delegate("click",b=>{b.preventDefault(),b.stopPropagation(),a.click()},".quoter")}function setCatNav(){if(!checkProducts()&&!checkItem())return;if(checkList())return;if(!Y.one(".Main--blog-item")&&!Y.one(".ProductItem-nav"))return;const a=document.querySelectorAll(".BlogItem .sqs-block-archive");if(!a)return;const b=document.querySelector("a.Blog-meta-item-category").textContent.trim(),c=document.querySelector(".BlogItem-title"),d=c.parentNode;a.forEach(a=>{d.insertBefore(a,c),a.querySelectorAll("a").forEach(a=>{a.textContent.trim()===b&&a.classList.add("active")})})}function initAccordions(){const a=document.querySelector(".Intro .markdown-block"),b=document.querySelector(".customFiltersWrapper");b&&a&&(b.append(a),a.querySelectorAll(".markdown-block h4 + p").forEach(a=>{const b=a,c=a.previousSibling.previousSibling;b.classList.add("accTarget"),c.classList.add("accTrigger"),c.onclick=()=>b.classList.toggle("accShow")}))}const setFilteredSections=()=>document.body.classList.add("filteredPage");function setFilterQuoteButtons(){Y.one("body").delegate("click",a=>{a.preventDefault(),a.stopPropagation(),window.lightbox.click()},".quoter")}
