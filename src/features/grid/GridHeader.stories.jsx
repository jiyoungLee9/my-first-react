// src/features/grid/GridHeader.stories.jsx
import GridHeader from './GridHeader';

export default {
    title: 'Features/Grid/GridHeader',
    component: GridHeader,
    tags: ['autodocs'],   
    argTypes: {
        allNum : { control: 'number' },
        className: { control: 'text' },
    },    
};

export const Default = {
    args: {
        allNum: 10,  
    },
};
