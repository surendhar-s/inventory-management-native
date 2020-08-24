let productList = []
const productListReducer = (state = null, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS_TO_STORE':
            productList = action.payload
            break;
        case 'ADD_PRODUCT':
            let newData = action.payload
            state.push(newData)
            return state
        case 'DELETE_PRODUCT':
            let id = action.payload
            let newList = state.filter(product => parseInt(product.id) !== parseInt(id))
            state = newList
            return state
        default:
            break;
    }
    return productList
}
export default productListReducer