import CardGridDisplay from './layouts/cardgrid'
import Card from './card'

const DisplayTasks = ({ data }) => {
    return (
        <CardGridDisplay>
            {data.map((card, index) => (
                <Card key={index} data={card} />
            ))}
        </CardGridDisplay>
    )
}

export default DisplayTasks