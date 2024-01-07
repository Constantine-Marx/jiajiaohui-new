import {Image, View} from "@tarojs/components";
import {useNavigate} from "react-router-dom";
import Logo from "../../../public/logo.png";

export default function Register()
{
  const navigate = useNavigate();

  return (
    <View>
      {/*图片近1MB, 考虑CDN加速*/}
      <Image className="absolute h-2/3 w-full z-0" src="https://api.tutorhub.top/files/register.png" />
      <View className="absolute flex flex-col h-1/2 w-full bottom-0 px-5 pt-6 pb-40 z-20">
        <View className="flex text-white items-center text-2xl font-medium">
          <Image className="w-8 h-8 mr-2" src={Logo} />
          佳教汇
        </View>
        <View className="text-2xl text-white font-medium mt-3 mb-5">您的身份是？</View>
        <View className="flex flex-1 justify-between items-center">
          <View className="flex flex-col h-28 rounded-lg shadow-lg" style={{width:"48%"}} onClick={() => navigate('/register/agent')}>
            <View className="flex-1 rounded-t-lg" style={{backgroundColor: "#EEEEF0"}}></View>
            <View className="flex h-1/4 rounded-b-lg items-center justify-center bg-white font-medium">发单·中介老师</View>
          </View>
          <View className="flex flex-col h-28 rounded-lg shadow-lg" style={{width:"48%"}} onClick={() => navigate('/register/tutor')}>
            <View className="flex-1 rounded-t-lg" style={{backgroundColor: "#EEEEF0"}}></View>
            <View className="flex h-1/4 rounded-b-lg items-center justify-center bg-white font-medium">求职·家教老师</View>
          </View>
        </View>
      </View>
      <View className="absolute w-full bg-white bottom-0 rounded-xl z-10" style={{height: "28%"}}></View>
    </View>
  )
}
