<script>
	import Users from '$lib/Users.svelte';
	// import Button from '$lib/Button.svelte';
	import { Label } from '@smui/button';
	import Button from '@smui/button';
	let prekidac = false;
	function showUsers() {
		prekidac = !prekidac;
	}
</script>

<h1>Hello Users!!!!</h1>

<Button on:click={showUsers} variant="raised">
	<Label>Raised</Label>
</Button>
{#if prekidac}
	<Users />
{/if}
