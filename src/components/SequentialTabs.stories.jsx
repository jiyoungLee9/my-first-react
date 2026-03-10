// src/components/SequentialTabs.stories.jsx

/* ### 일괄 제안 소스로 작성 중 */

import React from 'react';
import SequentialTabs from './SequentialTabs';

export default {
  title: 'Components/SequentialTabs',
  tags: ['autodocs'],
  component: SequentialTabs,
};

const items = [
  { label: '요약', content: <p>이 구조는 버튼 바로 뒤에 해당 내용이 마크업됩니다.</p> },
  { label: '장점', content: <p>스크린 리더 사용자가 탭 선택 후 바로 내용을 읽기 좋습니다.</p> },
  { label: '활용', content: <p>짧은 텍스트나 공지사항 요약 등에 적합합니다.</p> },
];

export const Default = {
  args: {
    items: items,
  },
};