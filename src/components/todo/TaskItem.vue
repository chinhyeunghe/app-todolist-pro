<template>
    <div class="job-item">
        <p>🔰 {{ task.name }}</p>
        <span class="btn-delete" @click="$emit('my-delete', task.id)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path
                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
        </span>
        <span class="btn-edit" @click="$emit('my-edit', task.id)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path
                    d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
            </svg>
        </span>
    </div>
</template>

<script>

    export default {

        props: ["task"]
    }
</script>

<style scoped>
.list-jobs .job-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    margin-bottom: 20px;
}

.list-jobs .job-item p {
    font-size: 18px;
    font-weight: 600;
    padding: 5px 15px;
    background-color: #ecf0f1;
    border-radius: 5px;
    margin-right: 10px;
}

.list-jobs .job-item span {
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0 5px;
}

.list-jobs .job-item span svg {
    fill: #FFF;
    padding-top: 5px;
}

.list-jobs .job-item .btn-delete {
    background-color: #e74c3c;
    cursor: pointer;
}

.list-jobs .job-item .btn-edit {
    background-color: #3498db;
    cursor: pointer;
}
</style>