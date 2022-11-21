import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import DrawMonth from './DrawMonth';
import { useAppContext } from '../utility/appContext';



export default DrawYear = ({thisMonth, setThisMonth, thisYear, setThisYear}) => {

    const fewMos = [
        {
            month: 9,
            year: 2022,
            weeks: 0
        },
        {
            month: 10,
            year: 2022,
            weeks: 0
        },
        {
            month: 11,
            year: 2022,
            weeks: 0,
        },
    ];

    const returnItem = (data, index) => ({
        month: data.month,
        year: data.year
    });

    const drawYear = ({ item }) => {
        return (
        <DrawMonth selectedMonth={item.month}
                   selectedYear={item.year}
                   weekCount={item.weeks}
                   /> 
        )
    };   

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList style={{flex: 1}}
                      pagingEnabled
                      data={fewMos}
                      renderItem={drawYear}
                      onScroll
                      decelerationRate="normal"
                      keyExtractor={item => item.year + "_" + item.month}
                />
        </SafeAreaView>
    )
}