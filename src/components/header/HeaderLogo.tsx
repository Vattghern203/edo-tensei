interface HeaderLogoProps {
    isImg?: boolean,
    logo: string,
}

export default function HeaderLogo({isImg, logo}:HeaderLogoProps) {

    return (
        <div className="flex align-center">
            { isImg ?

                <img className="object-cover" src={logo} alt="site logo" />

                :

                <h1>{logo}</h1>
            }
        </div>
    )
}