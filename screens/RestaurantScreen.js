import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import { urlFor } from '../sanity'

export default function RestaurantScreen() {
    const navigation = useNavigation()
    const {
        params: {

            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        },
    }
        = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])


    // console.log(urlFor(imgUrl.asset._ref).url())
    return (
        // <SafeAreaView>
        <ScrollView>
            <View className="relative">

                <Image
                    source={{
                        uri: urlFor(imgUrl).url(),
                    }}
                    className="w-full h-56"
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className=" bg-gray-100 rounded-full absolute top-14 left-5 p-2" >
                    <ArrowLeftIcon size={20} color="#00ccbb" />
                </TouchableOpacity>
            </View>
            <View className='bg-white'>
                <View className='px-4 pt-4'>
                    <Text className='text-3xl font-bold'>{title}</Text>
                    <View className='flex-row space-x-2 my-1'>
                        <View className="flex-row items-center space-x-1">
                            <StarIcon size={22} color='green' opacity={0.4} />
                            <Text className=' text-xs text-gray-500'>
                                <Text className='text-green-500'>{rating}</Text> · {genre}
                            </Text>
                        </View>

                        <View className='items-center flex-row space-x-1'>
                            <MapPinIcon color='gray' opacity={0.4} size={22} />
                            <Text className='text-xs text-gray-500'>Nearby · {address}</Text>
                        </View>
                    </View>
                    {/* {console.log({ short_description })} */}
                    <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
                </View>
                <TouchableOpacity className=' flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                    <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
                    <Text className='flex-1 pl-2 text-md font-bold'> Have a food alergy</Text>
                    <ChevronRightIcon color='#00ccbb' />
                </TouchableOpacity>
            </View>
            <View>
                <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
                {
                    dishes.map(dish => <DishRow
                        key={dish._id}
                        name={dish.name}
                        description={dish.short_description}
                        price={dish.price}
                        image={dish.image}
                    />
                    )}
            </View>
        </ScrollView>
        // </SafeAreaView>
    )
}