import * as Css from './style';
import { useState } from 'react';

const Create = () => {

    const [title, setTitle] = useState<string>('')
    const [ingredient, setIngredient] = useState<string>('')
    const [method, setMethod] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Css.CreateContainer>
            <h1>Nos envie a sua própria receita</h1>
            <h2>Ela será avaliada por um especialista e então postada em nosso feed.</h2><br />

            <Css.createForm onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Título da receita:'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                <textarea
                    placeholder='Informe os ingredientes:'
                    value={ingredient}
                    onChange={(e) => { setIngredient(e.target.value) }}
                />

                <textarea
                    placeholder='Informe o modo de preparo da receita:'
                    value={method}
                    onChange={(e) => { setMethod(e.target.value) }}
                />
                <button type='submit'>Enviar para especialista</button>
            </Css.createForm>
        </Css.CreateContainer>
    )
}

export default Create;