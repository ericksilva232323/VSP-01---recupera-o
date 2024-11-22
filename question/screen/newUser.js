import { createUserWithEmailAndPassword } from '../firebase';

// Registro de novo usuário
const handleRegister = async () => {
  if (email === '' || password === '') {
    Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    Alert.alert('Sucesso', `Usuário ${userCredential.user.email} criado com sucesso!`);
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível criar o usuário.');
    console.error(error);
  }
};