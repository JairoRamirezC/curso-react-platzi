import React from 'react'
import PropTypes from 'prop-types'

export default function Footer({apellidos, saludo}) {
    return(
        <>
            <h1>{apellidos}</h1>
            <p>{saludo}</p>
        </>
    )
}

Footer.propTypes = {
    apellidos: PropTypes.string.isRequired
}

Footer.defaultProps = {
    saludo: 'Un saludo del Footer'
}