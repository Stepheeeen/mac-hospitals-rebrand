import React from "react";
import { Tabs, usePathname, router } from "expo-router";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";
import { Text, TouchableOpacity, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const layout = () => {
  const pathname = usePathname();
  const Links = [
    {
      path: "/tabs/Home",
      link: "home",
      icon: <Octicons name="home" size={19} color="black" />,
      activeIcon: <Octicons name="home" size={19} color="#4FC48B" />,
    },
    {
      path: "/tabs/Notification",
      link: "Notification",
      icon: <AntDesign name="bells" size={19} color="black" />,
      activeIcon: <AntDesign name="bells" size={19} color="#4FC48B" />,
    },
    {
      path: "/tabs/Appointment",
      link: "Appointment",
      icon: <AntDesign name="calendar" size={19} color="black" />,
      activeIcon: <AntDesign name="calendar" size={19} color="#4FC48B" />,
    },
    {
      path: "/tabs/Profile",
      link: "Profile",
      icon: (
        <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <Path
            d="M9.5 0C8.51109 0 7.54439 0.293245 6.72215 0.842652C5.8999 1.39206 5.25904 2.17295 4.8806 3.08658C4.50216 4.00021 4.40315 5.00555 4.59607 5.97545C4.789 6.94536 5.2652 7.83627 5.96447 8.53553C6.66373 9.2348 7.55464 9.711 8.52455 9.90393C9.49445 10.0969 10.4998 9.99784 11.4134 9.6194C12.327 9.24096 13.1079 8.6001 13.6573 7.77785C14.2068 6.95561 14.5 5.98891 14.5 5C14.5 3.67392 13.9732 2.40215 13.0355 1.46447C12.0979 0.526784 10.8261 0 9.5 0ZM9.5 8C8.90666 8 8.32664 7.82405 7.83329 7.49441C7.33994 7.16476 6.95542 6.69623 6.72836 6.14805C6.5013 5.59987 6.44189 4.99667 6.55764 4.41473C6.6734 3.83279 6.95912 3.29824 7.37868 2.87868C7.79824 2.45912 8.33279 2.1734 8.91473 2.05764C9.49667 1.94189 10.0999 2.0013 10.6481 2.22836C11.1962 2.45542 11.6648 2.83994 11.9944 3.33329C12.3241 3.82664 12.5 4.40666 12.5 5C12.5 5.79565 12.1839 6.55871 11.6213 7.12132C11.0587 7.68393 10.2956 8 9.5 8ZM18.5 19V18C18.5 16.1435 17.7625 14.363 16.4497 13.0503C15.137 11.7375 13.3565 11 11.5 11H7.5C5.64348 11 3.86301 11.7375 2.55025 13.0503C1.2375 14.363 0.5 16.1435 0.5 18V19H2.5V18C2.5 16.6739 3.02678 15.4021 3.96447 14.4645C4.90215 13.5268 6.17392 13 7.5 13H11.5C12.8261 13 14.0979 13.5268 15.0355 14.4645C15.9732 15.4021 16.5 16.6739 16.5 18V19H18.5Z"
            fill="#201D1F"
          />
        </Svg>
      ),
      activeIcon: (
        <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <Path
            d="M9.5 0C8.51109 0 7.54439 0.293245 6.72215 0.842652C5.8999 1.39206 5.25904 2.17295 4.8806 3.08658C4.50216 4.00021 4.40315 5.00555 4.59607 5.97545C4.789 6.94536 5.2652 7.83627 5.96447 8.53553C6.66373 9.2348 7.55464 9.711 8.52455 9.90393C9.49445 10.0969 10.4998 9.99784 11.4134 9.6194C12.327 9.24096 13.1079 8.6001 13.6573 7.77785C14.2068 6.95561 14.5 5.98891 14.5 5C14.5 3.67392 13.9732 2.40215 13.0355 1.46447C12.0979 0.526784 10.8261 0 9.5 0ZM9.5 8C8.90666 8 8.32664 7.82405 7.83329 7.49441C7.33994 7.16476 6.95542 6.69623 6.72836 6.14805C6.5013 5.59987 6.44189 4.99667 6.55764 4.41473C6.6734 3.83279 6.95912 3.29824 7.37868 2.87868C7.79824 2.45912 8.33279 2.1734 8.91473 2.05764C9.49667 1.94189 10.0999 2.0013 10.6481 2.22836C11.1962 2.45542 11.6648 2.83994 11.9944 3.33329C12.3241 3.82664 12.5 4.40666 12.5 5C12.5 5.79565 12.1839 6.55871 11.6213 7.12132C11.0587 7.68393 10.2956 8 9.5 8ZM18.5 19V18C18.5 16.1435 17.7625 14.363 16.4497 13.0503C15.137 11.7375 13.3565 11 11.5 11H7.5C5.64348 11 3.86301 11.7375 2.55025 13.0503C1.2375 14.363 0.5 16.1435 0.5 18V19H2.5V18C2.5 16.6739 3.02678 15.4021 3.96447 14.4645C4.90215 13.5268 6.17392 13 7.5 13H11.5C12.8261 13 14.0979 13.5268 15.0355 14.4645C15.9732 15.4021 16.5 16.6739 16.5 18V19H18.5Z"
            fill="#4FC48B"
          />
        </Svg>
      ),
    },
  ];
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false, // Hide screen headers
          tabBarStyle: { display: "none" }, // Hide default TabBar
        }}
      >
        <Tabs.Screen name="Home" />
        <Tabs.Screen name="Notification" />
        <Tabs.Screen name="Appointment" />
        <Tabs.Screen name="Profile" />
      </Tabs>

      <View
        style={tw`absolute bottom-0 left-0 right-0 bg-[#E4F6E4] text-black px-5 py-5 shadow-lg flex-row justify-between items-center`}
      >
        {Links.map((link, index) => (
          <TouchableOpacity
            key={index}
            // style={tw`flex-row items-center px-5 py-1`}
            onPress={() => router.push(link.path)}
          >
            {/* {pathname === link.path ? ( */}
            <View style={tw`flex justify-center items-center gap-y-1`}>
              <View
                style={tw`w-[8px] h-[8px] rounded-full mb-1 bg-[#06331D] ${
                  pathname === link.path ? "" : "hidden"
                }`}
              />
              {pathname === link.path ? link.activeIcon : link.icon}

              <Text
                style={tw`font-medium text-[12px] ${
                  pathname === link.path ? "text-[#4FC48B]" : "text-[#201D1F]"
                }`}
              >
                {link.link.charAt(0).toUpperCase() + link.link.slice(1)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default layout;
