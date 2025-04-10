import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../../constants/color';

const OptionCard = ({icon, iconColor, iconBg, title, description, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={[styles.iconBackground, {backgroundColor: iconBg}]}>
          <Feather name={icon} size={24} color={iconColor} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OptionCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  iconContainer: {
    marginRight: 16,
    justifyContent: 'center',
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 4,
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
});
