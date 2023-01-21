import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

const SplittedBillScreen = () => {
    const navigation = useNavigation()
    // const {
    //     params: { acc },
    // } = useRoute()
    // console.log(acc)
    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={navigation.goBack}
                className=" bg-gray-100 rounded-full absolute top-14 left-5 p-2" >
                <ArrowLeftIcon size={20} color="#00ccbb" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SplittedBillScreen