const { default: Axios } = require("axios")

let categoryList = []
const categoryListReducer = (state = categoryList, action) => {
    switch (action.type) {
        case "INITIAL_CATEGORY_FETCH":
            categoryList = action.payload
            break;
        default:
            break;
    }
    return categoryList
}

export default categoryListReducer