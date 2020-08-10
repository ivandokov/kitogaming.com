<template>
    <div class="container px-3 mt-12">
        <div class="flex flex-wrap justify-center mb-8">
            <a href="https://www.facebook.com/todorov.kitodar/" target="_blank" class="px-8 py-4 bg-facebook rounded uppercase mb-4 mr-4">Facebook</a>
            <a href="https://www.instagram.com/kitodar.fans/" target="_blank" class="px-8 py-4 bg-instagram rounded uppercase mb-4 mr-4">Instagram</a>
            <a href="https://www.youtube.com/channel/UCqDkrKkZ2r2BHV3a0nIusIw" target="_blank" class="px-8 py-4 bg-youtube rounded uppercase mb-4 mr-4">YouTube</a>
            <nuxt-link to="/discord" target="_blank" class="px-8 py-4 bg-discord rounded uppercase mb-4">Discord</nuxt-link>
        </div>
        <div class="flex flex-wrap justify-center">
            <div class="video-wrapper">
                <iframe class="video" :src="src" width="500" height="280" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
            </div>
        </div>
        <div class="flex flex-wrap justify-center opacity-50 mt-12">
            kitogaming.com е фен сайт на KitoGaming и Китодар Тодоров и не е притежаван или управляван от KitoGaming
        </div>
    </div>
</template>

<script>
    export default {
        head () {
            return {
                title: 'KitoGaming',
                titleTemplate: null,
            }
        },
        data() {
            return {
                videoId: '926312347890130'
            }
        },
        computed: {
            src() {
                return `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftodorov.kitodar%2Fvideos%2F${this.videoId}%2F&width=1520&height=860&show_text=false`
            }
        }
    }
</script>
