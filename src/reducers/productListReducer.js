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
        case 'EDIT_PRODUCT':
            let updatedData = action.payload
            let data = {
                productCategory: updatedData.productCategory,
                productName: updatedData.productName,
                productStock: updatedData.productStock,
                productPrice: updatedData.productPrice,
                productDescription: updatedData.productDescription,
                productAddedOn: updatedData.productAddedOn,
                productUpdatedOn: updatedData.productUpdatedOn,
                productUserId: updatedData.productUserId,
                id: updatedData.id,
                productSubCategory: updatedData.productSubCategory,
                productColor: updatedData.productColor,
                productCategoryName: updatedData.productCategoryName
            }
            let indices = state.findIndex(product => product.id === updatedData.id)
            state[indices] = data
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