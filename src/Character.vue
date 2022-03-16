<template>
    Персонаж {{ id }}
    <div>Название: <h1> {{ character.name }}</h1></div>
    <div>Статус: {{character.status}}</div>
    <div>Гендер: {{character.gender}}</div>
    <div>Локация: <router-link :to="{name: 'Location', params: { id: locationId}}">{{ location.name }}</router-link></div>

    <div class="characters">       
        <div :key="episodeId" v-for="episodeId in episodeIds" class="character">
            <div>Эпизод:</div>
            <h3><router-link :to="{name: 'Episode', params: { id: episodeId}}">{{ episodeId }}</router-link></h3>
        </div>
    </div>

</template>

<script>
import Api from './api';

export default {
    name: 'Character',
    props: ['id'],

    data() {
        return {
            character: {},
            location: {},
            locationId: 0,
            episodeIds: []
        }
    },
    async created() {
        this.character = await new Api().get(`character/${this.id}`, true);
        this.location = this.character.location;
        this.locationId = this.location.url.split("/").pop();
        this.episodeIds = this.character.episode.map(charecter => charecter.split("/").pop());
    }
}
</script>

<style>

</style>