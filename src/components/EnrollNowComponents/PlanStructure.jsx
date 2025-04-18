import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import COLORS from '../../constants/color';

const PlanStructure = ({nextStep, prevStep}) => {
  // Registration features with their respective colors
  const registrationFeatures = [
    {text: 'Pay the $100 registration fee now', color: '#FFD700'},
    {text: "First month's tuition due at orientation", color: '#8A7CFF'},
    {text: 'Immediate enrollment confirmation', color: '#FF7CFF'},
    {text: "Secure your child's spot in class", color: '#7CFF7C'},
  ];

  // Program features with their respective colors
  const programFeatures = [
    {text: 'All meals included', color: '#FFD700'},
    {text: 'Nap time supervision', color: '#8A7CFF'},
    {text: 'Weekly progress reports', color: '#FF7CFF'},
    {text: 'Comprehensive curriculum', color: '#7CFF7C'},
  ];

  // Reusable feature list component
  const FeatureList = ({features}) => (
    <>
      {features.map((feature, index) => (
        <View key={index} style={styles.featureRow}>
          <View style={[styles.featureIcon, {backgroundColor: feature.color}]}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
          <Text style={styles.featureText}>{feature.text}</Text>
        </View>
      ))}
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Fee Structure</Text>
          <Text style={styles.subtitle}>
            Select a program that best suits your child's needs
          </Text>

          {/* Registration Fee Card */}
          <View style={styles.registrationCard}>
            <Text style={styles.cardTitle}>Pay Registration Fee Now</Text>
            <FeatureList features={registrationFeatures} />
            <TouchableOpacity style={styles.purpleButton}>
              <Text style={styles.buttonText}>Pay $100 Registration Free</Text>
            </TouchableOpacity>
          </View>

          {/* Program Card */}
          <View style={styles.programCard}>
            <Text style={styles.cardTitle}>Full - Time Program</Text>
            <Text style={styles.cardDescription}>
              Perfect for families seeking comprehensive weekday care
            </Text>

            <View style={styles.priceContainer}>
              <Text style={styles.currencySymbol}>₹</Text>
              <Text style={styles.price}>5000</Text>
              <Text style={styles.perMonth}>/per month</Text>
            </View>

            <FeatureList features={programFeatures} />

            <TouchableOpacity style={styles.purpleButton}>
              <Text style={styles.buttonText}>Select Plan</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.previousButton} onPress={prevStep}>
              <Text style={styles.previousButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');
const isSmallDevice = width < 375;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 5,
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    marginBottom: 20,
  },
  registrationCard: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#FFF0E5',
  },
  programCard: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    backgroundColor: COLORS.white,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.black,
    marginBottom: 12,
    fontFamily: 'Poppins-Bold',
  },
  cardDescription: {
    fontSize: 12,
    fontWeight: 400,
    color: COLORS.gray,
    marginBottom: 12,
    fontFamily: 'Poppins-Regular',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 16,
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: 600,
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  price: {
    fontSize: 24,
    fontWeight: 600,
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  perMonth: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 12,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
  purpleButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  previousButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    width: isSmallDevice ? '45%' : 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previousButtonText: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
  nextButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    width: isSmallDevice ? '45%' : 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
});

export default PlanStructure;
