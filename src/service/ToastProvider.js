// ToastProvider.js

import React, { createContext, useContext, useState, useCallback } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  /**
   * showToast: Call this function with a message, type and optional duration.
   * Types can be 'default', 'success', 'error', or 'info' and you can tweak styles accordingly.
   */
  const showToast = useCallback((message, type = 'default', duration = 4000) => {
    const id = Date.now();
    // Add new toast
    setToasts(prevToasts => [...prevToasts, { id, message, type }]);

    // Remove after duration
    setTimeout(() => {
      setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast messages container */}
      <View style={styles.toastContainer}>
        {toasts.map(toast => (
          <Animatable.View
            key={toast.id}
            animation="fadeInUp"
            duration={300}
            easing="ease-out"
            style={[styles.toast, styles[`toast_${toast.type}`]]}>
            <Text style={styles.toastText}>{toast.message}</Text>
          </Animatable.View>
        ))}
      </View>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000, // ensure the toasts appear on top
  },
  toast: {
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 8,
    borderRadius: 8,
    minWidth: width * 0.8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
  },
  // Custom styles for different types
  toast_success: {
    backgroundColor: 'green',
  },
  toast_error: {
    backgroundColor: 'red',
  },
  toast_info: {
    backgroundColor: 'blue',
  },
});
