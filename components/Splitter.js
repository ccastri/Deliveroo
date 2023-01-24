import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems } from '../features/basketSlice'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter';


const Splitter = ({ personID }) => {
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    // ! CREO un conjunto de objetos que vienen del estado general de los objeetos en el store
    // ! PREGUNTA: podriamos hacer que solamente cambie un componente local con un estado en vez de modificar item directamente?
    // !Voy a mostrar los objetos organizados por indice (el ej dice id) en donde un array de objetos
    //! tipo item o vacio van a ser los valores posibles para las instancias creadas con el reducer
    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
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

                        {/* Remove from basket by person ID (index) */}
                    </View>
                ))}
        </View>
    )
}

export default Splitter