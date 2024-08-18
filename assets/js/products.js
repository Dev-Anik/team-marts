// Arrays for different categories
const mensServices = [
    {
        imgSrc: 'assets/images/mans/1646680122B64vQ.png',
        productCode: 'MANS001',
        productInfo: ['Slim Fit', '98% Cotton, 2% Elastane.', 'Weight- 10.5 oz.']
    },
    {
        imgSrc: 'assets/images/mans/1642680104p33BZ (2).png',
        productCode: 'MANS002',
        productInfo: ['Regular Fit', '100% Cotton.', 'Weight- 12 oz.']
    }
    // Add more service objects as needed
];

const womansServices = [
    {
        imgSrc: 'assets/images/womans/1642680104p33BZ.png',
        productCode: 'WOM001',
        productInfo: ['Slim Fit', '100% Cotton.', 'Weight- 8 oz.']
    }
    // Add more service objects as needed
];

const boysServices = [
    {
        imgSrc: 'assets/images/boys/1646680122B64vQ4.png',
        productCode: 'BOY001',
        productInfo: ['Regular Fit', 'Polyester.', 'Weight- 5 oz.']
    }
    // Add more service objects as needed
];

const girlsServices = [
    {
        imgSrc: 'assets/images/girls/1646680122B64vQ5.png',
        productCode: 'GIRL001',
        productInfo: ['Loose Fit', 'Cotton Blend.', 'Weight- 7 oz.']
    }
    // Add more service objects as needed
];

// Function to create service divs
function createServiceDivs(services, containerId) {
    const container = document.getElementById(containerId);

    services.forEach(service => {
        // Create the outer col div
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-3', 'col-6');

        // Create the service div
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service');
        serviceDiv.setAttribute('data-bs-toggle', 'modal');
        serviceDiv.setAttribute('data-bs-target', '#productModal');

        // Create the arrow-wrapper
        const arrowWrapper = document.createElement('div');
        arrowWrapper.classList.add('arrow-wrapper', 'box-hover');
        const arrowDiv = document.createElement('div');
        arrowDiv.classList.add('arrow', 'green');
        arrowDiv.innerHTML = '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
        arrowWrapper.appendChild(arrowDiv);
        serviceDiv.appendChild(arrowWrapper);

        // Create the img-box
        const imgBox = document.createElement('div');
        imgBox.classList.add('img-box');
        const img = document.createElement('img');
        img.setAttribute('src', service.imgSrc);
        img.setAttribute('alt', '');
        img.classList.add('service-img');
        imgBox.appendChild(img);
        serviceDiv.appendChild(imgBox);

        // Create the product-code
        const productCode = document.createElement('h3');
        productCode.classList.add('product-code');
        productCode.textContent = service.productCode;
        serviceDiv.appendChild(productCode);

        // Create the product-info elements
        service.productInfo.forEach(info => {
            const productInfo = document.createElement('p');
            productInfo.classList.add('product-info', 'fade-out');
            productInfo.textContent = info;
            serviceDiv.appendChild(productInfo);
        });

        // Append the service div to the outer col div
        colDiv.appendChild(serviceDiv);

        // Append the col div to the container
        container.appendChild(colDiv);
    });
}

// Call the function on page load for each category
document.addEventListener('DOMContentLoaded', function() {
    createServiceDivs(mensServices, 'mensServicesContainer');
    createServiceDivs(womansServices, 'womansServicesContainer');
    createServiceDivs(boysServices, 'boysServicesContainer');
    createServiceDivs(girlsServices, 'girlsServicesContainer');
});



document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to service divs after they have been generated
    document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('click', function() {
            // Debugging alert
            console.log('Service clicked:', service); // Use console.log for better debugging

            // Get the image source of the clicked service div
            const imgSrc = this.querySelector('.service-img').getAttribute('src');
            // Update the modal image
            document.getElementById('modalImg').setAttribute('src', imgSrc);

            // Get the product code and update the modal heading
            const productCode = this.querySelector('.product-code').textContent;
            document.querySelector('.modal-heading').textContent = productCode;

            // Get all product-info elements
            const productInfoElements = this.querySelectorAll('.product-info');

            // Clear existing product features in the modal
            const productFeaturesContainer = document.querySelector('.modal-body-left');
            productFeaturesContainer.querySelectorAll('.product-feature').forEach(feature => feature.remove());

            // Create and append new product-feature elements based on product-info elements
            productInfoElements.forEach(info => {
                const productFeature = document.createElement('div');
                productFeature.classList.add('product-feature');
                productFeature.innerHTML = `<span class="green bold-dot">• </span>${info.textContent}`;
                productFeaturesContainer.appendChild(productFeature);
            });
        });
    });
});



// showing products query
function showProduct(event, productVal) {
    // Remove the 'active-product' class from the previously active div
    $('.option.active-product').removeClass('active-product');
    $(event.currentTarget).addClass('active-product');

    // Hide all containers by adding the 'fade-out' class
    $('#mensServicesContainer, #womansServicesContainer, #boysServicesContainer, #girlsServicesContainer').addClass('fade-out');

    // Show the specific container based on productVal
    switch (productVal) {
        case 1:
            $('#mensServicesContainer').removeClass('fade-out');
            break;
        case 2:
            $('#womansServicesContainer').removeClass('fade-out');
            break;
        case 3:
            $('#boysServicesContainer').removeClass('fade-out');
            break;
        case 4:
            $('#girlsServicesContainer').removeClass('fade-out');
            break;
        default:
            // Handle case if productVal is not 1-4, if needed
            console.log('Invalid product value');
            break;
    }
}
