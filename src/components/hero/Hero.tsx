interface HeroProps {
    heroImg: string,
    heroSize: string,
    heroPos: string
}

export default function Hero({ heroImg, heroSize='cover', heroPos='center' }:HeroProps) {

    return (
        <div 
            style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: heroSize,
            backgroundPosition: heroPos
            }} 
            className="w-screen h-screen"
        >

        </div>
    )
}