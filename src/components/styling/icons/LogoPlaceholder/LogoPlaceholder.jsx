import placeholder from "./LogoPlaceholder.module.css"
export const LogoPlaceholder = ({src}) => {

    if(src===undefined){
    return (
        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" >
        <g clipPath="url(#clip0_505_1189)">
        <circle cx="30" cy="30" r="29.5" stroke="#8D8FA3"/>
        <g clipPath="url(#clip1_505_1189)">
        <path d="M39 35C39 35.93 39 36.395 38.8978 36.7765C38.6204 37.8117 37.8117 38.6204 36.7765 38.8978C36.395 39 35.93 39 35 39H25.8C24.1198 39 23.2798 39 22.638 38.673C22.0735 38.3854 21.6146 37.9265 21.327 37.362C21 36.7202 21 35.8802 21 34.2V25.8C21 24.1198 21 23.2798 21.327 22.638C21.6146 22.0735 22.0735 21.6146 22.638 21.327C23.2798 21 24.1198 21 25.8 21H36V21C36 21 36 21 36 21C37.6569 21 39 22.3431 39 24C39 24 39 24 39 24V36M28.5 26.5C28.5 27.6046 27.6046 28.5 26.5 28.5C25.3954 28.5 24.5 27.6046 24.5 26.5C24.5 25.3954 25.3954 24.5 26.5 24.5C27.6046 24.5 28.5 25.3954 28.5 26.5ZM32.99 29.9181L24.5311 37.608C24.0554 38.0406 23.8175 38.2568 23.7964 38.4442C23.7782 38.6066 23.8405 38.7676 23.9632 38.8755C24.1048 39 24.4263 39 25.0693 39H34.456C35.8951 39 36.6147 39 37.1799 38.7582C37.8894 38.4547 38.4547 37.8894 38.7582 37.1799C39 36.6147 39 35.8951 39 34.456C39 33.9718 39 33.7296 38.9471 33.5042C38.8805 33.2208 38.753 32.9554 38.5733 32.7264C38.4303 32.5442 38.2412 32.393 37.8631 32.0905L35.0658 29.8527C34.6874 29.5499 34.4982 29.3985 34.2898 29.3451C34.1061 29.298 33.9129 29.3041 33.7325 29.3627C33.5279 29.4291 33.3486 29.5921 32.99 29.9181Z" stroke="#8D8FA3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_505_1189">
        <rect width="60" height="60" fill="white"/>
        </clipPath>
        <clipPath id="clip1_505_1189">
        <rect width="24" height="24" fill="white" transform="translate(18 18)"/>
        </clipPath>
        </defs>
        </svg>

    )
    }

    else {
        return(
            <div className={placeholder.logoPlaceholder}>
                <img src={src} style={{maxWidth:"100%"}} />
            </div>
        )
    }
}
