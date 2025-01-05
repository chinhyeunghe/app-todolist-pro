<template>
    <div class="form-add-input">
        <input type="text" placeholder="Add your new todo">
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
        </button>
    </div>
</template>

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