import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginComponentContainer: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textInputWidth: {
        width: "60%",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5
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
    }
})
export default styles