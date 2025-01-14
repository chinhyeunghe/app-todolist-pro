<template>
    <div class="list-jobs">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" @my-edit="$emit('edit-item', task.id)" @my-delete="$emit('delete-item', task.id)" @my-check="$emit('check-item', task.id)"></TaskItem>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {

    components: {
        TaskItem
    },
    props: ["tasks"],

    setup(props) {

        const getTasks = () => {

            return props.tasks.reverse();
        }
    }


}
</script>

<style scoped>
.list-jobs {
    width: 100%;
    padding: 10px 30px;
    height: 300px;
    overflow: auto;
}

/* Tùy chỉnh phần track của scrollbar */
::-webkit-scrollbar {
  width: 8px;
  /* Độ rộng của scrollbar */
  height: 12px;
  /* Chiều cao của scrollbar ngang */
}

/* Tùy chỉnh phần background của scrollbar (track) */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
  /* Border-radius cho track */
}

/* Tùy chỉnh thanh trượt của scrollbar (thumb) */
::-webkit-scrollbar-thumb {
    background: linear-gradient(#81ecec, #3498db) !important;
  border-radius: 10px;
  /* Border-radius cho thanh trượt */
}

/* Khi hover lên scrollbar */
::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(#81ecec, #3498db) !important;
}
</style>