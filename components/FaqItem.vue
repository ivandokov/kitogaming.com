<template>
    <div class="flex flex-wrap mb-4">
        <div @click="opened = !opened"
             :class="{'text-red-700': open || opened}"
             class="w-full text-2xl select-none hover:text-red-700 cursor-pointer"
        >{{ question }}</div>
        <div v-if="opened || open" class="pt-5"><slot/></div>
    </div>
</template>

<script>
    export default {
        props: {
            question: String,
            open: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                opened: false
            }
        }
    }
</script>
