import AnonIcon from "public/anon.png";
import Logo from "public/logo.png"
import {View, Button, Image} from "@tarojs/components";
import "./login.scss";
import {useNavigate} from "react-router-dom";

export default function Login()
{
  let navigate = useNavigate();

  return (
    <View className="flex flex-col items-center box-border h-full w-full px-4 py-8">
      <View className="flex items-center w-full mb-14">
        <Image className="w-24 h-24" src={AnonIcon}/>
        <View className="flex flex-col flex-1">
          <View className="text-lg font-semibold mb-1">未登录/注册</View>
          <View className="text-sm font-normal" style="color: #979797">登录可快速申请课源</View>
        </View>
      </View>
      <View className="flex flex-col flex-1 items-center">
        <Image className="w-48 h-48 mb-8" src={Logo}/>
        <View className="text-lg font-semibold m-2">登录完成快速发单or应聘</View>
        <View className="font-medium" style="color: #535D6D">老师/中介快速登录，获取完整服务</View>
      </View>
      <Button className="mt-14 w-full h-12 border-0 rounded text-white text-lg flex items-center justify-center"
              id="bt"
              onClick={() => navigate('/register')}
      >快速登录/注册</Button>
    </View>
  )
}
