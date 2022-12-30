import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CategoryCard from './CategoryCard'


const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* <Text>El castri asegurando el futuro</Text> */}
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Pegueloooo'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Pegueloooo'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Pegueloooo'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Pegueloooo'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Pegueloooo'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Pegueloooo'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Pegueloooo'
            />



        </ScrollView>
    )
}

export default Categories
