let bagItems;
onLoadPage();

function onLoadPage(){
let bagItemStr=localStorage.getItem("bagItems");
bagItems=bagItemStr ? JSON.parse(bagItemStr) : [];  
displayItemsOnHomePage();
displayBagIcon(); }

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems))
  displayBagIcon(); }

function displayBagIcon(){
  let bagItemCountElement=document.querySelector(".bag-item-count");
if(bagItems.length>0){
  bagItemCountElement.innerText=bagItems.length;
  bagItemCountElement.style.visibility='visible'; }
else{
  bagItemCountElement.style.visibility='hidden'; } }


function displayItemsOnHomePage(){
let itemsContainerElement=document.querySelector('.items-container');
if(!itemsContainerElement){
  return; }
let innerHTML='';
items.forEach(item=>{
innerHTML+=`
  <div class="item-container">
      <img class="item-image" src="${item.image}" alt="">
      <div class="rating">${item.rating.stars}⭐| ${item.rating.count} K</div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onClick="addToBag(${item.id})";>Add to bag</button>
    </div>`
});
itemsContainerElement.innerHTML=innerHTML;

}

//let itemsContainerElement=document.querySelector('.items-container');
//itemsContainerElement.innerHTML=`
  // <div class="item-container">
  //     <img class="item-image" src="${item.item_image}" alt="">
  //     <div class="rating">${item.rating.stars}⭐| ${item.rating.noOfReviews} K</div>
  //     <div class="company-name">${item.company_name}</div>
  //     <div class="item-name">${item.item_name}</div>
  //     <div class="price">
  //     <span class="current-price">Rs ${item.current_price}</span>
  //     <span class="original-price">Rs ${item.original_price}</span>
  //     <span class="discount">(${item.discount_price}% OFF)</span>
  //     </div>
  //     <button class="btn-add-bag">Add to bag</button>
  //   </div>
//`;