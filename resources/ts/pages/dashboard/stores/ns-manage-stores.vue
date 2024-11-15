
<template>
    <div v-if="Object.values( form ).length === 0" class="flex items-center justify-center h-full">
        <ns-spinner />
    </div>
    <div class="form flex-auto bg-box-background w-95vw md:w-2/3-screen" id="stores-form" >
        <!-- <div class="box-header border-b border-box-edge box-border p-2 flex justify-between items-center" v-if="popup">
            <h2 class="text-primary font-bold text-lg">{{ popup.params.title }}</h2>
            <div>
                <ns-close-button @click="handleClose()"></ns-close-button>
            </div>
        </div> -->
        <div>
            <div class="flex flex-col">
                <div class="flex justify-between items-center">
                    <label for="title" class="font-bold my-2 text-primary">
                        <span>&nbsp;</span>
                    </label>
                    <div for="title" class="text-sm my-2">
                        <a v-if="returnUrl && ! popup" :href="returnUrl" class="rounded-full border px-2 py-1 ns-inset-button error">{{ __( 'Go Back' ) }}</a>
                    </div>
                </div>
                
                <div class="flex-col px-4 w-full">
                    <div class="flex justify-between items-center">
                        <label for="title" class="font-bold my-2 text-primary">
                            <span>Name</span>
                        </label>
                    </div>
                    <div class="info input-group flex border-2 rounded overflow-hidden">
                        <input v-model="form.name" 
                            type="text" 
                            class="flex-auto outline-none h-10 px-2">
                    </div>
                    <p class="text-xs text-primary py-1">Provide a name for the store outlet.</p>
                </div>
                <div class="flex-col px-4 w-full">
                    <div class="flex justify-between items-center">
                        <label for="title" class="font-bold my-2 text-primary">
                            <span>Location</span>
                        </label>
                    </div>
                    <div class="info input-group flex border-2 rounded overflow-hidden">
                        <input v-model="form.location" 
                            type="text" 
                            class="flex-auto outline-none h-10 px-2">
                        <button @click="submit()" class="outline-none px-4 h-10 text-white">{{ __( 'Save' ) }}</button>
                    </div>
                    <p class="text-xs text-primary py-1">Provide the store location.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { nsHooks, nsHttpClient, nsSnackBar } from '~/bootstrap';
import FormValidation from '~/libraries/form-validation';
import { __  } from '~/libraries/lang';

export default {
    props: [ 'src', 'createUrl', 'fieldClass', 'returnUrl', 'submitUrl', 'submitMethod', 'disableTabs', 'queryParams', 'popup', 'optionAttributes' ],
    data: () => {
        return {
            form: {
                name: '',
                location: '',
            },
            globallyChecked: false,
            formValidation: new FormValidation,
            rows: []
        }
    }, 
    emits: [ 'updated', 'saved' ],
    mounted() {
        // this.loadForm();
    },
    computed: {
    },
    methods: {
        __,
        appendQueryParamas( url ) {
            if ( this.queryParams === undefined ) {
                return url;
            }

            const params    =   Object.keys(this.queryParams)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(this.queryParams[key])}`)
                .join('&');

            if ( url.includes( '?' ) ) {
                return `${url}&${params}`;
            }

            return `${url}?${params}`;
        },
        submit() {
            if ( this.formValidation.validateForm( this.form ).length > 0 ) {
                return nsSnackBar.error( __( 'Unable to proceed the form is not valid' ), __( 'Close' ) )
                    .subscribe();
            }

            this.formValidation.disableForm( this.form );

            if ( this.submitUrl === undefined ) {
                return nsSnackBar.error( __( 'No submit URL was provided' ), __( 'Okay' ) )
                    .subscribe();
            }

            nsHttpClient[ this.submitMethod ? this.submitMethod.toLowerCase() : 'post' ]( this.appendQueryParamas( this.submitUrl ), this.formValidation.extractForm( this.form ) )
                .subscribe( result => {
                    if ( result.status === 'success' ) {
                        /**
                         * This wil allow any external to hook into saving process
                         */
                        if ( this.popup ) {
                            this.popupResolver( result );
                        } else {
                            if ( this.submitMethod && this.submitMethod.toLowerCase() === 'post' && this.returnUrl !== false ) {
                                return document.location   =   result.data.editUrl || this.returnUrl;
                            } else {
                                nsSnackBar.info( result.message, __( 'Okay' ), { duration: 3000 }).subscribe();
                            }

                            this.$emit( 'saved', result );
                        }
                    }
                    this.formValidation.enableForm( this.form );
                }, ( error ) => {
                    nsSnackBar.error( error.message, undefined, {
                        duration: 5000
                    }).subscribe();
                    
                    if ( error.data !== undefined ) {
                        this.formValidation.triggerError( this.form, error.data );
                    }

                    this.formValidation.enableForm( this.form );
                })
        },
    },
}
</script>