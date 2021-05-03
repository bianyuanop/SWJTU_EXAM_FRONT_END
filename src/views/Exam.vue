<template>
    <div class="cards">
        <div v-for="exam in exams" :key="exam">
            <Card :exam="exam"/>
        </div>
    </div>
</template>

<script>
import Card from '@/components/exam/card.vue'
export default {
    name: "Exam",
    data() {
        return {
            exams: this.$store.state.exams
        }
    },
    components: {
        Card
    }
}
</script>