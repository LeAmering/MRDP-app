<script>
	import '../app.css';
	import { pb } from '$lib/pocketbase';
	import { topicList, antritte, loadData } from '$lib/store.svelte';

	let { children } = $props();
	$effect(async () => {
		loadData();
	});

	$inspect('antritte', antritte.entries);
	$inspect('topicList', topicList.entries);
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	{@render children()}
</div>
