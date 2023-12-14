import React from "react";
import { ViewPropTypes, StyleSheet, View, ScrollView } from 'react-native';
import StyledText from "./StyleText";
import Constants from 'expo-constants';
import theme from "./theme";
import { Link, useLocation } from "react-router-native";


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingVertical: 10
  },
  scroll: {
    paddingBottom: 5,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()

  const active = pathname === to
  const textStyles = [
    styles.text,
    active && styles.active
  ]
  return (
    <Link to={to}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}



const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <AppBarTab to='/' >Repositories</AppBarTab>
        <AppBarTab to='/login' >Log In</AppBarTab>
        <AppBarTab to='/singin' >Sing In</AppBarTab>
        <AppBarTab to='/register' >Register</AppBarTab>
        <AppBarTab to='/aboutus' >About Us</AppBarTab>
        <AppBarTab to='/contactus' >Contact Us</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar;