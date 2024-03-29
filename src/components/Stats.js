export default function Stats({ items }) {
    if (!items.length)
        return (<p className="stats">
            <em>
                Start adding some items to your packing list 💡
            </em>
        </p>
        );

    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = numPacked / numItems * 100;

    return (<footer className="stats">
        <em>
            {percentage === 100 ?
                'You got eveything! Ready to go ✈️'
                : `💼 You hanve ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        </em>
    </footer>);
}
