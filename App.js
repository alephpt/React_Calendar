import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, Pressable, Dimensions} from 'react-native';
import Navigator, {navigateTo} from './screens/Navigator';
import { AppContext } from './components/utility/appContext';
const Calendata = require("./components/utility/Calendata.js");

export default function App() {
  var today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentDayofMonth, setCurrentDay] = useState(today.getDate());
  const [firstDayofMonth, setFirstDayofMonth] = useState(new Date(currentYear, currentMonth, 1).getDay());
  const [firstDayofYear, setFirstDayofYear] = useState(new Date(currentYear, 1, 1));
  const [leapYear, setLeapYear] = useState(Calendata.isLeapYear(currentYear));
  const [weeksInYear, setWeeksInYear] = useState((firstDayofYear == 4 && !leapYear) ? 53 : 
                                                 (firstDayofYear == 3 && leapYear) ? 53 : 52);

  return (
    <SafeAreaView style={{flex: 1,
                          backgroundColor: '#000000'
                        }}>
      <AppContext.Provider
        value={{
              currentYear,
              currentMonth,
              currentDayofMonth,
              firstDayofMonth,
              leapYear,
              weeksInYear,
        }}
        >
        <Navigator />
      </AppContext.Provider>
    </SafeAreaView>
  );
}
