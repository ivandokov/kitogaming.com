<template>
    <div class="w-full h-full flex flex-col justify-between relative">
        <div id="smoke" class="fixed z-0 top-0 left-0 w-screen h-screen"></div>
        <div class="relative z-10 w-screen h-screen">
            <header class="bg-red-950-50">
                <Navigation/>
            </header>

            <main class="relative" style="min-height: 66vh">
                <nuxt/>
            </main>

            <Footer/>
        </div>
    </div>
</template>

<script>
    import Navigation from '~/components/Navigation'
    import Footer from '~/components/Footer'
    import * as THREE from 'three'

    export default {
        components: {
            Navigation,
            Footer,
        },
        mounted() {
            // https://gist.github.com/idettman/2e13da29aea4b3f4063078624054b3bd
            let camera, scene, renderer, geometry, material, mesh, clock, cubeSineDriver, light, smokeMaterial,
                smokeGeo,
                smokeParticles, delta

            clock = new THREE.Clock()

            renderer = new THREE.WebGLRenderer({alpha: true})
            renderer.setSize(window.innerWidth, window.innerHeight)
            window.addEventListener('resize', () => renderer.setSize(window.innerWidth, window.innerHeight))
            renderer.setClearColor(0x000000, 0)

            scene = new THREE.Scene()

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
            camera.position.z = 1000
            scene.add(camera)

            geometry = new THREE.CubeGeometry(200, 200, 200)
            material = new THREE.MeshLambertMaterial({color: 0xFFFFFF, wireframe: false})
            mesh = new THREE.Mesh(geometry, material)
            cubeSineDriver = 0

            light = new THREE.DirectionalLight(0xcc0000, 1)
            light.position.set(0, 0, 1)
            scene.add(light)

            smokeMaterial = new THREE.MeshLambertMaterial({
                color: 0xFFFFFF,
                opacity: 0.2,
                map: new THREE.TextureLoader().load('/smoke.png'),
                transparent: true
            })
            smokeGeo = new THREE.PlaneGeometry(300, 300)
            smokeParticles = []

            for (let p = 0; p < 150; p++) {
                var particle = new THREE.Mesh(smokeGeo, smokeMaterial)
                particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100)
                particle.rotation.z = Math.random() * 360
                scene.add(particle)
                smokeParticles.push(particle)
            }

            document.querySelector('#smoke').innerHTML = ''
            document.querySelector('#smoke').appendChild(renderer.domElement)

            animate()

            function animate() {
                delta = clock.getDelta()
                requestAnimationFrame(animate)
                evolveSmoke()
                render()
            }

            function evolveSmoke() {
                var sp = smokeParticles.length
                while (sp--) {
                    smokeParticles[sp].rotation.z += (delta * 0.2)
                }
            }

            function render() {
                mesh.rotation.x += 0.005
                mesh.rotation.y += 0.01
                cubeSineDriver += .01
                mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500)
                renderer.render(scene, camera)
            }
        }
    }
</script>
