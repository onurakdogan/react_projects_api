import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, getprojects }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
                {pageNumbers.map(number => (
                        <button onClick={() => getprojects(number)}>
                            {number}
                        </button>
                ))}
        </nav>
    );
};

export default Pagination;
