<script>
	import { page } from '$app/stores';
	import Themenziehung from '$lib/components/Themenziehung.svelte';
	import { pb } from '$lib/pocketbase';
	import { antritte, loadData, topics } from '$lib/store.svelte';

	let antritt = $state(null);
	let antrittEntries = $state(null);
	//let arrtibutes = reihenfolge der Dinsgs
	let attributes = [
		'Nachname',
		'Vorname',
		'Thema1',
		'Thema2',
		'Themenwahl',
		'StartVB',
		'Beginn',
		'Ende',
		'Kurzform',
		'KV',
		'Pruefer',
		'Beisitz'
	];
	async function saveAntritt() {
		const data = {
			KandidatID: antritt.KandidatID,
			FachID: antritt.FachID,
			StartVB: antritt.StartVB,
			Beginn: antritt.Beginn,
			Ende: antritt.Ende,
			Thema1: topics.topic1,
			Thema2: topics.topic2,
			Themenwahl: null,
			Pruefer: antritt.PrueferID,
			Beisitz: antritt.BeisitzID,
			KV: antritt.KVID
		};

		const record = await pb.collection('Antritt').update($page.params.antritt, data);
		console.log(record);

		loadData();
	}

	$effect(async () => {
		if (antritte.entries) {
			antritt = antritte.entries.find((antritt) => antritt.id === $page.params.antritt);

			antrittEntries = Object.entries(antritt)
				.filter((entry) => attributes.includes(entry[0]))
				.sort(([a], [b]) => attributes.indexOf(a) - attributes.indexOf(b));
		}
	});
	$inspect('antritt', antritt);
	$inspect('antrittEntries', antrittEntries);
</script>

{#if antritt}
	<div class="grid grid-cols-2 place-items-center">
		<div class="flex flex-col gap-4">
			{#each antrittEntries as [key, value], index}
				<div class="flex items-center justify-between">
					<span>{key}</span>
					<input type="text" bind:value={antrittEntries[index][1]} />
				</div>
			{/each}
		</div>

		<div>
			<Themenziehung
				bind:topic1={antrittEntries[2][1]}
				bind:topic2={antrittEntries[3][1]}
				FachID={antritt.FachID}
			></Themenziehung>
			<button class="btn" onclick={saveAntritt}>Änderungen speichern</button>
		</div>
	</div>
{/if}
