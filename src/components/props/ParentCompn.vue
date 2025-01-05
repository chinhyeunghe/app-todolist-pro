<template>
        <div>Component cha</div>
        <ChildCompn v-bind="listProps" />
</template>

<script>
    // nhập component con 
    import ChildCompn from './ChildCompn.vue';
    
    export default {

        data() {
            return {
                listProps: {

                    'title': 'Title từ cha',
                    'desc': 'Mô tả từ cha'
                }
            }
        },
        components: {
            ChildCompn
        }
    }

    
</script>