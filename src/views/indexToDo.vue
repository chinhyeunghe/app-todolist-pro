<template>
    <div class="container">
        <form action="">
            <h3>Todo App</h3>
            <!-- Component Form Add Job  -->
            <Fragment v-if="displayFormEdit === false">
                <FormAdd @add-task="addTask"></FormAdd>
            </Fragment>
            <Fragment v-if="displayFormEdit">
                <FormEdit @edit-submit="editTask" :itemEdit="itemEdit"></FormEdit>
            </Fragment>

            <!-- Component List Task  -->
            <TaskList v-if="displayFormEdit === false" @delete-item="myDeleteTask" @edit-item="myEditTask" @check-item="myCheckTask"
                :tasks="tasks"></TaskList>
            <!-- Component total job  -->
            <TotalJob :total="totalJob" @delete-all="handleDeleteAll"></TotalJob>
        </form>
    </div>
</template>

<script>

import TaskList from '@/components/todo/TaskList.vue';
import FormAdd from '@/components/todo/FormAdd.vue';
import TotalJob from '@/components/todo/TotalJob.vue';
import { Fragment, reactive, ref } from 'vue';
import FormEdit from '@/components/todo/FormEdit.vue';

export default {

    components: {
        TaskList,
        FormAdd,
        TotalJob,
        FormEdit
    },

    setup() {

        // trạng thái phản ứng ẩn hiện form add || edit

        const displayFormEdit = ref(false);

        const tasks = reactive([]);

        let totalJob = ref(0);

        let itemEdit = reactive({});

        const getTotalJob = () => {
            
          let taskCount = tasks.filter((item) => {

                return item.completed !== true;
            })
        
            return taskCount.length;
        }

        const addTask = (task) => {
            tasks.push({ id: Date.now(), name: task, completed: false });
            totalJob.value = getTotalJob();
        }

        const myDeleteTask = (id) => {

            if (confirm("❗Bạn có chắc muốn xóa Item này?")) {

                const index = tasks.findIndex((item) => {
                    return item.id === id
                });

                if (index !== -1) {

                    tasks.splice(index, 1);
                    totalJob.value = getTotalJob();
                }

            }
        }

        const myEditTask = (id) => {

            displayFormEdit.value = true;
            // tìm index object
            const index = tasks.findIndex((item) => {
                return item.id === id;
            })

            // lấy item
            const itemJob = tasks[index];

            // điền công việc lên input edit
            itemEdit.id = itemJob.id;
            itemEdit.name = itemJob.name;

            // 
        }

        const editTask = (itemEdit) => {

            const index = tasks.findIndex((item) => {
                return item.id === itemEdit.id;
            })

            // cập nhật
            tasks[index]["name"] = itemEdit.name;
            // đóng form edit
            displayFormEdit.value = false;

        }

        // hoàn thành công việc

        const myCheckTask = (id) => {

           // thay đổi trạng thái completed cho đối tượng

           const index = tasks.findIndex((item) => {

                return item.id === id;
           })

           if(index !== -1) {
            tasks[index]["completed"] = true;
            totalJob.value = getTotalJob();
                
           }
           
        }

        // Xóa tất cả công việc

        const handleDeleteAll = () => {

            if (tasks.length > 0) {
                if (confirm("Bạn muốn xóa hết công việc")) {
                    totalJob.value = 0;
                    return tasks.length = 0
                }
            }

        }

        return { tasks, totalJob, addTask, myDeleteTask, displayFormEdit, myEditTask, itemEdit, editTask, handleDeleteAll, myCheckTask }
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