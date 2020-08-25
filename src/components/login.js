import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import styles from '../globalStyles'
import { useDispatch } from "react-redux";
import InitialFetch from '../actions/saveProducts'
import initialFetchCategory from '../actions/categoryList'
import Axios from 'axios';

function LoginComponent(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [credentialError, setCredentialError] = useState(false)
    const dispatch = useDispatch()
    const doLoginProcess = async () => {
        if (userName !== "" && password !== "") {
            if (userName === "admin" && password === "admin") {
                setCredentialError(false)
                const list = await Axios.get("http://192.168.1.103:3001/products?productUserId=1")
                dispatch(InitialFetch(list.data))
                const list2 = await Axios.get("http://192.168.1.103:3001/category")
                dispatch(initialFetchCategory(list2.data))
                props.isAttemptSuccessfull(true)
            }
            else {
                setCredentialError(true)
            }
        }
        else {
            setCredentialError(true)
        }
    }
    return (
        // <ImageBackground source="linear-gradient(305deg, #1b1b1b 10%, #5a5559 100%)" width={100}>
        <View style={styles.loginComponentContainer}>
            <Text style={{ color: "white" }}>Login Here</Text>
            <TextInput
                style={styles.textInputWidth}
                onChangeText={text => setUserName(text)}
                placeholder="Email id"
            />
            <TextInput
                style={styles.textInputWidth}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                placeholder="Password"
            />
            <Button
                title="Login"
                onPress={doLoginProcess}
            />
            {credentialError ? <Text style={styles.errorText}>Please enter valid credential</Text> : null}
        </View>
        // </ImageBackground>
    )
}

export default LoginComponent