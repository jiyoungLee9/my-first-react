// src/features/grid/PaginationButton.stories.jsx
import PaginationButton from './PaginationButton';

export default {
    title: 'Features/Grid/PaginationButton',
    component: PaginationButton,
    tags: ['autodocs'],   
    argTypes: {
        itemList : {
            control: 'object',  // JSON 편집기로 표시
            description: '리스트 아이템 배열'
        },
        className: { control: 'text' },
    },    
};

// 샘플 데이터 (Dummy Data)
const sampleItems = [
    { label : '처음', value:'first', innerClassName : 'is_first', onClick: () => {} },
    { label : '이전', value:'prev', innerClassName : 'is_prev', onClick: () => {} },
    { label : '1', value:'1', onClick: () => {} },
    { label : '2', value:'2', onClick: () => {} },
    { label : '3', value:'3', onClick: () => {} },
    { label : '4', value:'4', onClick: () => {} },
    { label : '5', value:'5', onClick: () => {} },
    { label : '다음', value:'next', innerClassName : 'is_next', onClick: () => {} },
    { label : '마지막', value:'last', innerClassName : 'is_last', onClick: () => {} },
];

export const Default = {
    args: {
        itemList: sampleItems,  
    },
};
