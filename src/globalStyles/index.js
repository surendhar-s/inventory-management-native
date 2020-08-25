import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginComponentContainer: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1b1b1b"
    },
    textInputWidth: {
        width: "60%",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        color: "white",
        borderRadius: 7
    },
    appbar: {
        padding: 30,
    },
    searchField: {
        marginLeft: "10%",
        marginTop: "5%",
        marginBottom: "5%",
        width: "80%",
        height: 40,
        borderRadius: 10
    },
    viewContainer: {
        display: "flex",
        flexDirection: "row"
    },
    viewTextContainer: {
        flexBasis: "50%",
        flexWrap: "wrap",
        padding: 20
    },
    backButton: {
        alignItems: "center",
    },
    addProductContainer:{
        padding: 15
    },
    addProductField: {
        width: "90%",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        color: "black",
        borderRadius: 7
    },
    addProductButtonsContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    addProductButtons:{
        width: 150,
        color: "red"
    },
    errorText: {
        color: "red"
    },
    addProductFieldDesc:{
        width: "90%",
        // height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        color: "black",
        borderRadius: 7
    }
})
export default styles