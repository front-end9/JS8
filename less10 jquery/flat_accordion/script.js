let header = $(".js-tab-header");

let last;

$(header).on("click", function () {
    $(last).slideToggle();
    $(this).siblings(".js-tab-body").slideToggle();
    last = $(this).siblings(".js-tab-body");
});