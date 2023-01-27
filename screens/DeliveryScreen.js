import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    return (
        <View className='bg-[#00ccbb] flex-1'>
            <SafeAreaView className='z-50'>
                <View className='flex-row justify-between items-center p-5'>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XMarkIcon color='white' size={30} />
                    </TouchableOpacity>
                </View>
                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
                    <View>
                        <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                        <Text className='text-4xl font-bold'>45-55 Minutes</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen