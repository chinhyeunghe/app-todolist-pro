<template>
    <div class="container">
        <form action="">
            <h3>Todo App</h3>
            <div class="form-add-input">
                <input type="text" placeholder="Add your new todo">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#5f6368">
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                </button>
            </div>

            <!-- Component List Task  -->
            <TaskList></TaskList>

            <div class="clear-content">
                <p>Bạn có <strong>3</strong> công việc cần hoàn thành</p>
                <span>Xóa tất cả</span>
            </div>

        </form>
    </div>
</template>

<script>


export default {

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


.clear-content {
    width: 100%;
    display: flex;
    padding: 15px 10px;
    margin-top: 20px;
}

.clear-content p {
    font-size: 18px;
    font-weight: 500;
}

.clear-content span {
    padding: 3px 15px;
    background-color: #2ecc71;
    border-radius: 5px;
    font-weight: 500;
    margin: 0 15px;
    color: #FFF;
}

.clear-content span:hover {
    cursor: pointer;
}

.clear-content strong {
    color: #f1c40f;
}
</style>