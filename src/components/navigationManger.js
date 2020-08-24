import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardComponent from "./dashboad";
import ListAllProductsComponent from "./listAllProducts";
import ViewProductComponent from "./viewProduct";
import AddProduct from './addProduct';

function NavigationManager() {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            ScreenOptions={{
                gestureEnabled: true,
                headerStyle: {
                    backgroundColor: "wheat",
                    height: 100
                }
            }}
            headerMode='float'>
            {/* <Drawer.Screen
                name="Dashboard"
                component={DashboardComponent}
            /> */}
            <Drawer.Screen
                name="ListAll"
                component={ListAllProductsComponent}
            />
            <Drawer.Screen
                name="AddProduct"
                component={AddProduct}
                options={{
                    unmountOnBlur: true
                }}
            />
            <Drawer.Screen
                name="Recently ViewProduct"
                component={ViewProductComponent}
            />
        </Drawer.Navigator>
    )
}
export default NavigationManager