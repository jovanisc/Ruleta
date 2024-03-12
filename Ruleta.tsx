import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var elementos: string[] = [];
var elemento: string;

const setElemento = (elementoIn: string) => {
    elemento = elementoIn;
}

function Ruleta(): React.JSX.Element {
    const [text, onChangeText] = useState('');

    const agregar = () => {
        elementos.push(text);
        onChangeText('');
    }

    const reiniciar = () => {
        elementos = [];
        onChangeText('Ruleta Reiniciada');
        onChangeText('');
    }

    const girar = () => {
        console.log('Entro')
        let min = 0;
        let max = elementos.length;
        let posicion = Math.floor(Math.random() * (max - min) + 1);
        let auxiliar = elementos[posicion];
        elementos = [];
        elementos.push(auxiliar);
        let resultado = 'Resultado: ' + auxiliar;
        onChangeText(resultado);
    }

    function itemElementos() {
        let contador = 0;
        return elementos.map((item) => {
            contador++;
            return (<Text style={styles.item} key={contador}>{item}</Text>)
        });
    }

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        flex: 1
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white
                }}>
                    <View style={styles.container}>
                        <View style={styles.titulo}>
                            <Text style={{
                                textAlign: 'center', 
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#000000'
                            }}>Ruleta</Text>
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                value={text}
                                onChangeText={onChangeText}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={agregar}>
                                <View
                                    style={{...styles.boton, backgroundColor: '#5DC460', borderColor: '#00FF00'}}>
                                    <Text style={styles.textoBoton}>Agregar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={reiniciar}>
                                <View 
                                    style={{...styles.boton, backgroundColor: '#FF6F6F', borderColor: '#FF0000'}}>
                                    <Text style={styles.textoBoton}>Reiniciar</Text>
                                </View>
                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={girar}>
                            <View
                                style={{...styles.boton, backgroundColor: '#F7BD56', borderColor: '#CB4C08', borderRadius: 16}}>
                                <Text style={{...styles.textoBoton, textAlign: 'center'}}>Girar</Text>
                            </View>
                        </TouchableOpacity>
                        {elementos.length > 0 ?
                            <View style={styles.elementos}>
                                {itemElementos()}
                            </View>
                        :
                            <View />
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#005187',
        borderRadius: 6,
        color: '#000000'
    },
    titulo: {
        padding: 18,
        fontSize: 18
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    boton: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 6,
        paddingHorizontal: 24,
        paddingVertical: 6,
        marginVertical: 10
    },
    textoBoton: {
        color: '#000000',
        fontWeight: 'bold'
    },
    item: {
        borderColor: '#005187',
        borderBottomWidth: 0.5,
        paddingVertical: 8,
        fontSize: 20,
        fontStyle: 'italic',
        color: '#000000'
    },
    elementos: {
        borderWidth: 0.5,
        borderColor: '#005187',
        borderRadius: 8,
        padding: 18,
        marginTop: 18
    }
});

export default Ruleta;
