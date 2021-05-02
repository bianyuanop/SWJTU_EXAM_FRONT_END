<template>
    <div class="cards">
        <div v-for="exam in exams" :key="exam">
            {{ exam.describe }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Exam",
    data() {
        return {
            exams: [
                {
                    id: 1,
                    describe: "Hello, word"
                }
            ]
        }
    }
}
</script>