<script>
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import { topicList, antritte } from '$lib/store.svelte';

	function schowAntritt(id) {
		goto(`/${id}`);
	}
</script>

<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th></th>
				<th>Nachname</th>
				<th>Vorname</th>
				<th>Fach</th>
				<th>KV</th>
				<th>Prüfer</th>
				<th>Beisitz</th>
			</tr>
		</thead>
		<tbody>
			{#each antritte.entries as antritt, index (antritt.id)}
				<tr class="hover:bg-base-300 cursor-pointer" onclick={schowAntritt(antritt.id)}>
					<th>{index + 1}</th>
					<td>{antritt.Nachname}</td>
					<td>{antritt.Vorname}</td>
					<td>{antritt.Kurzform}</td>
					<td>{antritt.KV}</td>
					<td>{antritt.Pruefer}</td>
					<td>{antritt.Beisitz}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
