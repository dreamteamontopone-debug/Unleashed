// GET ALL THE PRODUCTS ID
const products = document.querySelectorAll('.products');

// FUNCTION TO CALL THE NEW PAGE WHEN CLICKED
products.forEach(product => {
    product.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        window.location.href = `/unleashed/PAGES/product${productId}.html`;
    });
});
