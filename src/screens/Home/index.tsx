import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { styles } from './styles';
import Buttons from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import { deletProduct, getDataforUpdate, productList, searchApi, updateDataApi } from '../../apis';
import Input from '../../components/Input';
import { COLORS } from '../../enums/styleEnums';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addToCart } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const [productData, setProductData] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [searchData, setSearchData] = useState('');
  const [cartItem, setCartItem] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const dispath = useDispatch();

  const cartData = useSelector((state) => state.reducer)

  useEffect(() => {
    setCartItem(cartData.length)

  }, [cartData])

  const fetchData = async () => {
    const response = await fetch(productList, {
      headers: {
        authorization: `bearer ${await AsyncStorage.getItem("token")}`
      }
    });
    let res = await response.json();
    // console.log(res)
    setProductData(res)
  }

  useEffect(() => {
    if (!searchData) {
      fetchData()
    }
  }, [searchData])

  const formatProductData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);

    while (numberOfElementsLastRow !== 0 && numberOfElementsLastRow !== numColumns) {
      data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return data;
  };


  const renderItem = ({ item }) => {

    const isItemAdded = cartData.some(element => element.name === item.name);

    if (item.empty) {
      return <View style={[styles.productView, { backgroundColor: 'transparent', elevation: 0 }]} />;
    }


    const fullUrl = `http://192.168.100.10:5000/${item.imagepath.replace("\\", "/")}`
    return (

      <View style={styles.productView}>
        <Image style={styles.productImage} source={{ uri: fullUrl }} />
        <Text style={styles.productName}>Name : {item.name}</Text>
        <Text style={styles.productName}>Price : {item.price}</Text>
        <Text style={styles.productName}>Company : {item.company}</Text>
        <Text style={styles.productName}>Description : {item.description}</Text>

        <View style={styles.buttonsStyle}>
          <TouchableOpacity onPress={() => deleteFun(item._id)}
            style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => updateFun(item._id)}
            style={styles.deleteButton}>
            <Text style={styles.deleteText}>Update</Text>
          </TouchableOpacity>
        </View>

        {
          isItemAdded ?
            <TouchableOpacity disabled
              style={styles.addCartButton}>
              <Text style={styles.deleteText}>Added</Text>
            </TouchableOpacity> :
            <TouchableOpacity
              onPress={() => handleAddToCart(item)}
              style={styles.addCartButton}>
              <Text style={styles.deleteText}>Add to cart</Text>
            </TouchableOpacity>
        }
      </View>
    )
  }

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };


  const deleteFun = async (id) => {
    console.log(id)
    const data = await fetch(deletProduct + `/${id}`, {
      method: "delete",
      headers: {
        authorization: `bearer ${await AsyncStorage.getItem("token")}`
      }
    })
    const result = await data.json();
    fetchData();
    console.log(result)
  }

  const updateFun = async (id) => {
    const data = await fetch(getDataforUpdate + `/${id}`, {
      headers: {
        authorization: `bearer ${await AsyncStorage.getItem("token")}`
      }
    });
    const result = await data.json();
    // const imageUrl = `http://192.168.1.112:5000/${result.imagepath.replace("\\", "/")}`;

    setId(result._id)
    setName(result.name)
    setPrice(result.price);
    setCategory(result.category)
    setCompany(result.company);
    setDescription(result.description)
    // setImage(imageUrl)
    setUpdateModal(true)
    console.log(result)
  }

  const updateData = async () => {
    const fromData = new FormData();
    fromData.append("name", name);
    fromData.append("price", price);
    fromData.append("category", category);
    fromData.append("company", company);
    fromData.append("description", description);
    fromData.append("image", {
      uri: image,
      name: "photo.jpg",
      type: "image/jpeg"
    })
    console.log(fromData)

    // const formData = {
    //   name,
    //   price,
    //   category,
    //   company,
    //   description
    // }
    const data = await fetch(updateDataApi + `/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${await AsyncStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data"
      },
      body: fromData
    })
    console.log(data)
    const result = await data.json();
    if (result) {
      console.log("data is saved as", result)
      setUpdateModal(false);
      fetchData();
    }
    else {
      console.log("data is not updated")
    }
  }

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

  const searchFun = async (text) => {
    setSearchData(text);
    if (text) {
      const data = await fetch(searchApi + `/${text}`, {
        headers: {
          authorization: `bearer ${await AsyncStorage.getItem("token")}`
        }
      });
      const result = await data.json();
      setProductData(result)
    }
    else {
      fetchData();
    }
  }


  const handleAddToCart = (item) => {
    dispath(addToCart(item))
  }


  return (
    <View style={styles.container}>
      <View style={styles.topButtonView}>
        <Buttons onPress={() => navigation.navigate("AddProduct")} title={"Add product"} ButtonTextStyle={styles.addTextStyle} ButtonStyle={styles.buttonStyle} />
        <Buttons onPress={() => navigation.navigate("ChatList")} title={"Cart " + "(" + cartItem + ")"} ButtonTextStyle={styles.addTextStyle} ButtonStyle={styles.buttonStyle} />
      </View>
      <Input value={searchData} onChangeText={(text) => searchFun(text)} inputStyle={styles.searchInputStyle} placeholder={"search..."} placeholdercolor={COLORS.black} />


      <View style={{ flex: 1 }}>
        <FlatList
          data={formatProductData([...productData], 2)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{ gap: 15 }}
          refreshing={!searchData && refreshing}
          onRefresh={!searchData ? handleRefresh : null}
        />

      </View>

      <Modal visible={updateModal} transparent={true}>
        <View style={styles.modalMainView}>
          <View style={styles.innerView}>
            <Text style={styles.updateDataText}>Update data</Text>
            <Input value={name} onChangeText={(text) => setName(text)} inputStyle={styles.inputStyle} placeholder={"update name"} placeholdercolor={COLORS.black} />
            <Input value={price} onChangeText={(text) => setPrice(text)} inputStyle={styles.inputStyle} placeholder={"update price"} placeholdercolor={COLORS.black} />
            <Input value={category} onChangeText={(text) => setCategory(text)} inputStyle={styles.inputStyle} placeholder={"update category"} placeholdercolor={COLORS.black} />
            <Input value={company} onChangeText={(text) => setCompany(text)} inputStyle={styles.inputStyle} placeholder={"update company"} placeholdercolor={COLORS.black} />
            <Input value={description} onChangeText={(text) => setDescription(text)} inputStyle={styles.inputStyle} placeholder={"update description"} placeholdercolor={COLORS.black} />

            {
              image ? <TouchableOpacity onPress={openImagePicker}
                style={styles.imageButton}>
                <Image style={styles.imageStyle} source={{ uri: image }} />
              </TouchableOpacity> : <TouchableOpacity onPress={openImagePicker}
                style={styles.imageButton}>
                <Text style={styles.addPhotoText}>add photo</Text>
              </TouchableOpacity>
            }

            <Buttons onPress={updateData} title={"update"} ButtonTextStyle={styles.buttonTextStyle} ButtonStyle={styles.updateButtonStyle} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default Home;