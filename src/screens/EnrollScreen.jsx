import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../components/HomepageComponents/Header';
import COLORS from '../constants/color';
import BranchSelector from '../components/EnrollNowComponents/BranchSelector';
import RegistrationForm from '../components/EnrollNowComponents/RegistrationForm';
import FeeStructureScreen from '../components/EnrollNowComponents/FeeStructure/FeeStructure';
import PlanStructure from '../components/EnrollNowComponents/PlanStructure';
import PaymentOptions from '../components/EnrollNowComponents/Payment/PaymentOptions';
import EnrollmentSuccess from '../components/EnrollNowComponents/EnrollmentSuccess';

const {width} = Dimensions.get('window');
const isSmallScreen = width < 375;

const EnrollScreen = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 6));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const iconSteps = [
    {
      id: 1,
      Icon: MaterialIcons,
      name: 'location-on',
      size: 24,
    },
    {
      id: 2,
      Icon: FontAwesome,
      name: 'trophy',
      size: 20,
    },
    {
      id: 3,
      Icon: MaterialIcons,
      name: 'credit-card',
      size: 20,
    },
    {
      id: 4,
      Icon: Ionicons,
      name: 'call-outline',
      size: 20,
    },
  ];

  const getActiveStepIndex = () => {
    if (step === 1) return 1;
    if (step === 2) return 2;
    if (step === 3 || step === 4) return 3;
    if (step === 5 || step === 6) return 4;
    return 0;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* Top icon navigation with dynamic styling */}
      <View style={styles.iconsContainer}>
        {iconSteps.map((item, index) => {
          const activeIndex = getActiveStepIndex();
          const isActive = item.id <= activeIndex;

          return (
            <View
              key={index}
              style={[styles.iconCircle, isActive && styles.activeIconCircle]}>
              <item.Icon
                name={item.name}
                size={item.size}
                color={isActive ? COLORS.white : COLORS.black}
              />
            </View>
          );
        })}
      </View>

      {/* Conditional screen rendering */}
      {step === 1 && <BranchSelector nextStep={nextStep} />}
      {step === 2 && (
        <RegistrationForm prevStep={prevStep} nextStep={nextStep} />
      )}
      {step === 3 && (
        <FeeStructureScreen prevStep={prevStep} nextStep={nextStep} />
      )}
      {step === 4 && <PlanStructure prevStep={prevStep} nextStep={nextStep} />}
      {step === 5 && <PaymentOptions prevStep={prevStep} nextStep={nextStep} />}
      {step === 6 && <EnrollmentSuccess />}
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
