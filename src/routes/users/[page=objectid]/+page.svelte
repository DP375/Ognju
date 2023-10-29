<script>
	import userStore from '$lib/stores/userStore.js';
	let user;

	user = userStore.getCache();

	$: console.log(user);
</script>

<h1>Logged in as {user}</h1>

```
