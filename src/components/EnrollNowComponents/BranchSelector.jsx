import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../constants/color';
import {FlatList} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Get screen dimensions for responsiveness
const {width} = Dimensions.get('window');
const isSmallScreen = width < 375;

const BranchSelector = ({nextStep}) => {
  const handleForm = () => {
    step + 1;
  };
  // Sample data for the branches
  const branches = [
    {
      id: '1',
      name: 'Tiny Tots Sunshine Valley',
      address: '123 Sunshine ave, Happy Town',
      phone: '1234567890',
      rating: 5.0,
      // For actual implementation, use require('./assets/image1.jpg') or a URL
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/20ea/f27b/5bbb3f1cde236e15281389cc8d44fd41?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I8glJLCyj5r3onrWR4l91Shkuj8qPRWqAc-FROVVrwEk8KOEnc9DKDTlmrMuMATbuMQFGQ1JtbKjmJ~BCVm-sw6Uu7dhvCC4vyuj7KuP31J-HOs2NW2~mstb0Ci-pleTEDsKjCRWZb9TXyJW9LtSifdsFs-LIRoRPEzUOovHncoVmtq-8rUg8QQfjUc9EYwfhJxXljFyOr9c8BJu7xUjdYC67t6O4odK3FQRVID6Mn44Wodk0lOtDznA7i-5deTQgxWkT4p3Ck2kLS22zFd0kQ2DegSROvJSnvI0NSfaNv6HuQuEzp1aWNNEYF~ZrvcjpxY-r4uCSNH3ECQGalTagQ__',
    },
    {
      id: '2',
      name: 'Tiny Tots Sunshine Valley',
      address: '123 Sunshine ave, Happy Town',
      phone: '1234567890',
      rating: 5,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/3188/c8e3/7380da8e04c197caa2654601abcf23d5?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DQrAkok4AE2asKzVWe10B3bXnQl8DKhiq7SX1BZDbkTsfXkzVc15BGfgO1~em2aTT6vhgs0Vy-i62jxL7n8nA3jimDFUn4z2KWsbvNeIC74LTHxIF29bO9JOj-USkhWN8EqQLahEb8TJeIYTHY-refFyJQRQ3GzFqOMmuEEepolhDkPgkfMKCCuD9BA89oJll2p8PAvaAPt~oLVvcp2W1bqtK2DHKXgulOpcOICxrhd7VXavIZW~qH-rgptWK7MMoQiLwwOww1CHHtoXmoH4bIueHjPdJXRuV75oON~sResFzHW~2wM4--weC7tJ5btgz5iZbM6kG92AD28FaqDqsg__',
    },
    {
      id: '3',
      name: 'Tiny Tots Sunshine Valley',
      address: '123 Sunshine ave, Happy Town',
      phone: '1234567890',
      rating: 5.0,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9b32/ab8f/c0fb27ca5f8358bc1b48e52f37f2cdb6?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JWcakRf7b9Efysmak~tRDoZIIa0DLD3OJgS7~Sp6DPTc03W17rDduTv19FSmH2Uwl14t3tQceomAQPK4LwChasUPluefZqvLNFHU4O0HDXBqmDlbSazbRMqNI6CB5rl5YFgOasm8Uun98ehlyLKgO-O3elV4Lt29xNUuYUsQrLdECDFOOG6LO3tUsP-7MH52xTdZQyg4rZqWHh8Oidnna52QSiK~O7FSO7YyYcQEepndoUgzYxJfUegGntrd0W0-fq8h8K9onToXjjNNZJojQdL8vOi4dhjMNbFlVkrFM5IJng5WTE7SICo0sfHols7VwhS13XAOTgEbf0sZwBfkaw__',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Select a Branch</Text>
        <Text style={styles.subtitle}>
          Choose the campus that's most convenient for you
        </Text>
      </View>
      {/* Branch cards */}
      <FlatList
        data={branches}
        showsVerticalScrollIndicator={false}
        // pagingEnabled
        keyExtractor={branch => branch.id}
        renderItem={({item: branch}) => (
          <View key={branch.id} style={styles.branchCard}>
            <Image
              source={{uri: branch.imageUrl}}
              style={styles.branchImage}
              resizeMode="cover"
            />

            <View style={styles.branchDetails}>
              <Text style={styles.branchName}>{branch.name}</Text>

              <View style={styles.infoRow}>
                <MaterialIcons name="location-on" size={16} color="#555" />
                <Text style={styles.infoText}>{branch.address}</Text>
              </View>

              <View style={styles.infoRow}>
                <Ionicons name="call-outline" size={16} color="#555" />
                <Text style={styles.infoText}>{branch.phone}</Text>
              </View>
            </View>

            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{branch.rating}</Text>
            </View>

            <TouchableOpacity style={styles.selectButton} onPress={nextStep}>
              <Text style={styles.selectButtonText}>Select This Branch</Text>
            </TouchableOpacity>
          </View>
        )}
        // scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 2,
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 400,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  branchCard: {
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  branchImage: {
    width: '95%',
    height: 150,
    margin: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  branchDetails: {
    paddingHorizontal: 16,
  },
  branchName: {
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.black,
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 10,
    fontWeight: 500,
    color: COLORS.black,
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
  },
  ratingContainer: {
    position: 'absolute',
    top: 165,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 4,
    paddingHorizontal: 8,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginLeft: 4,
    fontFamily: 'Poppins-Bold',
  },
  selectButton: {
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    width: 300,
    alignSelf: 'center',
  },
  selectButtonText: {
    color: Colors.primary,
    fontSize: 10,
    fontWeight: 500,
    fontFamily: 'Poppins-Bold',
  },
});

export default BranchSelector;
