<player>

<audio ref='player' src={link} />

<script>

this.opts.event_bus.on('toggle', (link) => {
    this.link = link
    this.update() //should update audio src first, the run play
    this.toggle()
})

this.toggle = () => {
    if (this.refs.player.paused) {
        this.refs.player.play()
    } else {
        this.refs.player.pause()
    }
}

</script>
</player>