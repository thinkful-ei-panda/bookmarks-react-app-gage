import React from 'react';

const BookMarkContext = React.createContext({
    bookmark : [],
    addBookmark: () => {},
    deleteBookmark : () => {},
    updateBookmark : () =>  {},
})

export default BookMarkContext; 