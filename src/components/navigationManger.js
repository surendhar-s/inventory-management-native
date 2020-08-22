import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardComponent from "./dashboad";
import ListAllProductsComponent from "./listAllProducts";
import ViewProductComponent from "./viewProduct";

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
            <Drawer.Screen
                name="Dashboard"
                component={DashboardComponent}
            />
            <Drawer.Screen
                name="ListAll"
                component={ListAllProductsComponent}
            />
            <Drawer.Screen
                name="ViewProduct"
                component={ViewProductComponent}
            />
        </Drawer.Navigator>
    )
}
export default NavigationManager