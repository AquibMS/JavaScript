// There is a shop with old-style cash registers. Rather than scanning items and pulling the prices from the database, the price of each item is typed in manually. This method sometimes leads to errors. Given a list of items and their correct prices, compare the prices to those  entered when each item was sold. Determine the number of errors in selling prices.

// Ex: products = ['eggs', 'milk', 'cheese']
// productPrices = [2.89, 3.29, 5,79]
// productSold = ['eggs', 'eggs', 'cheese', 'milk']
// soldPrice = [2.89, 2.99, 5.97, 3.29]

// Result: the second sale of eggs has a wrong price, as does the sale of cheese. There are 2 errors in pricing.

function countPriceErrors(products, productPrices, productSold, soldPrice){
    const priceMap = new Map(products.map((product,index) => [product, productPrices[index]]));

    let errorCount = 0;

    for(let i = 0 ; i < productSold.length ; i++){
        const soldItem = productSold[i];
        const price = soldPrice[i];
        if(priceMap.get(soldItem) !== price){
            errorCount++;
        }
    }
    return errorCount;
}

const products = ['eggs', 'milk', 'cheese'];
const productPrices = [2.89, 3.29, 5.79];
const productSold = ['eggs', 'eggs', 'cheese', 'milk'];
const soldPrice = [2.89, 2.99, 5.97, 3.29];

const result = countPriceErrors(products, productPrices, productSold, soldPrice);
console.log(result);