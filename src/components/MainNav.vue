<script setup>
    import Link from './Link.vue';
    import LinkNavegacion from './LinkNavegacion.vue'
</script>

<template>
    <header class="px-10 py-5 flex flex-row-reverse bg-yellow-100 top-0 w-full z-10">

        <nav>
            <Link
                to="registro"
            >Registrarse
        
            </Link>
        </nav>

        <nav>
            <Link
                to="sesion"
            >Acceder
        
            </Link>
        </nav>

        
    </header>

    <nav class="px-10 py-2 flex flex-row-reverse bg-pink-300">

        <LinkNavegacion
            to="contacto"
            class="text-lg"
            >Contactanos
        
        </LinkNavegacion>

        <LinkNavegacion
            to="blog"
            class="text-lg"
            >Blog
        
        </LinkNavegacion>

        <LinkNavegacion
            to="sucursales"
            class="text-lg"
            >Sucursales
        
        </LinkNavegacion>

        <LinkNavegacion
            to="catalogo"
            class="text-lg"
            >Catalogo
        
        </LinkNavegacion>
    </nav>
</template>

