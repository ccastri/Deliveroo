import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 4000)
    }, [])
    return (
        <SafeAreaView className=' bg-[#00ccbb] flex-1 justify-center items-center'>
            <Animatable.Image
                source={require('../assets/imageloading.gif')}
                animation='slideInUp'
                iterationCount={1}
                className='h-96 w-96'
            />


            <Animatable.Text
                animation='slideInUp'
                iterationCount={1}
                className='text-lg my-10 text-white font-bold text-center'
            >
                <Text>Waiting for Restaurant to accept your order!</Text>
            </Animatable.Text>
            <Progress.Circle size={60} intermediate={true} color='white' />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen