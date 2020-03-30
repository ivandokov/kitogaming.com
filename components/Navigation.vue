<template>
    <nav class="container flex flex-wrap lg:flex-no-wrap justify-between items-center py-10 uppercase">
        <div class="order-2 lg:order-1 w-full sm:w-1/2 lg:w-1/3 flex justify-around items-center">
            <nuxt-link to="/schedule" class="hover:text-red-700">
                Програма
            </nuxt-link>
            <nuxt-link to="/play-with-kito" class="hover:text-red-700">
                Играй с Кито
            </nuxt-link>
            <nuxt-link to="/discord" class="hover:text-red-700">
                Discord
            </nuxt-link>
        </div>
        <div class="order-1 lg:order-2 lg:order-2 w-full lg:w-1/3 flex justify-center items-center px-4 mb-4 lg:mb-0">
            <nuxt-link to="/">
                <img width="300px" src="/logo.png" alt="Kito Gaming">
            </nuxt-link>
        </div>
        <div class="order-3 w-full sm:w-1/2 lg:w-1/3 flex justify-around items-center">
            <nuxt-link to="/faq" class="hover:text-red-700">
                ЧЗВ
            </nuxt-link>
            <nuxt-link to="/dota2-tournament-2020-03" class="hover:text-red-700">
                Dota 2 Турнир
            </nuxt-link>
            <nuxt-link to="/friday-five-sharp" class="hover:text-red-700">
                Петък точно в пет
            </nuxt-link>
        </div>
    </nav>
</template>
