<template>
    <div class="container px-3 my-12">
        <div class="w-full lg:w-2/3 flex flex-wrap mx-auto">
            <div class="w-full lg:w-1/2 lg:pr-6 mb-12">
                <h1 class="text-4xl mb-8">Discord</h1>
                <p class="mb-8">
                    За голяма част от игрите в KitoGaming се използва Discord. За да се присъедините към KitoGaming в Discord трябва да натиснете бутона и да следвате стъпките. Препоръчително е да използвате Discord приложението за компютър, но можете да използвате и мобилните приложения.
                </p>
                <p class="mb-8">
                    <a href="https://discord.gg/9RkPAZJ" target="_blank" class="px-8 py-4 bg-discord rounded uppercase">Влез в Discord</a>
                </p>
                <p>
                    Нужно е да <nuxt-link :to="{path:'/faq', hash:'discord-push-to-talk'}" class="text-red-500 hover:text-red-700">настроите бутон за Push-to-Talk</nuxt-link> за повечето канали в Discord.
                </p>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-6">
                <iframe src="https://discordapp.com/widget?id=644487368484716551&theme=dark" width="100%" height="500" allowtransparency="true" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head () {
            return {
                title: 'Discord',
            }
        }
    }
</script>
