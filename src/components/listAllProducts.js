import React, { useState, useEffect } from 'react'
import { View, Text } from "react-native";
import { Appbar, TextInput, Searchbar, List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import styles from '../globalStyles';
import { ScrollView } from 'react-native-gesture-handler';

function ListAllProductsComponent(props) {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [searchEnabled, setSearchEnabled] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const store = useSelector(state => state)
    useEffect(() => {
        setProducts(store.productList)
        setCategory(store.categoryList)
    }, [])
    const toggleSearch = () => {
        if (searchEnabled) {
            setSearchValue('')
            setSearchEnabled(false)
            searchData("")
        }
        else {
            setSearchEnabled(true)
        }
    }
    const searchData = (e) => {
        if (e === "") {
            setProducts(store.productList)
            setSearchValue("")
        }
        else {
            let tempList = store.productList.filter(data =>
                data.productName.toUpperCase().includes(e.toUpperCase()) ||
                data.productDescription.toUpperCase().includes(e.toUpperCase()))
            setProducts(tempList)
            setSearchValue(e)
        }
    }
    return (
        <View style={styles.footerMargin}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action icon="menu" onPress={() => props.navigation.toggleDrawer()} />
                <Appbar.Content title={searchValue === "" ? "All Products" : "Search Result"} />
                {/* {searchEnabled ? <Searchbar style={styles.searchField} onChangeText={searchData} /> : null} */}
                {/* {searchEnabled ? <Appbar.Action icon="cancel" onPress={toggleSearch} /> : <Appbar.Action icon="magnify" onPress={toggleSearch} />} */}
                <Appbar.Action icon="logout" onPress={() => {
                    console.log("logout should happen")
                }} />
            </Appbar.Header>

            <Searchbar style={styles.searchField} onChangeText={searchData} placeholder="Search here!!!" />
            <ScrollView>
                {
                    products.length !== 0 ?
                        products.map(data => {
                            let categoryName = store.categoryList.filter(e => e.id === parseInt(data.productCategory))
                            data["productCategoryName"] = categoryName[0].categoryName
                            return (
                                <List.Item
                                    key={data.id}
                                    title={data.productName}
                                    description={"In-Stock: " + data.productStock + "\nPrice: " + parseFloat(data.productPrice)}
                                    onPress={() => {
                                        props.navigation.navigate('Recently ViewProduct', { product: data })
                                    }}
                                    left={props1 => <List.Icon {...props1} icon="cart" />}
                                    // right={props2 => <List.Icon {...props2} color="red" icon="delete" />}
                                />
                            )
                        }) : <Text>No products to display</Text>
                }
            </ScrollView>
        </View>
    )
}
export default ListAllProductsComponent