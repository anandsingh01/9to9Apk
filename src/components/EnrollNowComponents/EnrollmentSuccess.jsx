import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import COLORS from '../../constants/color';
import Feather from 'react-native-vector-icons/Feather';

const EnrollmentSuccess = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Success Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Feather
                name="check"
                color={COLORS.white}
                size={30}
                style={styles.checkmark}
              />
            </View>
          </View>

          {/* Success Message */}
          <Text style={styles.title}>Enrollment Successful!</Text>
          <Text style={styles.subtitle}>
            We're excited to welcome your little one to our{'\n'}9 to 9 School
          </Text>

          {/* Enrollment Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Enrollment Details</Text>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Child's Name</Text>
              <Text style={styles.detailValue}>Emma</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Branch</Text>
              <Text style={styles.detailValue}>Sunshine Valley Preschool</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Selected Plan</Text>
              <Text style={styles.detailValue}>Full-Day Program</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Payment ID</Text>
              <Text style={styles.detailValue}>PAY12345</Text>
            </View>
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
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  iconContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  iconBackground: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#16A34A',
    justifyContent: 'center',
    alignItems: 'center',
    // Add flower/star shape effect
    borderWidth: 0,
    shadowColor: '#27AE60',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  checkmark: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    color: COLORS.black,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.black,
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
  },
  detailsContainer: {
    backgroundColor: '#F6F6F7',
    borderRadius: 12,
    padding: 20,
    width: '100%',
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 25,
    fontFamily: 'Poppins-Bold',
  },
  detailRow: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 500,
    color: COLORS.black,
    marginBottom: 4,
    fontFamily: 'Poppins-Bold',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 400,
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
  },
});

export default EnrollmentSuccess;
