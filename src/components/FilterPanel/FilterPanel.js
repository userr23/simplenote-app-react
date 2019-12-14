import React            from 'react';
import ItemStatusFilter from '../ItemStatusFilter';
import SearchInput      from '../SearchInput';
import styled           from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0.15rem 0 1rem;
    padding: 1rem;
    background-color: #2A3D4C;
`;


export default function FilterPanel ( { onSearchChange, filter, onFilterChange } ) {

    return (
        <Wrapper>
            <SearchInput
                onSearchChange={onSearchChange} />
            <ItemStatusFilter
                filter={filter}
                onFilterChange={onFilterChange}
            />
        </Wrapper>
    );
}

