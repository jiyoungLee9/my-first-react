// src/components/Tooltip.stories.jsx

/* ### 일괄 제안 소스로 작성 중 */

import React from 'react';
import Tooltip from './Tooltip';
import Button from './MyButton';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
};

const SampleCon = [
    <div key="msg1">
        <p style={{ margin: 0 }}>
            <strong>샘플 첫 번째 내용입니다.</strong><br />
            툴팁 내용이 매우 길어지는 것을 써봅시다.<br />
            길어지는 내용의 <strong>HTML 태그</strong>가 들어옵니다.
        </p>
    </div>,
    <div key="msg2">
        <p style={{ margin: 0 }}>
            <em>샘플 두 번째 내용입니다.</em><br />
            CSS 스타일이 적용된 툴팁입니다.<br />
            <span style={{ color: '#ffcc00' }}>★ 별점도 넣을 수 있겠네요.</span>
        </p>
    </div>,
];

export const Default = {
  args: {
    content: '정보를 더 확인하려면 클릭하세요.',
    children: <Button label="마우스를 올려보세요"></Button>,
    position: 'top',
  },
};


export const Positions = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', padding: '150px' }}>
        <div style={{ display: 'flex', gap: '100px' }}>
            {/* SampleCon[0] 사용 */}
            <Tooltip content={SampleCon[0]} position="left">
                <button type="button">왼쪽 (긴 내용)</button>
            </Tooltip>

            {/* SampleCon[1] 사용 */}
            <Tooltip content={SampleCon[1]} position="top">
                <button type="button">위쪽 (스타일 내용)</button>
            </Tooltip>
        </div>

        <div style={{ display: 'flex', gap: '100px' }}>
            <Tooltip content="단순 텍스트도 가능합니다." position="bottom">
                <button type="button">아래쪽 (일반)</button>
            </Tooltip>

            <Tooltip content={SampleCon[0]} position="right">
                <button type="button">오른쪽 (긴 내용)</button>
            </Tooltip>
        </div>
    </div>
  ),
};
