import { pb } from '$lib/pocketbase';
export let topics = $state({
	topic1: 0,
	topic2: 0
});

export let topicList = $state({
	entries: null
});

export let antritte = $state({
	entries: null
});

export async function loadData() {
	antritte.entries = await pb.collection('Antritt_readable').getFullList();
	topicList.entries = await pb.collection('Themengebiet').getFullList();
}
