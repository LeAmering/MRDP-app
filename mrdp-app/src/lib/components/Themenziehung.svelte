<script>
	import { topics, topicList } from '$lib/store.svelte';
	let disabled = $state(false);
	let { FachID } = $props();

	let title1 = $state('');
	let title2 = $state('');

	async function getRandomTopics() {
		topics.topic1 = Math.ceil(Math.random() * 6);
		topics.topic2 = Math.ceil(Math.random() * 6);
		while (topics.topic1 === topics.topic2) {
			topics.topic2 = Math.ceil(Math.random() * 6);
		}
		const array = topicList.entries;

		title1 = array.find(
			(item) => item.FachID === FachID && item.Nummer === topics.topic1
		).Bezeichnung;
		title2 = array.find(
			(item) => item.FachID === FachID && item.Nummer === topics.topic2
		).Bezeichnung;

		disabled = true;
	}
	$inspect(FachID);
</script>

<button class="btn" onclick={getRandomTopics} {disabled}>Themen ziehen</button>

<div>
	<p>Thema 1: {topics.topic1} - {title1}</p>
	<p>Thema 2: {topics.topic2} - {title2}</p>
</div>
