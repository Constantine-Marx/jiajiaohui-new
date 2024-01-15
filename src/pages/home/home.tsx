import {Image, View} from '@tarojs/components';
import {useNavigate} from 'react-router-dom';
import LocationIcon from 'public/location.svg';
import StarIcon from 'public/star.svg';
import Arrow1Icon from 'public/arrow1.svg';
import Arrow2Icon from 'public/arrow2.svg';
import Arrow4Icon from 'public/arrow4.svg';
import Arrow5Icon from 'public/arrow5.svg';
import SearchIcon from 'public/search.svg';
import OrdersIcon from 'public/orders.svg';
import MessagesIcon from 'public/messages.svg';
import UserIcon from 'public/user.svg';
import SpeakerIcon from 'public/speaker.svg';
import Selector1Icon from 'public/selector1.svg';
import Selector2Icon from 'public/selector2.svg';
import {useState} from 'react';

export default function Home()
{
  const navigate = useNavigate();

  const [is_cascader_visible, setIsCascaderVisible] = useState(false);

  const child =  <View className="flex-col w-full bg-white">
    <View className="flex items-center gap-2 px-3.5 py-2.5">
      <Image className="w-4" mode="widthFix" src={Selector1Icon}/>
      <View className="flex-1">一年级</View>
      <View style={{color: '#858A99'}}>78</View>
    </View>
    <View className="flex items-center gap-2 px-3.5 py-2.5">
      <Image className="w-4" mode="widthFix" src={Selector2Icon}/>
      <View className="flex-1">二年级</View>
      <View style={{color: '#858A99'}}>57</View>
    </View>
  </View>

  return (
    <View className="flex flex-col h-full" style={{backgroundColor: '#F8F8F8'}}>
      <View className="flex flex-1 flex-col items-center box-border w-full px-6 py-3" style={{backgroundColor: '#F8F8F8'}}>
        <View id="search-bar" className="flex gap-3 w-full">
          <View className="flex items-center font-semibold" style={{color: '#4572FB'}}>
            广州
            <Image className="h-1/6 ml-0.5" mode="heightFix"  src={Arrow4Icon}/>
          </View>
          <View className="flex items-center flex-1 px-4 py-2 rounded-3xl text-lg" style={{color: '#CCCCCC', backgroundColor: '#EEEEF0'}}>
            <Image className="h-4/5 mr-0.5" mode="heightFix"  src={SearchIcon}/>
            单号/中介/订单信息搜索
          </View>
        </View>
        <View className="flex items-center justify-between gap-3 z-40 w-full px-5 py-2.5 mt-2 rounded-xl"
              style={{backgroundColor: '#4572FB'}} onClick={() => setIsCascaderVisible(true)}
        >
          <View className="flex items-center justify-center gap-2 h-fit">
            <View className="text-white font-medium">地点</View>
            <Image className="w-2" mode="widthFix"  src={Arrow5Icon}/>
          </View>
          <View className="flex items-center justify-center gap-2 h-fit">
            <View className="text-white font-medium">薪酬</View>
            <Image className="w-2" mode="widthFix"  src={Arrow5Icon}/>
          </View>
          <View className="flex items-center justify-center gap-2 h-fit">
            <View className="text-white font-medium">年段</View>
            <Image className="w-2" mode="widthFix"  src={Arrow5Icon}/>
          </View>
          <View className="flex items-center justify-center gap-2 h-fit">
            <View className="text-white font-medium">学科</View>
            <Image className="w-2" mode="widthFix"  src={Arrow5Icon}/>
          </View>
        </View>
        <View id="cascader" className="relative w-full">
          <View className="absolute overflow-hidden z-40 w-full rounded-xl transition-all duration-200"
                style={{
                  clipPath: is_cascader_visible ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                  backgroundColor: '#EEEEF0'
                }}
          >
            {child}
          </View>
          <View className={`fixed top-0 left-0 z-30 w-full ${is_cascader_visible ? 'h-full' : 'h-0' } bg-black transition-opacity duration-200`} style={{opacity: is_cascader_visible ? 0.7 : 0}} onClick={() => setIsCascaderVisible(false)}></View>
        </View>
        <View id="order-cards" className="flex flex-col gap-2 w-full mt-2">
          <View id="order-card" className="flex flex-col gap-4 box-border w-full px-4 pb-4 mt-2 bg-white rounded-lg shadow-sm">
            <View id="card-upper" className="flex gap-2">
              <View className="flex items-center justify-center w-fit px-3 py-1.5 border-x-3 border-b-3 rounded-b-md font-semibold"
                    style={{backgroundColor: '#EAFFF0', color: '#30D8B9', borderColor: '#61E8D8'}}
              >
                物理
              </View>
              <View className="flex items-center justify-center w-fit px-3 py-1.5 border-x-3 border-b-3 rounded-b-md font-semibold"
                    style={{backgroundColor: '#E6EBFD', color: '#4572FB', borderColor: '#6190E8'}}
              >
                数学
              </View>
              <View className="flex flex-1 items-end justify-end text-xs pb-1" style={{color: '#99A1B6'}}>
                发布于1天前
              </View>
            </View>
            <View id="card-mid" className="box-border flex flex-1 justify-between">
              <View className="flex flex-col w-2/5">
                <View className="text-xl font-semibold" style={{color: '#52566A'}}>初中 二年级</View>
                <View className="flex items-center">
                  <View className="text-lg font-semibold" style={{color: '#FB7145'}}>¥</View>
                  <View className="text-2xl font-semibold" style={{color: '#FB7145'}}>120</View>
                  <View style={{color: '#52566A'}}>/小时</View>
                </View>
              </View>
              <View className="flex flex-col gap-1.5 w-1/2 px-2 py-3 rounded-lg" style={{backgroundColor: '#F9FAFE'}}>
                <View className="flex">
                  <View className="flex-1" style={{color: '#99A1B6'}}>辅导日期</View>
                  <View style={{color: '#52566A'}}>3次/周</View>
                </View>
                <View className="flex">
                  <View className="flex-1" style={{color: '#99A1B6'}}>辅导时长</View>
                  <View style={{color: '#52566A'}}>2小时</View>
                </View>
                <View className="flex">
                  <View className="flex-1" style={{color: '#99A1B6'}}>信息费</View>
                  <View style={{color: '#52566A'}}>¥800</View>
                </View>
              </View>
            </View>
            <View id="card-bottom" className="flex">
              <View className="flex items-center w-fit">
                <Image className="h-3/5" mode="heightFix" src={LocationIcon}/>
                <View className="ml-1 mr-2 text-base">北京市朝阳区京旺家园</View>
                <Image className="h-1/2" mode="heightFix" src={Arrow1Icon}/>
              </View>
              <View className="flex flex-1 items-center justify-end">
                <Image className="h-4/5" mode="heightFix" src={StarIcon}/>
              </View>
            </View>
          </View>
          <View id="order-card" className="flex flex-col gap-4 box-border w-full px-4 pb-4 mt-2 bg-white rounded-lg shadow-sm">
            <View id="card-upper" className="flex gap-2">
              <View className="flex items-center justify-center w-fit px-3 py-1.5 border-x-3 border-b-3 rounded-b-md font-semibold"
                    style={{backgroundColor: '#EAFFF0', color: '#30D8B9', borderColor: '#61E8D8'}}
              >
                物理
              </View>
              <View className="flex items-center justify-center w-fit px-3 py-1.5 border-x-3 border-b-3 rounded-b-md font-semibold"
                    style={{backgroundColor: '#E6EBFD', color: '#4572FB', borderColor: '#6190E8'}}
              >
                数学
              </View>
              <View className="flex flex-1 items-end justify-end text-xs pb-1" style={{color: '#99A1B6'}}>
                发布于1天前
              </View>
            </View>
            <View id="card-mid" className="box-border flex flex-1 justify-between">
              <View className="flex flex-col w-2/5">
                <View className="text-xl font-semibold" style={{color: '#52566A'}}>初中 二年级</View>
                <View className="flex items-center">
                  <View className="text-lg font-semibold" style={{color: '#FB7145'}}>¥</View>
                  <View className="text-2xl font-semibold" style={{color: '#FB7145'}}>120</View>
                  <View style={{color: '#52566A'}}>/小时</View>
                </View>
              </View>
              <View className="flex flex-col gap-1.5 w-1/2 px-2 py-3 rounded-lg" style={{backgroundColor: '#F9FAFE'}}>
                <View className="flex">
                  <View className="flex-1" style={{color: '#99A1B6'}}>辅导日期</View>
                  <View style={{color: '#52566A'}}>3次/周</View>
                </View>
                <View className="flex">
                  <View className="flex-1" style={{color: '#99A1B6'}}>辅导时长</View>
                  <View style={{color: '#52566A'}}>2小时</View>
                </View>
                <View className="flex">
                  <View className="flex-1" style={{color: '#99A1B6'}}>信息费</View>
                  <View style={{color: '#52566A'}}>¥800</View>
                </View>
              </View>
            </View>
            <View id="card-bottom" className="flex">
              <View className="flex items-center w-fit">
                <Image className="h-3/5" mode="heightFix" src={LocationIcon}/>
                <View className="ml-1 mr-2 text-base">北京市朝阳区京旺家园</View>
                <Image className="h-1/2" mode="heightFix" src={Arrow1Icon}/>
              </View>
              <View className="flex flex-1 items-center justify-end">
                <Image className="h-4/5" mode="heightFix" src={StarIcon}/>
              </View>
            </View>
          </View>
          <View id="order-card" className="flex flex-col gap-4 box-border w-full px-4 pb-4 mt-2 bg-white rounded-lg shadow-sm">
            <View id="card-upper" className="flex gap-2">
              <View className="flex items-center justify-center w-fit px-3 py-1.5 border-x-3 border-b-3 rounded-b-md font-semibold"
                    style={{backgroundColor: '#EAFFF0', color: '#30D8B9', borderColor: '#61E8D8'}}
              >
                物理
              </View>
              <View className="flex items-center justify-center w-fit px-3 py-1.5 border-x-3 border-b-3 rounded-b-md font-semibold"
                    style={{backgroundColor: '#E6EBFD', color: '#4572FB', borderColor: '#6190E8'}}
              >
                数学
              </View>
              <View className="flex flex-1 items-end justify-end text-xs pb-1" style={{color: '#99A1B6'}}>
                发布于1天前
              </View>
            </View>
            <View id="card-mid" className="box-border flex flex-1 justify-between">
              <View className="flex flex-col w-2/5">
                <View className="text-xl font-semibold" style={{color: '#52566A'}}>初中 二年级</View>
                <View className="flex items-center">
                  <View className="text-lg font-semibold" style={{color: '#FB7145'}}>¥</View>
                  <View className="text-2xl font-semibold" style={{color: '#FB7145'}}>120</View>
                  <View style={{color: '#52566A'}}>/小时</View>
                </View>
              </View>
              <View className="flex flex-col gap-1.5 w-1/2 px-2 py-3 rounded-lg" style={{backgroundColor: '#F9FAFE'}}>
                <View className="flex">
                  <View className="flex-1" style={{color: '#99A1B6'}}>辅导日期</View>
                  <View style={{color: '#52566A'}}>3次/周</View>
                </View>
                <View className="flex">
                  <View className="flex-1" style={{color: '#99A1B6'}}>辅导时长</View>
                  <View style={{color: '#52566A'}}>2小时</View>
                </View>
                <View className="flex">
                  <View className="flex-1" style={{color: '#99A1B6'}}>信息费</View>
                  <View style={{color: '#52566A'}}>¥800</View>
                </View>
              </View>
            </View>
            <View id="card-bottom" className="flex">
              <View className="flex items-center w-fit">
                <Image className="h-3/5" mode="heightFix" src={LocationIcon}/>
                <View className="ml-1 mr-2 text-base">北京市朝阳区京旺家园</View>
                <Image className="h-1/2" mode="heightFix" src={Arrow1Icon}/>
              </View>
              <View className="flex flex-1 items-center justify-end">
                <Image className="h-4/5" mode="heightFix" src={StarIcon}/>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="sticky bottom-0 flex flex-col w-full">
        <View id="login-prompt" className="flex items-center px-5 py-3 h-11" style={{backgroundColor: '#4572FB'}} onClick={() => navigate('/login')}>
          <Image className="h-3/4" mode="heightFix" src={SpeakerIcon}/>
          <View className="flex-1 ml-1.5 text-white">老师/中介快速登录，获取完整服务</View>
          <Image className="h-2/3" mode="heightFix" src={Arrow2Icon}/>
        </View>
        <View id="menu" className="flex justify-between bg-white px-11 pt-4 pb-8">
          <View className="flex flex-col items-center">
            <Image className="w-5/6" mode="widthFix" src={OrdersIcon}></Image>
            <View className="mt-2 text-lg font-semibold" style={{color: '#4572FB'}}>课源</View>
          </View>
          <View className="flex flex-col items-center" onClick={() => navigate('/create-order')}>
            <Image className="w-5/6" mode="widthFix" src={StarIcon}></Image>
            <View className="mt-2 text-lg font-semibold" style={{color: '#99A1B6'}}>管理</View>
          </View>
          <View className="flex flex-col items-center">
            <Image className="w-5/6" mode="widthFix" src={MessagesIcon}></Image>
            <View className="mt-2 text-lg font-semibold" style={{color: '#99A1B6'}}>消息</View>
          </View>
          <View className="flex flex-col items-center">
            <Image className="w-5/6" mode="widthFix" src={UserIcon}></Image>
            <View className="mt-2 text-lg font-semibold" style={{color: '#99A1B6'}}>我的</View>
          </View>
        </View>
      </View>
    </View>
  )
}
