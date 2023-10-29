<script>
	import Button from '@smui/button';
	import { Label } from '@smui/button';
	//logic
	let on = false;
	let focus = false;
	let content = 'Dobri';

	function toggle() {
		on = !on;
	}

	//handlers
	// const buttonClickHandler = () => {
	// 	toggle();
	// };

	const buttonClickHandler = () => {
		window.location.replace('http://localhost:5173/users');
	};
	const inputBlurHandler = () => {
		focus = false;
	};
	const inputFocusHandler = () => {
		focus = true;
	};
	const inputInputHandler = (event) => {
		console.log(event.target.value);
		content = event.target.value;
	};
</script>

{#if on}
	<h1>Dobrivoj</h1>
{:else}
	<h1>Ognjen</h1>
{/if}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<input
	on:blur={inputBlurHandler}
	on:focus={inputFocusHandler}
	on:input={inputInputHandler}
	type="text"
/>
<!-- <button on:click={buttonClickHandler}> Toggle </button> -->
<Button on:click={buttonClickHandler} variant="raised">
	<Label>switch</Label>
</Button>

<div>
	{#if focus}
		<p>Focus is on</p>
	{:else}
		<p>Blur is on</p>
	{/if}
</div>

<div>
	<p>{content}</p>
</div>
