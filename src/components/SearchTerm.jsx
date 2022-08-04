import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

SearchTerm.propTypes = {
    onSubmit: PropTypes.func,
};


SearchTerm.defaultProps = {
    onSubmit: null
}

function SearchTerm(props) {
    const [value, setValue] = useState('')
    const { onSubmit } = props
    const timeoutRef = useRef(null)

    function handleSearchFormChange(e) {
        const value = e.target.value
        setValue(value)

        if (!onSubmit) return

        if (timeoutRef.current)
            clearTimeout(timeoutRef.current)

        timeoutRef.current = setTimeout(() => {
            onSubmit(value)
        }, 300)
    }

    return (
        <form className="search-form">
            <input
                type="text"
                value={value}
                onChange={handleSearchFormChange}
            >
            </input>
        </form>
    );
}

export default SearchTerm;