<template>
    Эпизод {{ id }}
    <div>Название: <h1> {{ episode.name }}</h1></div>
    <div>Дата выхода: {{episode.air_date}}</div>

    <div class="characters">       
        <div :key="character" v-for="character in charactersIds" class="character">
            <div>Персонаж:</div>
            <h3><router-link :to="{name: 'Character', params: { id: character}}">{{ character }}</router-link></h3>
        </div>
    </div>
</template>

<script>
import Api from './api';

export default {
    name: 'Episode',
    props: ['id'],
    data() {
        return {
            episode: {},
            charactersIds: []
        }
    },
    async created() {
        this.episode = await new Api().get(`episode/${this.id}`, true);
        this.charactersIds = this.episode.characters.map(charecter => charecter.split("/").pop());
    }
}
</script>

<style>
    .characters {
        margin: 25px;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        grid-gap: 15px;
    }
</style>