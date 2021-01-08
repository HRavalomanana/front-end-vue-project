<!-- Works modal block -->
<template>
    <div class="moda-info-block">
        <b-modal id="modal-info" title="BootstrapVue" size="xl" scrollable hide-footer hide-header>
            <div v-for="OneWorkData in item" :key="OneWorkData.id">
                <p class="my-3 modal-title">{{OneWorkData.id}} - {{OneWorkData.title}}</p>
                <p class="my-3 modal-desc">{{OneWorkData.description}}</p>
                <div class="row">
                <div class="col-xl-7 col-md--12">
                    <div class="item-image">
                        <img :src="OneWorkData.image" :alt="OneWorkData.title" :title="OneWorkData.title">
                    </div>
                </div>
                <div class="col-xl-5 col-md-12">
                    <div class="modal-full-desc" v-html="OneWorkData.content"></div>
                        <div class="modal-btn-wrapper"><a class="outline-red-btn modal-btn " href="#" title="Lorem" v-on:click="$bvModal.hide('modal-info')">Lorem</a><a class="red-btn modal-btn" href="#" title="Cuncat" v-on:click="$bvModal.hide('modal-info')">Cuncat</a></div>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'WorkModal',
    props: {
        item: Array
    }
}
</script>
