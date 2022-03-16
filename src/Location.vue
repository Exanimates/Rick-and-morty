<template>
    Локация {{ id }}
    <div>Название: <h1> {{ location.name }}</h1></div>
    <div>Тип: {{location.type}}</div>
    <div>Измерение: {{location.dimension}}</div>

    <div class="elems-content">       
        <div :key="characterId" v-for="characterId in charactersIds" class="elem">
            <div>Персонаж:</div>
            <h3><router-link :to="{name: 'Character', params: { id: characterId }}">{{ characterId }}</router-link></h3>
        </div>
    </div>
</template>

<script>
import Api from './api';

export default {
    name: 'Location',
    props: ['id'],

    data() {
        return {
            location: {},
        }
    },
    async created() {
        this.location = await new Api().get(`location/${this.id}`, true);
        this.charactersIds = this.location.residents.map(charecter => charecter.split("/").pop());
    }
}
</script>

<style>
</style>