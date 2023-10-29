<script>
	const getHome = () => {
		window.location.href = '/';
	};
</script>

<img
	src="https://cdn.discordapp.com/attachments/1165994236802502677/1167414536979099668/png-transparent-smiley-emoticon-sadness-random-icons-miscellaneous-face-black-and-white.png?ex=654e0a83&is=653b9583&hm=1078792a74ac19826dfdcca95250c29c543c7f7759006f25686801d4c47b2ae8&"
	alt="none"
	on:click={getHome}
/>

<slot />

<style>
	img {
		z-index: 1;
		max-width: 50px;
		max-height: 100px;
		background: transparent;
	}
</style>
