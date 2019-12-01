let modal = $(".js-modal");

let close = $(".js-close-modal");
let open = $(".js-open-modal");

$(open).on("click", () => $(modal).fadeIn());
$(close).on("click", () => $(modal).fadeOut());
$(modal).on("click", function () {
    if (event.target == this) {
        $(modal).fadeOut();
    }
});