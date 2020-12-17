import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text_results: {
        marginHorizontal: 10,
        marginTop: 20,
    },
    container_item: {
        flexDirection: "row",
    },
    picture: {
        height: 80,
        marginRight: 30,
        width: 80,
    },
    item: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#CDCDCD",
        flexDirection: "row",
        marginVertical: 8,
        padding: 20,
    },
    item_title: {
        fontSize: 16,
    },
    item_price: {
        fontSize: 16,
    },
    item_subdivision: {
        fontSize: 10,
    },
    item_subdivision_detach: {
        color: "#00a650",
        fontSize: 12,
    },
});

export default styles;
