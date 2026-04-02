import React from "react";
import {
  Text,
} from "react-native";

export default function ProductItem (props: {name: string; price: number }) {
  
    return(

    <Text> Produto da marca {props.name} e preço de R$ {props.price} </Text>

    );
}