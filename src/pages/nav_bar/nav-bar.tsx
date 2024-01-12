import Taro from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import Logo from "public/logo.svg";
import {useEffect, useRef, useState} from "react";
import { useAtom } from 'jotai'
import {NavBarOffsetHeightAtom} from "@/store/store";
import {TaroElement} from "@tarojs/runtime";

export default function NavBar()
{
  const container = useRef(null);
  const [ ,setNavBarOffsetHeight] = useAtom(NavBarOffsetHeightAtom);
  const [nav_bar_height, setNavBarHeight ] = useState(0);
  const menu_button = Taro.getMenuButtonBoundingClientRect();
  Taro.getSystemInfo()
    .then(res => {
      const status_bar_height = res.statusBarHeight || 0;
      const menu_button_height = menu_button.height;
      const menu_button_top = menu_button.top;
      setNavBarHeight(status_bar_height + menu_button_height + (menu_button_top - status_bar_height) * 2);
    })
    .catch(reason => {
      console.warn(`Something went wrong: ${reason}`)
    });
  useEffect(() => {
    if (container.current != null) {
      const taro_element: TaroElement = container.current;
      setNavBarOffsetHeight(parseInt(taro_element.style._value.height!));
    }
  });

  return (
    <View className="fixed flex items-end w-full bg-white z-10" style={{padding: `${nav_bar_height * 0.1}px ${nav_bar_height * 0.25}px`, height: nav_bar_height}} ref={container}>
      <View className="flex items-center">
        <Image className="" style={{height: nav_bar_height * 0.32}} mode="heightFix" src={Logo}/>
        <View className="font-semibold pl-1" style={{fontSize: nav_bar_height * 0.28}}>佳教汇</View>
      </View>
    </View>
  )
}
