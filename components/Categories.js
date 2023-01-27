import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import sanityClient, { urlFor } from '../sanity'
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
            {categories?.map((category) => (
                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                />
            ))}
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Look for it!!!'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Look for it!!!'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Look for it!!!'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Look for it!!!'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Look for it!!!'
            />
            <CategoryCard
                imgUrl='https://links.papareact.com/gn7'
                title='Pegueloooo'
            />



        </ScrollView>
    )
}

export default Categories
