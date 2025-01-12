<template>
    <div class="container">
        <form action="">
            <h3>Todo App</h3>
            <!-- Component Form Add Job  -->
             <FormAdd @add-task="addTask"></FormAdd>
            <!-- Component List Task  -->
            <TaskList @delete-item="myDeleteTask" :tasks="tasks"></TaskList>
            <!-- Component total job  -->
             <TotalJob :total="totalJob"></TotalJob>
        </form>
    </div>
</template>

<script>

import TaskList from '@/components/todo/TaskList.vue';
import FormAdd from '@/components/todo/FormAdd.vue';
import TotalJob from '@/components/todo/TotalJob.vue';
import { reactive, ref } from 'vue';

export default {

    components: {
        TaskList,
        FormAdd,
        TotalJob
    },

    setup() {

        const tasks = reactive([]);

        let totalJob = ref(0);


        const getTotalJob = () => {
            return tasks.length;
        }

        const addTask = (task) => { 
            tasks.push({id: Date.now(), name: task, completed: false});
            totalJob.value = getTotalJob();
        }


        const myDeleteTask = (id) => {
            
            const index = tasks.findIndex((item) => {
             return item.id === id
            });

            if(index !== -1) {

                tasks.splice(index, 1);
                totalJob.value = getTotalJob();
            }
        }

        return {tasks, totalJob, addTask, myDeleteTask}
    }
}
</script>

<style>
body {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(#81ecec, #3498db) !important;
}


.container {
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


form {
    width: 500px;
    height: auto;
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
}

form h3 {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    padding: 20px 30px;
}

</style>