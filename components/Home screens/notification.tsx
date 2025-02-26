import NotifactionOptions from '@/components/reuseable/notifactionOptions'
import Tabbar from '@/components/reuseable/tabbar'
import React from 'react'
import { View } from 'react-native'
import {router} from "expo-router"
import tw from "twrnc"
const NotificationScreen = () => {
  const notificationContext=[
    {
      optionText:'Message',

      route: "/notifications/message"
    },
    {
    optionText:'News letter',
    route:"/notifications/news_letter"
    },
    {
      optionText:'Nearby Hopital',
      route:"/notifications/nearby_hospital"
      
      

    }
  ]
  const handleNavigation = (route:any) => {
    if (route) {
      router.push(route)
    } else {
      // Handle the case where no route is defined
      console.log("No route defined for this option")
    }
  }

  return (
    <>
    <Tabbar
      screenText='Notification'
      />
    <View style={tw` flex-1 items-center`}>
      {notificationContext.map((item,index)=>(
        <NotifactionOptions
        onPress={() => handleNavigation(item.route)}
        key={index}
        optionText={item.optionText}
        />
      ))}



    </View>
    </>
  )
}

export default NotificationScreen
