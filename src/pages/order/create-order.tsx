import {View, Text, Textarea} from '@tarojs/components'
import {Cascader, Field} from '@antmjs/vantui'
import react from 'react'
import DataCell from '@/pages/order/data-cell';
import ArrowIcon from '../../../public/arrow3.png'
import LocationIcon from '../../../public/location.png'
import './create-order.scss'

export default function CreateOrder() {
  const [is_grade_popup_visible, setIsGradePopupVisible] = react.useState(false);
  const [is_subjects_popup_visible, setIsSubjectsPopupVisible] = react.useState(false);
  const [is_frequency_popup_visible, setIsFrequencyPopupVisible] = react.useState(false);
  const [is_starting_at_popup_visible, setIsStartingAtPopupVisible] = react.useState(false);
  // const [is_pay_rate_popup_visible, setIsPayRatePopupVisible] = react.useState(false);
  const [is_mode_popup_visible, setIsModePopupVisible] = react.useState(false);

  return (
    <View className="flex flex-col pt-4 pb-16" style="background-color: #F8F8F8">
      <View className="m-4">
        <Text className="text-xl font-bold m-2">委托人信息</Text>
        <Field className="font-semibold rounded-lg mt-2 shadow-lg" label="委托人姓名" placeholder="请输入委托人姓名"/>
      </View>
      <View className="m-4">
        <Text className="text-xl font-bold m-2">学生情况信息</Text>
        <View className="flex flex-col bg-white rounded-lg p-4 mt-2 shadow-lg">
          <DataCell
            required label="学生年级" placeholder="选择学生年级" addon={ArrowIcon}
            onClick={() => setIsGradePopupVisible(true)}
          />
          <Cascader className="h-2/5" visible={is_grade_popup_visible} onClose={() => setIsGradePopupVisible(false)}>
            内容
          </Cascader>
          <DataCell
            required label="辅导科目" placeholder="选择需要辅导的科目" addon={ArrowIcon}
            onClick={() => setIsSubjectsPopupVisible(true)}
          />
          <Cascader className="h-2/5" visible={is_subjects_popup_visible} onClose={() => setIsSubjectsPopupVisible(false)}>
            内容
          </Cascader>
          <DataCell
            required label="课程频次" placeholder="待协商" addon={ArrowIcon}
            onClick={() => setIsFrequencyPopupVisible(true)}
          />
          <Cascader className="h-2/5" visible={is_frequency_popup_visible} onClose={() => setIsFrequencyPopupVisible(false)}>
            内容
          </Cascader>
          <DataCell
            label="开课时间" placeholder="随时开始" addon={ArrowIcon}
            onClick={() => setIsStartingAtPopupVisible(true)}
          />
          <Cascader className="h-2/5" visible={is_starting_at_popup_visible} onClose={() => setIsStartingAtPopupVisible(false)}>
            内容
          </Cascader>
          <DataCell required label="课程薪酬" placeholder="0" addon="元/小时"/>
          <DataCell
            required label="课程形式" placeholder="一对一" addon={ArrowIcon}
            onClick={() => setIsModePopupVisible(true)}
          />
          <Cascader className="h-2/5" visible={is_mode_popup_visible} onClose={() => setIsModePopupVisible(false)}>
            内容
          </Cascader>
          <DataCell required label="课程地址" placeholder="授课点的具体位置" addon={LocationIcon}/>
        </View>
      </View>
      <View className="m-4">
        <Text className="text-xl font-bold m-2">对家教的要求</Text>
        <View className="flex flex-col bg-white rounded-lg p-4 mt-2 shadow-lg">
          <DataCell
            label="学历" placeholder="本科" addon={ArrowIcon}
            onClick={() => setIsGradePopupVisible(true)}
          />
          <Cascader className="h-2/5" visible={is_grade_popup_visible} onClose={() => setIsGradePopupVisible(false)}>
            内容
          </Cascader>

          <DataCell
            required label="性别" placeholder="无要求" addon={ArrowIcon}
            onClick={() => setIsSubjectsPopupVisible(true)}
          />
          <Cascader className="h-2/5" visible={is_subjects_popup_visible} onClose={() => setIsSubjectsPopupVisible(false)}>
            内容
          </Cascader>

          <DataCell
            required label="经验" placeholder="无要求" addon={ArrowIcon}
            onClick={() => setIsFrequencyPopupVisible(true)}
          />
          <Cascader className="h-2/5" visible={is_frequency_popup_visible} onClose={() => setIsFrequencyPopupVisible(false)}>
            内容
          </Cascader>

          <DataCell
            label="职业" placeholder="兼职教师" addon={ArrowIcon}
            onClick={() => setIsStartingAtPopupVisible(true)}
          />
          <Cascader className="h-2/5" visible={is_starting_at_popup_visible} onClose={() => setIsStartingAtPopupVisible(false)}>
            内容
          </Cascader>

          <View className="my-2 flex items-center">
            <View className="font-bold">其他要求</View>
            <Textarea className="flex-1 text-xs rounded-lg ml-4 p-4 h-10" style="background-color: #F5F5F5" placeholder="暂无"/>
          </View>
        </View>
      </View>
    </View>
  )
}
