import { View, Text } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch();
    const [groupedItemInBasket, setGroupedItemInBasket] = useState()
    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results
        }, {});

        setGroupedItemInBasket(groupedItems)
        // console.log(groupedItemInBasket);
    }, [items])
    return (
        <View>
            <Text>BasketScreen</Text>
        </View>
    )
}

export default BasketScreen