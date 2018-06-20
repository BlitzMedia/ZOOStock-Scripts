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
      `);Y.one(`.secondLevel.${b}`).append(c)})},megaTemplate:"<div class=\"megaMenu-wrapper\"><div class=\"megaMenu-innerWrapper\"><div class=\"megaMenu\"></div><ul class=\"imageMenu\"></ul></div></div>"};function buildMegaMenu(a,b){b=b.ancestor(),b.addClass("Header-nav-item--megamenu");const c=Y.Node.create(megaBuild.megaTemplate);c.appendTo(b),a.forEach(a=>{const b=a.fields.Name.toLowerCase().replace(/[0-9]/g,"");megaBuild.masterList(a.fields.URL,a.fields.Name,b,Y.one(".megaMenu")),megaBuild.imageList(a.fields.Image),megaBuild.slaveList(a.children,b)})}function initMegaMenu(){const a=Y.one(".Header-nav a[href*=\"/catalog\"]"),b=getRecords(`${"https://api.airtable.com/v0/app6ponqcBGtYfPYT"}/Megamenu?api_key=${"keyMmV8ObRgCW8YNy"}`);b.then(b=>{const c=b.filter(a=>"master"===a.fields.Hierarchy),d=b.filter(a=>"slave"===a.fields.Hierarchy);c.sort((a,b)=>a.fields.Order-b.fields.Order),d.sort((a,b)=>a.fields.Order-b.fields.Order),c.forEach(a=>{const b=a.id,c=d.filter(b=>b.fields["Master Record"]==a.id);a.children=c}),buildMegaMenu(c,a)})}window.Squarespace.onInitialize(Y,()=>initMegaMenu());
function buildProductNav(a,b){var c=Y.Node.create("<nav style=\"margin:0 0 5px 0;line-height:1.4\" class=\"ProductItem-nav\"><div class=\"ProductItem-nav-breadcrumb\"></div><div class=\"ProductItem-nav-pagination\"></div></nav>");if(a&&a.length){var d="/";a.forEach(function(b,e){d+=b+"/";var f=e<a.length-1?"<span class=\"ProductItem-nav-breadcrumb-separator\"></span>":"",g=f?"":"disabled";c.one(".ProductItem-nav-breadcrumb").append("<a href=\""+d+"\" class=\"ProductItem-nav-breadcrumb-link "+g+"\">"+b+"</a>"+f)})}if(b&&3==b.length){var e="<a href=\"/"+a[0]+b[1].fullUrl+"\" class=\"ProductItem-nav-pagination-link ProductItem-nav-pagination-link--prev\"><span class=\"ProductItem-nav-pagination-link-direction\">Previous</span><span class=\"ProductItem-nav-pagination-link-title\">"+b[1].title+"</span></a><span class=\"ProductItem-nav-pagination-separator ProductItem-nav-pagination-separator--hasPrev ProductItem-nav-pagination-separator--hasNext\"></span><a href=\"/"+a[0]+b[2].fullUrl+"\" class=\"ProductItem-nav-pagination-link ProductItem-nav-pagination-link--next\"><span class=\"ProductItem-nav-pagination-link-direction\">Next</span><span class=\"ProductItem-nav-pagination-link-title\">"+b[2].title+"</span></a>";c.one(".ProductItem-nav-pagination").append(e)}return c}function initProductNav(){if(Y.one(".Main--blog-item")){var a=!!location.pathname&&location.pathname.replace(/^\/|\/$/g,"").split("/"),b=Y.one(".Main-content");b&&1<a.length&&b.prepend(buildProductNav(a))}}window.Squarespace.onInitialize(Y,()=>initProductNav());
const body=document.body,checkHomepage=()=>body.classList.contains("homepage"),checkProducts=()=>body.classList.contains("collection-type-blog"),checkList=()=>body.classList.contains("view-list"),checkItem=()=>body.classList.contains("view-item");window.sr=ScrollReveal({mobile:!1,viewFactor:.1,distance:"10px"});function initBlitz(){initZOOStockHome(),animater(),setProductQuote(),setCatNav(),console.log("\u26A1\uFE0F")}window.Squarespace.onInitialize(Y,()=>initBlitz());function initZOOStockHome(){var a=document.querySelectorAll(".Index-gallery-item-content-body a");a.forEach(a=>turnToButton(a)),window.vid=document.querySelector("#zoostock-nav .sqs-video-icon")}function animater(){sr.reveal(document.querySelectorAll(".homepage [id*=\"anim\"] .Index-page-content"),{distance:"0px"}),sr.reveal(document.querySelectorAll(".sqs-col-3"),{viewFactor:.3},50),sr.reveal(".sqs-gallery-design-grid-slide",{duration:500},75),sr.reveal(".Index-gallery-item-inner",{duration:500,opacity:.6},75),sr.reveal(document.querySelectorAll("#networking-accesories-components-home-red .spacer-block + .row")),sr.reveal(document.querySelectorAll(".homepage .image-card"),{origin:"left"})}function setProductQuote(){const a=document.querySelector(".Footer .lightbox-handle");if(checkItem()){const b=document.querySelector("#block-getQuote .sqs-block-button-element");b&&(b.onclick=()=>a.click())}checkList()&&(Y.one("body").delegate("click",b=>{b.preventDefault(),a.click()},".quoter"),document.querySelectorAll(".filtered .button-block a").forEach(b=>{"Get a Quote"===b.text&&(b.onclick=b=>{b.preventDefault(),a.click()})}))}function setCatNav(){if(!checkProducts()&&!checkItem())return;if(checkList())return;const a=document.querySelectorAll(".BlogItem .sqs-block-archive");if(!a)return;const b=document.querySelector("a.Blog-meta-item-category").textContent.trim(),c=document.querySelector(".BlogItem-title"),d=c.parentNode;a.forEach(a=>{d.insertBefore(a,c),a.querySelectorAll("a").forEach(a=>{a.textContent.trim()===b&&a.classList.add("active")})})}
window.customFilterSettings={targets:[{container:".collection-5b291a29575d1ff09437761d #block-yui_3_17_2_1_1529421639296_3852",items:".summary-item",settings:{performanceMode:!0,showItemsCount:!0,position:"left",keepDropdownsOpen:!1,requestAttrWithAjax:!1,mobilePanel:{enabled:!0},isotope:{enabled:!1,columnWidth:"30%"},simpleFilter:{anim:!0,show:{effect:"slideLeft",transitionDuration:400,stagger:100},hide:{effect:"slideRight",transitionDuration:300,stagger:60}},filter:{category:!1,tag:!1,items:[{name:"Vendor",multiple:!0,getAttr:"categories"},{name:"Form Factor",multiple:!0,getAttr:(a,b)=>{var c=[],d=b.variants;return d&&d.length&&(c=Y.Array.map(d,function(a){var b=a["Form Factor"]||"";return b})),c}},{name:"Data Rate",multiple:!0,getAttr:function(a,b){var c=[],d=b.variants;return d&&d.length&&(c=Y.Array.map(d,function(a){var b=a["Data Rate"]||"";return b})),c}},{name:"Media Type",multiple:!0,getAttr:function(a,b){var c=[],d=b.variants;return d&&d.length&&(c=Y.Array.map(d,function(a){var b=a["Media Type"]||"";return b})),c}}]},sort:{enabled:!1,items:[{name:"Price",order:"asc|desc"}]},search:{positionOrder:100,text:"Search",searchFunc:function(a){var b="",c="",d="";return a=a._node?a._node:a,c=a.textContent.trim(),d=a.className,b=c+" "+d,b},enabled:!0}}}]};