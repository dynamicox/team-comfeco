import React from 'react'

export const LoadingSpiner = () => {
    return (
        <div className="d-flex justify-content-center w-100 text-info">
            <div className="spinner-border mt-5 " role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
