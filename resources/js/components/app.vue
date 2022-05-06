<template>
    <div class="container w-100 m-auto text-center mt-3">
        <h1 class="text-danger">Laravel vue todo list</h1>
        <div class="row">
            <div class="col-10">
                <list-view :items="items" v-on:reloadlist="getItems()" class="text-center"/>
            </div>
            <div class="col-2">
                <add-item-form v-on:reloadlist="getItems()" />
            </div>
        </div>
    </div>
</template>

<script>
import addItemForm from "./addItemForm";
import listView from "./listView";

export default {
    components: {
        addItemForm,
        listView
    },

    data: function() {
        return {
            items: []
        };
    },
    methods: {
        getItems() {
            axios
                .get("api/items")
                .then(res => {
                    this.items = res.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    created() {
        this.getItems();
    }
};
</script>

<style scoped></style>
