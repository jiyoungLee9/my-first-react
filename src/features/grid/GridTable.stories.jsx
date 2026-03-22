// src/features/grid/GridTable.stories.jsx

import GridTable from './GridTable';

export default {
    title: 'Features/Grid/GridTable',
    component: GridTable,
    tags: ['autodocs'],
};

// 1. 컬럼 정의 (실무에서 화면별로 다르게 정의할 부분)
const columnsSample = [
    { key: 'chk', label: '선택', width: '60px', type: 'checkbox' },
    { key: 'id', label: 'ID', width: '80px', type: 'number' },
    { key: 'title', label: '제목', width: 'auto', type: 'text' },
    { key: 'author', label: '작성자', width: '120px', type: 'text' },
    { key: 'date', label: '등록일', width: '150px', type: 'text' },
    { 
        key: 'manage', 
        label: '관리', 
        width: '100px', 
        type: 'button', 
        buttonLabel: '수정',
        onClick: (row) => alert(`${row.id}번 수정 클릭`) 
    },
];

// 2. 더미 데이터
const dataSample = [
    { id: 1, title: '첫 번째 게시물입니다.', author: '관리자', date: '2026-03-20' },
    { id: 2, title: '리액트 그리드 테이블 컴포넌트 연구', author: '홍길동', date: '2026-03-21' },
    { id: 3, title: '디자인 토큰 시스템 적용 가이드', author: '사용자1', date: '2026-03-22' },
];

export const Default = {
    args: {
        columns: columnsSample,
        data: dataSample,
    },
};

export const Empty = {
    args: {
        columns: columnsSample,
        data: [],
    },
};