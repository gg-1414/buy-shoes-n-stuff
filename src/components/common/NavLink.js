import React from 'react'
import { NavLink as RRNavLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const NavLink = React.forwardRef((props, ref) => <Link component={RRNavLink} ref={ref} {...props} />)
// * Ref forwarding is a technique of passing a ref through a component to one of its children

export default NavLink

