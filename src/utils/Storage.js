import { encode, decode } from './util';

export default class Storage {
    static set ( key, value ) {
        localStorage.setItem( key, encode( value ) );
    }

    static get ( key ) {
        const storedValue = localStorage.getItem( key );

        return storedValue
            ? decode( storedValue )
            : storedValue;
    }

    static remove ( key ) {
        localStorage.removeItem( key );
    }

    static size ( key ) {
        const storedValue = localStorage.getItem( key );
        let value         = 0;

        if ( storedValue ) {
            const length = ( storedValue.length + key.length ) * 2;
            value        = ( length / 1024 ).toFixed( 2 );
        }

        return `Storage size = ${value} KB`;
    }
}

