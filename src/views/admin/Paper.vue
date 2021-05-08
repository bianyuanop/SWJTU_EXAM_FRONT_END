<template>
    <div class="paper-header">
        <el-button @click="commit">提交</el-button>
    </div>
    <div class="paper-gen">
        <div class="left">
            <el-collapse>
                <el-collapse-item :title="index" v-for="(content, index) in paper" :key="index">
                    <el-table :data="content">
                        <el-table-column prop="id" label="id"></el-table-column>
                        <el-table-column prop="describe" label="describe"></el-table-column>
                    </el-table>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="right">
            <el-collapse>
                <el-collapse-item :title="index" v-for="(content, index) in questions" :key="index">
                    <el-table :data="content" max-height="100">
                        <el-table-column prop="id" label="id"></el-table-column>
                        <el-table-column prop="describe" label="describe"></el-table-column>
                         <el-table-column
                            align="right">
                            <template #default="scope">
                                <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row, index)">Add</el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </el-collapse-item>
            </el-collapse>
        </div>
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
            questions: {
                select: this.$store.state.select,
                fill: this.$store.state.fill,
                fix: this.$store.state.fix,
                coding: this.$store.state.coding
            }
        }
    },
    mounted: function() {
        console.log(this.questions);
    },
    methods: {
        append: function(type, id) {
            console.log(type, " ", id);
        },
        handleEdit(index, row, type) {
            console.log(index, row, type);
            var isIn = this.getRow(this.paper[type], row.id);
            if(!isIn) this.paper[type].push(row);
        },
        getRow(items, rowId) {
            var isIn = false;
            items.forEach(element => {
                if(element.id == rowId) isIn = true;
            });
            return isIn;
        },
        commit() {
            alert("Test paper added.");
            window.location = '/admin';
        }
    }
}
</script>

<style scoped>
.paper-gen {
    display: flex;
    flex-direction: row;
}

.el-collapse {
    width: 98%;
}

.left, .right {
    width: 50%;
}

.paper-header {
    margin-bottom: 20px;
    height: 5vh;
}
.paper-header .el-button {
    float: right;
}

</style>