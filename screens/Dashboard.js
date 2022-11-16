import React from 'react';
import {View, Text} from 'react-native';
import { useAppContext } from '../components/utility/appContext';
const Calendata = require("../components/utility/Calendata.js");

export default Dashboard = () => {
    const {
        currentYear,
        currentMonth,
        currentDayofMonth,
        currentDayofWeek,
        firstDayofMonth,
        leapYear,
        weeksInYear
    } = useAppContext();

    return(
        <View>
            <Text>
                Today is {Calendata.WEEK_DAYS[currentDayofWeek]} {Calendata.MONTH_NAMES[currentMonth]} {currentDayofMonth}, {currentYear}
            </Text>
            <Text>
                leapYear = {leapYear ? 'true' : 'false'}
            </Text>
            <Text>
                weeks in year = {weeksInYear}
            </Text>
        </View>
    )
}