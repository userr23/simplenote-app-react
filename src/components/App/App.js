import React, { useState, useEffect } from 'react';

import PageWrapper from '../PageWrapper';
import AppHeader   from './AppHeader';
import FilterPanel from './FilterPanel';
import ItemsList   from './ItemsList';
import ItemAddForm from './ItemAddForm';

import Storage      from '../../utils/Storage';
import pdfGenerator from '../../utils/pdfGenerator';

const STORAGE_NAME = 'myNotes';

const useStateWithLocalStorage = ( localStorageKey ) => {
    if ( !localStorageKey ) {
        throw new Error( 'LocalStorage key name must be provided to persist to localStorage' );
    }

    const [ value, setValue ] = useState( Storage.get( localStorageKey ) || [] );

    useEffect( () => {
        if ( !value || !value.length ) {
            Storage.remove( localStorageKey );
        } else {
            Storage.set( localStorageKey, value );
        }
    } );

    return [ value, setValue ];
};

export default function App () {
    const [ notesData, setNotesData ]     = useStateWithLocalStorage( STORAGE_NAME );
    const [ storageSize, setStorageSize ] = useState( Storage.size( STORAGE_NAME ) || '' );

    useEffect( () => {
        setStorageSize( Storage.size( STORAGE_NAME ) );
    } );

    const [ term, setTerm ]                     = useState( '' );
    const [ filter, setFilter ]                 = useState( 'all' );
    const [ panelVisible, setPanelVisible ]     = useState( true );
    const [ sortDescending, setSortDescending ] = useState( false );

    const createItem = ( label ) => {
        return {
            label,
            added    : `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            edited   : '',
            edit     : false,
            important: filter === 'important',
            omit     : filter === 'omit',
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
        const visibleItems = toFilter(
            search( notesData, term ), filter );

        if ( visibleItems.length === notesData.length ) {
            setNotesData( () => {
                return [];
            } );
        } else {
            setNotesData( () => {
                return notesData
                    .filter( item => visibleItems
                        .findIndex( el => el.id === item.id ) === -1 );
            } );
        }

    };

    const onItemsPrint = () => {
        const itemsToPrint = notesData.filter( el => el.omit === false );

        pdfGenerator( itemsToPrint, sortDescending );
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
        const [ editingItem ] = notesData.filter( el => el.edit );

        if ( !editingItem || editingItem.id === id ) {
            setNotesData( () => {
                return toggleProperty( notesData, id, 'edit' );
            } );
        }
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
        if ( !word.length ) {
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
            case 'edited':
                return items.filter( item => item.edited );
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

    const onPanelVisibleCheck = ( checked ) => {
        setPanelVisible( checked );
    };

    const onSortDescending = ( checked ) => {
        setSortDescending( checked );
    };

    const visibleItems = toFilter(
        search( notesData, term ), filter );

    const omitCount  = notesData
        .filter( el => el.omit === true ).length;
    const totalCount = notesData.length;
    const printCount = totalCount - omitCount;

    return (
        <PageWrapper template='45rem'>
            <AppHeader print={printCount} omit={omitCount} total={totalCount} storageSize={storageSize} />

            <ItemAddForm
                onItemAdded={onItemAdded}
                onItemsClear={onItemsClear}
                onItemsPrint={onItemsPrint}
                panelVisible={panelVisible}
                onPanelVisibleCheck={onPanelVisibleCheck}
                sortDescending={sortDescending}
                onSortDescending={onSortDescending}
            />

            {panelVisible && <FilterPanel
                onSearchChange={onSearchChange}
                filter={filter}
                onFilterChange={onFilterChange}
            />}

            <ItemsList
                items={visibleItems}
                onEditLabel={editItem}
                onDeleted={deleteItem}
                onToggleEdit={onToggleEdit}
                onToggleImportant={onToggleImportant}
                onToggleOmit={onToggleOmit}
                sortDescending={sortDescending}
            />
        </PageWrapper>
    );
}

