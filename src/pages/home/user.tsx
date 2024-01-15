import {Image, View} from '@tarojs/components';
import ArrowIcon from '../../../public/arrow1.svg';
import FemaleIcon from '../../../public/female.svg';
import ResumeIcon from '../../../public/resume.svg';
import InfoIcon from '../../../public/info.svg';


export default function User()
{
  return (
    <View className="flex flex-col items-center gap-3 w-full h-full px-6" style={{backgroundColor: '#F8F8F8'}}>
      <View className="flex items-center justify-center gap-4 w-full p-4 rounded-xl bg-white">
        <Image className="w-14 rounded-2xl" mode="widthFix" src="https://api.tutorhub.top/files/avatar.jpg"/>
        <View className="flex flex-col flex-1 gap-3">
          <View className="flex items-center gap-2.5">
            <View className="text-xl font-semibold text-black">田伟</View>
            <View className="flex items-center justify-center gap-1">
              <Image className="w-2.5" mode="widthFix" src={FemaleIcon}></Image>
              <View style={{color: '#99A1B6'}}>20岁</View>
            </View>
            <View className="flex items-center justify-center px-2 py-0.5 rounded-md text-xs" style={{color: '#FF6F41', backgroundColor: 'rgba(234,100,57,0.15)'}}>大学生</View>
          </View>
          <View style={{color: '#858A99'}}>广州大学/本科/艺术设计</View>
        </View>
      </View>
      <View className="flex items-center gap-3.5 w-full p-4 bg-white">
        <View className="flex items-center justify-center gap-2">
          <Image className="w-3.5" mode="widthFix" src={ResumeIcon}/>
          <View className="text-base">我的简历</View>
        </View>
        <View className="flex flex-1 items-center">
          <View className="flex items-center justify-center px-2 py-0.5 rounded-md text-xs" style={{color: '#EE0A24', backgroundColor: '#FFC6CC'}}>待完善</View>
        </View>
      </View>
      <View className="flex flex-col gap-2 w-full">
        <View className="text-lg font-semibold" style={{color: '#323843'}}>接单帮助</View>
        <View className="flex items-center gap-3.5 w-full p-4 bg-white">
          <View className="flex items-center justify-center gap-2">
            <Image className="w-3.5" mode="widthFix" src={ResumeIcon}/>
            <View className="text-base">接单指南</View>
          </View>
          <View className="flex flex-1 items-center justify-end">
            <Image className="w-2.5" mode="widthFix" src={ArrowIcon}/>
          </View>
        </View>
        <View className="flex items-center gap-3.5 w-full pl-3 p-4 bg-white">
          <View className="flex items-center justify-center gap-2">
            <Image className="w-5" mode="widthFix" src={InfoIcon}/>
            <View className="text-base">用户须知</View>
          </View>
          <View className="flex flex-1 items-center justify-end">
            <Image className="w-2.5" mode="widthFix" src={ArrowIcon}/>
          </View>
        </View>
        <View className="flex items-center gap-3.5 w-full p-4 bg-white">
          <View className="flex items-center justify-center gap-2">
            <Image className="w-3.5" mode="widthFix" src={ResumeIcon}/>
            <View className="text-base">举报中心</View>
          </View>
          <View className="flex flex-1 items-center justify-end">
            <Image className="w-2.5" mode="widthFix" src={ArrowIcon}/>
          </View>
        </View>
      </View>
      <View className="flex flex-col gap-2 w-full">
        <View className="text-lg font-semibold" style={{color: '#323843'}}>接单帮助</View>
        <View className="flex items-center gap-3.5 w-full p-4 bg-white">
          <View className="flex items-center justify-center gap-2">
            <Image className="w-3.5" mode="widthFix" src={ResumeIcon}/>
            <View className="text-base">切换为中介</View>
          </View>
          <View className="flex flex-1 items-center justify-end">
            <Image className="w-2.5" mode="widthFix" src={ArrowIcon}/>
          </View>
        </View>
        <View className="flex items-center gap-3.5 w-full p-4 bg-white">
          <View className="flex items-center justify-center gap-2">
            <Image className="w-3.5" mode="widthFix" src={ResumeIcon}/>
            <View className="text-base">账号设置</View>
          </View>
          <View className="flex flex-1 items-center justify-end">
            <Image className="w-2.5" mode="widthFix" src={ArrowIcon}/>
          </View>
        </View>
      </View>
    </View>
  )
}
