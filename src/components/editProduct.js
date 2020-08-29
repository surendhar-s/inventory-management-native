import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../globalStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, HelperText } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import editProduct from '../actions/editProduct';

function EditProduct(props) {
    const [name, setName] = useState()
    const [price, setPrice] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [description, setDescription] = useState(null)
    const [error, setError] = useState(false)
    const [isUpdationFailed, setIsUpdationFailed] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        setName(props.productDetails.productName)
        setPrice(props.productDetails.productPrice)
        setQuantity(props.productDetails.productStock)
        setDescription(props.productDetails.productDescription)
    }, [])
    const validateForm = () => {
        if (
            (name === props.productDetails.productName) &&
            (price === props.productDetails.productPrice) &&
            (quantity === props.productDetails.productStock) &&
            (description === props.productDetails.productDescription)
        ) {
            return true
        }
        else {
            return false
        }
    }
    const doEdit = () => {
        console.log(props.productDetails)
        Axios.put("http://192.168.1.101:3001/products/" + props.productDetails.id, {
            productCategory: props.productDetails.productCategory,
            productName: name,
            productStock: quantity,
            productPrice: price,
            productDescription: description,
            productAddedOn: props.productDetails.productAddedOn,
            productUpdatedOn: new Date(),
            productUserId: props.productDetails.productUserId,
            productSubCategory: props.productDetails.productSubCategory,
            productColor: props.productDetails.productColor,
            id: props.productDetails.id
        })
            .then(res => {
                if (res.status === 200) {
                    let updatedData = res.data
                    updatedData["productCategoryName"] = props.productDetails.productCategoryName
                    dispatch(editProduct(updatedData))
                    setIsUpdationFailed(false)
                    props.fetchUpdatedData(updatedData)
                }
                else {
                    setIsUpdationFailed(true)
                }
            })
    }
    const validateAndSubmit = () => {
        if ((name !== null && name !== "") &&
            (price !== null && price !== "") &&
            (quantity !== null && quantity !== "") &&
            (description !== null && description !== "")
        ) {
            console.log("valid");
            setError(false)
            doEdit()
        }
        else {
            setError(true)
            console.log("not valid");
        }
    }
    return (
        <View style={styles.footerMargin}>
            <ScrollView>
                <View style={styles.addProductContainer}>
                    <Text >
                        Product Name:
                    </Text>
                    <TextInput defaultValue={name} style={styles.addProductField} onChangeText={(e) => setName(e)} />
                    <HelperText type="error" visible={name == ""}>Name should not be empty</HelperText>
                    <Text>
                        Product Price (per unit):
                    </Text>
                    <TextInput defaultValue={price} style={styles.addProductField} keyboardType="numeric" onChangeText={(e) => setPrice(e)} />
                    <HelperText type="error" visible={price == ""}>Provide valid price</HelperText>
                    <Text>
                        Product Quantity:
                    </Text>
                    <TextInput defaultValue={quantity} style={styles.addProductField} keyboardType="numeric" onChangeText={(e) => setQuantity(e)} />
                    <HelperText type="error" visible={quantity == ""}>Provide valid quantity</HelperText>
                    <Text>
                        Product Description:
                    </Text>
                    <TextInput defaultValue={description} style={styles.addProductFieldDesc} multiline onChangeText={(e) => setDescription(e)} />
                    <HelperText type="error" visible={description == ""}>Provide valid description</HelperText>
                </View>
                <HelperText type="error" visible={error}>Please check all fields and try again!!!</HelperText>
                <HelperText type="error" visible={isUpdationFailed}>Can't update please try later!!</HelperText>
                <View style={styles.addProductButtonsContainer}>
                    <Button
                        title="Edit Product"
                        disabled={validateForm()}
                        onPress={() => validateAndSubmit()}
                    />
                    <Button
                        title="Back"
                        onPress={() => props.callBackToggleView()}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProduct