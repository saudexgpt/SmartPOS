<template>
    <div class="border-2 mt-1 relative rounded-md shadow-sm mb-1 overflow-hidden">
        <select
            v-model="form.store_id"
            name="store"
            id="store"
            class="form-input w-full pl-7 pr-12 sm:text-sm sm:leading-5 h-10 appearance-none"
            @change="setStore"
        >
            <option v-for="(store, index) in stores" :key="index" :value="store.id">{{ store.name }}</option>
        </select>
    </div>
</template>
<script lang="ts">
import { nsHooks, nsHttpClient, nsSnackBar } from '~/bootstrap'

export default {
    data: () => {
        return {
            stores: [],
            form: {
                store_id: ''
            },
        }
    },
    mounted() {
        this.loadStores();
        // this.setStore()
    },
    computed: {
    },
    methods: {
        loadStores() {
            const app = this
            nsHttpClient.get( '/api/stores' )
                .subscribe( result => {
                    this.stores  =   result.stores;
                    app.form.store_id = result.store_id
                    app.setStore(false)
                })
        },
        setStore(load = true) {
            const app = this
            nsHttpClient.post( '/api/stores/set-selected-store',  app.form)
                .subscribe( result => {
                    if(load) {
                        location.reload()
                    }

                })
        }
    },
}
</script>