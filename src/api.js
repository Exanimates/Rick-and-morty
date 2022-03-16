export default class Api {
    base_url = "https://rickandmortyapi.com/api/";

    async get(postfix, isSingle) {
        const response = await fetch(this.base_url + postfix);
        const result = await response.json();

        return isSingle ? result : result.results;
    }
}