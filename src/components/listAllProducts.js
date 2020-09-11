import React, { useState, useEffect } from 'react'
import { View, Text, Picker } from "react-native";
import { Appbar, TextInput, Searchbar, List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import styles from '../globalStyles';
import { ScrollView } from 'react-native-gesture-handler';

function ListAllProductsComponent(props) {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [searchEnabled, setSearchEnabled] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [filterBy, setFilerBy] = useState('')
    const [sortBy, setSortBy] = useState('')
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
                data.productDescription.toUpperCase().includes(e.toUpperCase()) ||
                data.productSubCategory.toUpperCase().includes(e.toUpperCase())
            )
            setProducts(tempList)
            setSearchValue(e)
        }
    }
    const filterData = (value) => {
        setFilerBy(value)
        let list = []
        if (value === "All-cat") {
            list = store.productList
        }
        else {
            list = store.productList.filter(e => parseInt(value) === parseInt(e.productCategory))
        }
        setProducts(list)
    }
    const sortData = (value) => {
        setSortBy(value)
        let list = []
        if (value === "nameA-Z") {
            list = store.productList.sort((a, b) => {
                return a["productName"].localeCompare(b["productName"])
            })
        }
        else if (value === "nameZ-A") {
            list = store.productList.sort((a, b) => {
                return b["productName"].localeCompare(a["productName"])
            })
        }
        else if (value === "recentlyAdded") {
            list = store.productList.sort((a, b) => {
                return new Date(b["productAddedOn"]) - new Date(a["productAddedOn"])
            })
        }
        else if (value === "quantityH-L") {
            list = store.productList.sort((a, b) => {
                return parseInt(b["productStock"]) - parseInt(a["productStock"])
            })
        }
        else if (value === "quantityL-H") {
            list = store.productList.sort((a, b) => {
                return parseInt(a["productStock"]) - parseInt(b["productStock"])
            })
        }
        setProducts(list)
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
            <View style={styles.pickerContainer}>
            <Picker
                selectedValue={filterBy}
                onValueChange={(itemValue, itemIndex) => filterData(itemValue)}
            >
                <Picker.Item key={"all"} label="All category" value={"All-cat"} />
                {
                    category.map(data => {
                        return <Picker.Item key={data.id} label={data.categoryName} value={data.id} />
                    })
                }
            </Picker>
            <Picker
                selectedValue={sortBy}
                style={{ width: 117 }}
                onValueChange={(itemValue, itemIndex) => sortData(itemValue)}
            >
                <Picker.Item key={"nameA-Z"} label="Name A - Z" value="nameA-Z" />
                <Picker.Item key={"nameZ-A"} label="Name Z - A" value="nameZ-A" />
                <Picker.Item key={"recentlyAdded"} label="Recently added" value="recentlyAdded" />
                <Picker.Item key={"quantityH-L"} label="Quantity high to low" value="quantityH-L" />
                <Picker.Item key={"quantityL-W"} label="Quantity low to high" value="quantityL-H" />
            </Picker>
            </View>
            <ScrollView style={{ marginBottom: 180 }}>
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