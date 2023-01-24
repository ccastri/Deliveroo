import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, Alert, Modal, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter';
import GroupedItemsByPerson from '../components/GroupedItemsByPerson'
import { selectBasketByPersonTotal, selectPerson } from '../features/splittedCheckSlice'

const BasketScreen = () => {
    // const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const restaurant = useSelector(selectRestaurant)
    const person = useSelector(selectPerson)
    console.log(person);
    const items = useSelector(selectBasketItems)
    const basketByPersonTotal = useSelector(selectBasketByPersonTotal)



    return (
        <SafeAreaView className='flex-1 bg-white'>
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
                    <GroupedItemsByPerson />
                </ScrollView>
                <View className='p-5 bg-white mt-5 space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Subtotal</Text>
                        <Text className='text-gray-400'><Currency quantity={basketByPersonTotal} currency='COP' /></Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Tip:10% (optional)</Text>
                        <Text className='text-gray-400'><Currency quantity={basketByPersonTotal * 0.10} currency='COP' /></Text>
                    </View>
                    <View className='flex-row justify-between mb-4'>
                        <Text className='   '>Order Total</Text>
                        <Text className='font-extrabold'><Currency quantity={basketByPersonTotal + 5000} currency='COP' /></Text>
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