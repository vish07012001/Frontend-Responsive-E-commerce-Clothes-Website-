let qty = document.querySelector("#qtyInput")

function decrement() {

    if (qty.value <= 1) {
        qty.value = 1
    } else {
        qty.value = parseInt(qty.value) - 1;
    }
}

function increment() {

    qty.value = parseInt(qty.value) + 1;

}