// src/components/TextField.stories.jsx
import TextField from './TextField';


export default {
    title : 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],   
    argTypes: {
        // Storybook 컨트롤러 설정
        label: { control: 'text' },        
        error: { control: 'boolean' }, // 에러 여부
        errorMsg: { control: 'text' }, // 에러 메시지를 텍스트로 입력해볼 수 있게 함
        variant: {
            control: 'select',
            options: ['Disabled', 'Error', 'Readonly'],
            description: 'input 상태스타일'
        }, 
        placeholder: { control: 'text' },
    },    
};

// Defalut
export const Default = {
    args: {
        label: 'Email Address', 
        error:false,
        errorMsg:"",        
        props : {
            name:'inp-email',
            type:'email',
            id:'inp-email',
            disabled : false,
            required : false,
            readonly : false,
            placeholder:"이메일을 입력해 주세요",
            onChange:"void('0')",
        },

    },
};

// Error
export const Error = {
    args: {
        label: 'Email Address', 
        error:true,
        errorMsg:"잘못된 이메일 주소 입니다.",        
        props : {
            name:'inp-email2',
            type:'email',
            id:'inp-email2',
            value:'admin@system.local',

            disabled : false,
            required : false,
            readonly : false,        
            placeholder:"이메일을 입력해 주세요",
            onChange:"void('0')", 
        },
    },
};

//Disabled
export const Disabled = {
    args: {
        label: 'Email Address', 
        error:false,
        errorMsg:"",        
        props : {        
            name:'inp-email3',
            type:'email',
            id:'inp-email3',
            value:'admin@system.local',
            disabled : true,
            required : false,
            readonly : false,        
            placeholder:"이메일을 입력해 주세요",
            onChange:"void('0')",            
        },

    },    
}

//Readonly
export const Readonly = {
    args: {
        label: 'Email Address', 
        error:false,
        errorMsg:"",        
        props : {
            name:'inp-email5',
            type:'email',
            id:'inp-email5',
            value:'형태는disabled와 동일 / data전송여부만 존재함 / admin@system.local',
            disabled : false,
            required : false,
            readonly : true,           
            placeholder:"이메일을 입력해 주세요",
            onChange:"void('0')",
        },
    }    
}

//Required
export const Required = {
    args: {
        label: 'Email Address', 
        error:false,
        errorMsg:"",        
        props : {
            name:'inp-email4',
            type:'email',
            id:'inp-email4',
            value:'admin@system.local',
            disabled : false,
            required : true,
            readonly : false,           
            placeholder:"이메일을 입력해 주세요",
            onChange:"void('0')",
        },
    }    
}

