import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Alert, Image, Modal, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon, UserPlusIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import BasketIcon from '../components/BasketIcon'
import DishRow from '../components/DishRow'
import { setRestaurant } from '../features/restaurantSlice'
import { selectPerson, setPerson } from '../features/splittedCheckSlice'
import { urlFor } from '../sanity'

export default function RestaurantScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [tableMember, setTableMember] = useState(useSelector(selectPerson));
    // Recepcion de propiedades por parametros de cada restaurante
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
    } = useRoute()
    // Envio parametros al store para ser usados en el restaurant slice
    useEffect(() => {
        dispatch(setRestaurant({
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
        }))
    }, [dispatch])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <>
            {/* Boton para el modal del bill por persona */}
            <BasketIcon
                onPress={() => { navigation.navigate('Basket') }} />
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
                                    <Text className='text-green-500'>{rating}</Text> ?? {genre}
                                </Text>
                            </View>
                            <View className='items-center flex-row space-x-1'>
                                <MapPinIcon color='gray' opacity={0.4} size={22} />
                                <Text className='text-xs text-gray-500'>Nearby ?? {address}</Text>
                            </View>
                        </View>
                        <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
                    </View>
                    <TouchableOpacity className=' flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                        <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
                        <Text className='flex-1 pl-2 text-md font-bold'> Have a food alergy</Text>
                        <ChevronRightIcon color='#00ccbb' />
                    </TouchableOpacity>
                </View>
                <View className='relative flex-1 justify-center items-center h-[50px]  m-4'>
                    {/* Modal para a??adir el nombre del cliente */}
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
                                <Text>What's the costumer's name?</Text>
                                <TextInput
                                    type='text'
                                    placeholder={`Add a the costumer's to split accounts`}
                                    value={tableMember.tableMember}
                                    onChangeText={(text) => setTableMember({ ...tableMember, tableMember: text })}
                                    className='w-80 p-4 top-4 bg-gray-200  rounded-full items-center '
                                />
                                <Pressable
                                    className=' p-4 w-[120px] mt-8 items-center  rounded-full '>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalVisible(!modalVisible)
                                            dispatch(setPerson(tableMember))
                                        }}>
                                        <UserPlusIcon color='#00ccbb' opacity={0.6} size={30} />
                                    </TouchableOpacity>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        className='bg-[#00ccbb] w-80 items-center justify-center h-12 rounded-md'
                        onPress={() => setModalVisible(true)}>
                        <Text className='text-white'> Split the bill</Text>
                    </Pressable>
                </View>
                {/* Row de cada producto disponible en el restaurante */}
                <View className='pb-36'>
                    <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
                    {
                        dishes.map(dish => <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                        )}
                </View>
            </ScrollView>

        </>
    )
}