import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'
// import { urlFor } from '../sanity'


const RestaurantCard = ({ id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat, }) => {
    return (
        <TouchableOpacity className='bg-white mr-3 shadow-sm'>
            <Image
                source={{ uri: imgUrl, }}
                className="h-36 w-64 rounded-sm"
            />

            <View className=' px-3 pb-4 '>
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row">

                    <View className="flex-row items-center space-xl-1">
                        <StarIcon color="green" opacity={0.4} size={22} />
                    </View>
                    <Text>
                        <Text className='text-green-500'>{rating}</Text> · {genre}
                    </Text>
                </View>
                <View>
                    <MapPinIcon color='gray' />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard