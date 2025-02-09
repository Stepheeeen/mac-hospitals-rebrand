import NotifactionOptions from '@/components/reuseable/notifactionOptions'
import Tabbar from '@/components/reuseable/tabbar'
import React from 'react'
import { View } from 'react-native'
import tw from "twrnc"
const NotificationScreen = () => {
  return (
    <>
    <Tabbar
      screenText='Notification'
      />
    <View style={tw` flex-1 items-center`}>
      <NotifactionOptions
      optionText='Message'
      />

      <NotifactionOptions
      optionText='News letter'
      />
      <NotifactionOptions
      optionText='Nearby Hospital'
      />


    </View>
    </>
  )
}

export default NotificationScreen
