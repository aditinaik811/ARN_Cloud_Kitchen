let total = 0;
let selectedItems = [];
function addToCart(itemName, price) {
    selectedItems.push({ name: itemName, price: price });
    const itemList = document.getElementById('item-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} - Rs ${price}`;
    itemList.appendChild(listItem);
    total += price;
    document.getElementById('total-price').textContent = total;
    document.getElementById('confirm-order-btn').disabled = false;
}     
          
document.getElementById('confirm-order-btn').addEventListener('click', function () {
    alert('Order Confirmed! Total: Rs ' + total);
});
        
function confirmOrder(){
    document.getElementById('confirm_message').innerHTML="Thank You For Ordering Your Order will be delivered within 45 minutes."
}

       