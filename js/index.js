$(function() {
    var $openModal = $("#openModal"),
        $closeModal = $("#closeModal"),
        $modal = $("#modalBox");

    $openModal.on('click', function() {
    	$modal.show();
      // $modal.addClass('modal-box-vis');
    });
    $closeModal.on('click', function() {

      $modal.fadeOut('slow');

      // $modal.removeClass('modal-box-vis');
    });
});