import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#ffffff",
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
    drawer_content: {
        backgroundColor: "#CDCDCD",
        flex: 1,
    },
    drawer_header: {
        alignItems: "center",
        backgroundColor: "#ffe600",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    drawer_body: {
        backgroundColor: "#fff",
        flex: 6,
    },
    mercado_pago: {
        backgroundColor: "#FFF589",
        borderRadius: 20,
        flexDirection: "row",
        paddingHorizontal: 20,
        height: 30,
        marginTop: 20,
        marginBottom: 20,
        paddingVertical: 5,
        width: "100%",
    },
    mercado_pago_text: {
        marginLeft: 20,
    },
    user: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default styles;
