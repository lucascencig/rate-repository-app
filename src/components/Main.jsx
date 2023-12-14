import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from 'react-router-native'
const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/singin' element={<Text>Sing In</Text>} exact />
        <Route path='/login' element={<Text>Log In</Text>} exact />
        <Route path='/register' element={<Text>Register</Text>} exact />
        <Route path='/aboutus' element={<Text>About Us</Text>} exact />
        <Route path='/contactus' element={<Text>Contact Us</Text>} exact />
        {/* <Route path='*' element={<Navigate to='/' />} /> */}
      </Routes>
    </View>
  )
}

export default Main; 