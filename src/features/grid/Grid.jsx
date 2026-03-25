// /src/features/grid/Grid.jsx

import React, { useState, useMemo } from 'react';
import GridHeader from './GridHeader';
import GridTable from './GridTable';
import PaginationButton from './PaginationButton';
import styles from './Grid.module.scss';

const Grid = ({ initialData, columns }) => {

    // 1. 상태 관리
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10); 

    const totalItems = initialData.length;

    // 2. 테이블 데이터 자르기 (Slice)
    const pagedData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return initialData.slice(startIndex, startIndex + pageSize);
    }, [currentPage, pageSize, initialData]);

    // 3. 이벤트 핸들러: 노출 목록 수 변경
    const handlePageSizeChange = (selectedValue) => {
        setPageSize(Number(selectedValue));
        setCurrentPage(1); // 갯수가 바뀌면 무조건 1페이지로 초기화
    };

    // 4. 이벤트 핸들러: 페이지 버튼 클릭
    const handlePageChange = (pageValue, totalPages) => {
        if (typeof pageValue === 'number') {
            setCurrentPage(pageValue);
        } else {
            // 'first', 'prev', 'next', 'last' 문자열 처리
            switch (pageValue) {
                case 'first': setCurrentPage(1); break;
                case 'prev': setCurrentPage((prev) => Math.max(prev - 1, 1)); break;
                case 'next': setCurrentPage((prev) => Math.min(prev + 1, totalPages)); break;
                case 'last': setCurrentPage(totalPages); break;
                default: break;
            }
        }
    };

    // 5. 페이지네이션 배열 동적 생성 로직 (JSP의 Paging 클래스 역할)
    const calculatedPaginationArray = useMemo(() => {
        const totalPages = Math.ceil(totalItems / pageSize);
        if (totalPages === 0) return []; // 데이터가 없으면 빈 배열 반환

        // 페이지 블록 계산 (5개 단위 기준) (페이지가 5개 이하일 경우 5개 미만으로 노출됨)
        const pageBlockSize = 5;
        const currentBlock = Math.ceil(currentPage / pageBlockSize);
        const startPage = (currentBlock - 1) * pageBlockSize + 1;
        const endPage = Math.min(startPage + pageBlockSize - 1, totalPages);

        const items = [];

        // ① 처음 / 이전 버튼 (1페이지면 비활성화)
        const isFirstPage = currentPage === 1;
        items.push({ label: '처음', value: 'first', innerClassName: 'link_first', disabled: isFirstPage, onClick: () => handlePageChange('first', totalPages) });
        items.push({ label: '이전', value: 'prev', innerClassName: 'link_prev', disabled: isFirstPage, onClick: () => handlePageChange('prev', totalPages) });

        // ② 숫자 버튼 (startPage ~ endPage 루프)
        for (let i = startPage; i <= endPage; i++) {
            items.push({ 
                label: String(i), 
                value: i, 
                isActive: i === currentPage, // 현재 페이지면 활성화
                onClick: () => handlePageChange(i, totalPages) 
            });
        }

        // ③ 다음 / 마지막 버튼 (마지막 페이지면 비활성화)
        const isLastPage = currentPage === totalPages;
        items.push({ label: '다음', value: 'next', innerClassName: 'link_next', disabled: isLastPage, onClick: () => handlePageChange('next', totalPages) });
        items.push({ label: '마지막', value: 'last', innerClassName: 'link_last', disabled: isLastPage, onClick: () => handlePageChange('last', totalPages) });

        return items;
    }, [currentPage, pageSize, totalItems]);

    return (
        <div className={styles.grid_container}>
            {/* 상단 */}
            <GridHeader 
                allNum={totalItems} 
                pageSize={String(pageSize)} //현재 페이지 사이즈
                onPageSizeChange={handlePageSizeChange} //주고받을 페이지 값
            />

            {/* 중단 */}
            <GridTable 
                columns={columns} 
                data={pagedData} 
            />

            {/* 하단: 계산된 배열을 주입 */}
            {calculatedPaginationArray.length > 0 && (
                <PaginationButton 
                    itemList={calculatedPaginationArray} //itemList 계산 (default값 미사용)
                />
            )}
        </div>
    );
};

export default Grid;