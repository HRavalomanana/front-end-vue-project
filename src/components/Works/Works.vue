<!-- Works block -->
<template>
    <div class="container-fluid">
        <div class="row">
            <div v-for="workData in WorksDataList" :key="workData.id" class="work-data col-xl-3 col-md-4 col-xs-12" v-on:click="getWorkId(workData.id)" v-b-modal.modal-info >

                <div class="work-content">
                    <h4 class="work-title">{{workData.title}}</h4>
                    <p class="work-description">{{workData.description}}</p>
                </div>
                <div class="work-image zoom-inner-img">
                    <img :src="workData.image" :alt="workData.title" :title="workData.title">
                </div>
            </div>
        </div>
        <p class="text-center"><span  title="ALL OUR WORKS" class="read-more-works" v-on:click="getAllWorksData"  v-bind:class="{ hidden: isShown }">ALL OUR WORKS</span></p>
        <p class="text-center"><span  title="ALL OUR WORKS" class="read-more-works" v-on:click="getWorksData"  v-bind:class="{ hidden: !isShown }">SHOW LESS WORKS</span></p>
<!-- Works modal block -->
        <WorkModal :item='OneWork' />
    </div>
</template>

<script>
import './Works.scss';
import WorkModal from './WorkModal';
//import WorkModal from './WorkModal';
export default {
    name: "Works",
    components: {
        WorkModal
    },
    data() {
        return {
            WorksDataList: [],
            OneWork: [],
            isShown: false,  //to hide the button "all our works"
        };
    },

    mounted:function(){
        this.getWorksData() // getWorksData will execute on the page loading
    },
    methods: {
        getWorksData() {

            // Get 8 First Works on the json file by ID

            fetch("/works.json")
                .then(response => response.json())
                .then(data => (this.WorksDataList = data.filter(res => res.id <= 8)))
                .then(this.isShown = false);
        },
        getAllWorksData() {
            // Get All Works on the json file
            fetch("/works.json")
                .then(response => response.json())
                .then(data => (this.WorksDataList = data))
                .then(this.isShown = true);


        },
        getWorkId(event) {

            // Get Work info by id to show on the modal

            fetch("/works.json")
                .then(response => response.json())
                .then(data => (this.OneWork = data.filter(res => res.id == event)) );

        }
    }
};
</script>