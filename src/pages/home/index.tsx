import * as Css from './style'
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import searchIcon from '../../assets/search-icon.png'
import candyIcon from '../../assets/revenue-icon.png'
import RevenueData from '../../components/revenueData';
import { RevenueProps } from '../../@types/revenue';

const HomePage = () => {

    const [revenues, setRevenues] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [searched, setSearched] = useState<string>('')

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [image, setImage] = useState<string>('')
    const [ingredient, setIngredient] = useState<string>('')
    const [method, setMethod] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const fillRevenueData = (data: RevenueProps) => {
        setImage(data.image)
        setIngredient(data.ingredient)
        setMethod(data.method)
        setTitle(data.title)
        setIsVisible(true)
    }

    const closeModal = () => {
        setIsVisible(false);
    }

    const convertToDate = (seconds: number) => {
        return new Date(seconds * 1000).toLocaleDateString()
    }

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

    const filterRevenues = (title: string) => {
        return title.toLowerCase().includes(searched.toLowerCase());
    };

    if (isVisible) {
        return < RevenueData
            image={image}
            method={method}
            ingredient={ingredient}
            title={title}
            close={closeModal}
        />
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
                {!loading && revenues.map(revenue => (
                    <Css.Revenue isSearched={filterRevenues(revenue.title)}>
                        <Css.RevenueContent>
                            <img src={candyIcon} alt="" />
                            <Css.RevenueDate>
                                {convertToDate(revenue.createdAt.seconds)}
                            </Css.RevenueDate>
                            <h2>{revenue.title}</h2>
                        </Css.RevenueContent>
                        <button onClick={() => {fillRevenueData(revenue)}}>Ver receita</button>
                    </Css.Revenue>
                ))}
            </Css.RevenuesContainer>
        </Css.container>
    )
}

export default HomePage;