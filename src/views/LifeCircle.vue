<template>
    <h1 class="title">Trang học tập về vòng đời trong Vue Js</h1>
    <h3 class="title">Danh sách</h3>
    <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>
<script>
export default {

    data() {
        return {
            posts: []
        }
    },
    beforeCreate() {
        console.log(this.posts);
        
    },
   async created() {
    console.log(this.posts);
    
        console.log('Vue đã được khởi tạo, tạo ra');
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        this.posts = await response.json();
    },
    mounted() {
        console.log('Component LifeCircle vừa được gắn vào Vue');        
    },
}
</script>

<style scoped>
.title {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
}
</style>
