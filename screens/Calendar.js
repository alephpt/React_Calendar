import React from 'react';
import {View, Text} from 'react-native';
import DrawMonth from '../components/Calendar/DrawMonth';
import { useAppContext } from "../components/utility/appContext";
import Calendata from "../components/utility/Calendata";

export default Calendar = () => {
    
    const {
        currentYear,
        currentMonth,
        currentDayofMonth,
        currentDayofWeek,
        firstDayofMonth,
        leapYear,
        weeksInYear
    } = useAppContext();

    // create month
    

    return(
        <View style={{flex: 1, 
                      alignItems: 'center', 
                      justifyContent: 'space-around'}}>
            <Text style={{marginTop: '15%', marginBottom: '-10%'}}>
                Today is {Calendata.MONTH_NAMES[currentMonth]} {currentDayofMonth}, {currentYear}.
            </Text>

            <View style={{
                          width: '100%', 
                          height: '55%',
                          alignSelf: 'center', 
                          justifyContent: 'center', 
                          alignItems: 'center', 
                          marginBottom: '25%',
                        }}
            >
                <DrawMonth />
            </View>
        </View>
    )
}