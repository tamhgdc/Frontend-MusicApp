import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    activePage: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
    totalRow: PropTypes.number,
    onChange: PropTypes.func,
};

Pagination.defaultProps = {
    activePage: 1,
    pageSize: 8,
    totalRow: 8,
    onChange: null,
}

function Pagination(props) {
    const { activePage, pageSize, totalRow, onChange } = props
    const numPages = Math.ceil(totalRow / pageSize)

    function handlePageChange(newPage) {
        if (onChange)
            onChange(newPage)
    }

    return (
        <Pagination>
            {
                [...Array(numPages)].map((e, number) => (
                    <Pagination.Item
                        key={number}
                        active={number == activePage}
                        onChange={(number) => { handlePageChange(number) }}
                        diabled={activePage == numPages && number == numPages
                            ||
                            activePage == 1 && number == 1}
                    >
                        {number}
                    </Pagination.Item>
                ))
            }
        </Pagination>
    );
}

export default Pagination;