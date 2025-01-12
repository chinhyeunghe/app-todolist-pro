<template>
    <div class="clear-content">
        <p>Bạn có <strong>{{ total ?? 0 }}</strong> công việc cần hoàn thành</p>
        <span>Xóa tất cả</span>
    </div>
</template>

<script>

    export default {
        props: ["total"]
    }

</script>

<style scoped>
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