import React, { useState } from 'react'
import { View, Text, Button } from "react-native";
import styles from '../globalStyles';
import { Appbar } from 'react-native-paper';
import Axios from 'axios';
import deleteProductFromStore from '../actions/deleteProduct'
import { useDispatch } from 'react-redux';
import EditProduct from './editProduct';

function ViewProductComponent(props) {
    const dispatch = useDispatch()
    const [product, setProduct] = useState(props.route.params === undefined ? null : props.route.params.product)
    const [isEditEnabled, setIsEditEnabled] = useState(false)
    const deleteProduct = () => {
        let id = product.id
        Axios.delete("http://localhost:3001/products/" + id).then(res => {
            if (res.status === 200) {
                dispatch(deleteProductFromStore(id))
                props.navigation.navigate('ListAll', { deltedId: id })
            }
        })
    }
    const toggleView = () => {
        setIsEditEnabled(!isEditEnabled)
    }
    const fetchUpdatedData = (updatedData) => {
        setProduct(updatedData)
        toggleView()
    }
    return (
        <View style={styles.footerMargin}>
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => props.navigation.toggleDrawer()} />
                <Appbar.Content title={product === null ? "Not found" : product.productName} />
                <Appbar.Action icon="logout" onPress={() => {
                    console.log("logout should happen")
                }} />
            </Appbar.Header>
            {product === null ?
                <View>
                    <Text>Please select product from list!!</Text>
                    <View style={styles.backButton}>
                        <Button
                            title="Back"
                            onPress={() => props.navigation.goBack()}
                        />
                    </View>
                </View> :
                <View>
                    {isEditEnabled ?
                        <View>
                            <EditProduct callBackToggleView={toggleView} productDetails={product} fetchUpdatedData={fetchUpdatedData} />
                        </View> :
                        <View>
                            <View style={styles.viewContainer}>
                                <Text style={styles.viewTextContainer}>Name:</Text><Text style={styles.viewTextContainer}>{product.productName}</Text>
                            </View>
                            <View style={styles.viewContainer}>
                                <Text style={styles.viewTextContainer}>Manufracturer:</Text><Text style={styles.viewTextContainer}>{product.productSubCategory}</Text>
                            </View>
                            <View style={styles.viewContainer}>
                                <Text style={styles.viewTextContainer}>Category:</Text><Text style={styles.viewTextContainer}>{product.productCategoryName}</Text>
                            </View>
                            <View style={styles.viewContainer}>
                                <Text style={styles.viewTextContainer}>Color:</Text><Text style={styles.viewTextContainer}>{product.productColor}</Text>
                            </View>
                            <View style={styles.viewContainer}>
                                <Text style={styles.viewTextContainer}>Stock:</Text><Text style={styles.viewTextContainer}>{product.productStock}</Text>
                            </View>
                            <View style={styles.viewContainer}>
                                <Text style={styles.viewTextContainer}>Price per Unit:</Text><Text style={styles.viewTextContainer}>{product.productPrice}</Text>
                            </View>
                            <View style={styles.viewContainer}>
                                <Text style={styles.viewTextContainer}>Added On:</Text><Text style={styles.viewTextContainer}>{new Date(product.productAddedOn).toLocaleString()}</Text>
                            </View>
                            <View style={styles.viewContainer}>
                                <Text style={styles.viewTextContainer}>Last Updated:</Text><Text style={styles.viewTextContainer}>{product.productUpdatedOn === null ? "NA" : new Date(product.productUpdatedOn).toLocaleString()}</Text>
                            </View>
                            <View style={styles.viewContainer}>
                                <Text style={styles.viewTextContainer}>Description:</Text><Text style={styles.viewTextContainer}>{product.productDescription}</Text>
                            </View>
                            <View style={styles.addProductButtonsContainer}>
                                <Button
                                    title="Edit"
                                    onPress={() => toggleView()}
                                />
                                <Button
                                    title="Delete"
                                    onPress={() => deleteProduct()}
                                />
                                <Button
                                    title="Back"
                                    onPress={() => props.navigation.goBack()}
                                />
                            </View>
                        </View>
                    }
                </View>
            }
        </View>
    )
}

export default ViewProductComponent