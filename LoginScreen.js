import React, { useEffect, useState } from 'react';
import { StyleSheet, Pressable, TextInput, Image, View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="fadeIn"
                    source={require('./assets/icon.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View style={styles.footer} animation="slideInRight">
                <View style={{ backgroundColor: '#fff', borderRadius: 30, marginHorizontal: 80, marginVertical: 50, elevation: 6 }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#3b3b3b', textAlign: 'center', padding: 10 }}>Sign In</Text>
                </View>
                <View>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="#AEAEAE"
                        style={styles.inputContainer}
                        value={username}
                        onChangeText={(newText) => setUsername(newText)}
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor="#AEAEAE"
                        style={styles.inputContainer}
                        value={password}
                        onChangeText={(newText) => setPassword(newText)}
                    />
                </View>
                <View style={styles.buttonOuterContainer}>
                    <Pressable
                        style={styles.buttonInnerContainer}
                        android_ripple={{ color: '#fff' }}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonOuterContainer}>
                    <Pressable
                        style={styles.buttonInnerContainer}
                        android_ripple={{ color: '#fff' }}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </Pressable>
                </View>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b3b3b',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 100,
        elevation: 20,
    },
    logo: {
        alignSelf: 'center',
        width: 220,
        height: 220,
        borderRadius: 20,
    },
    inputContainer: {
        color: '#000',
        borderColor: '#fff',
        marginHorizontal: 30,
        marginTop: 10,
        marginBottom: 25,
        height: 70,
        borderWidth: 10,
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 6,
        fontSize: 18,
        paddingHorizontal: 20,
    },
    buttonOuterContainer: {
        borderRadius: 28,
        marginHorizontal: 40,
        marginVertical:5,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#3b3b3b',
        paddingVertical: 8,
    },
    buttonText: {
        color: '#eff3fa',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },

})