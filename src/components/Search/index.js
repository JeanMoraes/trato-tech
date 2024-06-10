import { useDispatch, useSelector } from 'react-redux'
import styles from './Search.module.scss'
import { handleSearch, resetSearch } from 'store/reduces/search'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const Search = () => {
    const term = useSelector(state => state.search)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(resetSearch())
    }, [location.pathname, dispatch])
    return (
        <div className={styles.busca}>
            <input
                className={styles.input}
                placeholder='O que você procura?'
                value={term}
                onChange={(e) => dispatch(handleSearch(e.target.value))}
            />
        </div>
    )
}