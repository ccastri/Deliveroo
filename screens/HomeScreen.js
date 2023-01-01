import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
    AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon
} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'


const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == 'featured']{
                ...,
            restaurants[]->{
                ...,
                dishes[]->,
            }
            }
            `
        ).then(data => { setFeaturedCategories(data) })
    }, [])
    return (

        <SafeAreaView className='border border-lime-500 bg-white ' >
            <View className='' >
                {/* {
                    console.log(featuredCategories)

                } */}
                {/* Header */}
                <View View className=' mb-0 flex-row items-center space-x-2 mx-4 pt-4 ' >
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru',
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                        <Text className='font-bold text-xl'>
                            Current Location
                            <ChevronDownIcon size={20} color='#00CCBB' />
                        </Text>
                    </View>
                    <UserIcon size={35} color='#00CCBB' />
                </View>

                {/* search */}
                <View View className="flex-row items-center space-x-2 pb-2 mx-4 " >
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                        <MagnifyingGlassIcon size={20} color='gray' />
                        <TextInput
                            placeholder='Restaurants and cuisines'
                            keyboardType='default'
                        />
                    </View>
                    <AdjustmentsVerticalIcon color='#00CCBB' />
                </View>


            </View>
            {/* Scrollable body */}
            <ScrollView
                className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
                showsHorizontalScrollIndicator={false}>
                {/* categories */}
                <Categories />

                {/* Featured Rows */}
                {featuredCategories?.map(category => (


                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />

                ))}

                {/* <FeaturedRow
                    id="1"
                    title='Tasty Discounts'
                    description='Pegueloooo'
                />
                <FeaturedRow
                    id="1"
                    title='Offers near you!'
                    description='Pegueloooo'
                /> */}

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen 