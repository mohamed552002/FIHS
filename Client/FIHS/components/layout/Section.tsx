import React, { Children } from 'react'
import { HStack, LinkText, ScrollView, Text, View } from '@gluestack-ui/themed'
import { Link } from '@gluestack-ui/themed'

type Props = {
    name: string,
    link: string, 
    children: React.ReactNode
}

const Section = ({name, children, link}: Props) => {
  return (
    <View>
        <HStack justifyContent='space-between' alignItems='center' my={"$5"}>
        <Text fontWeight='$bold' size='md'> {name}</Text>
        <Link $active={{opacity:0.75}} href={link} >
            <LinkText fontWeight='$bold' size='md' textTransform='none' textDecorationLine='none' color='$blue700'>المزيد</LinkText>
        </Link>
        </HStack>
        <ScrollView horizontal  contentContainerStyle={{paddingHorizontal:5}} showsHorizontalScrollIndicator={false}>
            {
                children
            }
        </ScrollView>
  </View>
  )
}

export default Section