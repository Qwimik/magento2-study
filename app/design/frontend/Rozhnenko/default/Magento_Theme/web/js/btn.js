define(["jquery", "Magento_Ui/js/modal/modal"], function ($, modal) {
    var options = {
        type: "popup",
        responsive: true,
        innerScroll: true,
        title: "Custom Tab",
        buttons: [
            {
                text: $.mage.__("Закрити"),
                class: "action primary",
                click: function () {
                    this.closeModal();
                },
            },
        ],
    };

    var popup = modal(options, $("#popupContainer"));
    $("#openPopup").on("click", function () {
        $("#popupContainer").modal("openModal");
    });
});
