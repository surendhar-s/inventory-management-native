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
                // const data = await Axios.get("http://localhost:3001/products?productUserId=1")
                dispatch(InitialFetch([
                    {
                        "productCategory": "3",
                        "productName": "Hello",
                        "productStock": "57",
                        "productPrice": "2425",
                        "productDescription": "kjaha gfhaf",
                        "productAddedOn": "2020-08-08T13:26:58.498Z",
                        "productUpdatedOn": "2020-08-11T16:10:07.045Z",
                        "productUserId": "1",
                        "id": 2
                    },
                    {
                        "productCategory": "2",
                        "productName": "Sample Product",
                        "productStock": "50",
                        "productPrice": "2855",
                        "productDescription": "aakjd'aj ajajg",
                        "productAddedOn": "2020-08-09T03:52:16.194Z",
                        "productUpdatedOn": "2020-08-09T04:01:37.225Z",
                        "productUserId": "1",
                        "id": 4
                    },
                    {
                        "productCategory": "1",
                        "productName": "iPhone",
                        "productStock": "59",
                        "productPrice": "90999",
                        "productDescription": "Apple product",
                        "productAddedOn": "2020-08-09T04:54:46.245Z",
                        "productUpdatedOn": null,
                        "productUserId": "1",
                        "id": 5
                    },
                    {
                        "productCategory": "4",
                        "productName": "Sample product",
                        "productStock": "3",
                        "productPrice": "5215",
                        "productDescription": "Hello world",
                        "productAddedOn": "2020-08-10T06:34:02.951Z",
                        "productUpdatedOn": "2020-08-10T06:34:46.499Z",
                        "productUserId": "1",
                        "id": 6
                    },
                    {
                        "productCategory": "4",
                        "productName": "Test Product",
                        "productStock": "4",
                        "productPrice": "222",
                        "productDescription": "Hello Sample",
                        "productAddedOn": "2020-08-11T16:17:47.902Z",
                        "productUpdatedOn": null,
                        "productUserId": "1",
                        "id": 7
                    },
                    {
                        "productCategory": "1",
                        "productName": "Test Product 2",
                        "productStock": "23",
                        "productPrice": "213",
                        "productDescription": "Hello World Sample",
                        "productAddedOn": "2020-08-11T16:32:09.303Z",
                        "productUpdatedOn": "2020-08-11T16:36:29.840Z",
                        "productUserId": "1",
                        "id": 8
                    },
                    {
                        "productCategory": "3",
                        "productName": "Test Product 3",
                        "productStock": "10",
                        "productPrice": "654",
                        "productDescription": "Hello sample 3",
                        "productAddedOn": "2020-08-11T16:36:06.764Z",
                        "productUpdatedOn": null,
                        "productUserId": "1",
                        "id": 9
                    },
                    {
                        "productCategory": "2",
                        "productName": "Test Product 4",
                        "productStock": "5",
                        "productPrice": "21",
                        "productDescription": "Hello Sample product",
                        "productAddedOn": "2020-08-11T16:48:38.026Z",
                        "productUpdatedOn": null,
                        "productUserId": "1",
                        "id": 10
                    },
                    {
                        "productCategory": "5",
                        "productName": "Test Product 5",
                        "productStock": "50",
                        "productPrice": "23",
                        "productDescription": "Hello sample product",
                        "productAddedOn": "2020-08-11T16:49:37.276Z",
                        "productUpdatedOn": null,
                        "productUserId": "1",
                        "id": 11
                    },
                    {
                        "productCategory": 1,
                        "productName": "Test Product 6",
                        "productStock": "14",
                        "productPrice": "345",
                        "productDescription": "Hello Sample product",
                        "productAddedOn": "2020-08-11T17:00:18.174Z",
                        "productUpdatedOn": null,
                        "productUserId": "1",
                        "id": 12
                    },
                    {
                        "productCategory": "4",
                        "productName": "sasfjdash",
                        "productStock": "66",
                        "productPrice": "2224",
                        "productDescription": "afydsgfodgfupdfpg",
                        "productAddedOn": "2020-08-16T08:01:38.484Z",
                        "productUpdatedOn": null,
                        "productUserId": "1",
                        "id": 13
                    },
                    {
                        "productCategory": 1,
                        "productName": "jfjilghqi",
                        "productStock": "6",
                        "productPrice": "5635",
                        "productDescription": "alhglvahgqrg",
                        "productAddedOn": "2020-08-16T08:11:53.343Z",
                        "productUpdatedOn": null,
                        "productUserId": "1",
                        "id": 14
                    }
                ]))
                dispatch(initialFetchCategory(
                    [
                        {
                            "id": 1,
                            "categoryName": "Mobile"
                        },
                        {
                            "id": 2,
                            "categoryName": "Large Appliances"
                        },
                        {
                            "id": 3,
                            "categoryName": "Printer"
                        },
                        {
                            "id": 4,
                            "categoryName": "Bike Accessories"
                        },
                        {
                            "categoryName": "Essesntials",
                            "id": 5
                        }
                    ]
                ))
                // console.log(data);
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
            <Text>Login Here</Text>
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
            {credentialError ? <Text>Please enter valid credential</Text> : null}
        </View>
        // </ImageBackground>
    )
}

export default LoginComponent