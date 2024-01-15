import {Image, Input, View} from '@tarojs/components';
import {ReactNode} from 'react';
import ArrowIcon from 'public/arrow3.svg'
import LocationIcon from 'public/location.png'
import './data-cell.scss';

interface InputProps {
  onClick?: (...params: unknown[]) => unknown
  label: string;
  placeholder: string;
  required?: boolean;
  addon: string;
}

export default function DataCell(
  {
    onClick,
    label,
    placeholder,
    required = false,
    addon
  } : InputProps
  ) {

  let content: ReactNode | null;
  const isAddonAnImage = addon === ArrowIcon || addon === LocationIcon;
  if (addon === ArrowIcon)
  {
    content = <Image className="w-2 h-3" src={addon} mode="aspectFit"></Image>
  }
  else if (addon === LocationIcon)
  {
    content = <Image className="w-5 h-5" src={addon} mode="aspectFit"></Image>
  }
  else
  {
    content = <View>{addon}</View>
  }

  return (
    <View onClick={onClick} className="my-2 flex items-center pb-2 border-b border-gray-300">
      <View className="text-red-300 w-2">{required ? '*' : ''}</View>
      <View className="font-bold ">{label}</View>
      {isAddonAnImage && <View className="flex-1 text-zinc-500 ml-4">{placeholder}</View>}
      {!isAddonAnImage && <Input className="flex-1 ml-4" placeholder="0"></Input>}
      {content}
    </View>
  )
}
