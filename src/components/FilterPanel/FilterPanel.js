import React            from 'react';
import ItemStatusFilter from '../ItemStatusFilter';
import SearchPanel      from '../SearchPanel';
import styled           from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 1rem;
    padding: 1rem 0.5rem;
    background-color: #2A3D4C;
`;


export default function FilterPanel ( { onSearchChange, filter, onFilterChange } ) {

    return (
        <Wrapper>
            <SearchPanel
                onSearchChange={onSearchChange} />
            <ItemStatusFilter
                filter={filter}
                onFilterChange={onFilterChange}
            />
        </Wrapper>
    );
}

