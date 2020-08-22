import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from 'react';
import { View } from "react-native";
import LoginComponent from "../components/login";
import NavigationManger from "../components/navigationManger";

function MyNavigationContainer() {
    const [isValidUser, setIsValidUser] = useState(false)
    return (
        <NavigationContainer>
            <View style={{ height: 60 }}></View>
            {
                !isValidUser ? <LoginComponent isAttemptSuccessfull={setIsValidUser} /> : <NavigationManger />
            }
        </NavigationContainer>
    )
}

export default MyNavigationContainer