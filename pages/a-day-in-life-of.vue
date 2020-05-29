<template>
    <div class="container px-3 my-12">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-4xl">A day in life of</h1>

            <a href="https://www.youtube.com/channel/UCqDkrKkZ2r2BHV3a0nIusIw" target="_blank" class="px-8 py-4 bg-youtube rounded uppercase">YouTube</a>
        </div>

        <div class="video-wrapper mb-12">
            <iframe class="video" src="https://www.youtube.com/embed/videoseries?list=PLoGRyDrGkOu7uDbGxCvtC1cTulAkQttmP" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        head () {
            return {
                title: 'A day in life of',
            }
        }
    }
</script>
