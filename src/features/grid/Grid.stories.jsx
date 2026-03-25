// /src/features/grid/Grid.stories.jsx

import Grid from './Grid';

export default {
    title: 'Features/Grid/FullGridSystem',
    component: Grid,
};

const columns = [
    { key: 'id', label: 'No', width: '60px', type: 'number' },
    { key: 'title', label: '프로젝트 명', width: 'auto' },
    { key: 'status', label: '상태', width: '100px' },
    { key: 'date', label: '등록일', width: '120px' },
];

// 테스트를 위한 대량의 더미 데이터 생성
const dummyData = Array.from({ length: 65 }, (_, i) => ({
    id: i + 1,
    title: `UI 컴포넌트 시스템 구축 프로젝트 ${i + 1}`,
    status: i % 2 === 0 ? '진행중' : '완료',
    date: '2026-03-22',
}));

export const Default = {
    args: {
        columns: columns,
        initialData: dummyData,
    },
};