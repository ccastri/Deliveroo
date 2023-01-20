import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, Alert, Modal, Pressable, TextInput } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter';


const BasketScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const splitItems = [...items]
    const basketTotal = useSelector(selectBasketTotal)
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results
        }, {});

        setGroupedItemsInBasket(groupedItems)
        // console.log(groupedItemInBasket);
    }, [items])
    const [splittedCheck, setSplittedCheck] = useState(items)
    const [isPressed, setIsPressed] = useState(false)
    console.log(splittedCheck)
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
                    {/* Como el reduce nos entrega un objeto extraigo los key y los objetos para mapear y mostrar data */}
                    {
                        items.map((item, i) => (
                            <TouchableOpacity
                                key={i}
                                className='flex-row items-center space-x-3 bg-white py-2 px-5'
                                onPress={() => {
                                    setSplittedCheck({ ...splitItems, item });
                                    setIsPressed(!isPressed)
                                }
                                }
                            >
                                {/* <Text>{items.length} X</Text> */}
                                <Image
                                    source={{
                                        uri: urlFor(item.image).url(),
                                    }}
                                    className='h-12 w-12 rounded-full'
                                />
                                <Text className='flex-1'>{item.name}</Text>
                                <View>
                                    <Text className='text-gray-600'>
                                        <Currency quantity={item.price} currency='COP' />
                                    </Text>
                                    <Text className='pt-1 text-xs text-gray-600'>Tip:
                                        <Currency className='text-xs' quantity={item.price * 0.10} currency='COP' />
                                    </Text>
                                </View>
                                <TouchableOpacity>
                                    <Text
                                        className='text-[#00ccbb] text-xs'
                                        onPress={() => dispatch(removeFromBasket({ id: item.id }))}
                                    >
                                        Remove
                                    </Text>
                                </TouchableOpacity>
                                {/* {isPressed && <TouchableOpacity
                                >
                                    <Text>Split</Text>
                                </TouchableOpacity>} */}
                            </TouchableOpacity>
                        ))}
                    {splittedCheck.pax ? (
                        <>

                            {Object.entries(splittedCheck).forEach((item, i) => {

                                <View
                                    key={i}
                                >
                                    <Text> {item}</Text>
                                </View>
                            })}
                        </>
                    ) : (
                        <></>
                    )}
                    {/* {
                        Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View
                            key={key}
                            className='flex-row items-center space-x-3 bg-white py-2 px-5'
                        >
                            <Text>{items.length} X</Text>
                            <Image
                                source={{
                                    uri: urlFor(items[0]?.image).url(),
                                }}
                                className='h-12 w-12 rounded-full'
                            />
                            <Text className='flex-1'>{items[0].name}</Text>
                            <Text className='text-gray-600'>
                                <Currency quantity={items[0]?.price} currency='COP' />
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    className='text-[#00ccbb] text-xs'
                                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))} */}
                </ScrollView>
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
                        <Text className='font-extrabold'><Currency quantity={basketTotal + 5000} currency='COP' /></Text>
                    </View>
                    <View className='flex-1 justify-center items-center h-[450px]  m-4'>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                                setSplittedCheck({})
                            }}>
                            <View className='flex-1 justify-center items-center' >
                                <View className='bg-white rounded-xl p-[35px] h-[250px] items-center shadow-[#000]' >

                                    <Text>How many people you want to split it for?</Text>
                                    <TextInput
                                        type='text'
                                        placeholder='Add a number to split accounts'

                                        value={splittedCheck.pax}
                                        onChangeText={(text) => setSplittedCheck({ ...splittedCheck, pax: text })}
                                        className='w-80 p-4 top-4 bg-gray-200  rounded-full items-center '
                                    ></TextInput>
                                    <Pressable
                                        className='bg-[#00ccbb] p-4 w-[120px] mt-8 items-center  rounded-full '
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text >Split it!</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <Pressable
                            className='bg-[#2196F3] w-[120px] items-center justify-center h-12 rounded-full'
                            onPress={() => setModalVisible(true)}>
                            <Text> Bill splitting</Text>
                        </Pressable>

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