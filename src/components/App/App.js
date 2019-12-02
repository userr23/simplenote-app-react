import React, { useState, useEffect } from 'react';

import PageWrapper      from '../PageWrapper';
import AppHeader        from '../AppHeader';
import SearchPanel      from '../SearchPanel';
import ItemsList        from '../ItemsList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm      from '../ItemAddForm';

import Storage      from '../../utils/Storage';
import pdfGenerator from '../../utils/pdfGenerator';


const useStateWithLocalStorage = ( localStorageKey ) => {
    if ( !localStorageKey ) {
        throw new Error( 'LocalStorage key name must be provided to persist to localStorage' );
    }

    const [ value, setValue ] = useState( Storage.get( localStorageKey ) || [] );

    useEffect( () => {
        Storage.set( localStorageKey, value );
    } );

    return [ value, setValue ];
};

export default function App () {
    const [ notesData, setNotesData ] = useStateWithLocalStorage( 'myNotes' );
    const [ term, setTerm ]           = useState( '' );
    const [ filter, setFilter ]       = useState( 'all' );


    const createItem = ( label ) => {
        return {
            label,
            added    : `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            edited   : '',
            edit     : false,
            important: false,
            omit     : false,
            id       : 'item-' + Date.now()
        };
    };

    const editItem = ( id, text ) => {
        const idx              = notesData.findIndex( el => el.id === id );
        const [ selectedItem ] = notesData.slice( idx, idx + 1 );

        selectedItem.label  = text;
        selectedItem.edited = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

        setNotesData( () => {
            return [
                ...notesData.slice( 0, idx ),
                selectedItem,
                ...notesData.slice( idx + 1 )
            ];
        } );
        onToggleEdit( id );
    };

    const deleteItem = ( id ) => {
        setNotesData( () => {
            const idx = notesData.findIndex( el => el.id === id );

            return [
                ...notesData.slice( 0, idx ),
                ...notesData.slice( idx + 1 )
            ];

        } );
    };

    const onItemAdded = ( text ) => {
        const newItem = createItem( text );

        setNotesData( () => {
            return [
                newItem,
                ...notesData
            ];
        } );
    };


    const onItemsClear = () => {
        setNotesData( () => {
            return [];
        } );
    };

    const onItemsPrint = () => {
        const itemsToPrint = notesData.filter( el => el.omit === false );

        pdfGenerator( itemsToPrint );
    };

    const toggleProperty = ( arr, id, propName ) => {
        const idx     = arr.findIndex( el => el.id === id );
        const oldItem = arr[ idx ];
        const newItem = { ...oldItem, [ propName ]: !oldItem[ propName ] };

        return [
            ...arr.slice( 0, idx ),
            newItem,
            ...arr.slice( idx + 1 )
        ];
    };

    const onToggleImportant = ( id ) => {
        setNotesData( () => {
            return toggleProperty( notesData, id, 'important' );
        } );
    };

    const onToggleEdit = ( id ) => {
        setNotesData( () => {
            return toggleProperty( notesData, id, 'edit' );
        } );
    };

    const onToggleOmit = ( id ) => {
        setNotesData( () => {
            return toggleProperty( notesData, id, 'omit' );
        } );
    };

    const onSearchChange = ( word ) => {
        setTerm( word );
    };

    const onFilterChange = ( f ) => {
        setFilter( f );
    };

    const search = ( items, word ) => {
        if ( word.length === 0 ) {
            return items;
        }

        return items.filter( ( item ) => {
            return item.label.toLowerCase().includes( word.toLowerCase() );
        } );
    };


    const toFilter = ( items, f ) => {
        switch ( f ) {
            case 'all':
                return items;
            case 'print':
                return items.filter( item => !item.omit );
            case 'omit':
                return items.filter( item => item.omit );
            case 'important':
                return items.filter( item => item.important );
            default:
                return items;
        }
    };

    const visibleItems = toFilter(
        search( notesData, term ), filter );

    const omitCount = notesData
        .filter( el => el.omit === true ).length;

    const totalCount = notesData.length;
    const printCount = totalCount - omitCount;

    return (
        <PageWrapper template='45rem'>
            <AppHeader print={printCount} omit={omitCount} total={totalCount} />

            <ItemAddForm
                onItemAdded={onItemAdded}
                onItemsClear={onItemsClear}
                onItemsPrint={onItemsPrint}
            />

            <div className="top-panel d-flex">
                <SearchPanel
                    onSearchChange={onSearchChange} />
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={onFilterChange}
                />
            </div>

            <ItemsList
                items={visibleItems}
                onEditLabel={editItem}
                onDeleted={deleteItem}
                onToggleEdit={onToggleEdit}
                onToggleImportant={onToggleImportant}
                onToggleOmit={onToggleOmit}
            />
        </PageWrapper>
    );
}
