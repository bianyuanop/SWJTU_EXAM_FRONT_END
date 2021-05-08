<template>
    <div class="paper-gen">
        <el-collapse>
            <el-collapse-item title="Select"></el-collapse-item>
        </el-collapse>
        <el-collapse>
            <el-collapse-item title="Select"></el-collapse-item>
        </el-collapse>
    </div>    
</template>

<script>
export default {
    name: "Paper",
    data() {
        return {
            paper: {
                select: [],
                fix: [],
                fill: [],
                coding: []
            },
            problems: {
                select: this.$store.state.select,
                fill: this.$store.state.fill,
                fix: this.$store.state.fix,
                coding: this.$store.state.coding
            }
        }
    },
    mounted: function() {
        console.log(this.problems);
    }
}
</script>

<style scoped>
.paper-gen {
    display: flex;
    flex-direction: row;
}
.el-collapse {
    margin-right: 20px;
    width: 48%;
}
</style>