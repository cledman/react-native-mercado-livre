import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        paddingLeft: 40,
        paddingRight: 40,
    },
    text_white: {
        color: "#FFFFFF",
    },
    text_primary: {
        color: "#3483FA",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4",
        marginTop: 40,
        width: "100%",
    },
    containerInput: {
        marginBottom: 40,
        width: "100%",
    },
    redefinePass: {
        marginTop: 40,
    },
    buttonBack: {
        color: "#3483FA",
        left: 20,
        position: "absolute",
        top: 60,
    },
});

export default styles;
