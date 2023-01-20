import { Image, Text, TouchableOpacity, View } from 'react-native'

const CategoryCard = ({ imgUrl, title }) => {
    // console.log(imgUrl)
    return (
        <TouchableOpacity className='relative mr-2 '>


            <Image
                source={{
                    uri: imgUrl
                }}
                className="h-20 w-20 rounded"
            />
            {/* {console.log(imgUrl)} */}
            <Text className='absolute bottom-1 left-1 text-gray-500 font-bold'>{title}</Text>
        </TouchableOpacity>

    )
}

export default CategoryCard