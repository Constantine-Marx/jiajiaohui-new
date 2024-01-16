import {Route, Routes, useNavigate} from 'react-router-dom';
import {Image, View} from '@tarojs/components';
import StarIcon from 'public/star.svg';
import Arrow2Icon from 'public/arrow2.svg';
import OrdersIcon from 'public/orders.svg';
import MessagesIcon from 'public/messages.svg';
import UserIcon from 'public/user.svg';
import SpeakerIcon from 'public/speaker.svg';
import Orders from '@/pages/home/orders';
import User from '@/pages/home/user';

export default function Home() {
  const navigate = useNavigate();

  return (
    <View className="flex flex-col h-full">
      <View className="flex-1 w-full">
        <Routes>
          <Route path="/*" element={<Orders/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
      </View>
      <View className="sticky bottom-0 flex flex-col w-full">
        <View id="login-prompt" className="flex items-center px-5 py-3 h-11" style={{backgroundColor: '#4572FB'}} onClick={() => navigate('/login')}>
          <Image className="h-3/4" mode="heightFix" src={SpeakerIcon}/>
          <View className="flex-1 ml-1.5 text-white">老师/中介快速登录，获取完整服务</View>
          <Image className="h-2/3" mode="heightFix" src={Arrow2Icon}/>
        </View>
        <View id="menu" className="flex justify-between bg-white px-11 pt-4 pb-8">
          <View className="flex flex-col items-center" onClick={() => navigate('/')}>
            <Image className="w-5/6" mode="widthFix" src={OrdersIcon}></Image>
            <View className="mt-2 text-lg font-semibold" style={{color: '#4572FB'}}>课源</View>
          </View>
          <View className="flex flex-col items-center">
            <Image className="w-5/6" mode="widthFix" src={StarIcon}></Image>
            <View className="mt-2 text-lg font-semibold" style={{color: '#99A1B6'}}>管理</View>
          </View>
          <View className="flex flex-col items-center">
            <Image className="w-5/6" mode="widthFix" src={MessagesIcon}></Image>
            <View className="mt-2 text-lg font-semibold" style={{color: '#99A1B6'}}>消息</View>
          </View>
          <View className="flex flex-col items-center" onClick={() => navigate('/user')}>
            <Image className="w-5/6" mode="widthFix" src={UserIcon}></Image>
            <View className="mt-2 text-lg font-semibold" style={{color: '#99A1B6'}}>我的</View>
          </View>
        </View>
      </View>
    </View>
  )
}
