<template>
    <div class="list-jobs">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" @my-edit="$emit('edit-item', task.id)" @my-delete="$emit('delete-item', task.id)"></TaskItem>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {

    components: {
        TaskItem
    },
    props: ["tasks"]


}
</script>

<style scoped>
.list-jobs {
    width: 100%;
    padding: 10px 30px;
}
</style>