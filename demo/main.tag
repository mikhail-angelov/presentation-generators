<main>

<div class={ this.items?'header  top':'header' }>
    <search search={onSearch}/>
    <player event_bus={playerEventBus}/>
</div>
<mediaList items={items} play={onPlay}/>

<script>

this.onSearch = (text) => {
    search(text, (items)=>{
        this.items = items
        this.update()
    })
}
this.onPlay = (item)=>{
    this.playerEventBus.trigger('toggle',item.link);
    
    this.items = this.items.map(listItem=>{
        if(listItem.link === item.link){
            listItem.played = !listItem.played
        }else{
            listItem.played = false
        }
        return listItem
    })
}

this.playerEventBus = riot.observable()

</script>

<style>
.header {
    display:flex;
    justify-content: center;
    margin-top: 200px;
}
@keyframes up {
    0% {margin-top: 200px;}
    100% {margin-top: 10px;}
}
.top{
    margin-top: 10px;
    animation: up 0.5s ease-out;
}
medialist {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
</main>