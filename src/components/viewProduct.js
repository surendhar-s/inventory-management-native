import React from 'react'
import { View, Text, Button } from "react-native";
import styles from '../globalStyles';
import { Appbar } from 'react-native-paper';

function ViewProductComponent(props) {
    const product = props.route.params.product
    return (
        <View>
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => props.navigation.toggleDrawer()} />
                <Appbar.Content title={product.productName} />
                <Appbar.Action icon="logout" onPress={()=>{
                    console.log("logout should happen")
                }}/>
            </Appbar.Header>
            {console.log(product)}
            <View>
                <View style={styles.viewContainer}>
                    <Text style={styles.viewTextContainer}>Name:</Text><Text style={styles.viewTextContainer}>{product.productName}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.viewTextContainer}>Category:</Text><Text style={styles.viewTextContainer}>{product.productCategoryName}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.viewTextContainer}>Stock:</Text><Text style={styles.viewTextContainer}>{product.productStock}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.viewTextContainer}>Price per Unit:</Text><Text style={styles.viewTextContainer}>{product.productPrice}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.viewTextContainer}>Added On:</Text><Text style={styles.viewTextContainer}>{product.productAddedOn}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.viewTextContainer}>Last Updated:</Text><Text style={styles.viewTextContainer}>{product.productUpdatedOn}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.viewTextContainer}>Description:</Text><Text style={styles.viewTextContainer}>{product.productDescription}</Text>
                </View>
            </View>
            <View style={styles.backButton}>
                <Button
                    title="Back"
                    onPress={() => props.navigation.goBack()}
                />
            </View>
        </View>
    )
}

export default ViewProductComponent