import {Outlet} from 'react-router-dom'

export default function Blog(){
    return(
        <div>
            Blog Page
            <Outlet/>
        </div>
    )
}