import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Pressable, Linking} from 'react-native';
import {
    NavigationContainer,
    DrawerActions,
    useNavigation
} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {useAppContext} from "../components/utility/appContext";
import {TouchableHighlight} from 'react-native-gesture-handler';

import Dashboard from "../screens/Dashboard";
import Calendar from "../screens/Calendar";
import Events from "../screens/Events";
import Secret1 from "../screens/Secret1";
import Secret2 from "../screens/Secret2";

const Drawer = createDrawerNavigator();

export function navigateTo(link) {
    const navigation = useNavigation();
    navigation.navigate(link);
}

const defaultNavBar = (navigation) => {
    return ({
        swipeEdgeWidth: 0,
        swipeEnabled: false,
        drawerType: 'front',
        drawerPosition: 'right',
        drawerStyle: {
            backgroundColor: '#000000',
            width: '100%'
        },
        headerTitleStyle: {
            color: 'transparent'
        },
        headerStyle: {
            backgroundColor: '#ffffff',
            height: 52,
            shadowColor: 'transparent'
        },
        /*
        headerLeft: () => {
            <>
                <TouchableOpacity onPress{() => {
                    navigatione.navigate('Dashboard')
                }}>
                    <Text>
                        Icon
                    </Text>
                </TouchableOpacity>
            </>
        },
        headerTitle: (title) => {},
        headerRight: () => {
            <>
                <TouchableOpacity onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                }}>
                    <Text>
                        Menu
                    </Text>
                </TouchableOpacity>
            </>
        }
        */
        headerTintColor: "#9f1350",
        drawerActiveBackgroundColor: 'transparent',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: "#ffffff",
        drawerItemStyle: {
            alignSelf: 'center',
            width: '100%',
            marginVertical: 22,
            borderRadius: 5
        },
        drawerLabelStyle: {
            borderRadius: 0,
            marginVertical: -12,
            marginLeft: 8,
            fontWeight: '400',
            fontSize: 30,
            lineHeight: 45,
            letterSpacing: -0.01,
            textTransform: 'uppercase'
        }
    })
}

const ScreenRoutes = () => {
    return ({
        MENU: {
            Home: {title: 'Home', component: Dashboard},
            Calendar: {title: 'Calendar', component: Calendar},
            Events: {title: 'Events', component: Events},
        },
        SCREENS: {
            Secret1: {title: 'Secret1', component: Secret1},
            Secret2: {title: 'Secret2', component: Secret2}
        }
    })
}

const DrawerInlay = (props) => {
    const navigation = useNavigation();

    return (
        <DrawerContentScrollView contentContainerStyle={{paddingTop: 0}} 
                                    style={{flex: 1}}
                                    {...props}>
            <View style={{paddingHorizontal: 10}}>
                <View style={{flex: 1, alignItems: 'flex-end', marginTop: 8, marginBottom: 15}}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
                        <Text>
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 18}}>
                    <DrawerItemList {...props} />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const DrawNav = (props) => {
    return (
        <View style={{flex: 1}}>
            <Drawer.Navigator
                detachInactiveScreens
                backBehavior='history'
                defaultStatus='closed'
                drawerContent={props => <DrawerInlay {...props}/>}
                screenOptions={({navigation}) => defaultNavBar(navigation)}
            >
                {(Object.keys(props.ROUTES.MENU) as (keyof typeof props.ROUTES.MENU)[]).map(
                    (name) => (
                        <Drawer.Screen
                            key={name}
                            name={name}
                            getComponent={() => props.ROUTES.MENU[name].component}
                            options={{title: props.ROUTES.MENU[name].title}}
                        />
                    )
                )}

                {(Object.keys(props.ROUTES.SCREENS) as (keyof typeof props.ROUTES.SCREENS)[]).map(
                    (name) => (
                        <Drawer.Screen
                            key={name}
                            name={name}
                            getComponent={() => props.ROUTES.SCREENS[name].component}
                            options={{title: props.ROUTES.SCREENS[name].title,
                                      drawerItemStyle: {display: "none"}
                            }}
                        />
                    )
                )}
            </Drawer.Navigator>
        </View>
    )
}

const Navigator = () => {
    let ROUTES = ScreenRoutes();

    return (
        <NavigationContainer>
            <DrawNav ROUTES={ROUTES} />
        </NavigationContainer>
    )
}

export default Navigator;
