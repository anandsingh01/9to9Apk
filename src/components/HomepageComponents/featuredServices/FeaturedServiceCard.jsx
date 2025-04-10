import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const FeaturedServiceCard = ({heading, para}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 220,
        width: 160,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
      }}>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/b37b/a99d/02584279da3554e04df3cb5925727ac8?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ILEsihMsoAcnGzDDsJS4tvKtsbAtItUecZk~~6THouFgCgzm6ZJ8QTTD82sg9Hn747Mq7TFMLASQqoMPafay1U1o430B4cr9HfPKaigEGtnj3KGootUpReybyUwnqVhqq06jOpyQH-o5zZgJkzjPlClL1SGxRSDUQ06UhR2V9KUhmibfcqVt2f9INrZeSXpvFOlQDFJ9JF2DgY9npL4IIPB5dNd4lySZ7NfWPFvT5ebCavzh3YBi9-mZ9eCtgIdUXTQnDuEOMOGvlmYL1M63AqyW7EGvpQ7Tfjc5ONGGuvhufcdKlVMQN3zmmcMzLa6AL3cFydbZlj~tmtFkDHIioQ__',
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
          }}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,.5)', 'rgba(0,0,0,0.8)']}
            style={{
              height: '60%',
              paddingTop: 30,
              padding: 5,
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '600',
                color: '#fff',
                textAlign: 'center',
              }}>
              {heading}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: 'white',
                textAlign: 'center',
              }}>
              {para}
            </Text>
            <TouchableOpacity
              style={{
                height: 28,
                fontSize: 12,
                backgroundColor: '#571D99',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                paddingHorizontal: 15,
                borderRadius: 5,
              }}
              title="Book a now"
              onPress={() => navigation.navigate('ReDirect')}>
              <Text style={{fontSize: 10, fontWeight: '600', color: '#fff'}}>
                Book a now
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};
