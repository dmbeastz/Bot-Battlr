export default function SortBar ({onSort}) {

    return (
        <div>
        <h3>Sort By:</h3>
      <button onClick={() => onSort('health')}>Health</button>
      <button onClick={() => onSort('damage')}>Damage</button>
      <button onClick={() => onSort('armor')}>Armor</button>
        </div>
    )

}