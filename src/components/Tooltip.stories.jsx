// src/components/Tooltip.stories.jsx

/* ### 일괄 제안 소스로 작성 중 */

import React from 'react';
import Tooltip from './Tooltip';
import Button from './Button';
import Badge from './Badge';

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
    content: '마우스를 올리는 동안 툴팁 정보가 나옵니다.',
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
                <Button label="왼쪽 (긴 내용)"></Button>
            </Tooltip>

            {/* SampleCon[1] 사용 */}
            <Tooltip content={SampleCon[1]} position="top">
                <Button label="위쪽 (스타일 내용)"></Button>
            </Tooltip>
        </div>

        <div style={{ display: 'flex', gap: '100px' }}>
            <Tooltip content="단순 텍스트도 가능합니다." position="bottom">
                <Button label="아래쪽 (일반)"></Button>
            </Tooltip>
            <Tooltip content={SampleCon[0]} position="right">
                <Button label="오른쪽 (긴 내용)"></Button>
            </Tooltip>
        </div>
    </div>
  ),
};

export const BadgeStyle = {
  render: () => (
    <div style={{ display: 'inline-flex', flexDirection: 'row', gap: '20px 50px', padding: '150px' }}>
        {/* SampleCon[0] 사용 */}
        <Tooltip content={SampleCon[0]} position="left">
            <Badge badgeLabel="기본뱃지 / 왼쪽 (긴 내용)" type=""></Badge>
        </Tooltip>

        {/* SampleCon[1] 사용 */}
        <Tooltip content={SampleCon[1]} position="top">
            <Badge badgeLabel="기본뱃지 / 왼쪽 (긴 내용)" type=""></Badge>
        </Tooltip>

        <Tooltip content="단순 텍스트도 가능합니다." position="bottom">
            <Badge badgeLabel="에러뱃지 / 아래쪽 (일반))" type="type_error"></Badge>
        </Tooltip>

        <Tooltip content={SampleCon[0]} position="right">
            <Badge badgeLabel="안내뱃지 /오른쪽 (긴 내용)" type="type_info"></Badge>
        </Tooltip>
    </div>
  ),
};
