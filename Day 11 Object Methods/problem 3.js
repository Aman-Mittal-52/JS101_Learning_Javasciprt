


// Code Author - Aman Mittal 
// Linkdin --> https://www.linkedin.com/in/aman-mittal-22833b288/



function calculateSalesTotals() {
    sales = [
      { item: 'PS4 Pro', stock: 3, original: 399.99 },
      { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
      { item: 'Nintendo Switch', stock: 4, original: 299.99 },
      { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
      { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
    ];
  
    output = [];
  
    for (i = 0; i < sales.length; i++) {
      saleItem = sales[i];
  
      if (saleItem.discount !== undefined && saleItem.discount !== 0) {
        salePrice = saleItem.original * (1 - saleItem.discount);
        total = saleItem.stock * salePrice;
  
        output.push({
          discount: saleItem.discount,
          item: saleItem.item,
          original: saleItem.original,
          sale: salePrice,
          stock: saleItem.stock,
          total: total
        });
      } else {
  
        total = saleItem.stock * saleItem.original;
  
        output.push({
          item: saleItem.item,
          original: saleItem.original,
          sale: saleItem.original,
          stock: saleItem.stock,
          total: total
        });
      }
    }
  
    return output;
  }
  
  console.log(calculateSalesTotals());
  