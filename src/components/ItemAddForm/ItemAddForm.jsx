import React, { useState } from 'react';
import Input from '../Input';

export default function ItemAddForm({ onItemAdded }) {

    const [label, setLabel] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdded(label);
        setLabel('');
    };

    return (
        <form className="item-add-form d-flex"
            onSubmit={onSubmit}>
            <Input
                label=""
                value={label}
                placeholder="What needs to be done?"
                disabled="true"
                onChange={(e) => setLabel(e.target.value)}
            />
            {/* <input type="text"
                className="form-control"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="What needs to be done?" /> */}
            <button type="submit"
                className="btn btn-outline-secondary">
                Add Item
            </button>

        </form>
    );
};
