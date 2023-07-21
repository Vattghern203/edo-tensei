import './loader.module.css'

interface ThreePointsLoader {
    size?: number;
    color?: string,
    isLoading: 
}

const ThreePointsLoader = () => {

    return (

        <article data-3points-loader>
            <section className='side-point'></section>
            <section className='center-point'></section>
            <section className='side-point'></section>
        </article>
    )
}