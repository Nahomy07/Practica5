import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegistroScreen() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  
  // estados para controlar mensajes de validación
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState(''); // 'error' | 'exito' | ''

  const validarEmail = (correo) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
  };

  const manejarPresion = () => {
    // Limpiar mensaje previo
    setMensaje('');
    setTipoMensaje('');

     // Validación: campos vacíos
    if (nombre.trim() === '' || email.trim() === '') {
      setMensaje('Por favor, completa todos los campos obligatorios.');
      setTipoMensaje('error');
      return; // Detiene la ejecución si hay error
    }

    if (nombre.trim().length < 3) {
    setMensaje('El nombre debe tener al menos 3 caracteres.');
    setTipoMensaje('error');
    return;
  }

    if (!validarEmail(email)) {
    setMensaje('Por favor, ingresa un correo electrónico válido.');
    setTipoMensaje('error');
    return;
  }

    // Si todo está correcto
    setMensaje(`¡Bienvenido, ${nombre}! Tu registro fue exitoso.`);
    setTipoMensaje('exito');
  };

  return (
    <View style={styles.contenedor}>
      <Image
        source={{ uri: 'data:image/jpeg;base64,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' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Registro de Usuario</Text>

      <Text style={styles.etiqueta}>Nombre completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        placeholderTextColor="#999"
        value={nombre}
        onChangeText={(texto) => {
          setNombre(texto);
          setMensaje(''); // Oculta el mensaje al volver a escribir
        }}
        autoCapitalize="words"
      />

      <Text style={styles.etiqueta}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="ejemplo@gmail.com"
        placeholderTextColor="#999"
        value={email}
        onChangeText={(texto) => {
          setEmail(texto);
          setMensaje(''); // Oculta el mensaje al volver a escribir
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity 
        style={styles.boton} 
        onPress={manejarPresion} 
        activeOpacity={0.7}
      >
        <Text style={styles.textoBoton}>Continuar</Text>
      </TouchableOpacity>

      {/* Renderizado condicional del mensaje */}
      {mensaje ? (
        <Text style={[
          styles.mensaje, 
          tipoMensaje === 'error' ? styles.mensajeError : styles.mensajeExito
        ]}>
          {mensaje}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
    borderRadius: 60,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 30,
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a5568',
    alignSelf: 'flex-start',
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    fontSize: 16,
    color: '#1a202c',
  },
  boton: {
    width: '100%',
    backgroundColor: '#2980b9',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  // Estilos para los mensajes del Paso 5
  mensaje: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    width: '100%',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
  mensajeError: {
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    borderWidth: 1,
    borderColor: '#fca5a5',
  },
  mensajeExito: {
    backgroundColor: '#d1fae5',
    color: '#047857',
    borderWidth: 1,
    borderColor: '#6ee7b7',
  },
});