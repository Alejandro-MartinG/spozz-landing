<script>
	let active = false, navigating = false;
	
	function simulateNavigation() {		
		navigating = true
		console.log("clicked", navigating);
		setTimeout(() => { // Reset
			navigating = false;
			active = false;
		}, 2000);
	}	
</script>

<style>
.active {
	background:red;
}
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<h1 class:active on:mouseenter={() => {
	console.log("enter", navigating);
	if (!navigating) {
		active = true;
	}
}}
on:mouseleave={() => {
	console.log("leave", navigating);
	if (!navigating) {
		active = false;
	}
}} on:click={simulateNavigation}>Hover or click me!</h1>

<pre>
Active: {active}
Navigating: {navigating}
</pre>