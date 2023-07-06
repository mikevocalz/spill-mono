import React, { useRef, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

export const BottomKeyboardAvoidingView = ({ children, isOpen }) => {
  const keyboardAvoidingViewRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      keyboardAvoidingViewRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      ref={keyboardAvoidingViewRef}
    >
      {children}
    </KeyboardAvoidingView>
  );
};