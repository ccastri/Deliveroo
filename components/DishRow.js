import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
// import { useDispatch } from 'react-redux'
// import { addToBasket } from '../features/basketSlice';
// import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';

const DishRow = ({ id, name, description, price, image }) => {

    const [isPressed, setIsPressed] = useState(false)
    // const dispatch = useDispatch()



    // const addItemToBasket = () => {
    // dispatch(addToBasket({ id, name, description, price, image }))

    // }

    return (
        // <>

        <TouchableOpacity
            onPress={() => setIsPressed(!isPressed)}>
            {console.log(isPressed)}
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

        // <View>

        //     <View>
        //         <TouchableOpacity>
        //             <MinusCircleIcon />
        //         </TouchableOpacity>
        //         <Text>0</Text>
        //         <TouchableOpacity>
        //             <PlusCircleIcon
        //                 onPress={addItemToBasket}
        //                 color='#00ccbb'
        //                 size={40}
        //             />
        //         </TouchableOpacity>
        //     </View>

        // </View>
        // </>
    )
}
export default DishRow