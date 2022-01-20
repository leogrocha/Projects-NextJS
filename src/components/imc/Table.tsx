const Table = () => {

    const renderHeader = () => {
        return (
            <tr>
                <th className="text-left p-4">Value</th>
                <th className="text-left p-4">Condition</th>
            </tr>
        )
    }

    const renderData = () => {
        return (
            <>
            <tr className="bg-purple-100">
                <td className="text-left p-4">Smaller 18</td>
                <td className="text-left p-4">Situation of underweight</td>
            </tr>

            <tr className="bg-purple-100">
                <td className="text-left p-4">Bigger 18.5 and smaller 25</td>
                <td className="text-left p-4">Optimal weigth situation</td>
            </tr>

            <tr className="bg-purple-100">
                <td className="text-left p-4">Bigger 25.1 and smaller 30</td>
                <td className="text-left p-4">Overweight situation</td>
            </tr>

            <tr className="bg-purple-100">
                <td className="text-left p-4">Bigger 30.1 and smaller 40</td>
                <td className="text-left p-4">Obesity situation</td>
            </tr>

            <tr className="bg-purple-100">
                <td className="text-left p-4">Bigger 40</td>
                <td className="text-left p-4">Situation of severe obesity</td>
            </tr>
            </>
        )
    }

    return (
        <table className="w-full rouded-xl overflow-hidden">
            <thead className="text-gray-100 bg-gray-800">
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}

export default Table;