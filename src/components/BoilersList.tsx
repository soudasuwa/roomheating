import useSWR from 'swr'
import axios from 'axios'
import styles from './styles/BoilersList.module.css'
import { useContext } from 'react'
import { ErrorContext } from 'src/contexts'
import Boiler from './Boiler'

type Props = {
    
}

const BoilersList = ({}: Props): JSX.Element => {
    const errorContext = useContext(ErrorContext)

    const fetcher = (url: string) => axios.get(url).then(response => response.data)
    const { data: boilers, error } = useSWR<BoilerDocument[]>('/api/boilers', fetcher)

    if (error !== undefined) errorContext.throwError(error)

    return (
        <div className={styles.main}>
            <p className={styles.title}>Boilers</p>
            <div className={styles.body}>
                {boilers && boilers.map(boiler => <Boiler key={boiler.id} {...boiler.data} />)}
            </div>
        </div>
    )
}

const defaultProps: Props = {

}

BoilersList.defaultProps = defaultProps

export default BoilersList