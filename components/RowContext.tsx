import * as React from 'react';

export interface RowContextState {
    gutter ?: [number, number]
}

const RowContext =  React.createContext({});

export default RowContext;
