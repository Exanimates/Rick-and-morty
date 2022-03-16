<template>
    Выберите сезон:
    <select name="seasons" v-model="selectedSeason">
        <option :key="season" v-for="season in seasons" :value="season">
            {{ season }}
        </option>
    </select>
    <div class="episodes">       
        <div :key="episode.id" v-for="episode in filteredEpisodes" class="episode">
            <h3><router-link :to="{name: 'Episode', params: { id: episode.id}}">{{ episode.name }}</router-link></h3>
            <div>Дата: {{ episode.air_date }}</div>
            <div>Номер: {{ episode.episode.slice(4, 6) }}</div>
        </div>
    </div>
</template>

<script>
import Api from './api';

export default {
    name: 'EpisodeList',
    data() {
        return {
            episodes: [],
            selectedSeason: "01"
        }
    },
    computed: {
        seasons: function() {
            return this.episodes.map(episode => episode.episode.slice(1, 3)).filter((v, i, a) => a.indexOf(v) === i )
        },

        filteredEpisodes: function() {
            return this.episodes.filter(episode => episode.episode.slice(1,3) == this.selectedSeason);
        }
    },

    async created() {
        this.episodes = await new Api().get("episode");
    }
}
</script>

<style>
    .episodes {
        margin: 25px;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        grid-gap: 15px;
    }
</style>