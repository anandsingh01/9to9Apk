import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AssetsStock from '../constants/ImagesContants';
import * as Animatable from 'react-native-animatable';
import {useToast} from '../service/ToastProvider';
import {OtpInput} from 'react-native-otp-entry';
import COLORS from '../constants/color';

// Create an animated TextInput component so we can call focus() on it.
const AnimatableTextInput = Animatable.createAnimatableComponent(
  // Using TextInput directly allows us to get the native focus() method.
  require('react-native').TextInput,
);

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const otpInputs = useRef([]);
  const {showToast} = useToast();

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      // Now focus the next TextInput (AnimatableTextInput supports focus)
      otpInputs.current[index + 1]?.getNode().focus();
    }

    if (index === otp.length - 1 && value) {
      setTimeout(handleVerify, 200);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.getNode().focus();
    }
  };

  const handleVerify = () => {
    console.log('Entered OTP:', otp);
    if (otp.length === 4) {
      if (otp === '4321') {
        showToast('OTP Verified Successfully!', 'success');
        navigation.navigate('Homepage');
      } else {
        showToast('Invalid OTP. Please try again.', 'error');
      }
    } else {
      showToast('Please enter a complete 4-digit OTP', 'error');
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled">
            <Animatable.View
              animation="fadeInDown"
              style={styles.imageContainer}>
              <Animatable.Image
                // Ensure AssetsStock.Otp_screen refers to a correct image asset (e.g., a require statement)
                source={AssetsStock.Otp_screen}
                style={styles.image}
                resizeMode="contain"
                animation="fadeIn"
                duration={1000}
              />
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.textContainer}>
              <Text style={styles.title}>Enter Verification Code</Text>
              <Text style={styles.subtitle}>
                We have sent an OTP to your mobile. Please fill it in here.
              </Text>
            </Animatable.View>

            <View style={styles.otpContainer}>
              <OtpInput
                numberOfDigits={4}
                focusColor={COLORS.primary}
                // placeholderText={'-'}
                autoFocus={false}
                hideStick={true}
                blurOnFilled={true}
                type="numeric"
                secureTextEntry={false}
                onTextChange={text => setOtp(text)}
                onFilled={text => {
                  setOtp(text);
                  console.log(`OTP is ${text}`);
                }}
                textInputProps={{
                  accessibilityLabel: 'One-Time Password',
                }}
                textProps={{
                  accessibilityRole: 'text',
                  accessibilityLabel: 'OTP digit',
                  allowFontScaling: false,
                }}
                theme={{
                  containerStyle: styles.container,
                  pinCodeContainerStyle: styles.pinCodeContainer,
                  pinCodeTextStyle: styles.pinCodeText,
                  focusStickStyle: styles.focusStick,
                  focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                  placeholderTextStyle: styles.placeholderText,
                  filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                  disabledPinCodeContainerStyle:
                    styles.disabledPinCodeContainer,
                }}
              />
            </View>

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't Receive OTP? </Text>
              <TouchableOpacity
                onPress={() => {
                  /* Resend logic here */
                }}>
                <Text style={styles.resendLink}>Resend OTP</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.verifyButton}>
              <TouchableOpacity
                onPress={handleVerify}
                disabled={otp.length !== 4}
                style={[
                  styles.verifyButton,
                  {opacity: otp.length === 4 ? 1 : 0.5},
                ]}>
                <Text style={styles.verifyButtonText}>Verify</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  keyboardAvoidingView: {flex: 1},
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'space-around',
  },
  pinCodeContainer: {
    borderWidth: 1,
    borderColor: '#ccc', // gray border when empty
    backgroundColor: '#fff', // white background when empty
    borderRadius: 10,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  filledPinCodeContainer: {
    backgroundColor: '#FDF8C4',
    borderColor: '#8A40DD',
    borderWidth: 1,
    borderRadius: 10,
  },

  activePinCodeContainer: {
    backgroundColor: '#FDF8C4', // light green
    borderColor: COLORS.primary, // success green
    borderWidth: 1,
    borderRadius: 10,
  },

  pinCodeText: {
    color: '#8A40DD',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },

  imageContainer: {alignItems: 'center', marginVertical: 20},
  image: {height: 283},
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'Poppins-Regular',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  otpBoxWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fdf1ff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  otpBox: {
    fontSize: 18,
    color: '#8A4ODD',
    textAlign: 'center',
    padding: 10,
    width: '100%',
    height: '100%',
    // Ensure a transparent background if desired
    backgroundColor: 'transparent',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  resendText: {color: '#696969', fontFamily: 'Poppins-Regular'},
  resendLink: {
    color: '#8A40DD',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  verifyButton: {
    backgroundColor: '#571D99',
    width: '80%',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
});
