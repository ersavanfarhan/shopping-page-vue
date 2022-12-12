<template>
    <h3><strong>Open Positions</strong></h3>
    <div class="searching-bar">
        <input class="form-control" placeholder="Searching for jobs" v-model="search">
    </div>
    <div class="job-item" v-for="job in filterJob" :key="job.id" v-show="job.status">
        <div>
            <h5><strong>{{ job.position }}</strong></h5>
            <h6>{{ job.type }}</h6>
            <h6>{{ job.location }}</h6>
            <p v-show="job.hiddenDetail">{{ job.requirement }}</p>
            <span @click="job.hiddenDetail = !job.hiddenDetail">
                <span type="button" class="material-symbols-outlined" v-if="!job.hiddenDetail">
                    expand_more
                </span>
                <span type="button" class="material-symbols-outlined" v-else>
                    expand_less
                </span>
            </span>
        </div>
    </div>
    <div class="load-btn" @click="loadJob">
        <button class="btn btn-light dropdown-toggle" v-if="moreJob">Load More Jobs</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "JobCard",

    data() {
        return {
            search: '',
            moreJob: true,
            jobs: []
        }
    },

    methods: {
        loadJob() {
            const hiddenJob = this.jobs
            for (let i = 0; i < hiddenJob.length; i++) {
                hiddenJob[i].status = true
                this.moreJob = !this.moreJob
            }
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/jobs')
        this.jobs = response.data;
        // console.log("berhasil", response)
    },

    computed: {
        filterJob: function() {
            return this.jobs.filter((job) => {
                return job.position.toLowerCase().match(this.search.toLowerCase())
            });
        }
    }
}
</script>

<style scoped>
.searching-bar {
    display: flex;
    gap: 15px;
}

.job-item {
    position: relative;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;
}

span {
    position: absolute;
    bottom: 5%;
    right: 1%;
}
</style>
