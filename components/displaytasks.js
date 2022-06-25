import CardGridDisplay from './layouts/cardgrid'
import Card from './card'

const DisplayTasks = ({ data: { data } }) => {

    const pinned = data.filter((item) => item.pinned)
    const notPinned = data.filter((item) => !item.pinned)

    return (
        <CardGridDisplay>
            {pinned.map((card, index) => (
                <Card key={index} data={card} />
            ))}
            {notPinned.map((card, index) => (
                <Card key={index} data={card} />
            ))}
        </CardGridDisplay>

    )
}

export default DisplayTasks