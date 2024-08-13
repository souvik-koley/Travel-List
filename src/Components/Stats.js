export default function Stats({ items }) {
    if (!items.length) {
        return (
            <p class="stats">
                <em>Start adding some items to our packing list</em>
            </p>
        );
    }

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    // const percentage = Math.round((numPacked / numItems) * 100);
    const percentage = ((numPacked / numItems) * 100).toFixed(2);

    return (
        <footer className="stats">
            <em>{+percentage === 100 ?
                'You got everything! Ready to go 🛩️'
                : `You have ${numItems} items on your list,
            and you already paked ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
