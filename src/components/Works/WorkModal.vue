<template>
    <div class="moda-info-block">
        <b-modal id="modal-info" title="BootstrapVue" size="xl" scrollable hide-footer hide-header>
            <div v-for="OneWorkData in item" :key="OneWorkData.id">
                <p class="my-3 modal-title">{{OneWorkData.id}} - {{OneWorkData.title}}</p>
                <p class="my-3 modal-desc">{{OneWorkData.description}}</p>
                <div class="row">
                <div class="col-md-7">
                    <div class="item-image">
                        <img :src="OneWorkData.image" :alt="OneWorkData.title" :title="OneWorkData.title">
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="modal-full-desc" v-html="OneWorkData.content"></div>
        <div class="modal-btn-wrapper"><a class="outline-red-btn modal-btn " href="#" title="Lorem">Lorem</a><a class="red-btn modal-btn" href="#" title="Cuncat">Cuncat</a></div>
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
