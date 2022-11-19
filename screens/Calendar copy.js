import React from 'react';
import {View, Text} from 'react-native';
import { useAppContext } from "../components/utility/appContext";
import Calendata from "../components/utility/Calendata";

export default Calendar = () => {
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

    // create month
    for (let weeks = 0; weeks < 5; weeks++) {
        week = [];
        // add row of days to week
        for (let days = 0; days < 7; days++) {
            let day = weeks * 7 + days;
            let offsetDay = day - firstDayofMonth;

            week.push(
                <View id={day} style={{flex: 1, borderLeftWidth: 1, borderTopWidth: 1}}>
                    <Text style={{paddingLeft: '5%', paddingTop: '5%', 
                                fontWeight: offsetDay + 1 == currentDayofMonth ? 'bold' : 'normal'}}>
                        {
                            day >= firstDayofMonth && 
                            offsetDay < Calendata.MONTH_DAYS[currentMonth] ?
                            offsetDay + 1 : 
                            ""
                        } 
                    </Text>
                </View>
                );
            }
        
        // add column of week to month
        month.push(<View style={{flex:1 , flexDirection: "row"}}>{week}</View>);
    }

    return(
        <View style={{flex: 1, 
                      alignItems: 'center', 
                      justifyContent: 'space-around'}}>
            <Text style={{marginTop: '15%', marginBottom: '-10%'}}>
                Today is {Calendata.MONTH_NAMES[currentMonth]} {currentDayofMonth}, {currentYear}.
            </Text>

            <View style={{
                          width: '85%', 
                          height: '55%',
                          alignSelf: 'center', 
                          justifyContent: 'center', 
                          alignItems: 'center', 
                          marginBottom: '25%',
                          borderBottomWidth: 1,
                          borderRightWidth: 1
                        }}
            >
                    {month}
            </View>
        </View>
    )
}