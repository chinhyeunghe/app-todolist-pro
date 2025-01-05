<template>
        <div>Thông tin truyền từ component cha gồm</div>
        <li>Title {{ title }}</li>
        <li>Desc {{ desc }}</li>

</template>

<script>
        export default {

                props: ['title', 'desc']
        }
</script>