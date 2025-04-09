import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import COLORS from '../../constants/color';

const RegistrationForm = ({prevStep, nextStep}) => {
  const [childName, setChildName] = useState('');
  const [age, setAge] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [programType, setProgramType] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  // Generate age options from 1 to 18
  const ageOptions = Array.from({length: 18}, (_, i) => (i + 1).toString());

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {/* Child's Information Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Child's Information</Text>
          </View>

          <Text style={styles.label}>Child's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Child's Name"
            value={childName}
            onChangeText={setChildName}
          />

          <Text style={styles.label}>Age</Text>
          {!showPicker && (
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowPicker(true)}>
              <Text style={age ? styles.pickerText : styles.placeholderText}>
                {age || 'Age'}
              </Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          )}

          {showPicker && (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={age}
                onValueChange={(itemValue, itemIndex) => {
                  setAge(itemValue);
                  setShowPicker(false);
                }}
                style={styles.picker}>
                <Picker.Item label="Select Age" value="" />
                {ageOptions.map((option, index) => (
                  <Picker.Item key={index} label={option} value={option} />
                ))}
              </Picker>
            </View>
          )}

          {/* Parent/Guardian Information Section */}
          <View style={styles.sectionHeader2}>
            <Text style={styles.sectionHeaderText}>
              Parent/Guardian Information
            </Text>
          </View>

          <Text style={styles.label}>Father's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Father Name"
            value={fatherName}
            onChangeText={setFatherName}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Program Type</Text>
          <RadioButton.Group onValueChange={setProgramType} value={programType}>
            <View style={styles.radioOption}>
              <RadioButton value="preschool" color="#C4C4D6" />
              <Text style={styles.radioText}>Preschool</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="daycare" color="#C4C4D6" />
              <Text style={styles.radioText}>Daycare</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="both" color="#C4C4D6" />
              <Text style={styles.radioText}>Both</Text>
            </View>
          </RadioButton.Group>

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
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  formContainer: {
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  sectionHeader: {
    backgroundColor: '#C9E3F7',
    padding: 15,
    marginBottom: 15,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  sectionHeader2: {
    backgroundColor: '#D6F2E4',
    padding: 15,
    marginBottom: 15,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: '#431D04',
    fontFamily: 'Poppins-Regular',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E2C8FF',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E2C8FF',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: COLORS.white,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  pickerText: {
    color: COLORS.gray,
  },
  placeholderText: {
    color: COLORS.gray,
  },
  dropdownIcon: {
    color: COLORS.gray,
    fontSize: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioText: {
    fontSize: 14,
    color: COLORS.gray,
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

export default RegistrationForm;
