import sanityClient, { urlFor } from '../sanity'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import CategoryCard from './CategoryCard'

// deployedURL = 'https://deliveroo-fixed.sanity.studio/'
const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type == 'category']
            `
            )
            .then(data => setCategories(data))
    }, [])

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
            {categories?.map((category) => (


                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                />

            ))}
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
