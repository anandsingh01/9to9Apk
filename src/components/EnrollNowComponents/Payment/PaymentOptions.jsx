import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import OptionCard from './OptionCard'; // adjust the path as needed
import COLORS from '../../../constants/color';

const PaymentOptions = ({prevStep, nextStep}) => {
  const cardData = [
    {
      id: '1',
      icon: 'credit-card',
      iconColor: '#DC2626',
      iconBg: '#FFFFFF',
      title: 'Proceed to Payment',
      description: 'Secure your spot now by making the payment online',
      onPress: nextStep,
    },
    {
      id: '2',
      icon: 'phone',
      iconColor: '#0475F0',
      iconBg: '#FFFFFF',
      title: 'Talk to a counsellor',
      description:
        'Schedule a call with our education counsellor to discuss further',
      onPress: prevStep,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={cardData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <OptionCard {...item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentOptions;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    padding: 16,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
});
