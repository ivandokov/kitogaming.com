<template>
    <div class="container px-3 my-12">
        <div class="w-full lg:w-2/3 mx-auto">
            <h1 class="text-4xl mb-8">Правила и напътствия</h1>

            <h2 class="text-2xl mb-8">Общи правила</h2>
            <p class="mb-8">
                1. За да играете с Кито <span class="underline">задължително</span> трябва да сте <nuxt-link to="/discord" class="text-red-500 hover:text-red-700">в Discord</nuxt-link>. Ако се присъедините към игра без да сте в Discord ще бъдете премахнати от играта.
            </p>
            <p class="mb-8">
                2. Спазвайте добрия тон на стрийма и уважавайте Кито, своя и вражеския отбор. Бъдете спортсмени.
            </p>
            <p class="mb-8">
                3. Силно препоръчително е да използвате Discord на компютъра си, а не от телефона, за да намалим изхвърлянията от сървъра.
            </p>
            <p class="mb-8">
                4. След игра, моля влезте в Discord канала "Играли с Кито", за да знаем че сте играли тази вечер с Кито и да Ви имаме предвид за случаи в които няма други хора. При нечестен опит да се прередите повторно, подлежите на санкции.
            </p>
            <p class="mb-8">
                5. При проблеми и въпроси, моля ползвайте канала #въпроси или се обърнете към един от Администраторите
            </p>
            <p class="mb-8">
                6. За да не се чувате двойно и за да не разваляте кефа на зрителите, моля направете бутона с който говорите в игра различен от този в Discord.
            </p>

            <h2 class="text-2xl mb-8">Правила за Dota 2</h2>
            <p class="mb-8">
                За да играете Dota 2 с Кито, влизте в един от следните канали в Понеделник и Петък от 20:00 и чакайте да бъдете разпределени в отбор:<br>
                "Dota 2 vs The World" канала е за хора, които искат да играят Ranked/Unranked игра с Кито срещу непознати хора.<br>
                "Dota 2 Lobby" канала е за хора, които искат да иргаят с Кито и още 8 човека от стрийма в лоби.
                "Dota 2 Начинаещи" канала е за начинаещи <span class="underline">само</span> когато се организират игри с начинаещи.<br>
                Задължително подгответе Dota 2 ID-то си, защото ще Ви бъде искано от Кито.<br>
                Можете да го видите като <nuxt-link :to="{path:'/faq', hash:'#dota2id'}" class="text-red-500 hover:text-red-700">влезете в играта, натиснете портрета си и видите ID-то си под името</nuxt-link>.
                Задължително трябва да изключите опцията <nuxt-link :to="{path:'/faq', hash:'#dota2party-invite'}" class="text-red-500 hover:text-red-700">"Block party invites from non-friends"</nuxt-link>.
            </p>

            <h2 class="text-2xl mb-8">Правила за Counter-Strike: Global Offensive</h2>
            <p class="mb-8">
                За да играете Counter-Strike: Global Offensive с Кито, влезте в Discord канала "CS:GO" и чакайте да бъдете разпределени в отбор. Според настроението на Кито, може да се играе Competitive (Кито и още четирима) или в частен сървър (всички на куп).<br>
                Нужно е да включите конзолата от настройките. <nuxt-link :to="{path:'/faq', hash:'#csgo-console'}" class="text-red-500 hover:text-red-700">Кликнете зъбчатото колело в ляво и в раздел "Game" нагласете "Enable Developer Console (~)" на "Yes"</nuxt-link>.<br>
                При наличен IP адрес на сървър във Facebook или Discord чатовете, <nuxt-link :to="{path:'/faq', hash:'#csgo-connect'}" class="text-red-500 hover:text-red-700">включете конзолата с бутона tilde (~) до "1" (под ESC) и напишете команда "connect" (без кавички) последвана от IP адреса</nuxt-link>.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        head () {
            return {
                title: 'Играй с Кито',
            }
        }
    }
</script>
