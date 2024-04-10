import React, { forwardRef, Ref } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

interface WrapInputProps {
  error?: string;
}

const WrapInput = forwardRef(
  (
    { error }: WrapInputProps,
    ref: Ref<TextInput>,
  ) => {
    return (
      <View style={styles.container}>
        <View style={[styles.containerInput, error ? styles.errorBorder : null]}>
          <TextInput
            ref={ref}
            style={styles.input}
          />
          {error && (
            <Image
              source={require('../../assests/error.png')}
              style={styles.errorIcon}
            />
          )}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: 'black', // Default border color
  },
  input: {
    flex: 1,
    padding: 0,
  },
  errorBorder: {
    borderColor: 'red', // Border color when there's an error
  },
  errorIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default WrapInput;
