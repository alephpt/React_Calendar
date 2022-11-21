import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { useAppContext } from '../utility/appContext';
const Calendata = require("../utility/Calendata");

export default DrawMonth = ({selectedMonth, selectedYear, weekCount}) => {
    const [firstDayofMonth, setFirstDayofMonth] = useState(new Date(selectedYear, selectedMonth, 1).getDay());
    const [totalDays, setTotalDays] = useState(Calendata.MONTH_DAYS[selectedMonth]);
    const { currentDayofMonth, currentMonth } = useAppContext();
    const daysInAWeek = 7;
    let dayCount = 0;
    let blanks = 0;
    var month = [];
    var week = [];

    useEffect(() => {
        setFirstDayofMonth(new Date(selectedYear, selectedMonth, 1).getDay());
        setTotalDays(Calendata.MONTH_DAYS[selectedMonth]);
    }, [selectedMonth])

    // while (blanks < firstDayofMonth) {
    //     week.push(
    //         <View id={"blank_" + blanks} style={{width: '14.2%', borderWidth: 0.5}} />
    //     )

    //     blanks++;
    // }

    while (dayCount < totalDays) {
        let thisDay = dayCount + firstDayofMonth + 1;

        week.push(
            <View id={thisDay} style={{width: '14.2%', 
                                       height: 40.25, 
                                       borderWidth: 0.5,
                                       }}>
                <Text style={{paddingLeft: '5%', 
                                paddingTop: '5%', 
                                fontWeight: (dayCount + 1 == currentDayofMonth) &&
                                            (selectedMonth == currentMonth) ? 
                                            'bold' : 'normal'}}
                >
                    {dayCount + 1} 
                </Text>
            </View>
        )
        
        // if (thisDay % 7 == 0) { // if it's the last day of the week
        if (thisDay % 7 == 0 || dayCount + 1 == totalDays) {// if it's the last day of the week, or the last day of the month
            month.push(
                <View style={{width: '100%',
                             
                              flexDirection: "row"
                              }}>
                    {week}
                </View>
            );
            weekCount++;
            week = [];
        }

        // if (dayCount + 1 == totalDays && thisDay % 7 != 0) {
        //     blanks = daysInAWeek - (thisDay % 7);
        // }

        dayCount++;
    }

    // while (blanks > 0) {
    //     week.push(
    //         <View id={"blank_" + blanks} 
    //               style={{width: '14.2%', borderWidth: 0.5}}>
    //             </View>
    //     )
        
    //     blanks--;

    //     if (blanks == 0) {
    //         month.push(
    //             <View
    //                   style={{width: '100%', flexDirection: 'row'}}>
    //                 {week}
    //             </View>
    //         )
    //         week=[];
    //     }   
    // }

    return(
        <>
            {month}
        </>
    )
}