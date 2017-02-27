<mediaList>

<div class='row' each={item in this.opts.items}>
    <img class='image' src={item.img}/>
    <div class='column'>{item.name}</div>
    <div class='column'>{item.album}</div>
    <div class='column control'><button onclick={play(item)}> {item.played?'||':'>'} </button></div>
</div>

<script>

this.play = item=>()=>this.opts.play(item)

</script>




<style>

.row{
    display:flex;
    width: 80%;
}
.column{
    display: flex;
    width: 400px;
    margin: 10px;
}
.control{
    align-items: center;
    justify-content: center;
}
.control button{
    width: 40px;
}
.image{
    display:flex;
    margin: 5px;
}

</style>
</mediaList>