import * as Css from './style';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ResponseMessage from '../../components/reponseMessage';

const Create = () => {

    const [title, setTitle] = useState<string>('')
    const [ingredient, setIngredient] = useState<string>('')
    const [method, setMethod] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)
            await addDoc(collection(db, 'Receitas'), {
                title,
                ingredient,
                method,
                createdAt: serverTimestamp()
            })

            setTitle('')
            setIngredient('')
            setMethod('')

        } catch (error) {
            setError(true)
            setTimeout(() => { setError(false) }, 5000)
        } finally {
            setLoading(false)
        }

    }

    return (
        <Css.CreateContainer>
            {error && <ResponseMessage
                status='error'
                message='Erro ao criar receita. Tente novamente mais tarde.'
            />}

            <h1>Nos envie a sua própria receita</h1>
            <h2>
                Ela será avaliada por um especialista e então
                postada em nosso feed.
            </h2><br />

            <Css.createForm onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Título da receita:'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    required
                />

                <textarea
                    placeholder='Informe os ingredientes:'
                    value={ingredient}
                    onChange={(e) => { setIngredient(e.target.value) }}
                    required
                />

                <textarea
                    placeholder='Informe o modo de preparo da receita:'
                    value={method}
                    onChange={(e) => { setMethod(e.target.value) }}
                    required
                />
                <button type='submit' disabled={loading}>Enviar para especialista</button>
            </Css.createForm>
        </Css.CreateContainer>
    )
}

export default Create;