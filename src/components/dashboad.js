import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions } from "react-native";
import { BarChart } from 'react-native-chart-kit';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import styles from '../globalStyles';

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
        let productInStock = Array(categoryName.length).fill(0)
        products.map(data => {
            let indices = category.findIndex(e => e.id === parseInt(data.productCategory))
            productInStock[indices] = productInStock[indices] + parseFloat(data.productStock)
        })
        for (let index = 0; index < categoryName.length; index++) {
            chartData.push({ label: categoryName[index], y: productInStock[index] })
        }
        return chartData
    }
    return (
        <View style={styles.footerMargin}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action icon="menu" onPress={() => props.navigation.toggleDrawer()} />
                <Appbar.Content title="Inventory Dashboard" />
                <Appbar.Action icon="logout" onPress={() => {
                    console.log("logout should happen")
                }} />
                {/* {searchEnabled ? <Searchbar style={styles.searchField} onChangeText={searchData} /> : null} */}
                {/* {searchEnabled ? <Appbar.Action icon="cancel" onPress={toggleSearch} /> : <Appbar.Action icon="magnify" onPress={toggleSearch} />} */}
            </Appbar.Header>
            <View style={{ padding: 10 }}>
                {products.length !== 0 ?
                    <View style={{ overflow: "scroll" }}>
                        <BarChart data={{
                            labels: getChartData().map(data => data.label),
                            datasets: [
                                {
                                    data: getChartData().map(data => data.y),
                                },
                            ],
                        }}
                            width={Dimensions.get('window').width - 16}
                            height={Dimensions.get('window').height - 200}
                            yAxisLabel={'$'} chartConfig={{
                                backgroundColor: '#10c9bd',
                                backgroundGradientFrom: '#f2b40a',
                                backgroundGradientTo: '#99f7e3',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />
                        {/* <VictoryPie data={getChartData()} /> */}
                        <Text>Chart should render!!!</Text>
                    </View>
                    : <Text>No product found!!</Text>}
            </View>
        </View>
    );
}
export default DashboardComponent