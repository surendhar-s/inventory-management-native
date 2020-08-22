let productList = []
const productListReducer = (state = productList, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS_TO_STORE':
            console.log("Products");
            productList = action.payload
            break;
        default:
            break;
    }
    return productList
}
export default productListReducer