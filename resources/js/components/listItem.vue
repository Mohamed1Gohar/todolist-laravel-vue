<style>
    .completed {
        text-decoration: line-through;
        color: white;
        background-color: #146c43;
        width: 100%;
    }
    .item {
        word-break: break-all;
    }
</style>
<template>
    <li class="list-group-item d-flex justify-content-between w-50">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
            class="mr-3"
        />
        <span :class="[item.completed ? 'completed' : '', 'item']">{{
                item.name
            }}</span>
        <button class="btn-danger ml-3" @click="removeItem()">X</button>
    </li>
</template>
<script>
export default {
    props: ["item"],
    methods: {
        updateCheck() {
            axios
                .put(`api/items/${this.item.id}`, {
                    item: this.item
                })
                .then(res => {
                    if (res.status == 200) {
                        this.$emit("itemchanged");
                    }
                })
                .catch(error => {
                    console.log("error from axios put", errors);
                });
        },
        removeItem() {
            axios
                .delete(`api/items/${this.item.id}`)
                .then(res => {
                    if (res.status == 200) {
                        this.$emit("itemchanged");
                    }
                })
                .catch(error => {
                    console.log("error from axios delte ", error);
                });
        }
    }
};
</script>

