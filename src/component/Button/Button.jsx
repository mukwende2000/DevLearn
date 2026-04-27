import React from 'react'

function Button({ children, bgColor, color }) {
    const styles = {
        backgroundColor: bgColor,
        color: color,
        fontSize: '1rem',
        fontWeight: '600',
        textTransform: 'capitalize',
        paddingBlock: '18px',
        borderRadius: '8px',
        width: '170px',

    }
    return (
        <button style={styles}>
            {children}
        </button>
    )
}

export default Button
