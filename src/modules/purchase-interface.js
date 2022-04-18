const purchaseInterface = () => {
const buyButton = document.querySelector('.item-popular__buy-button');
const purchaseModal = document.querySelector(".purchase-interface-modal");
const modalClose = purchaseModal.querySelector(".modal-close");

    buyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    purchaseModal.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    purchaseModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (purchaseModal.classList.contains("modal-show")) {
            evt.preventDefault();
            purchaseModal.classList.remove("modal-show");
        }
    }
});
}
export default purchaseInterface;