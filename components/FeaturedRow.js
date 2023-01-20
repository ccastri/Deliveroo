import { useState, useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import sanityClient from '../sanity'
// import restaurant from '../deliveroo-clone/schemas/restaurant'
import RestaurantCard from './RestaurantCard'


const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        sanityClient.fetch(
            // look for featured and only give 
            // me the info (dishes per restaurant)
            //  from the first [0] id that matches!
            `
    *[_type == 'featured' && _id == $id]{ 
                ...,
                restaurants[]->{
                ...,
                  dishes[]->,
                    type->{
                      name
                    }
                },
    }[0]`,
            { id } //

        ).then(data => { setRestaurants(data?.restaurants) })
    }, [id])

    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00CCBB' />
            </View>
            <Text className='text-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 25,
                }}
                className='pt-4'>

                {restaurants?.map(restaurant => (


                    <RestaurantCard
                        key={restaurant._id} // number
                        id={restaurant._id} //string
                        imgUrl={restaurant.image} //convierto a string en restaurantCard
                        title={restaurant.title} // string
                        rating={restaurant.rating} //number
                        genre={restaurant.type?.name} // string

                        address={restaurant.address} // string
                        short_description={restaurant.short_description} // string
                        dishes={restaurant.dishes} // string
                        long={restaurant.long} // number
                        lat={restaurant.lat} // number

                    />
                ))
                }
                {/* <RestaurantCard
                    key={1}
                    id={10}
                    imgUrl='https://links.papareact.com/gn7'
                    title='pglo'
                    rating={5}
                    genre='pglo'
                    address='pglo'
                    short_description='pglo'
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    key={2}
                    id={10}
                    imgUrl='https://links.papareact.com/gn7'
                    title='pglo'
                    rating={5}
                    genre='pglo'
                    address='pglo'
                    short_description='pglo'
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    key={4}
                    id={10}
                    imgUrl='https://links.papareact.com/gn7'
                    title='pglo'
                    rating={5}
                    genre='pglo'
                    address='pglo'
                    short_description='pglo'
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    key={5}
                    id={10}
                    imgUrl='https://links.papareact.com/gn7'
                    title='pglo'
                    rating={5}
                    genre='pglo'
                    address='pglo'
                    short_description='pglo'
                    dishes={[]}
                    long={20}
                    lat={0}
                /> */}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow
