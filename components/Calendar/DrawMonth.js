import React from 'react';
import {View, Text} from 'react-native';
import { useAppContext } from '../utility/appContext';
const Calendata = require("../utility/Calendata");

export default DrawMonth = ({}) => {
    var month = [];
    var week = [];

    const {
        currentYear,
        currentMonth,
        currentDayofMonth,
        currentDayofWeek,
        firstDayofMonth,
        leapYear,
        weeksInYear
    } = useAppContext();

    for (let weeks = 0; weeks < 5; weeks++) {
        week = [];
        // add row of days to week
        for (let days = 0; days < 7; days++) {
            let day = weeks * 7 + days;
            let offsetDay = day - firstDayofMonth;
                week.push(
                    (day >= firstDayofMonth && 
                    offsetDay < Calendata.MONTH_DAYS[currentMonth]) 
                    ? 
                        <View id={day} style={{flex: 1, borderLeftWidth: 1, borderTopWidth: 1}}>
                            <Text style={{paddingLeft: '5%', paddingTop: '5%', 
                                        fontWeight: offsetDay + 1 == currentDayofMonth ? 'bold' : 'normal'}}>
                                {offsetDay + 1} 
                            </Text>
                        </View>
                    :
                        <View id={day} style={{flex: 1, borderLeftWidth: 1, borderLeftColor: '#ffffff'}}/>
                );
            
            }
        
        // add column of week to month
        month.push(<View style={{flex:1 , flexDirection: "row"}}>{week}</View>);
    }

    return(
        <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#ffffff',
                    }}
            >
            {month}
        </View>
    )
}