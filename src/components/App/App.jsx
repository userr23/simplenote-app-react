import React, { Component } from 'react';

import PageWrapper         from '../PageWrapper';
import AppHeader        from '../../AppHeader';
import SearchPanel      from '../../search-panel';
import NotesList         from '../../NotesList';
import ItemStatusFilter from '../../ItemStatusFilter';
import ItemAddForm      from '../../ItemAddForm';
/* import ItemDownloadForm      from '../../ItemDownloadForm'; */



export default class App extends Component {

    maxId = 100;

    state = {
        notesData: [],
        term    : '',
        filter: 'all'
    };

    createNoteItem ( label ) {
        return {
            label,
            important: false,
            done     : false,
            id       : this.maxId++
        }
    }

    deleteItem = ( id ) => {
        this.setState( ( { notesData } ) => {
            const idx = notesData.findIndex( ( el ) => el.id === id );

            const newArray = [
                ...notesData.slice( 0, idx ),
                ...notesData.slice( idx + 1 )
            ];

            return {
                notesData: newArray
            }
        } );
    };

    onItemAdded = ( text ) => {
        const newItem = this.createNoteItem( text );

        this.setState( ( { notesData } ) => {
            const newArr = [
                ...notesData,
                newItem
            ];

            return {
                notesData: newArr
            };
        } );
    };

    toggleProperty ( arr, id, propName ) {

        const idx = arr.findIndex( ( el ) => el.id === id );

        const oldItem = arr[ idx ];
        const newItem = { ...oldItem, [ propName ]: !oldItem[ propName ] };

        return [
            ...arr.slice( 0, idx ),
            newItem,
            ...arr.slice( idx + 1 )
        ];
    };

    onToggleImportant = ( id ) => {
        this.setState( ( { notesData } ) => {
            return {
                notesData: this.toggleProperty( notesData, id, 'important' )
            };
        } );
    };

    onToggleDone = ( id ) => {
        this.setState( ( { notesData } ) => {
            return {
                notesData: this.toggleProperty( notesData, id, 'done' )
            };
        } );
    };

    onSearchChange = ( term ) => {
        this.setState( { term } );
    };

    onFilterChange = ( filter ) => {
        this.setState( { filter } );
    };

    search ( items, term ) {
        if ( term.length === 0 ) {
            return items;
        }

        return items.filter( ( item ) => {
            return item.label.toLowerCase().includes( term.toLowerCase() );
        } );
    }

    filter ( items, filter ) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter( (item) => !item.done );
            case 'done':
                return items.filter( (item) => item.done );
            case 'important':
                return items.filter( (item) => item.important );
            default:
                return items;
        }
    }
    render () {

        const { notesData, term, filter } = this.state;

        const visibleItems = this.filter(
            this.search( notesData, term ), filter);

        const doneCount = notesData
            .filter( ( el ) => el.done === true ).length;
        const notesCount = notesData.length - doneCount;

        return (
            <PageWrapper template='30vw 1fr'>
                <AppHeader notes={notesCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>

                <NotesList
                    notes={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />

                <ItemAddForm
                    onItemAdded={this.onItemAdded} />
            </PageWrapper>
        );

    }
}