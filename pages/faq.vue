<template>
    <div class="container px-3 my-12">
        <div class="w-full lg:w-2/3 mx-auto">
            <h1 class="text-4xl mb-8">Често задавани въпроси</h1>

            <FaqItem id="discord-push-to-talk"
                     :open="discordpushtotalk"
                     class="mb-10"
                     question="Как да си настроя Push-to-Talk бутона в Discord">
                <p class="mb-8">
                    В някои канали в Discord се изисква да имате настроен бутон с който да активирате микрофона си (Push-to-Talk). Това можете да направите от настройките на Discord. Ако играта, която играете също има възможност за аудио разговор и се изисква бутон за активиране на микрофона настройте бутона да е различен от този в Discord, защото ще се чувате два пъти, което не е приятно за зрителите.
                </p>
                <img src="/discord-1.jpg" alt="discord settings" class="rounded shadow-2xl mb-4">
                <img src="/discord-2.jpg" alt="discord settings" class="rounded shadow-2xl">
            </FaqItem>

            <FaqItem id="dota2id"
                     :open="dota2id"
                     class="mb-10"
                     question="Как да намеря моето ID в Dota 2">
                <p class="mb-8">
                    Можете да го видите като влезете в играта, натиснете портрета си и видите ID-то си под името.
                </p>
                <img src="/dota2-id.jpg" alt="dota2-id" class="rounded shadow-2xl">
            </FaqItem>

            <FaqItem id="dota2party-invite"
                     :open="dota2partyinvite"
                     class="mb-10"
                     question="Как да махна блокирането да бъда поканен в партия от непознати играчи?">
                <p class="mb-8">
                    За да можете да бъдете поканени от Кито, трябва да позволите покани от непознати хора. Това става когато натиснете зъбчатото колело в горния ляв ъгъл на играта, натиснете Options, Advanced Options и изключите "Block party invites from non-friends"
                </p>
                <img src="/dota2-options-1.jpg" alt="dota2 party invite" class="rounded shadow-2xl mb-4">
                <img src="/dota2-options-2.jpg" alt="dota2 party invite" class="rounded shadow-2xl mb-4">
                <img src="/dota2-options-3.jpg" alt="dota2 party invite" class="rounded shadow-2xl">
            </FaqItem>

            <FaqItem id="csgo-console"
                     :open="csgoconsole"
                     class="mb-10"
                     question="Как да активирам конзолата в Counter-Strike: Global Offensive?">
                <p class="mb-8">
                    Кликнете зъбчатото колело в ляво и в раздел "Game" нагласете "Enable Developer Console (~)" на "Yes"
                </p>
                <img src="/cs-enable-console.jpg" alt="cs enable console" class="rounded shadow-2xl">
            </FaqItem>

            <FaqItem id="csgo-connect"
                     :open="csgoconnect"
                     class="mb-10"
                     question="Как да се свържа с Counter-Strike: Global Offensive сървър?">
                <p class="mb-8">
                    Включете конзолата с бутона tilde (~) в ляво от 1 / под ESC и напишете команда "connect" (без кавички) последвана от IP адреса
                </p>
                <img src="/cs-connect.jpg" alt="cs connect" class="rounded shadow-2xl">
            </FaqItem>

            <FaqItem id="suggest-game"
                     :open="suggestgame"
                     class="mb-10"
                     question="Как да предложа игра на Кито">
                <p>
                    Можете да предложите игра, която Кито да играе в стрийма като напишете предложението си в Discord в канала #предложи-игра
                </p>
            </FaqItem>
        </div>
    </div>
</template>

<script>
    import FaqItem from '~/components/FaqItem'

    export default {
        components: {
            FaqItem,
        },
        data() {
            return {
                discordpushtotalk: false,
                dota2id: false,
                dota2partyinvite: false,
                csgoconsole: false,
                csgoconnect: false,
                suggestgame: false,
            }
        },
        mounted() {
            const hash = window.location.hash.substr(1).replace(/-/g, '')
            this[hash] = true
        },
        head () {
            return {
                title: 'Често задавани въпроси',
            }
        }
    }
</script>
