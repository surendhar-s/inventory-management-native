const deleteProduct = data => {
    return {
        type: 'DELETE_PRODUCT',
        payload: data
    }
}

export default deleteProduct