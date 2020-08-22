const InitialFetch = (data) => {
    return {
        type: "ADD_PRODUCTS_TO_STORE",
        payload: data
    }
}

export default InitialFetch