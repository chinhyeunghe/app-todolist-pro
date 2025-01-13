<template>
    <div class="form-add-input">
        <input type="text" placeholder="Edit your work" v-model="editItem.name">
        <button type="button" @click="$emit('edit-submit', editItem)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path
                    d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
            </svg>
        </button>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

    export default {

        props: ["itemEdit"],

        setup(props) {

            const propsValue = props.itemEdit;
            let editItem = ref(propsValue);

            const show = () => {
                console.log(editItem);
            }

            return {editItem, show};
        }
    }
</script>

<style scoped>
.form-add-input {
    display: flex;
    margin-bottom: 20px;
}

.form-add-input input {
    width: 300px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #bdc3c7;
    font-size: 18px;
    outline: none;
    margin-right: 15px;
}

.form-add-input button {
    border: 1px solid #e74c3c;
    background-color: #e74c3c;
    border-radius: 5px;
    padding: 6px 20px;
}

.form-add-input button svg {
    fill: #FFF;
}
</style>
