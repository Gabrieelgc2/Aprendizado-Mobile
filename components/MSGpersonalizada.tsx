import React from "react";

import {
    Text
} from "react-native";


interface MSGpersonalizadaProps {
    name: string;
}

export class MSGpersonalizada extends React.Component<MSGpersonalizadaProps> {

    render() {
        return (
            <Text> Olá, Seja bem-vindo {this.props.name}! </Text>
        );
    }
}