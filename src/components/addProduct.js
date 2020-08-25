import React, { useState, useEffect } from 'react'
import styles from '../globalStyles';
import { Button, ScrollView } from 'react-native'
import { TextInput, Appbar, HelperText } from 'react-native-paper';
import { Picker, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import addProduct from '../actions/addProduct';

function AddProduct(props) {
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    const [categoryList, setCategoryList] = useState([]);
    const [name, setName] = useState(null)
    const [category, setCategory] = useState(null)
    const [price, setPrice] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [description, setDescription] = useState(null)
    const [error, setError] = useState(false)
    useEffect(() => {
        setCategoryList(store.categoryList)
    }, [])
    const addProducts = () => {
        Axios.post("http://192.168.1.103:3001/products", {
            productCategory: category,
            productName: name,
            productStock: quantity,
            productPrice: price,
            productDescription: description,
            productAddedOn: new Date(),
            productUpdatedOn: null,
            productUserId: "1"
        }).then(res => {
            if (res.status === 201) {
                let categoryName = categoryList.filter(e => parseInt(e.id) === parseInt(category))
                categoryName = categoryName[0].categoryName
                let dataToDispatch = res.data
                dataToDispatch["productCategoryName"] = categoryName
                dispatch(addProduct(dataToDispatch))
                props.navigation.navigate('ListAll')
            }
        })
    }
    const validateAndSubmit = () => {
        if ((name !== null && name !== "") &&
            (price !== null && price !== "") &&
            (quantity !== null && quantity !== "") &&
            (category !==null) &&
            (description !== null && description !== "")) {
            setError(false)
            addProducts()
        }
        else {
            setError(true)
        }
    }
    return (
        <View>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action icon="menu" onPress={() => props.navigation.toggleDrawer()} />
                <Appbar.Content title="Add to inventory" />
                <Appbar.Action icon="logout" onPress={() => {
                    console.log("logout should happen")
                }} />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.addProductContainer}>
                    <Text >
                        Product Name:
                </Text>
                    <TextInput error style={styles.addProductField} onChangeText={(e) => setName(e)} />
                    <HelperText type="error" visible={name == ""}>Provide valid name</HelperText>
                    <Text>
                        Product Price (per unit):
                </Text>
                    <TextInput style={styles.addProductField} keyboardType="numeric" onChangeText={(e) => setPrice(e)} />
                    <HelperText type="error" visible={price == ""}>Provide valid price</HelperText>
                    <Text>
                        Product Quantity:
                </Text>
                    <TextInput style={styles.addProductField} keyboardType="numeric" onChangeText={(e) => setQuantity(e)} />
                    <HelperText type="error" visible={quantity == ""}>Provide valid quantity</HelperText>
                    <Text>
                        Product Category:
                </Text>
                    <Picker
                        selectedValue={category}
                        style={{ height: 50, width: "auto" }}
                        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                    >
                        {
                            categoryList.map(data => {
                                return <Picker.Item key={data.id} label={data.categoryName} value={data.id} />
                            })
                        }
                    </Picker>
                    <Text>
                        Product Description:
                </Text>
                    <TextInput style={styles.addProductFieldDesc} multiline onChangeText={(e) => setDescription(e)} />
                    <HelperText type="error" visible={description == ""}>Provide valid description</HelperText>
                </View>
                <HelperText type="error" visible={error}>Please provide all values and try again!!!</HelperText>
                <View style={styles.addProductButtonsContainer}>
                    <Button
                        style={styles.addProductButtons}
                        title="Add"
                        onPress={() => validateAndSubmit()}
                    />
                    <Button
                        style={styles.addProductButtons}
                        title="Back"
                        onPress={() => props.navigation.goBack()}
                    />
                </View>
            </ScrollView>
        </View >
    )
}
export default AddProduct