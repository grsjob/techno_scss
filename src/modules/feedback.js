const feedback = () =>{
const feedbackModal = document.querySelector('.feedback-modal');
const feedbackButton = document.querySelector(".company-contacts__button");
const modalClose = feedbackModal.querySelector(".modal-close");

    feedbackButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        feedbackModal.classList.add("modal-show");
    });

    modalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (feedbackModal.classList.contains("modal-show")) {
                evt.preventDefault();
                feedbackModal.classList.remove("modal-show");
            }
        }
    });
}

export default feedback;