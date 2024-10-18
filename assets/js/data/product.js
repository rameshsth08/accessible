// Fetch the JSON data
fetch('data/products.json')
  .then(response => response.json())
  .then(data => renderProducts(data))
  .catch(error => console.error('Error loading JSON:', error));

// Function to generate HTML for products
function generateProductHTML(item) {
  return `
    <div class="col-lg-4">
      <div class="product-item">
        <div class="product-photo">
          <a href="#">
            <figure>
              <img src="${item.image}" alt="${item.title}">
              <img class="hover-img" src="${item.hoverImage}" alt="${item.title}">
            </figure>
          </a>
          <div class="product-label d-none">
            <a href="#">Coming soon</a>
          </div>
        </div>
        <!-- product caption -->
        <div class="product-content text-center">
          <h4>${item.title}</h4>
          <span>${item.productType}</span>
        </div>
      </div>
    </div>
  `;
}

// Function to render the last 3 products for each category with the last item first
function renderProducts(data) {
  const productContainer = document.querySelector('#accessible_product .row');
  const techContainer = document.querySelector('#accessible_tech .row');

  // Filter items by category and reverse the order so the last item is first
  const accessibleProducts = data.filter(item => item.category === 'accessible_product').slice(-3).reverse();
  const accessibleTech = data.filter(item => item.category === 'accessible_tech').slice(-3).reverse();

  // Render the last 3 accessible products
  accessibleProducts.forEach(item => {
    const productHTML = generateProductHTML(item);
    productContainer.innerHTML += productHTML;
  });

  // Render the last 3 accessible tech products
  accessibleTech.forEach(item => {
    const productHTML = generateProductHTML(item);
    techContainer.innerHTML += productHTML;
  });
}

///all product

// // Fetch the JSON data
// fetch('data/products.json')
//   .then(response => response.json())
//   .then(data => renderProducts(data))
//   .catch(error => console.error('Error loading JSON:', error));

// // Function to generate HTML for products
// function generateProductHTML(item) {
//   return `
//     <div class="col-lg-4">
//       <div class="product-item">
//         <div class="product-photo">
//           <a href="#">
//             <figure>
//               <img src="${item.image}" alt="${item.title}">
//               <img class="hover-img" src="${item.hoverImage}" alt="${item.title}">
//             </figure>
//           </a>
//           <div class="product-label d-none">
//             <a href="#">Coming soon</a>
//           </div>
//         </div>
//         <!-- product caption -->
//         <div class="product-content text-center">
//           <h4>${item.title}</h4>
//           <span>${item.productType}</span>
//         </div>
//       </div>
//     </div>
//   `;
// }

// // Function to render all products with the last item first
// function renderProducts(data) {
//   const productContainer = document.querySelector('#accessible_product .row');
//   const techContainer = document.querySelector('#accessible_tech .row');

//   // Filter items by category and reverse the order so the last item is first
//   const accessibleProducts = data.filter(item => item.category === 'accessible_product').reverse();
//   const accessibleTech = data.filter(item => item.category === 'accessible_tech').reverse();

//   // Render all accessible products
//   accessibleProducts.forEach(item => {
//     const productHTML = generateProductHTML(item);
//     productContainer.innerHTML += productHTML;
//   });

//   // Render all accessible tech products
//   accessibleTech.forEach(item => {
//     const productHTML = generateProductHTML(item);
//     techContainer.innerHTML += productHTML;
//   });
// }
