import { View, Text } from 'react-native'
import React from 'react'

interface IpageProps {
    name: string
}

export const Page = (props: IpageProps) => {
  return (
    <View>
      <Text>Page</Text>
    </View>
  )
}
