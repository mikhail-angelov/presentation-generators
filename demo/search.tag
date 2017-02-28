<search>

<input ref='textSearch' onkeyup={onkeyup} />
<button onclick={search}>Search</button>

<script>
this.search = function () {
	this.opts.search(this.refs.textSearch.value)
    this.refs.textSearch.value = ''
}

this.onkeyup = function (e) {
    e.keyCode === 13 && this.search()
}
</script>

</search>