import { useId } from 'react'
import {useFilters} from '../hooks/useFilters.js'
import './Filters.css'


export function Filters () {
    const {filters, setFilters} = useFilters()

    const minPriceFilterID = useId()
    const categoryFilterID = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section>
            <div>
                <label htmlFor={minPriceFilterID}> Price</label>
                <input
                type="range"
                name=""
                min='0'
                max='400000'
                id={minPriceFilterID}
                onChange={handleChangeMinPrice} 
                value={filters.minPrice}
                />
             <span>${filters.minPrice}</span>
             </div>
             <div>
                <label htmlFor={categoryFilterID}> Category</label>
                <select name="" id={categoryFilterID} onChange={handleChangeCategory}>
                    <option value="all"> Todas</option>
                    <option value="processor">Procesador</option>
                    <option value="GPU">Tarjetas Graficas</option>
                    <option value="mother_board">Placa Madre</option>
                    <option value="RAM">Memoria</option>
                    <option value="fuente">Fuentes</option>
                    <option value="monitor">Monitores</option>
                    <option value="periferico">Perifericos</option>
                    <option value="gabinete">Gabinetes</option>
                    <option value="SSD">Almacenamiento</option>
                </select>             
             </div>

        </section>
    )
}