import Taro from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import Logo from "public/logo.png";
import {useEffect, useRef, useState} from "react";
import { useAtom } from 'jotai'
import store from "@/store/store";
import {TaroElement} from "@tarojs/runtime";

export default function NavBar()
{
  let container = useRef(null);
  const [_, setNavBarOffsetHeight] = useAtom(store.NavBarOffsetHeightAtom);
  const [nav_bar_height, setNavBarHeight ] = useState(0);
  const menu_button = Taro.getMenuButtonBoundingClientRect();
  Taro.getSystemInfo()
    .then(res => {
      const status_bar_height = res.statusBarHeight || 0;
      const menu_button_height = menu_button.height;
      const menu_button_top = menu_button.top;
      setNavBarHeight(status_bar_height + menu_button_height + (menu_button_top - status_bar_height) * 2);
    });
  useEffect(() => {
    if (container.current != null) {
      const taro_element: TaroElement = container.current;
      setNavBarOffsetHeight(parseInt(taro_element.style._value.height!));
    }
  });

  // const location = useLocation();
  // const isRegisterPage = location.pathname.includes("register");

  return (
      <View className="fixed flex items-end px-6 py-2 w-full bg-white z-10" style={{ height: nav_bar_height}} ref={container}>
        <View className="flex items-center">
          <Image className="w-6 h-6" src={Logo} />
          <View className="text-xl font-semibold pl-1">佳教汇</View>
        </View>
      </View>
  )
}
