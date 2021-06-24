$(document).ready(function() {
    $('.img-design').click(function() {
        $('#information-1').show();
        $('#information-2').hide();
        $('#information-3').hide();
    });
    $('.img-devlpt').click(function() {
        $('#information-2').show();
        $('#information-1').hide();
        $('#information-3').hide();
    });
    $('.img-product').click(function() {
        $('#information-3').show();
        $('#information-1').hide();
        $('#information-2').hide();
    });
});