import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const { title, artist, url } = album;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle,
    } = styles;

    return(
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle} >
                    <Image
                        style={thumbnailStyle}
                        source={require('../img/K3KJ3w4h.jpg')}
                    />
                </View>
                <View style={headerContentStyle} >
                    <Text style={headerTextStyle} >{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image style={imageStyle} source={require('../img/41j7-7yboXL.jpg')} />
            </CardItem>
            <CardItem>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardItem>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle:{
      fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        width: 300,

    }
};

export default AlbumDetail;