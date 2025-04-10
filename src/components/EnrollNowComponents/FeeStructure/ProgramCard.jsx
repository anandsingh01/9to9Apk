import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';

const ProgramCard = ({packageName, subtitle, price, features}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{packageName}</Text>
      <Text style={styles.cardDescription}>{subtitle}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.currencySymbol}>₹</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.perMonth}>/per month</Text>
      </View>

      {features.map((feature, index) => (
        <View key={index} style={styles.featureRow}>
          <View style={[styles.featureIcon, {backgroundColor: feature.color}]}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
          <Text style={styles.featureText}>{feature.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    marginTop: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    fontWeight: '400',
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
    fontWeight: 'bold',
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default ProgramCard;
