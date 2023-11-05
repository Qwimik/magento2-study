require(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function($, modal) {
        var options = {
            type: 'popup',
            responsive: true,
            innerScroll: true,
            title: 'Pop-up title',
            buttons: [{
                text: $.mage.__('Close'),
                class: 'modal-close',
                click: function (){
                    this.closeModal();
                }
            }]
        };

        modal(options, $('#modal-content'));
        $("#modal-btn").on('click',function(){
            $("#modal-content").modal("openModal");
        });
    }
);

