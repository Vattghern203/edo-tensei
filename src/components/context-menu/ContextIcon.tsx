interface ContextIconProps{
    iconName: string
}

export default function ContextIcon({iconName}:ContextIconProps) {
    <em className={`uil ${iconName}`}></em>
}