import { View, Text } from 'react-native'
import React from 'react'
// {itemsByID}
const DishByPerson = () => {
    return (
        <>

            {
                Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <TouchableOpacity
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
                    </TouchableOpacity>
                ))
            }
        </>
    )
}

export default DishByPerson