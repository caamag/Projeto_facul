import * as Css from './style'
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import searchIcon from '../../assets/search-icon.png'

const HomePage = () => {

    const [revenues, setRevenues] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [searched, setSearched] = useState<string>('')

    useEffect(() => {
        const getRevenues = async () => {
            setLoading(true)
            const querySnapshot = await getDocs(collection(db, 'Receitas'))
            const revenueList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setRevenues(revenueList)
            setLoading(false)
        }

        getRevenues()
    }, [])

    useEffect(() => {
        console.log(revenues);
    }, [revenues])

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <Css.container>
            <Css.SearchContainer>
                <h1>Veja nossas receitas.</h1>
                <p>Acompanhe aquilo que a nossa comunidade tem adicionado recentemente.</p>
                <Css.Search>
                    <img src={searchIcon} alt="" />
                    <input
                        type="text"
                        value={searched}
                        onChange={(e) => { setSearched(e.target.value) }}
                        placeholder='Pesquisar receita:'
                    />
                </Css.Search>
            </Css.SearchContainer>

            <Css.RevenuesContainer>

            </Css.RevenuesContainer>
        </Css.container>
    )
}

export default HomePage;