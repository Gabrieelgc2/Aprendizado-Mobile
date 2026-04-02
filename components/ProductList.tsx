import React, { useState } from "react";
import {
    Button,
    FlatList,
    TextInput,
    View,
    Text,
    StyleSheet
} from "react-native";

import ProductItem from "./ProductItem";

export default function ProductList() {

    interface Produto {
        id: string;
        nome: string;
        preco: number;
    }

    const [nomeInput, setNomeInput] = useState("");
    const [precoInput, setPrecoInput] = useState("");
    const [listaProdutos, setlistaProdutos] = useState<Produto[]>([]);

    const adicionarNaLista = () => {

        if (nomeInput.trim() && precoInput.trim()) {
        }

        const novo: Produto = {
            id: Date.now().toString(), // ID único baseado no tempo
            nome: nomeInput,
            preco: parseFloat(precoInput), // Converte string para número
        };

        setlistaProdutos([...listaProdutos, novo]);


    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Produtos</Text>
            <TextInput
                placeholder="Nome do produto"
                value={nomeInput}
                onChangeText={setNomeInput}
                style={styles.input}
            />

            <TextInput
                placeholder="Preço"
                value={precoInput}
                onChangeText={setPrecoInput}
                keyboardType="numeric"
                style={styles.input}
            />

            <Button title="Adicionar Produto" onPress={adicionarNaLista} />

            <FlatList
                data={listaProdutos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductItem name={item.nome} price={item.preco} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container:
    {
        flex: 1,
        padding: 40,
        backgroundColor: "#fff"
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    },

    list: {
        marginTop: 20
    },

    itemContainer: {
        padding: 15,
        backgroundColor: "#f9f9f9",
        marginBottom: 10,
        borderRadius: 8
    },

    itemText: {
        fontSize: 16
    },

});