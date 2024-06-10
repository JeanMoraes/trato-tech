import Header from "components/Header"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const Category = () => {
    const { slug } = useParams()
    const category = useSelector((state) => state.categories.find(category => category.id === slug))
    return (
        <div>
            <Header
                title={category.nome}
                description={category.descricao}
                img={category.header}
            />

        </div>
    )
}