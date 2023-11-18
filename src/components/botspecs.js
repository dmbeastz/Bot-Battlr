export default function BotSpecs ({bot, onEnlist, onGoBack}) {

    return (
        <div>
            <h2>Bot Spefications</h2>
            <img src= {bot.avatar_url} alt= {bot.name}></img>
            <p>{bot.name}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => onEnlist(bot)}>Enlist</button>
            <button onClick={onGoBack}>Go Back</button>

           
        </div>
    )
}