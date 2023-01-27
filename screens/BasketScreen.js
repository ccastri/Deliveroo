import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Currency from 'react-currency-formatter'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { useSelector } from 'react-redux'
import Splitter from '../components/Splitter'
import { selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'

const BasketScreen = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const basketTotal = useSelector(selectBasketTotal)



    return (
        <SafeAreaView className='flex-1 bg-white'>
            {/* Header */}
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00ccbb] bg-white shadow-xs'>
                    <Text className='text-lg font-bold text-center'> Basket</Text>
                    <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                </View>
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className='rounded-full bg-gray-100 absolute top-3 right-5'
                >
                    <XCircleIcon color='#00ccbb' height={50} width={50} />
                </TouchableOpacity>
                <View className='flex-row px-4 space-x-4 items-center py-3 bg-white my-5'>
                    <Image source={{
                        uri: 'https://links.papareact.com/wru',
                    }}
                        height={50} width={50}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />
                    <Text className='flex-1'>Deliver in 30-45 min</Text>
                    <TouchableOpacity >
                        <Text className='text-[#00ccbb]'>
                            Change
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className='divide-y divide-gray-200'>

                    {/*Rows displayed by id on the check*/}
                    <Splitter />
                </ScrollView>

                {/* Footer with billing descritions per person */}
                <View className='p-5 bg-white mt-5 space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Subtotal</Text>
                        <Text className='text-gray-400'><Currency quantity={basketTotal} currency='COP' /></Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Tip:10% (optional)</Text>
                        <Text className='text-gray-400'><Currency quantity={basketTotal * 0.10} currency='COP' /></Text>
                    </View>
                    <View className='flex-row justify-between mb-4'>
                        <Text className='   '>Order Total</Text>
                        <Text className='font-extrabold'><Currency quantity={basketTotal + (basketTotal * 0.10)} currency='COP' /></Text>
                    </View>
                    <TouchableOpacity
                        className='rounded-lg bg-[#00ccbb] p-4'
                        onPress={() => navigation.navigate('PreparingOrder')}
                    >
                        <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >

    )
}

export default BasketScreen