interface HeaderLogoProps {
    isImg?: boolean,
    logo: string,
}

export default function HeaderLogo({isImg, logo}:HeaderLogoProps) {

    return (
        <div>
            { isImg ?

                <img src={logo} alt="site logo" />

                :

                <h1>{logo}</h1>
            }
        </div>
    )
}