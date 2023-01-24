import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter';
import { selectBasketByPersonTotal, selectPerson } from '../features/splittedCheckSlice'


export default BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)
    const basketByPersonTotal = useSelector(selectBasketByPersonTotal)
    const person = useSelector(selectPerson)
    console.log(person.items)
    if (items.length === 0) return null

    return (
        <>

            {

                person.items.length > 0 && (
                    <View className='absolute bottom-[120px] w-full z-50'>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('BasketByPerson')}
                            className=' mx-5 bg-[#00ccbb] p-4 flex-row rounded-lg items-center space-x-1 justify-between'>
                            <Text className=' text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>
                                {person.items.length}
                            </Text>
                            <Text className=' font-extrabold text-lg text-white'>
                                View {person.tableMember}'s Basket
                            </Text>
                            <Text className=' text-lg text-white font-extrabold'>
                                <Currency quantity={basketByPersonTotal} currency='COP' />
                            </Text>
                        </TouchableOpacity>
                    </View>

                )
            }

            <View className='absolute bottom-10 w-full z-50'>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Basket')}
                    className=' mx-5 bg-[#00ccbb] p-4 flex-row rounded-lg items-center space-x-1 justify-between'>
                    <Text className=' text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>
                        {items.length}
                    </Text>
                    <Text className=' font-extrabold text-lg text-white'>
                        View Basket
                    </Text>
                    <Text className=' text-lg text-white font-extrabold'>
                        <Currency quantity={basketTotal} currency='COP' />
                    </Text>
                </TouchableOpacity>
            </View>
        </>

    )
}