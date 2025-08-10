import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGES } from '../../assets/images';
import Buttons from '../../components/Buttons';
import { removeFromCart } from '../../redux/action';
import { COLORS, FONTS } from '../../enums/styleEnums';

const ChatList = () => {
    const [cartDataLength, setCartDatalength] = useState('');
    const [cartData, setCartData] = useState([]);
    const dispath = useDispatch();
    const cartItem = useSelector((state) => state.reducer);
    console.log(cartItem)

    useEffect(() => {
        setCartDatalength(cartItem.length);
        setCartData(cartItem)
    }, [cartItem])

    const renderItem = ({ item }) => {
        const fullUrl = `http://192.168.100.10:5000/${item.imagepath.replace("\\", "/")}`
        return (
            <View style={styles.itemView}>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: "3%" }}>
                    <Image style={styles.imageStyle} source={{ uri: fullUrl }} />
                    <View>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.nameText}>${item.price}</Text>
                        <Text style={styles.nameText}>{item.description}</Text>
                    </View>
                </View>
                <Buttons onPress={() => handleRemoveFromCart(item)} title={"Remove"} ButtonTextStyle={styles.buttonTextStyle} ButtonStyle={styles.buttonStyle} />
            </View>
        )
    }

    const handleRemoveFromCart = (item) => {
        dispath(removeFromCart(item))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.cartText}>Cart ({cartDataLength})</Text>
            {
                cartData.length ?
                    <FlatList
                        data={cartData}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingVertical: "5%" }}
                    /> :
                    <Text style={{
                        color: COLORS.black, alignSelf: "center", fontFamily: FONTS.medium,
                        fontSize: 16, marginTop: "20%"
                    }}>No Item found</Text>
            }
        </View>
    );
}
export default ChatList;