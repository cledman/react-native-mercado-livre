import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert, SafeAreaView } from 'react-native';

import styles from './styles';
const listProduct = [
    {
        id: "1",
        name: "TV 1",
        price: 1250.27,
        condition: "Novo",
    },
    {
        id: "2",
        name: "TV 2",
        price: 1250.27,
        condition: "Novo",
    },   
    {
        id: "3",
        name: "TV 3",
        price: 1250.27,
        condition: "Novo",
    }     
];

function Item(item) {
    return(
        <TouchableOpacity
        >
            <Image />
            <View>
                <Text>Nome:</Text>
                <Text>Preço:</Text>
                <Text>Parcelamento:</Text>
                <Text>Condição:</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function List() {
    return (
        <>
            <Text style={styles.text_results}>
                Produtos encontrados: {listProduct.length}
            </Text>        
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={listProduct}
                    render={({ item }) =><Item  item={item}/>}
                    keyExtractor={(item) =>item.id}
                    />
            </SafeAreaView>
        </>
    );
}