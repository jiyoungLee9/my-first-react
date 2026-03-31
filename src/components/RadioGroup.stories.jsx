// src/components/RadioGroup.stories.jsx
import RadioGroup from './RadioGroup';

export default {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],   
    argTypes: {
        grpName: { control: 'text' },
        itemList : {
            control: 'object',  // JSON 편집기로 표시
            description: '리스트 아이템 배열'
        },
        isVertical : {control : "boolean"},
        className: { control: 'text' },
    },    
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
        grpName: 'default RadioGroup',
        itemList: sampleItems,
        defaultValue: 'busan',
        name:'selectA',
        id:'selectA', 
    },
};

// 가로형
export const TypeVertical = {
  args: {
    grpName: 'vertical RadioGroup',
    itemList: [
        { label: '남성', value:'M'},
        { label: '여성', value:'F'},
    ],
    isVertical:"vertical",
    defaultValue: 'M',
    name:'selectB',
    id:'selectB',        
  },
};