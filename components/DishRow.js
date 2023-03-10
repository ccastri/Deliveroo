import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsById } from '../features/basketSlice';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { addToBasketByPerson, removeFromPersonalBasket, selectBasketItemsByCostumer, selectPerson, setPerson } from '../features/splittedCheckSlice'
const DishRow = ({ id, name, description, price, image }) => {

    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(state => selectBasketItemsById(state, id))
    const person = useSelector(selectPerson)
    // Function to add products by person's name to the basket
    const addItemToBasketByPerson = () => {
        dispatch(addToBasketByPerson({ id, name, description, price, image }))
        dispatch(addToBasket({ id, name, description, price, image }))
    }
    // Function to remove products by person's name to the basket
    const removeItemFromPersonalBasket = () => {
        if (!person.items.length > 0) {
            return;
        }
        dispatch(removeFromPersonalBasket({ id, name, description, price, image }))
    }
    // Function to add products to the basket
    const addItemToBasket = () => {

        dispatch(addToBasket({ id, name, description, price, image }))
    }
    // Function to remove products to the basket
    const removeItemFromBasket = () => {
        if (!items.length > 0) {
            return;
        }
        dispatch(removeFromBasket({ id, name, description, price, image }))
    }


    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}>
                <View className='flex-row p-4'>
                    <View className='flex-1 pr-2'>
                        <Text className='text-lg mb-1'>{name}</Text>
                        <Text className='text-gray-400'>{description}</Text>
                        <Text className='text-gray-400 mt-2'><Currency quantity={price} currency='COP' /></Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: '#F3F3F4'
                            }}
                            source={{ uri: urlFor(image).url() }}
                            className='w-20 h-20 p-4 bg-gray-300'
                        />
                    </View>
                </View>
            </TouchableOpacity>
            <View>
                {/* To show the counter to add o delete the item to the basket */}
                {isPressed &&
                    <View className='pl-2 flex-row items-center space-x-2'>
                        <TouchableOpacity>
                            <MinusCircleIcon
                                disabled={!items.length}
                                onPress={removeItemFromBasket}
                                color={items.length > 0 ? '#00ccbb' : 'gray'}
                                size={40}
                            />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity>
                            <PlusCircleIcon
                                onPress={addItemToBasket}
                                color='#00ccbb'
                                size={40}
                            />
                        </TouchableOpacity>
                        {/* To show the counter to add o delete the item to the basket */}
                        {person.tableMember && (
                            <View className='pl-2 flex-row items-center space-x-2'>
                                <TouchableOpacity>
                                    <MinusCircleIcon
                                        disabled={!person.items.length}
                                        onPress={removeItemFromPersonalBasket}
                                        color={person.items.length > 0 ? '#00ccbb' : 'gray'}
                                        size={40}
                                    />
                                </TouchableOpacity>
                                <Text>{person.items.filter(item => item.id === id).length}</Text>
                                <TouchableOpacity>
                                    <PlusCircleIcon
                                        onPress={addItemToBasketByPerson}
                                        color='#00ccbb'
                                        size={40}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                }
            </View>
        </>
    )
}
export default DishRow