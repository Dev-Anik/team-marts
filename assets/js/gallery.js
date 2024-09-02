// showing products query
function showProduct(event, productVal) {
    // Remove the 'active-product' class from the previously active div
    $('.option.active-product').removeClass('active-product');
    $(event.currentTarget).addClass('active-product');

    // Hide all containers by adding the 'fade-out' class
    $('#photoContainer, #videoContainer').addClass('fade-out');

    // Show the specific container based on productVal
    switch (productVal) {
        case 1:
            $('#photoContainer').removeClass('fade-out');
            break;
        case 2:
            $('#videoContainer').removeClass('fade-out');
            break;
        default:
            // Handle case if productVal is not 1-4, if needed
            console.log('Invalid product value');
            break;
    }
}

