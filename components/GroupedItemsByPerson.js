import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems } from '../features/basketSlice'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter';
import { selectBasketItemsByCostumer, selectPerson } from '../features/splittedCheckSlice'


const Splitter = () => {
    const items = useSelector(selectBasketItemsByCostumer)
    const dispatch = useDispatch()
    const person = useSelector(selectPerson)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])


    useEffect(() => {
        const groupedItems = person.items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results
        }, {});

        setGroupedItemsInBasket(groupedItems)
    }, [items])

    return (
        <View className='flex-1'>

            {
                Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View
                        key={key}
                        className='flex-row items-center space-x-3 bg-white py-2 px-5'
                    >
                        <Text>{person.items.length} X</Text>
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

                        {/* Remove from basket by person ID (index) */}
                    </View>
                ))}
        </View>
    )
}

export default Splitter