import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DrawYear from '../components/Calendar/DrawYear';
import { useAppContext } from "../components/utility/appContext";
import Calendata from "../components/utility/Calendata";

export default Calendar = () => {
    const {
        currentDayofMonth,
        currentMonth,
        currentYear
    } = useAppContext();

    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedYear, setSelectedYear] = useState(currentYear);

    function goForward() {
        if (selectedMonth < 11) {
            setSelectedMonth(selectedMonth + 1);
            return;
        }

        setSelectedYear(selectedYear + 1);
        setSelectedMonth(0);
    }

    function goBack() {
        if (selectedMonth > 0) {
            setSelectedMonth(selectedMonth - 1);
            return;
        }

        setSelectedYear(selectedYear - 1);
        setSelectedMonth(selectedMonth + 11);
    }
    

    return(
        <View style={{flex: 1, 
                      alignItems: 'center', 
                      justifyContent: 'space-around'}}>

            <View style={{flex: 1,  
                          alignSelf: 'center',
                          justifyContent: 'space-around',
                          flexDirection: 'row',
                          marginTop: '15%',
                          marginBottom: '-15%'}}>
                <AntDesign name="left"
                           style={{
                                    fontSize: 18,
                                  }} 
                           onPress={() => goBack()} />
                <Text >
                    Today is {Calendata.MONTH_NAMES[selectedMonth]} {currentDayofMonth}, {selectedYear}.
                </Text>
                <AntDesign name="right" 
                           style={{
                                    fontSize: 18,
                                    
                                }} 
                           onPress={() => goForward()} />
            </View>


            <View style={{
                          flex: 1,
                          // width: '100%', 
                          // height: '55%',
                          alignSelf: 'center', 
                          justifyContent: 'center', 
                          alignItems: 'center', 
                          marginBottom: '25%',
                        }}
            >
                <DrawYear thisMonth={selectedMonth} 
                          setThisMonth={setSelectedMonth}
                          thisYear={selectedYear} 
                          setThisYear={setSelectedYear}
                          />
            </View>
        </View>
    )
}