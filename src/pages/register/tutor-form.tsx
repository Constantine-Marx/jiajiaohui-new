import {Button, Image, View} from '@tarojs/components';
import ArrowIcon from 'public/arrow3.png'
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

export default function TutorForm()
{
  const navigate = useNavigate();
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');

  return (
    <View className="flex flex-col h-full w-full" style={{backgroundColor: '#F8F8F8'}}>
      <View className="flex flex-1 flex-col w-full px-6 py-10" style={{backgroundColor: '#F8F8F8'}}>
        <View className="font-semibold text-xl mb-2">填写基础信息，匹配合适课源</View>
        <View style={{color: '#858A99'}}>完成信息填写，系统精准推送合适课源</View>
        <View className="flex flex-col bg-white rounded-lg px-4 py-4 mt-3">
          <View className="flex items-center justify-between py-2">
            <View className="mr-16">性别</View>
            <View
              className="flex h-8 items-center justify-center rounded"
              style={{ width: '180rpx', backgroundColor: gender === 'male' ? '#4572FB' : '#EEEEF0' }}
              onClick={() => setGender('male')}
            >
              男
            </View>
            <View
              className="flex h-8 items-center justify-center rounded"
              style={{ width: '180rpx', backgroundColor: gender === 'female' ? '#4572FB' : '#EEEEF0' }}
              onClick={() => setGender('female')}
            >
              女
            </View>
          </View>
          <View className="flex items-center justify-between py-2">
            <View className="mr-16">职业</View>
            <View
              className="flex h-8 items-center justify-center rounded"
              style={{ width: '180rpx', backgroundColor: job === 'partTime' ? '#4572FB' : '#EEEEF0' }}
              onClick={() => setJob('partTime')}
            >
              兼职老师
            </View>
            <View
              className="flex h-8 items-center justify-center rounded"
              style={{ width: '180rpx', backgroundColor: job === 'fullTime' ? '#4572FB' : '#EEEEF0' }}
              onClick={() => setJob('fullTime')}
            >
              全职老师
            </View>
          </View>
          <View className="flex items-center py-2">
            <View className="flex-1">教学意向</View>
            <View className="flex items-center m-2" style={{color: '#858A99'}}>请选择</View>
            <Image className="w-2 h-3" src={ArrowIcon} mode="aspectFit"></Image>
          </View>
          <View className="flex items-center py-2">
            <View className="flex-1">现居地</View>
            <View className="flex items-center m-2" style={{color: '#858A99'}}>请选择</View>
            <Image className="w-2 h-3" src={ArrowIcon} mode="aspectFit"></Image>
          </View>
        </View>
      </View>
      <View className="flex justify-center bg-white pt-3 pb-10 px-6" style={{height: '15%'}}>
        <Button
          className="flex items-center justify-center h-full w-full text-white"
          style={{backgroundColor: '#4572FB'}}
          onClick={() => navigate('/')}
        >完成</Button>
      </View>
    </View>
  )
}
