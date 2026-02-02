// src/components/Textarea.stories.jsx
import Textarea from './Textarea';

export default {
    title : 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],   
    argTypes: {
        // Storybook 컨트롤러 설정
        label: { control: 'text' },        
        error: { control: 'boolean' }, // 에러 여부
        errorMsg: { control: 'text' }, // 에러 메시지를 텍스트로 입력해볼 수 있게 함
        variant: {
            control: 'select',
            options: ['Disabled', 'Error'],
            description: '상태'
        }, 
        placeholder: { control: 'text' },
    },    
};

export const Default = {
    args: {
        label: 'Message', 
        error:false,
        errorMsg:"",        
        props : {
            name:'textarea-message',
            id:'t-message',
            cols:0,
            row:0,
            maxLength:100,
            disabled : false,
            required : false,
            placeholder:"원하는 내용을 입력해 주세요",
        },
    },
}

export const Error = {
    args: {
        label: 'Message', 
        error:true,
        errorMsg:"문의 내용은 필수 입력 항목입니다.",        
        props : {
            name:'textarea-message',
            id:'t-message2',
            cols:0,
            row:0,
            value:"",
            maxLength:100,
            disabled : false,
            required : true,
            placeholder:"문의하실 내용을 상세히 적어주세요.",
        },        
    }
}

export const Disabled = {
    args : {
        label: 'Message', 
        error:false,
        errorMsg:"",        
        props : {
            name:'textarea-message',
            id:'t-message3',
            cols:0,
            row:0,
            value:"이 내용은 관리자만 수정할 수 있습니다.\n수정이 불가능합니다.",
            maxLength:100,
            disabled : true,
            required : false,
        },
    }
}