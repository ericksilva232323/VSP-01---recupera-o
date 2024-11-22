
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert 
} from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      if (email === '' || password === '') {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        return;
      }
  
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Sucesso', `Bem-vindo, ${userCredential.user.email}!`);
      } catch (error) {
        Alert.alert('Erro', 'Login inválido. Verifique suas credenciais.');
        console.error(error);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
  
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
  
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '90%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    button: {
      width: '90%',
      height: 50,
      backgroundColor: '#007bff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
