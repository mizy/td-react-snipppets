{
    (list || []).map((item, index) => {
        console.log('item', item);

        return (
            <div
                key={item.id}
                onClick={() => {
                    console.log('item', item);
                }}
                style={{
                    color: index === 1 ? "red" : "",
                    lineHeight: '24px'
                }}
            >
                {item.name}
            </div>
        )
    })
}
