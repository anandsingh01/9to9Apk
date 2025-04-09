import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../components/HomepageComponents/Header';
import COLORS from '../constants/color';
import BranchSelector from '../components/EnrollNowComponents/BranchSelector';
import RegistrationForm from '../components/EnrollNowComponents/RegistrationForm';
import FeeStructureScreen from '../components/EnrollNowComponents/FeeStructure';

// Get screen dimensions for responsiveness
const {width} = Dimensions.get('window');
const isSmallScreen = width < 375;

const EnrollScreen = () => {
  // Sample data for the branches
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* Top icons */}
      <View style={styles.iconsContainer}>
        <View style={[styles.iconCircle, styles.activeIconCircle]}>
          <MaterialIcons name="location-on" size={24} color={COLORS.white} />
        </View>
        <View style={styles.iconCircle}>
          <FontAwesome name="trophy" size={20} color={COLORS.black} />
        </View>
        <View style={styles.iconCircle}>
          <MaterialIcons name="credit-card" size={20} ccolor={COLORS.black} />
        </View>
        <View style={styles.iconCircle}>
          <Ionicons name="call-outline" size={20} color={COLORS.black} />
        </View>
      </View>
      {step === 1 ? <BranchSelector nextStep={nextStep} /> : ''}
      {step === 2 ? (
        <RegistrationForm prevStep={prevStep} nextStep={nextStep} />
      ) : (
        ''
      )}
      {step === 3 ? (
        <FeeStructureScreen prevStep={prevStep} nextStep={nextStep} />
      ) : (
        ''
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E9EBF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconCircle: {
    backgroundColor: COLORS.primary,
  },
});

export default EnrollScreen;
