import React from "react"
import Test from "../assets/img/Icon.svg"
const Icon = (props)=> {
    return (
        <svg className="icon" width={props.data.width || 24} height={props.data.height || 24}>
            <use xlinkHref={`${Test}#${props.name}`} />
        </svg>
    )
}
export default Icon