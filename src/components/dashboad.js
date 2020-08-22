import React, { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import { useSelector } from 'react-redux';
import { Appbar } from 'react-native-paper';
import styles from '../globalStyles';
import { VictoryPie } from 'victory-native'
import MyNavigationContainer from '../routes/routes';

function DashboardComponent(props) {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const store = useSelector(state => state)

    useEffect(() => {
        setProducts(store.productList)
        setCategory(store.categoryList)
    }, [])
    const getChartData = () => {
        let chartData = []
        let categoryName = category.map(data => data.categoryName)
        //     let tempList = []
        //     category.map(data => tempList.push(data.categoryName))
        //     return tempList
        // }
        console.log(categoryName);
        let productInStock = Array(categoryName.length).fill(0)
        products.map(data => {
            let indices = category.findIndex(e => e.id === parseInt(data.productCategory))
            productInStock[indices] = productInStock[indices] + parseFloat(data.productStock)
        })
        for (let index = 0; index < categoryName.length; index++) {
            console.log("Cat: ", categoryName[index], "Stock: ", productInStock[index]);
            chartData.push({ label: categoryName[index], y: productInStock[index] })
        }
        return chartData
    }
    return (
        <View>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action icon="menu" onPress={() => props.navigation.toggleDrawer()} />
                <Appbar.Content title="Inventory Dashboard" />
                <Appbar.Action icon="logout" onPress={()=>{
                    console.log("logout should happen")
                }}/>
                {/* {searchEnabled ? <Searchbar style={styles.searchField} onChangeText={searchData} /> : null} */}
                {/* {searchEnabled ? <Appbar.Action icon="cancel" onPress={toggleSearch} /> : <Appbar.Action icon="magnify" onPress={toggleSearch} />} */}
            </Appbar.Header>
            <View style={{ padding: 10 }}>
                {products.length !== 0 ?
                    <VictoryPie data={getChartData()} />
                    : <Text>No product found!!</Text>}
            </View>
        </View>
    );
}
export default DashboardComponent