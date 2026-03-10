// src/components/Badge.stories.jsx

import React from 'react';
import Badge from './Badge';

export default {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

// 기본 케이스
export const Default = {
    args:{
        badgeLabel:'기본 뱃지',
        type : "", //type 값 없음 기본임
        id : "badge1",
        name : "뱃지테스트 중",
        className:"",
    },
};


export const Types = {
    render: () => (    
    <div>
        {/* .type_error 에러형 사용 */}
        <Badge
            badgeLabel="에러형 뱃지"
            type="type_error"
        >
        </Badge>
        <br />
        <br />
        <br />
        {/* .type_info 안내형 사용 */}
        <Badge
            badgeLabel="안내형 뱃지"
            type="type_info"
        >
        </Badge>
    </div>
  ),
};
