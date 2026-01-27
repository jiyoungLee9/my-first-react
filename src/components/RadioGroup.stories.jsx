// src/components/RadioGroup.stories.jsx
import RadioGroup from './RadioGroup';

export default {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],   
};

// 샘플 데이터 (Dummy Data)
const sampleItems = [
    { label: '서울 Special City', value: 'seoul' },
    { label: '경기도 (Gyeonggi)', value: 'gyeonggi' },
    { label: '부산 (Busan)', value: 'busan' },
    { label: '제주 (Jeju)', value: 'jeju' },  
];

export const Default = {
    args: {
        name: 'default RadioGroup',
        itemList: sampleItems,
        defaultValue: 'seoul',
        isType:"",
    },
};

// 가로형
export const TypeVertical = {
  args: {
    name: 'vertical RadioGroup',
    itemList: [
        { label: '남성', value:'M'},
        { label: '여성', value:'F'},
    ],
    isType:"vertical",
    defaultValue: 'M',
  },
};