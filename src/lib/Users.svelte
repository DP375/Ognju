<script>
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import { Label } from '@smui/button';
	import userStore from './stores/userStore.js';
	$: users = [];
	$: currentUser = {};
	onMount(async () => {
		const usersData = fetch('https://dummyjson.com/users')
			.then((response) => response.json())
			.then((data) => {
				return (users = data.users);
			});
	});

	const openUser = () => {
		userStore.init(currentUser);
		userStore.setCache();

		window.location.replace(`http://localhost:5173/users/${currentUser.id}`);
	};

	const displayUser = (user) => {
		currentUser = user;
	};

	const userClickHandler = (event) => {
		const userId = event.target.id;
		const user = users.find((user) => user.id == userId);
		displayUser(user);
	};
</script>

<h1>Users</h1>
{#if currentUser.firstName != undefined}
	<div class="current">
		{currentUser.firstName}
		{currentUser.lastName}
		{currentUser.email}
		<Button on:click={openUser}>
			<Label>Open User</Label>
		</Button>
	</div>
{/if}

{#each users as user}
	<div id={user.id} class="user" on:click={userClickHandler}>
		<p>{user.firstName}</p>
		<hr />
		<p>{user.lastName}</p>
	</div>
{/each}

<style>
	.user {
		display: flex;
		flex-direction: row;
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
	}
	.user:hover {
		background-color: #f1f1f1;
		border-right: 1px solid #f1f1f1;
		border-bottom: 1px solid #f1f1f1;
	}

	.current {
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
		background-color: red;
	}
</style>
