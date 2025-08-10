import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import Input from '../../components/Input';
import { COLORS } from '../../enums/styleEnums';
import Buttons from '../../components/Buttons';
import { launchImageLibrary } from 'react-native-image-picker';
import { addProductUrl } from '../../apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [userId, setUserId] = useState('');

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                console.log(imageUri)
                setImage(imageUri);
            }
        });
    };

    const addingProducts = async () => {
        try {
            const user = await AsyncStorage.getItem("user");
            const userData = JSON.parse(user);
            setUserId(userData._id)

            const formData = new FormData();

            formData.append("name", name);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("company", company);
            formData.append("description", description);
            formData.append("userId", userId);

            formData.append("image", {
                uri: image,
                name: 'photo.png',
                type: 'image/png'
            })

            const response = await fetch(addProductUrl, {
                method: "post",
                headers: {
                    authorization: `bearer ${await AsyncStorage.getItem("token")}`,
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            })

            const result = await response.json();
            setName('');
            setPrice('');
            setCategory('');
            setCompany('');
            setDescription('');
            setImage('');
            console.log("result is 64...." + result)

        }
        catch (err) {
            console.log("error is at line 67" + err)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.addText}>Add product details</Text>

            <ScrollView>
                <View style={styles.inputViewStyle}>
                    <Input value={name} onChangeText={(text) => setName(text)} placeholder={"Enter product name"} placeholdercolor={COLORS.black} inputStyle={styles.inputStyle} />
                    <Input value={price} onChangeText={(text) => setPrice(text)} placeholder={"Enter product price"} placeholdercolor={COLORS.black} inputStyle={styles.inputStyle} />
                    <Input value={category} onChangeText={(text) => setCategory(text)} placeholder={"Enter product category"} placeholdercolor={COLORS.black} inputStyle={styles.inputStyle} />
                    <Input value={company} onChangeText={(text) => setCompany(text)} placeholder={"Enter product company name"} placeholdercolor={COLORS.black} inputStyle={styles.inputStyle} />
                    <Input value={description} onChangeText={(text) => setDescription(text)} placeholder={"Enter product description"} placeholdercolor={COLORS.black} inputStyle={styles.inputStyle} />

                    <TouchableOpacity onPress={openImagePicker}
                        style={styles.imageButton}>
                        {
                            image ? <Image style={styles.imageStyle} source={{ uri: image }} /> : <Text style={styles.addImageText}>Add image</Text>
                        }
                    </TouchableOpacity>

                    <Buttons onPress={addingProducts} title={"Add Product"} ButtonTextStyle={styles.addTextStyle} ButtonStyle={styles.buttonStyle} />

                </View>

            </ScrollView>

        </View>
    );
}
export default AddProduct;