const ListItems = () => {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];

    return products.map((item) => {
        return <div>{item.title} {`id : ${item.id}`}</div>
    });
};

export default ListItems;